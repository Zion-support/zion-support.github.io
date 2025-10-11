import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to AWS, Azure, or GCP with zero downtime and enhanced security.',
      features: ['Multi-cloud strategy', 'Zero downtime migration', 'Cost optimization', 'Security compliance', 'Disaster recovery', '24/7 monitoring'],
      pricing: '$4,500 - $15,000',
      marketPrice: '$8,000 - $25,000',
      link: '/cloud-migration',
      popular: true,
      duration: '2-6 weeks',
      users: '500+',
      rating: '4.9'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including SOC 2, GDPR, HIPAA compliance and threat protection.',
      features: ['Security audit & assessment', 'Penetration testing', 'Compliance management', '24/7 SOC monitoring', 'Incident response', 'Security training'],
      pricing: '$2,500 - $8,000/month',
      marketPrice: '$5,000 - $15,000/month',
      link: '/cybersecurity-solutions',
      popular: true,
      duration: 'Ongoing',
      users: '300+',
      rating: '4.8'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated deployment, monitoring, and infrastructure as code.',
      features: ['CI/CD pipeline setup', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & alerting', 'GitOps workflows', 'Performance optimization'],
      pricing: '$5,000 - $12,000',
      marketPrice: '$10,000 - $20,000',
      link: '/devops-cicd',
      popular: true,
      duration: '4-8 weeks',
      users: '400+',
      rating: '4.7'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Advanced data analytics platform with real-time dashboards, machine learning, and predictive insights.',
      features: ['Data warehousing', 'Business intelligence', 'Predictive analytics', 'Custom dashboards', 'Data visualization', 'ML model deployment'],
      pricing: '$3,500 - $10,000/month',
      marketPrice: '$7,000 - $18,000/month',
      link: '/data-analytics',
      popular: false,
      duration: '6-12 weeks',
      users: '250+',
      rating: '4.9'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX and backend integration.',
      features: ['Native iOS/Android apps', 'React Native/Flutter', 'UI/UX design', 'Backend API development', 'App store deployment', 'Maintenance & updates'],
      pricing: '$8,000 - $50,000',
      marketPrice: '$15,000 - $80,000',
      link: '/mobile-development',
      popular: true,
      duration: '8-16 weeks',
      users: '600+',
      rating: '4.8'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Blockchain & Web3 Solutions',
      description: 'Complete blockchain development including smart contracts, DeFi protocols, and NFT marketplaces.',
      features: ['Smart contract development', 'DeFi protocols', 'NFT marketplace', 'Token development', 'DApp creation', 'Blockchain consulting'],
      pricing: '$15,000 - $100,000',
      marketPrice: '$30,000 - $200,000',
      link: '/blockchain',
      popular: false,
      duration: '12-24 weeks',
      users: '150+',
      rating: '4.6'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      features: ['Custom web applications', 'API development', 'Database design', 'Third-party integrations', 'Performance optimization', 'Maintenance & support'],
      pricing: '$10,000 - $75,000',
      marketPrice: '$20,000 - $150,000',
      link: '/custom-development',
      popular: true,
      duration: '8-20 weeks',
      users: '800+',
      rating: '4.9'
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, networks, and end-user support.',
      features: ['Server management', 'Network administration', 'Help desk support', 'Hardware procurement', 'Software licensing', 'Disaster recovery'],
      pricing: '$2,000 - $8,000/month',
      marketPrice: '$4,000 - $15,000/month',
      link: '/infrastructure-management',
      popular: false,
      duration: 'Ongoing',
      users: '200+',
      rating: '4.7'
    },
    {
      icon: <Database className="w-8 h-8 text-pink-500" />,
      title: 'Database Administration',
      description: 'Expert database management, optimization, and migration services for all major database systems.',
      features: ['Database design & optimization', 'Migration services', 'Backup & recovery', 'Performance tuning', 'Security hardening', '24/7 monitoring'],
      pricing: '$1,500 - $5,000/month',
      marketPrice: '$3,000 - $10,000/month',
      link: '/database-administration',
      popular: false,
      duration: 'Ongoing',
      users: '180+',
      rating: '4.8'
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Reduce IT costs by up to 50% with our optimized solutions and competitive pricing',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development with 30% faster delivery times than industry average',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with 15+ years of experience and 99% client satisfaction',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support with 15-minute response time guarantee',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your current IT infrastructure and identify improvement opportunities.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a detailed roadmap with timelines, resources, and deliverables.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing maintenance, monitoring, and optimization services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to modernize your infrastructure, enhance security, and accelerate digital transformation. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our proven IT solutions and expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to meet your business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Popular Choice
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
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
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      {service.marketPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{service.marketPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{service.users} projects completed</div>
                  {service.marketPrice && (
                    <div className="text-xs text-green-400 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  )}
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful IT implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your IT Transformation
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
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