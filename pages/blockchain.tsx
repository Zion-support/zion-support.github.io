<<<<<<< HEAD


;
        <meta
          name="description"
          content="Blockchain and Web3 solutions including smart contracts, _DeFi, _and cryptocurrency development."
        />
        <meta name="viewport" content="width=device-width, _initial-scale=1.0" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Blockchain Services</h1>
            <p className="text-xl text-slate-300 text-center">
              Cutting-edge blockchain and Web3 solutions for the future.
            </p>
          </div>
        </main>
      </ErrorBoundary>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import React from 'react';
import Head from 'next / head';
import ErrorBoundary from '../components / ErrorBoundary';
export default /**
 * Blockchain - Function description
 */
function Blockchain() {
  return (

        <title > Blockchain Services - Zion Tech Group</title>;

        <title>Blockchain Services - Zion Tech Group</title>

=======
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Layout from '../components/Layout';

export default function Blockchain() {
  return (
    <Layout
      title="Blockchain Solutions - Zion Tech Group"
      description="Advanced blockchain technology solutions and services for your business."
    >
      <Head>
        <title>Blockchain Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional blockchain solutions including smart contracts, DeFi, and enterprise blockchain services."
        />
        <link rel="canonical" href="https://ziontechgroup.com/blockchain" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blockchain Solutions
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge blockchain technology. 
              We provide comprehensive blockchain solutions including smart contracts, 
              DeFi platforms, and enterprise blockchain services.
            </p>
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
=======
import Layout from '../components/layout/Layout';

export default function blockchain() {
  return (
    <Layout>
      <Head>
        <title>Blockchain - Zion Tech Group</title>
        <meta name="description" content="Blockchain solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blockchain</h1>
          <p className="text-lg text-gray-600">
            Professional blockchain solutions tailored to your business needs.
          </p>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
