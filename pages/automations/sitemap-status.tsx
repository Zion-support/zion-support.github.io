<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = any;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
type Props = { urlCount: number }
=======
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
type Props = { urlCount: number },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
      </div>
    </main>
  )
<<<<<<< HEAD
}
=======
},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml')
  let urlCount = 0
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const raw = fs.readFileSync(p, 'utf8')
    urlCount = (raw.match(/<url>/g) |[]).length
  } catch {}
  return { props: { urlCount } }
}
export default SitemapStatus;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

type Props = { urlCount: number };

const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Sitemap Status</h1>
      <p className='text-sm text-gray-600'>
        Nightly generated.{' '}
        <a className='text-blue-500 underline' href='/sitemap.xml'>
          View sitemap
        </a>
      </p>
      <div className='enhanced-card'>
        <div className='text-lg'>Indexed URLs: {urlCount}</div>
      </div>
    </main>
  );
};
}

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'public', 'sitemap.xml');
  let urlCount = 0;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    urlCount = (raw.match(/<url>/g) || []).length;
  } catch {}
  return { props: { urlCount } };
};
}

export default SitemapStatus;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
