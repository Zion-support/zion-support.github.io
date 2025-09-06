import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const SEOAudit: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Autonomous SEO Auditor</title>
        <meta name="description" content="Automated SEO health reports." />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Autonomous SEO Auditor</h1>
        <p>Scans pages to detect missing meta tags and basic SEO issues and commits a structured report.</p>
        <div>
<<<<<<< HEAD
          <Link href="/data/reports/seo/latest.json"><a className="text-blue-600 underline">Latest SEO Report (JSON)</a></Link>
=======
          <Link href="/data/reports/seo/latest.json"><a className="text-blue-600 underline">Latest SEO Report (JSON)</Link></Link>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        </div>
      </main>
    </div>
  )
},
<<<<<<< HEAD

export default SEOAudit,;
=======
export default SEOAudit,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
