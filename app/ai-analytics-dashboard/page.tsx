'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
    <React.Fragment>
      <Helmet>
        <title>Ai Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Ai Analytics Dashboard solutions by Zion Tech Group" />
      </Helmet>
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Shield,
  Brain,
  Settings,
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
  FileText,
  Search,
  Bot,
  Palette,
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
  TrendingDown,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location;
} from 'lucide-react';
'use client';
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {
    features.map((feature, index) => (
  }
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {
    feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
  }
                        <li>
                          <CheckCircle>

                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>
                Why Choose Our Solution?;
              </h2>
              <p>
                Proven results that drive business growth and efficiency;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {
    benefits.map((benefit, index) => (
  }
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>
                Ready to Get Started?;
              </h2>
              <p>
                Contact our experts to discuss your requirements and get started today.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button>
                  Contact Us;
                </button>
                <button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer>
    </>
  ),
}
export default AiAnalyticsDashboardPage;

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, Users, Zap, Shield, CheckCircle, Star, ArrowRight, Brain, Database, Target, Globe } from 'lucide-react';

const AIAnalyticsDashboard: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your business performance with live data updates and instant insights across all key metrics.",
      icon: Activity;
      benefits: ["Live data streaming", "Instant updates", "Real-time alerts"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting that helps you anticipate trends and make data-driven decisions.",
      icon: TrendingUp;
      benefits: ["Future forecasting", "Trend analysis", "Risk assessment"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and KPIs.",
      icon: BarChart3;
      benefits: ["Drag & drop builder", "Custom widgets", "Role-based views"]
    },
    {
      title: "Advanced Visualizations",
      description: "Transform complex data into stunning, interactive charts and graphs that tell your story.",
      icon: PieChart;
      benefits: ["Interactive charts", "3D visualizations", "Export options"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically and schedule them for delivery to stakeholders.",
      icon: FileText;
      benefits: ["Scheduled reports", "Email delivery", "Multiple formats"]
    },
    {
      title: "Data Integration",
      description: "Connect to 100+ data sources including databases, APIs, and cloud services.",
      icon: Database;
      benefits: ["100+ connectors", "Real-time sync", "Data transformation"]
    }
  ];

  const benefits = [
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 5x',
    'Improve accuracy with AI-powered insights',
    'Automate reporting and dashboards',
    'Scale analytics across all departments',
    'Integrate with existing systems seamlessly'
  ];

  const pricing = [
    {
      name: "Starter"
      price: "$199",
      period: "/month",
      description: "Perfect for small teams getting started with analytics",
      features: [
        "Up to 5 dashboards",
        "10 data sources",
        "Basic visualizations",
        "Email support",
        "Standard reports",
        "Mobile app access"
      ],
      popular: false;
    },
    {
      name: "Professional"
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Unlimited dashboards",
        "50 data sources",
        "Advanced visualizations",
        "Priority support",
        "Custom reports",
        "API access",
        "Team collaboration",
        "Advanced analytics"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with complex data requirements",
      features: [
        "Everything in Professional",
        "Unlimited data sources",
        "Custom visualizations",
        "24/7 dedicated support",
        "White-label options",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: "David Kim"
      role: "Data Analyst",
      company: "DataCorp Solutions",
      content: "The AI Analytics Dashboard has transformed how we analyze our data. The predictive analytics feature alone has helped us identify trends 3 months in advance.",
      rating: 5;
      avatar: "DK"},
    {
      name: "Lisa Wang",
      role: "Business Intelligence Manager",
      company: "GrowthTech Inc",
      content: "The custom dashboard builder is incredibly intuitive. We created our entire reporting suite in just one week, and the automated reports save us 20 hours per month.",
      rating: 5;
      avatar: "LW"},
    {
      name: "Robert Johnson"
      role: "CEO",
      company: "InnovateLabs",
      content: "The real-time analytics have given us unprecedented visibility into our business operations. We can now make decisions based on live data instead of waiting for reports.",
      rating: 5;
      avatar: "RJ"}
  ];

  const stats = [
    { number: "10,000+", label: "Dashboards Created", icon: BarChart3 },
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "50%", label: "Faster Insights", icon: Clock },
    { number: "24/7", label: "AI Monitoring", icon: Brain }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        {/* Animated Background */}
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        {/* Animated Background */}
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <BarChart3 className="w-4 h-4" />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div><div className="relative py-20 overflow-hidden">{/* Animated Background */}</div>
        <div className="absolute inset-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div><div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div><div className="relative z-10 container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <BarChart3 className="w-4 h-4" />
              <span>AI-Powered Analytics</span><h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">AI Analytics Dashboard</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Transform Data into Actionable Insights with AI</p><p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">Unlock the power of your data with our advanced AI analytics platform.</p>
              Get real-time insights, predictive analytics, and automated reporting that drives business growth.</p>
              <span>AI-Powered Analytics</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>

            <h1 className="text-6xl md: text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced"></h1>
              AI Analytics Dashboard;
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"></p>
              Transform Data into Actionable Insights with AI;
            </p>
,
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">,
              Unlock the power of your data with our advanced AI analytics platform.,
              Get real-time insights, predictive analytics, and automated reporting that drives business growth.
            </p>
              <span>AI-Powered Analytics</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">AI Analytics Dashboard</h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Transform Data into Actionable Insights with AI</p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">Unlock the power of your data with our advanced AI analytics platform.
              Get real-time insights, predictive analytics, and automated reporting that drives business growth.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
      ></Link>
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link;
                to="/demo"
                className="group relative inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></Link>
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo;
              </Link>
            </div>,
          </div>)
)
          {/* Stats */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-20">),
            {stats.map((stat, index) => (
              <div key={index} className="text-center group"></div>
                <div className="relative mb-4"></div>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                    <stat.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>,
                </div>,
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div><div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div><div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"></h2>
              Powerful Analytics Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
              Discover how our AI-powered analytics can transform your business intelligence;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">,
                    <feature.icon className="w-8 h-8 text-white" />,
                  </div>,
,
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">,
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed"></p>
                    {feature.description}
                  </p>

                  <div className="space-y-2"></div>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">Powerful Analytics Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Discover how our AI-powered analytics can transform your business intelligence</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div><div className="relative z-10"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{feature.title}</h3><p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p><div className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300"></div>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">Simple, Transparent Pricing</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Choose the plan that fits your analytics needs. All plans include our core AI features.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingTiers.map((tier, index) => (</div><div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}>{tier.popular && (</div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">Most Popular</span>
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">,
              Simple, Transparent Pricing;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
              Choose the plan that fits your analytics needs. All plans include our core AI features.
            </p>
          </div>
        </section>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${tier.popular ? 'ring-2 ring-cyan-400/30' : ''}`}></div>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full"></span>
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3><p className="text-gray-400 mb-6">{tier.description}</p>

                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>

                  <Link;
                  <div className="mb-6"></div>
                    <span className="text-5xl font-bold text-white">{tier.price}</span><span className="text-gray-400 text-lg">{tier.period}</span><Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'}
                    }`}
                  ></Link>
                    Get Started;
                    <ArrowRight className="w-4 h-4 ml-2" />
                  <div className="space-y-4">{tier.features.map((feature, featureIndex) => (</div>
                    <div key={featureIndex} className="flex items-center text-gray-300"></div>
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
            <h2 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text"></h2>
              What Our Customers Say;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"></p>
              Join thousands of businesses using AI Analytics Dashboard to make data-driven decisions;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover: bg-white/10 transition-all duration-300">,
                <div className="flex justify-center mb-4">,
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 leading-relaxed"></p>
                  "{testimonial.content}"
      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">What Our Customers Say</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Join thousands of businesses using AI Analytics Dashboard to make data-driven decisions</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"></div>
                <div className="flex justify-center mb-4">{[...Array(5)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                </p>

                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">{testimonial.avatar}</div>
                  </div>
                  <div></div>
                    <h4 className="text-white font-bold">{testimonial.name}<p className="text-cyan-400 text-sm">{testimonial.role}</p><p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text"></h2>
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Join thousands of businesses already using AI Analytics Dashboard to unlock insights and drive growth.
            </p>
          </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link;
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Ready to Transform Your Data Analytics?</h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join thousands of businesses already using AI Analytics Dashboard to unlock insights and drive growth.</p>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <Link
                to="/contact"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
      ></Link>
                <span className="relative z-10">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </Link>

              <div className="flex items-center space-x-6 text-gray-300"></div>
                <div className="flex items-center"></div>
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors"></a>
                    +1 (302) 464-0950;
                  </a>
                </div>
                <div className="flex items-center"></div>
                  <Mail className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors"></a>
                    kleber@ziontechgroup.com;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
    </div>);
};

import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AIAnalyticsDashboard() {

  return (
    <>
      <title>AI Analytics Dashboard - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AI Analytics Dashboard</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI analytics dashboard services coming soon.</p>

              Contact Us

  );

export default AIAnalyticsDashboard;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AianalyticsdashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Professional ai analytics dashboard services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Analytics Dashboard</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai analytics dashboard services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
