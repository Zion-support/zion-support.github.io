import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Brain, Cloud, Zap, Shield, BarChart3, Code, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      category: "AI Services",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      services: [
        {
          name: "AI Content Creation Tools",
          description: "AI-powered tools for generating high-quality content including blog posts, social media updates, and marketing materials.",
          price: "$299/month",
          features: ["Automated content generation", "Brand voice consistency", "Multi-platform publishing", "SEO optimization"]
        },
        {
          name: "AI Email Automation",
          description: "Intelligent email responder that reads and responds to emails, handling inquiries and flagging important messages.",
          price: "$199/month",
          features: ["Smart email routing", "Automated responses", "Priority flagging", "Analytics dashboard"]
        },
        {
          name: "AI Business Intelligence",
          description: "Advanced analytics platform providing insights and predictions for better business decision-making.",
          price: "$499/month",
          features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "Data visualization"]
        }
      ]
    },
    {
      category: "IT Services",
      icon: Cloud,
      color: "from-green-500 to-blue-600",
      services: [
        {
          name: "Cloud Infrastructure Management",
          description: "Complete cloud infrastructure setup, management, and optimization for maximum performance and cost efficiency.",
          price: "$599/month",
          features: ["24/7 monitoring", "Auto-scaling", "Security management", "Cost optimization"]
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive cybersecurity services including threat detection, prevention, and incident response.",
          price: "$799/month",
          features: ["Threat monitoring", "Vulnerability assessment", "Incident response", "Compliance management"]
        },
        {
          name: "Network Infrastructure",
          description: "Design, implementation, and maintenance of robust network infrastructure for businesses of all sizes.",
          price: "$899/month",
          features: ["Network design", "Implementation", "24/7 support", "Performance optimization"]
        }
      ]
    },
    {
      category: "Micro SaaS",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      services: [
        {
          name: "Business Process Automation",
          description: "Custom automation solutions to streamline your business processes and increase efficiency.",
          price: "$399/month",
          features: ["Workflow automation", "Integration services", "Custom dashboards", "Performance tracking"]
        },
        {
          name: "Customer Relationship Management",
          description: "Advanced CRM system with AI-powered insights and automation capabilities.",
          price: "$299/month",
          features: ["Contact management", "Sales pipeline", "AI insights", "Email integration"]
        },
        {
          name: "Project Management Suite",
          description: "Comprehensive project management platform with team collaboration and resource planning tools.",
          price: "$199/month",
          features: ["Task management", "Team collaboration", "Resource planning", "Progress tracking"]
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI services, IT solutions, and micro SaaS applications designed to transform your business." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <section key={categoryIndex} className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                          {service.price}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center">
                          Get Started
                        </Link>
                        <Link href="/pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center">
                          View Pricing
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and get a customized solution
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/pricing" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}