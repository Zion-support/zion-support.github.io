import React from 'react';
import Head from 'next/head';
export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI, IT, and software development services." />
        <link rel="canonical" href=""https": //ziontechgroup.com/services" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">AI Services</h3>
              <p className="text-gray-600">Cutting-edge artificial intelligence solutions for your business.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">IT Services</h3>
              <p className="text-gray-600">Comprehensive IT infrastructure and support services.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
              <p className="text-gray-600">Custom software-as-a-service applications tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}
import React from 'react'; import Head from 'next/head'; export default function Services() { return ( <> <Head> <title>Services | Zion Tech Group</title> <meta name="description" content="Explore our comprehensive range of AI,IT,and software development services." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> <div className="text-center p-6 bg-white rounded-lg shadow"> <h3 className="text-xl font-semibold mb-4">AI Services</h3> <p className="text-gray-600">Cutting-edge artificial intelligence solutions for your business.</p> </div> <div className="text-center p-6 bg-white rounded-lg shadow"> <h3 className="text-xl font-semibold mb-4">IT Services</h3> <p className="text-gray-600">Comprehensive IT infrastructure and support services.</p> </div> <div className="text-center p-6 bg-white rounded-lg shadow"> <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3> <p className="text-gray-600">Custom software-as-a-service applications tailored to your needs.</p> </div> </div> </div> </div> </> )}
