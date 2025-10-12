import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import {;
'use client';
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
=======
import { 
  Brain, Shield, BarChart, MessageCircle, Eye, Mic, 
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp,
  Cpu
} from 'lucide-react';
<<<<<<< HEAD
import { Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, FileText, Users, Target, Settings, CheckCircle, ArrowRight, Clock, TrendingUp, Workflow } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const aiServices = [
    {
      icon: <Brain className="w-8h-8text-cyan-400" / />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-8h-8text-purple-400" / />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-8h-8text-red-400" / />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-8h-8text-green-400" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various industries.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Medical imaging'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-8h-8text-orange-400" />,
      title: 'AI Voice & Speech Processing',
      description: 'Convert speech to text, analyze sentiment, and create voice assistants.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Voice synthesis', 'Sentiment analysis', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-assistant',
      category: 'voice'
    },
    {
      icon: <FileText className="w-8h-8text-blue-400" / />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'Product descriptions'],
      benefits: ['80% time savings', 'Consistent quality', 'SEO optimized'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      icon: <Users className="w-8h-8text-pink-400" / />,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with automated ticket routing and resolution.',
      price: 'Starting at $1,799/month',
      features: ['Ticket automation', 'Sentiment analysis', 'Escalation management', 'Performance analytics'],
      benefits: ['75% faster resolution', '90% customer satisfaction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <Heart className="w-8h-8text-red-400" />,
      title: 'AI Healthcare Solutions',
      description: 'Medical diagnosis assistance, drug discovery, and patient monitoring systems.',
      price: 'Starting at $4,999/month',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Diagnostic assistance'],
      benefits: ['95% diagnostic accuracy', '30% faster diagnosis', 'FDA compliant'],
      link: '/ai-healthcare',
      category: 'healthcare'
    },
    {
      icon: <DollarSign className="w-8h-8text-green-400" />,
      title: 'AI Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk assessment solutions.',
      price: 'Starting at $3,499/month',
      features: ['Fraud detection', 'Algorithmic trading', 'Risk assessment', 'Credit scoring'],
      benefits: ['99.5% fraud detection', '25% risk reduction', 'Real-time monitoring'],
      link: '/ai-financial',
      category: 'finance'
    },
    {
      icon: <Target className="w-8h-8text-yellow-400" />,
      title: 'AI Marketing Automation',
      description: 'Personalized marketing campaigns and customer segmentation using AI.',
      price: 'Starting at $2,199/month',
      features: ['Customer segmentation', 'Personalized campaigns', 'A/B testing', 'ROI optimization'],
      benefits: ['40% higher conversion', '60% cost reduction', 'Real-time optimization'],
      link: '/ai-marketing',
      category: 'marketing'
    },
    {
      icon: <Settings className="w-8h-8text-gray-400" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive tasks and optimize business processes with AI.',
      price: 'Starting at $1,299/month',
      features: ['Workflow automation', 'Document processing', 'Data entry automation', 'Process optimization'],
      benefits: ['70% time savings', '90% accuracy improvement', 'Cost reduction'],
      link: '/ai-automation',
      category: 'automation'
    },
    {
      icon: <Cpu className="w-8h-8text-indigo-400" />,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions tailored to your specific business requirements.',
      price: 'Custom pricing',
      features: ['Custom ML models', 'API development', 'Integration services', 'Ongoing support'],
      benefits: ['100% tailored solution', 'Competitive advantage', 'Scalable architecture'],
      link: '/custom-ai-development',
      category: 'custom'
    }
  ];
  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5h-5" / /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5h-5" / /> },
    { id: 'conversational', name: 'Conversational', icon: <MessageCircle className="w-5h-5" / /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5h-5" / /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5h-5" / /> },
    { id: 'voice', name: 'Voice AI', icon: <Mic className="w-5h-5" / /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5h-5" / /> },
    { id: 'customer', name: 'Customer Service', icon: <Users className="w-5h-5" / /> },
    { id: 'automation', name: 'Automation', icon: <Workflow className="w-5h-5" / /> }
  ];
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6h-6text-cyan-400" / /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6h-6text-green-400" / /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6h-6text-blue-400" / /> },
    { number: '150+', label: 'AI Experts', icon: <Users className="w-6h-6text-purple-400" / /> }
  ];
  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);
  return (
<<<<<<< HEAD
    <>
      <Helmet />
        <title   />AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta const name = "description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." / / />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, AI consulting" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" / />
        <script type="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Advanced artificial intelligence solutions for businesses",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "USD",
              "availability": "https: //schema.org/InStock"
            }
          })}
        </script>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, chatbots, cybersecurity, computer vision, and custom AI development solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, cybersecurity, computer vision" />
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto" />
          <div className="text-center" />
            <h1 className="text-4xl md:text-6xl font-boldtext-whitemb-6" />
              AI <span className="text-transparent bg-clip-text bg-gradient-to-rfrom-blue-400to-purple-400" />Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" />
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-wrapjustify-centergap-4" />
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flexitems-centergap-2" />
                Get Started <ArrowRight className="w-5h-5" />
              </Link>
