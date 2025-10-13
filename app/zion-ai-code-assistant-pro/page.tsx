import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Code, Brain, Zap, Shield, BarChart3, Users, Settings, Star, Play, Download } from "lucide-react";

export default function ZionAICodeAssistantPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Code Generation",
      description: "Generate high-quality code using advanced AI models trained on millions of code repositories"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Support for 50+ programming languages including Python, JavaScript, TypeScript, Java, C++, Go, and more"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Code Analysis",
      description: "Instant code analysis with suggestions for optimization, bug fixes, and best practices"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Vulnerability Detection",
      description: "Automatically detect security vulnerabilities and suggest secure coding practices"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Analyze code performance and provide recommendations for optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share code snippets, collaborate on projects, and maintain coding standards across teams"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individual developers",
      features: [
        "Up to 1,000 code generations per month",
        "5 programming languages",
        "Basic code analysis",
        "Email support",
        "1GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for small teams",
      features: [
        "Up to 10,000 code generations per month",
        "All 50+ programming languages",
        "Advanced code analysis",
        "Security vulnerability detection",
        "Priority support",
        "10GB storage",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited code generations",
        "All programming languages",
        "Full AI suite",
        "Custom model training",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced team management",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "TechCorp Inc.",
      content: "Zion AI Code Assistant Pro has revolutionized our development process. We've seen a 40% increase in productivity and significantly fewer bugs in our code.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "The AI-powered code generation is incredibly accurate. It understands our codebase context and generates code that fits perfectly with our existing architecture.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      company: "DevTeam Solutions",
      content: "The security vulnerability detection has saved us countless hours. It catches issues we would have missed and suggests secure alternatives.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Code Assistant Pro - Advanced AI-Powered Code Generation | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your coding experience with Zion AI Code Assistant Pro. AI-powered code generation, multi-language support, security analysis, and team collaboration tools. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI code assistant, code generation, programming AI, code analysis, security vulnerability detection, team collaboration, software development"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-cyan-400 text-sm font-semibold mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Development
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Code Assistant
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The most advanced AI-powered code generation and analysis platform. Generate high-quality code, 
                detect vulnerabilities, and collaborate seamlessly with your team using cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Programming Languages</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Code Accuracy Rate</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-gray-300">Happy Developers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Development
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to accelerate your development workflow and write better code.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your development needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:bg-white/20 ${
                    plan.popular 
                      ? 'border-cyan-400 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
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
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Developers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of developers who have transformed their coding experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
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
              Ready to Transform Your Development Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of AI-powered development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
