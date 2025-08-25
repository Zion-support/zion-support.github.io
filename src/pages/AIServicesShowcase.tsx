<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, DollarSign, Users, ArrowRight, Sparkles, Brain, Zap, TrendingUp } from 'lucide-react';
import { comprehensiveServices } from '@/data/comprehensiveServices';

export default function AIServicesShowcase() {
  const aiServices = comprehensiveServices.filter(service => service.category === "AI Services");
=======
import { useState } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Brain, Zap, Target, Monitor, Circle, ArrowRight, CheckCircle, Users, Clock } from 'lucide-react';

const AIServicesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');

  const aiServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category === 'AI Services'
  );

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
      features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Named Entity Recognition']
    },
    {
      icon: Monitor,
      title: 'Computer Vision',
      description: 'Image and video analysis with object detection and pattern recognition.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and trend prediction.',
      features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior Prediction', 'Market Analysis']
    },
    {
      icon: Circle,
      title: 'Automated Decision Making',
      description: 'AI-powered systems for intelligent decision support and automation.',
      features: ['Process Automation', 'Decision Trees', 'Rule-based Systems', 'Intelligent Routing']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, patient monitoring, and medical research.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, risk assessment, and algorithmic trading.',
      icon: '💳'
    },
    {
      name: 'E-commerce',
      description: 'Personalized recommendations, inventory optimization, and customer insights.',
      icon: '🛒'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    },
    {
      name: 'Education',
      description: 'Adaptive learning, student assessment, and content personalization.',
      icon: '🎓'
    },
    {
      name: 'Transportation',
      description: 'Route optimization, autonomous vehicles, and traffic management.',
      icon: '🚗'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations',
      icon: Zap
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for improved strategic planning',
      icon: Target
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize processes and reduce operational expenses',
      icon: CheckCircle
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Personalized interactions and improved satisfaction',
      icon: Users
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Evaluate current systems and define AI implementation goals',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Data Preparation',
      description: 'Clean, structure, and prepare data for AI model training',
      duration: '2-4 weeks'
    },
    {
      step: 3,
      title: 'Model Development',
      description: 'Build and train AI models using advanced algorithms',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Thorough testing and validation of AI systems',
      duration: '2-3 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Monitoring',
      description: 'Launch AI solutions and continuous performance monitoring',
      duration: '1-2 weeks'
    }
  ];
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Services - Zion Tech Group" 
        description="Discover cutting-edge AI solutions including chatbots, content generation, and business intelligence analytics."
        keywords="AI services, machine learning, chatbots, content generation, business intelligence, analytics"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-zion-purple mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              AI Services
            </h1>
            <Brain className="w-12 h-12 text-zion-purple ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From intelligent chatbots to predictive analytics, we deliver AI that drives real results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full border border-zion-purple/30">
              <Zap className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-zion-cyan/20 px-4 py-2 rounded-full border border-zion-cyan/30">
              <TrendingUp className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Predictive Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full border border-zion-purple/30">
              <Sparkles className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Natural Language Processing</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Each service is designed with enterprise-grade AI technology and proven methodologies to deliver measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zion-purple text-white">
                      {service.subcategory}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                      AI Score: {service.aiScore}
                    </Badge>
                  </div>
                </div>
