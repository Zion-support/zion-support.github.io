'use client'
import React, { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BarChart, Target, Zap, Settings, CheckCircle } from 'lucide-react'
const AIAnalyticsPage: React.FC  = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Live data visualization and insights',
      benefits: ['Live dashboards', 'Real-time metrics', 'Instant insights']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions and forecasting',
      benefits: ['Trend prediction', 'Forecasting', 'Risk analysis']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Intelligent report generation and distribution',
      benefits: ['Auto reports', 'Custom dashboards', 'Scheduled delivery']
    },
    {
      icon: Settings,
      title: 'Custom Metrics',
      description: 'Customizable metrics and KPIs',
      benefits: ['Custom KPIs', 'Flexible metrics', 'Personalized views']
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse"></h1>
            AI Analytics
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse"></p>
            Intelligent Business Intelligence
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
            Transform your data into actionable insights with our AI-powered analytics platform. 
            Get real-time visibility into your business performance and make data-driven decisions.
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <$2 />
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Get Started
  
            <$2 />
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <BarChart className="w-5 h-5" />
              +1 302 464 0950
  
          </div>
                </section>
        <section className="mb-16"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
            Analytics Features,
  
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
export default AIAnalyticsPage</h2>
                </a>
  </a>
                </p>
  </h1>
                </div></div>
                </div></p>
                </p></h3>
                </ul></li>
                </main></section>;