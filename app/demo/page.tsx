import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Play, Star, Users, ArrowRight, CheckCircle, Zap, Brain, Shield } from 'lucide-react'

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0)

  const demos = [
    {
      id: 1,
      title: 'AI Automation Demo',
      description: 'See how our AI can automate complex business processes and decision-making workflows.',
      duration: '5 minutes',
      features: [
        'Process automation',
        'Decision making',
        'Exception handling',
        'Real-time monitoring'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Cybersecurity Dashboard',
      description: 'Experience our advanced security monitoring and threat detection capabilities.',
      duration: '3 minutes',
      features: [
        'Threat detection',
        'Real-time alerts',
        'Security analytics',
        'Incident response'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Data Analytics Platform',
      description: 'Explore our powerful data visualization and business intelligence tools.',
      duration: '4 minutes',
      features: [
        'Interactive dashboards',
        'Predictive analytics',
        'Custom reports',
        'Data visualization'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      comment: 'The AI automation demo was incredible. I could see exactly how it would streamline our operations.'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      rating: 5,
      comment: 'The cybersecurity dashboard gave me confidence in our security posture. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Analytics Plus',
      rating: 5,
      comment: 'The data analytics platform is exactly what we need. The demo was very informative.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            See It in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions through interactive demos. 
            See exactly how our technology can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              Start Demo
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Demo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(index)}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedDemo === index ? 'ring-2 ring-cyan-500 bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${demo.color} rounded-xl mb-6`}>
                  <demo.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{demo.title}</h3>
                <p className="text-gray-300 mb-6">{demo.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-semibold">{demo.duration}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-white font-semibold">4.9</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {demos[selectedDemo].title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {demos[selectedDemo].description}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-white">Duration: {demos[selectedDemo].duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-cyan-400 mr-3" />
                  <span className="text-white">Perfect for: Business leaders, IT managers, decision makers</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Start Interactive Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 text-center">
              <div className="text-8xl mb-6">🎥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Experience</h3>
              <p className="text-gray-300 mb-6">
                Click through our live demo to see exactly how our solutions work in real-world scenarios.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  4.9/5 rating
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  1,000+ views
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What People Say About Our Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See More?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
              Schedule Live Demo
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DemoPage