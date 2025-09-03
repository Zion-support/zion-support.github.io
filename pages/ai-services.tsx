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
      pricing: '$999–$4,999/month',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Quality inspection']
    },
    {
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud detection using machine learning algorithms to protect your business.',
      pricing: '$1,499–$7,999/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Automated alerts']
    },
    {
      name: 'Conversational AI Platform',
      description: 'Intelligent chatbots and virtual assistants powered by advanced NLP and machine learning.',
      pricing: '$799–$3,999/month',
      features: ['Natural language processing', 'Multi-channel support', 'Context awareness', 'Custom training']
    },
    {
      name: 'Predictive Analytics & Forecasting',
      description: 'Data-driven insights and predictions to help you make informed business decisions.',
      pricing: '$1,299–$5,999/month',
      features: ['Demand forecasting', 'Trend analysis', 'Risk assessment', 'Performance optimization']
    },
    {
      name: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and language understanding for business applications.',
      pricing: '$699–$2,999/month',
      features: ['Sentiment analysis', 'Text classification', 'Language translation', 'Content generation']
    },
    {
      name: 'Machine Learning Model Development',
      description: 'Custom ML models tailored to your specific business needs and data requirements.',
      pricing: '$2,999–$12,999/month',
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Deployment support']
    },
    {
      name: 'AI-Powered Recommendation Engine',
      description: 'Personalized recommendations to improve user engagement and drive sales.',
      pricing: '$1,199–$4,999/month',
      features: ['Personalized recommendations', 'Behavioral analysis', 'A/B testing', 'Performance tracking']
    },
    {
      name: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and processing for business automation.',
      pricing: '$899–$3,999/month',
      features: ['Document classification', 'Data extraction', 'Form processing', 'Workflow automation']
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including computer vision, fraud detection, conversational AI, predictive analytics, and machine learning solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, fraud detection, conversational AI, predictive analytics" />
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
              Advanced Artificial Intelligence Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Harness the power of artificial intelligence with our comprehensive suite of AI services. 
              From computer vision to predictive analytics, we help businesses leverage cutting-edge AI 
              technology to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Get AI Consultation
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
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
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">{service.name}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                  </div>
                  
                  <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
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
              AI Technology Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Machine Learning</h3>
                <p className="text-slate-300 text-sm">
                  Custom ML models for predictive analytics, classification, and pattern recognition.
                </p>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Deep Learning</h3>
                <p className="text-slate-300 text-sm">
                  Neural networks for complex pattern recognition and decision-making tasks.
                </p>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-green-400">Natural Language Processing</h3>
                <p className="text-slate-300 text-sm">
                  Text analysis, sentiment analysis, and language understanding capabilities.
                </p>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Computer Vision</h3>
                <p className="text-slate-300 text-sm">
                  Image recognition, object detection, and visual content analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our AI Development Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Discovery</h3>
                <p className="text-slate-300 text-sm">
                  Understanding your business needs and identifying AI opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Data Analysis</h3>
                <p className="text-slate-300 text-sm">
                  Analyzing your data and preparing it for AI model training.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Model Development</h3>
                <p className="text-slate-300 text-sm">
                  Building and training custom AI models for your specific use case.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Deployment</h3>
                <p className="text-slate-300 text-sm">
                  Deploying and monitoring AI solutions in your production environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Leverage AI for Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our AI experts to discuss how artificial intelligence can transform your business 
              operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}