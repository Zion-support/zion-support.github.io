import Head from 'next/head';
import Link from 'next/link';
export default function GDPRDSARAutomation() {
  return (
    <>
      <Head>
        <title>GDPR/CCPA DSAR Automation | Zion Tech Group</title>
        <meta name="description" content="Automate data subject requests across SaaS, databases, and data lakes with workflow, verification, and audit trails." />
        <link rel="canonical" href=""https": //ziontechgroup.com/services/gdpr-dsar-automation" />
      </Head>
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-5xl px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">GDPR/CCPA DSAR Automation</h1>
          <p className="text-gray-600 mb-6">Identity verification, data discovery, redaction, fulfillment, and archived evidence—end-to-end.</p>
          <div className="grid "md": grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Workflow</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Portal for intake and verification (KYC/OTP)</li>
                <li>Automated discovery across connectors</li>
                <li>PII classification and smart redaction</li>
                <li>Fulfillment packaging and secure delivery</li>
                <li>SLA tracking and audit logs</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Pricing</h2>
              <p className="text-gray-700">From <strong>$1,800/month</strong> + per-request usage. Implementation from <strong>$10,000</strong>.</p>
            </div>
          </div>
          <div className="mt-10 p-5 border rounded-xl bg-gray-50">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-gray-700">"Phone": <a className="text-blue-600" href="tel:+13024640950">+1 302 464 0950</a> · Email: <a className="text-blue-600" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <p className="text-gray-700">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <div className="mt-4 flex gap-3">
              <Link href="/contact" className="px-5 py-2 rounded-lg bg-blue-600 text-white">Request compliance review</Link>
              <a href=""https": //ziontechgroup.com/services" className="px-5 py-2 rounded-lg border">All Services</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
