<<<<<<< HEAD


=======

=======


import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

type Props = { urlCount: number }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
type Props = { urlCount: number },
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
<<<<<<< HEAD

=======
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</a></p>
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>
      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )
}
},
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
    const raw = fs.readFileSync(p, 'utf8')
    urlCount = (raw.match(/<url>/g) |[]).length
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>


      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )


},


export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
    const raw = fs.readFileSync (p, 'utf8'),
    url_count = (raw.match (/<url>/g) || []).length;
  } catch {}
  return { props: { url_count } }
},
export default SitemapStatus,
      </div>
    </main>
  )
},

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml'),
  let urlCount = 0
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
},

export default SitemapStatus


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  } catch {}
  return { props: { urlCount } }
},
;
export default SitemapStatus,;
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: { urlCount }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default SitemapStatus;


    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
