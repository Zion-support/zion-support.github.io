
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of technology through innovative AI solutions, quantum computing, 
              and cutting-edge digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <LightBulbIcon className="h-8 w-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge technology solutions, enabling businesses of all sizes 
                to leverage the power of AI, quantum computing, and advanced automation for sustainable growth 
                and competitive advantage.
              </p>
              <p className="text-lg text-gray-300">
                We believe that technology should be accessible, ethical, and transformative, driving positive 
                change across industries and society.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                  <RocketLaunchIcon className="h-8 w-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                To be the global leader in autonomous technology solutions, pioneering the next generation 
                of AI-powered business operations and quantum computing applications.
              </p>
              <p className="text-lg text-gray-300">
                We envision a future where businesses operate seamlessly with intelligent systems, 
                unlocking unprecedented levels of efficiency, innovation, and human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-blue-400">2019</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                  <p className="text-gray-300">
                    Zion Tech Group was founded with a vision to bridge the gap between cutting-edge research 
                    and practical business applications. Our founders recognized the transformative potential 
                    of emerging technologies and committed to making them accessible to businesses worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-green-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-green-400">2021</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Breakthrough</h3>
                  <p className="text-gray-300">
                    We launched our first autonomous AI business management platform, revolutionizing how 
                    companies approach process automation and decision-making. This marked the beginning 
                    of our journey into autonomous technology solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-purple-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-purple-400">2023</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quantum Expansion</h3>
                  <p className="text-gray-300">
                    Expanding into quantum computing services, we began offering quantum solutions for 
                    complex optimization problems, financial modeling, and scientific research applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-orange-600/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-orange-400">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-300">
                    Today, Zion Tech Group serves clients across multiple continents, with offices in 
                    key technology hubs and a growing team of experts in AI, quantum computing, and 
                    digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <LightBulbIcon className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible, exploring new technologies 
                and approaches to solve complex challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-300">
                We prioritize the security and privacy of our clients' data, building systems 
                that are both powerful and secure.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership, working closely with clients to understand 
                their needs and deliver tailored solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-300">
                Our solutions are designed to create positive change on a global scale, 
                benefiting businesses, communities, and the environment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="h-10 w-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards of quality in everything we do, from 
                product development to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="h-10 w-10 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Future-Focused</h3>
              <p className="text-gray-300">
                We're always looking ahead, anticipating future trends and preparing 
                our clients for what's next in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kleber</h3>
              <p className="text-blue-400 mb-3">Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Visionary leader with over 15 years of experience in technology innovation 
                and business transformation.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
              <p className="text-purple-400 mb-3">AI & Machine Learning</p>
              <p className="text-gray-300 text-sm">
                World-class researchers and engineers developing cutting-edge AI solutions 
                for autonomous business operations.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Q</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Team</h3>
              <p className="text-green-400 mb-3">Quantum Computing</p>
              <p className="text-gray-300 text-sm">
                Experts in quantum mechanics and computing, pioneering the next generation 
                of computational technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Zion Tech Group by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-gray-300">Global Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">100+</div>
              <p className="text-gray-300">AI Solutions</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">25+</div>
              <p className="text-gray-300">Quantum Services</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to transform your business with AI, explore quantum computing, 
            or partner with us on innovative projects, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/careers"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
