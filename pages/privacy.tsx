import Head from 'next/head';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="How Zion Tech Group collects, uses, and protects your data." />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>
      <section className="bg-white text-slate-900">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-700 mb-6">Last updated: 2025-09-03</p>
          <div className="prose max-w-none">
            <p>We respect your privacy. This policy explains what information we collect and how we use it.</p>
            <h2>Information We Collect</h2>
            <ul>
              <li>Contact details you provide (name, email, phone) via forms</li>
              <li>Usage analytics (pages visited, device/browser)</li>
              <li>Business information shared to scope projects</li>
            </ul>
            <h2>How We Use Information</h2>
            <ul>
              <li>To respond to inquiries and provide services</li>
              <li>To improve our website and offerings</li>
              <li>To comply with legal obligations</li>
            </ul>
            <h2>Contact</h2>
            <p>
              Reach us at <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}