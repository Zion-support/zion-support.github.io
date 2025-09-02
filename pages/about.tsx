import React from 'react';
import Head from 'next/head';
import { Users, Target, Award, Globe, Brain, Code, Network, Rocket, CheckCircle, Star } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships by understanding your unique needs and delivering tailored solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and project delivery.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better. Our solutions are designed to create positive change and drive progress.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Technology visionary with 15+ years of experience in AI, software development, and business transformation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team specializing in AI model development, natural language processing, and computer vision.',
      image: '/team/ai-team.jpg'
    },
    {
      name: 'DevOps Specialists',
      role: 'Infrastructure & Cloud',
      description: 'Cloud architecture experts ensuring scalable, secure, and reliable technology infrastructure.',
      image: '/team/devops-team.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Globe }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. Leading technology solutions provider specializing in AI, IT services, and innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Zion Tech Group
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
                cutting-edge IT services, and strategic technology consulting. Our mission is to empower organizations to thrive 
                in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To democratize access to cutting-edge technology by providing affordable, scalable, and innovative solutions 
                  that help businesses of all sizes compete and succeed in the digital marketplace. We believe technology 
                  should be an enabler, not a barrier.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading technology partner for businesses worldwide, known for our innovation, reliability, 
                  and commitment to client success. We envision a future where every organization has access to the 
                  technology tools they need to thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and client success
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The talented individuals behind Zion Tech Group's success
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions to drive your business forward
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600">Machine learning, natural language processing, and intelligent automation solutions.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600">Infrastructure management, cloud solutions, and comprehensive IT support.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600">Scalable software-as-a-service solutions tailored to your business needs.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emerging Tech</h3>
                <p className="text-gray-600">Cutting-edge technologies including blockchain, IoT, and next-gen solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}