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
const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto text-center">
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group

            </h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses 
              through innovative AI and IT solutions.



        {/* Stats Section */}
        </p><section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.




        {/* Mission Section */}
        </p><section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              </div><div>
                </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission

                </h2><p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, 
                  reliable, and transformative.

                </p><p className="text-lg text-gray-300 mb-8">
                  Our team of experts combines deep technical knowledge with business acumen 
                  to deliver solutions that not only meet your current needs but also prepare 
                  you for future challenges.

                </p><div className="flex flex-col sm:flex-row gap-4">
                  </div><a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    </a><MessageCircle className="w-5 h-5" />
                    <span>Get in Touc</span>h</span>

                  <a
                    href="/services"
                    className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                    </a><Settings className="w-5 h-5" />
                    <span>Our Service</span>s</span>



              <div className="relative">
                </div><div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                  </div><div className="space-y-6">
                    </div><div className="flex items-center space-x-3">
                      </div><div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                    <div className="space-y-4">
                      </div><div className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded"></div>
                      <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded w-1/2"></div>

                    <div className="text-center text-white">
                      </div><div className="text-2xl font-bold">AI Dashboar</div>d</div>
                      <div className="text-sm text-gray-300">Real-time Analytic</div>s</div>


                  <h3 className="text-xl font-bold text-white mb-4">Our Visio</h3>n</h3>
                  <p className="text-gray-300">
                    To be the leading provider of AI and IT solutions, helping businesses 
                    worldwide achieve their digital transformation goals.






        {/* Values Section */}
        </p><section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Values

              </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do


            </p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  </div><div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    </div><value.icon className="w-8 h-8 text-white" />

                  <h3 className="text-xl font-bold text-white mb-3">{value.title</h3>}</h3>
                  <p className="text-gray-300">{value.description</p>}</p>

              ))}



        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Our Team

              </h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The experts behind our success


            </p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  </div><div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div><User className="w-12 h-12 text-white" />

                  <h3 className="text-xl font-bold text-white mb-2">{member.name</h3>}</h3>
                  <p className="text-blue-400 mb-3">{member.role</p>}</p>
                  <p className="text-gray-300 text-sm">{member.bio</p>}</p>

              ))}



        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us</h2>?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how we can help transform your business with AI and technology.

            </p><div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button><button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                Contact Us





);
};
export default AboutPage;
