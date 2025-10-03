import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Zap, BarChart3, Users, Shield, Globe } from "lucide-react";

const AIMicroSAAS: React.FC = () => {
  const saasProducts = [
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
      blurb: "Intelligent automation platform that streamlines business processes",
      price: "$499 - $2,999/month",
      eta: "2-3 weeks",
      category: "Automation",
      icon: Zap,
      features: [
        "Visual workflow builder with drag-and-drop interface",
        "AI-powered process optimization recommendations",
        "Integration with 500+ business applications",
        "Real-time monitoring and analytics dashboard",
      ],
    },
    {
      id: "predictive-analytics-suite",
      name: "Predictive Analytics Suite",
      blurb: "Advanced analytics platform with AI-powered forecasting capabilities",
      price: "$799 - $4,999/month",
      eta: "3-4 weeks",
      category: "Analytics",
      icon: BarChart3,
      features: [
        "Machine learning models for business forecasting",
        "Real-time data visualization and reporting",
        "Custom dashboard creation and sharing",
        "Automated insights and anomaly detection",
      ],
    },
    {
      id: "ai-customer-success",
      name: "AI Customer Success Platform",
      blurb: "Intelligent customer success management with predictive churn prevention",
      price: "$399 - $2,499/month",
      eta: "2-3 weeks",
      category: "Customer Success",
      icon: Users,
      features: [
        "AI-powered customer health scoring",
        "Automated engagement campaigns",
        "Predictive churn analysis and prevention",
        "Customer journey mapping and optimization",
      ],
    },
    {
      id: "security-compliance-ai",
      name: "Security & Compliance AI",
      blurb: "Automated security monitoring and compliance management platform",
      price: "$999 - $5,999/month",
      eta: "4-5 weeks",
      category: "Security",
      icon: Shield,
      features: [
        "Real-time threat detection and response",
        "Automated compliance reporting (GDPR, HIPAA, SOX)",
        "AI-powered risk assessment and mitigation",
        "Security incident management and forensics",
      ],
    },
    {
      id: "global-localization-ai",
      name: "Global Localization AI",
      blurb: "Intelligent localization and translation platform for global businesses",
      price: "$199 - $1,999/month",
      eta: "1-2 weeks",
      category: "Localization",
      icon: Globe,
      features: [
        "AI-powered translation with cultural context",
        "Automated content localization workflows",
        "Multi-language SEO optimization",
        "Cultural adaptation and market insights",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered micro-SaaS solutions designed to accelerate business growth and operational efficiency." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">AI Micro-SaaS Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Accelerate your business growth with our comprehensive suite of AI-powered micro-SaaS applications designed for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#products" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Products
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Micro-SaaS Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose from our comprehensive range of AI-powered solutions designed to transform your business operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saasProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div key={product.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 text-indigo-600 mr-3" />
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.blurb}</p>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-indigo-600">{product.price}</div>
                      <div className="text-sm text-gray-500">ETA: {product.eta}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our AI micro-SaaS solutions today and experience the power of intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMicroSAAS;