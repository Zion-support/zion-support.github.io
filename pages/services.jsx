import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 'ai-solutions',
      icon: '🤖',
      title: "Artificial Intelligence Solutions",
      description: "Harness the power of AI with our machine learning, natural language processing, and computer vision solutions.",
      features: ["Machine Learning Models", "AI Chatbots", "Predictive Analytics", "Computer Vision"],
      benefits: ["Automated Decision Making", "Enhanced Customer Experience", "Reduced Operational Costs", "Scalable AI Infrastructure"]
    },
    {
      id: 'cloud-infrastructure',
      icon: '☁️',
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Container Orchestration", "Auto-scaling"],
      benefits: ["Improved Scalability", "Cost Optimization", "Enhanced Security", "Global Accessibility"]
    },
    {
      id: 'cybersecurity',
      icon: '🔒',
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and threat monitoring.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"],
      benefits: ["Advanced Threat Protection", "Regulatory Compliance", "24/7 Monitoring", "Rapid Incident Response"]
    },
    {
      id: 'data-analytics',
      icon: '📊',
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Custom Dashboards"],
      benefits: ["Data-Driven Decisions", "Improved ROI", "Real-time Insights", "Custom Reporting"]
    },
    {
      id: 'digital-transformation',
      icon: '🚀',
      title: "Digital Transformation",
      description: "Modernize your business processes with cutting-edge technology solutions.",
      features: ["Process Automation", "API Development", "Legacy System Integration", "Workflow Optimization"],
      benefits: ["Streamlined Operations", "Improved Efficiency", "Enhanced Collaboration", "Future-Ready Systems"]
    },
    {
      id: 'custom-development',
      icon: '💻',
      title: "Custom Development",
      description: "Tailored software solutions designed to meet your unique business requirements.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      benefits: ["Bespoke Solutions", "Seamless Integration", "Scalable Architecture", "Ongoing Support"]
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT and AI services including cloud infrastructure, cybersecurity, data analytics, and custom development solutions." />
        <meta property="og:title" content="Our Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive catalog of IT and AI services designed to transform your business." />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-max text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
              Explore our comprehensive catalog of IT and AI services designed to transform 
              your business and drive innovation across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="card p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-600 flex items-center">
                          <span className="text-blue-500 mr-2">→</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    Starting from $2,999/month
                  </div>
                  <Link href="/contact" className="btn-primary text-sm">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              We follow a proven methodology to ensure successful project delivery and maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your requirements and current infrastructure to understand your needs.' },
              { step: '02', title: 'Planning', description: 'Our experts create a detailed roadmap with timelines and milestones.' },
              { step: '03', title: 'Implementation', description: 'We execute the solution with regular updates and quality assurance.' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and support to ensure optimal performance.' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-responsive-lg font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-balance">
              Let's discuss how our services can help you achieve your business goals 
              and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started Today
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

