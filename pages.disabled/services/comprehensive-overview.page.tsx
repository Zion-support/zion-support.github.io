import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Users, Star, TrendingUp, BarChart3, MessageCircle, Settings } from 'lucide-react';

const ComprehensiveServicesOverviewPage: NextPage = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge AI solutions to automate and optimize your business processes",
      icon: <Brain className="w-8 h-8" />,
      services: [
        {
          name: "AI Customer Sentiment Analyzer Pro",
          description: "Monitor customer feedback across all channels in real-time with AI-powered sentiment analysis",
          price: "From $199/month",
          link: "/services/ai-customer-sentiment-analyzer",
          features: ["Real-time monitoring", "Multi-channel integration", "Predictive insights"]
        },
        {
          name: "AI SEO Content Optimizer",
          description: "Advanced AI-powered SEO optimization platform with real-time suggestions and competitive analysis",
          price: "From $79/month",
          link: "/services/ai-seo-content-optimizer",
          features: ["Real-time SEO scoring", "Keyword research", "Content optimization"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Comprehensive AI-powered customer support platform with intelligent chatbots and automated resolution",
          price: "From $299/month",
          link: "/services/ai-customer-support-automation",
          features: ["Intelligent chatbots", "Automated routing", "Multi-language support"]
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Powerful, affordable SaaS applications designed to solve specific business challenges",
      icon: <Zap className="w-8 h-8" />,
      services: [
        {
          name: "AI Automated Email Follow-up System",
          description: "Intelligent email automation platform with personalized sequences and optimal timing predictions",
          price: "From $49/month",
          link: "/services/ai-automated-email-followup",
          features: ["Behavior-triggered sequences", "AI personalization", "A/B testing"]
        },
        {
          name: "AI Affiliate Marketing Tracker",
          description: "Advanced affiliate marketing platform with AI-powered fraud detection and performance optimization",
          price: "From $99/month",
          link: "/services/ai-affiliate-marketing-tracker",
          features: ["Real-time tracking", "Fraud detection", "Automated payments"]
        },
        {
          name: "AI Project Management Assistant",
          description: "Intelligent project management platform with AI-powered task prioritization and resource allocation",
          price: "From $29/month",
          link: "/services/ai-project-management-assistant",
          features: ["Task prioritization", "Resource allocation", "Risk prediction"]
        }
      ]
    },
    {
      title: "IT Services & Infrastructure",
      description: "Enterprise-grade IT solutions to modernize and secure your infrastructure",
      icon: <Shield className="w-8 h-8" />,
      services: [
        {
          name: "Cloud Cost Optimization Suite",
          description: "Comprehensive cloud cost management platform with AI-powered optimization across AWS, Azure, and GCP",
          price: "From $500/month",
          link: "/services/cloud-cost-optimization-suite",
          features: ["Multi-cloud optimization", "AI-powered analysis", "Cost forecasting"]
        },
        {
          name: "Zero Trust Security Platform",
          description: "Comprehensive zero trust security solution with identity verification and network segmentation",
          price: "From $2,000/month",
          link: "/services/zero-trust-security-platform",
          features: ["Identity management", "Network segmentation", "Continuous monitoring"]
        },
        {
          name: "AI DevOps Automation Platform",
          description: "Intelligent DevOps platform that automates CI/CD pipelines and infrastructure provisioning",
          price: "From $1,000/month",
          link: "/services/ai-devops-automation-platform",
          features: ["CI/CD automation", "Infrastructure provisioning", "Performance monitoring"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Our clients see average improvements of 40-60% in key performance metrics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "AI specialists, cloud architects, and security experts with decades of experience"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and industry-standard encryption"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your systems run smoothly"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "40%", label: "Average Cost Reduction" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <>
      <Head>
        <title>Comprehensive Services Overview - Zion Tech Group</title>
        <meta name="description" content="Explore our complete suite of AI services, micro SaaS solutions, and IT infrastructure services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/comprehensive-overview" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Transform your business with our complete suite of AI services, micro SaaS solutions, 
              and enterprise-grade IT infrastructure. We deliver measurable results through cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="#services">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  Explore Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of technology solutions designed to address every aspect of your business needs.
            </p>
          </div>
          
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-blue-600">{category.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <span className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer inline-flex items-center">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results through cutting-edge technology and expert implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our experts and discover how our comprehensive technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="tel:+13024640950">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                Call +1 302 464 0950
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComprehensiveServicesOverviewPage;