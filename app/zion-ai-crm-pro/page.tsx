import { Helmet , Link  } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Globe, TrendingUp, Phone } from "lucide-react";
export default function ZionAiCrmPro() {
  const crmStats = [
    { number: "35%", label: "Increase in Lead Conversion", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50%", label: "Reduction in Manual Tasks", icon: <Zap className="w-6 h-6" /> },
    { number: "90%", label: "Sales Forecast Accuracy", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "AI-Powered Insights", icon: <Brain className="w-6 h-6" /> }
  ];
  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 5 users",
        "Basic lead scoring",
        "Email integration",
        "Standard reporting",
        "Email support",
        "Up to 1,000 contacts"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Multi-channel communication",
        "Advanced analytics",
        "Priority support",
        "Up to 10,000 contacts",
        "API access",
        "Custom workflows"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited users",
        "Advanced AI & ML",
        "Custom integrations",
        "Advanced reporting",
        "24/7 dedicated support",
        "Unlimited contacts",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false;
    }
  ];
  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "Sales Solutions Inc.",
      role: "VP of Sales",
      content: "Zion AI CRM Pro has transformed our sales process. The AI lead scoring helped us identify high-quality prospects and increased our conversion rate by 35%.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Maria Garcia",
      company: "Tech Startup",
      role: "Sales Manager",
      content: "The automated follow-up sequences are incredible. We've reduced manual work by 50% while improving our response rates significantly.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Wilson",
      company: "Enterprise Corp",
      role: "Director of Sales",
      content: "The predictive analytics give us insights we never had before. Our sales forecasting accuracy improved to 90% and we can make better strategic decisions.",
      rating: 5,
      avatar: "JW"
    }
  ];
  return (
    <React.Fragment /><Helmet /><title>Zion AI CRM Pro - Advanced Customer Relationship Management | Zion Tech Group</title>
        <meta;
          name="description"
          content="Transform your sales with Zion AI CRM Pro - AI-powered customer relationship management with lead scoring, automated follow-ups, and predictive analytics. Starting at $199/month."
        />
        <meta;
          name="keywords"
          content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales pipeline, customer journey mapping"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-crm-pro" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        </div><div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]" />
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" /><div /><div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6" /><Users className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">#1 AI CRM Platform 2024</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                    Zion AI CRM Pro</span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your sales process with AI-powered customer relationship management. 
                  Get intelligent lead scoring, automated follow-ups, and predictive analytics that drive results.</p>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8" /><Link;
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
                  >
                    Start Free Trial;
                    </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link;
                    to="/demo"
                    className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo;
                    </Link><Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {crmStats.map((stat, index) => (
                    </div><div key={index} className="text-center group" /><div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}</div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative" /><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20" /><div className="text-center mb-6" /><div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center" /><Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $199/month</h3>
                    <p className="text-gray-300">AI-powered CRM for your sales team</p>
                  </div>
                  <div className="space-y-4" /><div className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>AI lead scoring</span>
                    </div>
                    <div className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Automated follow-ups</span>
                    </div>
                    <div className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Predictive analytics</span>
                    </div>
                    <div className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Multi-channel communication</span>
                    </div>
                  </div>
                  <div className="mt-6" /><Link;
                      to="/contact"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now;
                      </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Powerful CRM Features</span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage customer relationships and drive sales growth</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div><div;
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                 /><div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {feature.title}</h3>
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}</p>
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      </div><div key={idx} className="flex items-center text-sm text-gray-300" /><div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Flexible CRM Plans</span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the CRM plan that fits your sales team's needs and budget</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                </div><div;
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular ;
                      ? 'border-green-500/50 shadow-green-500/25' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular</span>
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center" /><span className="text-4xl font-bold text-green-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      </div><div key={idx} className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link;
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started;
                    </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Trusted by Sales Teams</span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what sales professionals say about Zion AI CRM Pro</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                </div><div;
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                 /><div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center" /><div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}</div>
                    </div>
                    <div /><div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-4xl mx-auto text-center" /><div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sales?</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of sales teams already using Zion AI CRM Pro to drive growth and close more deals. 
                Start your free trial today.</p>
              </p>
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" /><div className="text-center" /><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3" /><Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-green-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center" /><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3" /><Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">+1 302 464 0950</p>
                </div>
                <div className="text-center" /><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3" /><Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-green-400 text-sm">364 E Main St STE 1008</p><br />Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /><Link;
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  Start Free Trial;
                  </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link;
                  to="/demo"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo</Link>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
} origin/cursor/analyze-improve-and-deploy-application-0ff3
;