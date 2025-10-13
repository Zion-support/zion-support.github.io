import { ArrowRight, Bot, Cpu, Zap, Shield, CheckCircle, Star, Brain, Database, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIRoboticsAutomation() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Autonomous Robot Control",
      description: "AI-powered autonomous robots that can navigate, learn, and adapt to complex environments without human intervention"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Machine Learning Integration",
      description: "Advanced ML algorithms that enable robots to learn from experience and improve performance over time"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Industrial Automation",
      description: "Complete automation solutions for manufacturing, logistics, and industrial processes with robotic systems"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Compliance",
      description: "Built-in safety protocols and compliance monitoring to ensure safe operation in human-robot collaborative environments"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Advanced computer vision systems that enable robots to see, recognize, and interact with objects and environments"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Monitoring",
      description: "Cloud-based monitoring and control systems for managing robotic fleets across multiple locations"
    }
  ];

  const pricingPlans = [
    {
      name: "Robotics Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small-scale automation",
      features: [
        "Up to 5 robot units",
        "Basic AI control system",
        "Standard safety protocols",
        "Email support",
        "Basic monitoring dashboard",
        "1 location deployment"
      ],
      popular: false
    },
    {
      name: "Robotics Professional",
      price: "$7,999",
      period: "/month",
      description: "Most popular for manufacturing",
      features: [
        "Up to 25 robot units",
        "Advanced AI control system",
        "Machine learning capabilities",
        "Priority support",
        "Advanced monitoring dashboard",
        "Up to 5 location deployments",
        "Custom automation workflows",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Robotics Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large-scale industrial automation",
      features: [
        "Unlimited robot units",
        "Premium AI control system",
        "Custom ML model training",
        "24/7 dedicated support",
        "Enterprise monitoring suite",
        "Unlimited location deployments",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Manufacturing Automation",
      description: "Complete robotic automation for assembly lines, quality control, and material handling",
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Warehouse Robotics",
      description: "Autonomous robots for inventory management, picking, packing, and logistics optimization",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Service Robotics",
      description: "AI-powered service robots for hospitality, healthcare, and customer service applications",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Agricultural Automation",
      description: "Robotic systems for precision farming, crop monitoring, and automated harvesting",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Advanced Manufacturing Corp",
      role: "Automation Director",
      content: "Zion's robotics automation increased our production efficiency by 200% while reducing labor costs by 60%. Revolutionary technology.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Logistics Solutions Inc",
      role: "Operations Manager",
      content: "The warehouse automation robots have transformed our operations. We can now handle 5x more orders with the same workforce.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      company: "Healthcare Robotics Lab",
      role: "Research Director",
      content: "The AI-powered service robots are incredibly sophisticated. They've improved patient care while reducing staff workload significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Robotics Automation - Industrial Robot Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered robotics automation solutions for manufacturing, logistics, and industrial processes. Autonomous robots with machine learning capabilities."
        />
        <meta
          name="keywords"
          content="robotics automation, industrial robots, AI robots, manufacturing automation, warehouse robotics, service robots"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Bot className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Future of Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI Robotics Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered robotics solutions that transform industries through intelligent automation. 
              From manufacturing to healthcare, our robots work alongside humans to enhance productivity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Automate Your Operations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Robot Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Robots Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
                <div className="text-gray-300">Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Robotics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology that makes robots intelligent, autonomous, and highly efficient.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Robotics Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI robotics is transforming industries and creating new possibilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-300">
                    {application.description}
                  </p>
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
                Choose the robotics solution that matches your automation needs and scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Start Automation
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
                See what manufacturing and automation leaders say about our robotics solutions
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
              Ready to Automate Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the robotics revolution and transform your operations with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Automate Your Operations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Robot Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}