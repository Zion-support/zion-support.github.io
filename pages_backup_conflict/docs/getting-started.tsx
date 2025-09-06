

<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ExternalLink, Book } from 'lucide-react';
export default function GettingStarted() {
  const contact = {
    "phone": '+1 302 464 0950',
    "email": 'kleber@ziontechgroup.com',
    "address": '364 E Main St STE 1008 Middletown DE 19709',
    "site": 'https://ziontechgroup.com'
  };
  return (
    <>
      <Head>
        <title>Getting Started - Zion Tech Group Documentation</title>
        <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS, AI, and IT services." />
        <link rel="canonical" href={`${contact.site}/docs/getting-started`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
            <p className="text-xl text-gray-600">
              Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly.
            </p>
          </div>
          {/* Quick Start Steps */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Book className="w-6 h-6 mr-3 text-blue-600" />
              Quick Start Guide
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Service</h3>
                  <p className="text-gray-600 mb-3">
                    Browse our comprehensive catalog of 350+ services across Micro SaaS, AI, and IT solutions.
                  </p>
                  <Link href="/services-catalog" className="inline-flex items-center text-blue-600 "hover": text-blue-700">
                    Browse Services <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3>
                  <p className="text-gray-600 mb-3">
                    Contact our team for a personalized quote and consultation based on your specific needs.
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    Request Quote <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600 mb-3">
                    Our expert team will implement and configure your chosen solutions with full support.
                  </p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span className="font-medium">Full implementation support included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service Categories */}
          <div className="grid "md": grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                150+ specialized micro applications for specific business needs.
              </p>
              <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore Micro SaaS →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3>
              <p className="text-gray-600 mb-4">
                100+ AI-powered solutions for automation and intelligence.
              </p>
              <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore AI Services →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3>
              <p className="text-gray-600 mb-4">
                100+ comprehensive IT solutions and enterprise services.
              </p>
              <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore IT Services →
              </Link>
            </div>
          </div>
          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you get started. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg "hover": bg-blue-700 transition-colors">
                Call {contact.phone}
              </a>
              <a href={`"mailto": ${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,CheckCircle,ExternalLink,Book } from 'lucide-react'; export default function GettingStarted() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>Getting Started - Zion Tech Group Documentation</title> <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS,AI,and IT services." /> <link rel="canonical" href={`${contact.site}/docs/getting-started`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1> <p className="text-xl text-gray-600"> Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly. </p> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center"> <Book className="w-6 h-6 mr-3 text-blue-600" /> Quick Start Guide </h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">1</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Service</h3> <p className="text-gray-600 mb-3"> Browse our comprehensive catalog of 350+ services across Micro SaaS,AI,and IT solutions. </p> <Link href="/services-catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Browse Services <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">2</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3> <p className="text-gray-600 mb-3"> Contact our team for a personalized quote and consultation based on your specific needs. </p> <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Request Quote <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">3</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3> <p className="text-gray-600 mb-3"> Our expert team will implement and configure your chosen solutions with full support. </p> <div className="flex items-center text-green-600"> <CheckCircle className="w-5 h-5 mr-2" /> <span className="font-medium">Full implementation support included</span> </div> </div> </div> </div> </div> {} <div className="grid md:grid-cols-3 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h3> <p className="text-gray-600 mb-4"> 150+ specialized micro applications for specific business needs. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> Explore Micro SaaS → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3> <p className="text-gray-600 mb-4"> 100+ AI-powered solutions for automation and intelligence. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore AI Services → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3> <p className="text-gray-600 mb-4"> 100+ comprehensive IT solutions and enterprise services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore IT Services → </Link> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2> <p className="text-gray-600 mb-6"> Our team is here to help you get started. Contact us for personalized assistance. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Call {contact.phone} </a> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Email Us </a> </div> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,CheckCircle,ExternalLink,Book } from 'lucide-react'; export default function GettingStarted() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>Getting Started - Zion Tech Group Documentation</title> <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS,AI,and IT services." /> <link rel="canonical" href={`${contact.site}/docs/getting-started`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1> <p className="text-xl text-gray-600"> Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly. </p> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center"> <Book className="w-6 h-6 mr-3 text-blue-600" /> Quick Start Guide </h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">1</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Service</h3> <p className="text-gray-600 mb-3"> Browse our comprehensive catalog of 350+ services across Micro SaaS,AI,and IT solutions. </p> <Link href="/services-catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Browse Services <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">2</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3> <p className="text-gray-600 mb-3"> Contact our team for a personalized quote and consultation based on your specific needs. </p> <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Request Quote <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">3</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3> <p className="text-gray-600 mb-3"> Our expert team will implement and configure your chosen solutions with full support. </p> <div className="flex items-center text-green-600"> <CheckCircle className="w-5 h-5 mr-2" /> <span className="font-medium">Full implementation support included</span> </div> </div> </div> </div> </div> {} <div className="grid md:grid-cols-3 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h3> <p className="text-gray-600 mb-4"> 150+ specialized micro applications for specific business needs. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> Explore Micro SaaS → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3> <p className="text-gray-600 mb-4"> 100+ AI-powered solutions for automation and intelligence. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore AI Services → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3> <p className="text-gray-600 mb-4"> 100+ comprehensive IT solutions and enterprise services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore IT Services → </Link> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2> <p className="text-gray-600 mb-6"> Our team is here to help you get started. Contact us for personalized assistance. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Call {contact.phone} </a> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Email Us </a> </div> </div> </div> </div> </> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,CheckCircle,ExternalLink,Book } from 'lucide-react'; export default function GettingStarted() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>Getting Started - Zion Tech Group Documentation</title> <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS,AI,and IT services." /> <link rel="canonical" href={`${contact.site}/docs/getting-started`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1> <p className="text-xl text-gray-600"> Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly. </p> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center"> <Book className="w-6 h-6 mr-3 text-blue-600" /> Quick Start Guide </h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">1</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Service</h3> <p className="text-gray-600 mb-3"> Browse our comprehensive catalog of 350+ services across Micro SaaS,AI,and IT solutions. </p> <Link href="/services-catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Browse Services <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">2</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3> <p className="text-gray-600 mb-3"> Contact our team for a personalized quote and consultation based on your specific needs. </p> <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Request Quote <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">3</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3> <p className="text-gray-600 mb-3"> Our expert team will implement and configure your chosen solutions with full support. </p> <div className="flex items-center text-green-600"> <CheckCircle className="w-5 h-5 mr-2" /> <span className="font-medium">Full implementation support included</span> </div> </div> </div> </div> </div> {} <div className="grid md:grid-cols-3 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h3> <p className="text-gray-600 mb-4"> 150+ specialized micro applications for specific business needs. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> Explore Micro SaaS → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3> <p className="text-gray-600 mb-4"> 100+ AI-powered solutions for automation and intelligence. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore AI Services → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3> <p className="text-gray-600 mb-4"> 100+ comprehensive IT solutions and enterprise services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore IT Services → </Link> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2> <p className="text-gray-600 mb-6"> Our team is here to help you get started. Contact us for personalized assistance. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Call {contact.phone} </a> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Email Us </a> </div> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,CheckCircle,ExternalLink,Book } from 'lucide-react'; export default function GettingStarted() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>Getting Started - Zion Tech Group Documentation</title> <meta name="description" content="Quick start guide to begin using Zion Tech Group's innovative micro SaaS,AI,and IT services." /> <link rel="canonical" href={`${contact.site}/docs/getting-started`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1> <p className="text-xl text-gray-600"> Welcome to Zion Tech Group! This guide will help you get up and running with our services quickly. </p> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center"> <Book className="w-6 h-6 mr-3 text-blue-600" /> Quick Start Guide </h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">1</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Service</h3> <p className="text-gray-600 mb-3"> Browse our comprehensive catalog of 350+ services across Micro SaaS,AI,and IT solutions. </p> <Link href="/services-catalog" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Browse Services <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">2</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3> <p className="text-gray-600 mb-3"> Contact our team for a personalized quote and consultation based on your specific needs. </p> <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700"> Request Quote <ExternalLink className="w-4 h-4 ml-1" /> </Link> </div> </div> <div className="flex items-start space-x-4"> <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"> <span className="text-blue-600 font-semibold">3</span> </div> <div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3> <p className="text-gray-600 mb-3"> Our expert team will implement and configure your chosen solutions with full support. </p> <div className="flex items-center text-green-600"> <CheckCircle className="w-5 h-5 mr-2" /> <span className="font-medium">Full implementation support included</span> </div> </div> </div> </div> </div> {} <div className="grid md:grid-cols-3 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS</h3> <p className="text-gray-600 mb-4"> 150+ specialized micro applications for specific business needs. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> Explore Micro SaaS → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3> <p className="text-gray-600 mb-4"> 100+ AI-powered solutions for automation and intelligence. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore AI Services → </Link> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3> <p className="text-gray-600 mb-4"> 100+ comprehensive IT solutions and enterprise services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> Explore IT Services → </Link> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2> <p className="text-gray-600 mb-6"> Our team is here to help you get started. Contact us for personalized assistance. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href={`tel:${contact.phone}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Call {contact.phone} </a> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Email Us </a> </div> </div> </div> </div> </> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
