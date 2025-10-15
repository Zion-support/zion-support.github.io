import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      title: 'AI Content Moderator',
      description: 'Automated content moderation with 99.5% accuracy',
      price: 'Starting at $99/month',
      link: '/zion-ai-content-moderator',
      icon: '🛡️'
    },
    {
      title: 'AI Customer Churn Predictor',
      description: 'Predict customer churn with 95% accuracy',
      price: 'Starting at $149/month',
      link: '/zion-ai-customer-churn-predictor',
      icon: '📊'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'Intelligent expense management with OCR',
      price: 'Starting at $29/month',
      link: '/zion-smart-expense-tracker',
      icon: '💰'
    },
    {
      title: 'AI Workflow Automator',
      description: 'Automate business processes intelligently',
      price: 'Starting at $79/month',
      link: '/zion-ai-workflow-automator',
      icon: '⚡'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.5%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'AI Solutions' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="ai solutions, it services, cloud infrastructure, micro saas, content moderation, churn prediction, expense tracking, workflow automation" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with AI
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Leading provider of cutting-edge AI and IT solutions. We help businesses automate, optimize, and scale with intelligent technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Get Free Consultation
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured AI Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI-powered solutions designed to solve specific business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-bold text-green-600 mb-4">{service.price}</div>
                <Link 
                  to={service.link}
                  className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive AI & IT Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From AI development to cloud infrastructure, we provide end-to-end technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">Machine learning, natural language processing, computer vision, and automation solutions.</p>
                <Link to="/ai-services" className="text-purple-600 font-semibold hover:text-purple-700">
                  Explore AI Services →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600 mb-6">Cloud infrastructure, cybersecurity, network management, and technical support.</p>
                <Link to="/it-services" className="text-green-600 font-semibold hover:text-green-700">
                  Explore IT Services →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-600 mb-6">Specialized software solutions for specific business needs and workflows.</p>
                <Link to="/micro-saas-solutions" className="text-blue-600 font-semibold hover:text-blue-700">
                  Explore Micro SaaS →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Quick deployment and rapid time-to-value for all our solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance for all our solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and monitoring.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored solutions designed for your specific business needs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can drive growth and efficiency for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-blue-200">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-300 hover:text-blue-200">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;