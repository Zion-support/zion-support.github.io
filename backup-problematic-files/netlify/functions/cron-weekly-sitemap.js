<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const { upsertFile } = require('./_lib/github')exports.handler = async function () {try {const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';'
    }
    const pages = [;
      '/';'
      '/about';'
      '/learn';'
      '/dao';'
      '/certifications';'
      '/blog';'
      '/services';'
      '/talent';'
=======
:netlify/functions/cron-weekly-sitemap.js
:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
const { upsertFile } = require('./_lib/github'),;
exports.handler = async function() {;
  try {;
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',;
    const pages = ['//about/learn/dao/certifications/blog/services/talent'],;
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +;
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +;
      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +;
      `</urlset>`,;
    const owner = process.env.GITHUB_OWNER,;
    const repo = process.env.GITHUB_REPO,;
    const token = process.env.GITHUB_TOKEN,;
    if (owner && repo && token) {;
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token });
    }
;
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {;
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},;
:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
const { upsertFile } = require('./_lib/github');
exports.handler = async function () {
  try {
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';
    const pages = [
      '/'
      '/about'
      '/learn'
      '/dao'
      '/certifications'
      '/blog'
      '/services'
      '/talent'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    ];
    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      pages.map(p => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      `</urlset>`;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
<<<<<<< HEAD
=======
    if (owner && repo && token) {await upsertFile({owner;
        }
        repo;
        "path": 'public/sitemap-autogen.xml';'
        "content": xml;
        "message": 'chore(automation): weekly sitemap refresh';'
        token;
      })}
    return {"statusCode": 200;
      }
      "body": JSON.stringify({ "ok": true, "pages": pages.length })}
  } catch (e) {return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
  }
}try {const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';'
    }
    const pages = ['//about/learn/dao/certifications/blog/services/talent'];'
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +;`      `<urlset xmlns=""http"://www.sitemaps.org/schemas/sitemap/0.9">` +;`      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +;'      `</urlset>`;`    const owner = process.env.GITHUB_OWNER;
    if (owner && repo && token) {await upsertFile({ owner, repo, "path": 'public/sitemap-autogen.xml', "content": xml, "message": 'chore(automation): weekly sitemap refresh', token })}'
    return { "statusCode": 200, "body": JSON.stringify({ "ok": true, "pages": pages.length }) }
  } catch (e) {return { "statusCode": 500, "body": JSON.stringify({ "error": e.message }) }
>>>>>>> merged-prs-20250907-203621
    if (owner && repo && token) {
      await upsertFile({
        owner
        repo
        path: 'public/sitemap-autogen.xml'
        content: xml
        message: 'chore(automation): weekly sitemap refresh'
        token
      });
    }
    return {
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: pages.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};  try {
<<<<<<< HEAD
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |''
    const pages = ['//about/learn/dao/certifications/blog/services/talent']
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +

      `</urlset>`
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN

=======
}
const baseUrl = process.env.URL |process.env.DEPLOY_URL |'';'
    const pages = ['//about/learn/dao/certifications/blog/services/talent']'
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +;`      `<urlset xmlns=""http"://www.sitemaps.org/schemas/sitemap/0.9">` +`      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +'      `</urlset>``
const owner = process.env.GITHUB_OWNER;
>>>>>>> merged-prs-20250907-203621
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }
<<<<<<< HEAD
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
=======
<<<<<<< HEAD
    return { "statusCode": 200, "body": JSON.stringify({ "ok": true, "pages": pages.length }) }
>>>>>>> merged-prs-20250907-203621
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
=======
const { upsertFile } = require('./_lib/github');
exports.handler = async function () {
  try {
  // TODO: Implement
}
    const baseUrl = process.env.URL |process.env.DEPLOY_URL |;
    const pages = [
      '/
      '/about
      '/learn
      '/dao
      '/certifications
      '/blog
      '/services
      '/talent]
    ];
    const xml =
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

:netlify/functions/cron-weekly-sitemap.js

:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
<<<<<<< HEAD
  }
=======
  }

<<<<<<< HEAD

:netlify/functions/cron-weekly-sitemap.js

}

},
main:netlify/functions/cron-weekly-sitemap.js
:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
:netlify/functions/cron-weekly-sitemap.js
main:netlify/functions/cron-weekly-sitemap.js
:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
=======
},

=======


>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/netlify/functions/cron-weekly-sitemap.js
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
