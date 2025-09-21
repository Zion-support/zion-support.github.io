import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Comprehensive technology solutions designed to transform your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive cloud infrastructure and migration services including AWS, Azure, and Google Cloud.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Advanced security solutions to protect your digital assets with threat detection and compliance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Intelligent solutions powered by artificial intelligence to automate processes and gain insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App