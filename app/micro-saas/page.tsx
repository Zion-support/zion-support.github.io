import { ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Bot, Mail, Smartphone, Users, Award, Star, CheckCircle, TrendingUp, Lock, Clock, Sparkles, Target, Code, FileText, Database, Wifi, Smartphone as Phone, Settings, Monitor, Server, Cpu, HardDrive, Network, Eye, Search, Filter, Download, Upload, Share, Link, Bell, Calendar, MapPin, CreditCard, DollarSign, PieChart, LineChart, Activity, Layers, Globe2, Smartphone2, Laptop, Tablet, Watch, Headphones, Camera, Mic, Video, Image, Music, File, Folder, Archive, Trash2, Edit, Save, Copy, Cut, Paste, Undo, Redo, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus, Divide, Equal, Infinity, Zap as Lightning, Flame, Snowflake, Sun, Moon, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Battery, Wifi as WifiIcon, Bluetooth, Radio, Tv, Gamepad2, Controller, Joystick, Mouse, Keyboard, Printer, Scanner, Fax, Projector, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, List, Grid, Layout, Sidebar, Menu, MoreHorizontal, MoreVertical, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ChevronsUp, ChevronsDown, ChevronsLeft, ChevronsRight, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, ArrowUpRight, ArrowDownRight, ArrowDownLeft, ArrowUpLeft, Move, Rotate3D, Scale, Crop, Focus, Palette, Brush, Eraser, Pen, Pencil, Highlighter, Marker, Paintbrush, Spray, Stamp, Sticker, Smile, Frown, Meh, Heart, Star as StarIcon, ThumbsUp, ThumbsDown, Clap, PartyPopper, Gift, Cake, Coffee, Pizza, Hamburger, Apple, Carrot, Leaf, Tree, Flower, Sunflower, Rose, Tulip, Cherry, Grape, Lemon, Orange, Strawberry, Watermelon, Banana, Pineapple, Mango, Avocado, Broccoli, Corn, Eggplant, Mushroom, Onion, Pepper, Potato, Tomato, Cucumber, Lettuce, Spinach, Kale, Arugula, Basil, Cilantro, Mint, Oregano, Parsley, Rosemary, Sage, Thyme, Cinnamon, Ginger, Garlic, Onion as OnionIcon, Salt, Sugar, Flour, Oil, Butter, Milk, Cheese, Yogurt, IceCream, Bread, Croissant, Bagel, Muffin, Cookie, Cake as CakeIcon, Pie, Donut, Pretzel, Cracker, Chips, Popcorn, Nuts, Seeds, Honey, Jam, Jelly, Syrup, Vinegar, SoySauce, Ketchup, Mustard, Mayo, Ranch, BBQ, HotSauce, Salsa, Guacamole, Hummus, Tzatziki, Pesto, Alfredo, Marinara, Bolognese, Carbonara, Pesto as PestoIcon, Arrabbiata, AglioEOlio, CacioEPepe, Amatriciana, Puttanesca, Vongole, FruttiDiMare, QuattroFormaggi, Margherita, Pepperoni, Hawaiian, Veggie, Supreme, MeatLovers, BBQChicken, Buffalo, Buffalo as BuffaloIcon, Buffalo as BuffaloIcon2, Buffalo as BuffaloIcon3, Buffalo as BuffaloIcon4, Buffalo as BuffaloIcon5, Buffalo as BuffaloIcon6, Buffalo as BuffaloIcon7, Buffalo as BuffaloIcon8, Buffalo as BuffaloIcon9, Buffalo as BuffaloIcon10 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated reporting. Transform your data into actionable insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29/month",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reports",
        "API integrations",
        "Mobile app access",
        "White-label options"
      ],
      benefits: [
        "40% faster decision making",
        "Reduce reporting time by 80%",
        "Increase revenue by 25%",
        "24/7 automated insights"
      ],
      category: "Analytics",
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      popular: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection, automated incident response, and compliance monitoring for businesses of all sizes.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49/month",
      features: [
        "AI threat detection",
        "Automated response",
        "Compliance reporting",
        "24/7 monitoring",
        "Vulnerability scanning",
        "Security training"
      ],
      benefits: [
        "99.9% threat detection rate",
        "Reduce security incidents by 90%",
        "Compliance automation",
        "Real-time alerts"
      ],
      category: "Security",
      color: "from-red-500 to-orange-500",
      link: "/zion-security-shield",
      popular: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and advanced file management capabilities.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9/month",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File versioning",
        "Collaboration tools",
        "Mobile sync",
        "API access"
      ],
      benefits: [
        "99.99% uptime guarantee",
        "Unlimited storage",
        "Advanced security",
        "Easy collaboration"
      ],
      category: "Storage",
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-ai-chatbot",
      name: "Zion AI Chatbot",
      description: "Intelligent customer support chatbot with natural language processing, multi-language support, and seamless human handoff.",
      icon: <Bot className="w-8 h-8" />,
      price: "$19/month",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Human handoff",
        "Custom training",
        "Analytics dashboard",
        "Integration APIs"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "24/7 availability",
        "Instant responses",
        "Customer satisfaction boost"
      ],
      category: "Customer Support",
      color: "from-purple-500 to-pink-500",
      link: "/zion-ai-chatbot"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation with brand consistency.",
      icon: <FileText className="w-8 h-8" />,
      price: "$39/month",
      features: [
        "AI content generation",
        "Brand voice training",
        "SEO optimization",
        "Multi-format output",
        "Plagiarism detection",
        "Content calendar"
      ],
      benefits: [
        "10x content production",
        "Consistent brand voice",
        "SEO optimization",
        "Time savings"
      ],
      category: "Content",
      color: "from-indigo-500 to-purple-500",
      link: "/zion-content-studio"
    },
    {
      id: "zion-project-manager",
      name: "Zion Project Manager",
      description: "Advanced project management tool with AI-powered scheduling, resource optimization, and automated progress tracking.",
      icon: <Target className="w-8 h-8" />,
      price: "$24/month",
      features: [
        "AI scheduling",
        "Resource optimization",
        "Progress tracking",
        "Team collaboration",
        "Time tracking",
        "Reporting tools"
      ],
      benefits: [
        "30% faster delivery",
        "Better resource utilization",
        "Improved team productivity",
        "Real-time insights"
      ],
      category: "Project Management",
      color: "from-orange-500 to-red-500",
      link: "/zion-project-manager"
    },
    {
      id: "zion-email-automation",
      name: "Zion Email Automation",
      description: "Intelligent email marketing platform with AI-driven personalization, automated campaigns, and advanced analytics.",
      icon: <Mail className="w-8 h-8" />,
      price: "$34/month",
      features: [
        "AI personalization",
        "Automated campaigns",
        "A/B testing",
        "Advanced analytics",
        "List management",
        "Template library"
      ],
      benefits: [
        "3x higher open rates",
        "Automated workflows",
        "Better engagement",
        "ROI tracking"
      ],
      category: "Marketing",
      color: "from-teal-500 to-cyan-500",
      link: "/zion-email-automation"
    },
    {
      id: "zion-inventory-manager",
      name: "Zion Inventory Manager",
      description: "Smart inventory management system with AI demand forecasting, automated reordering, and real-time tracking.",
      icon: <Database className="w-8 h-8" />,
      price: "$44/month",
      features: [
        "AI demand forecasting",
        "Automated reordering",
        "Real-time tracking",
        "Multi-location support",
        "Barcode scanning",
        "Analytics dashboard"
      ],
      benefits: [
        "Reduce stockouts by 85%",
        "Optimize inventory levels",
        "Cost savings",
        "Better forecasting"
      ],
      category: "Inventory",
      color: "from-amber-500 to-yellow-500",
      link: "/zion-inventory-manager"
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "AI-powered social media management platform with content scheduling, engagement tracking, and performance analytics.",
      icon: <Share className="w-8 h-8" />,
      price: "$29/month",
      features: [
        "Content scheduling",
        "Engagement tracking",
        "Performance analytics",
        "Multi-platform support",
        "Hashtag optimization",
        "Competitor analysis"
      ],
      benefits: [
        "Save 5 hours per week",
        "Increase engagement by 40%",
        "Better content strategy",
        "Automated posting"
      ],
      category: "Social Media",
      color: "from-pink-500 to-rose-500",
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-finance-tracker",
      name: "Zion Finance Tracker",
      description: "Comprehensive financial management tool with AI-powered insights, expense tracking, and automated budgeting.",
      icon: <DollarSign className="w-8 h-8" />,
      price: "$39/month",
      features: [
        "Expense tracking",
        "AI insights",
        "Automated budgeting",
        "Bill reminders",
        "Investment tracking",
        "Tax preparation"
      ],
      benefits: [
        "Better financial control",
        "Automated insights",
        "Time savings",
        "Improved budgeting"
      ],
      category: "Finance",
      color: "from-emerald-500 to-green-500",
      link: "/zion-finance-tracker"
    },
    {
      id: "zion-hr-assistant",
      name: "Zion HR Assistant",
      description: "AI-powered human resources management with automated screening, employee analytics, and performance tracking.",
      icon: <Users className="w-8 h-8" />,
      price: "$49/month",
      features: [
        "Automated screening",
        "Employee analytics",
        "Performance tracking",
        "Time off management",
        "Payroll integration",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce hiring time by 50%",
        "Better candidate matching",
        "Improved retention",
        "Automated processes"
      ],
      category: "Human Resources",
      color: "from-violet-500 to-purple-500",
      link: "/zion-hr-assistant"
    },
    {
      id: "zion-api-gateway",
      name: "Zion API Gateway",
      description: "Enterprise API management platform with rate limiting, authentication, monitoring, and automated documentation.",
      icon: <Network className="w-8 h-8" />,
      price: "$59/month",
      features: [
        "Rate limiting",
        "Authentication",
        "API monitoring",
        "Auto documentation",
        "Version control",
        "Analytics dashboard"
      ],
      benefits: [
        "Secure API access",
        "Better performance",
        "Easy management",
        "Developer friendly"
      ],
      category: "API Management",
      color: "from-cyan-500 to-blue-500",
      link: "/zion-api-gateway"
    }
  ];

  const categories = [
    "All",
    "Analytics",
    "Security",
    "Storage",
    "Customer Support",
    "Content",
    "Project Management",
    "Marketing",
    "Inventory",
    "Social Media",
    "Finance",
    "Human Resources",
    "API Management"
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including analytics, security, content creation, project management, and more. Ready-to-use software for immediate deployment."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business tools, analytics, security, content creation, project management, marketing automation, inventory management, API management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}SAAS
              </span>
              <br />
              Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to security, content creation to project management - we have everything you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose from our comprehensive suite of ready-to-use software solutions. 
                Each solution is designed to solve specific business challenges with immediate deployment.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                      POPULAR
                    </div>
                  )}

                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2">/month</span>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="text-xs text-gray-300 flex items-center">
                            <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={service.link}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm group-hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm group-hover:scale-105"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