<<<<<<< HEAD
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white font-bold text-xl">
                        {service.currency}{service.price}
                      </span>
                      <span className="text-zion-slate-light">
                        /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                          <span className="text-zion-slate-light text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Business Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                          <span className="text-zion-slate-light text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.map((audience, index) => (
                        <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Delivery and Contact */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-zion-slate-light">
                      <Users className="w-4 h-4" />
                      <span>{service.targetAudience.length} target audiences</span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-zion-blue-dark/50 p-4 rounded-lg mb-6">
                    <h4 className="text-white font-semibold mb-3">Get Started:</h4>
                    <div className="space-y-2 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-2">
                        <span>📧</span>
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📱</span>
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🌐</span>
                        <span>{service.contactInfo.website}</span>
=======
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-zion-slate-light mb-4">{capability.description}</p>
                <ul className="text-left space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services Portfolio */}
      <div id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Services Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of AI services designed to accelerate 
              your digital transformation journey.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['services', 'industries', 'benefits'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiServices.map((service) => (
                  <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      {service.badge === 'Premium' && (
                        <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Price:</span>
                        <span className="text-white font-bold">{service.price.currency}{service.price.monthly}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Delivery:</span>
                        <span className="text-zion-slate-light text-sm">1-2 weeks</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light text-sm">Support:</span>
                        <span className="text-zion-slate-light text-sm capitalize">24/7</span>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
                      </div>
                    </div>
                  </div>

<<<<<<< HEAD
                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                      Get Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
=======
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                      className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion AI Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver AI solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-zion-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Technology</h3>
              <p className="text-zion-slate-light">
                Built with state-of-the-art machine learning models and natural language processing capabilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-zion-slate-light">
                Track record of delivering measurable business impact and ROI for our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-zion-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Implementation</h3>
              <p className="text-zion-slate-light">
                Quick setup and deployment with ongoing support and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Globe,
  Database,
  Code,
  Lock,
  Sparkles
} from "lucide-react";
import { COMPREHENSIVE_SERVICES } from "@/data/comprehensiveServices";

export default function AIServicesShowcase() {
  const aiServices = COMPREHENSIVE_SERVICES.filter(service => 
    service.category.includes('AI') || 
    service.tags.some(tag => tag.toLowerCase().includes('ai'))
  );

  const aiCategories = [
    {
      name: "AI Automation",
      description: "Intelligent process automation and workflow optimization",
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-600",
      services: aiServices.filter(s => s.category.includes('Automation'))
    },
    {
      name: "AI Content Generation",
      description: "AI-powered content creation and optimization",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-600",
      services: aiServices.filter(s => s.category.includes('Content'))
    },
    {
      name: "AI Analytics",
      description: "Predictive analytics and intelligent insights",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
      services: aiServices.filter(s => s.category.includes('Analytics'))
    },
    {
      name: "AI Security",
      description: "Intelligent threat detection and response",
      icon: <Shield className="h-8 w-8" />,
      color: "from-red-500 to-pink-600",
      services: aiServices.filter(s => s.category.includes('Security'))
    }
  ];

  const aiUseCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and virtual assistants for 24/7 customer support",
      benefits: ["Reduce response time by 90%", "Handle 80% of common queries", "Improve customer satisfaction"],
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and identify opportunities with machine learning",
      benefits: ["Increase revenue by 15-25%", "Reduce operational costs", "Improve decision making"],
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Content Generation",
      description: "Automated content creation for marketing and communications",
      benefits: ["Scale content production 10x", "Maintain brand consistency", "Optimize for SEO"],
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Security Intelligence",
      description: "AI-powered threat detection and automated incident response",
      benefits: ["Detect threats 60% faster", "Reduce false positives", "Automate response actions"],
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <>
      <SEO 
        title="AI Services Showcase - Zion Tech Group" 
        description="Discover our cutting-edge AI services including automation, content generation, analytics, and security. Transform your business with intelligent solutions."
        keywords="AI services, machine learning, automation, content generation, predictive analytics, AI security"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-zion-purple to-zion-cyan p-4 rounded-full">
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
            <GradientHeading className="text-5xl md:text-6xl mb-6">
              AI-Powered Solutions
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence. From automation to predictive analytics, 
              our AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get AI Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="py-8 bg-zion-blue-light border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-cyan/20 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Categories */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>AI Service Categories</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions across multiple domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiCategories.map((category) => (
                <Card key={category.name} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-t-lg flex items-center justify-center`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-zion-cyan font-medium mb-2">
                        {category.services.length} Services Available
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.services.slice(0, 2).map((service) => (
                          <Badge key={service.id} variant="secondary" className="bg-zion-blue-light text-zion-slate-light text-xs">
                            {service.title.split(' ').slice(0, 2).join(' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                      <a href={`/comprehensive-services?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        Explore {category.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Use Cases */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>AI Use Cases & Benefits</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Real-world applications and measurable benefits of our AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiUseCases.map((useCase) => (
                <Card key={useCase.title} className="bg-zion-blue border border-zion-blue-light p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-zion-purple/20 p-3 rounded-full">
                      <div className="text-zion-purple">
                        {useCase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-zion-slate-light">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-zion-cyan font-medium">Key Benefits:</p>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured AI Services */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Featured AI Services</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Our most popular and innovative AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.slice(0, 6).map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className="relative">
                    <img 
                      src={service.images[0]} 
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.featured && (
                      <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                        Featured
                      </Badge>
                    )}
                    <Badge className="absolute top-4 left-4 bg-zion-cyan text-white">
                      AI Score: {service.aiScore}%
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-zion-purple" />
                      <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price?.toLocaleString()}
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          Starting Price
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        Get AI Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Technology Stack */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>AI Technology Stack</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Built with cutting-edge AI technologies and frameworks
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Machine Learning</h3>
                <p className="text-zion-slate-light text-sm">TensorFlow, PyTorch, Scikit-learn</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Deep Learning</h3>
                <p className="text-zion-slate-light text-sm">Neural Networks, CNN, RNN, Transformers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Database className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Data Processing</h3>
                <p className="text-zion-slate-light text-sm">Pandas, NumPy, Apache Spark</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI APIs</h3>
                <p className="text-zion-slate-light text-sm">OpenAI, Azure AI, AWS SageMaker</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Contact our AI experts today for a free consultation and discover how artificial intelligence 
              can transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule AI Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-zion-slate-light mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-zion-slate-light">
                <Clock className="inline h-4 w-4 mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
  );
}