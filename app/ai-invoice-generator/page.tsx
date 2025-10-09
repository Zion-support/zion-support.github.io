import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Zap, DollarSign, Shield, BarChart, Clock, CheckCircle, ArrowRight, Star, Award, Brain, Target, CreditCard, Send } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices with AI that learns from your business patterns and preferences.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'Smart Data Extraction',
      description: 'Extract client information, project details, and pricing from emails, contracts, and other documents.',
      color: 'text-purple-400'
    },
    {
      icon: DollarSign,
      title: 'Automated Billing',
      description: 'Set up recurring invoices, payment reminders, and automated follow-ups to ensure timely payments.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Payment Tracking',
      description: 'Track invoice status, payment history, and outstanding balances with real-time updates and analytics.',
      color: 'text-orange-400'
    },
    {
      icon: BarChart,
      title: 'Financial Reports',
      description: 'Generate comprehensive financial reports, tax summaries, and business insights from your invoicing data.',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with automatic tax calculations, compliance features, and data protection.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        '50 invoices/month',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic reporting'
      ],
      color: 'border-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Professional',
      price: '$119',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        '500 invoices/month',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced reporting',
        'Payment integration'
      ],
      color: 'border-purple-400',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Multi-user access'
      ],
      color: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Freelance Designer',
      role: 'Creative Director',
      content: 'I save 3 hours per week on invoicing. The AI automatically extracts project details from my emails and creates perfect invoices.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Consulting Firm',
      role: 'Managing Partner',
      content: 'Our payment collection improved by 40% with automated reminders. The financial reports help us make better business decisions.',
      rating: 5
    },
    {
      name: 'Amanda Davis',
      company: 'Digital Agency',
      role: 'Operations Manager',
      content: 'We handle 200+ invoices monthly. This tool has streamlined our entire billing process and reduced errors to zero.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            AI-Powered Invoice Generation
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Invoice Generator
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Automate your invoicing with AI intelligence
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Create professional invoices automatically with AI that learns from your business. 
            Track payments, generate reports, and get paid faster with intelligent invoicing automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3h</div>
              <div className="text-gray-300 text-sm">Time Saved/Week</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Faster Payments</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">0</div>
              <div className="text-gray-300 text-sm">Billing Errors</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">Auto</div>
              <div className="text-gray-300 text-sm">Generation</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Intelligent Invoice Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to automate your invoicing process
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className={`w-12 h-12 ${feature.color} mb-4`}>
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Start free, scale as you grow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 energy-pulse relative ${plan.color} ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 ${plan.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center`}>
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Success Stories
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See how businesses are streamlining their invoicing with AI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
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
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="quantum-card p-12 energy-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today. No credit card required. See how AI can transform your billing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIInvoiceGeneratorPage;