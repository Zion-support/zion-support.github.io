import { ArrowRight, Smartphone, Tablet, Zap, Shield, CheckCircle, Star, Users, Clock, Database, Globe, Code } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MobileDevelopmentZionTechGroup() {
  const mobileServices = [
    {
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and SwiftUI",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Swift/SwiftUI", "Core Data", "Push notifications", "App Store optimization"],
      pricing: "Starting at $8,000",
      timeline: "6-12 weeks"
    },
    {
      title: "Android App Development",
      description: "Native Android applications built with Kotlin and Jetpack Compose",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Kotlin/Java", "Room database", "Material Design", "Google Play optimization"],
      pricing: "Starting at $7,000",
      timeline: "6-12 weeks"
    },
    {
      title: "Cross-Platform Apps",
      description: "Single codebase apps for both iOS and Android using React Native",
      icon: <Tablet className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["React Native", "Flutter", "Xamarin", "Shared codebase"],
      pricing: "Starting at $10,000",
      timeline: "8-16 weeks"
    },
    {
      title: "Progressive Web Apps",
      description: "Web applications that work like native mobile apps",
      icon: <Globe className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["PWA features", "Offline functionality", "Push notifications", "App-like experience"],
      pricing: "Starting at $5,000",
      timeline: "4-8 weeks"
    },
    {
      title: "App Maintenance",
      description: "Ongoing support, updates, and maintenance for existing apps",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: ["Bug fixes", "Feature updates", "Performance optimization", "Security patches"],
      pricing: "Starting at $1,500/month",
      timeline: "Ongoing"
    },
    {
      title: "App Store Optimization",
      description: "Optimize your app for better visibility and downloads",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Keyword optimization", "ASO strategy", "A/B testing", "Performance tracking"],
      pricing: "Starting at $2,000",
      timeline: "2-4 weeks"
    }
  ];

  const platforms = [
    { name: "iOS", icon: "🍎", description: "iPhone & iPad apps" },
    { name: "Android", icon: "🤖", description: "Google Play Store" },
    { name: "React Native", icon: "⚛️", description: "Cross-platform" },
    { name: "Flutter", icon: "🎯", description: "Google's framework" },
    { name: "Xamarin", icon: "🔷", description: "Microsoft's solution" },
    { name: "PWA", icon: "🌐", description: "Progressive Web Apps" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define app requirements, target audience, and technical specifications"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes"
    },
    {
      step: "03",
      title: "Development",
      description: "Build the app using the chosen technology stack"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing, app store submission, and launch support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile App Development - Zion Tech Group | iOS & Android Apps</title>
        <meta
          name="description"
          content="Professional mobile app development services for iOS, Android, and cross-platform solutions. Starting at $5,000."
        />
        <meta
          name="keywords"
          content="mobile app development, iOS apps, Android apps, React Native, Flutter, app development"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile App
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create powerful mobile applications for iOS and Android with our expert development team. 
              From native apps to cross-platform solutions, we deliver exceptional mobile experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your App
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Mobile Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive mobile app development solutions for all platforms and business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-cyan-400 font-semibold text-lg">{service.pricing}</div>
                    <div className="text-gray-400 text-sm">Timeline: {service.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platforms We Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We develop mobile apps for all major platforms and frameworks.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <div className="text-white font-semibold mb-1">{platform.name}</div>
                  <div className="text-gray-400 text-sm">{platform.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful mobile app delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                <div className="text-gray-300">Apps Developed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.8/5</div>
                <div className="text-gray-300">App Store Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
                <div className="text-gray-300">Downloads</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your app idea into reality with our expert mobile development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your App Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
