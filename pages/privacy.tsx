
import Head from 'next/head';


export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold mb-8 text-center">Privacy Policy</h1>
          <p className="text-lg text-slate-400 mb-12 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Information We Collect</h2>
              <p className="text-slate-300 leading-relaxed">
                We collect information you provide directly to us when you use our services or contact us.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Contact Us</h2>
              <p className="text-slate-300 leading-relaxed">
                Questions? Contact us at kleber@ziontechgroup.com or +1 302 464 0950.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}


