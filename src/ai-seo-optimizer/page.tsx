'use client'
import React, { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Search as Find, BarChart as Analytics, TrendingUp as Growth, Target as Aim, Globe as World, FileText as Document, Eye as Visibility, Lightbulb as Ideas, Zap as Flash, Brain as Mind, Cpu as Processor, Shield as Protection, Users as Team, Award as Trophy, Lock as Secure, Database as Storage, Cloud as CloudStorage, Code as Programming, Smartphone as Mobile, Settings as Config, FileText as Content, Search as SEO, Bot as Robot, Palette as Colors, Camera as Photo, Music as Audio, Video as Movie, Gamepad2 as Gaming, ShoppingCart as Cart, CreditCard as Payment, Building as Office, Factory as Industrial, Car as Vehicle, Plane as Aircraft, Ship as Vessel, Train as Railway, Home as House, Heart as Love, Stethoscope as Medical, GraduationCap as Education, Briefcase as Business, Wrench as Tools, Hammer as Construction, Paintbrush as Art, Scissors as CutTool, BookOpen as Book, Calculator as Math, Calendar as Schedule, Clock3 as Time, Compass as Direction, Navigation as Nav, PieChart as Chart, TrendingDown as Decline, Activity as Stats } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AISEOOptimizerPage: React.FC  = () => {
  const features = [
    {
      icon: Search,
      title: 'SEO Analysis',
      description: 'Comprehensive SEO analysis and optimization',
      benefits: ['Keyword research', 'On-page optimization', 'Technical SEO']
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'AI-powered content optimization for search engines',
      benefits: ['Content scoring', 'Keyword density', 'Readability']
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Automated SEO improvements and monitoring',
      benefits: ['Auto-optimization', 'Performance monitoring', 'Alert system']
    },
    {
      icon: Settings,
      title: 'Ranking Tracking',
      description: 'Track and monitor search engine rankings',
      benefits: ['Rank tracking', 'Competitor analysis', 'Performance reports']
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse"></h1>
            AI SEO Optimizer
  
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse"></p>
            Automated SEO Analysis and Optimization,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Boost your search engine rankings with AI-powered SEO optimization. 
            Analyze, optimize, and monitor your website's SEO performance automatically.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <$2 />
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Get Started
  
            <$2 />
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <Search className="w-5 h-5" />
              +1 302 464 0950
  
          </div>
                </section>
        <section className="mb-16"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
            SEO Optimization Features,
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto"></div>
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text"></h3>
                {feature.title}
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed"></p>
                {feature.description}
                <ul className="space-y-2"></ul>
                {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300"></li>
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {benefit}
                  ))}
            ))}
                <Footer />
    </div>
  )
}
export default AISEOOptimizerPage</h2>
                </a>
  </a>
                </p>
  </h1>
                </div></div>
                </div></p>
                </h3></ul>
                </li></main>
                </section>;