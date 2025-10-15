import { Link } from 'react-router-dom';
import {ArrowRight, Award, Calculator, CheckCircle, Receipt, Send, Sparkles, TrendingUp, X} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import {Users, FileText, DollarSign} from 'lucide-react';
import { Shield, Clock } from 'lucide-react';
const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from client data, project details, and billing information using advanced AI.",
      icon: <FileText className="w-6 h-6" />,
      stats: "95% time saved"
    },
    {
      title: "Smart Data Extraction",
      description: "Automatically extract billing information from emails, contracts, and project management tools to populate invoices.",
      icon: <Calculator className="w-6 h-6" />,
      stats: "Auto-populate fields"
    },
    {
      title: "Multi-Currency Support",
      description: "Create invoices in 150+ currencies with real-time exchange rates and automatic tax calculations.",
      icon: <DollarSign className="w-6 h-6" />,
      stats: "150+ currencies"
    },
    {
      title: "Automated Follow-ups",
      description: "Set up automated payment reminders and follow-up sequences to improve collection rates and cash flow.",
      icon: <Send className="w-6 h-6" />,
      stats: "40% faster payments"
    }
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices/month",
        "Basic templates",
        "PDF generation",
        "Email delivery",
        "Payment tracking",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "200 invoices/month",
        "Premium templates",
        "Custom branding",
        "Multi-currency support",
        "Automated reminders",
        "Advanced reporting",
        "API access",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations and accounting firms",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "White-label solution",
        "Advanced automation",
        "Team collaboration",
        "Advanced analytics",
        "24/7 support",
        "Custom integrations",
        "Bulk operations",
        "Compliance tools"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Freelance Designer",
      role: "Owner",
      content: "Zion AI Invoice Generator has saved me hours every week. The automatic data extraction is incredible and the invoices look professional.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Creative Agency",
      role: "Finance Manager",
      content: "We've reduced our invoice processing time by 80%. The automated reminders have significantly improved our payment collection rates.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Consulting Firm",
      role: "CEO",
      content: "The multi-currency support and tax calculations are spot-on. Our international clients love the professional invoices we generate.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const useCases = [
    {
      title: "Freelancers & Consultants",
      description: "Streamline billing for project-based work with automated invoice generation",
      icon: <Users className="w-8 h-8" />,
      examples: ["Project Invoices", "Hourly Billing", "Recurring Services", "Expense Tracking"]
    },
    {
      title: "Small Businesses",
      description: "Professional invoicing with automated follow-ups and payment tracking",
      icon: <TrendingUp className="w-8 h-8" />,
      examples: ["Product Sales", "Service Billing", "Subscription Management", "Payment Reminders"]
    },
    {
      title: "Agencies & Studios",
      description: "Manage multiple clients with branded invoices and detailed reporting",
      icon: <Award className="w-8 h-8" />,
      examples: ["Client Billing", "Project Tracking", "Team Collaboration", "Financial Reports"]
    },
    {
      title: "E-commerce & Retail",
      description: "Automated order-to-invoice workflow with inventory integration",
      icon: <Shield className="w-8 h-8" />,
      examples: ["Order Processing", "Inventory Management", "Tax Calculations", "Multi-location Billing"]
    }
  ];

  const integrations = [
    { name: "QuickBooks", logo: "QB" },
    { name: "Xero", logo: "X" },
    { name: "FreshBooks", logo: "FB" },
    { name: "Stripe", logo: "S" },
    { name: "PayPal", logo: "PP" },
    { name: "Square", logo: "SQ" },
    { name: "HubSpot", logo: "HS" },
    { name: "Salesforce", logo: "SF" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Invoice Generator - Automated Professional Invoicing | Zion Tech Group"
        description="Generate professional invoices automatically with AI. Multi-currency support, automated follow-ups, and seamless integrations. Start billing smarter today!"
        keywords="AI invoice generator, automated invoicing, professional invoices, billing software, invoice automation, payment tracking, financial management"
        canonical="https://ziontechgroup.com/zion-ai-invoice-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 neon-border">
            <Sparkles className="w-5 h-5 text-green-400 mr-2 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">#1 AI Invoice Generator 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Zion AI Invoice Generator
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Generate professional invoices automatically with AI-powered data extraction and smart automation. 
            <span className="text-green-400 font-semibold"> Save 95% of your billing time and get paid faster.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Start Creating Invoices
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
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">50,000+</div>
              <div className="text-gray-300 text-xs md:text-sm">Invoices Generated</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">2 min</div>
              <div className="text-gray-300 text-xs md:text-sm">Average Creation Time</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">8,000+</div>
              <div className="text-gray-300 text-xs md:text-sm">Happy Customers</div>
            </div>
            <div className="text-center group data-stream">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Faster Payments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Smart Invoice Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create, send, and track professional invoices with AI-powered automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50 cyber-grid-enhanced">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From freelancers to enterprises, our AI invoice generator adapts to your billing needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a complete billing workflow.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <FuturisticCard key={index} className="group hover:scale-110 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-sm">{integration.logo}</span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {integration.name}
                </h3>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50 cyber-grid-enhanced">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI invoice generation features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
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
              See what our customers say about Zion AI Invoice Generator
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-green-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Billing Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using Zion AI Invoice Generator to streamline their billing and get paid faster. 
            Start your free trial today and experience the future of invoicing.
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
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;