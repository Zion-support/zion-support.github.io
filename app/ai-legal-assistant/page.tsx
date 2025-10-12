'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scale, 
  FileText, 
  Search, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Zap,
  BarChart3
} from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AILegalAssistantPage() {
  const features = [
    {
      title: 'AI Document Analysis',
      description: 'Advanced NLP algorithms analyze legal documents, contracts, and case files with 98% accuracy.',
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      benefits: ['Contract analysis', 'Document review', 'Risk assessment', 'Compliance checking']
    },
    {
      title: 'Intelligent Legal Research',
      description: 'AI-powered research tools that find relevant case law, statutes, and legal precedents in seconds.',
      icon: <Search className="w-6 h-6 text-green-400" />,
      benefits: ['Case law search', 'Statute research', 'Precedent analysis', 'Citation tracking']
    },
    {
      title: 'Automated Contract Generation',
      description: 'Generate professional legal documents, contracts, and agreements tailored to your specific needs.',
      icon: <Scale className="w-6 h-6 text-purple-400" />,
      benefits: ['Contract templates', 'Custom generation', 'Legal compliance', 'Version control']
    },
    {
      title: 'Client Communication Automation',
      description: 'Streamline client interactions with automated updates, document sharing, and appointment scheduling.',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      benefits: ['Auto updates', 'Document sharing', 'Appointment scheduling', 'Client portal']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$149',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 100 documents/month',
        'Basic legal research',
        'Contract templates',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$399',
      period: '/month',
      description: 'Advanced features for growing law firms',
      features: [
        'Unlimited documents',
        'Advanced AI research',
        'Team collaboration',
        'Priority support',
        'Custom integrations',
        'Client portal'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large legal organizations',
      features: [
        'Unlimited everything',
        'Custom AI training',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Partner',
      company: 'Adams & Associates Law',
      content: 'AI Legal Assistant reduced our document review time by 70% and improved accuracy significantly. Our clients love the faster turnaround.',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'Solo Practitioner',
      company: 'Torres Legal Services',
      content: 'The automated contract generation feature is a game-changer. I can now focus on client relationships instead of paperwork.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Legal Director',
      company: 'Corporate Legal Solutions',
      content: 'Our research efficiency improved by 80% with this AI tool. The legal research capabilities are incredibly comprehensive.',
      rating: 5
    }
  ];

  const stats = [
    { number: '70%', label: 'Time Saved', icon: <Clock className="w-6 h-6" /> },
    { number: '98%', label: 'Accuracy Rate', icon: <Shield className="w-6 h-6" /> },
    { number: '1,200+', label: 'Law Firms Using', icon: <Users className="w-6 h-6" /> },
    { number: '50,000+', label: 'Documents Processed', icon: <FileText className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal Assistant - Smart Legal Research & Document Analysis | Zion Tech Group</title>
        <meta name="description" content="Transform your legal practice with AI-powered document analysis, intelligent research, and automated contract generation. Save 70% time with 98% accuracy." />
        <meta name="keywords" content="AI legal assistant, legal research, document analysis, contract generation, legal AI, law firm technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-legal-assistant" />
      </Helmet>

      <FuturisticBackground variant="services">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Legal Assistant
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your legal practice with AI-powered document analysis, intelligent research, 
                and automated contract generation. Save 70% time with 98% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge artificial intelligence meets legal expertise to streamline your practice
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <FuturisticCard key={index} variant="service" className="h-full">
                  <div className="flex items-start mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options to match your legal practice needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key={index} 
                  variant={plan.popular ? "feature" : "service"} 
                  className={`h-full ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton
                    variant={plan.popular ? "primary" : "ghost"}
                    className="w-full"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of legal professionals transforming their practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} variant="testimonial" className="h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <footer>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </footer>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Legal Practice?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today. No credit card required. Join 1,200+ legal professionals working smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8 text-white/80 text-sm">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}