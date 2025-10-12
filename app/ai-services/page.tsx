import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, BarChart, Mail, Mic, Zap, CheckCircle, ArrowRight, Users, Award, Star } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, marketing materials, and more.',
      features: ['Blog Writing', 'Social Media Content', 'Marketing Copy', 'Technical Documentation'],
      price: 'Starting at $500/month',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-content-generator'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Builder',
      description: 'Intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $800/month',
      color: 'from-cyan-500 to-blue-500',
      link: '/ai-chatbot-builder'
    },
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence.',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      price: 'Starting at $1,200/month',
      color: 'from-green-500 to-emerald-500',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: Mail,
      title: 'AI Email Assistant',
      description: 'Smart email management and automated responses for improved productivity.',
      features: ['Email Classification', 'Auto-responses', 'Sentiment Analysis', 'Priority Sorting'],
      price: 'Starting at $600/month',
      color: 'from-orange-500 to-red-500',
      link: '/ai-email-assistant'
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant',
      description: 'Voice-powered AI assistants for hands-free interaction and automation.',
      features: ['Speech Recognition', 'Voice Commands', 'Multi-language Support', 'Custom Wake Words'],
      price: 'Starting at $900/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/ai-voice-assistant'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline workflows and reduce manual tasks.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling', 'Error Handling'],
      price: 'Starting at $1,000/month',
      color: 'from-yellow-500 to-orange-500',
      link: '/ai-automation'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on high-value activities that drive growth.'
    },
    {
      icon: BarChart,
      title: 'Better Insights',
      description: 'Get actionable insights from your data with advanced AI-powered analytics.'
    },
    {
      icon: Star,
      title: 'Enhanced Customer Experience',
      description: 'Provide 24/7 support and personalized experiences that delight your customers.'
    },
    {
      icon: Zap,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and process optimization.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI services including content generation, chatbots, analytics, email automation, voice assistants, and process automation." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation, voice assistants" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free AI Consultation
                </Link>
                <Link 
                  to="/it-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View IT Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI services designed to automate, optimize, and transform your business processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <Link 
                      to={service.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with intelligent automation and data-driven insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the measurable results our AI solutions deliver for businesses
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">75%</div>
                <div className="text-gray-400">Reduction in Manual Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-gray-400">Increase in Content Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-400">Faster Response Times</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <div className="text-gray-400">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can automate your processes, enhance customer experiences, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
