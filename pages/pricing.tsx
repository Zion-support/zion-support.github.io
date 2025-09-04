import Head from 'next/head';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>
      <section className="bg-white text-slate-900">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h1>
          <p className="text-slate-600 mb-10 max-w-3xl">
            We tailor solutions to your needs. Below are typical starting ranges. Get a custom quote anytime.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI Development</h3>
              <ul className="text-slate-700 space-y-2 list-disc list-inside">
                <li>POC: $5,000–$15,000</li>
                <li>MVP: $20,000–$60,000</li>
                <li>Enterprise: $75,000+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}