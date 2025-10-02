import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions - Zion Tech Group',
  description: 'Build and scale micro SaaS applications with our expert development team. From MVP to enterprise-grade SaaS solutions.',
  keywords: 'micro SaaS, SaaS development, software as a service, web applications, cloud software',
  robots: {
    index: true,
    follow: true,
  },
};

export default function MicroSaaS() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build, launch, and scale micro SaaS applications that solve real business problems. 
          From MVP to enterprise-grade solutions, we deliver results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Prototyping</h3>
          <p className="text-gray-600 mb-4">
            Quickly build and test your SaaS concept with our rapid prototyping approach.
          </p>
          <Link href="/services/ai-innovation-lab" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
          <p className="text-gray-600 mb-4">
            Build with scalability in mind using modern cloud-native architectures and microservices.
          </p>
          <Link href="/services/ai-cloud-infrastructure-2025" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
          <p className="text-gray-600 mb-4">
            Enterprise-grade security and compliance built into every micro SaaS solution.
          </p>
          <Link href="/security" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Insights</h3>
          <p className="text-gray-600 mb-4">
            Built-in analytics and reporting to help you understand user behavior and optimize your SaaS.
          </p>
          <Link href="/services/ai-data-analytics" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Deployment</h3>
          <p className="text-gray-600 mb-4">
            Deploy your micro SaaS on leading cloud platforms with automated CI/CD pipelines.
          </p>
          <Link href="/services/cloud-migration" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">API Integration</h3>
          <p className="text-gray-600 mb-4">
            Seamless integration with third-party services and APIs to extend your SaaS functionality.
          </p>
          <Link href="/api" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Micro SaaS Development Process</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">From Idea to Launch</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">1</span>
                </span>
                <span><strong>Discovery & Strategy:</strong> Define your target market and value proposition</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">2</span>
                </span>
                <span><strong>Design & Prototyping:</strong> Create user-centered design and rapid prototypes</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-purple-600 text-sm font-semibold">3</span>
                </span>
                <span><strong>Development:</strong> Build scalable, secure SaaS application</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-orange-600 text-sm font-semibold">4</span>
                </span>
                <span><strong>Launch & Scale:</strong> Deploy to production and optimize for growth</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• React/Next.js</li>
                  <li>• Vue.js/Nuxt</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Node.js/Python</li>
                  <li>• PostgreSQL/MongoDB</li>
                  <li>• Redis</li>
                  <li>• GraphQL/REST</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cloud</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AWS/Azure/GCP</li>
                  <li>• Docker/Kubernetes</li>
                  <li>• Terraform</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">AI/ML</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• TensorFlow/PyTorch</li>
                  <li>• OpenAI/Anthropic</li>
                  <li>• Vector Databases</li>
                  <li>• ML Pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Micro SaaS Solutions?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Time to Market</h3>
            <p className="text-gray-600">
              Launch your micro SaaS in weeks, not months, with our proven development methodology.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Ready</h3>
            <p className="text-gray-600">
              Built with enterprise-grade security, scalability, and compliance from day one.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Full-stack developers, designers, and DevOps engineers with SaaS expertise.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Micro SaaS?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Let's turn your SaaS idea into a successful, scalable business. Get started with a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </Link>
          <Link 
            href="/case-studies" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </div>
  );
}