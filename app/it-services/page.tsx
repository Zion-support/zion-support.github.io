import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, DollarSign, Clock, Users, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS, Azure, GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring', 'Disaster recovery'],
      price: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security audits', 'Penetration testing', 'Compliance management', 'Incident response', 'Security training', '24/7 monitoring'],
      price: '$1,500/month',
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      price: '$2,000/month',
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time analytics', 'Data visualization', 'Predictive modeling'],
      price: '$2,000/month',
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native app development', 'Cross-platform solutions', 'UI/UX design', 'App store optimization', 'Performance optimization', 'Maintenance & support'],
      price: 'Starting at $5,000',
      link: '/mobile-development'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Web Development',
      description: 'Build modern, responsive web applications with cutting-edge technologies.',
      features: ['Frontend development', 'Backend development', 'API development', 'Database design', 'Performance optimization', 'SEO optimization'],
      price: 'Starting at $3,000',
      link: '/web-development'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your valuable data.'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The migration was seamless and our systems are now more secure and efficient.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'DataFlow Solutions',
      content: 'Their cybersecurity solutions gave us peace of mind. We feel confident knowing our data is protected by industry-leading security measures.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateTech',
      content: 'The DevOps implementation streamlined our development process. We can now deploy updates faster and with fewer issues.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and web development. Expert solutions for your business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, web development" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Comprehensive IT Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our expert IT solutions. From cloud migration to cybersecurity, 
                we provide the technology foundation your business needs to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional IT solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their IT needs. 
              Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;