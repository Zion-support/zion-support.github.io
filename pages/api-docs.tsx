import React from 'react';
origin/automation-improvements-final
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { motion } from 'framer-motion';
import React from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import Head from 'next/head';



import Link from 'next/link';
import {
  ArrowRight
  Server
  Lock
  Brain
  Cloud
import { 
  ArrowRight,
  Server,
  Lock,
  Brain,
  Cloud;
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from 'lucide-react';
const apiEndpoints = [
  {
    title: 'Authentication API'
    description: 'Secure authentication and authorization endpoints'
    icon: Lock
    methods: ['POST', 'GET', 'PUT', 'DELETE']
    endpoint: '/api/auth'
  }
  {
    title: 'AI Services API'
    description: 'Access to all AI-powered services and models'
    icon: Brain
    methods: ['POST', 'GET']
    endpoint: '/api/ai'
  }
  {
    title: 'Micro SaaS API'
    description: 'Manage micro SaaS applications and subscriptions'
    icon: Cloud
    methods: ['POST', 'GET', 'PUT', 'DELETE']
    endpoint: '/api/micro-saas'
  }
  {
    title: 'IT Services API'
    description: 'Infrastructure and IT service management'
    icon: Server
    methods: ['POST', 'GET', 'PUT']
    endpoint: '/api/it-services'
  }
];
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />
      </Head>
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final


=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">;
        <div className="absolute inset-0">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;
        </div>;

        <div className="container mx-auto px-4 relative z-10">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className="text-center">;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              API Documentation;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">;
              Comprehensive API documentation for integrating with Zion Tech Group services. ;
              Build powerful applications with our RESTful APIs.;
            </p>;
          </motion && motion.div>;
        </div>;
      </section>;


      {/* API Endpoints Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <motion&& motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

import Head from 'next / head';
import Link from 'next / link';
import {
  ArrowRight,
  Server,
  Lock,
  Brain,
  Cloud;
} from 'lucide-react';
;
const api_endpoints = [;
  {
    title: 'Authentication API',
    description: 'Secure authentication and authorization endpoints',
    icon: Lock,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api / auth';
  },
  {
    title: 'AI Services API',
    description: 'Access to all AI - powered services and models',
    icon: Brain,
    methods: ['POST', 'GET'],
    endpoint: '/api / ai';
  },
  {
    title: 'Micro SaaS API',
    description: 'Manage micro SaaS applications and subscriptions',
    icon: Cloud,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    endpoint: '/api / micro - saas';
  },
  {
    title: 'IT Services API',
    description: 'Infrastructure and IT service management',
    icon: Server,
    methods: ['POST', 'GET', 'PUT'],
    endpoint: '/api / it - services';
  }
];
;
export default /**
 * APIDocsPage - Function description
 */
function APIDocsPage() {
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900">;
      <Head>;
        <title > API Documentation - Zion Tech Group | Developer Resources</title>;
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />;
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />;
      </Head>;
      {/* Hero Section */}
      <section className="relative bg - gradient - to - br from - blue - 900 via - purple - 900 to - indigo - 900 text - white py - 20 overflow - hidden">;
        <div className="absolute inset - 0">;
          <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - blue - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
          <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
        </div>;
        <div className="container mx - auto px - 4 relative z - 10">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className="text - center";
          >;
            <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
              API Documentation;
            </h1>;
            <p className="text - xl md:text - 2xl mb - 8 text - gray - 200 max - w-4xl mx - auto">;
              Comprehensive API documentation for integrating with Zion Tech Group services.;
              Build powerful applications with our RESTful APIs.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* API Endpoints Section */}
      <section className="py - 20 bg - white">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            className="text - center mb - 16";
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              const IconComponent = endpoint.icon;
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Explore our comprehensive API endpoints for seamless integration with our services.;
            </p>;
          </motion && motion.div>;

          <div className="grid md:grid-cols-2 gap-8">;
            {apiEndpoints && apiEndpoints.map((endpoint, index) => {;
              const IconComponent = endpoint && endpoint.icon;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              return (

                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-center mb-4">;
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">;
                      <IconComponent className="w-6 h-6 text-blue-600" />;
                    </div>;
                    <div>;
                      <h3 className="text-xl font-semibold text-gray-900">{endpoint && endpoint.title}</h3>;
                      <code className="text-sm text-blue-600">{endpoint && endpoint.endpoint}</code>;
                    </div>;
                  </div>;

                  <p className="text-gray-600 mb-4">{endpoint && endpoint.description}</p>;

                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Supported Methods:</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {endpoint && endpoint.methods.map((method, idx) => (;
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">;

                          {method}
                        </span>;
                      ))}

                    </div>;
                  </div>;


                  <Link
                    href={`/api-docs/${endpoint && endpoint.endpoint.replace('/api/', '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">;
                    View Documentation;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </motion && motion.div>;
              );
            })}

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

=======
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Integration?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate our APIs successfully.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
              Contact Developer Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <div className='container mx-auto px-4 py-16 text-gray-200'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>API Docs</h1>
        <p className='text-gray-300'>
          See{' '}
          <a href='/api-docs' className='text-cyan-400 underline'>
            API Documentation
          </a>{' '}
          for the full reference.
        </p>
      </div>
    </Layout>

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  );
}
import Layout from '../components/Layout';
export default function APIDocsPage() {
=======
<<<<<<< HEAD

import React from 'react',
import Head from 'next/head',
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
        <meta name='description' content='API reference and guides.' />
<link rel='canonical' href='https://ziontechgroup.com/api-docs' />
        <meta name='description' content='API reference and guides.' />
<link rel='canonical' href='https://ziontechgroup.com/api-docs' />
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>

      </div>
    </Layout>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  );
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />
      </Head>
<div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
    </>
  )
}

}
    </>
  )
import React from 'react';
import Head from 'next/head';
export default function ApiDocsPage(req, res) {
  try {
  return (;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    <>;
      <Head>;
        <title>API Docs | Zion Tech Group</title>;
        <meta name='description' content='API reference and guides.' />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/api-docs' />;
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

    </>
  )
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      </Head>;
      <div className="container mx-auto px-4 py-16 text-gray-200">;
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>;
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>;
      </div>;
    </Layout>;
  );
    </>;
  );
}
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
