import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ArrowRight, 
  Zap, 
  Shield, 
  Star, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Brain,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Database,
  Server,
  Wifi,
  FileText,
  Cpu,
  Lock,
  Activity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const EnterpriseCloudMigrationProPage = () => {
  const features = [
    {
      title: "AI-Powered Migration Planning",
      description: "Advanced AI algorithms analyze your infrastructure and create optimal migration strategies with minimal downtime",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Zero-Downtime Migration",
      description: "Seamless migration with zero business disruption using advanced replication and failover technologies",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Support for AWS, Azure, Google Cloud, and hybrid cloud environments with unified management",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with automated compliance monitoring for SOC 2, HIPAA, and GDPR",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses",
      features: [
        "Up to 10 servers",
        "Basic migration planning",
        "Standard support",
        "AWS/Azure migration",
        "30-day post-migration support",
        "Basic security setup"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "one-time",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 servers",
        "Advanced AI migration planning",
        "Priority support",
        "Multi-cloud migration",
        "90-day post-migration support",
        "Advanced security setup",
        "Performance optimization",
        "Cost optimization"
      ],
      popular: true
    },
    {
      name: "Large Enterprise",
      price: "$24,999",
      period: "one-time",
      description: "For large organizations",
      features: [
        "Unlimited servers",
        "Custom AI migration planning",
        "24/7 dedicated support",
        "Full multi-cloud strategy",
        "180-day post-migration support",
        "Enterprise security setup",
        "Full performance optimization",
        "Cost optimization",
        "Dedicated migration team",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const migrationServices = [
    {
      title: "Application Migration",
      description: "Migrate legacy applications to modern cloud platforms with minimal code changes",
      icon: <Server className="w-6 h-6" />,
      benefit: "99.9% uptime"
    },
    {
      title: "Database Migration",
      description: "Seamless database migration with data integrity and performance optimization",
      icon: <Database className="w-6 h-6" />,
      benefit: "Zero data loss"
    },
    {
      title: "Infrastructure Migration",
      description: "Complete infrastructure migration with automated provisioning and configuration",
      icon: <Cpu className="w-6 h-6" />,
      benefit: "50% cost reduction"
    },
    {
      title: "Security Migration",
      description: "Comprehensive security migration with identity management and access controls",
      icon: <Lock className="w-6 h-6" />,
      benefit: "100% security compliance"
    },
    {
      title: "Network Migration",
      description: "Advanced network migration with load balancing and traffic optimization",
      icon: <Wifi className="w-6 h-6" />,
      benefit: "40% performance boost"
    },
    {
      title: "Monitoring Migration",
      description: "Complete monitoring and logging migration with real-time analytics",
      icon: <Activity className="w-6 h-6" />,
      benefit: "Real-time insights"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Global Finance Corp",
      role: "Chief Technology Officer",
      content: "Zion Tech Group's cloud migration service was exceptional. We migrated 200+ servers with zero downtime and reduced costs by 60%.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The AI-powered migration planning was incredibly accurate. We completed our migration 3 weeks ahead of schedule.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      company: "E-commerce Platform",
      role: "DevOps Manager",
      content: "Outstanding support and expertise. Our cloud infrastructure is now more secure and performant than ever before.",
      rating: 5
    }
  ];

  const cloudProviders = [
    "AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud", "Alibaba Cloud"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <EnhancedSEO
        title="Enterprise Cloud Migration Pro - Advanced Cloud Migration Services | Zion Tech Group"
        description="Professional cloud migration services with AI-powered planning, zero-downtime migration, and multi-cloud support for enterprise organizations."
        keywords="cloud migration, AWS migration, Azure migration, Google Cloud migration, enterprise cloud, cloud consulting, infrastructure migration"
        canonical="https://ziontechgroup.com/enterprise-cloud-migration-pro"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Cloud className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">Enterprise Cloud Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Enterprise Cloud Migration Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your infrastructure with our AI-powered cloud migration services. 
              Seamless, secure, and cost-effective migration to any cloud platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Cloud className="w-5 h-5" />}
              >
                Get Free Assessment
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                size="lg"
                icon={<Server className="w-5 h-5" />}
              >
                View Migration Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Migration Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive cloud migration services powered by artificial intelligence 
                and enterprise-grade security and compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
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

        {/* Migration Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete cloud migration solutions for all aspects of your infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {service.benefit}
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Supported Cloud Providers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We support all major cloud platforms and hybrid cloud environments
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Migration Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect migration plan for your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our cloud migration services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your infrastructure with our AI-powered cloud migration services. 
                Get a free assessment and start your cloud journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Cloud className="w-5 h-5" />}
                >
                  Get Free Assessment
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                >
                  Call +1 302 464 0950
                </FuturisticButton>
              </div>
              
              <div className="text-center text-gray-300">
                <p className="mb-2">Contact us for enterprise migration solutions and custom pricing</p>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default EnterpriseCloudMigrationProPage;