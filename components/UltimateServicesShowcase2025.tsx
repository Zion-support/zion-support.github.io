"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
ArrowRightZapShieldCloudBrainGlobeTrendingUpStarCheckCircle

const services = [
  {
    id: 1,
    title: "AI-Powered Business Automation",
    description: "Transform your operations with intelligent automation that learns and adapts to your business needs.",
    price: "From $299/month",
    features: [
      "40-60% operational cost reduction",
      "300% productivity increase",
      "ROI within 3 months",
      "24/7 intelligent monitoring"
    ],
    icon: Brain,
    color: "from-blue-500 to-purple-600",
    popular: true,
    category: "AI & Automation"
  },
  {
    id: 2,
    title: "Enterprise AI Content Generation",
    description: "Create high-qualitySEO-optimized content at scale with our advanced AI writing platform.",
    price: "From $199/month",
    features: [
      "80% content creation time savings",
      "200% SEO ranking improvement",
      "Consistent brand messaging",
      "Multi-language support"
    ],
    icon: Zap,
    color: "from-green-500 to-teal-600",
    popular: false,
    category: "Content & Marketing"
  },
  {
    id: 3,
    title: "Advanced Cybersecurity Solutions",
    description: "Protect your business with next-generation AI-powered security that evolves with threats.",
    price: "From $399/month",
    features: [
      "90% faster threat detection",
      "70% reduction in false positives",
      "24/7 automated protection",
      "Zero-trust architecture"
    ],
    icon: Shield,
    color: "from-red-500 to-pink-600",
    popular: false,
    category: "Security"
  },
  {
    id: 4,
    title: "Cloud Infrastructure Optimization",
    description: "Maximize your cloud investment with intelligent resource management and cost optimization.",
    price: "From $599/month",
    features: [
      "40% cloud cost reduction",
      "10x faster deployment",
      "Auto-scaling capabilities",
      "Disaster recovery automation"
    ],
    icon: Cloud,
    color: "from-indigo-500 to-blue-600",
    popular: true,
    category: "Cloud & DevOps"
  },
  {
    id: 5,
    title: "Customer Behavior Analytics",
    description: "Understand and predict customer behavior with advanced AI analytics and insights.",
    price: "From $449/month",
    features: [
      "35% customer retention increase",
      "200% customer lifetime value boost",
      "50% churn reduction",
      "Real-time behavior insights"
    ],
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    popular: false,
    category: "Analytics"
  },
  {
    id: 6,
    title: "Global Digital Transformation",
    description: "Comprehensive digital transformation services for businesses worldwide.",
    price: "From $1,500/project",
    features: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Competitive advantage",
      "Global implementation support"
    ],
    icon: Globe,
    color: "from-purple-500 to-indigo-600",
    popular: false,
    category: "Consulting"
  }
];

const categories = ["All"AI & Automation"Content & Marketing"Security"Cloud & DevOps"Analytics"Consulting"];

export default function UltimateServicesShowcase2025() {
  const [selectedCategorysetSelectedCategory] = React.useState("All");

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">ULTIMATE SERVICES SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge AIcloudand automation solutions. 
            Join thousands of companies already achieving extraordinary results.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((serviceindex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-8 h-8" />
                  <span className="text-sm font-medium opacity-90">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{service.price}</div>
                  <div className="text-sm text-gray-500">Starting price • No setup fees</div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h3>
            <p className="text-gray-600">Our solutions deliver measurable impact for businesses worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already achieving extraordinary results with our AI solutions. 
            Get a free consultation and custom implementation plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
            
            <Link
              href="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Success Stories
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}