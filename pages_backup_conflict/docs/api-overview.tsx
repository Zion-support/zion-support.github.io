

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
import { ArrowLeft, Code, Key, Zap, Shield } from 'lucide-react';
export default function APIOverview() {
  const contact = {
    "phone": '+1 302 464 0950',
    "email": 'kleber@ziontechgroup.com',
    "address": '364 E Main St STE 1008 Middletown DE 19709',
    "site": 'https://ziontechgroup.com'
  };
  return (
    <>
      <Head>
        <title>API Overview - Zion Tech Group Documentation</title>
        <meta name="description" content="Comprehensive overview of Zion Tech Group's API services and integration capabilities." />
        <link rel="canonical" href={`${contact.site}/docs/api-overview`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 "hover": text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Overview</h1>
            <p className="text-xl text-gray-600">
              Comprehensive API services for integrating Zion Tech Group's solutions into your applications.
            </p>
          </div>
          {/* API Features */}
          <div className="grid "md": grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">RESTful APIs</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Clean, intuitive REST APIs with comprehensive documentation and SDKs for popular languages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• JSON-based request/response format</li>
                <li>• HTTP status codes for clear error handling</li>
                <li>• Comprehensive API documentation</li>
                <li>• SDKs for JavaScript, Python, PHP, and more</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Key className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Authentication</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Secure API authentication using industry-standard methods including API keys and OAuth 2.0.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• API key authentication</li>
                <li>• OAuth 2.0 support</li>
                <li>• JWT token validation</li>
                <li>• Rate limiting and quotas</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Real-time Updates</h2>
              </div>
              <p className="text-gray-600 mb-4">
                WebSocket connections and webhooks for real-time data synchronization and event notifications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• WebSocket connections</li>
                <li>• Webhook notifications</li>
                <li>• Event streaming</li>
                <li>• Real-time data sync</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Security & Compliance</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with SOC 2 compliance, encryption, and comprehensive audit logs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SOC 2 Type II compliant</li>
                <li>• End-to-end encryption</li>
                <li>• Comprehensive audit logs</li>
                <li>• GDPR and CCPA compliant</li>
              </ul>
            </div>
          </div>
          {/* API Categories */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Categories</h2>
            <div className="grid "md": grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS APIs</h3>
                <p className="text-gray-600 mb-4">
                  APIs for our 150+ micro SaaS applications including cost optimization, analytics, and automation tools.
                </p>
                <Link href="/micro-saas" className="text-blue-600 "hover": text-blue-700 font-medium">
                  View Micro SaaS →
                </Link>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Service APIs</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning and AI APIs for natural language processing, computer vision, and predictive analytics.
                </p>
                <Link href="/ai-services" className="text-blue-600 "hover": text-blue-700 font-medium">
                  View AI Services →
                </Link>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Service APIs</h3>
                <p className="text-gray-600 mb-4">
                  Infrastructure and enterprise APIs for cloud management, DevOps, and cybersecurity services.
                </p>
                <Link href="/it-services" className="text-blue-600 "hover": text-blue-700 font-medium">
                  View IT Services →
                </Link>
              </div>
            </div>
          </div>
          {/* Getting Started */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Contact our team to get your API access and start integrating our services.
            </p>
            <div className="flex flex-col "sm": flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get API Access
              </Link>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg "hover": bg-blue-50 transition-colors">
                Contact Support
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
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,Code,Key,Zap,Shield } from 'lucide-react'; export default function APIOverview() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>API Overview - Zion Tech Group Documentation</title> <meta name="description" content="Comprehensive overview of Zion Tech Group's API services and integration capabilities." /> <link rel="canonical" href={`${contact.site}/docs/api-overview`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">API Overview</h1> <p className="text-xl text-gray-600"> Comprehensive API services for integrating Zion Tech Group's solutions into your applications. </p> </div> {} <div className="grid md:grid-cols-2 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Code className="w-8 h-8 text-blue-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">RESTful APIs</h2> </div> <p className="text-gray-600 mb-4"> Clean,intuitive REST APIs with comprehensive documentation and SDKs for popular languages. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• JSON-based request/response format</li> <li>• HTTP status codes for clear error handling</li> <li>• Comprehensive API documentation</li> <li>• SDKs for JavaScript,Python,PHP,and more</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Key className="w-8 h-8 text-green-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Authentication</h2> </div> <p className="text-gray-600 mb-4"> Secure API authentication using industry-standard methods including API keys and OAuth 2.0. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• API key authentication</li> <li>• OAuth 2.0 support</li> <li>• JWT token validation</li> <li>• Rate limiting and quotas</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Zap className="w-8 h-8 text-purple-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Real-time Updates</h2> </div> <p className="text-gray-600 mb-4"> WebSocket connections and webhooks for real-time data synchronization and event notifications. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• WebSocket connections</li> <li>• Webhook notifications</li> <li>• Event streaming</li> <li>• Real-time data sync</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Shield className="w-8 h-8 text-red-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Security & Compliance</h2> </div> <p className="text-gray-600 mb-4"> Enterprise-grade security with SOC 2 compliance,encryption,and comprehensive audit logs. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• SOC 2 Type II compliant</li> <li>• End-to-end encryption</li> <li>• Comprehensive audit logs</li> <li>• GDPR and CCPA compliant</li> </ul> </div> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Categories</h2> <div className="grid md:grid-cols-3 gap-6"> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS APIs</h3> <p className="text-gray-600 mb-4"> APIs for our 150+ micro SaaS applications including cost optimization,analytics,and automation tools. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> View Micro SaaS → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Service APIs</h3> <p className="text-gray-600 mb-4"> Machine learning and AI APIs for natural language processing,computer vision,and predictive analytics. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> View AI Services → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Service APIs</h3> <p className="text-gray-600 mb-4"> Infrastructure and enterprise APIs for cloud management,DevOps,and cybersecurity services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> View IT Services → </Link> </div> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2> <p className="text-gray-600 mb-6"> Contact our team to get your API access and start integrating our services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get API Access </Link> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Contact Support </a> </div> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,Code,Key,Zap,Shield } from 'lucide-react'; export default function APIOverview() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>API Overview - Zion Tech Group Documentation</title> <meta name="description" content="Comprehensive overview of Zion Tech Group's API services and integration capabilities." /> <link rel="canonical" href={`${contact.site}/docs/api-overview`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">API Overview</h1> <p className="text-xl text-gray-600"> Comprehensive API services for integrating Zion Tech Group's solutions into your applications. </p> </div> {} <div className="grid md:grid-cols-2 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Code className="w-8 h-8 text-blue-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">RESTful APIs</h2> </div> <p className="text-gray-600 mb-4"> Clean,intuitive REST APIs with comprehensive documentation and SDKs for popular languages. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• JSON-based request/response format</li> <li>• HTTP status codes for clear error handling</li> <li>• Comprehensive API documentation</li> <li>• SDKs for JavaScript,Python,PHP,and more</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Key className="w-8 h-8 text-green-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Authentication</h2> </div> <p className="text-gray-600 mb-4"> Secure API authentication using industry-standard methods including API keys and OAuth 2.0. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• API key authentication</li> <li>• OAuth 2.0 support</li> <li>• JWT token validation</li> <li>• Rate limiting and quotas</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Zap className="w-8 h-8 text-purple-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Real-time Updates</h2> </div> <p className="text-gray-600 mb-4"> WebSocket connections and webhooks for real-time data synchronization and event notifications. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• WebSocket connections</li> <li>• Webhook notifications</li> <li>• Event streaming</li> <li>• Real-time data sync</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Shield className="w-8 h-8 text-red-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Security & Compliance</h2> </div> <p className="text-gray-600 mb-4"> Enterprise-grade security with SOC 2 compliance,encryption,and comprehensive audit logs. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• SOC 2 Type II compliant</li> <li>• End-to-end encryption</li> <li>• Comprehensive audit logs</li> <li>• GDPR and CCPA compliant</li> </ul> </div> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Categories</h2> <div className="grid md:grid-cols-3 gap-6"> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS APIs</h3> <p className="text-gray-600 mb-4"> APIs for our 150+ micro SaaS applications including cost optimization,analytics,and automation tools. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> View Micro SaaS → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Service APIs</h3> <p className="text-gray-600 mb-4"> Machine learning and AI APIs for natural language processing,computer vision,and predictive analytics. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> View AI Services → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Service APIs</h3> <p className="text-gray-600 mb-4"> Infrastructure and enterprise APIs for cloud management,DevOps,and cybersecurity services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> View IT Services → </Link> </div> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2> <p className="text-gray-600 mb-6"> Contact our team to get your API access and start integrating our services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get API Access </Link> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Contact Support </a> </div> </div> </div> </div> </> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,Code,Key,Zap,Shield } from 'lucide-react'; export default function APIOverview() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>API Overview - Zion Tech Group Documentation</title> <meta name="description" content="Comprehensive overview of Zion Tech Group's API services and integration capabilities." /> <link rel="canonical" href={`${contact.site}/docs/api-overview`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">API Overview</h1> <p className="text-xl text-gray-600"> Comprehensive API services for integrating Zion Tech Group's solutions into your applications. </p> </div> {} <div className="grid md:grid-cols-2 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Code className="w-8 h-8 text-blue-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">RESTful APIs</h2> </div> <p className="text-gray-600 mb-4"> Clean,intuitive REST APIs with comprehensive documentation and SDKs for popular languages. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• JSON-based request/response format</li> <li>• HTTP status codes for clear error handling</li> <li>• Comprehensive API documentation</li> <li>• SDKs for JavaScript,Python,PHP,and more</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Key className="w-8 h-8 text-green-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Authentication</h2> </div> <p className="text-gray-600 mb-4"> Secure API authentication using industry-standard methods including API keys and OAuth 2.0. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• API key authentication</li> <li>• OAuth 2.0 support</li> <li>• JWT token validation</li> <li>• Rate limiting and quotas</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Zap className="w-8 h-8 text-purple-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Real-time Updates</h2> </div> <p className="text-gray-600 mb-4"> WebSocket connections and webhooks for real-time data synchronization and event notifications. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• WebSocket connections</li> <li>• Webhook notifications</li> <li>• Event streaming</li> <li>• Real-time data sync</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Shield className="w-8 h-8 text-red-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Security & Compliance</h2> </div> <p className="text-gray-600 mb-4"> Enterprise-grade security with SOC 2 compliance,encryption,and comprehensive audit logs. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• SOC 2 Type II compliant</li> <li>• End-to-end encryption</li> <li>• Comprehensive audit logs</li> <li>• GDPR and CCPA compliant</li> </ul> </div> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Categories</h2> <div className="grid md:grid-cols-3 gap-6"> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS APIs</h3> <p className="text-gray-600 mb-4"> APIs for our 150+ micro SaaS applications including cost optimization,analytics,and automation tools. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> View Micro SaaS → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Service APIs</h3> <p className="text-gray-600 mb-4"> Machine learning and AI APIs for natural language processing,computer vision,and predictive analytics. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> View AI Services → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Service APIs</h3> <p className="text-gray-600 mb-4"> Infrastructure and enterprise APIs for cloud management,DevOps,and cybersecurity services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> View IT Services → </Link> </div> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2> <p className="text-gray-600 mb-6"> Contact our team to get your API access and start integrating our services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get API Access </Link> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Contact Support </a> </div> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowLeft,Code,Key,Zap,Shield } from 'lucide-react'; export default function APIOverview() { const contact = { phone: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',site: 'https: }; return ( <> <Head> <title>API Overview - Zion Tech Group Documentation</title> <meta name="description" content="Comprehensive overview of Zion Tech Group's API services and integration capabilities." /> <link rel="canonical" href={`${contact.site}/docs/api-overview`} /> </Head> <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> <div className="max-w-4xl mx-auto px-4 py-8"> {} <div className="mb-8"> <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Documentation </Link> <h1 className="text-4xl font-bold text-gray-900 mb-4">API Overview</h1> <p className="text-xl text-gray-600"> Comprehensive API services for integrating Zion Tech Group's solutions into your applications. </p> </div> {} <div className="grid md:grid-cols-2 gap-6 mb-8"> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Code className="w-8 h-8 text-blue-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">RESTful APIs</h2> </div> <p className="text-gray-600 mb-4"> Clean,intuitive REST APIs with comprehensive documentation and SDKs for popular languages. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• JSON-based request/response format</li> <li>• HTTP status codes for clear error handling</li> <li>• Comprehensive API documentation</li> <li>• SDKs for JavaScript,Python,PHP,and more</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Key className="w-8 h-8 text-green-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Authentication</h2> </div> <p className="text-gray-600 mb-4"> Secure API authentication using industry-standard methods including API keys and OAuth 2.0. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• API key authentication</li> <li>• OAuth 2.0 support</li> <li>• JWT token validation</li> <li>• Rate limiting and quotas</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Zap className="w-8 h-8 text-purple-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Real-time Updates</h2> </div> <p className="text-gray-600 mb-4"> WebSocket connections and webhooks for real-time data synchronization and event notifications. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• WebSocket connections</li> <li>• Webhook notifications</li> <li>• Event streaming</li> <li>• Real-time data sync</li> </ul> </div> <div className="bg-white rounded-lg shadow-lg p-6"> <div className="flex items-center mb-4"> <Shield className="w-8 h-8 text-red-600 mr-3" /> <h2 className="text-xl font-semibold text-gray-900">Security & Compliance</h2> </div> <p className="text-gray-600 mb-4"> Enterprise-grade security with SOC 2 compliance,encryption,and comprehensive audit logs. </p> <ul className="space-y-2 text-sm text-gray-600"> <li>• SOC 2 Type II compliant</li> <li>• End-to-end encryption</li> <li>• Comprehensive audit logs</li> <li>• GDPR and CCPA compliant</li> </ul> </div> </div> {} <div className="bg-white rounded-lg shadow-lg p-8 mb-8"> <h2 className="text-2xl font-semibold text-gray-900 mb-6">API Categories</h2> <div className="grid md:grid-cols-3 gap-6"> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">Micro SaaS APIs</h3> <p className="text-gray-600 mb-4"> APIs for our 150+ micro SaaS applications including cost optimization,analytics,and automation tools. </p> <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium"> View Micro SaaS → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Service APIs</h3> <p className="text-gray-600 mb-4"> Machine learning and AI APIs for natural language processing,computer vision,and predictive analytics. </p> <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-medium"> View AI Services → </Link> </div> <div className="border border-gray-200 rounded-lg p-6"> <h3 className="text-lg font-semibold text-gray-900 mb-3">IT Service APIs</h3> <p className="text-gray-600 mb-4"> Infrastructure and enterprise APIs for cloud management,DevOps,and cybersecurity services. </p> <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-medium"> View IT Services → </Link> </div> </div> </div> {} <div className="bg-blue-50 rounded-lg p-8 text-center"> <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2> <p className="text-gray-600 mb-6"> Contact our team to get your API access and start integrating our services. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"> Get API Access </Link> <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"> Contact Support </a> </div> </div> </div> </div> </> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
