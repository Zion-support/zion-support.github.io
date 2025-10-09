'use client';
import React, { useState, useEffect } from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Users, BarChart, Clock, Globe, Smartphone, Code, Target, TrendingUp, Database, Mail, Phone, MapPin, Brain, Cpu, Eye, MessageSquare, FileText, Lock, BarChart3 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 1,
      name: 'AI-Powered Content Generation',
      description: 'Create high-quality content for blogs, social media, emails, and marketing materials using advanced AI.',
      price: 'Starting at $199/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      icon: FileText,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      useCases: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions']
    },
    {
      id: 2,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like responses.',
      price: 'Starting at $299/month',
      features: [
        '24/7 customer support',
        'Multi-channel integration',
        'Sentiment analysis',
        'Escalation to humans',
        'Knowledge base integration',
        'Custom training',
        'Analytics & insights',
        'Unlimited conversations'
      ],
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      useCases: ['Customer service', 'Lead qualification', 'FAQ automation', 'Order support']
    },
    {
      id: 3,
      name: 'AI Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling.',
      price: 'Starting at $599/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboard builder',
        'Automated reporting',
        '50+ data sources',
        'Mobile app included',
        'API access',
        'White-label options'
      ],
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      useCases: ['Business intelligence', 'Sales forecasting', 'Customer segmentation', 'Performance tracking']
    },
    {
      id: 4,
      name: 'AI Marketing Automation',
      description: 'Automate marketing campaigns with AI-powered personalization and optimization.',
      price: 'Starting at $399/month',
      features: [
        'Campaign automation',
        'Personalization engine',
        'A/B testing',
        'Lead scoring',
        'Email sequences',
        'Social media automation',
        'ROI optimization',
        'Cross-channel integration'
      ],
      icon: Target,
      color: 'from-purple-500 to-indigo-500',
      popular: false,
      useCases: ['Email marketing', 'Social media', 'Lead nurturing', 'Campaign optimization']
    },
    {
      id: 5,
      name: 'AI Document Processing',
      description: 'Automatically extract, process, and analyze documents with AI-powered OCR and data extraction.',
      price: 'Starting at $149/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation',
        'Automated workflows',
        'Multi-format support',
        'Batch processing',
        'API integration',
        'Custom templates'
      ],
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      popular: false,
      useCases: ['Invoice processing', 'Contract analysis', 'Data entry', 'Compliance checking']
    },
    {
      id: 6,
      name: 'AI Sales Automation',
      description: 'Boost sales performance with AI-powered lead scoring, outreach, and CRM optimization.',
      price: 'Starting at $299/month',
      features: [
        'AI lead scoring',
        'Automated outreach',
        'CRM integration',
        'Sales forecasting',
        'Pipeline optimization',
        'Email sequences',
        'Performance analytics',
        'Custom workflows'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      useCases: ['Lead qualification', 'Sales forecasting', 'Pipeline management', 'Revenue optimization']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'AI solutions for medical diagnosis, patient care, and healthcare management.',
      applications: ['Medical imaging analysis', 'Patient monitoring', 'Drug discovery', 'Treatment optimization']
    },
    {
      name: 'Finance',
      icon: '💰',
      description: 'AI-powered financial services including fraud detection, trading, and risk management.',
      applications: ['Fraud detection', 'Algorithmic trading', 'Credit scoring', 'Risk assessment']
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'Enhance online retail with AI-powered personalization and customer experience.',
      applications: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer service']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Optimize production processes with AI-driven automation and quality control.',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation']
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Transform learning with AI-powered personalized education and assessment tools.',
      applications: ['Personalized learning', 'Automated grading', 'Student analytics', 'Content generation']
    },
    {
      name: 'Real Estate',
      icon: '🏠',
      description: 'Revolutionize property management with AI-driven market analysis and customer service.',
      applications: ['Property valuation', 'Market analysis', 'Lead generation', 'Customer support']
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities for maximum impact.',
      icon: '🔍'
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Our experts design a custom AI solution tailored to your specific requirements.',
      icon: '🎨'
    },
    {
      step: 3,
      title: 'Development & Training',
      description: 'We develop and train AI models using your data and business logic.',
      icon: '⚙️'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures optimal performance before deployment.',
      icon: '🧪'
    },
    {
      step: 5,
      title: 'Deployment & Integration',
      description: 'Seamless integration with your existing systems and workflows.',
      icon: '🚀'
    },
    {
      step: 6,
      title: 'Monitoring & Support',
      description: 'Ongoing monitoring and support to ensure continued success.',
      icon: '📊'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'MedTech Solutions',
      role: 'Chief Technology Officer',
      content: 'Zion Tech Group\'s AI solutions revolutionized our patient care. We achieved 40% faster diagnosis and 60% improvement in treatment outcomes.',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      name: 'James Rodriguez',
      company: 'FinTech Innovations',
      role: 'CEO',
      content: 'Their AI fraud detection system saved us millions. The accuracy is incredible and the ROI was evident within the first month.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Chen',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'The AI personalization engine increased our conversion rates by 85%. Our customers love the personalized experience.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Leverage the power of AI to automate processes, gain insights, and drive growth. 
              Our comprehensive AI services help businesses across all industries achieve unprecedented results.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-white font-medium">Productivity Boost</div>
                <div className="text-gray-400 text-sm">Average increase</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-white font-medium">Process Automation</div>
                <div className="text-gray-400 text-sm">Efficiency gain</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
                <div className="text-white font-medium">Cost Savings</div>
                <div className="text-gray-400 text-sm">For enterprise clients</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-white font-medium">AI Support</div>
                <div className="text-gray-400 text-sm">Always available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:scale-105`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{industry.description}</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our AI Implementation Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-cyan-400 mb-3">Step {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Success Stories
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
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can transform your business. Get a free consultation and custom AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Free Consultation
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ Free consultation • ✓ Custom AI strategy • ✓ No obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Phone className="w-5 h-5" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AIServicesPage;