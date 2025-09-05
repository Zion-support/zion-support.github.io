import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h2 className="text-2xl font-semibold mb-3 text-white">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  We are dedicated to building the future of technology through innovative solutions and cutting-edge development.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h2 className="text-2xl font-semibold mb-3 text-white">Get Started</h2>
                <p className="text-gray-300 mb-4">
                  Book a consultation to map your roadmap to shipped outcomes.
                </p>
                <div className="flex gap-3">
                  <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
                    Talk to Sales
                  </Button>
                  <Button href="/pricing" variant="outline" className="border border-gray-600 text-gray-200">
                    Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;