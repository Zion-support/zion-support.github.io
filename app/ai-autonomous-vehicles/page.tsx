import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Car, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Database,
  Target,
  Eye,
  Navigation
} from "lucide-react";

export default function AIAutonomousVehicles() {
  const features = [
    {
      title: "Advanced Computer Vision",
      description: "Multi-camera systems with 360-degree perception and real-time object detection",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Neural Network Navigation",
      description: "Deep learning algorithms for path planning and obstacle avoidance",
      icon: <Navigation className="w-6 h-6" />,
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered vehicle health monitoring and predictive maintenance scheduling",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Fleet Management",
      description: "Centralized management system for autonomous vehicle fleets",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics dashboard for performance monitoring and optimization",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Safety Systems",
      description: "Redundant safety systems with fail-safe mechanisms and emergency protocols",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Development",
      price: "$49,999",
      period: "/month",
      description: "Perfect for R&D teams",
      features: [
        "Up to 5 vehicles",
        "Basic AI models",
        "Email support",
        "Standard documentation",
        "Simulation environment",
        "Basic analytics"
      ],
      popular: false,
    },
    {
      name: "Pilot Program",
      price: "$149,999",
      period: "/month",
      description: "Ideal for pilot deployments",
      features: [
        "Up to 25 vehicles",
        "Advanced AI models",
        "Priority support",
        "Real-world testing",
        "Fleet management",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true,
    },
    {
      name: "Production",
      price: "$499,999",
      period: "/month",
      description: "For commercial deployment",
      features: [
        "Unlimited vehicles",
        "Custom AI models",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom development",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      title: "Reduce Accidents by 90%",
      description: "AI-powered systems prevent human error and reduce accident rates dramatically",
      icon: <Shield className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Cut Operating Costs by 60%",
      description: "Autonomous vehicles reduce labor costs and improve fuel efficiency",
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Increase Efficiency by 200%",
      description: "24/7 operation and optimized routing maximize vehicle utilization",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Vehicles - Self-Driving Vehicle Technology</title>
        <meta
          name="description"
          content="Revolutionary AI-powered autonomous vehicle technology with advanced computer vision, neural navigation, and fleet management systems."
        />
        <meta
          name="keywords"
          content="autonomous vehicles, self-driving cars, AI transportation, computer vision, fleet management, autonomous technology"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
            <Car className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">AI-Powered Autonomous Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Vehicles
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary AI-powered autonomous vehicle technology with advanced computer vision, 
            neural navigation, and fleet management systems. Transform transportation with self-driving technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Impact
            </h2>
            <p className="text-xl text-gray-300">
              Revolutionize transportation with autonomous vehicle technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge AI systems for autonomous vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Vehicle Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose the deployment model that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? "border-blue-500/50 ring-2 ring-blue-500/20"
                    : "border-white/20"
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                      : "border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Transportation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous vehicle revolution and shape the future of transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-4">
            Questions? Contact our autonomous vehicle team at{" "}
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              kleber@ziontechgroup.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+13024640950"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              +1 302 464 0950
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Zion Tech Group • 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}