import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
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
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
          {/* Category Filter */}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'bg-purple-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';
                    }`}
                  >;
                    {category.name} ({category.count});
                  </button>;
                ))}
              </div>;
            </div>;
          </section>;
          {/* Services Grid */}
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
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>;
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {useCase}
                          </span>;
                        ))}
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
              </div>;
            </div>;
          </section>;
          {/* AI Capabilities Section */}
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
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </Link>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
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
          {/* CTA Section */}
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
                  Call {contact.phone}
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
}
import SEO from '../components/SEO',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import Link from 'next/link',;
export default function AIServicesPage() {;
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
            ))}
          </div>;
          <div className="text-sm text-gray-400">Questions? <Link className="text-cyan-400 underline" href="/contact">Contact us</Link>.</div>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
}
;
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding for your business.',
    icon: MessageSquare,
    features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Content generation'],
    price: '$1,500/month',
    benefits: ['Better customer insights', 'Automated content', 'Multilingual support', 'Cost efficiency']
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis powered by cutting-edge AI technology.',
    icon: Eye,
    features: ['Object detection', 'Image classification', 'Video analysis', 'Custom models'],
    price: '$2,000/month',
    benefits: ['Automated visual analysis', 'Quality control', 'Security monitoring', 'Process optimization']
  },
  {
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational agents for customer service and support.',
    icon: Bot,
    features: ['24/7 availability', 'Natural conversations', 'Multi-language support', 'Integration ready'],
    price: '$800/month',
    benefits: ['Improved customer service', 'Reduced support costs', 'Scalable solutions', 'Better user experience']
  },
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models tailored to your specific business needs.',
    icon: Brain,
    features: ['Predictive analytics', 'Custom algorithms', 'Data training', 'Model optimization'],
    price: '$3,000/month',
    benefits: ['Data-driven decisions', 'Predictive insights', 'Competitive advantage', 'Scalable intelligence']
  }
];

export default function AIServicesPage() {
  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including natural language processing, computer vision, chatbots, and machine learning models."
      keywords="AI services, machine learning, natural language processing, computer vision, chatbots, artificial intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From natural language processing to computer vision, we deliver AI that works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your AI needs and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
