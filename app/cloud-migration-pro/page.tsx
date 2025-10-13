<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function cloudMigrationPro() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Cloud Migration Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Cloud Migration Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function CloudMigrationProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced cloud migration pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Migration Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function CloudmigrationproPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cloud Migration Pro</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Database,
  Server
} from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import StructuredData from "../components/StructuredData";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";
import ResponsiveContainer from "../components/ResponsiveContainer";
import EnhancedAccessibility from "../components/EnhancedAccessibility";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Seamless Migration",
      description: "Automated migration tools to move your applications and data to the cloud with zero downtime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance validation throughout the migration process",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimize your applications for cloud performance with automated tuning and monitoring",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Migration",
      description: "Safe and secure migration of your data with integrity checks and validation",
      color: "from-orange-500 to-red-500"
    }
  ];

  const migrationSteps = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and migration requirements"
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Custom migration strategy tailored to your business needs and goals"
    },
    {
      step: "3",
      title: "Migration Execution",
      description: "Automated migration with real-time monitoring and minimal downtime"
    },
    {
      step: "4",
      title: "Optimization & Support",
      description: "Post-migration optimization and ongoing support for optimal performance"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small applications",
      features: [
        "Up to 5 applications",
        "Basic migration tools",
        "Email support",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 applications",
        "Advanced migration tools",
        "Priority support",
        "Advanced security",
        "Performance optimization",
        "Data migration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited applications",
        "Custom migration tools",
        "Dedicated support team",
        "White-label solution",
        "SLA guarantee",
        "Advanced compliance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Cloud Architect",
      company: "TechCorp",
      content: "Zion Cloud Migration Pro made our cloud migration seamless. Zero downtime and perfect data integrity.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Manager",
      company: "CloudScale",
      content: "The automated migration tools saved us months of work. Everything was migrated perfectly.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "CTO",
      company: "StartupHub",
      content: "The performance optimization after migration was incredible. Our apps run 3x faster now.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion Cloud Migration Pro",
    "description": "Professional cloud migration platform with automated tools and zero-downtime migration",
    "url": "https://ziontechgroup.com/cloud-migration-pro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "599",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "599",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Cloud Migration Pro - Zion Tech Group"
            description="Professional cloud migration platform with automated tools, zero-downtime migration, and performance optimization for seamless cloud transitions."
            keywords="cloud migration, cloud migration tools, zero downtime migration, cloud transition, data migration, application migration"
            canonical="https://ziontechgroup.com/cloud-migration-pro"
          />
          <StructuredData data={structuredData} />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Cloud className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Professional Cloud Migration</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Zion Cloud Migration Pro
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Migrate to the cloud with confidence using our professional migration platform. 
                  Zero downtime, automated tools, and guaranteed data integrity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={Cloud}
                    iconPosition="left">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#demo"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Watch Demo
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Powerful Migration Features
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Harness the power of professional migration tools to move your applications and data to the cloud seamlessly.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Migration Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Migration Process
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A proven 4-step process to ensure successful cloud migration
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {migrationSteps.map((step, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your migration needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by Migration Teams
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what migration professionals are saying about Zion Cloud Migration Pro
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
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
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Migrate to the Cloud?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of organizations using Zion Cloud Migration Pro 
                  to migrate their applications and data to the cloud. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Free Trial
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/demo"
                    variant="outline"
                    size="lg"
                    icon={Cloud}
                    iconPosition="right">
                    Schedule Demo
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default CloudMigrationProPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
