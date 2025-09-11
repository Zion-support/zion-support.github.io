

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React from "react";
import Layout from "../components/Layout";
export default function AIServices() {
  return (
<Layout
ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react';
import Layout from '../components/Layout';

export default function AIServices() {
  return (
    <Layout
origin/automation-improvements-final
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and
              services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              AI Services page is under construction.
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">AI Services page is under construction.</p>
origin/automation-improvements-final
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
origin/main
export default function AIServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
    const timer = null;
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="text-xl font-semibold">{c.title}</div>
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              AI Services;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Transform your business with cutting-edge AI solutions and;
              services.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">;
=======
import React from './react';
import Layout from "../components / Layout";
export default /**
 * AIServices - Function description
 */
function AIServices() {
  return (
    <Layout;
      title="AI Services - Zion Tech Group";
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              AI Services;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Transform your business with cutting - edge AI solutions and;
              services.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">;

              AI Services page is under construction.;
            </p>;
          </div>;
        </div>;
      </div>;

=======
    </Layout>;
  );


=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function AIServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const categories = [
    { id: 'all', name: 'All AI Services', count: 100 },
    { id: 'autonomous', name: 'Autonomous Agents', count: 25 },
    { id: 'nlp', name: 'Natural Language', count: 20 },
    { id: 'computer-vision', name: 'Computer Vision', count: 15 },
    { id: 'predictive', name: 'Predictive Analytics', count: 15 },
    { id: 'automation', name: 'AI Automation', count: 15 },
    { id: 'specialized', name: 'Specialized AI', count: 10 }
  ];

  const services = [
    {
      id: 1,
      name: 'Autonomous AI Agents',
      description: 'Self-managing AI agents that can perform complex tasks independently with minimal human intervention.',
      category: 'autonomous',
      features: ['Task AutomationDecision MakingLearning CapabilitiesMulti-platform Integration'],
      price: 'Custom Pricing',
      popular: true,
      useCases: ['Process AutomationCustomer ServiceData AnalysisContent Generation']
    };
    {
      id: 2,
      name: 'AI-Powered Financial Trading',
      description: 'Advanced AI algorithms for automated trading, risk management, and market analysis.',
    category: 'predictive',
      features: ['Market AnalysisRisk AssessmentAutomated TradingReal-time Monitoring'],
      price: 'Custom Pricing',
      popular: true,
      useCases: ['Algorithmic TradingPortfolio ManagementRisk AnalysisMarket Prediction']
    };
    {
      id: 3,
      name: 'AI Legal Document Analysis',
      description: 'Intelligent document review and analysis for legal professionals with contract insights.',
      category: 'nlp',
      features: ['Contract AnalysisRisk IdentificationCompliance CheckingDocument Summarization'],
      price: '$199/month',
      popular: false,
      useCases: ['Contract ReviewLegal ResearchCompliance MonitoringDocument Management']
    };
    {
      id: 4,
      name: 'AI-Powered Voice Analytics',
      description: 'Advanced voice analysis for sentiment, emotion, and intent detection in customer interactions.',
    category: 'nlp',
      features: ['Sentiment AnalysisEmotion DetectionIntent RecognitionReal-time Processing'],
      price: '$149/month',
      popular: true,
      useCases: ['Customer ServiceCall Center AnalyticsMarket ResearchQuality Assurance']
    };
    {
      id: 5,
      name: 'AI-Powered Search & Discovery',
      description: 'Intelligent search solutions with semantic understanding and personalized results.',
      category: 'specialized',
      features: ['Semantic SearchPersonalizationNatural Language QueriesContext Awareness'],
      price: '$99/month',
      popular: false,
      useCases: ['Enterprise SearchE-commerceContent DiscoveryKnowledge Management']
    };
    {
      id: 6,
      name: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for object detection, recognition, and processing.',
    category: 'computer-vision',
      features: ['Object DetectionImage RecognitionVideo AnalysisReal-time Processing'],
      price: '$179/month',
      popular: true,
      useCases: ['Quality ControlSecurity MonitoringMedical ImagingAutonomous Vehicles']
    };
    {
      id: 7,
      name: 'Machine Learning Model Training',
      description: 'Custom ML model development and training for specific business requirements.',
      category: 'specialized',
      features: ['Custom ModelsData PreprocessingModel OptimizationDeployment Support'],
      price: 'Custom Pricing',
      popular: false,
      useCases: ['Predictive ModelingPattern RecognitionAnomaly DetectionRecommendation Systems']
    };
    {
      id: 8,
      name: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for text analysis, translation, and language understanding.',
    category: 'nlp',
      features: ['Text AnalysisLanguage TranslationSentiment AnalysisEntity Recognition'],
      price: '$129/month',
      popular: true,
      useCases: ['Content AnalysisMultilingual SupportCustomer FeedbackDocument Processing']
    };
    {
      id: 9,
      name: 'AI Process Automation',
      description: 'Intelligent automation of complex business processes using AI and machine learning.',
      category: 'automation',
      features: ['Process MiningWorkflow OptimizationDecision AutomationIntegration APIs'],
      price: '$159/month',
      popular: false,
      useCases: ['Business Process AutomationWorkflow ManagementDecision SupportSystem Integration']
    };
    {
      id: 10,
      name: 'Predictive Analytics Engine',
      description: 'Advanced predictive modeling for forecasting trends, behaviors, and outcomes.',
    category: 'predictive',
      features: ['Trend ForecastingBehavioral AnalysisRisk PredictionScenario Modeling'],
      price: '$189/month',
      popular: true,
      useCases: ['Sales ForecastingCustomer BehaviorRisk ManagementResource Planning']
    };
    {
      id: 11,
      name: 'AI Content Generation',
      description: 'Intelligent content creation for marketing, documentation, and communication.',
    category: 'specialized',
      features: ['Content CreationMulti-format SupportBrand ConsistencyQuality Control'],
      price: '$79/month',
      popular: false,
      useCases: ['Marketing ContentTechnical DocumentationSocial MediaEmail Campaigns']
    };
    {
      id: 12,
      name: 'AI Chatbot Development',
      description: 'Intelligent conversational AI for customer service and engagement.',
      category: 'automation',
      features: ['Natural ConversationsMulti-channel SupportLearning CapabilitiesIntegration APIs'],
      price: '$89/month',
      popular: true,
      useCases: ['Customer SupportLead GenerationInternal HelpdeskE-commerce Assistant']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Explore our 100+ advanced AI services including autonomous agents, machine learning, computer vision, NLP, and predictive analytics solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, autonomous agents, computer vision, NLP, predictive analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                AI Services
              </h1>
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                100+ Advanced Artificial Intelligence Solutions
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Harness the power of artificial intelligence with our comprehensive suite of AI services. 
                From autonomous agents to predictive analytics, we provide cutting-edge AI solutions 
                to transform your business operations.
              </p>
            </div>
          </section>

          {/* Category Filter */}

=======
}

=======
import React from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI services including autonomous AI agents, financial trading systems, legal document analysis, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">AI Services</h1>
            <p className="text-xl text-slate-300 text-center">
              Advanced artificial intelligence solutions for your business.
            </p>
          </div>
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                AI Services;
              </h1>;
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                100+ Advanced Artificial Intelligence Solutions;
              </p>;
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                Harness the power of artificial intelligence with our comprehensive suite of AI services.;
                From autonomous agents to predictive analytics, we provide cutting-edge AI solutions;
                to transform your business operations.;
              </p>;
            </div>;
          </section>;
          {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
                    key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'bg-purple-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {category.name} ({category.count});
                  </button>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>
                    
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                            {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </li>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('- ')}</span>
                    </div>
                    
                            {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </span>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('-', ' ')}</span>
                    </div>
                    <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Capabilities Section */}
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* AI Capabilities Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our AI Capabilities
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                  <p className="text-slate-400">Advanced ML algorithms for pattern recognition and predictive modeling</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Computer Vision</h3>
                  <p className="text-slate-400">Image and video analysis with object detection and recognition</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Natural Language</h3>
                  <p className="text-slate-400">Advanced NLP for text analysis, translation, and understanding</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-slate-400">Data-driven insights and forecasting for business intelligence</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Harness AI Power?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our AI experts to discuss how our advanced artificial intelligence services 
                can transform your business operations and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                Contact our AI experts to discuss how our advanced artificial intelligence services
                can transform your business operations and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </Link>
                <a
                  href={`mailto:${contact.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
}
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';
export default function AIServicesPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="AI Services | Zion Tech Group" description="LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing." canonical="https://ziontechgroup.com/ai-services/" />
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>
          <p className="text-gray-300 text-lg">Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for typical vendor benchmarks.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' },
              { title: 'AI Customer Service', href: '/ai-customer-service' },
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="text-xl font-semibold">{c.title}</div>
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>
              </Link>
            ))}
          </div>
          <div className="text-sm text-gray-400">Questions? <Link className="text-cyan-400 underline" href="/contact">Contact us</Link>.</div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
}
origin/main
origin/automation-improvements-final
}
}
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <section className="py-16 px-4 bg-slate-900/40">;
            <div className="max-w-6xl mx-auto">;
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">;
                Our AI Capabilities;
              </h2>;
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>;
                  <p className="text-slate-400">Advanced ML algorithms for pattern recognition and predictive modeling</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Computer Vision</h3>;
                  <p className="text-slate-400">Image and video analysis with object detection and recognition</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Natural Language</h3>;
                  <p className="text-slate-400">Advanced NLP for text analysis, translation, and understanding</p>;
                </div>;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />;
                    </svg>;
                  </div>;
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>;
                  <p className="text-slate-400">Data-driven insights and forecasting for business intelligence</p>;
                </div>;
              </div>;
            </div>;
          </section>;
          {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-16 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <h2 className="text-3xl md:text-4xl font-bold mb-8">;
                Ready to Harness AI Power?;
              </h2>;
              <p className="text-lg text-slate-300 mb-8">;
                Contact our AI experts to discuss how our advanced artificial intelligence services;
                can transform your business operations and drive innovation.;
              </p>;
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">;
                <Link;
                  href="/contact";
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors";
                >;
                  Get AI Consultation;
                </Link>;
                <a;
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} ;
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors";
                >;
                  Call {contact.phone  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </a>;
                <a;
                  href={`mailto:${contact.email}`} ;
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors";
                >;
                  Email Us;
                </a>;
              </div>;
            </div>;
          </section>;
        </main>;
      </ErrorBoundary>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';
export default function AIServicesPage(req, res) {
  try {
  return (;
    <UltraAdvancedFuturisticBackground>;
      <SEO title="AI Services | Zion Tech Group" description="LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing." canonical="https://ziontechgroup.com/ai-services/" />;
      <div className="container mx-auto px-4 py-24 text-white">;
        <div className="max-w-5xl mx-auto space-y-8">;
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>;
          <p className="text-gray-300 text-lg">Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for typical vendor benchmarks.</p>;
          <div className="grid md:grid-cols-3 gap-6">;
            {[;
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },;
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },;
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },;
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' };
              { title: 'AI Customer Service', href: '/ai-customer-service' };
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (;
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">;
                <div className="text-xl font-semibold">{c.title}</div>;
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>;
              </Link>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          <div className="text-sm text-gray-400">Questions? <Link className="text-cyan-400 underline" href="/contact">Contact us</Link>.</div>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
