'use client';
import React from 'react';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';
import SEOOptimizer from '../app/components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';
const PageTemplate: React.FC<{
    title: string;
  description: string;
<<<<<<< HEAD
  icon: React.ComponentType<any></any>features</any>: string[];
  benefits: string[]
  price: string
  category: string,
  keywords: string[]
  }> = ({ title, description, icon: Icon, features, benefits, price, category, keywords }) => {
=======
  icon: React.ComponentType<any>;</any>features</any>: string[];
  benefits: string[];
  price: string;
  category: string;
  keywords: string[]}> = ({ title, description, icon: Icon, features, benefits, price, category, keywords }) => {
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)
      <SEOOptimizer ;)
        title={`${title} - Zion Tech Group`})
        description={description})
        keywords={keywords})
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer
        title={`${title} - Zion Tech Group`}
        description={description}
        keywords={keywords}
        canonicalUrl={`https://ziontechgroup.com/${title.toLowerCase().replace(/\s+/g, '-')}`}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
);
}</div>
      <SEOOptimizer title={`${title} - Zion Tech Group`};
        description={description};
        keywords={keywords};
        canonicalUrl={`https://ziontechgroup.com/${title.toLowerCase().replace(/\s+/g, '-')}`};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */};
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto"></section>
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">,
              {title};
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
              {description};
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
<<<<<<< HEAD
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today
              </a>
              <a
=======
              <a href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today;
              </a>
              <a ;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <Phone className="w-5 h-5" />
                +1 302 464 0950,
              </a>
            </div>
          </div>,
        </section>,
,
        {/* Features Section */};
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Key Features
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
  </
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful capabilities designed to transform your business,
            </p>
          </div>,
          ,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover: border-cyan-400/60 transition-all duration-300">,
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />,
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                <p className="text-gray-300">Advanced {feature.toLowerCase()} capabilities powered by AI</p>
              </div>
            ))};
          </div>
        </section>
<<<<<<< HEAD
        {/* Benefits Section */}
=======
        {/* Benefits Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our {title}?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proven results and measurable impact for your business;
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover: border-purple-400/60 transition-all duration-300">,
                <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
                <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                <p className="text-gray-300">Measurable improvement in your business metrics</p>
              </div>
            ))};
          </div>
        </section>
<<<<<<< HEAD
        {/* Pricing Section */}
=======
        {/* Pricing Section */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
              Pricing
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing
  </
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees,
            </p>
          </div>
          ,
          <div className="max-w-md mx-auto">,
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center">,
          <div className="max-w-md mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center"></div>
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">{price}</div>
              <p className="text-gray-300 mb-6">per month</p>
              <a ;
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block">
<<<<<<< HEAD
                Get Started,
=======
                Get Started;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </a>
            </div>
          </div>,
        </section>,
,
        {/* Contact Section */};
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contact our experts to discuss your specific needs;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20"></div>
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">
                +1 302 464 0950;
              </a>
            </div>
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"></div>
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20"></div>
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
                364 E Main St STE 1008</p><br />
                Middletown DE 19709,
  </
            </div>
          </div>
        </section>
      </main>
      <Footer />,
<<<<<<< HEAD
    </div>);
}
export default PageTemplate;
  </h2>
  </h2>
  </h2>
  </h2>
  </h2>
  </h2>
  </SEOOptimizer>
=======
    </div>)};
export default PageTemplate;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
