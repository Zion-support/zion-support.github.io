import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Zap, Shield, Users, Globe } from 'lucide-react'

const Ai3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for 3D generation.',
      benefits: ['Neural network processing', 'Pattern recognition', 'Predictive modeling', 'Smart optimization']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization for 3D projects.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Usage analytics', 'Cost tracking']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'High-performance 3D generation with optimized algorithms and GPU acceleration.',
      benefits: ['GPU acceleration', 'Parallel processing', 'Optimized algorithms', 'Fast rendering']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
      benefits: ['End-to-end encryption', 'Data protection', 'Compliance standards', 'Secure storage']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate seamlessly with your team on 3D projects and share resources.',
      benefits: ['Real-time collaboration', 'Version control', 'Resource sharing', 'Team management']
    },
    {
      icon: Globe,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with cloud platforms and third-party services.',
      benefits: ['Cloud storage', 'API integration', 'Third-party services', 'Scalable infrastructure']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Advanced AI-powered 3D generation solution for modern businesses. Create stunning 3D models with cutting-edge artificial intelligence technology." />
        <meta name="keywords" content="AI 3D generation, artificial intelligence, 3D modeling, business solutions, AI technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Generation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered 3D generation solution for modern businesses. Create stunning 3D models with cutting-edge artificial intelligence technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Advanced AI technology that drives results and transforms your 3D generation workflow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-teal-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your 3D Generation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven 3D generation and take your projects to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Ai3DGenerationPage