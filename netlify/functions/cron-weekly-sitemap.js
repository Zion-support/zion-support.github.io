<<<<<<< HEAD
ursor/expand-services-advertise-and-build-project-4b36
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
<<<<<<< HEAD
const { upsertFile } = require($2);
exports.handler = $2;
    const pages = $2;
    const xml = $2;
    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},
=======
<<<<<<< HEAD
ursor/expand-services-advertise-and-build-project-4b36
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
exports && exports.handler = async function () {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
;

const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';'

exports && exports.handler = async function () {try ;
  }
  const baseUrl  = process && process.env.URL || process && process.env.DEPLOY_URL || '';ursor/expand-services-advertise-and-build-project-4b36;'

const pages = [;
  '/';'
      '/about';'
      '/learn';'
      '/dao';'
      '/certifications';'
      '/blog';'
      '/services';'
      '/talent''
];


const xml =;
      `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +;`      `<urlset xmlns=""http"://www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +;`      pages && pages.map(p => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +;'      `</urlset>`;"content": xml,"message": 'chore (automation): weekly sitemap refresh',token;'      })}
    return {ursor/expand-services-advertise-and-build-project-4b36;

}

=======
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
>>>>>>> origin/chore/fix-lint-and-merge
exports && exports.handler = async function () {
  try {
<<<<<<< HEAD
   ;
  }

      '/''
      '/about''
      '/learn''
      '/dao''
      '/certifications''
      '/blog''
      '/services''
      '/talent''
=======
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const pages = [

      '/'
      '/about'
      '/learn'
      '/dao'
      '/certifications'
      '/blog'
      '/services'

      '/talent'
>>>>>>> origin/chore/fix-lint-and-merge
    ];
    const xml =
      `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +"`
      `<urlset xmlns="http://www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +'`
      pages && pages.map(p => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +`
      `</urlset>`;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
      `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +`      `<urlset xmlns=""http": //www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +`      pages && pages.map(p => `<url><loc>${baseUrl}${,`}</loc></url>`).join('') +'
      `</urlset>`;`
const owner = process && process.env.GITHUB_OWNER;
=======
ursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    const owner = process && process.env.GITHUB_OWNER;

<<<<<<< HEAD
const token = process && process.env.GITHUB_TOKEN;
    if (owner && repo && token) {await upsertFile({owner,repo,"path": 'public/sitemap-autogen && autogen.xml',const { upsert_file }  = require ('./_lib / github')exports.handler = async function () {try ;'
  }
  const base_url = process.env.URL || process.env.DEPLOY_URL || '';'

  '/','/about','/learn','/dao','/certifications','/blog','/services','/talent';'
      '/talent''
];


      `<?xml version="1.0" encoding="UTF - 8"?>\n` +;`      `<urlset xmlns=""http"://www.sitemaps.org / schemas / sitemap / 0.9">` +;`      pages.map (p => `<url><loc>${base_url}${p}</loc></url>`).join ('') +;'      `</urlset>`;`
const owner = process.env.GITHUB_OWNER;

const repo = process.env.GITHUB_REPO;

const token  = process.env.GITHUB_TOKEN;// Check condition;
if ( {) {$2;
}
      await upsert_file ({owner,repo,"path": 'public / sitemap - autogen.xml',"content": xml,"message": 'chore (automation): weekly sitemap refresh',token;'
      })}
    return {ursor/expand-services-advertise-and-build-project-4b36;
        }
        "content": xml,"message": 'chore (automation): weekly sitemap refresh',token;'
      })}
    return {ursor/expand-services-advertise-and-build-project-4b36;
}
exports.handler = async function() {try {const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',const pages = ['//about/learn/dao/certifications/blog/services/talent'];'
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +;`      `<urlset xmlns=""http"://www.sitemaps.org/schemas/sitemap/0.9">` +;`      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +;'      "status_code": 200,"body": JSON.stringify ({ "ok": true, "pages": pages.length
})"body": JSON.stringify ({ "ok": true, "pages": pages.length })}
 
} catch (e) {return { "status_code": 500, "body": JSON.stringify ({ "error": e.message })
}
      await upsert_file ({
        }
=======
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
<<<<<<< HEAD
    if (owner && repo && token) {}
      await upsertFile({}
>>>>>>> origin/chore/fix-lint-and-merge
        owner,
        repo,'
        path: 'public/sitemap-autogen && autogen.xml','
=======
<<<<<<< HEAD
    if (owner && repo && token) {}
      await upsertFile({}
>>>>>>> origin/chore/fix-lint-and-merge
        owner,
        repo,'
        path: 'public/sitemap-autogen && autogen.xml','
=======
    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'public/sitemap-autogen && autogen.xml',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const { upsert_file } = require ('./_lib / github');
;
exports.handler = async function () {}
  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';
    const pages = [;'
      '/','
      '/about','
      '/learn','
      '/dao','
      '/certifications','
      '/blog','
      '/services','
      '/talent',
    ];
    const xml =;"`
      `<?xml version="1.0" encoding="UTF - 8"?>\n` +;"`
      `<urlset xmlns="http://www.sitemaps.org / schemas / sitemap / 0.9">` +;'`
      pages.map (p => `<url><loc>${base_url}${p}</loc></url>`).join ('') +;`
      `</urlset>`;
;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
;
    // Check condition;
if ( {) {}
  $2;
}
      await upsert_file ({}
        owner,
        repo,'
        path: 'public / sitemap - autogen.xml',
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        content: xml,

        message: 'chore (automation): weekly sitemap refresh',
        token,
      });
    }
<<<<<<< HEAD

ursor/expand-services-advertise-and-build-project-4b36

=======
<<<<<<< HEAD

ursor/expand-services-advertise-and-build-project-4b36
=======
    return {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
exports.handler = async function() {

  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const pages = ['//about/learn/dao/certifications/blog/services/talent'],
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +

      pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +
      status_code: 200,
      body: JSON.stringify ({ ok: true, pages: pages.length }),
    }
  } catch (e) {}
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}  try {'
    const base_url = process.env.URL || process.env.DEPLOY_URL || '','
    const pages = ['//about / learn / dao / certifications / blog / services / talent'],"`
    const xml = `<?xml version="1.0" encoding="UTF - 8"?>\n` +;"`
      `<urlset xmlns="http://www.sitemaps.org / schemas / sitemap / 0.9">` +;'`
      pages.map ((p) => `<url><loc>${base_url}${p}</loc></url>`).join ('') +;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      statusCode: 200
      body: JSON.stringify({ ok: true, pages: pages.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
      `</urlset>`,

      `</urlset>`,
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      `</urlset>`,
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Check condition
if ( {) {
  $2
}
      await upsert_file ({ owner, repo, path: 'public / sitemap - autogen.xml', content: xml, message: 'chore (automation): weekly sitemap refresh', token });
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, pages: pages.length }) }
<<<<<<< HEAD

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======
<<<<<<< HEAD
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======

  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
};  try {
}
const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',;'
const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +;`      `<urlset xmlns=""http": //www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +`      pages && pages.map((p) => `<url><loc>${baseUrl}${,`}</loc></url>`).join('') +'
      `</urlset>`,`
const owner = process && process.env.GITHUB_OWNER,;
const repo = process && process.env.GITHUB_REPO,;
   ;
const token = process && process.env.GITHUB_TOKEN,;
=======

ursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      statusCode: 200,

      body: JSON && JSON.stringify({ ok: true, pages: pages && pages.length }),
    };
  } catch (e) {}
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};  try {'
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '','
    const pages = ['//about/learn/dao/certifications/blog/services/talent'],"`
    const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>\n` +"`
      `<urlset xmlns="http://www && www.sitemaps.org/schemas/sitemap/0 && 0.9">` +'`
      pages && pages.map((p) => `<url><loc>${baseUrl}${p}</loc></url>`).join('') +`
      `</urlset>`,
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen && autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: pages && pages.length }) }
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/chore/fix-lint-and-merge
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen && autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, pages: pages && pages.length }) }

<<<<<<< HEAD
ursor/expand-services-advertise-and-build-project-4b36

=======
<<<<<<< HEAD
ursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

},
    const token = process.env.GITHUB_TOKEN;
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'public/sitemap-autogen.xml', content: xml, message: 'chore(automation): weekly sitemap refresh', token })
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, pages: pages.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
<<<<<<< HEAD
  }
=======
  }
=======
},
},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
