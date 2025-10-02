import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export const metadata = {
  title: 'About Zion Tech Group — Revolutionary AI & IT Solutions Leader',
  description: 'Learn about Zion Tech Group\'s mission to deliver revolutionary AI breakthroughs, enterprise automation, and cutting-edge technology solutions with proven ROI.',
  keywords: 'about zion tech group, AI company, enterprise technology solutions, AI transformation, technology leadership',
  openGraph: {
    title: 'About Zion Tech Group — Revolutionary AI & IT Solutions Leader',
    description: 'Learn about Zion Tech Group\'s mission to deliver revolutionary AI breakthroughs, enterprise automation, and cutting-edge technology solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Zion Tech Group - AI Technology Leadership',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Pioneering the future of AI and enterprise technology with revolutionary breakthroughs 
              that deliver unprecedented performance gains and transformative business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To accelerate human potential through revolutionary AI technologies that deliver 
                1000x performance improvements, 95% automation rates, and proven ROI of $150M+ 
                for enterprise clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in the transformative power of AI to solve complex business challenges 
                and create unprecedented value for organizations across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Universal AI Integration</h4>
                    <p className="text-gray-600">Every enterprise empowered with autonomous AI systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quantum-Enhanced Computing</h4>
                    <p className="text-gray-600">Next-generation computational capabilities for all</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable Innovation</h4>
                    <p className="text-gray-600">Technology that benefits humanity and the planet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our innovation and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible with cutting-edge AI and technology solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security and governance frameworks that ensure reliable, safe AI deployment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Measurable outcomes with documented ROI and performance improvements for every client.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Success</h3>
              <p className="text-gray-600">
                Dedicated partnership approach focused on achieving your business objectives and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans and AI pioneers driving the future of enterprise technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kleber</h3>
              <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                Visionary leader with 15+ years in AI and enterprise technology, 
                driving revolutionary breakthroughs in quantum computing and autonomous systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
              <p className="text-green-600 font-medium mb-4">Chief Technology Officers</p>
              <p className="text-gray-600">
                World-class AI researchers and engineers developing next-generation 
                neural architectures and quantum-enhanced computing solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
              <p className="text-purple-600 font-medium mb-4">VP of Solutions</p>
              <p className="text-gray-600">
                Expert team delivering enterprise-grade AI implementations with 
                proven ROI and comprehensive transformation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Proven results that speak to our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">$150M+</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Automation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1000x</div>
              <div className="text-blue-100">Performance Gains</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the AI revolution and unlock unprecedented growth with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}