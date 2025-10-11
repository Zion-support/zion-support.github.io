import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TestTube, Bug, CheckCircle, Clock, Shield, Zap } from 'lucide-react'

const AiAutomatedTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'AI Test Generation',
      description: 'Automatically generate comprehensive test cases based on your application requirements.'
    },
    {
      icon: Bug,
      title: 'Intelligent Bug Detection',
      description: 'Advanced algorithms detect edge cases and potential issues before they reach production.'
    },
    {
      icon: CheckCircle,
      title: 'Automated Validation',
      description: 'Continuous validation of functionality, performance, and security across all environments.'
    },
    {
      icon: Clock,
      title: '24/7 Testing',
      description: 'Round-the-clock automated testing ensures your application is always ready for deployment.'
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and ensure compliance.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Parallel test execution reduces testing time while maintaining thorough coverage.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Testing - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your testing process with AI-powered automated testing solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automated Testing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionize your testing process with AI-powered automated testing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Testing?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our AI automated testing solutions can improve your development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiAutomatedTestingPage