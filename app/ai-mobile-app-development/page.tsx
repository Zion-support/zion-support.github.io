import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "@heroicons/react/24/solid";

const developmentProcess = [
  { step: "1", title: "Discovery & Planning", description: "Understanding your vision and requirements" },
  { step: "2", title: "Design & Prototyping", description: "Creating intuitive user interfaces and experiences" },
  { step: "3", title: "AI Integration", description: "Implementing intelligent features and automation" },
  { step: "4", title: "Development & Testing", description: "Building and rigorously testing your app" },
  { step: "5", title: "Launch & Support", description: "Deploying and providing ongoing maintenance" }
];

const mobileServices = [
  {
    icon: "📱",
    title: "Native iOS Development",
    description: "High-performance iOS apps with Swift and SwiftUI",
    price: "$15,000",
    marketPrice: "$25,000",
    category: "iOS",
    features: [
      "Swift & SwiftUI development",
      "Core Data integration",
      "Push notifications",
      "App Store optimization"
    ],
    benefits: [
      "Native performance and feel",
      "Access to all iOS features"
    ]
  },
  {
    icon: "🤖",
    title: "Native Android Development",
    description: "Powerful Android apps with Kotlin and Jetpack Compose",
    price: "$15,000",
    marketPrice: "$25,000",
    category: "Android",
    features: [
      "Kotlin & Jetpack Compose",
      "Room database integration",
      "Material Design 3",
      "Google Play optimization"
    ],
    benefits: [
      "Optimized for Android devices",
      "Latest Android features"
    ]
  },
  {
    icon: "⚛️",
    title: "React Native Development",
    description: "Cross-platform apps with React Native and AI integration",
    price: "$12,000",
    marketPrice: "$20,000",
    category: "Cross-Platform",
    features: [
      "Single codebase for iOS & Android",
      "AI/ML integration",
      "Real-time synchronization",
      "Rapid development cycle"
    ],
    benefits: [
      "Faster development time",
      "Cost-effective solution"
    ]
  },
  {
    icon: "🔧",
    title: "AI-Powered Features",
    description: "Intelligent features like chatbots, recommendations, and automation",
    price: "$8,000",
    marketPrice: "$15,000",
    category: "AI Integration",
    features: [
      "Natural language processing",
      "Machine learning models",
      "Predictive analytics",
      "Automated workflows"
    ],
    benefits: [
      "Enhanced user experience",
      "Competitive advantage"
    ]
  }
];

const mobileFeatures = [
  {
    icon: "🎨",
    title: "Custom UI/UX Design",
    description: "Beautiful, intuitive interfaces designed for your brand and users"
  },
  {
    icon: "⚡",
    title: "High Performance",
    description: "Optimized apps that load fast and run smoothly on all devices"
  },
  {
    icon: "🔒",
    title: "Security & Privacy",
    description: "Enterprise-grade security with data encryption and privacy protection"
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description: "Comprehensive analytics to track user behavior and app performance"
  }
];

const PagePage = () => {
  return (
    <>
      <Helmet>
        <title>AI Mobile App Development - Zion Tech Group</title>
        <meta name="description" content="Build powerful AI-powered mobile apps for iOS and Android. Expert development with cutting-edge AI integration, custom UI/UX, and enterprise-grade security." />
        <meta name="keywords" content="mobile app development, AI mobile apps, iOS development, Android development, React Native, mobile AI integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI-Powered Mobile
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              App Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build intelligent mobile apps that engage users and drive business growth. 
            From iOS and Android to cross-platform solutions with cutting-edge AI integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              View Services
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p>Proven 5-step process for building exceptional AI-powered mobile apps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
              Our Mobile Development Services
            </h2>
            <p>Comprehensive AI-powered mobile app development and support services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
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
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                >
                  Start Building
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
              Why Choose Our Mobile Development?
            </h2>
            <p>Advanced AI technology with expert mobile development expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileFeatures.map((feature, index) => (
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
            <p>Real results from our mobile app development clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;Zion Tech Group built our AI-powered fitness app in just 3 months. The AI features are incredible and user engagement is up 200%!&rdquo;</p>
              <div className="font-semibold text-gray-900">David Kim</div>
              <div className="text-sm text-gray-500">Founder, FitAI</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;Their mobile app development team delivered an amazing e-commerce app with AI recommendations. Sales increased by 150%!&rdquo;</p>
              <div className="font-semibold text-gray-900">Lisa Wang</div>
              <div className="text-sm text-gray-500">CEO, ShopSmart</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">&ldquo;The AI chatbot integration they built for our app reduced support tickets by 80% and improved customer satisfaction significantly.&rdquo;</p>
              <div className="font-semibold text-gray-900">Robert Johnson</div>
              <div className="text-sm text-gray-500">CTO, ServicePro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your AI Mobile App?
          </h2>
          <p className="text-xl mb-8">Get a free consultation and discover how AI can transform your mobile app</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-indigo-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default PagePage;
