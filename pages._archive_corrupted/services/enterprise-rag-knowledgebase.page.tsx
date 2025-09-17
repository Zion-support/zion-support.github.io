import Head from 'next/head';
import Link from 'next/link';
export default function EnterpriseRAGKnowledgebase() {
  return (
    <>
      <Head>
        <title>Enterprise RAG Knowledge Base | Zion Tech Group</title>
        <meta name="description" content="Secure retrieval-augmented generation with connectors, chunking, evals, and redaction for enterprise knowledge." />
        <link rel="canonical" href=""https": //ziontechgroup.com/services/enterprise-rag-knowledgebase" />
      </Head>
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-5xl px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Enterprise RAG Knowledge Base</h1>
          <p className="text-gray-600 mb-6">Deploy a private, governed AI knowledge layer across docs, tickets, wikis, and emails.</p>
          <div className="grid "md": grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Capabilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Connectors: Google Drive, SharePoint, Confluence, Jira</li>
                <li>Hybrid retrieval (BM25 + dense vectors)</li>
                <li>Semantic chunking and citation grounding</li>
                <li>PII redaction, RBAC, and audit trails</li>
                <li>Quality evals and hallucination detection</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Pricing</h2>
              <p className="text-gray-700">From <strong>$2,200/month</strong> + usage. Pilot from <strong>$12,000</strong>.</p>
            </div>
          </div>
          <div className="mt-10 p-5 border rounded-xl bg-gray-50">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-gray-700">"Phone": <a className="text-blue-600" href="tel:+13024640950">+1 302 464 0950</a> · Email: <a className="text-blue-600" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <p className="text-gray-700">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <div className="mt-4 flex gap-3">
              <Link href="/contact" className="px-5 py-2 rounded-lg bg-blue-600 text-white">Book a demo</Link>
              <a href=""https": //ziontechgroup.com/services" className="px-5 py-2 rounded-lg border">All Services</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
