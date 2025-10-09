import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart, MessageSquare, FileText, Users, Shield, ShoppingCart, Mail, DollarSign, Heart, Target, TrendingUp, Calendar, Mic, PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting'],
      href: '/ai-analytics-dashboard',
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that understand context and provide personalized customer support.',
      features: ['Natural language processing', 'Multi-channel support', 'Easy integration', '24/7 availability'],
      href: '/ai-chatbot-builder',
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Generate high-quality content at scale using our advanced AI writing and content creation tools.',
      features: ['Blog posts and articles', 'Marketing copy', 'Product descriptions', 'Social media content'],
      href: '/ai-content-generation',
    },
    {
      icon: Users,
      title: 'AI CRM',
      description: 'Enhance your customer relationships with AI-powered CRM that predicts customer behavior and preferences.',
      features: ['Lead scoring', 'Customer segmentation', 'Sales forecasting', 'Automated follow-ups'],
      href: '/ai-crm',
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-driven security solutions that detect and prevent threats in real-time.',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Security monitoring'],
      href: '/ai-cybersecurity',
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with AI-driven analytics that reveal hidden patterns and opportunities.',
      features: ['Pattern recognition', 'Predictive modeling', 'Data visualization', 'Insight generation'],
      href: '/ai-data-analytics',
    },
    {
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Automate document processing and extraction with AI that understands and processes any document type.',
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Workflow automation'],
      href: '/ai-document-processing',
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Solutions',
      description: 'Boost your online sales with AI-powered e-commerce features like personalized recommendations and pricing.',
      features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer insights'],
      href: '/ai-ecommerce-solutions',
    },
    {
      icon: Mail,
      title: 'AI Email Assistant',
      description: 'Streamline your email management with AI that helps compose, prioritize, and respond to emails automatically.',
      features: ['Smart email composition', 'Priority sorting', 'Auto-responses', 'Sentiment analysis'],
      href: '/ai-email-assistant',
    },
    {
      icon: DollarSign,
      title: 'AI Fintech',
      description: 'Revolutionize financial services with AI solutions for fraud detection, risk assessment, and trading.',
      features: ['Fraud detection', 'Risk analysis', 'Algorithmic trading', 'Credit scoring'],
      href: '/ai-fintech',
    },
    {
      icon: Heart,
      title: 'AI Healthcare',
      description: 'Improve patient care and outcomes with AI-powered healthcare solutions for diagnosis and treatment.',
      features: ['Medical imaging analysis', 'Drug discovery', 'Patient monitoring', 'Treatment optimization'],
      href: '/ai-healthcare',
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Identify and qualify high-value leads automatically using AI-powered lead generation and scoring.',
      features: ['Lead identification', 'Qualification scoring', 'Contact enrichment', 'Follow-up automation'],
      href: '/ai-lead-generation',
    },
    {
      icon: TrendingUp,
      title: 'AI Marketing',
      description: 'Optimize your marketing campaigns with AI that analyzes performance and suggests improvements.',
      features: ['Campaign optimization', 'Audience targeting', 'Content personalization', 'ROI analysis'],
      href: '/ai-marketing',
    },
    {
      icon: Calendar,
      title: 'AI Scheduler',
      description: 'Automate scheduling and appointment management with AI that understands preferences and availability.',
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Reminder automation'],
      href: '/ai-scheduler',
    },
    {
      icon: Mic,
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for various applications using our advanced voice synthesis technology.',
      features: ['Voice synthesis', 'Emotion control', 'Multiple languages', 'Real-time generation'],
      href: '/ai-voice-cloning',
    },
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Enhance your writing with AI that helps with grammar, style, tone, and content improvement.',
      features: ['Grammar checking', 'Style suggestions', 'Tone adjustment', 'Content enhancement'],
      href: '/ai-writing-assistant',
    },
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to free up your team for more strategic work.',
      percentage: '70%',
    },
    {
      title: 'Better Decision Making',
      description: 'Get data-driven insights and predictions to make informed business decisions.',
      percentage: '85%',
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimized processes.',
      percentage: '60%',
    },
    {
      title: 'Improved Customer Experience',
      description: 'Provide personalized and responsive service to your customers 24/7.',
      percentage: '90%',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'We design a custom AI solution tailored to your specific requirements.',
      duration: '2-3 weeks',
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'We develop and thoroughly test your AI solution.',
      duration: '4-8 weeks',
    },
    {
      step: 4,
      title: 'Deployment & Training',
      description: 'We deploy your solution and train your team on how to use it.',
      duration: '1-2 weeks',
    },
    {
      step: 5,
      title: 'Ongoing Support',
      description: 'We provide continuous support and optimization for your AI solution.',
      duration: 'Ongoing',
    },
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI solutions including analytics, chatbots, content generation, CRM, cybersecurity, and more. Transform your business with cutting-edge AI technology."
        keywords={['AI services', 'artificial intelligence', 'machine learning', 'AI solutions', 'AI consulting', 'AI development']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Services That Transform Your Business
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to automate processes, gain insights, 
                and deliver exceptional customer experiences. Our comprehensive AI solutions are 
                designed to drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-600">
                Our AI solutions deliver measurable results that transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{benefit.percentage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI solutions for every aspect of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology that ensures successful AI implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <span className="text-sm text-blue-600 font-semibold">
                      Duration: {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your AI needs and create a custom solution that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <a
                href="tel:+1-302-464-0950"
                className="flex items-center justify-center space-x-2 bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>Call +1-302-464-0950</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;