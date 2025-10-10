'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Award,
  Target,
  Globe,
  Shield,
  Zap,
  Brain,
  BarChart,
  CheckCircle,
  Star,
  Quote,
  User,
  Building,
  GraduationCap,
  Heart,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and team." /></meta>
      </Helmet>
      
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></main>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="max-w-6xl mx-auto"></div>
            {/* Hero Section */}
            <div className="text-center mb-16"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1>
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Leading the future of technology with innovative AI and IT solutions that transform businesses worldwide.
              </p>
            </div>

            {/* Mission Section */}
            <div className="mb-16"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
                <div></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed"></p>
                    To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                    efficiency, and growth. We believe technology should be accessible, powerful, and 
                    transformative for organizations of all sizes.
                  </p>
                  <div className="space-y-4"></div>
                    <div className="flex items-start space-x-3"></div>
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircle>
                      <p className="text-gray-300">Democratizing advanced technology for all businesses</p>
                    </div>
                    <div className="flex items-start space-x-3"></div>
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircle>
                      <p className="text-gray-300">Building sustainable, scalable solutions</p>
                    </div>
                    <div className="flex items-start space-x-3"></div>
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" /></CheckCircle>
                      <p className="text-gray-300">Fostering innovation through collaboration</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-8"></div>
                  <div className="grid grid-cols-2 gap-6"></div>
                    <div className="text-center"></div>
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                        <Users className="w-8 h-8 text-white" /></Users>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
                      <p className="text-gray-300">Projects Delivered</p>
                    </div>
                    <div className="text-center"></div>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                        <Award className="w-8 h-8 text-white" /></Award>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                      <p className="text-gray-300">Uptime Guarantee</p>
                    </div>
                    <div className="text-center"></div>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                        <Globe className="w-8 h-8 text-white" /></Globe>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                      <p className="text-gray-300">Countries Served</p>
                    </div>
                    <div className="text-center"></div>
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                        <Star className="w-8 h-8 text-white" /></Star>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">5★</h3>
                      <p className="text-gray-300">Client Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16"></div>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Brain className="w-8 h-8 text-white" /></Brain>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                  <p className="text-gray-300"></p>
                    We constantly push the boundaries of what's possible with technology, 
                    always seeking new ways to solve complex problems.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Shield className="w-8 h-8 text-white" /></Shield>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                  <p className="text-gray-300"></p>
                    We prioritize the security and privacy of our clients' data, 
                    implementing industry-leading security measures.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <Heart className="w-8 h-8 text-white" /></Heart>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                  <p className="text-gray-300"></p>
                    We are committed to delivering exceptional quality in everything we do, 
                    from initial consultation to ongoing support.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16"></div>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <User className="w-12 h-12 text-white" /></User>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Engineers</h3>
                  <p className="text-cyan-400 mb-4">Machine Learning Specialists</p>
                  <p className="text-gray-300 text-sm"></p>
                    Expert in developing and deploying AI solutions that drive business value.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <Building className="w-12 h-12 text-white" /></Building>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">IT Architects</h3>
                  <p className="text-cyan-400 mb-4">Cloud & Infrastructure Experts</p>
                  <p className="text-gray-300 text-sm"></p>
                    Designing scalable, secure, and efficient technology infrastructure.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <GraduationCap className="w-12 h-12 text-white" /></GraduationCap>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Scientists</h3>
                  <p className="text-cyan-400 mb-4">Analytics & Insights Specialists</p>
                  <p className="text-gray-300 text-sm"></p>
                    Transforming raw data into actionable insights and business intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center"></div>
              <div className="bg-slate-800/50 rounded-lg p-8"></div>
                <h2 className="text-2xl font-bold text-white mb-4"></h2>
                  Ready to Work With Us?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
                  Join hundreds of satisfied clients who have transformed their businesses with our solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  ></a>
                    Get Started Today
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  ></a>
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer /></Footer>
    </>
  )
  };

export default AboutPage;
