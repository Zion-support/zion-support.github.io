import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {;
'use client';
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Cpu, Database, Globe, Smartphone, Lock, Workflow, Sparkles
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" / />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" / />,
      title: 'AI Chatbot & Conversational AI',
      description: 'Intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,499/month',
      features: ['Natural language processing', 'Multi-language support', 'Voice integration', '24/7 availability'],
      benefits: ['80% reduction in support tickets', '60% faster response time', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'conversational'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" / />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      benefits: ['99.8% threat detection rate', '50% faster incident response', 'Zero false positives'],
      link: '/ai-cybersecurity',
      category: 'security'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" / />,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for quality control, surveillance, and automation.',
      price: 'Starting at $2,499/month',
      features: ['Object detection', 'Facial recognition', 'Quality inspection', 'Real-time processing'],
      benefits: ['90% accuracy improvement', '70% faster processing', '24/7 monitoring'],
      link: '/ai-computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-8 h-8 text-yellow-400" / />,
      title: 'AI Voice Solutions',
      description: 'Speech recognition, synthesis, and voice-controlled applications.',
      price: 'Starting at $1,999/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support'],
      benefits: ['95% accuracy rate', 'Real-time processing', 'Custom voice models'],
      link: '/ai-voice-solutions',
      category: 'voice'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" / />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      price: 'Starting at $999/month',
      features: ['Blog writing', 'Social media posts', 'Email campaigns', 'SEO optimization'],
      benefits: ['10 x content production', 'Consistent brand voice', 'SEO optimized'],
      link: '/ai-content-generation',
      category: 'content'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" / />,
      title: 'AI Customer Service',
      description: 'Intelligent customer support with sentiment analysis and automated responses.',
      price: 'Starting at $1,799/month',
      features: ['Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Escalation management'],
      benefits: ['85% first-call resolution', '50% cost reduction', '24/7 availability'],
      link: '/ai-customer-service',
      category: 'customer'
    },
    {
      icon: <Workflow className="w-8 h-8 text-indigo-400" / />,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making.',
      price: 'Starting at $2,299/month',
      features: ['Process automation', 'Decision trees', 'Integration APIs', 'Custom workflows'],
      benefits: ['75% process efficiency', '90% error reduction', 'Scalable automation'],
      link: '/ai-workflow-automation',
      category: 'automation'
    }
  ];
  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5 h-5" / /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-5 h-5" / /> },
    { id: 'conversational', name: 'Conversational', icon: <MessageCircle className="w-5 h-5" / /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" / /> },
    { id: 'vision', name: 'Computer Vision', icon: <Eye className="w-5 h-5" / /> },
    { id: 'voice', name: 'Voice AI', icon: <Mic className="w-5 h-5" / /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5 h-5" / /> },
    { id: 'customer', name: 'Customer Service', icon: <Users className="w-5 h-5" / /> },
    { id: 'automation', name: 'Automation', icon: <Workflow className="w-5 h-5" / /> }
  ];
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: <Brain className="w-6 h-6 text-cyan-400" / /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" / /> },
    { number: '24/7', label: 'AI Monitoring', icon: <Clock className="w-6 h-6 text-blue-400" / /> },
    { number: '150+', label: 'AI Experts', icon: <Users className="w-6 h-6 text-purple-400" / /> }
  ];
  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);
  return (
    <>
      <Helmet />
        <title  >AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
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
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" / />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style="{{" animationDelay: '1 s' }} / />
          
          <div className="relative max-w-7 xl mx-auto text-center" />
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30" />
              <Brain className="w-4 h-4" / />
              <span  >Advanced AI Solutions</span>
            </div>
            
            <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8 leading-tight" />
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"  />AI Technology
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center" />
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
               />
                <span  >Get AI Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
               />
                <span  >View AI Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" / />
          <div className="relative max-w-7 xl mx-auto" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" />
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center bg-white/5 backdrop-blur-sm rounded-2 xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300" />
                  <div className="flex justify-center mb-4"  />{stat.icon}
                  </div>
                  <div className="text-3 xl md:text-4 xl font-bold text-white mb-2"  />{stat.number}
                  </div>
                  <div className="text-gray-300 text-sm"  />{stat.label}
                  </div>
                </div>
              ))}
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, natural language processing, computer vision, and automation. Expert AI solutions for enterprises." / / />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI automation, business intelligence, AI consulting" / / />
        <meta property="og:title" content="AI Services - Zion Tech Group" / / />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive innovation." / / />
        <meta property="og:type" content="website" / / />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16" />
          <div className="absolute inset-0 opacity-20" /></div>
          <div className="relative max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8" />
            <div className="text-center" />
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"  />& Solutions
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning 
                to natural language processing, we deliver AI that drives real business value.
              </p>
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                 />
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" / />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
        <section className="py-16 px-4" />
          <div className="max-w-7 xl mx-auto" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" />
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center group" />
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <stat.icon className="w-8 h-8 text-cyan-400" / />
                  </div>
                  <div className="text-3 xl font-bold text-white mb-2"  >{stat.number}</div>
                  <div className="text-gray-400 text-sm"  >{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Tabs */}
        <section className="py-20 px-4 relative" />
          <div className="relative max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12" />
              {categories.map((category) => (
                <button
                  key="{category.id}"
                  onClick="{()" = /> setActiveTab(category.id)}
                  className="{`flex" items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover: bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span  >{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
              {filteredServices.map((service, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transform duration-300"  />{service.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4" />
                    <div className="text-cyan-400 font-semibold text-lg"  />{service.price}
                    </div>
                    
                    <div className="space-y-2" />
                      <h4 className="text-white font-semibold text-sm"  >Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key="{featureIndex}" className="flex items-center space-x-2 text-gray-400 text-sm" />
                          <CheckCircle className="w-4 h-4 text-green-400" / />
                          <span  >{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2" />
                      <h4 className="text-white font-semibold text-sm"  >Business Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key="{benefitIndex}" className="flex items-center space-x-2 text-gray-400 text-sm" />
                          <TrendingUp className="w-4 h-4 text-green-400" / />
                          <span  >{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to="{service.link}"
                      className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                     />
                      Learn More
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
              {services.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                 />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8 h-8 text-white" / />
                  </div>
                  
                  <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6" />
                    {service.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-sm text-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6" />
                    <span className="text-2 xl font-bold text-cyan-400"  >{service.price}</span>
                    <Link 
                      to="{service.link}"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-flex items-center"
                     />
                      Learn More <ArrowRight className="w-4 h-4 ml-1" / />
        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50" />
          <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" />
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center" />
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4" />
                    <stat.icon className="h-8 w-8 text-white" / />
                  </div>
                  <div className="text-3 xl font-bold text-white mb-2"  >{stat.number}</div>
                  <div className="text-gray-400"  >{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/30" />
          <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8" />
            <div className="flex flex-wrap justify-center gap-4" />
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
          <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" />
              {filteredServices.map((service, index) => (
                <div
                  key="{service.id}"
                  className="{`group" relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-purple-500 ${
                    service.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                 />
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2" />
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold"  />Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6" />
                    <div className="{`inline-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
                      <service.icon className="h-8 w-8 text-white" / />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2"  >{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4" />
                      <div className="flex items-center" />
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key="{i}"
                            className="{`h-4" w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          / />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400"  >({service.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="text-center mb-6" />
                    <div className="text-2 xl font-bold text-purple-400 mb-2"  >{service.price}</div>
                    <span className="text-sm text-gray-400"  >Monthly subscription</span>
                  </div>

                  <div className="space-y-3 mb-6" />
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key="{idx}" className="flex items-center text-sm text-gray-300" />
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" / />
                        <span  >{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400 text-center"  />+{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="space-y-3" />
                    <Link
                      to="{`/${service.id}`}"
                      className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                     />
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" / />
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                      />Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"  > </div>
              ))}
            </div>
          </div>
        </section>

              </div>
                  <div className="text-cyan-400 font-semibold text-sm mb-4"  />{service.price}
                  </div>
                  <Link 
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                    />Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="container mx-auto px-4" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-center" />
              <h2 className="text-4 xl font-bold text-white mb-6"  />Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">
                Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" />
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  />Start Your AI Journey
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  />Learn More About Us
                </Link>
              </div>
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900" />
          <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center" />
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"  />Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
              Let our AI experts help you identify opportunities, design solutions, and implement AI that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" />
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
               />
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" / />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400" />
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
