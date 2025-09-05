import React from "react"
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react'
export default function APIPage() {
  const apiFeatures = [{
      title: "RESTful APIs",
      description: "Clean, intuitive REST API endpoints for easy integration",
      icon: Code,
      features: ["JSON Responses", "HTTP Status Codes", "Rate Limiting"]
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed API documentation with examples and guides",
      icon: Book,
      features: ["Interactive Docs", "Code Examples", "SDK Libraries"]
    },
    {
      title: "High Performance",
      description: "Fast, reliable APIs built for scale and speed",
      icon: Zap,
      features: ["Low Latency", "High Throughput", "Global CDN"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with authentication and encryption",
      icon: Shield,
      features: ["OAuth 2.0", "API Keys", "SSL/TLS Encryption"]
    }]
  return (
    <Layout
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and reference for integrating with Zion Tech Group services.">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">
              <h1
                API Reference></h1>
              <p
                Comprehensive API documentation and reference for integrating with Zion Tech Group services></p>
            </motion.div>
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <div className="text-indigo-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    <h3
                      {feature.title}></h3>
                    <p
                      {feature.description}></p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}>
                      ))}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h2
                API Documentation></h2>
              <p
                Comprehensive guides and examples to help you integrate with our APIs></p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services API</h3>"
                <div className="space-y-2">"
</div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">POST /api/ai/analyze</span>"
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>"
                  </div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">POST /api/ai/predict</span>"
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>"
                  </div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">POST /api/ai/process</span>"
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI</span>">>
"
              <div className="bg-gray-50 p-6 rounded-lg">"
</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services API</h3>"
                <div className="space-y-2">"
</div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">GET /api/infrastructure/status</span>"
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>"
                  </div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">POST /api/security/scan</span>"
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>"
                  </div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">GET /api/cloud/resources</span>"
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT</span>">>
"
              <div className="bg-gray-50 p-6 rounded-lg">"
</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS API</h3>"
                <div className="space-y-2">"
</div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">POST /api/saas/subscribe</span>"
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>"
                  </div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">GET /api/saas/usage</span>"
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>"
                  </div>"
                  <div className="flex items-center justify-between">"
</div>"
                    <span className="text-sm text-gray-600">POST /api/saas/configure</span>"
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS</span>">>>
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2
                Get Started with Our APIs></h2>
              <p
                Ready to integrate? Contact our team to get started with API access and support.></p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}>
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>>
  )
}