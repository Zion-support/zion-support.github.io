import React from "react";
import { DollarSign, Search, Share, Heart, Battery, Camera, Headphones, Mic, Video, Calculator, Package, Receipt, ClipboardList, Workflow, BarChart3, Shield, Settings, CheckCircle, Users, Eye, Globe } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting",
      price: "From $299/month",
      originalPrice: "$499/month",
      discount: "40% OFF",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time dashboard analytics",
        "Predictive business insights",
        "Automated report generation",
        "Custom data visualization",
        "Multi-platform integration",
        "Advanced filtering & segmentation",
        "Export to PDF/Excel/CSV",
        "White-label options"
      ],
      benefits: [
        "Increase revenue by 25%",
        "Reduce reporting time by 80%",
        "Make data-driven decisions",
        "Scale with your business"
      ],
      category: "Analytics",
      rating: 4.9,
      reviews: 1247,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      id: "zion-ai-voice-assistant-pro",
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice AI with natural language processing, multi-language support, and custom voice training",
      price: "From $199/month",
      originalPrice: "$349/month",
      discount: "43% OFF",
      icon: <Mic className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Natural language processing",
        "Multi-language support (50+ languages)",
        "Custom voice training",
        "Real-time transcription",
        "Voice command automation",
        "Integration with 100+ apps",
        "Custom wake words",
        "Analytics & insights"
      ],
      benefits: [
        "Reduce manual tasks by 60%",
        "Improve accessibility",
        "Enhance user experience",
        "Scale voice interactions"
      ],
      category: "AI Assistant",
      rating: 4.8,
      reviews: 892,
      link: "/zion-ai-voice-assistant-pro",
      featured: true
    },
    {
      id: "zion-ai-image-recognition-pro",
      name: "Zion AI Image Recognition Pro",
      description: "Advanced computer vision with object detection, facial recognition, and custom model training",
      price: "From $149/month",
      originalPrice: "$249/month",
      discount: "40% OFF",
      icon: <Camera className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: [
        "Object detection & classification",
        "Facial recognition & analysis",
        "Custom model training",
        "Real-time processing",
        "Batch image processing",
        "API integration",
        "Confidence scoring",
        "Custom labeling"
      ],
      benefits: [
        "Automate visual tasks",
        "Improve accuracy by 95%",
        "Reduce manual inspection",
        "Scale image processing"
      ],
      category: "Computer Vision",
      rating: 4.7,
      reviews: 756,
      link: "/zion-ai-image-recognition-pro",
      featured: true
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our collection of powerful micro SaaS solutions designed to solve specific business challenges with AI and automation."
        keywords="micro saas, saas solutions, business automation, AI tools, software as a service"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Workflow className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">Micro SaaS Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Micro SaaS
              </span>
              <span className="block text-4xl md:text-5xl text-white mt-2">Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused solutions that solve specific business challenges. 
              Each micro SaaS is designed to deliver maximum value with minimal complexity.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      {service.icon}
                    </div>
                    {service.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm font-semibold rounded">
                        {service.discount}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Heart
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-red-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                    <button className="w-full border border-white/20 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Choose from our collection of micro SaaS solutions or let us build a custom solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Browse All Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Custom Development
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}