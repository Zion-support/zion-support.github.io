import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers and developing cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships and deliver solutions that drive real business value.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time.'
    }
  ]

  const values = [
    {
      icon: CheckCircle,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique challenges and goals.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.'
    }
  ]

  const team = [
    {
      name: 'AI Research Team',
      description: 'Leading experts in artificial intelligence and machine learning.',
      expertise: ['Machine Learning', 'Deep Learning', 'Natural Language Processing']
    },
    {
      name: 'Software Engineering',
      description: 'Full-stack developers specializing in modern web technologies.',
      expertise: ['React', 'TypeScript', 'Node.js', 'Cloud Architecture']
    },
    {
      name: 'Data Science',
      description: 'Data scientists who transform raw data into actionable insights.',
      expertise: ['Data Analysis', 'Predictive Modeling', 'Business Intelligence']
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading AI and technology solutions company" />
        <meta name="keywords" content="about, AI company, technology solutions, artificial intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading AI and technology solutions company dedicated to transforming businesses through innovative artificial intelligence and cutting-edge technology.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our core principles guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
      description: 'We focus on creating solutions that make a positive difference in the world and our clients\' businesses.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Technology Officer',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and neural networks.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Engineering',
      bio: 'Full-stack developer and system architect specializing in scalable cloud solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'UX/UI expert focused on creating intuitive and engaging user experiences.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and the team behind our innovative technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, artificial intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a cutting-edge technology company specializing in AI and IT solutions that transform businesses and drive innovation.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What Sets Us Apart
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Our core principles that drive everything we do
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Meet Our Team
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  The brilliant minds behind our innovative solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 mb-4">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              </button>
            </div>
          </div>
        </section>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default AboutPage