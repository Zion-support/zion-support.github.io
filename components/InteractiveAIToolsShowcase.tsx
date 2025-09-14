import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveAIToolsShowcase = () => {
  const [activeTool, setActiveTool] = useState(0);

  const aiTools = [
    {
      id: 1,
      name: "AI Content Generator",
      description: "Generate high-quality, SEO-optimized content for blogs, websites, and marketing materials",
      features: [
        "Natural language processing",
        "SEO optimization",
        "Multiple content formats",
        "Brand voice adaptation",
        "Real-time generation"
      ],
      icon: "✍️",
      category: "Content Creation",
      pricing: "Starting at $99/month",
      demo: "Try Live Demo",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Predictive Analytics Engine",
      description: "Advanced machine learning models for business forecasting and trend analysis",
      features: [
        "Time series forecasting",
        "Anomaly detection",
        "Customer behavior prediction",
        "Market trend analysis",
        "Custom model training"
      ],
      icon: "📊",
      category: "Analytics",
      pricing: "Starting at $199/month",
      demo: "View Dashboard",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "Automated Customer Support",
      description: "Intelligent chatbot and support automation with natural language understanding",
      features: [
        "24/7 customer support",
        "Multi-language support",
        "Sentiment analysis",
        "Ticket routing",
        "Knowledge base integration"
      ],
      icon: "🤖",
      category: "Customer Service",
      pricing: "Starting at $149/month",
      demo: "Chat Now",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "AI-Powered SEO Suite",
      description: "Comprehensive SEO optimization tools with AI-driven insights and recommendations",
      features: [
        "Keyword research",
        "Content optimization",
        "Technical SEO analysis",
        "Competitor analysis",
        "Performance tracking"
      ],
      icon: "🔍",
      category: "SEO & Marketing",
      pricing: "Starting at $79/month",
      demo: "Analyze Site",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Intelligent Data Processor",
      description: "Automated data cleaning, transformation, and analysis with machine learning",
      features: [
        "Data quality assessment",
        "Automated cleaning",
        "Pattern recognition",
        "Data visualization",
        "Export capabilities"
      ],
      icon: "📈",
      category: "Data Science",
      pricing: "Starting at $299/month",
      demo: "Process Data",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "AI Security Monitor",
      description: "Advanced threat detection and security monitoring with real-time alerts",
      features: [
        "Threat detection",
        "Real-time monitoring",
        "Incident response",
        "Compliance reporting",
        "Security analytics"
      ],
      icon: "🛡️",
      category: "Security",
      pricing: "Starting at $399/month",
      demo: "Security Scan",
      color: "from-red-500 to-pink-500"
    }
  ];

  const categories = ["All", "Content Creation", "Analytics", "Customer Service", "SEO & Marketing", "Data Science", "Security"];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🛠️ AI TOOLS & SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI Tools for Every Business Need
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of AI-powered tools designed to automate, 
            optimize, and transform your business operations. Try them live and see the results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTool(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTool === index
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {aiTools.map((tool, index) => (
            <div key={tool.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 group">
              {/* Tool Header */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl mr-4`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-sm text-gray-300">{tool.category}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {tool.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-lg font-bold text-white mb-2">{tool.pricing}</div>
                <div className="text-sm text-gray-300">Per month, billed annually</div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  {tool.demo}
                </button>
                <Link
                  href={`/tools/${tool.id}`}
                  className="flex-1 border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Try Our AI Tools Live
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience the power of our AI tools with interactive demos. 
              No signup required - try them right now and see the results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-white mb-2">Instant Setup</h4>
              <p className="text-gray-300 text-sm">Get started in under 5 minutes with our guided setup process</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Real-time Results</h4>
              <p className="text-gray-300 text-sm">See immediate results and insights from our AI-powered tools</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-lg font-bold text-white mb-2">Secure & Private</h4>
              <p className="text-gray-300 text-sm">Your data is protected with enterprise-grade security measures</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI tools to automate, 
            optimize, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-lg"
            >
              Explore All Tools
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
            >
              Get Custom Solution
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIToolsShowcase;