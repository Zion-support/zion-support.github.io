import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Brain, Users, Zap, Shield, BarChart3, Globe, Target, TrendingUp, MessageSquare, Settings, Award } from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const solutions = [
    {
      id: "ai-analytics",
      name: "AI Analytics Platform",
      description: "Advanced analytics powered by artificial intelligence for data-driven insights and decision making.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Machine learning models",
        "Automated reporting",
        "Custom dashboards",
        "Data visualization"
      ],
      price: "From $2,999/month",
      category: "Analytics",
      popular: true
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Intelligent customer service solutions with chatbots, sentiment analysis, and automated support.",
      icon: <MessageSquare className="w-8 h-8" />,
      features: [
        "24/7 chatbot support",
        "Sentiment analysis",
        "Automated ticket routing",
        "Multi-language support",
        "Voice recognition",
        "Customer insights"
      ],
      price: "From $1,999/month",
      category: "Customer Service",
      popular: false
    },
    {
      id: "ai-security",
      name: "AI Security Solutions",
      description: "Advanced AI-powered security systems for threat detection, fraud prevention, and risk management.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Threat detection",
        "Fraud prevention",
        "Behavioral analysis",
        "Risk assessment",
        "Incident response",
        "Compliance monitoring"
      ],
      price: "From $3,499/month",
      category: "Security",
      popular: true
    },
    {
      id: "ai-automation",
      name: "AI Process Automation",
      description: "Intelligent automation solutions to streamline business processes and improve efficiency.",
      icon: <Settings className="w-8 h-8" />,
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction",
        "Task scheduling",
        "Process optimization",
        "ROI tracking"
      ],
      price: "From $2,499/month",
      category: "Automation",
      popular: false
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "AI-powered content creation tools for marketing, documentation, and creative writing.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "Content writing",
        "Image generation",
        "Video creation",
        "SEO optimization",
        "Brand consistency",
        "Multi-format output"
      ],
      price: "From $1,799/month",
      category: "Content",
      popular: false
    },
    {
      id: "ai-predictive-modeling",
      name: "AI Predictive Modeling",
      description: "Advanced predictive models for forecasting, trend analysis, and strategic planning.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Demand forecasting",
        "Risk prediction",
        "Trend analysis",
        "Scenario planning",
        "Model validation",
        "Performance metrics"
      ],
      price: "From $3,999/month",
      category: "Analytics",
      popular: true
    }
  ];

  const benefits = [
    {
      title: "Scalable Solutions",
      description: "Our AI solutions scale with your business needs, from startups to enterprise.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Expert Support",
      description: "24/7 support from our team of AI experts and data scientists.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "Trusted by 500+ companies with measurable ROI and success metrics.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Custom Integration",
      description: "Seamless integration with your existing systems and workflows.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>AI Solutions - Advanced Artificial Intelligence Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI solutions. From analytics to automation, we provide cutting-edge AI services to drive growth and efficiency." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, AI analytics, AI automation, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From analytics to automation, we provide comprehensive AI services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Proven expertise and cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive AI solutions for every business need
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-slate-800 rounded-lg p-6 relative ${solution.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-purple-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{solution.price}</div>
                  <span className="text-sm text-gray-400 bg-slate-700 px-2 py-1 rounded">{solution.category}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of companies already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Get Started Today
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-900 font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
