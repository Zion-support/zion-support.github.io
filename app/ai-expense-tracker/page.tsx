<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

const Page: React.FC = () => {
<<<<<<< HEAD
=======
  const features = [
    {
      icon: <Brain className="w-12-h-12text-cyan-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
    {
      icon: <TrendingUp className="w-12-h-12text-purple-400" />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
    {
      icon: <Shield className="w-12-h-12text-green-400" />,
      title: "Secure & Private",
      description: "Bank-level security ensures your financial data is protected and private."
    }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  return (
    <>
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content=" - Zion Tech Group" />
        <meta property="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900pt-16">
        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4 text-center">
            <h1 className="text-5-xl md:text-6xl font-boldtext-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400-bg-clip-texttext-transparent" />
                AI Expense Tracker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8-max-w-3xlmx-auto" />
              Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4-justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
                Get Started
                <ArrowRight className="ml-2-group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                Learn More
                      </Link>
      </div>
    </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
=======
        {/* Features Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4-xl font-boldtext-white mb-6" />
                Why Choose Our AI Expense Tracker?
              </h2>
              <p className="text-xl text-gray-300-max-w-3xlmx-auto" />
                Our advanced AI technology helps you manage your finances more efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50-transition-all duration-300" />
                  <div className="flexjustify-centermb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2-xlp-12 text-center">
              <h2 className="text-4-xl font-boldtext-white mb-6" />
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8-max-w-2xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transform hover:scale-105-shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  View All Services
                        </Link>
      </div>
    </div>
          </div>
        </section>
      </div>
    </>
  );
};
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-6024
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { DollarSign, TrendingUp, PieChart, BarChart3, Receipt, CreditCard, Smartphone, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Globe, Award, Target, Lightbulb, Bot, Brain, Cpu, Database, Cloud, Lock, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
  )
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9

export default Page;
