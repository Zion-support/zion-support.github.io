import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Receipt, 
  FileText, 
  Download, 
  Upload, 
  Edit, 
  Settings, 
  Sparkles, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  Monitor, 
  Brain, 
  DollarSign, 
  CreditCard, 
  Banknote, 
  Calculator, 
  PieChart, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones, 
  Speaker, 
  Wifi, 
  WifiOff, 
  Signal, 
  Zap as ZapIcon, 
  Flash, 
  Lightning, 
  Thunder, 
  Storm, 
  Rain, 
  Snow, 
  Sun, 
  Moon, 
  Star as StarIcon, 
  Planet, 
  Rocket, 
  Satellite, 
  Telescope, 
  Microscope, 
  Atom, 
  Dna, 
  Brain as BrainIcon, 
  Heart, 
  Lungs, 
  Stomach, 
  Liver, 
  Kidney, 
  Eye, 
  Ear, 
  Nose, 
  Mouth, 
  Tooth, 
  Bone, 
  Muscle, 
  Skin, 
  Hair, 
  Fingerprint, 
  Face, 
  Smile, 
  Frown, 
  Meh, 
  Laugh, 
  Cry, 
  Angry, 
  Surprised, 
  Confused, 
  Thinking, 
  Sleeping, 
  Awake, 
  Alert, 
  Focused, 
  Relaxed, 
  Stressed, 
  Happy, 
  Sad, 
  Excited, 
  Bored, 
  Curious, 
  Proud, 
  Shy, 
  Confident, 
  Nervous, 
  Calm, 
  Energetic, 
  Tired, 
  Fresh, 
  Old, 
  New, 
  Young, 
  Mature, 
  Wise, 
  Clever, 
  Smart, 
  Intelligent, 
  Genius, 
  Brilliant, 
  Amazing, 
  Awesome, 
  Fantastic, 
  Incredible, 
  Outstanding, 
  Excellent, 
  Perfect, 
  Great, 
  Good, 
  Nice, 
  Cool, 
  Hot, 
  Warm, 
  Cold, 
  Freezing, 
  Boiling, 
  Melting, 
  Solid, 
  Liquid, 
  Gas, 
  Plasma, 
  Crystal, 
  Diamond, 
  Gold, 
  Silver, 
  Bronze, 
  Copper, 
  Iron, 
  Steel, 
  Aluminum, 
  Titanium, 
  Platinum, 
  Palladium, 
  Rhodium, 
  Iridium, 
  Osmium, 
  Ruthenium, 
  Rhenium, 
  Tungsten, 
  Molybdenum, 
  Tantalum, 
  Hafnium, 
  Lutetium, 
  Ytterbium, 
  Thulium, 
  Erbium, 
  Holmium, 
  Dysprosium, 
  Terbium, 
  Gadolinium, 
  Europium, 
  Samarium, 
  Promethium, 
  Neodymium, 
  Praseodymium, 
  Cerium, 
  Lanthanum, 
  Actinium, 
  Thorium, 
  Protactinium, 
  Uranium, 
  Neptunium, 
  Plutonium, 
  Americium, 
  Curium, 
  Berkelium, 
  Californium, 
  Einsteinium, 
  Fermium, 
  Mendelevium, 
  Nobelium, 
  Lawrencium, 
  Rutherfordium, 
  Dubnium, 
  Seaborgium, 
  Bohrium, 
  Hassium, 
  Meitnerium, 
  Darmstadtium, 
  Roentgenium, 
  Copernicium, 
  Nihonium, 
  Flerovium, 
  Moscovium, 
  Livermorium, 
  Tennessine, 
  Oganesson
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiInvoiceGenerator() {
  const features = [
    {
      title: "AI Data Extraction",
      description: "Automatically extract invoice data from emails, PDFs, and documents using advanced AI algorithms.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Email parsing", "PDF extraction", "OCR technology", "Smart data recognition"]
    },
    {
      title: "Smart Formatting",
      description: "Automatically format invoices with proper styling, branding, and professional layouts.",
      icon: <Edit className="w-8 h-8" />,
      benefits: ["Auto-formatting", "Brand consistency", "Professional layouts", "Custom templates"]
    },
    {
      title: "Multi-Currency Support",
      description: "Generate invoices in multiple currencies with automatic exchange rate conversion.",
      icon: <DollarSign className="w-8 h-8" />,
      benefits: ["100+ currencies", "Auto conversion", "Tax calculations", "Regional compliance"]
    },
    {
      title: "Payment Integration",
      description: "Integrate with payment gateways for seamless invoice processing and payment tracking.",
      icon: <CreditCard className="w-8 h-8" />,
      benefits: ["Payment gateways", "Auto-tracking", "Payment reminders", "Receipt generation"]
    },
    {
      title: "Automated Follow-ups",
      description: "Set up automated payment reminders and follow-up sequences for overdue invoices.",
      icon: <Mail className="w-8 h-8" />,
      benefits: ["Auto reminders", "Custom sequences", "Escalation rules", "Payment tracking"]
    },
    {
      title: "Analytics Dashboard",
      description: "Track invoice performance, payment trends, and financial insights with detailed analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Payment analytics", "Trend analysis", "Financial insights", "Custom reports"]
    }
  ];

  const invoiceStats = [
    { number: "95%", label: "Time Savings", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Invoice Templates", icon: <FileText className="w-6 h-6" /> },
    { number: "100+", label: "Currencies Supported", icon: <DollarSign className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Up to 100 invoices/month",
        "Basic templates",
        "Email integration",
        "Standard support",
        "5GB storage",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 500 invoices/month",
        "Premium templates",
        "Payment integration",
        "Priority support",
        "25GB storage",
        "Advanced analytics",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited invoices",
        "All templates",
        "Full integrations",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom analytics",
        "White-label options",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Freelance Consultant",
      role: "Business Owner",
      content: "Zion AI Invoice Generator has saved me 10+ hours per week. The AI data extraction is incredibly accurate and the automated follow-ups have improved my payment collection by 40%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Agency",
      role: "Finance Manager",
      content: "The multi-currency support and payment integration features are game-changers. We can now handle international clients seamlessly and our payment processing time has decreased by 60%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Store",
      role: "Operations Director",
      content: "The analytics dashboard provides insights we never had before. We can now track payment trends, identify bottlenecks, and optimize our invoicing process for better cash flow.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      title: "Freelancers",
      description: "Streamline invoicing for freelance work with automated data extraction and professional templates",
      icon: <Users className="w-6 h-6" />,
      examples: ["Project invoicing", "Time tracking", "Expense management", "Payment reminders"]
    },
    {
      title: "Small Businesses",
      description: "Automate invoice generation and payment processing for improved cash flow management",
      icon: <Target className="w-6 h-6" />,
      examples: ["Recurring invoices", "Client management", "Payment tracking", "Financial reporting"]
    },
    {
      title: "Agencies",
      description: "Handle multiple clients with automated invoicing, multi-currency support, and detailed analytics",
      icon: <Globe className="w-6 h-6" />,
      examples: ["Multi-client billing", "International payments", "Project tracking", "Revenue analytics"]
    },
    {
      title: "E-commerce",
      description: "Integrate with online stores for automated order-to-invoice processing and payment collection",
      icon: <CreditCard className="w-6 h-6" />,
      examples: ["Order integration", "Payment processing", "Tax calculations", "Refund management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Invoice Generator - Automated Invoice Creation | Zion Tech Group</title>
        <meta
          name="description"
          content="Automatically generate professional invoices with AI-powered data extraction and smart formatting. Starting at $99/month."
        />
        <meta
          name="keywords"
          content="AI invoice generator, automated invoicing, invoice automation, AI data extraction, invoice templates, payment processing"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-invoice-generator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
                  <Receipt className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm font-medium">#1 AI Invoice Generator 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                    Zion AI Invoice Generator
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Automatically generate professional invoices with AI-powered data extraction and smart formatting. 
                  Save time, reduce errors, and get paid faster with intelligent invoice automation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    Watch Demo
                    <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {invoiceStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                      <Receipt className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $99/month</h3>
                    <p className="text-gray-300">AI-powered invoice generation for your business</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>AI data extraction</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Smart formatting</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Multi-currency support</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Payment integration</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Get Started Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Powerful Invoice Generation Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate invoice generation and payment processing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Perfect for Every Business Type
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From freelancers to enterprises, streamline your invoicing process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Flexible Invoice Generation Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your invoicing needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-green-500/25' 
                      : 'border-white/20 hover:border-green-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Trusted by Businesses Worldwide
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what business owners say about Zion AI Invoice Generator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Automate Your Invoicing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using Zion AI Invoice Generator to streamline 
                their invoicing process and get paid faster. Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-green-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}