import type { NextPage } from 'next';
import Head from 'next/head';

const Services: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and technology services for modern businesses." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Development</h3>
            <p className="text-gray-600">Custom AI solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600">Scalable cloud infrastructure and migration services.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analytics</h3>
            <p className="text-gray-600">Transform your data into actionable insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;