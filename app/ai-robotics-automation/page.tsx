import { ArrowRight, Bot, Cpu, Zap, Shield, Star, CheckCircle, Settings, Wrench, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiRoboticsAutomation() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Robotics",
      description: "AI-powered robots with advanced computer vision, natural language processing, and autonomous decision-making"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Machine Learning Integration",
      description: "Robots that learn and adapt to new tasks through continuous machine learning algorithms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description: "End-to-end automation solutions that reduce human intervention by 90% while maintaining quality"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Compliance",
      description: "Advanced safety systems with real-time monitoring and compliance with industrial standards"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Integration",
      description: "Seamless integration with existing systems and workflows for maximum efficiency"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Predictive Maintenance",
      description: "AI-powered maintenance scheduling that prevents downtime and extends equipment life"
    }
  ];

  const applications = [
    "Manufacturing Automation",
    "Warehouse & Logistics",
    "Quality Control & Inspection",
    "Assembly Line Operations",
    "Material Handling",
    "Packaging & Sorting",
    "Welding & Fabrication",
    "Painting & Coating",
    "Pick & Place Operations",
    "Inventory Management",
    "Customer Service Robots",
    "Medical & Healthcare Robotics"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small operations",
      features: [
        "Up to 2 robotic units",
        "Basic automation",
        "Standard support",
        "Basic training",
        "Remote monitoring",
        "1 year warranty"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$14,999",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Up to 10 robotic units",
        "Advanced AI capabilities",
        "Priority support",
        "Comprehensive training",
        "Custom programming",
        "3 year warranty",
        "24/7 monitoring",
        "Performance analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49,999",
      period: "/month",
      description: "For large facilities",
      features: [
        "Unlimited robotic units",
        "Full AI integration",
        "Dedicated support team",
        "Custom development",
        "White-label solutions",
        "5 year warranty",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Manufacturing Corp",
      role: "Operations Director",
      content: "Zion's robotics automation increased our production efficiency by 300% while reducing errors by 95%. The ROI was achieved in just 8 months.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "E-commerce Fulfillment",
      role: "Warehouse Manager",
      content: "The AI-powered robots transformed our warehouse operations. We can now process 5x more orders with the same workforce.",
      rating: 5
    },
    {
      name: "David Martinez",
      company: "Automotive Parts",
      role: "Quality Manager",
      content: "The quality control robots catch defects that human inspectors miss. Our defect rate dropped to near zero after implementation.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Robotics Automation - Intelligent Robotic Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your operations with AI-powered robotics automation. Intelligent robots, process automation, and machine learning integration for manufacturing, warehousing, and more."
        />
        <meta
          name="keywords"
          content="robotics automation, AI robots, manufacturing automation, warehouse robots, process automation, intelligent robotics, robotic solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Bot className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">AI-Powered Robotics Revolution</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                AI Robotics Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your operations with intelligent robotics powered by artificial intelligence. 
              Increase productivity by 300%, reduce errors by 95%, and achieve unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Automation Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">300%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
                <div className="text-gray-300">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Operation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Robotics Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Intelligent robots powered by cutting-edge AI and machine learning technologies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Applications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Robotics Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform every aspect of your operations with intelligent robotic solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Robotics Automation Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the robotics solution that fits your automation needs. All plans include installation and training.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-orange-400 bg-gradient-to-br from-orange-500/10 to-red-500/10'
                      : 'border-white/20 hover:border-orange-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Start Automation Journey
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what operations professionals say about our robotics automation solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies using Zion's robotics automation to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Automation Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}