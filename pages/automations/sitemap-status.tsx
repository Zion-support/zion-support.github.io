import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

type Props = { urlCount: number }
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
type Props = { urlCount: number },
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</a></p>
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
    const raw = fs.readFileSync(p, 'utf8')
    urlCount = (raw.match(/<url>/g) |[]).length
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
