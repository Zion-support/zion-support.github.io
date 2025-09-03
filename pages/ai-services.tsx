import Head from 'next/head';
import Link from 'next/link';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      name: 'Computer Vision & Image Analysis',
      description: 'Advanced image recognition, object detection, and visual content analysis for various industries.',
      pricing: '$499–$2,999/month',
      features: ['Object detection and classification', 'Facial recognition systems', 'Medical image analysis', 'Quality control automation']
    },
    {
      name: 'Natural Language Processing (NLP)',
      description: 'Text analysis, sentiment detection, language translation, and conversational AI solutions.',
      pricing: '$399–$2,499/month',
      features: ['Sentiment analysis', 'Language translation', 'Text summarization', 'Named entity recognition']
    },
    {
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud prevention with machine learning models for financial and e-commerce security.',
      pricing: '$599–$3,499/month',
      features: ['Real-time transaction monitoring', 'Behavioral pattern analysis', 'Risk scoring algorithms', 'Automated fraud prevention']
    },
    {
      name: 'Conversational AI Platform',
      description: 'Intelligent chatbots and virtual assistants with natural language understanding capabilities.',
      pricing: '$299–$1,999/month',
      features: ['Multi-channel chatbot deployment', 'Natural language understanding', 'Context-aware conversations', 'Integration with CRM systems']
    },
    {
      name: 'Predictive Analytics & Forecasting',
      description: 'Machine learning models for demand forecasting, sales prediction, and business intelligence.',
      pricing: '$399–$2,499/month',
      features: ['Demand forecasting', 'Sales prediction models', 'Customer lifetime value analysis', 'Market trend analysis']
    },
    {
      name: 'Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content platforms, and service providers.',
      pricing: '$299–$1,999/month',
      features: ['Collaborative filtering', 'Content-based recommendations', 'Real-time personalization', 'A/B testing for recommendations']
    },
    {
      name: 'Speech Recognition & Processing',
      description: 'Voice-to-text conversion, speech analysis, and voice command processing for applications.',
      pricing: '$199–$1,499/month',
      features: ['Real-time speech-to-text', 'Voice command processing', 'Speaker identification', 'Multi-language support']
    },
    {
      name: 'AI-Powered Search & Discovery',
      description: 'Intelligent search engines with semantic understanding and personalized results.',
      pricing: '$249–$1,799/month',
      features: ['Semantic search capabilities', 'Personalized search results', 'Auto-complete suggestions', 'Search analytics']
    },
    {
      name: 'Machine Learning Model Training',
      description: 'Custom ML model development and training for specific business use cases and data.',
      pricing: '$799–$4,999/month',
      features: ['Custom model development', 'Data preprocessing', 'Model training and optimization', 'Performance monitoring']
    },
    {
      name: 'AI Data Analytics Platform',
      description: 'Intelligent data analysis with automated insights and business intelligence reporting.',
      pricing: '$399–$2,499/month',
      features: ['Automated data analysis', 'Business intelligence dashboards', 'Anomaly detection', 'Predictive insights']
    },
    {
      name: 'AI-Powered Content Generation',
      description: 'Automated content creation for marketing, documentation, and creative writing applications.',
      pricing: '$199–$1,499/month',
      features: ['Automated content writing', 'Marketing copy generation', 'Technical documentation', 'Content optimization']
    },
    {
      name: 'Intelligent Process Automation',
      description: 'AI-driven workflow automation with decision-making capabilities and process optimization.',
      pricing: '$499–$2,999/month',
      features: ['Workflow automation', 'Decision-making algorithms', 'Process optimization', 'Exception handling']
    },
    {
      name: 'AI-Powered Customer Support',
      description: 'Intelligent customer service automation with ticket routing and automated responses.',
      pricing: '$299–$1,999/month',
      features: ['Automated ticket routing', 'Intelligent response generation', 'Customer sentiment analysis', 'Support analytics']
    },
    {
      name: 'Computer Vision for Quality Control',
      description: 'Automated quality inspection using computer vision for manufacturing and production.',
      pricing: '$599–$3,499/month',
      features: ['Defect detection', 'Quality measurement', 'Production line monitoring', 'Automated reporting']
    },
    {
      name: 'AI-Powered Risk Assessment',
      description: 'Intelligent risk evaluation for insurance, lending, and investment decision-making.',
      pricing: '$399–$2,499/month',
      features: ['Risk scoring algorithms', 'Automated underwriting', 'Portfolio risk analysis', 'Compliance monitoring']
    },
    {
      name: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and intelligent document management systems.',
      pricing: '$299–$1,999/month',
      features: ['Document classification', 'Data extraction', 'Intelligent routing', 'Compliance checking']
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including computer vision, natural language processing, fraud detection, conversational AI, and 12+ more artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, fraud detection, conversational AI, predictive analytics" />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              AI Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Advanced artificial intelligence solutions for modern businesses
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Our AI services leverage cutting-edge machine learning, computer vision, and natural language processing 
              to solve complex business challenges and drive innovation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get AI Consultation
              </Link>
              <Link href="/services" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">16+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">$199</h3>
                <p className="text-slate-300">Starting Price</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-green-400 mb-2">99.9%</h3>
                <p className="text-slate-300">Accuracy Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our AI Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">{service.name}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                    <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                      Get Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              AI Technology Stack
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Machine Learning</h3>
                  <p className="text-slate-300">Advanced ML algorithms for predictive modeling and pattern recognition</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Deep Learning</h3>
                  <p className="text-slate-300">Neural networks for complex data processing and decision making</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Computer Vision</h3>
                  <p className="text-slate-300">Image and video analysis for automation and quality control</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">Natural Language</h3>
                  <p className="text-slate-300">Text processing and understanding for conversational AI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions 
              that will transform your business operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}