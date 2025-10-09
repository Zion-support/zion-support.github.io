import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 cyber-grid">
      <Navigation />
      <SEOOptimizer 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure, cybersecurity, cloud migration, and support. Enterprise-grade IT solutions for modern businesses."
        keywords="IT services, infrastructure, cybersecurity, cloud migration, IT support, enterprise IT"
      />
      
      <section className="relative py-20 lg:py-32 neural-network-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">IT Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Enterprise-Grade
              <span className="block holographic-text cyber-text">IT Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive IT services designed to keep your business running smoothly, 
              securely, and efficiently. From infrastructure to cybersecurity, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <div className="quantum-card p-12 text-center space-y-8">
        <h2 className="text-4xl font-bold text-white neon-text">IT Services Coming Soon</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We're working on comprehensive IT service pages. In the meantime, 
          contact us to learn about our IT solutions.
        </p>
        <Link
          to="/contact"
          className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ITServicesPage;