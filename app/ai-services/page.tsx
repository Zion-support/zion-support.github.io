import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Award, Cloud, Code, Database, Mail, Clock, DollarSign, Globe, Monitor, FileText, MessageSquare, TrendingUp, Target, Settings, Cpu, Eye, Heart, Layers, Mic, Video, Image, Calculator } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Pro',
      description: 'Advanced analytics powered by artificial intelligence for data-driven insights and predictions.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
      price: 'Starting at $299/month',
      category: 'Business AI',
      rating: 4.8,
      reviews: 1156,
      featured: true
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Automated content creation using cutting-edge AI technology for all media types.',
      icon: Code,
      features: ['Blog Posts', 'Social Media', 'Marketing Copy', 'Video Scripts'],
      price: 'Starting at $199/month',
      category: 'Content AI',
      rating: 4.7,
      reviews: 892,
      featured: true
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Pro',
      description: 'Intelligent chatbots and automated customer service solutions with human-like interactions.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Smart Routing', 'Emotion Recognition'],
      price: 'Starting at $399/month',
      category: 'Customer AI',
      rating: 4.8,
      reviews: 1247,
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'AI-powered security solutions to protect your digital assets with advanced threat detection.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Behavioral Analysis'],
      price: 'Starting at $599/month',
      category: 'Security AI',
      rating: 4.9,
      reviews: 1156,
      featured: true
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Pro',
      description: 'Transform raw data into actionable business intelligence with advanced AI algorithms.',
      icon: Database,
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Predictive Modeling'],
      price: 'Starting at $349/month',
      category: 'Data AI',
      rating: 4.8,
      reviews: 743,
      featured: false
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Intelligence',
      description: 'Automated document analysis and processing solutions with advanced OCR and NLP.',
      icon: Mail,
      features: ['OCR Technology', 'Data Extraction', 'Automated Workflows', 'Document Classification'],
      price: 'Starting at $249/month',
      category: 'Document AI',
      rating: 4.7,
      reviews: 567,
      featured: false
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered personalization and campaign optimization.',
      icon: Target,
      features: ['Email Automation', 'Social Media', 'Lead Scoring', 'A/B Testing'],
      price: 'Starting at $199/month',
      category: 'Marketing AI',
      rating: 4.7,
      reviews: 1456,
      featured: false
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with machine learning and adaptive decision making.',
      icon: Zap,
      features: ['Process Automation', 'ML Optimization', 'Error Handling', 'Integration'],
      price: 'Starting at $179/month',
      category: 'Automation AI',
      rating: 4.6,
      reviews: 1347,
      featured: false
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant Pro',
      description: 'Advanced conversational AI with natural language understanding and voice synthesis.',
      icon: Mic,
      features: ['Voice Recognition', 'Natural Language', 'Multi-language', 'Custom Training'],
      price: 'Starting at $299/month',
      category: 'Voice AI',
      rating: 4.8,
      reviews: 789,
      featured: false
    },
    {
      id: 'ai-image-recognition',
      title: 'AI Image Recognition Pro',
      description: 'Advanced computer vision with object detection and facial recognition capabilities.',
      icon: Image,
      features: ['Object Detection', 'Facial Recognition', 'OCR Text', 'Custom Models'],
      price: 'Starting at $199/month',
      category: 'Computer Vision',
      rating: 4.9,
      reviews: 1123,
      featured: false
    },
    {
      id: 'ai-financial-analysis',
      title: 'AI Financial Analysis',
      description: 'Advanced AI financial platform with risk assessment and fraud detection.',
      icon: Calculator,
      features: ['Risk Assessment', 'Fraud Detection', 'Financial Reporting', 'Compliance'],
      price: 'Starting at $399/month',
      category: 'Financial AI',
      rating: 4.9,
      reviews: 654,
      featured: false
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with demand forecasting and optimization.',
      icon: Globe,
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Assessment'],
      price: 'Starting at $279/month',
      category: 'Supply Chain AI',
      rating: 4.7,
      reviews: 432,
      featured: false
    }
  ];

  const stats = [
    { label: "AI Solutions Deployed", value: "500+", icon: Brain },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Process Automation", value: "85%", icon: Zap },
    { label: "Cost Reduction", value: "40%", icon: BarChart3 }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Tech Innovations Inc",
      role: "Chief Data Officer",
      content: "The AI Analytics Pro has revolutionized our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "CTO",
      content: "The AI Cybersecurity Suite is incredibly sophisticated. We've had zero security breaches since implementation, and our compliance scores are perfect.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "AI Content Generation Studio has transformed our content strategy. We're producing 20x more content with better quality and higher engagement rates.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Comprehensive AI services including analytics, automation, business intelligence, and cybersecurity. Transform your business with cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, business intelligence, cybersecurity, AI solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we deliver AI-powered innovations that drive growth and efficiency.
            </p>
            <FuturisticButton
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Our AI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <FuturisticCard key={index} className="text-center p-6">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your specific business needs
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <FuturisticCard key={service.id} className="p-6 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {service.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                  <Link
                    to={`/${service.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how our AI solutions have transformed businesses across industries
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Schedule a Demo
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;
