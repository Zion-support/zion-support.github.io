import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { servicesData } from './data/servicesData';

const HomePage: React.FC = () => {
  const featuredServices = [
    ...servicesData.aiServices.slice(0, 2),
    ...servicesData.microSaas.slice(0, 2),
    ...servicesData.itSolutions.slice(0, 2)
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, micro SaaS solutions, and digital transformation." />
        <meta name="keywords" content="ai solutions, it services, micro saas, cloud infrastructure, digital transformation, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-600">{service.marketPrice}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold text-center hover:bg-blue-50 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Micro SaaS Solutions */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI-powered tools designed to solve specific business challenges
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/zion-ai-task-scheduler" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="text-lg font-semibold mb-2">AI Task Scheduler</h3>
                <p className="text-gray-400 text-sm">Intelligent task management and scheduling</p>
              </Link>
              <Link to="/zion-ai-customer-support-pro" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <div className="text-3xl mb-3">🎧</div>
                <h3 className="text-lg font-semibold mb-2">AI Customer Support</h3>
                <p className="text-gray-400 text-sm">24/7 automated customer service</p>
              </Link>
              <Link to="/zion-ai-workflow-automator-pro" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="text-lg font-semibold mb-2">AI Workflow Automator</h3>
                <p className="text-gray-400 text-sm">Automate business processes</p>
              </Link>
              <Link to="/zion-ai-content-moderator" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold mb-2">AI Content Moderator</h3>
                <p className="text-gray-400 text-sm">Automated content moderation</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
                <p className="text-gray-600">Quick deployment and rapid time-to-value for all our solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Track record of delivering measurable business outcomes</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support to ensure your success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and discover how our solutions can accelerate your growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;