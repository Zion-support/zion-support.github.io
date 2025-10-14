import React from 'react';
import { ArrowRight, CheckCircle, Star, FileText, Zap, DollarSign, Clock, Users, Award, Mail, Phone, Globe, Download, Send, Calculator, Receipt } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import ResponsiveGrid from '../../components/ResponsiveGrid';

const ZionAIInvoiceGeneratorPage = () => {
  const features = [
    {
      title: "AI-Powered Invoice Creation",
      description: "Generate professional invoices automatically from project data and client information",
      icon: <FileText className="w-8 h-8" />,
      details: [
        "Automatic invoice generation",
        "Smart data extraction",
        "Professional templates",
        "Custom branding options"
      ]
    },
    {
      title: "Smart Payment Tracking",
      description: "AI automatically tracks payments and sends follow-up reminders",
      icon: <Zap className="w-8 h-8" />,
      details: [
        "Payment status monitoring",
        "Automated reminders",
        "Late payment detection",
        "Payment analytics"
      ]
    },
    {
      title: "Multi-Currency Support",
      description: "Handle international clients with automatic currency conversion and tax calculations",
      icon: <DollarSign className="w-8 h-8" />,
      details: [
        "100+ currency support",
        "Real-time exchange rates",
        "Tax calculation automation",
        "Compliance reporting"
      ]
    }
  ];

  const pricing = [
    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Payment tracking",
        "Email support",
        "PDF export",
        "Client management"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Advanced payment tracking",
        "Priority support",
        "Custom branding",
        "Recurring invoices",
        "Multi-currency support",
        "Tax reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited invoices",
        "All templates and features",
        "24/7 phone support",
        "White-label solution",
        "API integration",
        "Team collaboration",
        "Advanced analytics",
        "Custom workflows"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Freelance Designer",
      role: "Owner",
      content: "This AI invoice generator has saved me hours every week. The automatic payment tracking and reminders have improved my cash flow significantly.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The multi-currency support and tax calculations are incredibly accurate. We've reduced our accounting errors by 90% since using this tool.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Digital Agency",
      role: "CEO",
      content: "The AI understands our business patterns and suggests optimal invoice timing. Our payment collection time has decreased by 40%.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const stats = [
    { label: "Invoices Generated", value: "500K+", icon: <FileText className="w-6 h-6" /> },
    { label: "Payment Collection", value: "85%", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Time Saved", value: "90%", icon: <Clock className="w-6 h-6" /> },
    { label: "User Satisfaction", value: "99%", icon: <Award className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Faster Payment Collection",
      description: "AI-powered reminders and optimal timing increase payment collection rates by 40%",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Reduced Errors",
      description: "Automated calculations and data validation eliminate human errors in invoicing",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Professional Appearance",
      description: "Consistent, branded invoices improve your professional image and client trust",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Time Savings",
      description: "Automate repetitive tasks and focus on growing your business instead",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Invoice Generator - Automated Invoicing with AI | Zion Tech Group"
        description="Streamline your invoicing process with AI-powered invoice generation, payment tracking, and automated reminders. Get paid faster with professional invoices."
        keywords="AI invoice generator, automated invoicing, payment tracking, invoice automation, billing software, AI accounting, invoice management"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Receipt className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Invoicing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Invoice Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your invoicing process with AI-powered automation. Generate professional invoices, 
              track payments, and get paid faster with intelligent reminders and analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-green-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI-Powered Invoicing?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of invoicing with artificial intelligence
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to streamline your invoicing process
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-left">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your invoicing needs
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  href="/contact"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700' : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'}`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses streamlining their invoicing with AI
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Invoicing Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-powered invoicing. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Demo
              </FuturisticButton>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="w-4 h-4 mr-2" />
                  ziontechgroup.com
                </div>
              </div>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIInvoiceGeneratorPage;