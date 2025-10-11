import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, Server, Globe, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: [
        'AWS, Azure, and GCP expertise',
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity services and advanced threat protection.',
      features: [
        'Security assessment',
        'Penetration testing',
        'Firewall configuration',
        'Incident response',
        'Security training',
        'Compliance auditing'
      ],
      pricing: '$1,500/month',
      popular: true,
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'Custom Development',
      description: 'Build tailored software solutions that meet your specific business requirements and goals.',
      features: [
        'Web applications',
        'Mobile apps',
        'API development',
        'Database design',
        'Third-party integrations',
        'Maintenance & support'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/custom-development'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Predictive analytics',
        'Real-time dashboards',
        'Data visualization',
        'Machine learning models'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android with our expert mobile development team.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'App maintenance'
      ],
      pricing: 'Starting at $8,000',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: <Server className="w-12 h-12 text-yellow-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with our DevOps services and continuous integration solutions.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      pricing: '$1,800/month',
      popular: true,
      link: '/devops-cicd'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all your IT infrastructure.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'IT services that grow with your business from startup to enterprise scale.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Cost Effective',
      description: 'Optimize your IT spending with our cost-effective solutions and transparent pricing.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, data analytics, and mobile development. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, data analytics, mobile development, DevOps" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                IT Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, 
                and accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose from our comprehensive suite of IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                      4.9
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the benefits of professional IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our IT experts help you build a robust, secure, and scalable technology foundation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free IT Assessment
                  </Link>
                  <Link 
                    to="/cloud-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Cloud Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;