<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { motion } from 'framer-motion';

import React from 'react';

<<<<<<< HEAD
import React from 'react';
origin/automation-improvements-final
import { motion } from 'framer-motion';
import React from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';



import Link from 'next/link';

<<<<<<< HEAD
<<<<<<< HEAD
import {
  ArrowRight
  Server
  Lock
  Brain
  Cloud
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { 
  ArrowRight,
  Server,
  Lock,
  Brain,
  Cloud;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


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
=======
import { ;
  ArrowRight,;
  Server,;
  Lock,;
  Brain,;
  Cloud;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
const apiEndpoints = [;
  {;
    title: 'Authentication API',;
    description: 'Secure authentication and authorization endpoints',;
    icon: Lock,;
    methods: ['POST', 'GET', 'PUT', 'DELETE'],;
    endpoint: '/api/auth';
  },;
  {;
    title: 'AI Services API',;
    description: 'Access to all AI-powered services and models',;
    icon: Brain,;
    methods: ['POST', 'GET'],;
    endpoint: '/api/ai';
  },;
  {;
    title: 'Micro SaaS API',;
    description: 'Manage micro SaaS applications and subscriptions',;
    icon: Cloud,;
    methods: ['POST', 'GET', 'PUT', 'DELETE'],;
    endpoint: '/api/micro-saas';
  },;
  {;
    title: 'IT Services API',;
    description: 'Infrastructure and IT service management',;
    icon: Server,;
    methods: ['POST', 'GET', 'PUT'],;
    endpoint: '/api/it-services';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final
<<<<<<< HEAD
=======





>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />
      </Head>

<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

origin/main
origin/automation-improvements-final

<<<<<<< HEAD
      {/* Hero Section */}
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
      {/* Hero Section */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* API Endpoints Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <motion&& motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
console.log(data.token);`
    },
    {
      language: 'Python',
      title: 'Services API Example',
      code: `import requests

# Get all services
response = requests.get('https://api.ziontechgroup.com/v1/services')
services = response.json()

# Request a service
service_request = {
    "serviceId": "ai-content-generation",
    "requirements": {
        "contentType": "blog",
        "length": 1000
    },
    "contactInfo": {
        "email": "client@example.com"
    }
}

response = requests.post(
    'https://api.ziontechgroup.com/v1/services/request',
    json=service_request
)`
    },
    {
      language: 'cURL',
      title: 'AI Services Example',
      code: `# AI Content Analysis
curl -X POST https://api.ziontechgroup.com/v1/ai/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{
    "content": "Your content here",
    "type": "sentiment"
  }'`
    }
  ];
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function APIDocsPage() {
  return (
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
          >;
            <h2 className="text - 4xl font - bold text - gray - 900 mb - 4">API Endpoints</h2>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Explore our comprehensive API endpoints for seamless integration with our services.;
            </p>;
          </motion.div>;
          <div className="grid md:grid - cols - 2 gap - 8">;
            {api_endpoints.map ((endpoint, index) => {

              const IconComponent = endpoint.icon;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints for seamless integration with our services.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {apiEndpoints.map((endpoint, index) => {;
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
              return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />
      </Head>


=======
export default function APIDocsPage() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <Head>;
        <title>API Documentation - Zion Tech Group | Developer Resources</title>;
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions." />;
        <meta name="keywords" content="API documentation, developer resources, REST API, integration, SDK" />;
      </Head>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
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
          >;
            <h2 className="text - 4xl font - bold text - gray - 900 mb - 4">API Endpoints</h2>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Explore our comprehensive API endpoints for seamless integration with our services.;
            </p>;
          </motion.div>;
          <div className="grid md:grid - cols - 2 gap - 8">;
            {api_endpoints.map ((endpoint, index) => {

              const IconComponent = endpoint.icon;
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                  <p className="text-gray-600 mb-4">{endpoint && endpoint.description}</p>;
=======

                  <p className="text-gray-600 mb-4">{endpoint && endpoint.description}</p>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Supported Methods:</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {endpoint && endpoint.methods.map((method, idx) => (;
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          {method}
                        </span>;
                      ))}

                    </div>;
                  </div>;

<<<<<<< HEAD
                    </div>;
                  </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Link
                    href={`/api-docs/${endpoint && endpoint.endpoint.replace('/api/', '')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">;
                    View Documentation;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </motion && motion.div>;
              );
            })}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
        </div>;
      </section>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </div>;
      </section>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD



=======



=======
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
import Layout from '../components/Layout';
export default function APIDocsPage() {



<<<<<<< HEAD


import React from 'react',
import Head from 'next/head',
import React from 'react',
import Head from 'next/head',
=======
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
  );
}
import Layout from '../components/Layout';
export default function APIDocsPage() {



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

=======
=======
import React from 'react',
import Head from 'next/head',
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ApiDocsPage() {
  return (

    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
        <meta name='description' content='API reference and guides.' />
<link rel='canonical' href='https://ziontechgroup.com/api-docs' />
        <meta name='description' content='API reference and guides.' />
<link rel='canonical' href='https://ziontechgroup.com/api-docs' />
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>

        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      <div className='container mx-auto px-4 py-16 text-gray-200'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>API Docs</h1>
        <p className='text-gray-300'>
          See{' '}
          <a href='/api-docs' className='text-cyan-400 underline'>
            API Documentation
          </a>{' '}
          for the full reference.
        </p>
ursor/integrate-build-improve-and-re-verify-8f7d
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </Layout>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  );
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />
      </Head>
<div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
);
origin/main
    </>
  )
}
}
    </Layout>;
);

    </>
  )
      </div>

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Integration?</h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">;
              Our developer support team is here to help you integrate our APIs successfully.;
            </p>;
            <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
              Contact Developer Support;
            </Link>;
          </motion && motion.div>;
        </div>;
      </section>;
    </div>;
  );
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}



  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta name="description" content="API reference and guides." />
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>
      </div>
<<<<<<< HEAD
);
    </>
  )

}


=======
=======
);
origin/main
    </>
  )
}
}
    </Layout>;
);
    </>
  )
}

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </>
  )
import React from 'react';
import Head from 'next/head';
export default function ApiDocsPage(req, res) {
  try {
  return (;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <Head>;
        <title>API Docs | Zion Tech Group</title>;
        <meta name='description' content='API reference and guides.' />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/api-docs' />;
<<<<<<< HEAD

}
    </>
  )
import React from 'react';
import Head from 'next/head';
export default function ApiDocsPage(req, res) {
  try {
  return (;
    <>;
      <Head>;
        <title>API Docs | Zion Tech Group</title>;
        <meta name="description" content="API reference and guides." />;
        <link rel="canonical" href="https: //ziontechgroup.com/api-docs" />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </Head>;
      <div className="container mx-auto px-4 py-16 text-gray-200">;
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>;
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Layout>;
  );
    </>;
  );
}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <motion.div;
                  key={index}
                  className="bg - white rounded - xl shadow - lg p - 8 border border - gray - 100";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="flex items - center mb - 4">;
                    <div className="bg - blue - 100 p - 3 rounded - lg mr - 4">;
                      <IconComponent className="w - 6 h - 6 text - blue - 600" />;
                    </div>;
                    <div>;
                      <h3 className="text - xl font - semibold text - gray - 900">{endpoint.title}</h3>;
                      <code className="text - sm text - blue - 600">{endpoint.endpoint}</code>;
                    </div>;
                  </div>;
                  <p className="text - gray - 600 mb - 4">{endpoint.description}</p>;
                  <div className="mb - 4">;
                    <h4 className="text - sm font - semibold text - gray - 900 mb - 2">Supported Methods:</h4>;
                    <div className="flex flex - wrap gap - 2">;
                      {endpoint.methods.map ((method, idx) => (
                        <span key={idx} className="bg - green - 100 text - green - 800 text - xs px - 2 py - 1 rounded">;
                          {method}
                        </span>))}
                    </div>;
                  </div>;
                  <Link;
                    href={`/api - docs/${endpoint.endpoint.replace ('/api/', '')}`}
                    className="inline - flex items - center text - blue - 600 hover:text - blue - 800 font - semibold transition - colors";
                  >;
                    View Documentation;
                    <ArrowRight className="w - 4 h - 4 ml - 1" />;
                  </Link>;
                </motion.div>);
            })}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py - 20 bg - gradient - to - r from - purple - 600 to - indigo - 600 text - white">;
        <div className="container mx - auto px - 4 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">Need Help with Integration?</h2>;
            <p className="text - xl mb - 8 max - w-2xl mx - auto">;
              Our developer support team is here to help you integrate our APIs successfully.;
            </p>;
            <Link href="/contact" className="px - 8 py - 4 bg - white text - purple - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold">;
              Contact Developer Support;
            </Link>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
}
import Layout from '../components / Layout';
;
export default /**
 * APIDocsPage - Function description
 */
function APIDocsPage() {
export default /**
 * ApiDocsPage - Function description
 */
function ApiDocsPage() {
  return (
    <>;
      <Head>;
        <title > API Docs | Zion Tech Group</title>;
        <meta name='description' content='API reference and guides.' />;
<link rel='canonical' href='https://ziontechgroup.com / api - docs' />;
      </Head>;
      <div className="container mx - auto px - 4 py - 16 text - gray - 200">;
        <h1 className="text - 4xl md:text - 6xl font - bold mb - 4">API Docs</h1>;
        <p className="text - gray - 300">See <a href="/api - docs" className="text - cyan - 400 underline">API Documentation</a> for the full reference.</p>;
      </div>;
    </Layout>);
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD


    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
