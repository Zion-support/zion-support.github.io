'use client';
import { Link } from 'react-router-dom';
import {
  Palette,
  Brain,
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  Zap,
  Target,
  BarChart,
  MessageSquare,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Lock,
  Database,
  Cloud,
  Code,
  Smartphone,
  Settings,
  Search,
  Bot,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Globe2,
  Map,
  Navigation,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location
} from 'lucide-react';

export default function AIContentStudioPage() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Create high-quality content in seconds with our advanced AI writing assistant that understands your brand voice and tone.",
      icon: Brain,
      benefits: ["Multiple content types", "Brand voice training", "SEO optimization"]
    },
    {
      title: "Visual Design Tools",
      description: "Design stunning visuals with AI-powered tools that create professional graphics, infographics, and social media content.",
      icon: Palette,
      benefits: ["Auto-design generation", "Brand consistency", "Multiple formats"]
    },
    {
      title: "Content Planning",
      description: "Plan and organize your content strategy with AI-powered insights and automated content calendars.",
      icon: Calendar,
      benefits: ["Content calendar", "Trend analysis", "Optimal timing"]
    },
    {
      title: "Multi-format Support",
      description: "Create content for all platforms including blogs, social media, emails, and marketing materials.",
      icon: FileText,
      benefits: ["Blog posts", "Social media", "Email campaigns", "Press releases"]
    },
    {
      title: "Collaboration Tools",
      description: "Work seamlessly with your team using real-time collaboration features and approval workflows.",
      icon: Users,
      benefits: ["Real-time editing", "Comment system", "Approval workflows"]
    },
    {
      title: "Analytics & Insights",
      description: "Track content performance and get AI-powered recommendations for improvement.",
      icon: BarChart,
      benefits: ["Performance tracking", "AI recommendations", "ROI analysis"]
    }
  ];

  const contentTypes = [
    {
      name: "Blog Posts",
      icon: FileText,
      description: "Long-form articles optimized for SEO and engagement",
      features: ["SEO optimization", "Readability analysis", "Keyword research"]
    },
    {
      name: "Social Media",
      icon: MessageSquare,
      description: "Engaging posts for all social media platforms",
      features: ["Platform optimization", "Hashtag suggestions", "Visual content"]
    },
    {
      name: "Email Marketing",
      icon: Mail,
      description: "Professional email campaigns that convert",
      features: ["Subject line optimization", "Personalization", "A/B testing"]
    },
    {
      name: "Video Scripts",
      icon: Video,
      description: "Compelling scripts for video content",
      features: ["Story structure", "Call-to-action", "Engagement hooks"]
    },
    {
      name: "Product Descriptions",
      icon: ShoppingCart,
      description: "Persuasive product copy that drives sales",
      features: ["Feature highlighting", "Benefit focus", "Conversion optimization"]
    },
    {
      name: "Press Releases",
      icon: Globe2,
      description: "Professional press releases and announcements",
      features: ["News format", "Media targeting", "Distribution ready"]
    }
  ];

  const pricingTiers = [
    {
      name: "Creator",
      price: "$99",
      period: "/month",
      description: "Perfect for individual creators and small teams",
      features: [
        "Up to 10,000 words/month",
        "5 content types",
        "Basic templates",
        "Email support",
        "Standard analytics",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features: [
        "Up to 50,000 words/month",
        "All content types",
        "Advanced templates",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with high-volume content needs",
      features: [
        "Unlimited words",
        "Everything in Professional",
        "Custom content types",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Content Marketing Manager",
      company: "GrowthCorp",
      content: "AI Content Studio has revolutionized our content creation process. We now produce 5 x more content with better quality and consistency.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "James Wilson",
      role: "Creative Director",
      company: "BrandStudio",
      content: "The visual design tools are incredible. We can create professional graphics in minutes instead of hours, and the AI suggestions are spot-on.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Maria Garcia",
      role: "Social Media Manager",
      company: "DigitalFirst",
      content: "The social media content generation is a game-changer. Our engagement rates have increased by 200% since we started using AI Content Studio.",
      rating: 5,
      avatar: "MG"
    }
  ];

  const stats = [
    { number: "1 M+", label: "Content Pieces Created", icon: FileText },
    { number: "95%", label: "Time Saved", icon: Clock },
    { number: "300%", label: "Engagement Increase", icon: TrendingUp },
    { number: "24/7", label: "AI Assistance", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>{/* Hero Section */}<div className="relative py-20 overflow-hidden">{/* Animated Background */}</div>
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3 xl animate-pulse"></div><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3 xl animate-pulse delay-2000"></div><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Palette className="w-4 h-4" /></Palett>
              <span></span></<<<span>Complete</span></<<span>Content</span> Creation Suite<h1 className="text-6 xl md:text-8 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">AI Content Studio</h>
            <p className="text-2 xl md:text-3 xl text-gray-300 mb-4 font-light"></p></<<<p>Create</p>, Design, and Publish Content with AI<p className="text-lg text-gray-400 mb-8 max-w-3 xl mx-auto leading-relaxed">The ultimate content creation platform powered by AI. Generate high-quality content,</p></<<<p>design</p></<<p>stunning</p> visuals, and manage your entire content workflow in one place.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/25"
              ></Lin>
                <span className="relative z-10">Start Free Trial</spa>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRigh>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>

              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              ></Lin>
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >View Demo</Ey>
              </Eye>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">{stats.map((stat, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                    <stat.icon className="w-8 h-8 text-white" /></sta>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-3 xl md:text-4 xl font-bold text-white mb-2 neon-text"></div>{stat.number}<div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5 xl md:text-6 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"></h2></<<<h2>Powerful</h2></<<h2>Content</h2> Creation Features<p className="text-xl text-gray-300 max-w-3 xl mx-auto leading-relaxed"></p></<<<p>Everything</p></<<p>you</p> need to create, design, and publish amazing content<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2 xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2 xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" /></featur>
                  <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"></h>{feature.title}<p className="text-gray-400 mb-6 leading-relaxed"></p>{feature.description}<div className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{benefit}</CheckCircl>
                      </CheckCircle>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Types Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5 xl md:text-6 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text"></h2></<<<h2>Create</h2></<<h2>Any</h2> Type of Content<p className="text-xl text-gray-300 max-w-3 xl mx-auto leading-relaxed"></p></<<<p>From</p></<<p>blog</p> posts to social media, we support all your content needs<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{contentTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2 xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>
                  <type.icon className="w-8 h-8 text-white" /></typ>
                <h3 className="text-2 xl font-bold text-white mb-4">{type.name}</h>
                <p className="text-gray-400 mb-6 leading-relaxed"></p>{type.description}<div className="space-y-2">{type.features.map((feature, featureIndex) => (</div>
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5 xl md:text-6 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"></h2></<<<h2>Simple</h2></h2>, Transparent Pricing<p className="text-xl text-gray-300 max-w-3 xl mx-auto leading-relaxed"></p></<<<p>Choose</p></<<p>the</p> plan that fits your content creation needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6 xl mx-auto"></div>{pricingTiers.map((tier, index) => (<div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2 xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>{tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">Most Popular</spa>
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2 xl font-bold text-white mb-2"></h>{tier.name}<p className="text-gray-400 mb-6">{tier.description}</p>

                  <div className="mb-6"></div>
                    <span className="text-5 xl font-bold text-white"></spa>{tier.price}<span className="text-gray-400 text-lg"></spa>{tier.period}<Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >Get Started</Lin>
                    <ArrowRight className="w-4 h-4 ml-2" /></ArrowRigh>
                  <div className="space-y-4">{tier.features.map((feature, featureIndex) => (</div>
                    <div key={featureIndex} className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5 xl md:text-6 xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text"></h2></<<<h2>What</h2></<<h2>Our</h2> Customers Say<p className="text-xl text-gray-300 max-w-3 xl mx-auto leading-relaxed"></p></<<<p>Join</p></<<p>thousands</p> of content creators using AI Content Studio<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2 xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex justify-center mb-4"></div>{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}</Star><p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                </p>

                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">{testimonial.avatar}</div>
                  </div>
                  <div></div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4><p className="text-cyan-400 text-sm"></p>{testimonial.role}<p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center"></div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Content Creation?<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Join thousands of content creators already using AI Content Studio to produce amazing content faster.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/25"
              ></Lin>
                <span className="relative z-10">Start Your Free Trial</spa>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRigh>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>

              <div className="flex items-center space-x-6 text-gray-300"></div>
                <div className="flex items-center"></div>
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" /></Phon>
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 (302) 464-0950</a>
                  </a>
                </div>
                <div className="flex items-center"></div>
                  <Mail className="w-4 h-4 text-cyan-400 mr-2" /></Mai>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}