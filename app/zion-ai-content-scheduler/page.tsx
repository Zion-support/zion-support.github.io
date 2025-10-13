import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Share2, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Smartphone,
  Brain,
  Target
} from "lucide-react";

export default function ZionAIContentScheduler() {
  const features = [
    {
      title: "AI-Powered Content Planning",
      description: "Machine learning algorithms suggest optimal posting times and content types",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Multi-Platform Publishing",
      description: "Schedule and publish content across 20+ social media platforms",
      icon: <Share2 className="w-6 h-6" />,
    },
    {
      title: "Content Calendar",
      description: "Visual calendar with drag-and-drop scheduling and team collaboration",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Performance Analytics",
      description: "Track engagement, reach, and ROI across all your social channels",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Content Templates",
      description: "Pre-built templates for different industries and content types",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Team Collaboration",
      description: "Assign tasks, approve content, and manage workflows with your team",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 3 social accounts",
        "Basic scheduling",
        "Email support",
        "Content calendar",
        "Basic analytics",
        "Mobile app access"
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 social accounts",
        "AI-powered scheduling",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Content templates",
        "API access"
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited social accounts",
        "Custom AI models",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "White-label options"
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      title: "Increase Engagement by 40%",
      description: "AI-optimized posting times boost engagement across all platforms",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Save 20 Hours/Week",
      description: "Automated scheduling and content management save valuable time",
      icon: <Clock className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Grow Followers by 200%",
      description: "Consistent, optimized content helps grow your social media presence",
      icon: <Globe className="w-8 h-8 text-purple-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Content Scheduler - AI-Powered Social Media Management</title>
        <meta
          name="description"
          content="Transform your social media strategy with AI-powered content scheduling, multi-platform publishing, and advanced analytics. Grow your audience and engagement."
        />
        <meta
          name="keywords"
          content="social media management, content scheduling, AI content planning, social media automation, content calendar, social media analytics"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <Calendar className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Scheduler
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your social media strategy with AI-powered content scheduling, 
            multi-platform publishing, and advanced analytics. Grow your audience and engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
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
              Join thousands of businesses growing their social media presence
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
              Everything you need to dominate social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
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
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? "border-purple-500/50 ring-2 ring-purple-500/20"
                    : "border-white/20"
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
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
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to grow their social media presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
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
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              kleber@ziontechgroup.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+13024640950"
              className="text-purple-400 hover:text-purple-300 transition-colors"
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