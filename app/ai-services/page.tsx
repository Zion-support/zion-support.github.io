'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  icon: string;
  popular?: boolean;
  useCases: string[];
  benefits: string[];
}

const aiServices: AIService[] = [
  {
    id: 'machine-learning-models',
    name: 'Custom Machine Learning Models',
    description: 'Build and deploy custom ML models tailored to your specific business needs and data patterns.',
    features: [
      'Custom model development',
      'Data preprocessing and cleaning',
      'Model training and optimization',
      'Real-time inference APIs',
      'Model monitoring and maintenance',
      'A/B testing framework',
      'Scalable deployment',
      'Performance analytics'
    ],
    pricing: {
      monthly: 2500,
      yearly: 25000,
      setup: 5000
    },
    icon: '🧠',
    popular: true,
    useCases: [
      'Predictive analytics for sales forecasting',
      'Customer churn prediction',
      'Fraud detection systems',
      'Recommendation engines',
      'Image classification and recognition',
      'Natural language processing'
    ],
    benefits: [
      'Increase revenue by 15-30% through better predictions',
      'Reduce operational costs by 20-40%',
      'Improve customer satisfaction with personalized experiences',
      'Automate complex decision-making processes',
      'Gain competitive advantage through data insights'
    ]
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
    features: [
      'Sentiment analysis and emotion detection',
      'Text classification and categorization',
      'Named entity recognition',
      'Language translation (100+ languages)',
      'Text summarization and extraction',
      'Chatbot and conversational AI',
      'Document processing and analysis',
      'Real-time text processing'
    ],
    pricing: {
      monthly: 1800,
      yearly: 18000,
      setup: 3000
    },
    icon: '💬',
    useCases: [
      'Customer support automation',
      'Content moderation and filtering',
      'Market research and social media analysis',
      'Legal document analysis',
      'Medical record processing',
      'Multilingual customer service'
    ],
    benefits: [
      'Process thousands of documents in minutes',
      'Improve customer service response times by 70%',
      'Reduce manual text processing costs by 60%',
      'Enable multilingual business operations',
      'Extract valuable insights from unstructured data'
    ]
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis using state-of-the-art computer vision algorithms and deep learning.',
    features: [
      'Object detection and recognition',
      'Facial recognition and analysis',
      'Image classification and tagging',
      'Video content analysis',
      'OCR and document scanning',
      'Quality control and inspection',
      'Augmented reality integration',
      'Real-time video processing'
    ],
    pricing: {
      monthly: 2200,
      yearly: 22000,
      setup: 4000
    },
    icon: '👁️',
    useCases: [
      'Manufacturing quality control',
      'Security and surveillance systems',
      'Medical image analysis',
      'Retail inventory management',
      'Autonomous vehicle systems',
      'Social media content moderation'
    ],
    benefits: [
      'Automate visual inspection processes',
      'Improve accuracy by 95% compared to manual inspection',
      'Enable 24/7 monitoring capabilities',
      'Reduce human error in critical processes',
      'Scale visual analysis across multiple locations'
    ]
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    description: 'Comprehensive predictive analytics solution for forecasting, trend analysis, and data-driven decision making.',
    features: [
      'Advanced forecasting algorithms',
      'Time series analysis',
      'Anomaly detection',
      'Risk assessment and modeling',
      'Scenario planning and simulation',
      'Real-time data integration',
      'Interactive dashboards',
      'Automated reporting'
    ],
    pricing: {
      monthly: 2000,
      yearly: 20000,
      setup: 3500
    },
    icon: '📈',
    useCases: [
      'Sales and revenue forecasting',
      'Supply chain optimization',
      'Financial risk management',
      'Customer lifetime value prediction',
      'Equipment maintenance scheduling',
      'Market trend analysis'
    ],
    benefits: [
      'Improve forecast accuracy by 40-60%',
      'Reduce inventory costs by 25-35%',
      'Optimize resource allocation',
      'Minimize business risks',
      'Enable proactive decision making'
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI Process Automation',
    description: 'Intelligent automation solutions that learn and adapt to optimize your business processes continuously.',
    features: [
      'Intelligent process mining',
      'Workflow optimization',
      'Exception handling and learning',
      'Integration with existing systems',
      'Performance monitoring',
      'Continuous improvement',
      'Scalable automation framework',
      'Human-AI collaboration tools'
    ],
    pricing: {
      monthly: 1500,
      yearly: 15000,
      setup: 2500
    },
    icon: '⚙️',
    useCases: [
      'Document processing and routing',
      'Customer onboarding automation',
      'Invoice processing and approval',
      'Inventory management',
      'HR process automation',
      'Compliance monitoring'
    ],
    benefits: [
      'Reduce process time by 50-80%',
      'Eliminate manual errors',
      'Free up staff for higher-value tasks',
      'Improve process consistency',
      'Scale operations without proportional cost increase'
    ]
  },
  {
    id: 'ai-consulting',
    name: 'AI Strategy Consulting',
    description: 'Expert guidance on AI implementation, strategy development, and digital transformation initiatives.',
    features: [
      'AI readiness assessment',
      'Strategy development and planning',
      'Technology selection and evaluation',
      'Implementation roadmap',
      'Change management support',
      'Training and education programs',
      'Ongoing support and optimization',
      'ROI measurement and reporting'
    ],
    pricing: {
      monthly: 3000,
      yearly: 30000,
      setup: 10000
    },
    icon: '🎯',
    popular: true,
    useCases: [
      'Digital transformation initiatives',
      'AI adoption strategy',
      'Technology modernization',
      'Competitive advantage development',
      'Operational efficiency improvement',
      'Innovation and R&D planning'
    ],
    benefits: [
      'Avoid costly AI implementation mistakes',
      'Accelerate time-to-value for AI projects',
      'Ensure alignment with business objectives',
      'Build internal AI capabilities',
      'Maximize ROI on AI investments'
    ]
  }
];

export default function AIServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Advanced Artificial Intelligence Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with cutting-edge AI technologies. From machine learning models to 
            natural language processing, we deliver enterprise-grade AI solutions that drive real results.
          </p>
          
          {/* Contact Info */}
          <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto mb-12 border border-cyan-400/30">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Implement AI?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">📞</span>
                <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className={`futuristic-card p-8 rounded-lg relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-lg">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-400 mr-3 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-lg">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span
                        key={index}
                        className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs"
                      >
                        {useCase}
                      </span>
                    ))}
                    {service.useCases.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{service.useCases.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      {formatPrice(service.pricing.monthly)}/month
                    </div>
                    <div className="text-sm text-gray-400">
                      or {formatPrice(service.pricing.yearly)}/year (Save 17%)
                    </div>
                    {service.pricing.setup && (
                      <div className="text-xs text-gray-500 mt-2">
                        + {formatPrice(service.pricing.setup)} setup fee
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`tel:+13024640950`}
                      className="w-full bg-cyan-400 text-black py-4 px-6 rounded-lg font-bold text-center block hover:bg-cyan-300 transition-colors text-lg"
                    >
                      Get Started Now
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full border border-cyan-400 text-cyan-400 py-4 px-6 rounded-lg font-bold text-center block hover:bg-cyan-400 hover:text-black transition-colors"
                    >
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                Our AI solutions have delivered measurable results for 500+ enterprise clients, 
                with average ROI of 300% within the first year.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security and compliance with SOC 2, GDPR, and industry-specific 
                regulations to protect your sensitive data.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300 text-sm">
                Get your AI solutions up and running in 4-8 weeks with our proven 
                implementation methodology and expert team.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300 text-sm">
                Every AI solution is tailored to your specific business needs, 
                data patterns, and operational requirements.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Optimization</h3>
              <p className="text-gray-300 text-sm">
                Our AI models continuously learn and improve, ensuring your solutions 
                stay ahead of the competition and deliver increasing value.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">
                Round-the-clock support from our AI experts to ensure your solutions 
                run smoothly and deliver maximum value.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-black/30 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Schedule a free consultation with our AI experts. We'll analyze your business needs 
              and create a custom AI strategy that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
              >
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}