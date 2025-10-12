import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime deployment', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $2,500',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      link: '/cloud-migration'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security solutions and compliance management.',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      price: '$1,500/month',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/cybersecurity-solutions'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Automated testing'],
      price: '$2,000/month',
      icon: <Code className="w-8 h-8 text-green-500" />,
      link: '/devops-cicd'
    },
    {
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization tools.',
      features: ['Data visualization', 'Predictive analytics', 'Business intelligence', 'Custom dashboards'],
      price: '$2,000/month',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      link: '/data-analytics'
    },
    {
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native iOS/Android apps', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      price: 'Starting at $5,000',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      link: '/mobile-development'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure and transparent business processes.',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'DeFi solutions'],
      price: 'Starting at $10,000',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      link: '/blockchain'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve system reliability by 99.9%',
    'Accelerate development cycles by 50%',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Scalable and future-proof solutions'
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, mobile development, and data analytics." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Complete <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IT Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your IT infrastructure with our comprehensive services. From cloud migration to cybersecurity, 
                we provide end-to-end IT solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of IT services designed to modernize and secure your infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our IT solutions are designed to deliver measurable results and transform your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to Modernize Your IT Infrastructure?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;