<<<<<<< HEAD
              <Link to="/about" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)]animate-pulse" / />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
          <div className="relative max-w-7 xlmx-autotext-center" />
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" />
              <Brain className="w-4h-4" / />
              <span   />Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />AI Technology
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-rowgap-6justify-center" />
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span   />Get AI Consultation</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span   />View AI Demo</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
=======
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
              </Link>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterprises." / / />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" / / />
        <meta property="og:title" content="AI Services - Zion Tech Group" / / />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* Hero Section */}
        <section className="relative overflow-hiddenpt-20pb-16" />
          <div className="absoluteinset-0opacity-20" / />
          <div className="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className="text-center" />
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent"  />& Solutions
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver AI that drives real business value.
              </p>
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
                  Get AI Consultation
                  <ArrowRight className="ml-2h-5w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950
                </a>
              </div>
        <section className="py-16px-4" />
          <div className="max-w-7xlmx-auto" />
            <div className="grid grid-cols-2md:grid-cols-4gap-8" />
              {stats.map((stat, index) => (
                <div key="{index}" className="text-centergroup" />
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110transition-transformduration-300" />
                    <stat.icon className="w-8h-8text-cyan-400" / />
                  </div>
                  <div className="text-3 xl font-boldtext-whitemb-2"   />{stat.number}</div>
                  <div className="text-gray-400text-sm"   />{stat.label}</div>
                </div>
              ))}
            </div>
=======
      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
          </div>
        </div>
      </section>

