import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Custom Micro SaaS Development',
      description: 'Build tailored micro SaaS applications designed to solve specific business challenges.',
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'Multi-tenant Support']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Micro SaaS',
      description: 'Integrate artificial intelligence into your micro SaaS applications for enhanced functionality.',
      features: ['AI Integration', 'Machine Learning', 'Predictive Analytics', 'Automated Workflows']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting solutions for your micro SaaS applications.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Deployment & Scaling',
      description: 'Seamless deployment and automatic scaling solutions for your micro SaaS applications.',
      features: ['Cloud Deployment', 'Auto-scaling', 'Load Balancing', 'Performance Optimization']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Online retail solutions' },
    { name: 'Healthcare', description: 'Medical practice management' },
    { name: 'Finance', description: 'Financial services tools' },
    { name: 'Education', description: 'Learning management systems' },
    { name: 'Real Estate', description: 'Property management tools' },
    { name: 'Manufacturing', description: 'Production optimization' }
  ];

  const benefits = [
    'Faster time to market',
    'Lower development costs',
    'Easier maintenance and updates',
    'Better user experience',
    'Scalable architecture',
    '24/7 support and monitoring'
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Apps Built' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '80%', label: 'Faster Development' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions designed to solve specific business challenges. Scalable, cost-effective applications with AI integration." />
        <meta name="keywords" content="micro SaaS, custom SaaS, SaaS development, business applications, scalable software, AI-powered SaaS" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build custom micro SaaS applications that solve specific business problems 
              with scalable, cost-effective solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Micro SaaS Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Micro SaaS?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can create the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

      </div>"""
        <meta name=description content=Comprehensive micro SaaS solutions including AI-powered analytics, content management, customer support, and more. Transform your business with our innovative software solutions. />"""
        <meta name=keywords content=micro SaaS, software solutions, AI analytics, content management, customer support, business automation />""
      </Helmet>

      {/* Hero Section */}

              Micro SaaS Solutions
            </h1>"""
            <p className=text-xl text-gray-300 mb-8 leading-relaxed>
              Innovative micro SaaS products designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">"""
              From AI-powered analytics to automated customer support, our micro SaaS solutions 
              provide powerful, cost-effective tools to accelerate your business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaaSSolutionsPage;
