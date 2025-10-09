import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Users, BarChart, Clock, Brain, Eye, MessageSquare, Target, TrendingUp, ArrowRight, Play, Download, Cpu, Database, Globe } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-consulting',
      name: 'AI Consulting & Strategy',
      description: 'Expert AI consulting to help you identify opportunities, develop strategies, and implement AI solutions that drive real business value.',
      price: '$1,500/month',
      features: [
        'AI readiness assessment',
        'Custom AI strategy development',
        'Technology stack recommendations',
        'ROI analysis and planning',
        'Implementation roadmap',
        'Ongoing advisory support'
      ],
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      popular: true
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms tailored to your specific business needs and data requirements.',
      price: '$2,500/month',
      features: [
        'Custom ML model development',
        'Data preprocessing and cleaning',
        'Model training and optimization',
        'Performance monitoring',
        'Continuous learning systems',
        'API integration'
      ],
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      popular: false
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and automated content processing.',
      price: '$1,800/month',
      features: [
        'Text analysis and classification',
        'Sentiment analysis',
        'Chatbot development',
        'Language translation',
        'Content generation',
        'Document processing'
      ],
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      popular: true
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, facial recognition, quality control, and automated visual inspection.',
      price: '$2,200/month',
      features: [
        'Object detection and recognition',
        'Facial recognition systems',
        'Image classification',
        'Quality control automation',
        'Video analysis',
        'Real-time processing'
      ],
      icon: Eye,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      popular: false
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      description: 'Data-driven insights and predictions to help you make better business decisions and anticipate future trends.',
      price: '$1,200/month',
      features: [
        'Demand forecasting',
        'Risk assessment',
        'Customer behavior prediction',
        'Market trend analysis',
        'Performance optimization',
        'Automated reporting'
      ],
      icon: BarChart,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      popular: false
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize your business processes and workflows.',
      price: '$1,600/month',
      features: [
        'Workflow automation',
        'Decision-making automation',
        'Process optimization',
        'Exception handling',
        'Learning and adaptation',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      popular: true
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'AI solutions for medical diagnosis, drug discovery, patient care, and healthcare management.',
      applications: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Treatment optimization']
    },
    {
      name: 'Finance',
      icon: '💰',
      description: 'AI-powered financial services including fraud detection, risk assessment, and algorithmic trading.',
      applications: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Credit scoring']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'AI solutions for quality control, predictive maintenance, and supply chain optimization.',
      applications: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Process automation']
    },
    {
      name: 'Retail',
      icon: '🛍️',
      description: 'AI-driven retail solutions for inventory management, customer personalization, and demand forecasting.',
      applications: ['Inventory optimization', 'Customer personalization', 'Demand forecasting', 'Price optimization']
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'AI solutions for personalized learning, automated grading, and educational content generation.',
      applications: ['Personalized learning', 'Automated grading', 'Content generation', 'Student assessment']
    },
    {
      name: 'Transportation',
      icon: '🚗',
      description: 'AI solutions for autonomous vehicles, route optimization, and traffic management.',
      applications: ['Autonomous vehicles', 'Route optimization', 'Traffic management', 'Fleet management']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our AI solutions deliver an average 300% ROI within the first year of implementation.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and regular security audits.'
    },
    {
      icon: Clock,
      title: 'Rapid Implementation',
      description: 'Get your AI solutions up and running in 4-8 weeks with our proven implementation methodology.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with PhD-level AI experts and data scientists with 10+ years of experience.'
    }
  ];

  const pricingTiers = [
    {
      name: 'Consultation',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for businesses exploring AI opportunities',
      features: [
        'AI readiness assessment',
        'Strategy development',
        'Technology recommendations',
        'Implementation planning',
        'Monthly advisory calls',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Implementation',
      price: '$2,500',
      period: '/month',
      description: 'Ideal for businesses ready to implement AI solutions',
      features: [
        'Custom AI solution development',
        'Data analysis and preparation',
        'Model training and optimization',
        'Integration and deployment',
        'Performance monitoring',
        'Priority support',
        'Training and documentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,000',
      period: '/month',
      description: 'For large organizations with complex AI needs',
      features: [
        'Multiple AI solutions',
        'Custom development',
        'Dedicated AI team',
        '24/7 support',
        'On-premise deployment',
        'White-label solutions',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'MedTech Innovations',
      content: 'The AI solutions from Zion Tech Group have revolutionized our medical imaging analysis. We\'ve reduced diagnosis time by 60% and improved accuracy by 40%.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      company: 'Manufacturing Corp',
      content: 'Their predictive maintenance AI has saved us millions in unplanned downtime. The ROI was evident within the first quarter.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'CEO',
      company: 'FinTech Solutions',
      content: 'The fraud detection AI they built for us has reduced false positives by 80% while catching 95% more fraudulent transactions. Incredible results.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`/ai-services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-purple-600 text-purple-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-purple-600 hover:text-white transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{industry.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center ${
                tier.popular ? 'ring-2 ring-purple-500 relative' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">
                  {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our AI solutions. 
              Get a free consultation and discover how AI can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                Get Free Consultation
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✓ Free consultation • ✓ Custom AI strategy • ✓ No obligation
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;