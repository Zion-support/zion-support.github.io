import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Scale, 
  FileText, 
  Search, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Gavel,
  Users,
  Award,
  Building,
  Home,
  Heart
} from 'lucide-react';

const AiLegalAssistantProPage: React.FC = () => {
  const features = [
    "AI-Powered Document Analysis",
    "Contract Review & Generation",
    "Legal Research Automation",
    "Case Law Analysis",
    "Compliance Monitoring",
    "Document Template Library",
    "Client Communication Tools",
    "Billing & Time Tracking",
    "Court Filing Assistance",
    "Multi-Jurisdiction Support"
  ];

  const practiceAreas = [
    {
      name: "Corporate Law",
      description: "Contract drafting, M&A support, corporate governance",
      icon: <Building className="w-8 h-8" />
    },
    {
      name: "Litigation Support", 
      description: "Case analysis, discovery assistance, motion drafting",
      icon: <Gavel className="w-8 h-8" />
    },
    {
      name: "Real Estate",
      description: "Property transactions, lease agreements, title research",
      icon: <Home className="w-8 h-8" />
    },
    {
      name: "Employment Law",
      description: "HR policies, employment contracts, compliance",
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Intellectual Property",
      description: "Patent research, trademark filing, IP protection",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Family Law",
      description: "Divorce proceedings, custody agreements, estate planning",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const pricingTiers = [
    {
      name: "Solo Practitioner",
      price: "$199",
      period: "/month",
      description: "Perfect for individual lawyers",
      features: [
        "Document Analysis (100/month)",
        "Contract Templates",
        "Basic Research Tools",
        "Email Support"
      ]
    },
    {
      name: "Small Firm",
      price: "$499", 
      period: "/month",
      description: "Ideal for small law firms",
      features: [
        "Document Analysis (500/month)",
        "Advanced Research",
        "Team Collaboration",
        "Priority Support",
        "Custom Templates"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large law firms",
      features: [
        "Unlimited Analysis",
        "Full AI Suite",
        "API Integration",
        "Dedicated Support",
        "Custom Development"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Senior Partner",
      company: "Martinez & Associates",
      content: "AI Legal Assistant Pro reduced our document review time by 70%. The accuracy is remarkable and it's saved us thousands of billable hours.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Corporate Attorney",
      company: "Thompson Legal Group",
      content: "The contract analysis feature is incredibly sophisticated. It catches clauses I would have missed and suggests improvements.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Managing Partner",
      company: "Chen & Partners LLP",
      content: "Our firm's efficiency has increased dramatically. The AI research tools are faster and more comprehensive than traditional methods.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal Assistant Pro - Intelligent Legal Technology | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered legal assistant with document analysis, contract review, legal research automation, and compliance monitoring. Starting at $199/month." />
        <meta name="keywords" content="AI legal assistant, legal technology, document analysis, contract review, legal research, law firm software, legal AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Scale className="w-4 h-4 mr-2" />
                AI-Powered Legal Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Legal Assistant Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your legal practice with AI-powered document analysis, 
                contract review, and intelligent legal research automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Demo
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                  <div className="text-gray-400 text-sm">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">2,500+</div>
                  <div className="text-gray-400 text-sm">Law Firms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1M+</div>
                  <div className="text-gray-400 text-sm">Documents Processed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI algorithms analyze legal documents, conduct research, 
                and provide intelligent insights to enhance your legal practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Practice Areas
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI support across all major legal practice areas 
                with specialized tools and templates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{area.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {area.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Flexible Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal practice. 
                All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.name === 'Small Firm' 
                    ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-cyan-500/20'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Small Firm'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {tier.name === 'Small Firm' ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Legal Practice?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of legal professionals who trust AI Legal Assistant Pro 
                to enhance their practice efficiency and client service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiLegalAssistantProPage;