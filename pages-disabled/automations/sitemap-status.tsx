<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
=======

import type { NextPage, GetServerSideProps } from 'next','
import fs from 'fs','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import path from 'path',
type Props = { urlCount: number },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
=======

const SitemapStatus: NextPage<Props> = ({ urlCount }) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <main className="space-y-4">"
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>
<<<<<<< HEAD

      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <div className="enhanced-card">
=======
"
      <div className="enhanced-card">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )
<<<<<<< HEAD
}
},

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
    const raw = fs.readFileSync(p, 'utf8')
    urlCount = (raw.match(/<url>/g) |[]).length;
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

"
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>

"
      <div className="enhanced-card">"
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'
    const raw = fs.readFileSync(p, 'utf8'),
urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
},

export default SitemapStatus

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length

  } catch {}
  return { props: { urlCount } }
},
;
export default SitemapStatus,;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch {  } catch (error) {
    console.error("Error:", error);
=======
    urlCount = (raw.match(/<url>/g) || []).length'
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length;
  } catch {  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: { urlCount }   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default SitemapStatus;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

'
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length;
'
    const raw = fs.readFileSync(p, 'utf8'),
urlCount = (raw.match(/<url>/g) || []).length

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
type Props = any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    urlCount = (raw.match(/<url>/g) || []).length;
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
