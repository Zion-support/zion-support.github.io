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
</><>
<//>
<div className="min-h-screen pt-16"></div><//div>
        {/* Hero Section */}</div><>
<//div>
<section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div><>
<//div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div><>
<//div>
<div className="max-w-7xl mx-auto relative z-10"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6"></div><>
<//div>
<Sparkles className="w-4 h-4 text-red-400 mr-2" /><>
</Sparkles className="w-4 h-4 text-red-400 mr-2" />
<span className="text-red-400 text-sm font-medium"></span className="text-red-400 text-sm font-medium">
                  #1 AI Customer Retention Platform
                </span><>
<//span>
</div><>
<//div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"></h1><>
<//h1>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400"></span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                  Zion AI Customer Churn Predictor Pro
                </span><>
<//span>
</h1><>
<//h1>
<p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"></p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Predict and prevent customer churn with AI-powered analytics.
                Get 94% accuracy in churn prediction and personalized retention</p><//p>
                campaigns that increase customer lifetime value.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div><>
<//div>
<Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center group"
                ></Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /><>
</ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</Link><>
<//Link>
<Link
                  to="/demo"
                  className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
                ></Link
                  to="/demo"
                  className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2" /><>
</Target className="w-5 h-5 ml-2" />
</Link><>
<//Link>
</div><//div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-3xl md:text-4xl font-bold text-red-400 mb-2"></div><//div>
                    40%</div><>
<//div>
</div><>
<//div>
<div className="text-gray-300 text-sm"></div><//div>
                    Reduction in Churn Rate</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2"></div><//div>
                    94%</div><>
<//div>
</div><>
<//div>
<div className="text-gray-300 text-sm"></div><//div>
                    Prediction Accuracy</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"></div><//div>
                    60%</div><>
<//div>
</div><>
<//div>
<div className="text-gray-300 text-sm">Increase in CLV</div><>
<//div>
</div><>
<//div>
<div className="text-center"></div><>
<//div>
<div className="text-3xl md:text-4xl font-bold text-red-400 mb-2"></div><//div>
                    35%</div><>
<//div>
</div><>
<//div>
<div className="text-gray-300 text-sm"></div><//div>
                    Retention Rate Increase</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"><>
</section className="py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-12"></div><>
<//div>
<h2 className="text-2xl md:text-3xl font-bold text-white mb-4"></h1><//h1>
                Trusted Across Industries</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300"></p><//p>
                Reduce churn for any business type</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"></div><//div>
              {industries.map((industry, index) => (</div><>
<//div>
<div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 text-center"
                ></div><>
<//div>
<div
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  ></div><//div>
                    {industry.icon}</div><>
<//div>
</div><>
<//div>
<div className="text-sm text-gray-300 group-hover:text-red-400 transition-colors"></div><//div>
                    {industry.name}</div><>
<//div>
</div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"></h1><//h1>
                Powerful Features for Customer Retention</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"></p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to predict, prevent, and reduce customer</p><//p>
                churn with AI intelligence.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
              {features.map((feature, index) => (</div><>
<//div>
<div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                ></div><>
<//div>
<div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300"></div><//div>
                    {feature.icon}</div><>
<//div>
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors"></h1><//h1>
                    {feature.title}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300 mb-4 leading-relaxed"></p><//p>
                    {feature.description}</p><>
<//p>
</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400"
                      ><>
</li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li><//li>
                    ))}
                  </ul><>
<//ul>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Choose Your Retention Plan</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your customer</p><//p>
                base</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div>
              {pricingPlans.map((plan, index) => (</div><>
<//div>
<div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-red-500/50 shadow-2xl shadow-red-500/20"
                      : "border-white/10 hover:border-red-500/30"
                  }`}
                ></div><//div>
                  {plan.popular && (</div><>
<//div>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div><>
<//div>
<span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center"><>
</span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
<Star className="w-4 h-4 mr-1" /></Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span><>
<//span>
</div><//div>
                  )}

                  <div className="text-center mb-8"></div><>
<//div>
<h3 className="text-2xl font-bold text-white mb-2"></h1><//h1>
                      {plan.name}</h1><>
<//h1>
</h3><>
<//h3>
<p className="text-gray-300 text-sm mb-4"></p><//p>
                      {plan.description}</p><>
<//p>
</p><>
<//p>
<div className="flex items-baseline justify-center"></div><>
<//div>
<span className="text-4xl font-bold text-red-400"></span className="text-4xl font-bold text-red-400">
                        {plan.price}
                      </span><>
<//span>
<span className="text-gray-400 ml-1">{plan.period}</span><>
<//span>
</div><>
<//div>
</div><>
<//div>
<ul className="space-y-4 mb-8"></ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      ><>
</li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li><//li>
                    ))}
                  </ul><>
<//ul>
<Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-red-500 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/25"
                        : "border border-red-400 text-red-400 hover:bg-red-400/10"
                    }`}
                  ></Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-red-500 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/25"
                        : "border border-red-400 text-red-400 hover:bg-red-400/10"
                    }`}
                  >
                    Get Started
                  </Link><>
<//Link>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
                Trusted by Customer Success Teams</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
                See how businesses are reducing churn with AI</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div>
              {testimonials.map((testimonial, index) => (</div><>
<//div>
<div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                ></div><>
<//div>
<div className="flex items-center mb-4"></div><//div>
                    {[...Array(testimonial.rating)].map((_, i) => (</div><>
<//div>
<Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      /></Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div><>
<//div>
<p className="text-gray-300 mb-6 italic leading-relaxed"></p><//p>
                    "{testimonial.content}"</p><>
<//p>
</p><>
<//p>
<div className="flex items-center"></div><>
<//div>
<div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-3"></div><//div>
                      {testimonial.avatar}</div><>
<//div>
</div><>
<//div>
<div></div><>
<//div>
<div className="font-semibold text-white"></div><//div>
                        {testimonial.name}</div><>
<//div>
</div><>
<//div>
<div className="text-sm text-gray-400"></div><//div>
                        {testimonial.role}, {testimonial.company}</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"></h1><//h1>
                Ready to Reduce Customer Churn?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8 leading-relaxed"></p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Customer
                Churn Predictor Pro to retain more customers and increase
                lifetime value. Start your free trial today and see the</p><//p>
                difference AI can make.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center group"
                ></Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /><>
</ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</Link><>
<//Link>
<Link
                  to="/demo"
                  className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
                ></Link
                  to="/demo"
                  className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" /><>
</Clock className="w-5 h-5 ml-2" />
</Link><>
<//Link>
</div><>
<//div>
<div className="mt-8 text-sm text-gray-400"></div><>
<//div>
<p></p>
                  ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel</p><//p>
                  anytime</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
</><//>
  );
};

export default ZionAICustomerChurnPredictorProPage;
