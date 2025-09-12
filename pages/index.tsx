import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Solutions - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Solutions provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Zion Tech Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p>Custom AI solutions and machine learning models for your business needs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p>Scalable cloud solutions and infrastructure design for modern applications.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p>End-to-end digital transformation services to modernize your business.</p>
            </div>
          </div>

          <section className="mt-20 text-left">
            <h2 className="text-3xl font-bold mb-6">Latest from the Blog</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat">
                    AI-Powered Marketplaces: The Future of Digital Commerce
                  </Link>
                </h3>
                <p className="opacity-90">
                  How AI transforms marketplaces with personalization, trust, and operational efficiency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href="/blog/cloud-native-architecture-best-practices-chat">
                    Cloud-Native Architecture: Best Practices
                  </Link>
                </h3>
                <p className="opacity-90">
                  Practical guidance for building resilient, scalable, and cost-efficient cloud-native systems.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/blog" className="underline font-semibold">View all articles →</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;