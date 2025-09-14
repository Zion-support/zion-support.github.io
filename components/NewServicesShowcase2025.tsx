import React from 'react';
import Link from 'next/link';
ArrowRightTrendingUpDollarSignUsersZapTargetCheckCircle

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      title: "Generative AI Enterprise Transformation",
      description: "Transform your enterprise with comprehensive AI solutions achieving 40% cost reduction and 300% productivity gains.",
      price: "$2,999/month",
      features: ["Customer personalization"Content generation"Process automation"Analytics insights"],
      link: "/blog/ai-2025-generative-ai-enterprise-transformation",
      icon: TrendingUp,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Retail AI Transformation Suite",
      description: "Complete retail transformation with AI-powered customer experienceinventory managementand dynamic pricing.",
      price: "$1,999/month",
      features: ["Customer personalization"Inventory optimization"Dynamic pricing"Customer service AI"],
      link: "/case-studies/ai-2025-global-retail-transformation-breakthrough",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Implementation Mastery Program",
      description: "Complete implementation guide with step-by-step roadmapROI frameworksand expert consultation.",
      price: "$1,499/month",
      features: ["Strategic planning"Implementation roadmap"ROI frameworks"Expert consultation"],
      link: "/resources/ai-2025-complete-implementation-master-guide",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW SERVICES AVAILABLE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Services for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI-powered services designed to transform your business operations
            reduce costsand drive unprecedented growth. Proven results with measurable ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newServices.map((serviceindex) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white opacity-90 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className={`group/btn w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Proven Results Across Industries
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-cyan-600 mb-2">300%</p>
              <p className="text-gray-600">Average Revenue Growth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">85%</p>
              <p className="text-gray-600">Cost Reduction</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">250%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-orange-600 mb-2">3 Months</p>
              <p className="text-gray-600">Average ROI Timeline</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have already transformed their operations 
            with our AI-powered solutions. Get started today with a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}