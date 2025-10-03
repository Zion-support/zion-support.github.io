import React from "react";
import { Helmet } from "react-helmet-async";
import { Users, CheckCircle, ArrowRight, DollarSign, Clock, Star, TrendingUp, Lock, Smartphone, Cloud, Database, Cpu, Target, Rocket, FileText } from "lucide-react";

export default function AIMicroSAAS(): React.JSX.Element {
  const microSaaSServices = [
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
        "Multi-language content generation",
        "Content calendar and scheduling"
      ]
    },
    {
      id: "smart-analytics-dashboard",
      name: "Smart Analytics Dashboard",
      blurb: "Comprehensive analytics platform with AI-driven insights for data-driven decisions",
      price: "$199 - $999/month",
      eta: "2-3 weeks",
      category: "Analytics",
      icon: TrendingUp,
      features: [
        "Real-time data visualization and reporting",
        "AI-powered predictive analytics",
        "Custom dashboard creation",
        "Automated report generation",
        "Multi-platform data integration",
        "Advanced filtering and segmentation"
      ]
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support Suite",
      blurb: "Intelligent customer service automation with natural language processing",
      price: "$399 - $1,999/month",
      eta: "3-4 weeks",
      category: "Customer Service",
      icon: Users,
      features: [
        "24/7 AI-powered chatbot",
        "Natural language processing",
        "Ticket routing and prioritization",
        "Sentiment analysis and escalation",
        "Knowledge base integration",
        "Performance analytics and insights"
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

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {microSaaSServices.map((service) => (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.blurb}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.eta}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Micro-SaaS Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built for scalability, security, and seamless integration with your existing systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level encryption, SOC 2 compliance, and advanced security protocols to protect your data
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Cloud-native solutions that grow with your business, handling millions of requests seamlessly
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Integration</h3>
                <p className="text-gray-600">
                  RESTful APIs, webhooks, and pre-built connectors for seamless integration with your existing tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our AI micro-SaaS solutions can streamline your operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}