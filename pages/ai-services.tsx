import Head from 'next/head';
import Link from 'next/link';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AIServices() {
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      category: 'Autonomous AI Agents',
      services: [
        'Customer Service Automation',
        'Intelligent Process Automation',
        'AI-Powered Decision Making',
        'Autonomous Data Analysis',
        'Smart Workflow Orchestration'
      ],
      description: 'Self-managing AI systems that handle complex tasks autonomously'
    },
    {
      category: 'Machine Learning Solutions',
      services: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Anomaly Detection',
        'Recommendation Engines',
        'Fraud Detection Systems'
      ],
      description: 'Advanced ML models for data-driven insights and predictions'
    },
    {
      category: 'Natural Language Processing',
      services: [
        'Chatbot Development',
        'Document Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Text Summarization'
      ],
      description: 'AI-powered language understanding and generation'
    },
    {
      category: 'Computer Vision',
      services: [
        'Image Recognition',
        'Object Detection',
        'Facial Recognition',
        'Medical Image Analysis',
        'Quality Control Automation'
      ],
      description: 'Visual AI solutions for image and video processing'
    },
    {
      category: 'AI-Powered Analytics',
      services: [
        'Business Intelligence',
        'Real-Time Dashboards',
        'Performance Monitoring',
        'Trend Analysis',
        'Predictive Modeling'
      ],
      description: 'Intelligent analytics for data-driven decision making'
    },
    {
      category: 'AI Integration Services',
      services: [
        'API Development',
        'System Integration',
        'Cloud AI Services',
        'Edge AI Deployment',
        'AI Model Optimization'
      ],
      description: 'Seamless integration of AI capabilities into existing systems'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including autonomous agents, machine learning, NLP, computer vision, and AI integration. 100+ AI-powered solutions for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, autonomous agents, NLP, computer vision, AI integration" />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                100+ Advanced AI Solutions
              </p>
              <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
                Harness the power of artificial intelligence with our comprehensive suite of AI services. 
                From autonomous agents to machine learning models, we deliver cutting-edge AI solutions 
                that transform how your business operates.
              </p>
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((category, index) => (
                  <div 
                    key={category.category}
                    className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">
                      {category.category}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {category.description}
                    </p>
                    <ul className="text-slate-400 space-y-2 mb-6">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>• {service}</li>
                      ))}
                    </ul>
                    <Link 
                      href="/contact" 
                      className="text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Capabilities */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Our AI Services?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Expert AI Team</h3>
                  <p className="text-slate-400">Experienced AI engineers and data scientists</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fast Implementation</h3>
                  <p className="text-slate-400">Rapid deployment and integration</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="text-slate-400">Measurable business impact and ROI</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-slate-400">Continuous monitoring and optimization</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Let our AI experts help you identify opportunities and implement 
                solutions that drive real business value.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Email {contact.email}
                </a>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}