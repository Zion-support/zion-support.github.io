import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Docker containerization', 'Kubernetes orchestration', 'Monitoring setup'],
      pricing: 'Starting at $3,000',
      link: '/devops-cicd',
      popular: false,
      duration: '3-6 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data warehousing', 'Business intelligence', 'Predictive analytics', 'Custom dashboards'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: false,
      duration: '4-8 weeks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS/Android apps', 'React Native development', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development',
      popular: true,
      duration: '6-12 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure transactions and smart contracts.',
      features: ['Smart contract development', 'DApp creation', 'Token development', 'Blockchain integration'],
      pricing: 'Starting at $8,000',
      link: '/blockchain',
      popular: false,
      duration: '8-16 weeks'
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Reduce IT costs by up to 40% with our optimized solutions',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times with agile development methodologies',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience',
      icon: <Users className="w-6 h-6 text-purple-500" />
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development. Expert solutions for your business needs." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain solutions" />
      </Helmet>
      
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Comprehensive IT solutions to accelerate your digital transformation and drive business growth.
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
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-400 mb-6">Duration: {service.duration}</div>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Us?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results with our proven expertise and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can help your business grow and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
