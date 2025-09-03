import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group — Micro‑SaaS, IT and AI Solutions</title>
        <meta name="description" content="Micro‑SaaS, IT and AI services: chatbots, document automation, cloud migrations, security, MVPs and BI dashboards." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ship faster with productized engineering services
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            We design, build and operate micro‑SaaS, IT and AI solutions that reduce costs and unlock new revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Quote
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
              <p>Deflect tickets and increase CSAT with branded assistants trained on your data.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
              <p>Move to AWS/GCP/Azure with IaC, zero-downtime cutover, and cost optimization.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Analytics & BI</h3>
              <p>Build KPI dashboards and data pipelines for exec and ops decision‑making.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;