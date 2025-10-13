import React, { useState } from "react";
import { Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Brain, Database, Server } from "lucide-react";
import EnhancedSEO from "../../components/EnhancedSEO";
import FuturisticCard from "../../components/FuturisticCard";
import FuturisticButton from "../../components/FuturisticButton";
import ResponsiveContainer from "../../components/ResponsiveContainer";

const CloudMigrationProPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("enterprise");

  const features = [
    {
      title: "Zero-Downtime Migration",
      description: "Migrate your applications to the cloud with zero downtime using advanced blue-green deployment strategies.",
      icon: <Cloud className="w-6 h-6" />,
      benefits: ["Zero downtime guarantee", "Blue-green deployment", "Rollback capabilities"]
    },
    {
      title: "AI-Powered Assessment",
      description: "Comprehensive analysis of your current infrastructure using AI to identify migration opportunities and risks.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Infrastructure analysis", "Risk assessment", "Cost optimization"]
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Design and implement multi-cloud architectures for maximum flexibility, redundancy, and cost optimization.",
      icon: <Server className="w-6 h-6" />,
      benefits: ["Multi-cloud design", "Vendor flexibility", "Cost optimization"]
    },
    {
      title: "Security & Compliance",
      description: "Ensure your cloud migration meets all security standards and compliance requirements from day one.",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Security hardening", "Compliance validation", "Audit support"]
    },
    {
      title: "Database Migration",
      description: "Seamlessly migrate databases with minimal disruption using advanced replication and synchronization techniques.",
      icon: <Database className="w-6 h-6" />,
      benefits: ["Database replication", "Data integrity", "Performance optimization"]
    },
    {
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock support and monitoring during and after migration to ensure smooth operations.",
      icon: <Clock className="w-6 h-6" />,
      benefits: ["24/7 support", "Real-time monitoring", "Performance optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Assessment",
      price: 5000,
      period: "one-time",
      description: "Comprehensive cloud readiness assessment",
      features: [
        "Infrastructure analysis",
        "Security assessment",
        "Cost analysis",
        "Migration roadmap",
        "Risk assessment",
        "Recommendations report"
      ],
      popular: false
    },
    {
      name: "Standard Migration",
      price: 25000,
      period: "project",
      description: "Complete migration for small to medium businesses",
      features: [
        "Up to 50 servers",
        "Zero-downtime migration",
        "Security implementation",
        "3 months support",
        "Performance optimization",
        "Training included"
      ],
      popular: true
    },
    {
      name: "Enterprise Migration",
      price: 100000,
      period: "project",
      description: "Large-scale enterprise migration",
      features: [
        "Unlimited servers",
        "Multi-cloud strategy",
        "Custom architecture",
        "12 months support",
        "Dedicated team",
        "White-glove service"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "The cloud migration was flawless. We achieved zero downtime and saw 40% cost savings within the first year. The team was professional and knowledgeable.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "IT Director",
      company: "Global Manufacturing Inc",
      content: "Our multi-cloud strategy has given us incredible flexibility. The migration process was smooth and the ongoing support has been excellent.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "VP of Engineering",
      company: "StartupHub",
      content: "The AI assessment identified optimization opportunities we never knew existed. The migration exceeded our expectations in every way.",
      rating: 5
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime During Migration", icon: <Cloud className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <DollarSign className="w-6 h-6" /> },
    { number: "200+", label: "Successful Migrations", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Cloud Migration Pro | Zion Tech Group - Zero-Downtime Cloud Migration"
        description="Expert cloud migration services with zero downtime, AI-powered assessment, and multi-cloud strategies. Secure, compliant, and cost-optimized cloud solutions."
        keywords="cloud migration, zero downtime migration, cloud assessment, multi-cloud strategy, cloud security, cloud consulting, AWS migration, Azure migration"
        canonical="https://ziontechgroup.com/cloud-migration-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Professional Cloud Migration Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cloud Migration Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Expert cloud migration services with zero downtime, AI-powered assessment, and multi-cloud strategies. 
            Secure, compliant, and cost-optimized cloud solutions for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Free Assessment
            </FuturisticButton>
            <FuturisticButton
              href="#consultation"
              variant="outline"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Migration Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud migration services designed to minimize risk and maximize benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that best fits your needs. All packages include our core migration services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
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
                  icon={<ArrowRight className="w-4 h-4" />}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cloud migration services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a free cloud readiness assessment and discover how we can help you migrate to the cloud with zero downtime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Free Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Cloud className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>📞 Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CloudMigrationProPage;