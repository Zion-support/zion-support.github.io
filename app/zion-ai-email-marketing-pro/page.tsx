import React from "react";
import { Helmet } from "react-helmet-async";

const ZionAIEmailMarketingProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Email Content Generation",
      description:
        "Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.",
      icon: <Cpu className="w-6 h-6" />,
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
      icon: <Target className="w-6 h-6" />,
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
      icon: <Zap className="w-6 h-6" />,
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
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Real-time metrics", "Conversion tracking", "ROI analysis"],
    },
    {
      title: "Advanced A/B Testing",
      description:
        "Test subject lines, content, send times, and design elements with AI-powered optimization recommendations.",
      icon: <TrendingUp className="w-6 h-6" />,
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
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Spam score analysis", "Domain reputation", "Inbox placement"],
    },
  ];

  const emailTypes = [
    {
      name: "Newsletter",
      icon: <Mail className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Promotional",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Transactional",
      icon: <Send className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Welcome Series",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Abandoned Cart",
      icon: <MousePointer className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Re-engagement",
      icon: <Target className="w-6 h-6" />,
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
      
    </><Helmet>
        </div>
      </div>
          </div>
        </section>

        {/* Email Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-12">
          <h$1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                All Types of Email Campaigns
              </h2>
          
          </div><p className="text-lg text-gray-300">
                From newsletters to transactional emails, we've got you covered
              </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                    {type.icon}
        
          </div><div className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors">
                    {type.name}
        </div>
      </div>
              ))}
        </div>
      </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Features for Email Marketing Success
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create, send, and optimize email
                campaigns that convert with AI intelligence.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
          <h$1 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
          
          </div><p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">

                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Email Marketing Plan
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your email
                marketing needs
              </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                  {plan.popular && (
        
          </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
          <h$1 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
          
          </div><p className="text-gray-300 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
            
          </div><ul className="space-y-4 mb-8">

                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                    Get Started
                  </Link>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Email Marketing Professionals
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how marketers are transforming their email campaigns with AI
              </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          </div><div className="flex items-center mb-4">

                    ))}
          
          </div><p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
        
          </div><div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
        
          </div><div>
        
          </div><div className="font-semibold text-white">
                        {testimonial.name}
        
          </div><div className="text-sm text-gray-400">
                        {testimonial.role}, {testimonial.company}
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
          
        </section><div className="max-w-4xl mx-auto text-center">
        
          </div><div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12">
          <h$1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Email Marketing?
              </h2>
          
          </div><p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Email
                Marketing Pro to maximize their email ROI. Start your free trial
                today and see the difference AI can make.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                  Schedule Demo
                  <Clock className="w-5 h-5 ml-2" />
                </Link>
        
          </div><div className="mt-8 text-sm text-gray-400">
          
          </div><p>
                  ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel
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

export default ZionAIEmailMarketingProPage;
