import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckIcon, 
  StarIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI and IT solutions. Meet our expert team and discover our proven track record." />
        <meta name="keywords" content="about us, AI experts, IT solutions team, technology company, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a leading technology company specializing in AI solutions, IT infrastructure, 
            and digital transformation services that drive real business results.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should solve real problems and deliver 
                measurable value to our clients.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our commitment is to provide real, functional solutions - not mock services - 
                that transform how businesses operate in the digital age.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300">We stay at the forefront of technology trends and implement the latest solutions.</p>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security & Reliability</h3>
                <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded with a vision to bridge the gap between cutting-edge technology and real business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2018</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Founded</h3>
              <p className="text-gray-300">Started with a small team of passionate technologists focused on AI and IT solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2020</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expansion</h3>
              <p className="text-gray-300">Grew to serve enterprise clients and launched our micro SAAS platform.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2024</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Today</h3>
              <p className="text-gray-300">Leading provider of AI and IT solutions with 500+ successful projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">We strive for the highest quality in everything we deliver.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">We work closely with our clients as partners in success.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <LightBulbIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">We embrace new technologies and creative solutions.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="text-gray-300">We maintain the highest ethical standards in all our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep technical knowledge across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 group hover:bg-slate-600/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300 mb-6">Machine learning, deep learning, natural language processing, and computer vision solutions.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Custom AI Models</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Chatbot Development</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Predictive Analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 group hover:bg-slate-600/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">Scalable, secure, and reliable cloud solutions for modern businesses.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>AWS & Azure Expertise</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>DevOps & CI/CD</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Microservices Architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 group hover:bg-slate-600/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">Comprehensive security solutions to protect your digital assets.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Security Audits</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Penetration Testing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-4 h-4 text-green-400 mr-2" />
                  <span>Compliance Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              By the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300 text-lg">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-lg">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
