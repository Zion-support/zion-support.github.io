<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


async function fetchHtml(url) {

  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return resp.text();
function extractLinks(html, base) {
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(
    m => m[1]
  );
  const links = aTags
    .filter(h => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))
    .map(h =>
      h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}`
    );
exports.handler = async function () {
  try {
    const base = process.env.URL |process.env.DEPLOY_URL |'';
  return Array && Array.from(new Set(links));
exports && exports.handler = async function () {
  try {
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '';
    const pages = ['/', '/learn', '/dao', '/certifications'];
    const checked = [];
    const broken = [];
    ${p}`);
        const links = extract_links (html, base);
        for (const l of links.slice (0, 50)) {
          try {
            const resp = await fetch (l, { method: 'HEAD' });
            checked.push ({ url: l, status: resp.status });
            if (
              broken.push ({ url: l, status: resp.status })) {
  $2
}
          } catch (e) {
            broken.push ({ url: l, status: 0, error: String (e.message || e) });
          }
        }
      } catch (e) {
        broken.push ({
          url: `${base}${p}`,
          status: 0,
          error: String (e.message || e),
        });
      }
    }
    const report = { updated_at: Date.now (), checked: checked.length, broken }
;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
        token,
      });
    }
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======

  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
      status_code: 200,
      body: JSON.stringify ({ ok: true, broken: broken.length }),
    }
  } catch (e) {

=======
    }

    const report = { updated_at: Date.now (), checked: checked.length, broken },
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({ owner, repo, path: 'data / reports / links / weekly - links.json', content: JSON.stringify (report, null, 2), message: 'chore (automation): weekly link check', token });
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, broken: broken.length }) }

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
<<<<<<< HEAD
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`),
  return resp && resp.text()

=======
const { upsertFile } = require('./_lib/github');
async function fetchHtml(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
};
  return resp.text()
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
}
function extractLinks(html, base) {

  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))
    .map((h) => (h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}`)),
  return Array && Array.from(new Set(links))
}
exports && exports.handler = async function() {
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const base = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//learn/dao/certifications']
    const checked = []
    const broken = []
    for (const p of pages) {
      try {
<<<<<<< HEAD
<<<<<<< HEAD
=======

        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links && links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked && checked.push({ url: l, status: resp && resp.status }),
            if (resp && resp.status >= 400) broken && broken.push({ url: l, status: resp && resp.status })
          } catch (e) {
            broken && broken.push({ url: l, status: 0, error: String(e && e.message || e) })
=======
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'];
    const checked = [];
    const broken = [];
    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`);
        const links = extractLinks(html, base);
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' });
            checked.push({ url: l, status: resp.status });
            if (} catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          }
        }
      } catch (e) {
        broken && broken.push({ url: `${base}${p}`, status: 0, error: String(e && e.message || e) })
      }
    }
<<<<<<< HEAD
    const report = { updatedAt: Date && Date.now(), checked: checked && checked.length, broken },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,


    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }


    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
=======
},
},
=======

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
}

function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

exports.handler = async function() {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked.push({ url: l, status: resp.status }),
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
}

function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

exports.handler = async function() {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked.push({ url: l, status: resp.status }),
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

=======

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER);
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
<<<<<<< HEAD
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
},},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
}

function extractLinks(html, base) {
  const aTags = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h.startsWith('mailto:') && !h.startsWith('tel:'))
    .map((h) => (h.startsWith('http') ? h : `${base}${h.startsWith('/') ? h : `/${h}`}`)),
  return Array.from(new Set(links))
}

exports.handler = async function() {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],

    for (const p of pages) {
      try {
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked.push({ url: l, status: resp.status }),
            if (resp.status >= 400) broken.push({ url: l, status: resp.status })
          } catch (e) {
            broken.push({ url: l, status: 0, error: String(e.message || e) })
          }
        }
      } catch (e) {
        broken.push({ url: `${base}${p}`, status: 0, error: String(e.message || e) })
      }
    }

    const report = { updatedAt: Date.now(), checked: checked.length, broken },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
