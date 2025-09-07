  return resp.text();
function extractLinks(html, base) {
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(
</a>)
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
</a>
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),