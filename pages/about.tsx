import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import { Users, Target, Award, Globe, Zap, Shield, Brain, Cloud } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology solutions.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation.'
    },
    {
      icon: Zap,
      title: 'Speed & Agility',
      description: 'Rapid deployment and iterative improvement to keep you ahead of the competition.'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Technology leader with expertise in AI, cloud architecture, and digital transformation.',
      image: '/team/kleber.jpg'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision to democratize enterprise technology.'
    },
    {
      year: '2024',
      title: 'First 10 Clients',
      description: 'Successfully delivered solutions for early adopters across various industries.'
    },
    {
      year: '2025',
      title: 'AI Platform Launch',
      description: 'Launched comprehensive AI solutions platform for business automation.'
    }
  ];

  return (
    <ModernLayout
      title="About Us | Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions."
      canonical="https://ziontechgroup.com/about"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a technology company focused on making enterprise-grade solutions accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To accelerate digital transformation by providing intelligent, scalable, and secure technology solutions that empower businesses to innovate and grow.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every business deserves access to the same cutting-edge technology that powers Fortune 500 companies, delivered with the agility and personal touch of a boutique consultancy.
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Global Reach</div>
                  <div className="text-gray-600">Serving clients worldwide</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-yellow-300" />
                    <span>Proven track record of successful implementations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-yellow-300" />
                    <span>Expertise in emerging technologies</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Cloud className="h-5 w-5 text-yellow-300" />
                    <span>Scalable cloud-native solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-yellow-300" />
                    <span>Enterprise-grade security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind Zion Tech Group's innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to democratize enterprise technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Zion Tech Group can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a 
              href="/services" 
              className="border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </ModernLayout>
  );
}