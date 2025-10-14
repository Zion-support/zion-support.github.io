import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "@heroicons/react/24/solid";

const industryStats = [
  { metric: "150%", description: "Average Sales Increase" },
  { metric: "80%", description: "Reduction in Stockouts" },
  { metric: "70%", description: "Support Cost Reduction" },
  { metric: "95%", description: "Customer Satisfaction" }
];

const ecommerceServices = [
  {
    icon: "🛒",
    title: "AI Shopping Cart Optimization",
    description: "Intelligent cart abandonment recovery and conversion optimization",
    price: "$2,999",
    marketPrice: "$4,500",
    category: "Conversion",
    features: [
      "Smart cart abandonment emails",
      "Dynamic pricing optimization",
      "Cross-sell recommendations",
      "One-click checkout optimization"
    ],
    benefits: [
      "Increase conversion rates by 40%",
      "Reduce cart abandonment by 60%"
    ]
  },
  {
    icon: "📊",
    title: "AI Inventory Management",
    description: "Predictive analytics for optimal stock levels and demand forecasting",
    price: "$3,499",
    marketPrice: "$5,200",
    category: "Operations",
    features: [
      "Demand forecasting",
      "Automated reorder points",
      "Seasonal trend analysis",
      "Supplier optimization"
    ],
    benefits: [
      "Reduce stockouts by 80%",
      "Cut inventory costs by 30%"
    ]
  },
  {
    icon: "🤖",
    title: "AI Customer Service",
    description: "24/7 intelligent chatbots and automated support systems",
    price: "$1,999",
    marketPrice: "$3,000",
    category: "Support",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Escalation management",
      "Performance analytics"
    ],
    benefits: [
      "Reduce support costs by 70%",
      "Improve response time by 90%"
    ]
  }
];

const ecommerceFeatures = [
  {
    icon: "🎯",
    title: "Personalization Engine",
    description: "AI-powered product recommendations and personalized shopping experiences"
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    description: "Real-time insights into customer behavior and sales performance"
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    description: "Enterprise-grade security with PCI DSS compliance and fraud detection"
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Lightning-fast page loads and seamless mobile experiences"
  }
];

const PagePage = () => {
  return (
    <>
      <Helmet>
        <title>AI E-commerce Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your e-commerce with AI-powered solutions. Increase sales by 150%, reduce costs, and boost customer satisfaction with our advanced AI technology." />
        <meta name="keywords" content="AI e-commerce, e-commerce automation, AI shopping cart, inventory management, customer service AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI-Powered E-commerce
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your online store with cutting-edge AI technology. Increase sales by 150%, 
            reduce operational costs, and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#solutions"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
            >
              Explore Solutions
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p>Our AI e-commerce solutions deliver measurable improvements</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our E-commerce Solutions
            </h2>
            <p>Comprehensive AI-powered tools for every aspect of e-commerce</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-gray-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Boost Sales Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our E-commerce Solutions?
            </h2>
            <p>Advanced AI technology designed specifically for e-commerce success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p>Real results from our e-commerce clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;Zion Tech Group&apos;s AI e-commerce platform increased our online sales by 150% in just 6 months. The personalized recommendations are incredible!&rdquo;</p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, Fashion Forward</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;The AI inventory management system reduced our stockouts by 80% and saved us $500K annually. Highly recommended!&rdquo;</p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">Operations Director, TechGear</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;Their AI customer service automation reduced our support costs by 70% while improving customer satisfaction. Amazing results!&rdquo;</p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">Customer Success Manager, HomeDecor Plus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your E-commerce?
          </h2>
          <p className="text-xl mb-8">Get a free e-commerce audit and discover how AI can boost your online sales</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default PagePage;
