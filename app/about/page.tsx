import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading technology company specializing in AI, quantum computing, and digital transformation solutions.',
  keywords: ['about us', 'company', 'team', 'mission', 'vision', 'technology leadership']
}

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with 15+ years in machine learning and neural networks.',
      image: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Quantum Computing Director',
      bio: 'Quantum physics expert specializing in quantum algorithms and optimization.',
      image: '👨‍🔬'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Automation',
      bio: 'Automation specialist with expertise in RPA and intelligent process automation.',
      image: '👨‍💻'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Chief Technology Officer',
      bio: 'Technology visionary with 20+ years in enterprise software and digital transformation.',
      image: '👩‍🔬'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with technology, constantly exploring new frontiers in AI and quantum computing.',
      icon: '💡'
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients. We are committed to delivering exceptional value and results.',
      icon: '🎯'
    },
    {
      title: 'Ethical Technology',
      description: 'We develop and deploy technology responsibly, ensuring our solutions benefit society while maintaining the highest ethical standards.',
      icon: '⚖️'
    },
    {
      title: 'Continuous Learning',
      description: 'In a rapidly evolving field, we stay ahead by continuously learning, adapting, and evolving our expertise.',
      icon: '📚'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering the future of technology through innovative AI, quantum computing, and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge technology and empower organizations to achieve unprecedented growth through AI, quantum computing, and intelligent automation.
              </p>
              <p className="text-gray-300">
                We believe that every organization, regardless of size, should have access to the transformative power of advanced technology. Our mission is to make this vision a reality.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the world's leading technology partner, creating a future where AI and quantum computing work seamlessly together to solve humanity's greatest challenges.
              </p>
              <p className="text-gray-300">
                We envision a world where technology serves as a force for good, driving innovation, efficiency, and progress across all industries and sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-300">
              <p className="text-xl mb-6">
                Founded in 2020 by a team of visionary technologists and researchers, Zion Tech Group emerged from a simple yet powerful belief: 
                the future belongs to those who can harness the full potential of artificial intelligence and quantum computing.
              </p>
              <p className="mb-6">
                What started as a small research lab has grown into a global technology powerhouse, serving Fortune 500 companies, 
                innovative startups, and government agencies worldwide. Our journey has been marked by breakthrough innovations, 
                successful implementations, and a relentless pursuit of excellence.
              </p>
              <p className="mb-6">
                Today, we stand at the forefront of the AI revolution, with our solutions powering everything from autonomous vehicles 
                to quantum-encrypted communications. Our team of world-class engineers, scientists, and consultants continues to push 
                the boundaries of what's possible.
              </p>
              <p>
                As we look to the future, we remain committed to our founding principles: innovation, integrity, and impact. 
                We're not just building technology; we're building the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl text-center hover:bg-gray-700/50 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, and technology innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl text-center hover:bg-gray-700/50 transition-colors">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the hundreds of organizations that trust Zion Tech Group to transform their business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}