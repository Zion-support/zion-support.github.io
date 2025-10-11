<<<<<<< HEAD
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
=======
                </p>
'use client'
import React from 'react'
import Navigation from '../components/Navigation'import Footer from '../components/Footer'
import {  Users, Award, CheckCircle  } from 'lucide-react'const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and neural networks.',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Research', 'Team Leadership']
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Technology visionary with expertise in cloud architecture and scalable systems.',
      expertise: ['Cloud Architecture', 'System Design', 'Technology Strategy', 'Innovation']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on creating user-centered AI solutions.',
      expertise: ['Product Strategy', 'User Experience', 'AI Solutions', 'Market Analysis']
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

const PagePage: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></span></span>Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              The talented individuals behind our success.
            </p>
          </div>
        </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"></div></div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"></div></div>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{member.name}</h3>
                <p className="text-cyan-400 mb-4"></p></p>{member.role}</p>
                <p className="text-gray-300"></p></p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Our Values
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            <div className="text-center"></div></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div></div>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></h3>Excellence</h3>
              <p className="text-gray-300"></p></p>We strive for the highest quality in everything we do.</p>
            </div>
            <div className="text-center"></div></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div></div>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></h3>Collaboration</h3>
              <p className="text-gray-300"></p></p>We believe in the power of teamwork and building strong relationships.</p>
            </div>
            <div className="text-center"></div></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div></div>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></h3>Innovation</h3>
              <p className="text-gray-300"></p></p>We constantly push the boundaries of what's possible.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PagePage;