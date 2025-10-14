import React from "react"
import { Helmet } from "react-helmet-async"
export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Document Processor - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Advanced AI document processing solution powered by artificial intelligence. Streamline your document workflows with cutting-edge AI technology and automation." />
        <meta name="keywords" content="AI, document processing, artificial intelligence, automation, business solutions, technology" />
      </Helmet>

      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Document Processor
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI document processing solution powered by artificial intelligence. Streamline your document workflows with cutting-edge AI technology and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Powerful AI-driven document processing capabilities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <feature .icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Document Processor?</h2>
            <p className="text-xl text-gray-600">Transform your document processing with intelligent automation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Efficiency</h3>
              <p className="text-gray-600">Process documents up to 10x faster with AI-powered automation and intelligent data extraction.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Reduction</h3>
              <p className="text-gray-600">Reduce operational costs by up to 60% through automated document processing and workflow optimization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Accuracy</h3>
              <p className="text-gray-600">Achieve 99%+ accuracy in document processing with advanced AI algorithms and machine learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Document Processing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with our AI document processor and experience the future of intelligent document management.
          </p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Start Free Trial
          </button>
        </div>
      </section>
    </>
  )
}

export default AiDocumentProcessorPage;