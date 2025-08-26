import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Rocket, 
  Globe, 
  Award,
  Star,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Shield,
  Cpu,
  Brain,
  Cloud,
  Database,
  Network,
  MessageSquare
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of technology with cutting-edge solutions, quantum computing, 
              and AI-driven innovation for tomorrow's challenges.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-lg font-medium">
              <Rocket className="w-5 h-5 mr-2" />
              Founded in 2019
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To accelerate human progress through innovative technology solutions that solve 
                  the world's most complex challenges and create a sustainable future for all.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Democratize access to advanced technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Drive sustainable innovation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Empower businesses and individuals</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To be the global leader in next-generation technology solutions, 
                  shaping a world where technology enhances human potential and creates 
                  unprecedented opportunities for growth and discovery.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-300">Lead the AI revolution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-300">Pioneer quantum computing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-300">Transform industries globally</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-black/20 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push boundaries and explore new possibilities, 
                  never settling for the status quo.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-black/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-purple-400 text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, 
                  delivering the highest quality solutions to our clients.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-black/20 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-green-400 text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-300">
                  We operate with honesty, transparency, and ethical principles 
                  in all our business relationships.
                </p>
              </div>

              {/* Collaboration */}
              <div className="bg-black/20 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-red-400 text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and partnerships 
                  to achieve extraordinary results.
                </p>
              </div>

              {/* Sustainability */}
              <div className="bg-black/20 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-blue-400 text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-300">
                  We're committed to creating technology solutions that 
                  benefit both people and the planet.
                </p>
              </div>

              {/* Growth */}
              <div className="bg-black/20 backdrop-blur-sm border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-yellow-400 text-xl font-semibold mb-2">Growth</h3>
                <p className="text-gray-300">
                  We foster continuous learning and development, 
                  both for our team and our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Focus */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Technology Focus
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in cutting-edge technologies that are reshaping the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-cyan-400 text-lg font-semibold mb-2">AI & ML</h3>
                <p className="text-gray-400 text-sm">
                  Advanced artificial intelligence and machine learning solutions
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-purple-400 text-lg font-semibold mb-2">Quantum Computing</h3>
                <p className="text-gray-400 text-sm">
                  Next-generation quantum processors and algorithms
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-green-400 text-lg font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-gray-400 text-sm">
                  Scalable cloud infrastructure and automation
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-red-400 text-lg font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">
                  Advanced security and compliance solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A diverse group of experts, innovators, and visionaries working together 
                to shape the future of technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Leadership */}
              <div className="bg-black/20 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-cyan-400 text-xl font-semibold mb-2">Leadership Team</h3>
                <p className="text-gray-300 mb-4">
                  Experienced executives with decades of technology leadership
                </p>
                <p className="text-gray-400 text-sm">
                  Strategic visionaries driving innovation and growth
                </p>
              </div>

              {/* Engineering */}
              <div className="bg-black/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-purple-400 text-xl font-semibold mb-2">Engineering</h3>
                <p className="text-gray-300 mb-4">
                  World-class engineers and developers
                </p>
                <p className="text-gray-400 text-sm">
                  Building the next generation of technology solutions
                </p>
              </div>

              {/* Research */}
              <div className="bg-black/20 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-green-400 text-xl font-semibold mb-2">Research & Development</h3>
                <p className="text-gray-300 mb-4">
                  Cutting-edge researchers and scientists
                </p>
                <p className="text-gray-400 text-sm">
                  Exploring the frontiers of technology and innovation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to be part of the future? Let's work together to create 
              something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Join Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}