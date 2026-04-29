import Head from 'next/head';

export default function Pricing() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <Head>
        <title>Pricing | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="mb-6">Choose a plan that fits your needs. All plans include free community support.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="mb-4">Access to open-source tools and public documentation.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Basic AI Lab access</li>
            <li>Community forum</li>
            <li>Limited usage quotas</li>
          </ul>
          <a href="/contact" className="inline-block rounded-xl bg-gray-600 px-4 py-2 text-white hover:bg-gray-500">Get Started</a>
        </section>
        <section className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="mb-4">Full-featured AI services with priority support.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Unlimited AI Lab usage</li>
            <li>Premium integrations</li>
            <li>Dedicated support</li>
          </ul>
          <a href="https://buy.stripe.com/test_4gw3cG8yV8tR5dKc00" className="inline-block rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-500">Upgrade Now</a>
        </section>
      </div>
    </main>
  );
}
