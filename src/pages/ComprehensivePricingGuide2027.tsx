import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Brain,
  Cpu,
  Database,
  Cloud,
  Network,
  Monitor,
  Smartphone,
  Code,
  BarChart3,
  Server,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  Star as StarIcon,
  CheckCircle,
  Play,
  BookOpen,
  Lightbulb,
  ShoppingCart,
  Home,
  Truck,
  Building,
  Leaf,
  Package
} from 'lucide-react';

export default function ComprehensivePricingGuide2027() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 users",
        "Basic support",
        "Core features",
        "Standard security",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Priority support",
        "Advanced features",
        "Enhanced security",
        "Phone & email support",
        "Custom integrations"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "24/7 dedicated support",
        "All features",
        "Enterprise security",
        "Dedicated account manager",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliance, end-to-end encryption, advanced threat protection"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment, 99.9% uptime SLA, disaster recovery"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 technical support, dedicated account managers, custom training"
    },
    {
      icon: Zap,
      title: "Custom Development",
      description: "Tailored solutions, API development, integration services"
    }
  ];

  const industrySolutions = [
    {
      name: "Healthcare",
      solutions: ["HIPAA compliance", "Patient data security", "Medical AI diagnostics"],
      startingPrice: "$2,999/month"
    },
    {
      name: "Finance",
      solutions: ["PCI DSS compliance", "Fraud detection", "Regulatory reporting"],
      startingPrice: "$3,999/month"
    },
    {
      name: "Manufacturing",
      solutions: ["IoT integration", "Predictive maintenance", "Supply chain optimization"],
      startingPrice: "$2,499/month"
    },
    {
      name: "Retail",
      solutions: ["E-commerce platforms", "Customer analytics", "Inventory management"],
      startingPrice: "$1,999/month"
    }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group" 
        description="Explore our complete pricing for 200+ innovative technology solutions. Transparent pricing for micro SaaS, AI, cybersecurity, and emerging tech services." 
        canonical="/pricing" 
        url="https://ziontechgroup.com/pricing"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
          <div className="relative z-10 container mx-auto px-4 py-24 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Pricing
              <span className="block text-4xl md:text-5xl text-zion-cyan mt-4">
                Guide 2027
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transparent pricing for our complete portfolio of 200+ innovative technology solutions. 
              From micro SaaS to enterprise AI platforms, find the perfect plan for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services-overview" 
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the plan that fits your business needs and scale as you grow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`relative bg-zion-blue-dark border rounded-3xl p-8 ${
                    tier.popular 
                      ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' 
                      : 'border-zion-blue-light'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                      <span className="text-zion-slate-light">/{tier.period}</span>
                    </div>
                    <p className="text-zion-slate-light">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                        : 'bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Advanced capabilities for large organizations with complex requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Complete Service Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Transparent pricing for all our innovative technology solutions
              </p>
            </div>
            
            <div className="space-y-16">
              {servicesCatalog.map(category => (
                <div key={category.slug} className="bg-zion-blue-dark border border-zion-blue-light rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map(item => (
                      <div key={item.id} className="bg-zion-blue border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <div className="text-right min-w-[100px]">
                            <div className="text-zion-cyan font-semibold text-lg">{item.price}</div>
                            <div className="text-zion-slate-light text-sm">
                              {item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-zion-slate-light mb-4 text-sm">{item.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {item.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between">
                          <Link 
                            to={item.href} 
                            target={item.external ? '_blank' : undefined} 
                            rel={item.external ? 'noopener noreferrer' : undefined} 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all"
                          >
                            <span>{item.ctaLabel}</span>
                            {item.external && <ExternalLink className="w-4 h-4"/>}
                          </Link>
                          <span className="text-zion-slate-light text-xs bg-zion-blue-light px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Specialized pricing for industry-specific requirements and compliance needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industrySolutions.map((industry, index) => (
                <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-2xl p-6">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{industry.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-zion-cyan font-semibold text-lg mb-3">{industry.startingPrice}</div>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-light text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why Our Pricing is Competitive
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                We offer enterprise-grade solutions at startup-friendly prices, with transparent 
                pricing and no hidden fees.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No Hidden Fees</h3>
                  <p className="text-white/80 text-sm">Transparent pricing with clear breakdowns</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Scalable Plans</h3>
                  <p className="text-white/80 text-sm">Start small and grow with your business</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise Quality</h3>
                  <p className="text-white/80 text-sm">Bank-level security and reliability</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
                >
                  <span>Get Custom Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services-overview" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Need Custom Pricing?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our team will work with you to create a custom solution that fits your budget and requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                <p className="text-zion-cyan font-semibold text-lg">{contact.mobile}</p>
                <p className="text-zion-slate-light text-sm mt-2">Available 24/7</p>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                <p className="text-zion-cyan font-semibold text-lg">{contact.email}</p>
                <p className="text-zion-slate-light text-sm mt-2">Response within 2 hours</p>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
                <p className="text-zion-cyan font-semibold text-sm">{contact.address}</p>
                <p className="text-zion-slate-light text-sm mt-2">Headquarters</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function getCategoryIcon(categoryName) {
  const iconMap = {
    'Micro SaaS': <Code className="w-6 h-6 text-zion-cyan" />,
    'AI Solutions': <Brain className="w-6 h-6 text-zion-cyan" />,
    'IT Services': <Server className="w-6 h-6 text-zion-cyan" />,
    'Cybersecurity': <ShieldIcon className="w-6 h-6 text-zion-cyan" />,
    'Data & Analytics': <BarChart3 className="w-6 h-6 text-zion-cyan" />,
    'Cloud & DevOps': <Cloud className="w-6 h-6 text-zion-cyan" />,
    'Quantum Computing': <Cpu className="w-6 h-6 text-zion-cyan" />,
    'Blockchain & Web3': <Database className="w-6 h-6 text-zion-cyan" />,
    'IoT & Edge': <Network className="w-6 h-6 text-zion-cyan" />,
    'Green Tech': <GlobeIcon className="w-6 h-6 text-zion-cyan" />,
    'Space Tech': <Rocket className="w-6 h-6 text-zion-cyan" />,
    'BioTech & Health': <UsersIcon className="w-6 h-6 text-zion-cyan" />,
    'FinTech & DeFi': <TrendingUpIcon className="w-6 h-6 text-zion-cyan" />,
    'Metaverse & AR/VR': <Monitor className="w-6 h-6 text-zion-cyan" />,
    'Autonomous Systems': <Smartphone className="w-6 h-6 text-zion-cyan" />,
    'Digital Marketing': <Target className="w-6 h-6 text-zion-cyan" />,
    'E-commerce Solutions': <ShoppingCart className="w-6 h-6 text-zion-cyan" />,
    'Remote Work Tools': <UsersIcon className="w-6 h-6 text-zion-cyan" />,
    'Legal Tech': <BookOpen className="w-6 h-6 text-zion-cyan" />,
    'EdTech': <Lightbulb className="w-6 h-6 text-zion-cyan" />,
    'Real Estate Tech': <Home className="w-6 h-6 text-zion-cyan" />,
    'Supply Chain Tech': <Truck className="w-6 h-6 text-zion-cyan" />,
    'Energy Tech': <ZapIcon className="w-6 h-6 text-zion-cyan" />,
    'Smart Cities': <Building className="w-6 h-6 text-zion-cyan" />,
    'AgriTech': <Leaf className="w-6 h-6 text-zion-cyan" />,
    'Media & Entertainment': <Play className="w-6 h-6 text-zion-cyan" />,
    'Logistics Tech': <Package className="w-6 h-6 text-zion-cyan" />,
    'HR Tech': <UsersIcon className="w-6 h-6 text-zion-cyan" />,
    'Sales Tech': <TrendingUpIcon className="w-6 h-6 text-zion-cyan" />,
    'Customer Experience': <Star className="w-6 h-6 text-zion-cyan" />,
    'Productivity Tools': <ZapIcon className="w-6 h-6 text-zion-cyan" />
  };
  
  return iconMap[categoryName] || <Code className="w-6 h-6 text-zion-cyan" />;
}
