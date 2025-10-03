import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Rocket, Brain, Shield, BarChart3, Users, CheckCircle } from "lucide-react";

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
      ]
    },
    {
      id: "automated-workflow-engine",
      name: "Automated Workflow Engine",
      blurb: "Streamline business processes with intelligent workflow automation",
      price: "$299 - $1,299/month",
      eta: "2-3 weeks",
      category: "Automation",
      icon: Rocket,
      features: [
        "Drag-and-drop workflow builder",
        "Conditional logic and branching",
        "Third-party integrations",
        "Real-time monitoring and alerts",
        "Custom triggers and actions",
        "Performance optimization suggestions"
      ]
    },
    {
      id: "intelligent-analytics-dashboard",
      name: "Intelligent Analytics Dashboard",
      blurb: "Advanced business intelligence with AI-powered insights and predictions",
      price: "$199 - $999/month",
      eta: "1-2 weeks",
      category: "Analytics",
      icon: BarChart3,
      features: [
        "Real-time data visualization",
        "Predictive analytics and forecasting",
        "Custom report generation",
        "Automated insights and recommendations",
        "Multi-source data integration",
        "Executive summary automation"
      ]
    },
    {
      id: "ai-customer-support-bot",
      name: "AI Customer Support Bot",
      blurb: "Intelligent customer service automation with natural language processing",
      price: "$149 - $799/month",
      eta: "1 week",
      category: "Customer Service",
      icon: Users,
      features: [
        "24/7 automated customer support",
        "Natural language understanding",
        "Multi-channel integration",
        "Escalation to human agents",
        "Knowledge base management",
        "Performance analytics"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro-SaaS solutions designed to automate and optimize your business operations." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Micro-SaaS Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your business with our suite of AI-powered micro-SaaS applications designed for modern enterprises
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{product.blurb}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-500">ETA: {product.eta}</span>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Choose from our suite of AI micro-SaaS solutions or request a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors">
                View All Solutions
              </button>
              <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Request Custom Solution
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMicroSAAS;