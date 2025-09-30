import React from 'react';
import Link from 'next/link';
import NewContentShowcase2026 from './components/NewContentShowcase2026';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-8">
            AI, Micro SaaS, and IT Services
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
            and enterprise IT solutions that drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* New Content Showcase */}
      <NewContentShowcase2026 />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900">AI Business Automation</h3>
                <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive automation platform with 85% cost reduction and 300% productivity increase</p>
              <Link href="/services/ai-business-automation-platform" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <span>Explore Platform</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Workflow Automation</h3>
              <p className="text-gray-600 mb-4">Automate business processes with intelligent workflow design and smart triggers</p>
              <Link href="/services/ai-workflow-automation" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Virtual Assistant</h3>
              <p className="text-gray-600 mb-4">24/7 intelligent customer support with natural language processing</p>
              <Link href="/services/ai-virtual-assistant" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our AI transformation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">HEALTHCARE</span>
                <span className="text-gray-500 text-sm">Case Study</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Healthcare Revolution</h3>
              <p className="text-gray-600 mb-6">
                A major healthcare provider achieved 90% faster diagnosis times and 75% cost reduction using our AI-powered medical imaging and diagnostic systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-600">Faster Diagnosis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
              <Link 
                href="/case-studies/ai-healthcare-revolution-2026"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                <span>Read Full Case Study</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">ENTERPRISE</span>
                <span className="text-gray-500 text-sm">Transformation</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Enterprise Transformation</h3>
              <p className="text-gray-600 mb-6">
                Discover how organizations worldwide are achieving unprecedented transformation through intelligent automation, predictive analytics, and autonomous systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">300%</div>
                  <div className="text-sm text-gray-600">ROI Average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">78%</div>
                  <div className="text-sm text-gray-600">Adoption Rate</div>
                </div>
              </div>
              <Link 
                href="/blog/ai-2026-enterprise-transformation"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                <span>Read Complete Guide</span>
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}