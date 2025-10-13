import React from 'react';
import { Link } from "react-router-dom";
import { 
  FileText, 
  Download, 
  Send, 
  Calculator, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Receipt,
  CreditCard,
  DollarSign,
  Zap,
  Globe,
  Users,
  Award,
  BarChart3,
  Shield,
  Mail,
  Smartphone,
  Settings,
  Palette,
  Layers,
  Target,
  TrendingUp,
  Building,
  User,
  Calendar,
  Plus,
  Edit,
  Trash2,
  Eye,
  Share2
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data and client information",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Data Extraction",
      description: "Extract billing information from emails, contracts, and project management tools",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multiple Payment Methods",
      description: "Accept payments via credit card, bank transfer, PayPal, and cryptocurrency",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Follow-ups",
      description: "Send automatic payment reminders and follow-up emails to clients",
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Custom Branding",
      description: "Apply your brand colors, logos, and styling to all invoices automatically",
      icon: <Palette className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Multi-Currency Support",
      description: "Generate invoices in 150+ currencies with real-time exchange rates",
      icon: <Globe className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Freelancer",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Email delivery",
        "Payment tracking",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Small Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small businesses and agencies",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Multi-payment methods",
        "Automated follow-ups",
        "Advanced reporting",
        "Custom branding",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations and accounting firms",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "All payment methods",
        "Advanced automation",
        "Comprehensive reporting",
        "White-label options",
        "Dedicated support",
        "Full API access",
        "Team collaboration",
        "Integration with 50+ tools"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Freelance Designer",
      role: "Creative Director",
      content: "Zion AI Invoice Generator has saved me hours every week. The AI automatically creates invoices from my project data, and payments come in faster than ever.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Digital Agency",
      role: "Operations Manager",
      content: "The automated follow-up system has improved our payment collection rate by 40%. Clients love the professional invoices and easy payment options.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Consulting Firm",
      role: "Managing Partner",
      content: "The multi-currency support and integration with our accounting software has streamlined our entire billing process. Highly recommended!",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "98%", label: "Payment Success Rate", icon: <CreditCard className="w-6 h-6" /> },
    { number: "150+", label: "Currencies Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "4.8/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Invoice Generator - Automated Invoice Creation & Payment Processing | Zion Tech Group"
        description="Create professional invoices automatically with AI. Accept payments, send reminders, and manage billing effortlessly. Start your free trial today!"
        keywords="AI invoice generator, automated invoicing, payment processing, billing software, invoice templates, payment reminders"
        canonical="https://ziontechgroup.com/zion-ai-invoice-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Zap className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">#1 AI Invoice Generator 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400">
              AI Invoice Generator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Automate your invoicing process with AI. Generate professional invoices, accept payments, 
            and get paid faster with intelligent automation and smart follow-ups.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Receipt className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Smart Invoice Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to automate your billing process and get paid faster.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include core invoicing features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Invoice Generator
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Invoicing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using AI to streamline their billing process. 
            Start your free trial today and get paid faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Receipt className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;