'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  BarChart, 
  Brain, 
  Cpu, 
  Database, 
  Cloud,
  Lock,
  TrendingUp,
  Award,
  Play,
  Download,
  Phone,
  Mail,
  ExternalLink,
  Eye,
  MessageSquare,
  Target,
  Sparkles,
  Globe,
  Settings
} from 'lucide-react';
import { getServicesByCategory } from '../data/servicesData';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const AIServiceCard: React.FC<{ service: any; index: number }> = memo(({ service, index }) => (
  <div className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group">
    <div className="flex items-start justify-between mb-4">
      <div className="text-4xl mb-3">{service.icon}</div>
      <div className="flex space-x-2">
        {service.popular && (
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            Popular
          </span>
        )}
        {service.new && (
          <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        )}
        {service.featured && (
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
      {service.name}
    </h3>
    
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
      {service.description}
    </p>
    
    <div className="mb-4">
      <div className="text-2xl font-bold text-cyan-400 mb-1">
        Starting at ${service.pricing.starting}/{service.pricing.period}
      </div>
      <div className="text-sm text-gray-400">
        Market range: ${service.marketPrice.min} - ${service.marketPrice.max}/{service.marketPrice.period}
      </div>
    </div>
    
    <div className="flex space-x-2 mb-4">
      <Link
        to={`/${service.id}`}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
      >
        Learn More
      </Link>
      {service.demoUrl && (
        <a
          href={service.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600 transition-colors"
          title="View Demo"
        >
          <Play className="w-4 h-4" />
        </a>
      )}
    </div>
  </div>
));

AIServiceCard.displayName = 'AIServiceCard';

const AIFeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = memo(({ icon, title, description }) => (
  <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
    <div className="text-3xl mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
));

AIFeatureCard.displayName = 'AIFeatureCard';

const AIUseCaseCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: string;
  benefits: string[];
}> = memo(({ title, description, icon, benefits }) => (
  <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 mb-4 text-sm">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="text-xs text-gray-400 flex items-center">
          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
          {benefit}
        </li>
      ))}
    </ul>
  </div>
));

AIUseCaseCard.displayName = 'AIUseCaseCard';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const aiServices = getServicesByCategory('ai-services');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Platform',
      description: 'Complete ML platform for building, training, and deploying AI models with automated model training and MLOps pipeline.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Advanced computer vision solutions for image classification, object detection, facial recognition, and video analysis.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Comprehensive NLP platform for text analysis, sentiment analysis, language translation, and text generation.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics that forecast trends, identify patterns, and provide actionable business insights.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'AI Security',
      description: 'Advanced AI security solutions including threat detection, fraud prevention, and cybersecurity automation.'
    }
  ];

  const aiUseCases = [
    {
      title: 'Healthcare AI',
      description: 'Medical image analysis, drug discovery, and personalized medicine solutions.',
      icon: '🏥',
      benefits: ['Improve diagnosis accuracy', 'Accelerate drug discovery', 'Personalize treatments', 'Reduce medical errors']
    },
    {
      title: 'Financial Services',
      description: 'Fraud detection, algorithmic trading, and risk management solutions.',
      icon: '💰',
      benefits: ['Detect fraud in real-time', 'Optimize trading strategies', 'Assess credit risk', 'Prevent money laundering']
    },
    {
      title: 'E-commerce',
      description: 'Recommendation engines, demand forecasting, and customer service automation.',
      icon: '🛒',
      benefits: ['Increase sales by 30%', 'Improve customer experience', 'Optimize inventory', 'Personalize recommendations']
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, predictive maintenance, and supply chain optimization.',
      icon: '🏭',
      benefits: ['Reduce defects by 50%', 'Prevent equipment failures', 'Optimize production', 'Improve quality control']
    },
    {
      title: 'Marketing',
      description: 'Customer segmentation, campaign optimization, and content generation.',
      icon: '📢',
      benefits: ['Increase ROI by 200%', 'Improve targeting', 'Automate content creation', 'Optimize ad spend']
    },
    {
      title: 'Customer Service',
      description: 'Intelligent chatbots, sentiment analysis, and automated support.',
      icon: '🤖',
      benefits: ['Handle 80% of queries', 'Improve response time', 'Reduce costs by 60%', 'Enhance satisfaction']
    }
  ];

  const benefits = [
    'Increase efficiency by 300%',
    'Reduce operational costs by 50%',
    'Improve decision making accuracy',
    'Automate repetitive tasks',
    'Enable new business models',
    'Enhance customer experience'
  ];

  const aiTechnologies = [
    {
      name: 'Machine Learning',
      description: 'Supervised, unsupervised, and reinforcement learning algorithms',
      icon: '🧠'
    },
    {
      name: 'Deep Learning',
      description: 'Neural networks, CNNs, RNNs, and transformer models',
      icon: '🔬'
    },
    {
      name: 'Natural Language Processing',
      description: 'Text analysis, language understanding, and generation',
      icon: '💬'
    },
    {
      name: 'Computer Vision',
      description: 'Image recognition, object detection, and video analysis',
      icon: '👁️'
    },
    {
      name: 'Predictive Analytics',
      description: 'Forecasting, pattern recognition, and trend analysis',
      icon: '📊'
    },
    {
      name: 'Robotic Process Automation',
      description: 'Automated workflows and intelligent process automation',
      icon: '⚙️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive Artificial Intelligence Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with cutting-edge AI technologies. From machine learning platforms to 
            computer vision solutions, we provide the expertise and tools you need to harness the power of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">300%</div>
              <div className="text-sm text-gray-300">Efficiency Gain</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-pink-400 mb-1">50%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">95%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-sm text-gray-300">AI Support</div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <AIServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* AI Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <AIFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* AI Technologies */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              AI Technologies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTechnologies.map((tech, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-800 rounded-lg">
                  <div className="text-3xl mr-4">{tech.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            AI Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiUseCases.map((useCase, index) => (
              <AIUseCaseCard
                key={index}
                title={useCase.title}
                description={useCase.description}
                icon={useCase.icon}
                benefits={useCase.benefits}
              />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Development Process */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our AI Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-300 text-sm">Analyze your business needs and identify AI opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                <p className="text-gray-300 text-sm">Design AI solution architecture and data requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Development</h3>
                <p className="text-gray-300 text-sm">Build, train, and test AI models with your data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment</h3>
                <p className="text-gray-300 text-sm">Deploy AI solutions and provide ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies who have successfully implemented AI solutions with our expert guidance. 
            Let us help you harness the power of artificial intelligence to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AIServicesPage;