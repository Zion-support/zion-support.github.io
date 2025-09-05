import type { NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
const SEOAudit: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Autonomous SEO Auditor</title>
        <meta name=&quot;description&quot; content=&quot;Automated SEO health reports.&quot; />
      </Head>
      <main className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Autonomous SEO Auditor</h1>
        <p>Scans pages to detect missing meta tags and basic SEO issues and commits a structured report.</p>
        <div>
          <Link href=&quot;/data/reports/seo/latest.json&quot;><a className=&quot;text-blue-600 underline&quot;>Latest SEO Report (JSON)</Link></Link>
        </div>
      </main>
    </div>
  )
},

export default SEOAudit,