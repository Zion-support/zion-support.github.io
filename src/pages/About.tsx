import React from 'react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are pioneers in revolutionary AI technology, delivering enterprise solutions 
            that transform businesses and drive unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To revolutionize enterprise operations through cutting-edge AI technology, 
              delivering solutions that achieve 99.9% automation rates and 2000x processing speed improvements.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in the power of artificial intelligence to transform businesses, 
              create sustainable growth, and unlock human potential.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To be the global leader in AI-powered enterprise solutions, 
              enabling every organization to achieve autonomous operations and exponential growth.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a future where AI seamlessly integrates with human creativity 
              to solve the world's most complex business challenges.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends to deliver solutions that give you a competitive edge.
              </p>
            </div>
            
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Your data and operations are protected with military-grade security protocols.
              </p>
            </div>
            
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Excellence</h3>
              <p className="text-gray-300">
                We deliver solutions that exceed expectations and drive measurable business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About