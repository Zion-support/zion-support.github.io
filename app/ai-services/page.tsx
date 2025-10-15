import React from "react";
import { BarChart3, FileText, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
// Removed unused imports

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom dashboard creation",
        "Data visualization tools",
        "API integration"
      ],
      benefits: [
        "Increase decision-making speed by 300%",
        "Reduce manual reporting by 90%",
        "Improve data accuracy by 95%",
        "Real-time business insights"
      ]
    },
    {
      id: "ai-customer-service-pro",
      name: "AI Customer Service Pro",
      description: "Intelligent customer support system with natural language processing, automated responses, and 24/7 availability",
      price: "From $1,800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Automated ticket routing",
        "Sentiment analysis",
        "Knowledge base integration",
        "Human handoff capability"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 10x more inquiries",
        "Improve customer satisfaction by 40%",
        "24/7 availability"
      ]
    },
    {
      id: "ai-content-generator-pro",
      name: "AI Content Generator Pro",
      description: "Advanced content creation platform with AI writing, image generation, and multi-format output capabilities",
      price: "From $2,200/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-powered writing",
        "Image generation",
        "Content optimization",
        "SEO integration",
        "Multi-format output",
        "Brand voice customization"
      ],
      benefits: [
        "Increase content production by 500%",
        "Reduce content costs by 70%",
        "Improve SEO performance by 60%",
        "Maintain consistent brand voice"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services. From machine learning to natural language processing, we deliver cutting-edge AI solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, AI development"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services. From machine learning to 
              natural language processing, we deliver cutting-edge AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-green-400 mb-4">{service.price}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started with AI Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
