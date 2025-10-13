import { ArrowRight, Building, Brain, Shield, Zap, CheckCircle, Star, Target, Users, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function EnterpriseAISolutions() {
  const features = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Enterprise AI Strategy",
      description: "Comprehensive AI transformation strategy tailored to your organization's specific needs and goals"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom AI Model Development",
      description: "Build and deploy custom AI models specifically designed for your business processes and data"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Governance & Compliance",
      description: "Implement robust AI governance frameworks ensuring ethical AI use and regulatory compliance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Infrastructure Setup",
      description: "Design and implement scalable AI infrastructure with cloud, on-premises, or hybrid solutions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Process Automation",
      description: "Automate complex business processes using AI to improve efficiency and reduce operational costs"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "AI Analytics & Insights",
      description: "Transform data into actionable insights with advanced AI-powered analytics and reporting"
    }
  ];

  const solutions = [
    "AI Strategy Consulting",
    "Custom AI Model Development",
    "AI Infrastructure Design",
    "Data Pipeline Architecture",
    "AI Model Training & Optimization",
    "AI Integration Services",
    "AI Governance Framework",
    "AI Performance Monitoring",
    "AI Security Implementation",
    "AI Change Management",
    "AI Training & Support",
    "AI ROI Measurement"
  ];

  const pricingPlans = [
    {
      name: "Discovery",
      price: "$15,000",
      period: "one-time",
      description: "AI readiness assessment and strategy",
      features: [
        "AI readiness assessment",
        "Current state analysis",
        "AI strategy roadmap",
        "Technology recommendations",
        "Implementation timeline",
        "ROI projections"
      ],
      popular: false
    },
    {
      name: "Implementation",
      price: "$75,000",
      period: "per project",
      description: "Most popular for AI implementation",
      features: [
        "Custom AI model development",
        "Infrastructure setup",
        "Data pipeline implementation",
        "Integration services",
        "Training & documentation",
        "3 months support",
        "Performance monitoring",
        "Change management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale AI transformation",
      features: [
        "Comprehensive AI transformation",
        "Multiple AI models",
        "Advanced infrastructure",
        "Dedicated AI team",
        "24/7 support",
        "Custom integrations",
        "AI governance framework",
        "Ongoing optimization"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Fortune 500 Manufacturing",
      role: "Chief Technology Officer",
      content: "Zion's Enterprise AI Solutions transformed our entire manufacturing process. We've achieved 40% efficiency gains and $2M in annual savings through AI automation.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Global Financial Services",
      role: "Head of Digital Transformation",
      content: "The custom AI models developed for our risk assessment have been game-changing. We've reduced false positives by 60% while improving accuracy by 35%.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      company: "Healthcare Systems Inc",
      role: "VP of Operations",
      content: "The AI governance framework and compliance implementation was exceptional. We're now leading the industry in ethical AI practices while driving innovation.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise AI Solutions - Custom AI Implementation | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your enterprise with custom AI solutions. AI strategy consulting, custom model development, infrastructure setup, and governance for large organizations."
        />
        <meta
          name="keywords"
          content="enterprise AI, AI strategy, custom AI models, AI infrastructure, AI governance, AI transformation, AI consulting, AI implementation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Building className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">Enterprise AI Transformation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Enterprise AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your enterprise with custom AI solutions designed for large-scale implementation. 
              From strategy to deployment, we deliver comprehensive AI transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">$2M+</div>
                <div className="text-gray-300">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-gray-300">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Enterprise AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to successfully implement AI across your organization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Solutions List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete AI Solution Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the AI services you need for enterprise transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{solution}</span>
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
                Enterprise AI Investment Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the AI transformation approach that fits your organization's needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
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
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what enterprise executives say about our AI transformation services
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
              Ready to Transform Your Enterprise with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders using our Enterprise AI Solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}