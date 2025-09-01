import Link from 'next/link';

export default function Reports() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Reports & Content | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of reports, insights, and technical content." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Reports & Content</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover our extensive library of AI, cloud, and technology content
          </p>
        </div>
        <div className="border rounded p-5">
          <h3 className="font-semibold">External Link Health</h3>
          <p className="text-sm opacity-80">Daily check of outbound links.</p>
          <div className="flex gap-3">
            <Link href="/metrics/links.json"><a className="text-blue-600">Summary →</a></Link>
            <Link href="/automation_logs/link-report.json"><a className="text-blue-600">Full report →</a></Link>
          </div>
        </div>
        <div className="border rounded p-5">
          <h3 className="font-semibold">Automations Catalog</h3>
          <p className="text-sm opacity-80">List of GitHub Action workflows.</p>
          <Link href="/automation-catalog.json"><a className="text-blue-600">Catalog JSON →</a></Link>
        </div>
      </div>
    </div>
  );
}