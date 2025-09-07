import React from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'about, company, mission, AI solutions, micro SaaS, IT services, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'About | Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering the future of technology with innovative solutions that transform businesses and drive digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth. We believe in the transformative power of AI, cloud computing, 
              and modern software development to solve complex business challenges.
            </p>
            <p className="text-lg text-slate-300">
              Our mission is to make advanced technology accessible and practical for businesses 
              of all sizes, from startups to enterprise organizations.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-slate-300 mb-6">
              To be the leading provider of micro SaaS products and AI services, creating a 
              world where technology seamlessly integrates with business operations to deliver 
              unprecedented value and efficiency.
            </p>
            <p className="text-lg text-slate-300">
              We envision a future where every business has access to enterprise-grade 
              technology solutions that are both powerful and easy to use.
            </p>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology, always seeking new and better ways to solve problems.",
                icon: "💡"
              },
              {
                title: "Quality",
                description: "We deliver solutions that meet the highest standards of performance, reliability, and user experience.",
                icon: "⭐"
              },
              {
                title: "Partnership",
                description: "We work closely with our clients as partners, understanding their unique needs and challenges.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our innovative solutions can help transform your business 
            and drive your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
import React from 'react';
import { Award, Users, Target, Globe, CheckCircle, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Leading the future of enterprise technology with innovative AI solutions, 
              micro SaaS development, and comprehensive IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we are dedicated to transforming businesses through 
                cutting-edge technology solutions. Our mission is to deliver enterprise-grade 
                AI, micro SaaS, and IT services that drive real business results and accelerate 
                digital transformation.
              </p>
              <p className="text-lg text-gray-600">
                We believe in the power of technology to solve complex business challenges 
                and create opportunities for growth and innovation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Innovation and Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Client Success Focus</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Continuous Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Ethical Technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100">
              Delivering measurable results for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Services Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse team of experts passionate about technology and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Engineers</h3>
              <p className="text-gray-600">Machine learning and AI specialists</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SaaS Developers</h3>
              <p className="text-gray-600">Micro SaaS and cloud experts</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Specialists</h3>
              <p className="text-gray-600">Infrastructure and DevOps professionals</p>
            </div>
          </div>
        </div>
      </section>
            >
              Get In Touch
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
    </div>
  );
}