<<<<<<< HEAD
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
              {services.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8h-8text-white" / />
                  </div>
                  
                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors"  />{service.title}
                  </h3>
                  
                  <p className="text-gray-300mb-6leading-relaxed" />
                    {service.description}
                  </p>

                  <ul className="space-y-2mb-6" />
=======
      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
                    {service.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-centerjustify-betweenmb-6" />
                    <span className="text-2 xlfont-boldtext-cyan-400"   />{service.price}</span>
                    <Link to="{service.link}" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flexitems-center" />
                      Learn More <ArrowRight className="w-4h-4ml-1" />
        {/* Stats Section */}
        <section className="py-16bg-gray-900/50" />
          <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className="grid grid-cols-2md:grid-cols-4gap-8" />
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center" />
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500rounded-fullmb-4" />
                    <stat.icon className="h-8w-8text-white" / />
                  </div>
                  <div className="text-3 xl font-boldtext-whitemb-2"   />{stat.number}</div>
                  <div className="text-gray-400"   />{stat.label}</div>
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8bg-gray-900/30" />
          <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className="flex flex-wrapjustify-centergap-4" />
              {categories.map((category) => (
                <button
                  key="{category}"
                  onClick="{()" =  />setSelectedCategory(category)}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16" />
          <div className="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3xl:grid-cols-4gap-8" />
              {filteredServices.map((service, index) => (
                <div
                  key="{service.id}"
                  className="{`group" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`} />
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2transform-translate-x-1/2" />
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-centermb-6" />
                    <div className="{`inline-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
                      <service.icon className="h-8w-8text-white" / />
                    </div>
                    <h3 className="text-xl font-boldtext-whitemb-2"   />{service.title}</h3>
                    <p className="text-gray-300text-smmb-4" />{service.description}</p>
                    <div className="flex items-center justify-centerspace-x-2mb-4" />
                      <div className="flexitems-center" />
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key="{i}"
                            className="{`h-4" w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          / />
                        ))}
                      </div>
                      <span className="text-smtext-gray-400"   />({service.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="text-centermb-6" />
                    <div className="text-2 xl font-boldtext-purple-400mb-2"   />{service.price}</div>
                    <span className="text-smtext-gray-400"   />Monthly subscription</span>
                  </div>

                  <div className="space-y-3mb-6" />
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key="{idx}" className="flex items-centertext-smtext-gray-300" />
                        <CheckCircle className="h-4 w-4 text-green-400mr-3flex-shrink-0" / />
                        <span   />{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-smtext-gray-400text-center"  />+{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3" />
                    <Link to="{`/${service.id}`}" className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                      View Details
                      <ArrowRight className="ml-2h-4w-4" />
                    </Link>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-whitetransition-allduration-300">Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Process Section */}
        <section className="py-20px-4relative" />
          <div className="relativemax-w-7xlmx-auto" />
            <div className="text-centermb-16" />
              <h2 className="text-4xl md:text-5xl font-boldtext-whitemb-6" />
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent" />AI Process</span>
              </h2>
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
                A proven methodology for successful AI implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your business processes and identify AI opportunities.',
                  icon: <Target className="w-8h-8text-cyan-400" />
                },
                {
                  step: '02',
                  title: 'AI Strategy & Planning',
                  description: 'Develop a comprehensive AI roadmap tailored to your goals.',
                  icon: <Settings className="w-8h-8text-purple-400" />
                },
                {
                  step: '03',
                  title: 'Model Development',
                  description: 'Build and train custom AI models for your specific use cases.',
                  icon: <Brain className="w-8h-8text-green-400" />
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'Deploy AI solutions and continuously optimize performance.',
                  icon: <Zap className="w-8h-8text-yellow-400" />
                }
              ].map((step, index) => (
                <div key={index} className="text-centergroup" />
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300" />
                    {step.icon}
                  </div>
                  <div className="text-cyan-400 font-boldtext-lgmb-2" />{step.step}</div>
                  <h3 className="text-xl font-boldtext-whitemb-4" />{step.title}</h3>
                  <p className="text-gray-300leading-relaxed" />{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4" />
          <div className="max-w-7xlmx-auto" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-centerrelativeoverflow-hidden" />
              <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
              <div className="relativez-10" />
                <h2 className="text-4xl font-boldtext-whitemb-6" />
                  Ready to Harness the Power of AI?
                </h2>
                <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto" />
                  Let's discuss how our AI solutions can transform your business and give you a competitive edge.
                </p>
                <div className="flex flex-col sm:flex-rowgap-4justify-center" />
                  <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                    Start Your AI Journey
                  </Link>
                  <Link to="/pricing" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                    View AI Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2 className="text-4 xl font-boldtext-whitemb-6"  />Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto" />
                Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105" />
                  Learn More <ArrowRight className="w-4h-4" />
                  />Start Your AI Journey
                </Link>
        <section className="py-20 bg-gradient-to-brfrom-slate-900to-gray-900" />
          <div className="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center" />
            <h2 className="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
              Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center" />
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
                Start Your AI Journey
                <ArrowRight className="ml-2h-5w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8text-gray-400" />
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
=======

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-4xlmx-autotext-center" />
          <h2 className="text-3xl font-boldtext-whitemb-6" />
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-gray-300text-lgmb-8" />
            Let our AI experts help you choose the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4justify-center" />
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-centergap-2" />
              Start Your AI Journey <ArrowRight className="w-5h-5" />
            </Link>
            <Link to="/about" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;