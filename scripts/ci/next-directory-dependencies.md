# Bounded Next loader snapshot optimization

This CI-only installer targets Next 16.4.5 after the existing adjacent-slot patch. It accepts exact source hashes, parses the input/output, uses descriptor-bound no-follow reads, and installs by atomic rename with identity/content rechecks. Run serially in a trusted dependency directory. It is not a compare-and-swap against hostile concurrent writers. Other versions, unrecognized/partially patched source, symlinks, and write failures fail closed. Reinstalling the exact final source is a no-op. Apply the older adjacent-slot installer first, never after this patch.

## Observed scaling term

The real app loader enumerates extension and metadata candidates even when absent. For 128 static page entries it registered 148,864 missing-file references (1,163 per entry), while already registering three directory contexts per entry. These references become Webpack missing-existence snapshots and filesystem cache entries. String-unit counts do not measure unique V8 storage.

A bounded 512-entry real Webpack comparison used the existing route files and generated loader code, with all application imports externalized. Both variants produced byte-identical emitted output. The guarded candidate reduced unique missing paths from 199,436 to 522 and filesystem timestamp cache entries from 234,920 to 36,006, with the same 514 directory contexts. Sampled peak RSS was approximately 892 MB versus 668 MB in that run. Wall times varied significantly between runs and are not a controlled full-build speed estimate. No routes, source modules, exports, budgets, timeouts, parallelism, heap settings, or gates were removed or relaxed.

This establishes one avoidable metadata/snapshot scaling term. It does not quantify all production memory retention, prove the original OOM resolved, or establish a complete build/export or performance-audit pass.

## Eligibility and correctness

The change is restricted to known static app paths, normal production Webpack compilation, static export, known page extensions, and no DeferredEntriesPlugin. Next production entry queries omit isDev; undefined is allowed only with the other production/compiler/export guards. True, string, null, and other values retain the original behavior. Development, dynamic/encoded/unknown paths, missing compilation metadata, and unsupported configurations use the original per-file registrations.

Existing file candidates always retain their original missing dependency. Absent candidates are held only for the loader invocation. A compilation-scoped cache shares directory-scan promises, not dependency registrations. Directory and ancestor fingerprints use bigint stat fields and reject symlinks, special entries, unavailable fingerprint data, and filesystem errors. Directory scans reject every symlink entry, including dangling links. Before loader completion, each assessment is revalidated. An unchanged ordinary directory receives a context dependency, covering additions and removals. Otherwise every skipped original missing dependency is restored. Late calls after finalization also use the original registration. Loader success, error, and early-return paths finalize through finally.

Directory contexts alone are insufficient for external file-symlink target deletion or creation. Explicit symlink fallback is essential. The tests include these negative cases, not only generated-source equality.

The fingerprint guard is appropriate for a stable production checkout. It is not an atomic filesystem snapshot, does not defend against adversarial concurrent writers or inaccurate timestamp semantics, and does not repair Next's pre-existing compilation-scoped file-list cache. No directory eligibility is reused across compilations. A broader directory dependency may cause extra rebuilds, never intentionally fewer required rebuilds.

## Hosted activation check

The initial trial 2c9798f1 passed its tests but its strict explicit-false isDev guard did not match Next's omitted production option. It remained on the original dependency path and timed out at 300 seconds. The query-based activation assertion now covers that contract. With the existing memory-observer environment enabled, the loader emits the fixed NEXT_DIRECTORY_CONTEXT_ACTIVE marker once per compilation after an actual successful conversion. It contains no paths, sources, or identifiers. Absence of that marker must not be interpreted as optimization evidence.

## Validation

Run before installation, after applying the adjacent-slot patch:

- test-next-directory-dependencies.cjs: exact-hash installer safety plus 119 actual-loader output/error/guard comparisons, dependency coverage, existing candidates, and symlink fallback.
- test-next-directory-eligibility.cjs: 16 eligibility/cache/failure cases, including 128 concurrent consumers without repeated scans.
- test-next-directory-tokens.cjs: 9 batching/finalization cases, including restoring all 1,163 skipped paths after a mutation and preserving an original loader error.
- test-next-directory-snapshots.cjs: 48 actual Webpack snapshot comparisons across timestamp, hash, and combined modes. Every baseline invalidation must also invalidate the candidate.
- test-next-directory-cache.cjs: uses the actual getAppEntry query serialization with omitted production isDev and asserts more than 90% missing-path reduction, then 12 sequential real-loader memory-cache rebuilds for each variant. Unchanged builds reuse modules; layout extension precedence, metadata, symlink-target deletion/recreation, and link removal match baseline. The dangling-link case preserves the existing Next build error and subsequent recovery.

The tests externalize application imports and do not prove disk-cache persistence or full application compilation. Existing entry, adjacent-slot, observer, metric, and workflow contract tests remain required. The actual CI build retains the unchanged 300-second deadline and must produce a nonempty export before server startup and audit.
