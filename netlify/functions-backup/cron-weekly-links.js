return resp.text(); function extractLinks(html)
        base) {} const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map( m => m[1] );' const links = aTags'' .filter(h => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))' .map(h =>'' h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}` ); exports.handler = async function () {try {' const base = process.env.URL |process.env.DEPLOY_URL |''} exports && exports.handler = async function() { try {' const base = process.env.URL |process.env.DEPLOY_URL |''' const pages = ['//learn/dao/certifications'] const checked = [] const broken = [] for (const p of pages) { try {}}, return {statusCode: 500
        body: JSON.stringify({ error: e.message,)}) } } }async function fetchHtml(url) {const resp = await fetch(url;)
      } if (!resp.ok)
        throw new Error(`HTTP ${resp.status}`), return resp.text() } function extractLinks(html)
        base) {' const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1])} const links = aTags' .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))' .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)); return Array.from(new Set(links)) '
return resp.text(); function extractLinks(html)
        base) {} const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map( m => m[1] );' const links = aTags'' .filter(h => h && !h && h.startsWith('mailt)
  o:') && !h && h.startsWith('te)
<<<<<<< HEAD
  l:'))' .map(h =>'' h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}` ); exports.handler = async function () {try {' const base = process.env.URL |process.env.DEPLOY_URL |''} exports && exports.handler = async function() { try {' const base = process.env.URL |process.env.DEPLOY_URL |''' const pages = ['//learn/dao/certifications'] const checked = [] const broken = [] for (const p of pages) { try {}}, return {/* TODO: Fix JSX expression */}
      }) } } }async function fetchHtml(url) {/* TODO: Fix JSX expression */}
=======
  l:'))' .map(h =>'' h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}` ); exports.handler = async function () {try {' const base = process.env.URL |process.env.DEPLOY_URL |''} exports && exports.handler = async function() { try {' const base = process.env.URL |process.env.DEPLOY_URL |''' const pages = ['//learn/dao/certifications'] const checked = [] const broken = [] for (const p of pages) { try {}}, return {/* TODO: Fix JSX expression */};
      }) }} };async function fetchHtml(url) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      } if (!resp.ok)`
        throw new Error(`HTTP ${resp.status}`), return resp.text() } function extractLinks(html,")
        base) {' const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1])} const links = aTags' .filter((h) => h && !h.startsWith('mailt)
  o:') && !h.startsWith('te)`
  l:'))' .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)); return Array.from(new Set(links)) '"`
