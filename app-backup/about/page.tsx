import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Users, Shield, Globe, Brain, CheckCircle, Award, Star, Send, BarChart3, Target, Zap, DollarSign, Clock, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react'
export const metadata: Metadata = {,
    title: 'About Us - Zion Tech Group | AI & IT Solutions',
      description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.'
  keywords: 'about us, AI solutions, IT services, technology company, digital transformation'
  openGraph: {,
    title: 'About Us - Zion Tech Group',
      description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.'
    type: 'website',
    url: 'https://ziontechgroup.com/about'}}
const AboutPage: React.FC = () => {
  const values = [;
    {
      icon: Brain,
    title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'}
    {
      icon: Shield,
    title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'}
    {
      icon: Globe,
    title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and expertise.'}
    {
      icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their unique needs.'}
  ]
  const stats = [
    { number: '500+', label: 'Projects Completed' }
    { number: '50+', label: 'Happy Clients' }
    { number: '5+', label: 'Years Experience' }
    { number: '24/7', label: 'Support Available' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation across industries.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover: from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get in Touch
                  <ArrowRight className="w-8 h-8" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                To empower businesses with cutting-edge AI and IT solutions that drive growth
                efficiency, and innovation. We believe technology should be accessible
                reliable, and transformative.
              </p>
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover: bg-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can help your business grow and succeed.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover: from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-8 h-8" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover: bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
};
export default AboutPage;