# Static export on the existing ziontechgroup Worker

The Next export contains more paths than a Workers Free asset upload accepts.
`wrangler.jsonc` adds the missing entry point and ASSETS binding. Wrangler's
custom build packages the already validated `out/`; it does not compile Next a
second time. Keep the dashboard build command `npm run build` and its existing
branch upload command `npx wrangler versions upload`.

The canonical Discovery questionnaire is `public/discovery/index.html`, the same
source used by GitHub Pages. The duplicate React `/discovery` page previously
overwrote it during Next export with a contact-only page. That duplicate is removed;
the public route and questionnaire remain. A release gate checks byte equality
between the source questionnaire and `out/discovery/index.html` before packaging.

HTML and Next text/RSC files are stored as individually compressed gzip members
in binary assets of at most 1 MiB. Sharded indices map the original paths to
offsets. Each member is decompressed and compared with its source during the
build. Nothing is removed from `out/`. Other assets use hardlinks where supported.
The legacy catalog also produces a JavaScript chunk larger than 25 MiB. Such JS
files (bounded to 64 MiB uncompressed) use a separate streaming gzip asset, with
source/decompressed SHA-256 and length equality checked before upload. Its URL,
MIME type and executable bytes stay unchanged. The Worker streams gzip or a
bounded decompression stream with backpressure, never a whole-file JS buffer.
The packer fails before upload if an uploaded file exceeds 25 MiB, an index exceeds 512 KiB,
or the upload exceeds 20,000 assets. Failed or existing package directories are
not silently overwritten; move them aside before a deliberate local rebuild.

The Worker reads at most one index and one bounded binary pack for a successful
packed request. It serves precompressed gzip without recompression and respects
the original client Accept-Encoding. Buffered identity responses decode at most
4 MiB; exceptional large JS responses stream and validate their exact lengths.
It supports HEAD, conditional ETags, folder aliases and custom 404; Range requests
receive the complete 200 response, as with native Workers static assets.
Missing storage detected before headers returns an uncached 503; corruption
detected during a large-file stream aborts the response. Internal package paths are not
public routes. Ordinary assets are served directly without Worker invocation.

The old public `_redirects` and `_headers` are Netlify controls, inactive on the
existing GitHub Pages origin. They are retained in the source export but are not
activated here: some redirect existing pages away. The generated package adds
short cache lifetimes and immutable Next chunks instead. No domain or DNS change
is included. The existing Worker compatibility date is retained.

## Validation and release

Use Node 22 (the repository `.nvmrc`). Install the observed deploy CLI in an
isolated directory: `npm install --prefix /tmp/zion-worker-test wrangler@4.161.0`.
Then run `WORKER_TEST_MODULES=/tmp/zion-worker-test node --test scripts/worker-assets.test.mjs`.
The tests use that CLI's actual workerd/Miniflare dependencies and raw HTTP for
compression checks. Existing Next build, postbuild, lint, types and CI remain.

After a full cloud build, require the `worker-assets-packaged` report and a
successful version upload. Test the uploaded version before promoting it in the
existing Worker. Revert by redeploying its prior version; this config changes no
domain routing. Generated packages/reports are ignored by Git.

## Free plan tradeoff

Packed page and RSC requests invoke the Worker and count toward its Free daily
request and CPU allowances. Direct static files remain free/unlimited. Packaging
solves the per-upload file count; it does not increase any request/CPU quota.
Measure production CPU before moving a production domain; local runtime timing
does not prove compliance with the 10 ms Free CPU limit. No paid storage or plan
upgrade is provisioned by this change.

Sources: [asset limitations](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/),
[Response encoding](https://developers.cloudflare.com/workers/runtime-apis/response/),
[original client encoding](https://developers.cloudflare.com/workers/runtime-apis/request/).
