import React from 'react';
import { Helmet , ArrowRight, CheckCircle, Star, Zap, Globe, TrendingUp, Phone  } from "react-helmet-async";
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
const ZionAIInvoiceGeneratorPage: React.FC = () => {
  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "per month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Payment tracking",
        "Email support",
        "PDF export",
        "Basic analytics"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Business",
      price: "$49",
      period: "per month",
      description: "Ideal for small to medium businesses",
      features: [
        "200 invoices per month",
        "Premium templates",
        "Automated follow-ups",
        "Priority support",
        "Multiple payment methods",
        "Advanced analytics",
        "Tax calculations",
        "Client portal"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "API integration",
        "24/7 phone support",
        "White-label solution",
        "Advanced reporting",
        "Multi-currency support",
        "Team collaboration",
        "Custom workflows"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];
  const testimonials = [
    {
      name: "David Martinez",
      company: "Freelance Developer",
      role: "Independent Contractor",
      content: "Zion AI Invoice Generator has streamlined my billing process completely. I can create professional invoices in seconds and track payments effortlessly.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Agency",
      role: "Operations Manager",
      content: "The automated follow-up feature is a game-changer. Our payment collection time has improved by 60% since using this tool.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "Consulting Firm",
      role: "Managing Partner",
      content: "The tax compliance features save us hours every month. Everything is calculated automatically and stays up-to-date with regulations.",
      rating: 5,
      avatar: "JW"
    }
  ];
  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "95%", label: "Faster Payment Collection", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "30+", label: "Countries Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];
  return (
    <React.Fragment /><Helmet /><title>Zion AI Invoice Generator - Automated Invoice Creation & Payment Processing | Zion Tech Group</title>
        <meta;
          name="description"
          content="Create professional invoices automatically with Zion AI Invoice Generator. Smart data extraction, automated follow-ups, and payment processing. Start your free trial today!"
        />
        <meta;
          name="keywords"
          content="AI invoice generator, automated invoicing, invoice creation, payment processing, billing automation, financial management"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-invoice-generator" />
      </Helmet>
      <EnhancedSEO;
        title="Zion AI Invoice Generator - Automated Invoice Creation & Payment Processing"
        description="Create professional invoices automatically with Zion AI Invoice Generator. Smart data extraction, automated follow-ups, and payment processing."
        keywords="AI invoice generator, automated invoicing, invoice creation, payment processing, billing automation"
        canonical="https://ziontechgroup.com/zion-ai-invoice-generator"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" /><FuturisticBackground />
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto text-center" /><div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" /><Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Automate Your Billing Process</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Zion AI Invoice Generator</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create professional invoices automatically with AI-powered data extraction, automated follow-ups, and seamless payment processing. Get paid faster with intelligent billing automation.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" /><FuturisticButton;
                href="/contact"
                variant="primary"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
              >
                Start Free Trial;
              </FuturisticButton>
              <FuturisticButton;
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Calculator className="w-5 h-5" />}
              >
                Watch Demo;
              </FuturisticButton>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                </div><div key={index} className="text-center group" /><div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}</div>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Intelligent Invoice Management</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your billing process with AI-powered automation and smart financial management tools.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div><FuturisticCard;
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                 /><div;
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {feature.title}</h3>
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}</p>
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your invoicing needs</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                </div><div;
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
                >
                  {plan.popular && (
                    </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular</span>
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center" /><span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      </ul><li key={idx} className="flex items-center text-gray-300" /><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton;
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Started;
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Businesses Worldwide</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion AI Invoice Generator</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                </div><div;
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                 /><div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center" /><div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Invoicing?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using Zion AI Invoice Generator to streamline their billing process and get paid faster.</p>
            </p>
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" /><div className="text-center" /><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" /><Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center" /><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" /><Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center" /><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3" /><MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008</p><br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><FuturisticButton;
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial;
              </FuturisticButton>
              <FuturisticButton;
                href="/services"
                variant="outline"
                size="lg"
                icon={<DollarSign className="w-5 h-5" />}
              >
                View All Services;
              </FuturisticButton>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
;