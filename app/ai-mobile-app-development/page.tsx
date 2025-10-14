import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";

// Development process data
const developmentProcess = [
  { step: "1", title: "Discovery & Planning", description: "We analyze your requirements and create a detailed project roadmap" },
  { step: "2", title: "Design & Prototyping", description: "Create intuitive UI/UX designs and interactive prototypes" },
  { step: "3", title: "AI Integration", description: "Implement cutting-edge AI features tailored to your app's needs" },
  { step: "4", title: "Development & Testing", description: "Build your app with rigorous testing and quality assurance" },
  { step: "5", title: "Launch & Support", description: "Deploy your app and provide ongoing maintenance and updates" }
];

// Mobile services data
const mobileServices = [
  {
    icon: "📱",
    title: "Native iOS Development",
    description: "High-performance iOS apps built with Swift and latest Apple technologies",
    price: "$8,000 - $25,000",
    marketPrice: "$15,000 - $40,000",
    category: "iOS",
    features: [
      "Swift & SwiftUI development",
      "Core Data integration",
      "Push notifications",
      "App Store optimization"
    ],
    benefits: [
      "Native performance and user experience",
      "Access to all iOS features and APIs"
    ]
  },
  {
    icon: "🤖",
    title: "Android Development",
    description: "Powerful Android apps built with Kotlin and modern Android architecture",
    price: "$7,000 - $22,000",
    marketPrice: "$12,000 - $35,000",
    category: "Android",
    features: [
      "Kotlin & Jetpack Compose",
      "Room database integration",
      "Material Design 3",
      "Google Play optimization"
    ],
    benefits: [
      "Optimized for Android ecosystem",
      "Seamless Google services integration"
    ]
  },
  {
    icon: "⚡",
    title: "Cross-Platform Development",
    description: "Single codebase apps for iOS and Android using React Native or Flutter",
    price: "$5,000 - $18,000",
    marketPrice: "$10,000 - $30,000",
    category: "Cross-Platform",
    features: [
      "React Native or Flutter",
      "Shared business logic",
      "Platform-specific optimizations",
      "Faster development cycle"
    ],
    benefits: [
      "Reduced development time and cost",
      "Consistent user experience across platforms"
    ]
  },
  {
    icon: "🧠",
    title: "AI-Powered Features",
    description: "Integrate machine learning, computer vision, and natural language processing",
    price: "$3,000 - $12,000",
    marketPrice: "$6,000 - $20,000",
    category: "AI Integration",
    features: [
      "Machine learning models",
      "Computer vision capabilities",
      "Natural language processing",
      "Predictive analytics"
    ],
    benefits: [
      "Enhanced user engagement",
      "Intelligent automation and insights"
    ]
  }
];

// Mobile features data
const mobileFeatures = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: "Optimized for performance with smooth animations and quick load times"
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "Enterprise-grade security with robust error handling and data protection"
  },
  {
    icon: "📊",
    title: "Analytics Ready",
    description: "Built-in analytics and monitoring for user behavior and app performance"
  },
  {
    icon: "🌐",
    title: "Offline Capable",
    description: "Works seamlessly offline with intelligent data synchronization"
  }
];

const PagePage = () => {
  return (
    <>
      <Helmet>
        <title>AI Mobile App Development - Zion Tech Group</title>
        <meta name="description" content="Build powerful AI-powered mobile apps for iOS and Android. Expert development with cutting-edge AI integration, native performance, and modern design." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">AI Mobile App Development</h1>
            <p className="text-gray-300 text-lg">
              Build powerful, intelligent mobile apps that engage users and drive business growth with cutting-edge AI technology.
            </p>
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
