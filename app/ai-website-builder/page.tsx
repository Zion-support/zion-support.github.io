'use client';
import React from 'react';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Code, 
  Palette, 
  Smartphone, 
  Search, 
  Zap,
  Shield,
  Globe,
  Users,
  BarChart,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI-Powered Design',
      description: 'Generate stunning website designs automatically using advanced AI algorithms'
    },
    {
      icon: Palette,
      title: 'Smart Templates',
      description: 'Choose from hundreds of professionally designed templates that adapt to your brand'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'All websites are automatically optimized for mobile devices and tablets'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO tools ensure your website ranks high in search results'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with CDN delivery and advanced caching'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with SSL certificates and regular backups'
    }
  ];

  const benefits = [
    '90% faster development time compared to traditional methods',
    'Professional designs without hiring expensive designers',
    'Zero coding knowledge required',
    'Automatic content generation based on your business',
    'Real-time preview and editing',
    'One-click publishing to any domain'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Up to 5 pages',
        'Basic AI templates',
        'Mobile responsive',
        'Basic SEO tools',
        'Email support',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      features: [
        'Up to 25 pages',
        'Premium AI templates',
        'Advanced SEO tools',
        'E-commerce integration',
        'Priority support',
        '10GB storage',
        'Custom domain'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      features: [
        'Unlimited pages',
        'Custom AI training',
        'White-label solution',
        'API access',
        '24/7 phone support',
        '100GB storage',
        'Multiple domains',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-enhanced particle-field quantum-field data-stream cyber-scan-lines">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch holographic-text">
                AI Website Builder
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect cyber-text-glow">
                Create stunning websites in minutes with AI-powered design
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Build professional, responsive websites without any coding knowledge. Our AI analyzes your business and creates a custom website that converts visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button-enhanced px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Building Now
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 neon-border text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cyber-text-glow"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                  <div className="text-gray-300">Websites Created</div>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                  <div className="text-gray-300">Faster Development</div>
                </div>
                <div className="holographic-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text holographic-text">
              Powerful Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text holographic-text">
              Why Choose Our AI Website Builder?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text holographic-text">
              Simple, Transparent Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 energy-pulse' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'cyber-button-enhanced' 
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text holographic-text">
              Ready to Build Your Website?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="holographic-card p-6 text-center">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                  <a 
                    href="tel:+13024640950" 
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Call Now
                  </a>
                </div>
                
                <div className="holographic-card p-6 text-center">
                  <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Send Email
                  </a>
                </div>
                
                <div className="holographic-card p-6 text-center">
                  <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIWebsiteBuilderPage;