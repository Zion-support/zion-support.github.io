import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Code, 
  Server, 
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
  Brain,
  Target
} from "lucide-react";

export default function AIPoweredDevOps() {
  const features = [
    {
      title: "Intelligent CI/CD Pipelines",
      description: "AI-optimized deployment pipelines that adapt to your codebase and requirements",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Automated Infrastructure Management",
      description: "Self-healing infrastructure with predictive scaling and resource optimization",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Smart Monitoring & Alerting",
      description: "AI-powered anomaly detection and intelligent alerting to prevent downtime",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Security Automation",
      description: "Automated security scanning, vulnerability assessment, and compliance checks",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Performance Optimization",
      description: "Continuous performance monitoring and automatic optimization recommendations",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, GCP, and hybrid environments",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 applications",
        "Basic CI/CD pipelines",
        "Email support",
        "Standard monitoring",
        "Basic security scanning",
        "Single cloud provider"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 applications",
        "Advanced AI automation",
        "Priority support",
        "Advanced monitoring",
        "Comprehensive security",
        "Multi-cloud support",
        "API access"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited applications",
        "Custom AI models",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      title: "Reduce Deployment Time by 70%",
      description: "AI-optimized pipelines deploy code 70% faster with fewer errors",
      icon: <Clock className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Cut Infrastructure Costs by 40%",
      description: "Smart resource management and auto-scaling reduce cloud costs",
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Eliminate 95% of Downtime",
      description: "Predictive monitoring and self-healing prevent most outages",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered DevOps - Intelligent Development Operations Platform</title>
        <meta
          name="description"
          content="Transform your DevOps with AI-powered automation, intelligent monitoring, and self-healing infrastructure. Reduce deployment time and eliminate downtime."
        />
        <meta
          name="keywords"
          content="AI DevOps, intelligent CI/CD, automated infrastructure, smart monitoring, DevOps automation, cloud management"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
            <Code className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-300 text-sm font-medium">AI-Powered DevOps Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              {" "}DevOps
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your DevOps with AI-powered automation, intelligent monitoring, 
            and self-healing infrastructure. Reduce deployment time and eliminate downtime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of teams optimizing their DevOps processes
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to modernize your DevOps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your team size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? "border-orange-500/50 ring-2 ring-orange-500/20"
                    : "border-white/20"
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
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
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams using AI to optimize their development operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-4">
            Questions? Contact our team at{" "}
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              kleber@ziontechgroup.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+13024640950"
              className="text-orange-400 hover:text-orange-300 transition-colors"
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