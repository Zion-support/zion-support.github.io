import React from "react";

export const metadata = {
  title: "AI Services & Solutions | Zion Tech Group",
  description:
    "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
  keywords: "AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting",
};

export default function AIServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions. From custom 
            LLM development to computer vision and MLOps, we deliver enterprise-grade 
            AI services that drive real business value.
          </p>
        </div>

        {/* Core AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom LLM Development</h3>
              <p className="text-gray-600">Build and deploy custom large language models tailored to your specific use cases</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">RAG Systems</h3>
              <p className="text-gray-600">Retrieval-Augmented Generation systems for intelligent document processing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Agents</h3>
              <p className="text-gray-600">Intelligent autonomous agents for task automation and decision making</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Computer Vision</h3>
              <p className="text-gray-600">Image recognition, object detection, and visual analysis solutions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MLOps</h3>
              <p className="text-gray-600">Machine learning operations for model deployment and monitoring</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NLP Solutions</h3>
              <p className="text-gray-600">Natural language processing for text analysis and understanding</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored AI solutions that fit your specific business needs</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Rapid deployment with proven methodologies and best practices</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance for all AI implementations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support and maintenance for all AI systems</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your AI requirements and create a custom solution that drives real business value.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}