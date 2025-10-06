import React from "react";
import { Link } from "react-router-dom";
import { Brain, Zap, Shield, Cloud, Database, Users, BarChart3, Cog, Target, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AISolutions: React.FC = () => {
  const aiSolutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning & Deep Learning",
      description: "Advanced ML models for predictive analytics, pattern recognition, and intelligent automation.",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
        "Real-time Processing",
      ],
      link: "/solutions/machine-learning",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Transform text and speech into actionable insights with our NLP solutions.",
      features: [
        "Text Analysis",
        "Sentiment Analysis",
        "Language Translation",
        "Chatbot Development",
      ],
      link: "/solutions/nlp",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security & Compliance",
      description: "Protect your data and ensure compliance with AI-powered security solutions.",
      features: [
        "Threat Detection",
        "Data Privacy",
        "Compliance Monitoring",
        "Risk Assessment",
      ],
      link: "/solutions/security",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud AI Services",
      description: "Scalable AI solutions hosted on secure, high-performance cloud infrastructure.",
      features: [
        "Scalable Infrastructure",
        "High Performance",
        "Global Availability",
        "Cost Optimization",
      ],
      link: "/solutions/cloud",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "Turn your data into actionable insights with our comprehensive data intelligence platform.",
      features: [
        "Data Integration",
        "Advanced Analytics",
        "Visualization",
        "Real-time Insights",
      ],
      link: "/solutions/data",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Experience AI",
      description: "Enhance customer interactions with AI-powered personalization and support.",
      features: [
        "Personalization",
        "Customer Support",
        "Recommendation Engines",
        "Behavior Analysis",
      ],
      link: "/solutions/customer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Solutions - Zion Website</title>
        <meta name="description" content="Discover our comprehensive AI solutions designed to transform your business operations." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={solution.link}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Learn More
                <Rocket className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
