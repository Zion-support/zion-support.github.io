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
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics.',
      features: ['Data Mining', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization'],
    },
    {
      icon: Users,
      title: 'AI Customer Experience',
      description: 'Enhance customer interactions with intelligent chatbots and personalization.',
      features: ['Chatbots', 'Personalization', 'Sentiment Analysis', 'Customer Insights'],
    },
    {
      icon: BarChart3,
      title: 'AI Business Intelligence',
      description: 'Make data-driven decisions with AI-powered business intelligence tools.',
      features: ['Predictive Modeling', 'Performance Analytics', 'Market Intelligence', 'Strategic Planning'],
    },
    {
      icon: Cog,
      title: 'AI DevOps & MLOps',
      description: 'Deploy and manage AI models at scale with automated ML operations.',
      features: ['Model Deployment', 'A/B Testing', 'Model Monitoring', 'AutoML'],
    },
    {
      icon: Target,
      title: 'AI Strategy & Consulting',
      description: 'Strategic guidance for AI implementation and digital transformation.',
      features: ['AI Roadmap', 'Technology Assessment', 'Change Management', 'ROI Analysis'],
    },
    {
      icon: Rocket,
      title: 'Custom AI Development',
      description: 'Tailored AI solutions designed specifically for your business needs.',
      features: ['Custom Models', 'API Development', 'Integration Services', 'Training & Support'],
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, automation, cybersecurity, and custom AI development services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to automation, 
              we provide comprehensive AI services to drive innovation and growth.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-blue-600">Starting at $99/hour</span>
              </div>
              <p className="text-gray-600 mb-6">Professional AI consulting and development services for businesses of all sizes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* AI Solutions Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why Choose Our AI Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our AI Solutions?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified AI engineers and data scientists with years of experience.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Compliant</h3>
                <p className="text-gray-600">Enterprise-grade security with full compliance standards.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Deployment</h3>
                <p className="text-gray-600">Rapid prototyping and deployment with agile methodologies.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful AI implementations across industries.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today for a free consultation and discover how AI can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AISolutions;