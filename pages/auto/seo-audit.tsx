import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const SEOAudit: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Autonomous SEO Auditor</title>
<<<<<<< HEAD
        <meta name='description' content='Automated SEO health reports.' />
      </Head>
      <main className='space-y-4'>
        <h1 className='text-2xl font-bold'>Autonomous SEO Auditor</h1>
        <p>
          Scans pages to detect missing meta tags and basic SEO issues and
          commits a structured report.
        </p>
        <div>
          <Link href='/data/reports/seo/latest.json'>
            <a className='text-blue-600 underline'>Latest SEO Report (JSON)</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SEOAudit;
=======
        <meta name="description" content="Automated SEO health reports." />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Autonomous SEO Auditor</h1>
        <p>Scans pages to detect missing meta tags and basic SEO issues and commits a structured report.</p>
        <div>
          <Link href="/data/reports/seo/latest.json"><a className="text-blue-600 underline">Latest SEO Report (JSON)</a></Link>
        </div>
      </main>
    </div>
  )
};

export default SEOAudit;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
