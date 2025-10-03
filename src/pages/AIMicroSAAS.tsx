import React from "react";
const AIMicroSAAS: React.FC = () => {
  const services = [
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
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.blurb}</p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-sm text-gray-500">ETA: {service.eta}</span>
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
};

export default AIMicroSAAS;