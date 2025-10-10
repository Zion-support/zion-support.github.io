import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Users, Shield, BarChart, MessageCircle, FileText, Target } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced data insights and predictive analytics powered by machine learning.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards'],
      href: '/ai-analytics'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Automation', 'Smart Scheduling'],
      href: '/ai-automation'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics'],
      href: '/ai-chatbot-builder'
    },
    {
      icon: FileText,
      title: 'AI Content Writer',
      description: 'Generate high-quality content at scale with AI-powered writing assistance.',
      features: ['Content Generation', 'SEO Optimization', 'Multiple Formats', 'Brand Voice'],
      href: '/ai-content-writer'
    },
    {
      icon: Users,
      title: 'AI CRM',
      description: 'Enhance customer relationships with AI-powered customer management systems.',
      features: ['Customer Insights', 'Lead Scoring', 'Automated Follow-ups', 'Personalization'],
      href: '/ai-crm'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your business with advanced AI-driven security solutions.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Risk Assessment'],
      href: '/ai-cybersecurity'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics.',
      features: ['Data Processing', 'Pattern Recognition', 'Predictive Modeling', 'Visualization'],
      href: '/ai-data-analytics'
    },
    {
      icon: Target,
      title: 'AI Marketing',
      description: 'Optimize your marketing campaigns with AI-powered targeting and personalization.',
      features: ['Audience Targeting', 'Campaign Optimization', 'Personalization', 'ROI Tracking'],
      href: '/ai-marketing'
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Expert AI Team',
      description: 'Work with certified AI specialists and machine learning experts'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Quick deployment and integration with your existing systems'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: BarChart,
      title: 'Proven Results',
      description: 'Track record of successful AI implementations and ROI'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From chatbots to computer vision, we deliver AI that drives real results.
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <service.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="block w-full text-center bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 py-2 px-4 rounded-lg transition-colors"
                  >
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI services deliver measurable results and long-term value for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation and maximum value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Analyze your business needs and identify AI opportunities' },
                { step: '02', title: 'Design', description: 'Create a customized AI solution architecture' },
                { step: '03', title: 'Development', description: 'Build and train AI models for your specific use case' },
                { step: '04', title: 'Deployment', description: 'Deploy and integrate AI solutions with ongoing support' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiServicesPage;