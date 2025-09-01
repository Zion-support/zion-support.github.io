import Head from 'next/head';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Contact | Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>
      <main className="mx-auto max-w-3xl px-6 py-16 space-y-4">
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <p className="text-white/80">We respond within one business day.</p>
        <div className="space-y-2 text-white/90">
          <div>Mobile: <a className="underline" href="tel:+13024640950">+1 302 464 0950</a></div>
          <div>Email: <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
          <div>Address: 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
      </main>
    </div>
  );
}

