import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Cloud, Database, Users, BarChart3, Cog, Target, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AISolutions: React.FC = () => {
  const aiSolutions = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced AI models for predictive analytics, pattern recognition, and intelligent decision making.',
      features: ['Neural Networks', 'Predictive Analytics', 'Pattern Recognition', 'Automated Learning'],
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Decision Making', 'RPA Integration'],
    },
    {
      icon: Shield,
      title: 'AI-Powered Cybersecurity',
      description: 'Protect your digital assets with advanced AI-driven security solutions.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Risk Assessment'],
    },
    {
      icon: Cloud,
      title: 'Cloud AI Services',
      description: 'Scalable AI solutions delivered through cloud infrastructure.',
      features: ['Cloud ML Platforms', 'AI APIs', 'Scalable Computing', 'Edge AI'],
    },
    {
      icon: Database,
      title: 'Data Analytics & Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics.',
      features: ['Data Mining', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
    },
    {
      icon: Users,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants for enhanced customer experience.',
      features: ['Chatbots', 'Virtual Assistants', 'NLP Processing', 'Voice Recognition'],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced statistical models.',
      features: ['Trend Analysis', 'Risk Assessment', 'Demand Forecasting', 'Performance Optimization'],
    },
    {
      icon: Cog,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      features: ['System Integration', 'API Development', 'Legacy Modernization', 'Custom Solutions'],
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information from the world.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
    },
    {
      icon: Rocket,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance for implementing AI solutions that drive business growth.',
      features: ['AI Roadmap', 'Technology Assessment', 'ROI Analysis', 'Change Management'],
    },
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows for maximum productivity.',
      icon: '⚡',
    },
    {
      title: 'Enhanced Decision Making',
      description: 'Leverage data-driven insights for smarter business decisions.',
      icon: '🧠',
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization.',
      icon: '💰',
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technologies.',
      icon: '🚀',
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, automation, cybersecurity, and data analytics. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, artificial intelligence, automation, cybersecurity, data analytics, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Solutions for the Future
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your business with cutting-edge artificial intelligence solutions
                designed to drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive artificial intelligence services tailored to meet your specific business needs
                and drive digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the transformative power of artificial intelligence with our proven solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let our AI experts help you identify opportunities and implement solutions
              that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutions;