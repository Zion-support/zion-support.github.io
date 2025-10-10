import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including ML, NLP, and computer vision.',
      icon: '🤖',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions.',
      icon: '💻',
      link: '/it-services',
      features: ['Cloud Migration', 'Infrastructure Management', 'Cybersecurity', 'System Integration'],
      price: 'Starting at $800/month'
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses.',
      icon: '⚡',
      link: '/micro-saas',
      features: ['12+ Ready-to-use Tools', 'AI-Powered Automation', 'Instant Setup', '24/7 Support'],
      price: 'Starting at $79/month',
      popular: true
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: '☁️',
      link: '/cloud-solutions',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Multi-Cloud Strategy'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats.',
      icon: '🔒',
      link: '/cybersecurity',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance'],
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our analytics solutions.',
      icon: '📊',
      link: '/data-analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Real-time Dashboards'],
      price: 'Starting at $1,800/month'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: '15+ years of experience in AI and IT solutions',
      icon: '👥'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all our services',
      icon: '🕐'
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business',
      icon: '📈'
    },
    {
      title: 'Proven Results',
      description: '500+ successful projects completed',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business. From cutting-edge AI services to robust infrastructure solutions, we have everything you need to succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className={`card-futuristic glass-dark p-8 hover:shadow-2xl transition-all duration-500 ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold text-sm">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-futuristic text-lg px-6 py-4 float-animation">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your specific needs and find the perfect solution for your business. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Get Free Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;