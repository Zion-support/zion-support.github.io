'use client';
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {const features = [
    {
      ico, n: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering AI and IT solutions that transform businesses and drive meaningful impact.'} ,
    {icon: Users,
      title: 'Client-Focused',
      description: 'Every solution we create is tailored to meet the unique needs and challenges of our clients.'} ,
    {icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and innovation in everything we do.'} ]

  const values = [
    {icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create solutions that were previously thought impossible.'} ,
    {icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our business dealings and client relationships.'} ,
    {icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a meaningful difference in the world and drive positive change.'} ]

  const team = [
    {name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'AI research pioneer with 15+ years in machine learning and neural networks.'} ,
    {name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      description: 'Full-stack architect specializing in scalable cloud infrastructure and microservices.'} ,
    {name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      description: 'Leading expert in natural language processing and computer vision technologies.'} ]

  return (
    <div className="min-h-screen bg-gray-50"
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts in AI and IT solutions."
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are a team of passionate technologists dedicated to transforming businesses through innovative AI and technology solutions.
            </p>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Drives Us</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our core principles guide everything we do
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
      
      <Footer />
    </>
                );
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
      
      <Footer />
    </>
                );
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We focus on creating solutions that make a positive difference in the world and our clients' businesses.
            </p>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The experts behind our innovative solutions
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
=======
        <section className="
    g: px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center"
              <h1 className="text-4xl m, d:text-6xl font-bold text-white mb-6"
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation.
              </p>

        {/* Mission Section */}
        <section className="
    g: px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-6"
              <p className="text-xl text-gray-300 max-w-4xl mx-auto"
                To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. 
                We believe technology should be accessible, powerful, and transformative.
              </p>

            <div className="grid md:grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4"
                  <h3 className="text-xl font-semibold text-white mb-3"
                  <p className="text-gray-300"
>>>>>>> cursor/fix-errors-and-merge-to-main-c4fe
                </div>
      
      <Footer />
    </>
              ))}
            </div>
<<<<<<< HEAD
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </main>
      
=======

        {/* Values Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8 bg-white/5"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="
    ,
    d: text-4xl font-bold text-white mb-6"
            </div>

            <div className="grid m, d:grid-cols-3 gap-8"
              {values.map((value, index) => (
                <div key={index} className="text-center"
                  <value.icon className="w-16 h-16 text-purple-400 mx-auto mb-6"
                  <h3 className="text-2xl font-semibold text-white mb-4"
                  <p className="text-gray-300"
                </div>
              ))}
            </div>

        {/* Team Section */}
        <section className="
    g: px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-6"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Our team of experts brings together decades of experience in AI, machine learning, and enterprise IT solutions.
              </p>

            <div className="grid md:grid-cols-3 gap-8"
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                  <h3 className="text-xl font-semibold text-white mb-2"
                  <p className="text-purple-400 mb-4"
                  <p className="text-gray-300"
                </div>
              ))}
            </div>

        {/* CTA Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-4xl mx-auto text-center"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8"
              Let's work together to create innovative solutions that drive your success.
            </p>
            <button className="
    ,
    r: from-purple-600 hove, r:to-pink-600 transition-all duration-300 flex items-center mx-auto"
              Get Started
              <ArrowRight className="w-5 h-5 ml-2"
            </button>

>>>>>>> cursor/fix-errors-and-merge-to-main-c4fe
      <Footer />
    </>
  )
}

export default AboutPage
      </div>