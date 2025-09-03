import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <div className="bg-white rounded-xl p-6 shadow border border-slate-200 space-y-3">
            <p>Phone: <a className="text-cyan-700 underline" href="tel:+13024640950">+1 302 464 0950</a></p>
            <p>Email: <a className="text-cyan-700 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a className="text-cyan-700 underline" href="https://ziontechgroup.com">ziontechgroup.com</a></p>
          </div>
        </div>
      </main>
    </>
  );
}

