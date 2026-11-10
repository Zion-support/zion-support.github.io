# Bounded Webpack aggregate diagnostics

This extends the opt-in Next memory observer for the pinned Next 16.4.5 build.
It is a diagnostic, not a memory optimization or a successful-build claim.
The build heap, deadline, worker count, parallelism, export and performance
requirements are unchanged.

The preload validates exact Next, Webpack and source-wrapper hashes. External
Webpack/Rspack modes are rejected. At `run-webpack-compiler` it uses Webpack's
already-loaded export and wraps `Compiler.newCompilation`, preserving its return
value and thrown error. It does not replace module resolution, load Webpack early,
or change application config. Observation failures do not change build outcomes.

Each compilation emits a start record, one record per 2,048 newly observed modules,
and a finish-modules record. A WeakSet deduplicates modules without retaining them.
No global graph walk is performed per module. Loader lists, nested block traversal,
and source-map content arrays are bounded; truncation counters expose omitted work.

## Interpreting the records

- Module and source totals are **cumulative observations at first completion**,
  not a census of currently retained state. Rebuilds and later source replacement
  do not update those totals. `builtEvents` and `restoredEvents` do not prove that
  modules are error-free; Webpack can attach diagnostics without `failedModule`.
- Source strings are UTF-16 code units, not V8 heap bytes. Existing Buffers are
  counted in bytes. Equal string values and identical Buffer references are
  deduplicated only within a wrapper's measured field group. Sharing across
  modules, wrappers, source maps or interning caches is not deduplicated.
- Only existing own data fields are inspected. No `source`, `map`, `buffer`,
  `size`, JSON serialization of sources, AST traversal or heap snapshot is called.
  CachedSource map/hash caches and unknown source wrappers are not measured.
- `appSources` means sources under the compiler context's `app/`, matching this
  repository. `appEntries` means a recognized next-app-loader path. These module
  categories are not route counts. Runtime modules added later are not represented
  by completed source-module observations.
- Compilation/cache cardinalities and existing filesystem snapshot counters are
  read at milestones. Unsupported containers, including WeakMaps and enclosed
  plugin cache Maps, are unknown (`null`), not zero. Snapshot reference counts are
  not unique filesystem inventories or memory sizes. Truncation counts are
  incidents, not unique modules.
- Process RSS/heap/external values are for the same CLI PID at the record time,
  not whole-process-tree or absolute peak measurements. Milestone timing includes
  observation overhead. GC may occur between records.

Output is restricted to fixed labels and numeric counts. It excludes route names,
source text, module identifiers, environment values, errors and raw traces. Use
the existing build log artifact; never add `.next/trace`, heap dumps or source
snapshots to the artifact list.

Run `node scripts/ci/test-webpack-aggregates.cjs` and the existing observer suite
under Node 22. Tests cover source non-materialization, privacy, bounded traversal,
20,480 synthetic modules, original compiler errors, real pinned Webpack output
equivalence, a build with syntax errors, and preload activation before compilation.
Tiny fixtures do not validate the full site's build, static export or performance.
