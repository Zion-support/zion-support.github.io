import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Server, Database, Cloud, Code, Wrench, Lock, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      services: [
        { name: 'AI Consulting', path: '/ai-services', description: 'Strategic AI implementation and consulting' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation and optimization' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent business process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'AI solutions for healthcare and medical applications' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'AI-powered financial services and trading' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation and optimization' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced analytics and business intelligence' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security and threat detection' }
      ],
      pricing: 'Starting at $1,500/month',
      benefits: ['Increase efficiency by 300%', 'Reduce costs by 40%', 'Improve accuracy by 95%', 'Enable 24/7 operations']
    },
    {
      title: 'IT Services',
      icon: Server,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Comprehensive IT infrastructure and enterprise solutions',
      services: [
        { name: 'Cloud Infrastructure', path: '/it-services', description: 'Cloud setup, migration, and management' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Enterprise security and compliance solutions' },
        { name: 'Software Development', path: '/it-services', description: 'Custom software and web applications' },
        { name: 'DevOps & CI/CD', path: '/it-services', description: 'Automated deployment and infrastructure as code' },
        { name: 'Database Management', path: '/it-services', description: 'Database design, optimization, and migration' },
        { name: 'Network Solutions', path: '/it-services', description: 'Network design, security, and monitoring' },
        { name: 'IT Support', path: '/it-services', description: '24/7 technical support and helpdesk services' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'ERP, CRM, and business process automation' }
      ],
      pricing: 'Starting at $1,000/month',
      benefits: ['99.9% uptime guarantee', 'Reduce IT costs by 30%', 'Improve security posture', 'Scale infrastructure efficiently']
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Affordable, powerful AI-driven tools for modern businesses',
      services: [
        { name: 'Developer Tools', path: '/micro-saas', description: 'AI-powered coding and development tools' },
        { name: 'Business Apps', path: '/micro-saas', description: 'Custom business applications and workflows' },
        { name: 'Productivity Tools', path: '/micro-saas', description: 'AI-enhanced productivity and collaboration tools' },
        { name: 'Marketing Tools', path: '/micro-saas', description: 'AI marketing automation and analytics' },
        { name: 'Analytics Tools', path: '/micro-saas', description: 'Business intelligence and data visualization' },
        { name: 'Content Tools', path: '/micro-saas', description: 'AI content creation and management' },
        { name: 'Finance Tools', path: '/micro-saas', description: 'Financial planning and expense management' },
        { name: 'HR Tools', path: '/micro-saas', description: 'Human resources and recruitment solutions' }
      ],
      pricing: 'Starting at $79/month',
      benefits: ['50+ ready-to-use applications', 'Save up to 50% vs market rates', 'Deploy in minutes', 'Scale as you grow']
    },
    {
      title: 'Specialized Solutions',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Cutting-edge technologies for next-generation applications',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum algorithms and computing solutions' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing and intelligent systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized applications and smart contracts' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Internet of Things and edge computing solutions' },
        { name: 'Robotics', path: '/robotics', description: 'Robotic process automation and intelligent robots' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Advanced analytics and decision support' }
      ],
      pricing: 'Custom Pricing',
      benefits: ['Future-proof technology', 'Competitive advantage', 'Innovation leadership', 'Custom solutions']
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '$2.5B+', label: 'Cost Savings Delivered', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our operations with AI solutions that delivered $50M in annual savings. Their expertise is unmatched.",
      author: "Sarah Johnson",
      role: "CTO, Fortune 500 Company",
      rating: 5
    },
    {
      quote: "The digital transformation they implemented increased our efficiency by 300%. Highly recommend their services.",
      author: "Michael Chen",
      role: "VP Operations, Global Corp",
      rating: 5
    },
    {
      quote: "Outstanding cloud infrastructure and AI implementation. They exceeded all our expectations.",
      author: "Emily Rodriguez",
      role: "Director of Technology, Tech Giant",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and technology services including cloud infrastructure, cybersecurity, software development, and specialized solutions." />
        <meta name="keywords" content="AI services, IT services, micro saas, cloud infrastructure, cybersecurity, software development, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Comprehensive AI, IT, and technology solutions to transform your business and drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, index) => (
          <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                  {category.description}
                </p>
                <div className="text-2xl font-bold text-purple-600 mb-8">
                  {category.pricing}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <a 
                      href={service.path}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-purple-100">
                Trusted by industry leaders worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-purple-200 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;