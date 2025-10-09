import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckSquare, Calendar, DollarSign, BarChart, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Apps',
      description: 'Custom business applications designed to streamline your operations and improve productivity.',
      features: ['Custom Development', 'Mobile Apps', 'Web Applications', 'API Integration', 'User Management'],
      href: '/business-apps',
    },
    {
      icon: CheckSquare,
      title: 'Productivity Tools',
      description: 'Specialized tools to enhance team productivity and collaboration across your organization.',
      features: ['Task Management', 'Team Collaboration', 'Project Tracking', 'Time Management', 'Workflow Automation'],
      href: '/productivity',
    },
    {
      icon: Calendar,
      title: 'Task Manager Pro',
      description: 'Advanced task management solution with AI-powered scheduling and priority optimization.',
      features: ['Smart Scheduling', 'Priority Management', 'Team Collaboration', 'Progress Tracking', 'Deadline Alerts'],
      href: '/task-manager-pro',
    },
    {
      icon: DollarSign,
      title: 'Expense Tracker',
      description: 'Comprehensive expense tracking and financial management for businesses of all sizes.',
      features: ['Expense Categorization', 'Receipt Scanning', 'Budget Management', 'Financial Reports', 'Tax Preparation'],
      href: '/expense-tracker',
    },
    {
      icon: BarChart,
      title: 'Smart Analytics',
      description: 'Powerful analytics platform that provides insights into your business performance and growth.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Performance Metrics', 'Trend Analysis'],
      href: '/smart-analytics',
    },
  ];

  const features = [
    {
      title: 'Rapid Development',
      description: 'Get your SaaS solution up and running in weeks, not months.',
      icon: Zap,
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise.',
      icon: Briefcase,
    },
    {
      title: 'Modern UI/UX',
      description: 'Beautiful, intuitive interfaces that your users will love.',
      icon: CheckSquare,
    },
    {
      title: 'Cloud-Native',
      description: 'Fully cloud-based solutions with 99.9% uptime guarantee.',
      icon: BarChart,
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 2500,
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic SaaS application',
        'Up to 100 users',
        'Standard support',
        'Basic analytics',
        'Mobile responsive',
      ],
    },
    {
      name: 'Professional',
      price: 5000,
      description: 'Ideal for growing businesses',
      features: [
        'Advanced SaaS application',
        'Up to 1000 users',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
      ],
    },
    {
      name: 'Enterprise',
      price: 10000,
      description: 'For large organizations',
      features: [
        'Enterprise-grade SaaS',
        'Unlimited users',
        '24/7 support',
        'Custom analytics',
        'White-label solution',
        'Dedicated infrastructure',
      ],
    },
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS solutions for businesses. Specialized software applications including business apps, productivity tools, and analytics platforms."
        keywords={['micro SaaS', 'custom software', 'business apps', 'productivity tools', 'SaaS development']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Specialized software solutions designed to solve specific business problems. 
                Our micro SaaS applications are built for speed, scalability, and user experience, 
                helping you launch and grow your digital products quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Built for modern businesses that need specialized software solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Specialized software applications for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Micro SaaS Development Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Transparent pricing for custom micro SaaS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /project
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology for building successful micro SaaS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  We understand your business needs and define the project scope.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Design
                </h3>
                <p className="text-gray-600">
                  We create wireframes, mockups, and user experience designs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Development
                </h3>
                <p className="text-gray-600">
                  We build your micro SaaS solution using modern technologies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Launch
                </h3>
                <p className="text-gray-600">
                  We deploy your solution and provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create a custom micro SaaS solution that solves your specific business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+1-302-464-0950"
                className="flex items-center justify-center space-x-2 bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>Call +1-302-464-0950</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MicroSaasPage;