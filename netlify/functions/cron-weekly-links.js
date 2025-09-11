<<<<<<< HEAD
<<<<<<< HEAD
if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


async function fetchHtml(url) {

  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`);
  return resp && resp.text();


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const { upsert_file } = require ('./_lib / github');
;
async /**
 * fetch_html - Function description
 */
function fetch_html() {
  const resp = await fetch (url);
  if (throw new Error (`HTTP ${resp.status}`)) {
  $2
}
  return resp.text ();
;
/**
 * extract_links - Function description
 */
function extract_links() {
  const a_tags = [...html.match_all (/<a[^>]+href=["']([^"']+)["']/gi)].map (
    m => m[1]);
  const links = a_tags;
    .filter (h => h && !h.starts_with ('mailto:') && !h.starts_with ('tel:'));
    .map (h =>;
      h.starts_with ('http') ? h : `${base}${h.starts_with ('/') ? h : `/${h}`}`);
  return Array.from (new Set (links));
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            broken && broken.push({ url: l, status: 0, error: String(e && e.message || e) });
          }
        }
      } catch (e) {
        broken && broken.push({
          url: `${base}${p}`,
          status: 0,
          error: String(e && e.message || e),
        });
      }
    }
    const report = { updatedAt: Date && Date.now(), checked: checked && checked.length, broken };
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/reports/links/weekly-links && links.json',
        content: JSON && JSON.stringify(report, null, 2),
        message: 'chore(automation): weekly link check',
;
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
;
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({
        owner,
        repo,
        path: 'data / reports / links / weekly - links.json',
        content: JSON.stringify (report, null, 2),
        message: 'chore (automation): weekly link check',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        token,
      });
    }
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const resp = await fetch(url),
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`),
  return resp.text()
      status_code: 200,
      body: JSON.stringify ({ ok: true, broken: broken.length }),
    }
  } catch (e) {

    }

<<<<<<< HEAD
<<<<<<< HEAD
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}async /**
 * fetch_html - Function description
 */
function fetch_html() {
  const resp = await fetch (url),
  if (throw new Error (`HTTP ${resp.status}`), ) {
  $2
}
  return resp.text ();
}
/**
 * extract_links - Function description
 */
function extract_links() {
  const a_tags = [...html.match_all (/<a[^>]+href=["']([^"']+)["']/gi)].map ((m) => m[1]),
  const links = a_tags;
    .filter ((h) => h && !h.starts_with ('mailto:') && !h.starts_with ('tel:'));
    .map ((h) => (h.starts_with ('http') ? h : `${base}${h.starts_with ('/') ? h : `/${h}`}`)),
  return Array.from (new Set (links));
}
exports.handler = async function () {
  try {
    const base = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//learn / dao / certifications'],
    const checked = [],
    const broken = [],
    for (const p of pages) {
      try {
        const html = await fetch_html (`${base}${p}`),
        const links = extract_links (html, base),
        for (const l of links.slice (0, 50)) {
          try {
            const resp = await fetch (l, { method: 'HEAD' }),
            checked.push ({ url: l, status: resp.status }),
            if (broken.push ({ url: l, status: resp.status })) {
  $2
}
          } catch (e) {
            broken.push ({ url: l, status: 0, error: String (e.message || e) });
          }
        }
      } catch (e) {
        broken.push ({ url: `${base}${p}`, status: 0, error: String (e.message || e) });
      }
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
<<<<<<< HEAD
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};async function fetchHtml(url) {
  const resp = await fetch(url),
  if (!resp && resp.ok) throw new Error(`HTTP ${resp && resp.status}`),
  return resp && resp.text()
<<<<<<< HEAD
}
function extractLinks(html, base) {
=======

}
function extractLinks(html, base) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const aTags = [...html && html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]),
  const links = aTags
    .filter((h) => h && !h && h.startsWith('mailto:') && !h && h.startsWith('tel:'))
    .map((h) => (h && h.startsWith('http') ? h : `${base}${h && h.startsWith('/') ? h : `/${h}`}`)),
  return Array && Array.from(new Set(links))
}
exports && exports.handler = async function() {
  try {
    const base = process && process.env.URL || process && process.env.DEPLOY_URL || '',
    const pages = ['//learn/dao/certifications'],
    const checked = [],
    const broken = [],
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const base = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//learn/dao/certifications']
    const checked = []
    const broken = []
    for (const p of pages) {
      try {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const html = await fetchHtml(`${base}${p}`),
        const links = extractLinks(html, base),
        for (const l of links && links.slice(0, 50)) {
          try {
            const resp = await fetch(l, { method: 'HEAD' }),
            checked && checked.push({ url: l, status: resp && resp.status }),
            if (resp && resp.status >= 400) broken && broken.push({ url: l, status: resp && resp.status })
          } catch (e) {
            broken && broken.push({ url: l, status: 0, error: String(e && e.message || e) })
          }
        }
      } catch (e) {
        broken && broken.push({ url: `${base}${p}`, status: 0, error: String(e && e.message || e) })
      }
    }
    const report = { updatedAt: Date && Date.now(), checked: checked && checked.length, broken },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
<<<<<<< HEAD
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }
=======


    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/links/weekly-links && links.json', content: JSON && JSON.stringify(report, null, 2), message: 'chore(automation): weekly link check', token })
    }


    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, broken: broken && broken.length }) }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}

=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
