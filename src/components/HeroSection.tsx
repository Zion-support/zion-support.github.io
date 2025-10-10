import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    website: string;
  };
  onPhoneClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ contactInfo, onPhoneClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              AI-Powered
            </span>
            <br />
            <span className="text-white animate-slide-in">
              Enterprise Solutions
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            Transform your business with cutting-edge AI, quantum computing, and digital transformation services. 
            Achieve <span className="text-cyan-400 font-semibold">300% ROI</span>, <span className="text-purple-400 font-semibold">70% cost reduction</span>, 
            and <span className="text-pink-400 font-semibold">90% efficiency gains</span>.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-scale-in delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300 text-sm">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-700">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2 group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-2 group"
            >
              <span>Watch Demo</span>
              <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in delay-1000">
            <div className="flex items-center justify-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-300 text-sm">Phone</p>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"
                  onClick={onPhoneClick}
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-300 text-sm">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-semibold text-lg">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-gray-300 text-sm">Address</p>
                <p className="text-white font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;