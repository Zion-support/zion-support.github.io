'use client';
import React from 'react';
import { CheckCircle, Star, Phone, Mail, MapPin, Zap, Shield, Brain, Cloud, BarChart, Users, Award, Clock, Sparkles, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const PricingPage: React.FC = () => {
  const microSaasPlans = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 AI tools',
        'Basic analytics',
        'Email support',
        'Standard templates',
        '1 user account'
      ],
      popular: false,
      category: 'Micro SAAS'
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Most popular for growing teams',
      features: [
        'Up to 15 AI tools',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        '5 user accounts',
        'API access',
        'White-label options'
      ],
      popular: true,
      category: 'Micro SAAS'
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations',
      features: [
        'Unlimited AI tools',
        'Premium analytics',
        'Dedicated support',
        'Custom development',
        'Unlimited users',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false,
      category: 'Micro SAAS'
    }
  ];

  const aiServicesPlans = [
    {
      name: 'AI Starter',
      price: '$299/month',
      description: 'Basic AI solutions',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Basic computer vision',
        'Email support',
        'Monthly reports'
      ],
      popular: false,
      category: 'AI Services'
    },
    {
      name: 'AI Professional',
      price: '$799/month',
      description: 'Most popular for AI adoption',
      features: [
        'Advanced ML models',
        'Real-time processing',
        'Custom AI solutions',
        'Priority support',
        'Weekly reports',
        'API access',
        'Team training'
      ],
      popular: true,
      category: 'AI Services'
    },
    {
      name: 'AI Enterprise',
      price: '$1,999/month',
      description: 'For AI-first organizations',
      features: [
        'Custom AI development',
        'Real-time AI processing',
        'Dedicated AI team',
        '24/7 support',
        'Daily reports',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false,
      category: 'AI Services'
    }
  ];

  const itServicesPlans = [
    {
      name: 'IT Basic',
      price: '$1,200/month',
      description: 'Essential IT support',
      features: [
        'Cloud setup & migration',
        'Basic security',
        'Email support',
        'Monthly maintenance',
        'Standard monitoring'
      ],
      popular: false,
      category: 'IT Services'
    },
    {
      name: 'IT Professional',
      price: '$2,500/month',
      description: 'Most popular for growing companies',
      features: [
        'Full cloud management',
        'Advanced security',
        'Priority support',
        'Weekly maintenance',
        'Real-time monitoring',
        'Compliance assistance',
        'Team training'
      ],
      popular: true,
      category: 'IT Services'
    },
    {
      name: 'IT Enterprise',
      price: '$5,000/month',
      description: 'For large organizations',
      features: [
        'Dedicated IT team',
        'Custom solutions',
        '24/7 support',
        'Daily maintenance',
        'Advanced monitoring',
        'Full compliance',
        'SLA guarantee'
      ],
      popular: false,
      category: 'IT Services'
    }
  ];

  const addOnServices = [
    {
      name: 'AI Document Processor',
      price: '$29/month',
      description: 'Intelligent document processing with 99.5% accuracy',
      features: ['PDF, Word, Excel support', 'Handwriting recognition', 'Multi-language support', 'Batch processing']
    },
    {
      name: 'AI Customer Insights',
      price: '$49/month',
      description: 'Real-time customer sentiment analysis and behavior prediction',
      features: ['Sentiment analysis', 'Behavior prediction', 'Journey mapping', 'Automated insights']
    },
    {
      name: 'AI Workflow Automation',
      price: '$79/month',
      description: 'Automate complex business processes with intelligent workflows',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard']
    },
    {
      name: 'Cloud Infrastructure',
      price: '$1,500/month',
      description: 'Comprehensive cloud infrastructure management and optimization',
      features: ['Cloud migration', 'Infrastructure as Code', 'Container orchestration', 'Cloud security']
    },
    {
      name: 'Cybersecurity Solutions',
      price: '$1,200/month',
      description: 'Advanced security solutions and compliance management',
      features: ['Security assessment', 'Managed security', 'Compliance & governance', 'Security training']
    },
    {
      name: 'Data Analytics',
      price: '$1,500/month',
      description: 'Transform data into actionable business insights',
      features: ['Business intelligence', 'Data warehousing', 'Predictive analytics', 'Real-time analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CTO',
      content: 'Zion Tech Group\'s pricing is transparent and fair. We got incredible value for our investment and saw ROI within 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'VP of Engineering',
      content: 'The Professional plan gave us everything we needed to scale our AI operations. The support team is exceptional.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'FinanceFirst Corp',
      role: 'IT Director',
      content: 'Enterprise plan was perfect for our needs. The dedicated team and SLA guarantee gave us peace of mind.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden cyber-grid-enhanced particle-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 neon-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="holographic">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features 
              with no hidden fees or surprise charges.
            </p>
          </div>
        </div>
      </section>

      {/* Micro SAAS Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300">AI-powered tools for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 cyber-card ${plan.popular ? 'border-cyan-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                    : 'border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Plans */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Services</h2>
            <p className="text-xl text-gray-300">Advanced AI solutions for enterprise needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiServicesPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 cyber-card ${plan.popular ? 'border-purple-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                    : 'border border-purple-400 text-purple-300 hover:bg-purple-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IT Services</h2>
            <p className="text-xl text-gray-300">Comprehensive IT solutions and support</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {itServicesPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 cyber-card ${plan.popular ? 'border-green-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600' 
                    : 'border border-green-400 text-green-300 hover:bg-green-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-300">Enhance your plan with additional services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 cyber-card">
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 border border-cyan-400 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">Ready to get started? Contact our team today</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-cyan-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">See why companies choose Zion Tech Group</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your needs and start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;