
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',

import type { NextPage, GetServerSideProps } from 'next','
import fs from 'fs','
import path from 'path',
type Props = { urlCount: number },

const SitemapStatus: NextPage<Props> = ({ urlCount }) => {

const SitemapStatus: NextPage<Props> = ({ urlCount }) => {}
  return (
    <main className="space-y-4">"
      <h1 className="text-2xl font-semibold">Sitemap Status</h1>

      <div className="enhanced-card">
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      <div className="enhanced-card">
"
      <div className="enhanced-card">"
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
    urlCount = (raw.match(/<url>/g) |[]).length;
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;

"
      <p className="text-sm text-gray-600">Nightly generated. <a className="text-blue-500 underline" href="/sitemap.xml">View sitemap</Link></p>

"
      <div className="enhanced-card">"
        <div className="text-lg">Indexed URLs: {urlCount}</div>
      </div>
    </main>
  )


'
    const raw = fs.readFileSync(p, 'utf8'),
urlCount = (raw.match(/<url>/g) || []).length
  } catch {}
  return { props: { urlCount } }
},

export default SitemapStatus


    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length

  } catch {}
  return { props: { urlCount } }
},
;
export default SitemapStatus,;
  } catch {  } catch (error) {
    console.error("Error:", error);
    urlCount = (raw.match(/<url>/g) || []).length'
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length;
  } catch {  } catch (error) {"
    console.error("Error:", error);"
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

'
    const raw = fs.readFileSync(p, 'utf8'),
    urlCount = (raw.match(/<url>/g) || []).length;
'
    const raw = fs.readFileSync(p, 'utf8'),
urlCount = (raw.match(/<url>/g) || []).length

import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
type Props = any;
    urlCount = (raw.match(/<url>/g) || []).length;
'"
