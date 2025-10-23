import React from "react";
import Link from "next/link";
import {
  TrendingDown,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Sparkles,
  AlertTriangle,
  Cpu,
  Globe,
  Heart,
  MousePointer,
} from "lucide-react";

const ZionAICustomerChurnPredictorProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Churn Prediction",
      description:
        "Advanced machine learning algorithms predict customer churn with 94% accuracy using behavioral patterns and engagement data.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: [
        "94% prediction accuracy",
        "Real-time risk scoring",
        "Behavioral pattern analysis",
      ],
    },
    {
      title: "Early Warning System",
      description:
        "Get instant alerts when customers show signs of potential churn, allowing proactive intervention strategies.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: [
        "Real-time alerts",
        "Risk level indicators",
        "Customizable thresholds",
      ],
    },
    {
      title: "Personalized Retention Campaigns",
      description:
        "AI generates personalized retention strategies and campaigns based on individual customer risk profiles.",
      icon: <Target className="w-6 h-6" />,
      benefits: [
        "Personalized strategies",
        "Automated campaigns",
        "A/B testing recommendations",
      ],
    },
    {
      title: "Customer Health Scoring",
      description:
        "Comprehensive health scores that track customer engagement, satisfaction, and loyalty metrics over time.",
      icon: <Heart className="w-6 h-6" />,
      benefits: [
        "Health score tracking",
        "Engagement metrics",
        "Loyalty indicators",
      ],
    },
    {
      title: "Retention Analytics Dashboard",
      description:
        "Detailed analytics and insights on churn patterns, retention rates, and the effectiveness of retention efforts.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Churn analytics", "Retention insights", "ROI measurement"],
    },
    {
      title: "Multi-Channel Integration",
      description:
        "Integrate with your CRM, email marketing, support systems, and other tools for comprehensive customer data.",
      icon: <Globe className="w-6 h-6" />,
      benefits: [
        "CRM integration",
        "Email marketing sync",
        "Support system connection",
      ],
    },
  ];

  const industries = [
    {
      name: "SaaS",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "E-commerce",
      icon: <MousePointer className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Subscription",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Financial Services",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Education",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description:
        "Perfect for small businesses starting their retention efforts",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Email alerts",
        "Standard analytics",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses with complex customer bases",
      features: [
        "Up to 10,000 customers",
        "Advanced AI prediction",
        "Personalized campaigns",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description:
        "For large organizations with enterprise-scale customer retention needs",
      features: [
        "Unlimited customers",
        "Enterprise AI features",
        "White-label options",
        "Dedicated support",
        "Custom development",
        "Advanced security",
        "On-premise deployment",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "SaaS Solutions Inc.",
      role: "Customer Success Director",
      content:
        "Zion AI Churn Predictor Pro helped us reduce churn by 40% and increase customer lifetime value by 60%. The predictions are incredibly accurate!",
      rating: 5,
      avatar: "JM",
    },
    {
      name: "Robert Kim",
      company: "E-commerce Plus",
      role: "VP of Customer Experience",
      content:
        "The early warning system is a game-changer. We can now intervene before customers even think about leaving.",
      rating: 5,
      avatar: "RK",
    },
    {
      name: "Sarah Johnson",
      company: "SubscriptionBox Co.",
      role: "Retention Manager",
      content:
        "The personalized retention campaigns have increased our retention rate by 35%. The AI recommendations are spot-on.",
      rating: 5,
      avatar: "SJ",
    },
  ];

  return (
    <>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-red-400 mr-2" />
                <span>#1 AI Customer Retention Platform
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span>Zion AI Customer Churn Predictor Pro
                </span>
              </h1>

              <p>Predict and prevent customer churn with AI-powered analytics.
                Get 94% accuracy in churn prediction and personalized retention
                campaigns that increase customer lifetime value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight> </ArrowRight>Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Target> </Target>Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div>40%
                  </div>
                  <div>Reduction in Churn Rate
                  </div>
                </div>
                <div className="text-center">
                  <div>94%
                  </div>
                  <div>Prediction Accuracy
                  </div>
                </div>
                <div className="text-center">
                  <div>60%
                  </div>
                  <div>Increase in CLV</div>
                </div>
                <div className="text-center">
                  <div>35%
                  </div>
                  <div>Retention Rate Increase
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2>Trusted Across Industries
              </h2>
              <p>Reduce churn for any business type
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div>{industry.icon}
                  </div>
                  <div>{industry.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Powerful Features for Customer Retention
              </h2>
              <p>Everything you need to predict, prevent, and reduce customer
                churn with AI intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div>{feature.icon}
                  </div>
                  <h3>{feature.title}
                  </h3>
                  <p>{feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle>{benefit}
                      </CheckCircle>li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Choose Your Retention Plan
              </h2>
              <p>Flexible pricing options designed to scale with your customer
                base
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-red-500/50 shadow-2xl shadow-red-500/20"
                      : "border-white/10 hover:border-red-500/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star>Most Popular
                      </Star>span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3>{plan.name}
                    </h3>
                    <p>{plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span>{plan.price}
                      </span>
                      <span>{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle>{feature}
                      </CheckCircle>li>
                    ))}
                  </ul>

                  <Link>Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Trusted by Customer Success Teams
              </h2>
              <p>See how businesses are reducing churn with AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star>))}
                  </Star>div>
                  <p>"{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div>{testimonial.avatar}
                    </div>
                    <div>
                      <div>{testimonial.name}
                      </div>
                      <div>{testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-12">
              <h2>Ready to Reduce Customer Churn?
              </h2>
              <p>Join thousands of businesses already using Zion AI Customer
                Churn Predictor Pro to retain more customers and increase
                lifetime value. Start your free trial today and see the
                difference AI can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight> </ArrowRight>Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                  <Clock> </Clock>Link>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel
                  anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAICustomerChurnPredictorProPage;
