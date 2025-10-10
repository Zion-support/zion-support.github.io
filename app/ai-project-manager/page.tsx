import {Link } from 'react-router-dom';
import {BarChart3,
  Users,
  Calendar,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Shield,
  Brain,
  Settings,
  MessageSquare,
  FileText,
  PieChart,
  Activity,
  AlertTriangle,
  CheckSquare,
  Play,
  Download,
  Share2,
  Bell,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  RefreshCw,
  Save,
  Upload,
  Copy,
  ExternalLink,
  Phone,
  Mail,
  MapPin;
} from 'lucide-react';

export default function AIProjectManagerPro() {const features = [
    {
      title: "Smart Scheduling",
      description: "AI-powered project scheduling that automatically optimizes timelines based on team capacity, dependencies, and historical data.",
      icon: Calendar;,
    benefits: ["40% faster planning", "95% accuracy", "Real-time updates"]
    },
    {title: "Risk Prediction",
      description: "Advanced machine learning algorithms that identify potential project risks before they become issues.",
      icon: AlertTriangle;,
    benefits: ["Early warning system", "Risk mitigation", "Proactive management"]
    },
    {title: "Team Optimization",
      description: "Intelligent resource allocation that matches the right people to the right tasks at the right time.",
      icon: Users;,
    benefits: ["Optimal team formation", "Skill matching", "Workload balancing"]
    },
    {title: "Progress Tracking",
      description: "Real-time project monitoring with AI-driven insights and automated progress reporting.",
      icon: Activity;,
    benefits: ["Live dashboards", "Automated reports", "Performance metrics"]
    },
    {title: "Predictive Analytics",
      description: "Data-driven insights that help you make informed decisions and predict project outcomes.",
      icon: TrendingUp;,
    benefits: ["Future forecasting", "Trend analysis", "Data visualization"]
    },
    {title: "Automated Workflows",
      description: "Streamline repetitive tasks with AI-powered automation that adapts to your team's workflow.",
      icon: Settings;,
    benefits: ["Task automation", "Process optimization", "Time savings"]
    }
  ];

  const pricingTiers = [
    {name: "Starter",
    price: "$99",
      period: "/month",
      description: "Perfect for small teams and individual projects",
      features: [,
        "Up to 5 projects",
        "10 team members",
        "Basic AI scheduling",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false;
    },
    {name: "Professional",
    price: "$199",
      period: "/month",
      description: "Ideal for growing teams and complex projects",
      features: [,
        "Unlimited projects",
        "50 team members",
        "Advanced AI features",
        "Custom reporting",
        "Priority support",
        "API access",
        "Integrations",
        "Advanced analytics"
      ],
      popular: true;
    },
    {name: "Enterprise",
    price: "$399",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [,
        "Everything in Professional",
        "Unlimited team members",
        "Custom AI training",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Solutions",
      content: "AI Project Manager Pro has revolutionized how we manage our projects. The smart scheduling alone saved us 20 hours per week, and the risk prediction feature prevented 3 major project delays.",
      rating: 5;,
    avatar: "SJ",
    },
    {name: "Michael Chen",
      role: "CTO",
      company: "InnovateLab",
      content: "The team optimization feature is incredible. It automatically assigns tasks based on team members' skills and availability, resulting in 35% faster project completion times.",
      rating: 5;,
    avatar: "MC",
    },
    {name: "Emily Rodriguez",
      role: "Operations Director",
      company: "Global Dynamics",
      content: "The predictive analytics have been a game-changer. We can now forecast project outcomes with 90% accuracy, helping us make better strategic decisions.",
      rating: 5;,
    avatar: "ER",
    }
  ];

  const stats = [
    {number: "500+", label: "Active Projects", icon: BarChart3 },
    {number: "95%", label: "Success Rate", icon: CheckCircle },
    {number: "40%", label: "Time Saved", icon: Clock },
    {number: "24/7", label: "AI Support", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" >{/* Hero Section */}<div className="relative py-20 overflow-hidden" >{/* Animated Background */}</div>
        <div className="absolute inset-0" >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" ><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000" ><div className="relative z-10 container mx-auto px-4" >
          <div className="text-center mb-16" >
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6" >
              <BarChart3 className="w-4 h-4" />
              <span>Most Popular Micro SAAS<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced" >AI Project Manager Pro</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light" >Intelligent Project Management with AI-Powered Automation<p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed" >Transform your project management with our advanced AI platform. Get smart scheduling,</p>
              risk prediction, team optimization, and automated workflows that adapt to your team's needs.</p>
              <span>Most Popular Micro SAAS</span>
            </div>

            <h1 className="text-6xl md: text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced" >
              AI Project Manager Pro;
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light" >
              Intelligent Project Management with AI-Powered Automation;)
            </p>)
,)
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed" >,)
              Transform your project management with our advanced AI platform. Get smart scheduling),
              risk prediction, team optimization, and automated workflows that adapt to your team's needs.
            </p>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center" >
              <Link;
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25" >
                <span className="relative z-10" >Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </Link>

              <Link;
                to="/demo"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105" >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >Watch Demo</Play>
              </Play>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20" >{stats.map((stat, index) => (</div>
              <div key={index} className="text-center group" ></div>
                <div className="relative mb-4" ></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" ></div>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" ><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text" >{stat.number}<div className="text-gray-400 font-medium" >{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" ></div><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text" >{stat.number}</div><div className="text-gray-400 font-medium" >{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20" >
        <div className="container mx-auto px-4" >
          <div className="text-center mb-16" >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text" >Powerful AI Features<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" >Discover how our AI-powered features can transform your project management workflow<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >{features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10" >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" ><div className="relative z-10" >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6" >
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors" >{feature.title}<p className="text-gray-400 mb-6 leading-relaxed" >{feature.description}<div className="space-y-2" >{feature.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300" >
      <div className="py-20" ></div>
        <div className="container mx-auto px-4" ></div>
          <div className="text-center mb-16" ></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text" >Powerful AI Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" >Discover how our AI-powered features can transform your project management workflow</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >{features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10" ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" ></div><div className="relative z-10" ></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6" ></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors" >{feature.title}</h3><p className="text-gray-400 mb-6 leading-relaxed" >{feature.description}</p><div className="space-y-2" >{feature.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300" ></div>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" >
        <div className="container mx-auto px-4" >
          <div className="text-center mb-16" >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text" >Simple, Transparent Pricing<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" >Choose the plan that fits your team size and project needs. All plans include our core AI features.<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" >{pricingTiers.map((tier, index) => (<div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>{tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2" >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full" >Most Popular</span>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text" >,
              Simple, Transparent Pricing;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" >
              Choose the plan that fits your team size and project needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto" >,
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2" >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full" >
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8" ></div>
                  <h3 className="text-2xl font-bold text-white mb-2" >{tier.name}</h3><p className="text-gray-400 mb-6" >{tier.description}</p>

                  <div className="mb-6" >
                    <span className="text-5xl font-bold text-white" >{tier.price}<span className="text-gray-400 text-lg" >{tier.period}<Link
                  <div className="mb-6" ></div>
                    <span className="text-5xl font-bold text-white" >{tier.price}</span><span className="text-gray-400 text-lg" >{tier.period}</span><Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700',}
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'}
                    }`}
                  >Get Started</Link>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  <div className="space-y-4" >{tier.features.map((feature, featureIndex) => (</div>
                    <div key={featureIndex} className="flex items-center text-gray-300" ></div>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20" >
        <div className="container mx-auto px-4" >
          <div className="text-center mb-16" >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text" >What Our Customers Say<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" >Join thousands of project managers who have transformed their workflow with AI Project Manager Pro<div className="grid grid-cols-1 md:grid-cols-3 gap-8" >{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300" >
                <div className="flex justify-center mb-4" >{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 italic mb-6 leading-relaxed" >"{testimonial.content}"</p>
      <div className="py-20" ></div>
        <div className="container mx-auto px-4" ></div>
          <div className="text-center mb-16" ></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text" >What Our Customers Say</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" >Join thousands of project managers who have transformed their workflow with AI Project Manager Pro</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8" >{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300" ></div>
                <div className="flex justify-center mb-4" >{[...Array(5)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 italic mb-6 leading-relaxed" >"{testimonial.content}"</p>
                </p>

                <div className="flex items-center" ></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" >{testimonial.avatar}</div>
                  </div>
                  <div></div>
                    <h4 className="text-white font-bold" >{testimonial.name}<p className="text-cyan-400 text-sm" >{testimonial.role}</p><p className="text-gray-400 text-sm" >{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" >
        <div className="container mx-auto px-4" >
          <div className="text-center" >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text" >Ready to Transform Your Project Management?<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" >Join thousands of teams already using AI Project Manager Pro to achieve unprecedented efficiency and success.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" >
              <Link;
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" ></div>
        <div className="container mx-auto px-4" ></div>
          <div className="text-center" ></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text" >Ready to Transform Your Project Management?</h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" >Join thousands of teams already using AI Project Manager Pro to achieve unprecedented efficiency and success.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" ></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25" >
                <span className="relative z-10" >Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </Link>

              <div className="flex items-center space-x-6 text-gray-300" ></div>
                <div className="flex items-center" ></div>
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors" >+1 (302) 464-0950</a>
                  </a>
                </div>
                <div className="flex items-center" ></div>
                  <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors" >kleber@ziontechgroup.com</a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    </div>,
  );
};
