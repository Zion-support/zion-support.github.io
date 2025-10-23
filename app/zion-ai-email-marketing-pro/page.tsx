import React from "react";
import Link from "next/link";
import {
  Mail,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Sparkles,
  Cpu,
  Send,
  Heart,
  MousePointer,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

const features = [
    {
      title: "AI-Powered Email Content Generation",
      description:
        "Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.",
      icon: <Cpu className="w-6 h-6" loading="lazy" />,
      benefits: [
        "AI content generation",
        "Brand voice consistency",
        "A/B testing suggestions",
      ],
    },
    {
      title: "Advanced Segmentation & Targeting",
      description:
        "Intelligent audience segmentation based on behavior, preferences, and engagement patterns for maximum relevance.",
      icon: <Target className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Behavioral segmentation",
        "Predictive targeting",
        "Dynamic content",
      ],
    },
    {
      title: "Automated Campaign Workflows",
      description:
        "Create sophisticated email sequences with triggers, conditions, and personalized journeys for each subscriber.",
      icon: <Zap className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Drip campaigns",
        "Behavioral triggers",
        "Personalized journeys",
      ],
    },
    {
      title: "Real-time Analytics & Insights",
      description:
        "Comprehensive analytics with open rates, click-through rates, conversion tracking, and ROI measurement.",
      icon: <BarChart3 className="w-6 h-6" loading="lazy" />,
      benefits: ["Real-time metrics", "Conversion tracking", "ROI analysis"],
    },
    {
      title: "Advanced A/B Testing",
      description:
        "Test subject lines, content, send times, and design elements with AI-powered optimization recommendations.",
      icon: <TrendingUp className="w-6 h-6" loading="lazy" />,
      benefits: [
        "Multi-variate testing",
        "AI optimization",
        "Performance insights",
      ],
    },
    {
      title: "Deliverability Optimization",
      description:
        "Advanced deliverability tools to ensure your emails reach the inbox and avoid spam filters.",
      icon: <Shield className="w-6 h-6" loading="lazy" />,
      benefits: ["Spam score analysis", "Domain reputation", "Inbox placement"],
    },
  ];

  const emailTypes = [
    {
      name: "Newsletter",
      icon: <Mail className="w-6 h-6" loading="lazy" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Promotional",
      icon: <Zap className="w-6 h-6" loading="lazy" />,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Transactional",
      icon: <Send className="w-6 h-6" loading="lazy" />,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Welcome Series",
      icon: <Heart className="w-6 h-6" loading="lazy" />,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Abandoned Cart",
      icon: <MousePointer className="w-6 h-6" loading="lazy" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Re-engagement",
      icon: <Target className="w-6 h-6" loading="lazy" />,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description:
        "Perfect for small businesses starting their email marketing journey",
      features: [
        "Up to 1,000 subscribers",
        "Unlimited emails",
        "Basic templates",
        "Email analytics",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description:
        "Ideal for growing businesses with advanced email marketing needs",
      features: [
        "Up to 10,000 subscribers",
        "Unlimited emails",
        "AI content generation",
        "Advanced segmentation",
        "A/B testing",
        "Priority support",
        "Custom templates",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description:
        "For large organizations with complex email marketing requirements",
      features: [
        "Unlimited subscribers",
        "Unlimited emails",
        "Advanced AI features",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "API access",
        "Advanced analytics",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Rachel Green",
      company: "E-commerce Solutions",
      role: "Marketing Manager",
      content:
        "Zion AI Email Marketing Pro increased our email ROI by 400%. The AI content generation is absolutely game-changing!",
      rating: 5,
      avatar: "RG",
    },
    {
      name: "Mark Johnson",
      company: "SaaS Startup",
      role: "Growth Manager",
      content:
        "The segmentation and automation features helped us achieve 35% higher open rates. Our conversion rates have never been better.",
      rating: 5,
      avatar: "MJ",
    },
    {
      name: "Sarah Wilson",
      company: "Retail Brand",
      role: "Digital Marketing Director",
      content:
        "We manage 50+ email campaigns effortlessly. The AI optimization suggestions have transformed our email strategy.",
      rating: 5,
      avatar: "SW",
    },
  ];

  return (
    <>

      <div className="min-h-screen pt-16" loading="lazy">>{/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" loading="lazy">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" loading="lazy"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" loading="lazy"></div>

          <div className="max-w-7xl mx-auto relative z-10" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6" loading="lazy">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2" loading="lazy" />
                <span className="text-blue-400 text-sm font-medium" loading="lazy">#1 AI Email Marketing Platform</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" loading="lazy">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" loading="lazy">Zion AI Email Marketing Pro</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" loading="lazy">Transform your email marketing with AI-powered content</p>
                generation, advanced segmentation, and intelligent automation
                that drives real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" loading="lazy">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group" loading="lazy"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" loading="lazy" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center" loading="lazy"
                >
                  Watch Demo
                  <Target className="w-5 h-5 ml-2" loading="lazy" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" loading="lazy">
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2" loading="lazy">400%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Increase in Email ROI</div>
                </div>
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" loading="lazy">35%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Higher Open Rates</div>
                </div>
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" loading="lazy">50K+</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Emails Sent Daily</div>
                </div>
                <div className="text-center" loading="lazy">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2" loading="lazy">99.9%</div>
                  <div className="text-gray-300 text-sm" loading="lazy">Deliverability Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-12" loading="lazy">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" loading="lazy">All Types of Email Campaigns</h2>
              <p className="text-lg text-gray-300" loading="lazy">From newsletters to transactional emails, we've got you covered</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" loading="lazy">{emailTypes.map((type, index) => (</div>
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 text-center" loading="lazy"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >{type.icon}</div>
                  <div className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors" loading="lazy">{type.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" loading="lazy">Powerful Features for Email Marketing Success</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" loading="lazy">Everything you need to create, send, and optimize email</p>
                campaigns that convert with AI intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">{features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10" loading="lazy"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" loading="lazy">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors" loading="lazy">{feature.title}</h3>h3>
                  <p className="text-gray-300 mb-4 leading-relaxed" loading="lazy">{feature.description}</p>
                  <ul className="space-y-2" loading="lazy">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400" loading="lazy"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" loading="lazy" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Choose Your Email Marketing Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Flexible pricing options designed to scale with your email</p>
                marketing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">{pricingPlans.map((plan, index) => (</div>
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? "border-blue-500/50 shadow-2xl shadow-blue-500/20"
                      : "border-white/10 hover:border-blue-500/30"
                  }`}
                >{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" loading="lazy">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center" loading="lazy">
                        <Star className="w-4 h-4 mr-1" loading="lazy" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8" loading="lazy">
                    <h3 className="text-2xl font-bold text-white mb-2" loading="lazy">{plan.name}</h3>h3>
                    <p className="text-gray-300 text-sm mb-4" loading="lazy">{plan.description}</p>
                    <div className="flex items-baseline justify-center" loading="lazy">
                      <span className="text-4xl font-bold text-blue-400" loading="lazy">{plan.price}</span>
                      <span className="text-gray-400 ml-1" loading="lazy">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8" loading="lazy">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300" loading="lazy"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                        : "border border-blue-400 text-blue-400 hover:bg-blue-400/10"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Trusted by Email Marketing Professionals</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">See how marketers are transforming their email campaigns with AI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">{testimonials.map((testimonial, index) => (</div>
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10" loading="lazy"
                >
                  <div className="flex items-center mb-4" loading="lazy">{[...Array(testimonial.rating)].map((_, i) => (</div>
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current" loading="lazy"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed" loading="lazy">"{testimonial.content}"</p>
                  <div className="flex items-center" loading="lazy">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3" loading="lazy">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white" loading="lazy">{testimonial.name}</div>
                      <div className="text-sm text-gray-400" loading="lazy">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12" loading="lazy">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" loading="lazy">Ready to Transform Your Email Marketing?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" loading="lazy">Join thousands of businesses already using Zion AI Email</p>
                Marketing Pro to maximize their email ROI. Start your free trial
                today and see the difference AI can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group" loading="lazy"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" loading="lazy" />
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center" loading="lazy"
                >
                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" loading="lazy" />
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-400" loading="lazy">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel</p>
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


