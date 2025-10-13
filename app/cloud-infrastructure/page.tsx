import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  DollarSign,
  Smartphone,
  Monitor,
  Target,
  Award,
  Sparkles,
  Server,
  Database,
  Globe,
  BarChart3,
  Settings,
  Lock,
  Activity,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import StructuredData from '../components/StructuredData';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const CloudInfrastructure = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Infrastructure Services",
    "description": "Comprehensive cloud infrastructure solutions including AWS, Azure, and Google Cloud setup, migration, and management",
    "url": "https://ziontechgroup.com/cloud-infrastructure",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "299",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    }
  };

  const services = [
    {
      title: "Cloud Migration & Setup",
      description: "Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Zero-downtime migration",
        "Multi-cloud strategy",
        "Cost optimization",
        "Performance tuning"
      ],
      price: "From $2,999"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Implement enterprise-grade security with SOC 2, HIPAA, and GDPR compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Security audits",
        "Compliance certification",
        "Threat monitoring",
        "Data encryption"
      ],
      price: "From $1,999"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automate your deployment pipeline with modern DevOps practices and tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "CI/CD pipeline setup",
        "Container orchestration",
        "Infrastructure as Code",
        "Monitoring & alerting"
      ],
      price: "From $1,499"
    },
    {
      title: "Database Management",
      description: "Optimize and manage your databases with high availability and performance",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Database optimization",
        "Backup & recovery",
        "High availability setup",
        "Performance monitoring"
      ],
      price: "From $999"
    },
    {
      title: "Cloud Monitoring & Analytics",
      description: "Comprehensive monitoring and analytics for your cloud infrastructure",
      icon: <Activity className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "24/7 monitoring",
        "Performance analytics",
        "Cost tracking",
        "Automated alerts"
      ],
      price: "From $499"
    },
    {
      title: "Disaster Recovery",
      description: "Ensure business continuity with robust disaster recovery solutions",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Backup strategies",
        "Recovery planning",
        "Testing & validation",
        "RTO/RPO optimization"
      ],
      price: "From $1,299"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Basic cloud setup",
        "Email support",
        "Monthly health checks",
        "Basic monitoring",
        "Backup management",
        "Security updates"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced cloud optimization",
        "Priority support",
        "Weekly health checks",
        "Advanced monitoring",
        "Performance tuning",
        "Security audits",
        "Disaster recovery",
        "24/7 monitoring"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "For large enterprises",
      features: [
        "Custom cloud architecture",
        "24/7 phone support",
        "Daily health checks",
        "Enterprise monitoring",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security",
        "Compliance management"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion Tech Group migrated our entire infrastructure to AWS with zero downtime. Our performance improved by 40% and costs decreased by 25%.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Sarah Kim",
      company: "E-commerce Solutions",
      role: "VP Engineering",
      content: "Their cloud security implementation helped us achieve SOC 2 compliance in just 3 months. The team is incredibly knowledgeable and professional.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "David Chen",
      company: "Financial Services Co.",
      role: "IT Director",
      content: "The disaster recovery solution they implemented saved us during a major outage. We were back online in 15 minutes instead of hours.",
      rating: 5,
      avatar: "DC"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <Target className="w-6 h-6" /> },
    { number: "40%", label: "Performance Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "25%", label: "Cost Reduction", icon: <DollarSign className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const cloudProviders = [
    { name: "Amazon Web Services", logo: "AWS", description: "Leading cloud platform" },
    { name: "Microsoft Azure", logo: "AZ", description: "Enterprise cloud solutions" },
    { name: "Google Cloud", logo: "GC", description: "AI and ML focused" },
    { name: "IBM Cloud", logo: "IBM", description: "Hybrid cloud solutions" },
    { name: "Oracle Cloud", logo: "OC", description: "Database and enterprise" },
    { name: "DigitalOcean", logo: "DO", description: "Developer-friendly cloud" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Cloud Infrastructure Services - AWS, Azure, Google Cloud | Zion Tech Group"
        description="Comprehensive cloud infrastructure solutions including migration, security, DevOps, and management. Achieve 99.9% uptime with 25% cost reduction."
        keywords="cloud infrastructure, AWS migration, Azure setup, Google Cloud, cloud security, DevOps, cloud management, cloud consulting"
        canonical="https://ziontechgroup.com/cloud-infrastructure"
        structuredData={structuredData}
      />
      
      <StructuredData type="Service" data={structuredData} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise Cloud Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cloud Infrastructure Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with enterprise-grade cloud infrastructure. Achieve 99.9% uptime, 
            reduce costs by 25%, and scale effortlessly with our comprehensive cloud solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Free Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Case Studies
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cloud infrastructure solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platform Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to deliver the best solution for your needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cloudProviders.map((provider, index) => (
              <div
                key={index}
                className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {provider.logo}
                </div>
                <h3 className="text-white font-semibold mb-2">{provider.name}</h3>
                <p className="text-gray-300 text-sm">{provider.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Managed Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the level of support that fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
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
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud infrastructure services
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
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses already using our cloud infrastructure services to achieve better performance and lower costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Consultation
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                View Case Studies
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudInfrastructure;