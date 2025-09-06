import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"],
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud Platform.",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Disaster Recovery"],
      icon: "☁️"
    },
    {
      title: "AI & Machine Learning",
      description: "Artificial intelligence and machine learning solutions to automate processes and gain insights.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & Virtual Assistants"],
      icon: "🤖"
    },
    {
      title: "DevOps & Automation",
      description: "Complete DevOps solutions including CI/CD pipelines, monitoring, and infrastructure automation.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure Automation"],
      icon: "⚙️"
    },
    {
      title: "Data Analytics",
      description: "Data-driven insights and business intelligence solutions to help you make informed decisions.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Warehousing"],
      icon: "📊"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including web development, mobile apps, cloud solutions, AI/ML, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and create a custom solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}