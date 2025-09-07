import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Award, Users, Target, Globe, CheckCircle, Star } from 'lucide-react'
export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'about, company, mission, AI solutions, micro SaaS, IT services, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'About | Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
}
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to delivering
            cutting-edge AI solutions, innovative micro SaaS platforms, and
            comprehensive IT services that drive real business transformation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-slate-300">
                Delivering exceptional quality in every solution we create.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-slate-300">
                Pushing the boundaries of what's possible with technology.
              </p>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-lg">
              <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Results</h3>
              <p className="text-slate-300">
                Focused on delivering measurable business outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
                <p className="text-slate-300">
                  Every solution is tailored to meet specific client needs and business objectives.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Globe className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                <p className="text-slate-300">
                  Leveraging international best practices and cutting-edge technologies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-slate-300">
                  Staying ahead of technology trends and industry developments.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Focus</h3>
                <p className="text-slate-300">
                  Maintaining the highest standards in all our deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-800 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our innovative solutions can help transform your business
            and drive your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-slate-400 hover:border-white rounded-lg font-semibold transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
