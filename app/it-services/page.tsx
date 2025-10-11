import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with ongoing management, optimization, and security for AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud migration strategy',
        'Infrastructure as Code (IaC)',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery planning'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-services'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat assessment, penetration testing, and ongoing security monitoring.',
      features: [
        'Security audits & assessments',
        'Penetration testing',
        'Vulnerability management',
        'Security training',
        'Incident response',
        'Compliance consulting'
      ],
      pricing: '$1,500/month',
      popular: false,
      link: '/cybersecurity'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: [
        'Web application development',
        'Mobile app development',
        'API development',
        'Database design',
        'System integration',
        'Maintenance & support'
      ],
      pricing: 'Starting at $5,000',
      popular: true,
      link: '/custom-development'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with our comprehensive analytics and business intelligence solutions.',
      features: [
        'Data warehousing',
        'Business intelligence dashboards',
        'Predictive analytics',
        'Data visualization',
        'ETL processes',
        'Real-time reporting'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern development practices.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Ongoing maintenance'
      ],
      pricing: 'Starting at $8,000',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with our DevOps consulting and implementation services.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & logging',
        'Performance optimization',
        'Team training'
      ],
      pricing: '$3,000/month',
      popular: false,
      link: '/devops'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your critical systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'IT services that grow with your business and adapt to changing needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and data analytics solutions." />
      </Helmet>
      
      <Navigation />
      
      <main>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900 via-blue-900 to-green-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete IT infrastructure solutions designed to optimize performance, enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
                >
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs and drive digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      {service.pricing}
                    </div>
                    <Link 
                      to={service.link} 
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver IT solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT infrastructure that supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your IT Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;