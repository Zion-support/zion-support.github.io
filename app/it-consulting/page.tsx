import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, BarChart, CheckCircle, Star, TrendingUp, Clock, Phone, Mail, MapPin, Brain, Shield, Zap, Settings, Globe, Cpu, Database, Wifi, Server } from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development and technology roadmap planning for digital transformation.',
      features: ['Technology Assessment', 'Digital Roadmap', 'ROI Analysis', 'Implementation Planning'],
      benefits: ['Clear Direction', 'Cost Optimization', 'Risk Mitigation', 'Competitive Advantage']
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Expert security consulting to protect your business from cyber threats and ensure compliance.',
      features: ['Security Assessment', 'Compliance Review', 'Risk Analysis', 'Security Strategy'],
      benefits: ['Enhanced Security', 'Regulatory Compliance', 'Risk Reduction', 'Peace of Mind']
    },
    {
      icon: Zap,
      title: 'Cloud Strategy',
      description: 'Cloud migration and optimization strategies to modernize your infrastructure and reduce costs.',
      features: ['Cloud Assessment', 'Migration Planning', 'Cost Optimization', 'Security Design'],
      benefits: ['Reduced Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
    },
    {
      icon: BarChart,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting to modernize your business processes and technology.',
      features: ['Process Analysis', 'Technology Selection', 'Change Management', 'Training Programs'],
      benefits: ['Improved Efficiency', 'Better Customer Experience', 'Increased Revenue', 'Future-Proof Business']
    },
    {
      icon: Settings,
      title: 'IT Governance',
      description: 'IT governance and compliance consulting to ensure proper IT management and regulatory adherence.',
      features: ['Policy Development', 'Compliance Management', 'Risk Assessment', 'Audit Support'],
      benefits: ['Better Control', 'Regulatory Compliance', 'Risk Management', 'Improved Decision Making']
    },
    {
      icon: Globe,
      title: 'Technology Integration',
      description: 'Seamless integration of new technologies with existing systems for optimal performance.',
      features: ['System Integration', 'API Development', 'Data Migration', 'Testing & Validation'],
      benefits: ['Smooth Integration', 'Reduced Downtime', 'Better Performance', 'Cost Savings']
    }
  ];

  const consultingAreas = [
    { name: 'Enterprise Architecture', description: 'Design and implement enterprise-wide technology architecture' },
    { name: 'Digital Strategy', description: 'Develop comprehensive digital transformation strategies' },
    { name: 'Cloud Consulting', description: 'Cloud migration, optimization, and management consulting' },
    { name: 'Security Consulting', description: 'Cybersecurity strategy and implementation consulting' },
    { name: 'Data Analytics', description: 'Data strategy and analytics implementation consulting' },
    { name: 'IT Operations', description: 'IT operations optimization and best practices consulting' },
    { name: 'Compliance & Governance', description: 'IT governance and regulatory compliance consulting' },
    { name: 'Change Management', description: 'Organizational change management for technology adoption' }
  ];

  const pricingPlans = [
    {
      name: 'Strategy Session',
      price: '$500',
      period: '/session',
      description: '2-hour strategic consultation',
      features: [
        'Technology assessment',
        'Strategic recommendations',
        'Action plan development',
        'Follow-up support',
        'Written report',
        '30-day support'
      ],
      popular: false
    },
    {
      name: 'Project Consulting',
      price: '$2,500',
      period: '/week',
      description: 'Ongoing project consulting',
      features: [
        'Weekly consultations',
        'Project oversight',
        'Technical guidance',
        'Risk management',
        'Progress reporting',
        'Team training',
        'Implementation support',
        'Quality assurance'
      ],
      popular: true
    },
    {
      name: 'Retainer Consulting',
      price: '$10,000',
      period: '/month',
      description: 'Dedicated consulting team',
      features: [
        'Dedicated consultant',
        'Unlimited consultations',
        'Priority support',
        'Strategic planning',
        'Technology evaluation',
        'Vendor management',
        'Compliance support',
        'Executive reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'TechFlow Systems',
      role: 'CEO',
      content: 'Zion Tech Group\'s IT consulting transformed our business. Their strategic guidance helped us modernize our technology and increase efficiency by 40%.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'DataCorp Industries',
      role: 'CTO',
      content: 'The cloud migration consulting was exceptional. We reduced our IT costs by 50% while improving performance and security.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateTech',
      role: 'IT Director',
      content: 'Their security consulting helped us achieve full compliance and significantly improve our security posture.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              IT Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Strategic IT Guidance for Digital Transformation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Expert IT consulting services to help you navigate technology challenges, optimize your IT infrastructure, 
              and achieve your digital transformation goals. Our experienced consultants provide strategic guidance 
              and practical solutions for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Get Free Consultation
              </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Our Consulting Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Our Consulting Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {consultingAreas.map((area, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{area.name}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Consulting Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Client Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT consulting experts help you develop a strategic technology roadmap for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITConsultingPage;