import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Sparkles, 
  Users, 
  Shield, 
  Database, 
  FileText, 
  Megaphone, 
  TrendingUp, 
  Phone, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics solutions.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      price: 'Starting at $299/month',
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: <Sparkles className="w-8 h-8" />,
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      price: 'Starting at $199/month',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      icon: <Users className="w-8 h-8" />,
      features: ['24/7 Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Multi-language Support'],
      price: 'Starting at $399/month',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and security monitoring.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Security Analytics'],
      price: 'Starting at $599/month',
      rating: 4.9,
      reviews: 203
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with advanced AI-driven analytics and reporting.',
      icon: <Database className="w-8 h-8" />,
      features: ['Data Mining', 'Pattern Recognition', 'Automated Reports', 'Business Intelligence'],
      price: 'Starting at $349/month',
      rating: 4.8,
      reviews: 94
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Processing',
      description: 'Automate document processing and extraction with intelligent AI solutions.',
      icon: <FileText className="w-8 h-8" />,
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Automated Workflows'],
      price: 'Starting at $249/month',
      rating: 4.7,
      reviews: 78
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Optimize your marketing campaigns with AI-powered automation and personalization.',
      icon: <Megaphone className="w-8 h-8" />,
      features: ['Campaign Optimization', 'Personalization', 'Lead Scoring', 'A/B Testing'],
      price: 'Starting at $299/month',
      rating: 4.8,
      reviews: 112
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI Predictive Analytics',
      description: 'Forecast future trends and make data-driven decisions with predictive AI models.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Forecasting', 'Risk Assessment', 'Demand Planning', 'Trend Analysis'],
      price: 'Starting at $449/month',
      rating: 4.9,
      reviews: 145
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant',
      description: 'Build intelligent voice assistants for your business applications and customer service.',
      icon: <Phone className="w-8 h-8" />,
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Custom Training'],
      price: 'Starting at $399/month',
      rating: 4.8,
      reviews: 67
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent workflow automation and optimization.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Process Automation', 'Task Optimization', 'Resource Allocation', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      rating: 4.8,
      reviews: 98
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 300%.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% through intelligent automation.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Better Insights',
      description: 'Gain deeper insights from your data with advanced AI analytics.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: '24/7 Availability',
      description: 'Provide round-the-clock service with AI-powered solutions.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, automation, cybersecurity, and more. Expert AI solutions for modern enterprises."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI cybersecurity, business AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are designed to deliver measurable results and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of AI services designed to meet your specific business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.price}</span>
                  <Link
                    to={`/${service.id}`}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 mb-8">
              Let our AI experts help you identify the best solutions for your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;