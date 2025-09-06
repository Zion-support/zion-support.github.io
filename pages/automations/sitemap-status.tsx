<<<<<<< HEAD

<<<<<<< HEAD
=======

=======

=======
<<<<<<< HEAD
type Props = { urlCount: number },
=======
<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

type Props = { urlCount: number }
=======
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
type Props = { urlCount: number },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
<<<<<<< HEAD
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</a></p>
=======
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
<<<<<<< HEAD
</div>
    </main>
  )
}
=======
      </div>
    </main>
  )
<<<<<<< HEAD
}
=======
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const raw = fs.readFileSync(p, 'utf8')
    urlCount = (raw.match(/<url>/g) |[]).length
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
type Props = { urlCount: number },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>

<<<<<<< HEAD
=======

      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )

<<<<<<< HEAD
=======

},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
<<<<<<< HEAD

<<<<<<< HEAD
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

=======

=======
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
=======
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
<<<<<<< HEAD
  } catch {}
  return { props: { urlCount } }
},
;
export default SitemapStatus,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
=======
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
