import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Zap, Brain, BarChart3, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AIMicroSAAS: React.FC = () => {
  const microSaaSProducts = [
    {
      id: "ai-content-optimizer",
      name: "AI Content Optimizer Pro",
      blurb: "AI-powered content creation and optimization platform for marketing teams",
      price: "$299 - $1,499/month",
      eta: "1-2 weeks",
      category: "Content AI",
      icon: FileText,
      features: [
        "AI-generated blog posts, social media content, and email campaigns",
        "SEO optimization with real-time keyword analysis",
        "Brand voice consistency across all content",
        "A/B testing and performance analytics",
      ],
    },
    {
      id: "automated-workflow-engine",
      name: "Automated Workflow Engine",
      blurb: "Intelligent automation platform for business processes",
      price: "$499 - $2,999/month",
      eta: "2-3 weeks",
      category: "Automation",
      icon: Zap,
      features: [
        "Drag-and-drop workflow builder",
        "AI-powered process optimization",
        "Integration with 500+ business tools",
        "Real-time monitoring and analytics",
      ],
    },
    {
      id: "cognitive-analytics",
      name: "Cognitive Analytics Suite",
      blurb: "Advanced AI analytics platform for data-driven insights",
      price: "$799 - $3,999/month",
      eta: "3-4 weeks",
      category: "Analytics",
      icon: Brain,
      features: [
        "Predictive analytics and forecasting",
        "Natural language query interface",
        "Automated report generation",
        "Real-time data visualization",
      ],
    },
    {
      id: "performance-dashboard",
      name: "Performance Dashboard Pro",
      blurb: "Comprehensive business performance monitoring and optimization",
      price: "$199 - $999/month",
      eta: "1 week",
      category: "Monitoring",
      icon: BarChart3,
      features: [
        "Real-time KPI tracking",
        "Custom dashboard builder",
        "Automated alerts and notifications",
        "Performance optimization recommendations",
      ],
    },
    {
      id: "security-monitor",
      name: "AI Security Monitor",
      blurb: "Intelligent security monitoring and threat detection platform",
      price: "$399 - $1,999/month",
      eta: "2 weeks",
      category: "Security",
      icon: Shield,
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Compliance monitoring",
        "Security analytics and reporting",
      ],
    },
    {
      id: "team-collaboration",
      name: "AI Team Collaboration Hub",
      blurb: "Enhanced team collaboration with AI-powered productivity tools",
      price: "$149 - $799/month",
      eta: "1 week",
      category: "Collaboration",
      icon: Users,
      features: [
        "AI-powered meeting summaries",
        "Smart task assignment",
        "Knowledge base automation",
        "Team performance insights",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS solutions designed to solve specific business challenges with intelligent automation and analytics." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of specialized AI-powered micro SaaS solutions designed to solve specific business challenges with intelligent automation and analytics.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {microSaaSProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.blurb}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{product.price}</span>
                    <span className="text-gray-400 ml-2">ETA: {product.eta}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team can create a custom AI micro SaaS solution tailored to your specific business needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIMicroSAAS;