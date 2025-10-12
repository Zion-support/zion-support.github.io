import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime deployment', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,999',
      link: '/it-services/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and protection for your digital assets and infrastructure.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Compliance audit', 'Security training'],
      pricing: 'Starting at $1,999',
      link: '/it-services/cybersecurity-audit',
      popular: true
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Container orchestration', 'Monitoring & logging', 'Infrastructure as code'],
      pricing: 'Starting at $3,999',
      link: '/devops',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', '24/7 monitoring'],
      pricing: 'Starting at $1,499',
      link: '/database-management',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure with proactive monitoring and maintenance.',
      features: ['Server management', 'Network monitoring', 'Performance optimization', 'Disaster recovery'],
      pricing: 'Starting at $2,499',
      link: '/infrastructure',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store deployment'],
      pricing: 'Starting at $4,999',
      link: '/mobile-development',
      popular: false
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with industry-standard compliance and monitoring'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your systems'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT'
    },
    {
      icon: <Network className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'TechFlow Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The migration was seamless and our performance improved by 300%.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'DataCorp Solutions',
      content: 'Their cybersecurity audit identified critical vulnerabilities we never knew existed. Highly professional team.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'CloudFirst Technologies',
      content: 'The DevOps implementation reduced our deployment time from hours to minutes. Incredible efficiency gains.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Enterprise-grade technology services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, infrastructure, enterprise technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of IT services tailored to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade IT solutions with unmatched expertise and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses already using our IT solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IT Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
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