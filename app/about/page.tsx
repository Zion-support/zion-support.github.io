import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Target, Globe, Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for enterprise clients worldwide." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, enterprise technology, team, mission, values" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Pioneering the future of AI and IT solutions with cutting-edge technology, 
                innovative thinking, and unwavering commitment to client success.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize advanced AI and IT technologies, making them accessible and beneficial 
                  for businesses of all sizes while maintaining the highest standards of security, 
                  reliability, and innovation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Transform businesses through AI innovation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Deliver enterprise-grade security and reliability
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Foster sustainable technological growth
                  </li>
                </ul>
              </div>

              <div className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-12 h-12 text-purple-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the global leader in AI and IT solutions, recognized for our innovative 
                  approach, exceptional client outcomes, and commitment to advancing technology 
                  for the betterment of society.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Global leadership in AI innovation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Exceptional client success rates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Technology for social good
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that speak to our success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-white font-semibold mb-2">Successful Projects</div>
                <div className="text-gray-400 text-sm">Delivered on time and budget</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-white font-semibold mb-2">Happy Clients</div>
                <div className="text-gray-400 text-sm">Across various industries</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-white font-semibold mb-2">Average ROI</div>
                <div className="text-gray-400 text-sm">For our AI implementations</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-white font-semibold mb-2">Uptime Guarantee</div>
                <div className="text-gray-400 text-sm">Enterprise-grade reliability</div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">Continuously pushing the boundaries of what's possible with AI and technology.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance in every solution we deliver.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">Working closely with clients to understand and exceed their expectations.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in every project and interaction.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Agility</h3>
                <p className="text-gray-300">Adapting quickly to changing technology landscapes and client needs.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">Making a positive difference in the world through technology.</p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300">Meet the experts driving our innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JD</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                <p className="text-cyan-400 mb-3">CEO & Founder</p>
                <p className="text-gray-300 text-sm">20+ years in AI and enterprise technology leadership.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Jane Smith</h3>
                <p className="text-cyan-400 mb-3">CTO</p>
                <p className="text-gray-300 text-sm">Expert in machine learning and quantum computing.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mike Johnson</h3>
                <p className="text-cyan-400 mb-3">VP of Engineering</p>
                <p className="text-gray-300 text-sm">Specialist in scalable AI infrastructure and DevOps.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how Zion Tech Group can help transform your business with 
                cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
