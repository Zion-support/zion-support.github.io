import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Phone, Mail, MapPin, Award, Brain, Cloud, Lock, DollarSign, Target, BarChart3 } from 'lucide-react';

const ServicesAdvertisingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Transform your business with cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'AI Strategy Consulting',
          description: 'Comprehensive AI implementation strategies tailored to your business needs',
          price: '$2,500/month',
          marketPrice: '$5,000-10,000/month',
          features: ['AI readiness assessment', 'Custom AI roadmap', 'Technology selection', 'Implementation planning'],
          benefits: ['Increase efficiency by 40%', 'Reduce operational costs by 30%', 'Gain competitive advantage'],
          roi: '300% average ROI',
          timeline: '3-6 months',
          popular: true
        },
        {
          name: 'Machine Learning Model Development',
          description: 'Custom ML models for predictive analytics, automation, and decision support',
          price: '$3,500/month',
          marketPrice: '$7,000-15,000/month',
          features: ['Custom model development', 'Data preprocessing', 'Model training & validation', 'Deployment & monitoring'],
          benefits: ['Improve accuracy by 60%', 'Automate decision making', 'Reduce manual errors'],
          roi: '250% average ROI',
          timeline: '2-4 months'
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, chatbots, and content generation',
          price: '$2,800/month',
          marketPrice: '$5,500-12,000/month',
          features: ['Text analysis & sentiment', 'Chatbot development', 'Content generation', 'Language translation'],
          benefits: ['Improve customer service', 'Automate content creation', 'Enhance user experience'],
          roi: '200% average ROI',
          timeline: '2-3 months'
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Services',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Scalable, secure, and efficient IT infrastructure solutions',
      services: [
        {
          name: 'Cloud Migration & Optimization',
          description: 'Seamless cloud transformation with cost optimization and security enhancement',
          price: '$4,000/month',
          marketPrice: '$8,000-20,000/month',
          features: ['Cloud strategy planning', 'Migration execution', 'Cost optimization', 'Security implementation'],
          benefits: ['Reduce IT costs by 35%', 'Improve scalability', 'Enhance security'],
          roi: '400% average ROI',
          timeline: '4-8 months',
          popular: true
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Automated deployment pipelines and infrastructure as code solutions',
          price: '$2,200/month',
          marketPrice: '$4,500-10,000/month',
          features: ['CI/CD pipeline setup', 'Infrastructure automation', 'Monitoring & alerting', 'Testing automation'],
          benefits: ['Deploy 10x faster', 'Reduce deployment errors', 'Improve team productivity'],
          roi: '350% average ROI',
          timeline: '2-3 months'
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Comprehensive security services including threat detection and incident response',
          price: '$3,000/month',
          marketPrice: '$6,000-15,000/month',
          features: ['Security assessment', 'Threat detection', 'Incident response', 'Compliance management'],
          benefits: ['Prevent 95% of breaches', 'Ensure compliance', 'Reduce security risks'],
          roi: '500% average ROI',
          timeline: '3-6 months'
        }
      ]
    },
    {
      title: 'Business Intelligence & Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Data-driven insights and analytics for strategic decision making',
      services: [
        {
          name: 'Advanced Analytics Platform',
          description: 'Real-time business intelligence with predictive analytics and automated insights',
          price: '$2,800/month',
          marketPrice: '$5,500-12,000/month',
          features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Predictive modeling'],
          benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve forecasting accuracy'],
          roi: '280% average ROI',
          timeline: '3-5 months'
        },
        {
          name: 'Custom Dashboard Development',
          description: 'Interactive dashboards and reports tailored to your business needs',
          price: '$1,800/month',
          marketPrice: '$3,500-8,000/month',
          features: ['Custom dashboard design', 'Real-time data integration', 'Mobile responsiveness', 'User training'],
          benefits: ['Improve visibility', 'Speed up decision making', 'Reduce reporting time'],
          roi: '200% average ROI',
          timeline: '2-3 months'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      description: 'Affordable, powerful AI-driven tools for modern businesses',
      services: [
        {
          name: 'AI Code Review Assistant',
          description: 'Automated code analysis, bug detection, and security vulnerability scanning',
          price: '$89/month',
          marketPrice: '$150-300/month',
          features: ['Automated code review', 'Security scanning', 'Performance optimization', 'Git integration'],
          benefits: ['Reduce bugs by 70%', 'Improve code quality', 'Save 10+ hours/week'],
          roi: '400% average ROI',
          timeline: '1 week',
          popular: true
        },
        {
          name: 'AI Document Intelligence',
          description: 'Advanced document processing with OCR, data extraction, and classification',
          price: '$149/month',
          marketPrice: '$200-500/month',
          features: ['OCR text extraction', 'Document classification', 'Data validation', 'Workflow automation'],
          benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
          roi: '350% average ROI',
          timeline: '1 week'
        },
        {
          name: 'Smart Email Marketing Platform',
          description: 'AI-driven email campaigns with personalization and optimization',
          price: '$149/month',
          marketPrice: '$200-400/month',
          features: ['Smart segmentation', 'A/B testing automation', 'Send time optimization', 'Content personalization'],
          benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
          roi: '300% average ROI',
          timeline: '1 week'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our operations with their AI solutions. We saved $2M in the first year alone.',
      rating: 5,
      savings: '$2M saved'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Their micro SAAS tools are game-changers. We increased productivity by 60% with minimal investment.',
      rating: 5,
      savings: '60% productivity increase'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'VP of Engineering',
      content: 'The AI code review assistant caught bugs we never would have found. It paid for itself in the first month.',
      rating: 5,
      savings: '90% bug reduction'
    }
  ];

  const pricingComparison = [
    {
      service: 'AI Strategy Consulting',
      zionPrice: '$2,500/month',
      marketPrice: '$5,000-10,000/month',
      savings: '50-75% savings',
      features: 'Full-service AI implementation'
    },
    {
      service: 'Cloud Migration',
      zionPrice: '$4,000/month',
      marketPrice: '$8,000-20,000/month',
      savings: '50-80% savings',
      features: 'Complete cloud transformation'
    },
    {
      service: 'AI Code Review',
      zionPrice: '$89/month',
      marketPrice: '$150-300/month',
      savings: '40-70% savings',
      features: 'Automated code analysis'
    },
    {
      service: 'Cybersecurity',
      zionPrice: '$3,000/month',
      marketPrice: '$6,000-15,000/month',
      savings: '50-80% savings',
      features: 'Comprehensive security suite'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services Advertising - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Comprehensive AI and IT services with transparent pricing. Save 50-80% compared to market rates. Get free consultation and custom quotes." />
        <meta name="keywords" content="ai services pricing, it services cost, micro saas pricing, business automation, ai consulting rates" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="inline-block p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                <div className="text-6xl animate-pulse">💰</div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Get enterprise-grade AI and IT solutions at 50-80% below market rates. 
              No hidden fees, no surprises - just transparent, value-driven pricing.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50-80%</div>
                <div className="text-gray-300 text-sm">Below Market Rate</div>
              </div>
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300 text-sm">Average ROI</div>
              </div>
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">$50M+</div>
                <div className="text-gray-300 text-sm">Client Savings</div>
              </div>
              <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg group"
              >
                <span className="flex items-center">
                  📞 Get Free Quote: +1 302 464 0950
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium group"
              >
                <span className="flex items-center">
                  ✉️ Request Custom Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Comparison Table */}
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pricing Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our transparent pricing compares to market rates
              </p>
            </div>
            
            <div className="cyber-card p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-cyan-400 font-bold">Service</th>
                    <th className="text-left py-4 px-6 text-purple-400 font-bold">Zion Tech Group</th>
                    <th className="text-left py-4 px-6 text-pink-400 font-bold">Market Rate</th>
                    <th className="text-left py-4 px-6 text-green-400 font-bold">Your Savings</th>
                    <th className="text-left py-4 px-6 text-yellow-400 font-bold">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-white">{item.service}</td>
                      <td className="py-4 px-6 text-cyan-400 font-bold">{item.zionPrice}</td>
                      <td className="py-4 px-6 text-pink-400">{item.marketPrice}</td>
                      <td className="py-4 px-6 text-green-400 font-bold">{item.savings}</td>
                      <td className="py-4 px-6 text-gray-300 text-sm">{item.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Service Categories & Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions across all technology domains
              </p>
            </div>
            
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="cyber-card p-8">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-6`}>
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className={`cyber-card p-6 group hover:scale-105 transition-all duration-300 ${
                        service.popular ? 'ring-2 ring-cyan-400' : ''
                      }`}>
                        {service.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              Most Popular
                            </span>
                          </div>
                        )}
                        
                        <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                          <div className="text-sm text-gray-500 mb-2">Market: {service.marketPrice}</div>
                          <div className="text-sm font-bold text-green-400">{service.roi}</div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-xs font-semibold text-purple-400 mb-2 uppercase tracking-wider">Key Features</div>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-xs font-semibold text-pink-400 mb-2 uppercase tracking-wider">Benefits</div>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="text-xs text-gray-400">
                                • {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="text-center">
                          <a 
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium text-sm group"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-sm font-bold text-green-400 mt-2">{testimonial.savings}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="cyber-card p-12 text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Save 50-80% on Your Technology Costs?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get a free consultation and custom quote. Our experts will analyze your needs 
                and provide transparent pricing for the perfect solution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Phone</div>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Email</div>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center group">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-pink-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">Address</div>
                    <div className="text-pink-400">364 E Main St STE 1008<br />Middletown, DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg group"
                >
                  <span className="flex items-center">
                    📞 Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 text-lg border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium group"
                >
                  <span className="flex items-center">
                    ✉️ Request Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesAdvertisingPage;