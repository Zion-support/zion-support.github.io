import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Zap, Shield, BarChart, Clock, Users, CheckCircle, ArrowRight, Star, Award } from 'lucide-react';

const AIDocumentProcessorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'OCR Technology',
      description: 'Advanced optical character recognition with 99.9% accuracy for text extraction from any document type.',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'AI-Powered Processing',
      description: 'Intelligent document analysis using machine learning to understand context and extract relevant data.',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Secure Processing',
      description: 'Enterprise-grade security with end-to-end encryption and SOC 2 compliance for data protection.',
      color: 'text-green-400'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into document processing performance, accuracy metrics, and workflow optimization.',
      color: 'text-orange-400'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Process documents instantly with our high-performance cloud infrastructure and parallel processing.',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Multi-user access with role-based permissions and collaborative document review workflows.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 documents/month',
        'Basic OCR processing',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      color: 'border-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '10,000 documents/month',
        'Advanced AI processing',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access'
      ],
      color: 'border-purple-400',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited documents',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'On-premise deployment'
      ],
      color: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'Operations Manager',
      content: 'The AI Document Processor has revolutionized our workflow. We process 5,000+ invoices daily with 99.9% accuracy.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Legal Associates',
      role: 'Senior Partner',
      content: 'Document processing time reduced by 80%. The AI understands legal documents better than any solution we\'ve tried.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Healthcare Plus',
      role: 'Administrative Director',
      content: 'HIPAA-compliant processing of medical records. The security features give us complete peace of mind.',
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
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Document Processing
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Document Processor
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform your document workflow with intelligent AI processing
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Process 10,000+ documents daily with our advanced AI-powered OCR technology. 
            Extract, analyze, and organize data from any document type with 99.9% accuracy.
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
              Get Free Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300 text-sm">Documents/Day</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Processing</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to automate your document processing workflow
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your document processing needs
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
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust our AI document processing
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
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start processing documents with AI today. No setup fees, no long-term contracts.
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

export default AIDocumentProcessorPage;