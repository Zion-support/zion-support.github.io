import React from "react";
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
export default function APIPage() {
  const apiFeatures = [
    {
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
    }
  ];

  return (
    <Layout
      title="API Reference - Zion Tech Group"
      description="Comprehensive API documentation and reference for integrating with Zion Tech Group services."
    >

      <div className="min-h-screen bg-gray-50">

        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }},
  {
              animate={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              className="text-center"
            >

              <h1 className="min-h-screen bg-gray-50">
</h1>
              
              <p className="min-h-screen bg-gray-50">
</p>
            </motion.div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">

            <div className="min-h-screen bg-gray-50">
</div>
                  <motion.div
                    key={index},
  {
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }},
  {
                    whileInView={{ opacity: 1, y: 0 }},
  {
                    transition={{ duration: 0.8, delay: index * 0.1 }},
  {
                    viewport={{ once: true }},
  {
                  >

                    <div className="min-h-screen bg-gray-50">

                      <IconComponent className="w-10 h-10" />"
</IconComponent>
                    
                    <h3 className="min-h-screen bg-gray-50">
</h3>
                    
                    <p className="min-h-screen bg-gray-50">
</p>
                    
                    <ul className="min-h-screen bg-gray-50">

                        <li key={itemIndex} className="min-h-screen bg-gray-50">

                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
</CheckCircle>
                        </li>
                    </ul>
                  </motion.div>);
                )
  })},
  {
            </div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">
</div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }},
  {
              whileInView={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              viewport={{ once: true }},
  {
            >

              <h2 className="min-h-screen bg-gray-50">
</h2>
              
              <p className="min-h-screen bg-gray-50">
</p>
            </motion.div>
"
            <div className="min-h-screen bg-gray-50">

              <div className="min-h-screen bg-gray-50">

                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services API
                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">POST /api/ai/analyze
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">POST /api/ai/predict
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">POST /api/ai/process
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">AI
                  </div>
                </div>
              </div>
"
              <div className="min-h-screen bg-gray-50">

                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services API
                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">GET /api/infrastructure/status
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">POST /api/security/scan
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">GET /api/cloud/resources
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IT
                  </div>
                </div>
              </div>
"
              <div className="min-h-screen bg-gray-50">

                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS API
                <div className="min-h-screen bg-gray-50">

                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">POST /api/saas/subscribe
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">GET /api/saas/usage
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS
                  
                  <div className="min-h-screen bg-gray-50">

                    <span className="text-sm text-gray-600">POST /api/saas/configure
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">SaaS
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">

          <div className="min-h-screen bg-gray-50">

            <h2 className="min-h-screen bg-gray-50">
</h2>
            
            <p className="min-h-screen bg-gray-50">
</p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }},
  {
            >

              <ArrowRight className="w-5 h-5 ml-2" />"
</ArrowRight>
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
}
]