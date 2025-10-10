'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Award, Rocket, Globe2, ShieldCheck, Zap as Lightning, Target as Bullseye, BarChart3, PieChart, Activity, TrendingUp as TrendingUpIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

const AiServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_services_phone'
      });
    }
  };

  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.',
      icon: BarChart3,
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Automated report generation',
        'Custom dashboard creation',
        'Machine learning insights',
        'Data integration & ETL'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Increase data-driven decision making by 85%',
        'Reduce reporting time by 90%',
        'Improve forecast accuracy by 65%',
        '24/7 automated monitoring'
      ],
      useCases: [
        'Sales performance analysis',
        'Customer behavior insights',
        'Financial forecasting',
        'Operational efficiency metrics'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Streamline your business processes with intelligent automation. Our AI solutions can handle repetitive tasks, workflow optimization, and smart decision making.',
      icon: Zap,
      features: [
        'Workflow automation',
        'Document processing',
        'Email & communication automation',
        'Task scheduling & management',
        'Error detection & correction',
        'Integration with existing systems'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$599/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Reduce manual work by 80%',
        'Increase process efficiency by 70%',
        'Eliminate human errors',
        'Scale operations automatically'
      ],
      useCases: [
        'Invoice processing',
        'Customer onboarding',
        'Data entry automation',
        'Quality control processes'
      ]
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot & Customer Support',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support, answer queries, and escalate complex issues to human agents seamlessly.',
      icon: MessageCircle,
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Live agent handoff',
        'Knowledge base integration',
        'Custom conversation flows'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 95%',
        'Increase customer satisfaction',
        'Handle unlimited conversations'
      ],
      useCases: [
        'Customer service automation',
        'Lead qualification',
        'FAQ handling',
        'Order status inquiries'
      ]
    },
    {
      id: 'ai-crm',
      title: 'AI-Powered CRM System',
      description: 'Revolutionize your customer relationship management with AI-driven insights, automated follow-ups, and predictive lead scoring.',
      icon: Users,
      features: [
        'Predictive lead scoring',
        'Automated follow-up sequences',
        'Customer segmentation',
        'Sales forecasting',
        'Email campaign optimization',
        'Integration with marketing tools'
      ],
      pricing: {
        starter: '$249/month',
        professional: '$699/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Increase sales conversion by 45%',
        'Improve lead quality by 70%',
        'Reduce sales cycle time by 35%',
        'Automate customer communications'
      ],
      useCases: [
        'Lead management',
        'Sales pipeline optimization',
        'Customer retention',
        'Marketing campaign tracking'
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Solutions',
      description: 'Protect your business with advanced AI-powered security systems that detect threats, prevent breaches, and ensure compliance.',
      icon: ShieldCheck,
      features: [
        'Threat detection & prevention',
        'Anomaly detection',
        'Automated incident response',
        'Compliance monitoring',
        'Security analytics',
        'Real-time threat intelligence'
      ],
      pricing: {
        starter: '$399/month',
        professional: '$999/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 85%',
        'Automate security responses',
        'Ensure compliance standards'
      ],
      useCases: [
        'Network security monitoring',
        'Endpoint protection',
        'Data loss prevention',
        'Compliance auditing'
      ]
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Solutions',
      description: 'Revolutionize healthcare with AI-powered diagnostic tools, patient monitoring, and medical data analysis for improved outcomes.',
      icon: Heart,
      features: [
        'Medical image analysis',
        'Patient risk assessment',
        'Drug interaction checking',
        'Symptom analysis',
        'Treatment recommendations',
        'Health monitoring alerts'
      ],
      pricing: {
        starter: '$599/month',
        professional: '$1,299/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Reduce medical errors by 60%',
        'Enhance patient outcomes',
        'Streamline clinical workflows'
      ],
      useCases: [
        'Medical diagnosis support',
        'Patient monitoring',
        'Drug discovery',
        'Clinical research'
      ]
    },
    {
      id: 'ai-fintech',
      title: 'AI Financial Technology',
      description: 'Transform financial services with AI-powered fraud detection, algorithmic trading, credit scoring, and automated financial analysis.',
      icon: DollarSign,
      features: [
        'Fraud detection & prevention',
        'Algorithmic trading',
        'Credit risk assessment',
        'Automated financial reporting',
        'Investment recommendations',
        'Regulatory compliance'
      ],
      pricing: {
        starter: '$499/month',
        professional: '$1,199/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Reduce fraud losses by 90%',
        'Improve trading performance by 25%',
        'Accelerate loan processing by 70%',
        'Ensure regulatory compliance'
      ],
      useCases: [
        'Fraud prevention',
        'Algorithmic trading',
        'Credit scoring',
        'Financial planning'
      ]
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered writing tools. Generate blogs, social media posts, marketing copy, and more.',
      icon: FileText,
      features: [
        'Blog post generation',
        'Social media content',
        'Marketing copy creation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice consistency'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: 'Custom pricing'
      },
      benefits: [
        'Increase content production by 500%',
        'Reduce content costs by 80%',
        'Maintain consistent quality',
        'Scale content marketing efforts'
      ],
      useCases: [
        'Blog content creation',
        'Social media marketing',
        'Email campaigns',
        'Product descriptions'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '24/7', label: 'AI Monitoring', icon: Clock },
    { number: '50+', label: 'Industry Solutions', icon: Award }
  ];

  return (
    <React.Fragment>
      <SEOOptimizer
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology."
        keywords={['AI services', 'machine learning', 'artificial intelligence', 'automation', 'AI consulting', 'AI development', 'AI solutions']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <Brain className="w-4 h-4 mr-2" />
                  Advanced AI Solutions
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Services
                </span>
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">
                  for Modern Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to automation, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                  aria-label="Get started with AI services">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                  aria-label="Call us at (302) 464-0950">
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.id}
                  className="cyber-card group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Pricing:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Starter:</span>
                          <span className="text-cyan-400 font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Professional:</span>
                          <span className="text-cyan-400 font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Enterprise:</span>
                          <span className="text-cyan-400 font-semibold">{service.pricing.enterprise}</span>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-300 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can drive your digital transformation and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiServicesPage;