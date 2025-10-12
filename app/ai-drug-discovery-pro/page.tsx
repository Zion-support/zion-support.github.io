'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Atom, 
  Zap, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  MessageSquare,
  FileText,
  Camera,
  CreditCard,
  Wallet,
  Target,
  Lock,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react';

export default function AIDrugDiscoveryProPage() {
  const features = [
    {
      title: 'Molecular Modeling',
      description: 'Advanced AI models for molecular structure prediction, drug-target interaction analysis, and compound optimization.',
      icon: <Atom className="w-8 h-8 text-violet-400" />,
      benefits: ['Molecular prediction', 'Drug-target analysis', 'Compound optimization', 'Structure-activity relationships']
    },
    {
      title: 'Drug Interaction Analysis',
      description: 'Comprehensive analysis of drug interactions, side effects, and efficacy prediction using machine learning.',
      icon: <Database className="w-8 h-8 text-purple-400" />,
      benefits: ['Interaction prediction', 'Side effect analysis', 'Efficacy modeling', 'Safety assessment']
    },
    {
      title: 'Clinical Trial Optimization',
      description: 'AI-powered optimization of clinical trial design, patient selection, and outcome prediction.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      benefits: ['Trial design', 'Patient selection', 'Outcome prediction', 'Risk assessment']
    },
    {
      title: 'Research Automation',
      description: 'Automated research workflows with AI-powered literature analysis and hypothesis generation.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      benefits: ['Literature analysis', 'Hypothesis generation', 'Research automation', 'Data integration']
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for research institutions and universities',
      features: [
        'Basic molecular modeling',
        'Drug interaction analysis',
        'Research collaboration',
        'Email support',
        '1 research project',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pharmaceutical',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for pharmaceutical companies and biotech firms',
      features: [
        'Advanced molecular modeling',
        'Comprehensive drug analysis',
        'Clinical trial optimization',
        'Priority support',
        '5 research projects',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large pharmaceutical enterprises and research organizations',
      features: [
        'Premium molecular models',
        'Full drug discovery suite',
        'Complete research automation',
        'Dedicated support',
        'Unlimited projects',
        'Custom analytics',
        'White-label options',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      company: 'Pharmaceutical Research Institute',
      content: 'AI Drug Discovery Pro has accelerated our drug development process by 5x. The molecular modeling accuracy is incredible.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Prof. Michael Chen',
      company: 'Biotech Innovation Lab',
      content: 'The drug interaction analysis has helped us identify potential issues early in development, saving millions in costs.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Dr. Emily Rodriguez',
      company: 'Clinical Research Organization',
      content: 'The clinical trial optimization features have improved our success rates by 40% while reducing trial duration by 30%.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Advanced Pharmaceutical AI & Molecular Modeling | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform with molecular modeling, clinical trial optimization, and pharmaceutical research automation. Contact us today!" />
        <meta name="keywords" content="AI drug discovery, molecular modeling, pharmaceutical AI, clinical trials, drug development, biotech" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Drug Discovery Pro - Advanced Pharmaceutical AI & Molecular Modeling" />
        <meta property="og:description" content="Revolutionary AI-powered drug discovery platform with molecular modeling and clinical trial optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-drug-discovery-pro" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-drug-discovery.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Drug Discovery Pro",
            "description": "AI-powered drug discovery platform with molecular modeling and clinical trial optimization",
            "url": "https://ziontechgroup.com/ai-drug-discovery-pro",
            "applicationCategory": "MedicalApplication",
            "operatingSystem": "Web, Windows, macOS, Linux",
            "offers": {
              "@type": "Offer",
              "price": "2999",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "2999",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl mb-8">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Drug Discovery Pro
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered drug discovery platform with molecular modeling, 
                clinical trial optimization, and pharmaceutical research automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">5x</div>
                  <div className="text-gray-300">Faster Discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Research Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">Research Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Drug Discovery Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered tools for pharmaceutical research and drug development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Research & Enterprise Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the drug discovery solution that fits your research and business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-violet-500/50 ring-2 ring-violet-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Researchers Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading pharmaceutical researchers and organizations trust our AI drug discovery platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Accelerate Drug Discovery?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join leading pharmaceutical companies and research organizations using AI Drug Discovery Pro. 
                  Contact us to discuss your drug discovery needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ Free consultation • ✓ Research collaboration • ✓ Custom solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}