'use client';
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering AI and IT solutions that transform businesses and drive meaningful impact.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Every solution we create is tailored to meet the unique needs and challenges of our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and innovation in everything we do.'
    }

  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create solutions that were previously thought impossible.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our business dealings and client relationships.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a meaningful difference in the world and drive positive change.'
    }

  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'AI research pioneer with 15+ years in machine learning and neural networks.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      description: 'Full-stack architect specializing in scalable cloud infrastructure and microservices.'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      description: 'Leading expert in natural language processing and computer vision technologies.'
    }

  ]

  return (
    <>
      <Helmet />
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of AI and IT experts dedicated to transforming businesses through innovative technology solutions." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values, technology experts" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}

        <section className="relative py-20 px-4 overflow-hidden">
          <div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a team of passionate AI and IT experts dedicated to transforming businesses through innovative technology solutions that drive real-world impact.
            </p>
            <div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Our Story
                <ArrowRight />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our core principles guide everything we do and shape our approach to solving complex challenges.
              </p>
            </div>

            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
    <div>
          <div>
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Values Section */}

        <section className="py-20 px-4">
          <div>
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
    <div>
          <div>
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Team Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8 bg-slate-800/50">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>

            <div>
              {team.map((member, index) => (
                <div>
          <div>
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                  <p className="text-blue-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-300 text-center">{member.description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4 sm: px-6 lg: px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our team can help transform your business with cutting-edge AI and IT solutions.
            </p>
            <div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get In Touch
                <ArrowRight />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;