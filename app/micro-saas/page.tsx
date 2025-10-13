import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Brain, Shield, Globe, ArrowRight, CheckCircle, Star, Users, Award, Clock, Smartphone, Mail, FileText, BarChart3, Database, Target, Activity, LineChart, DollarSign, UserCheck, Calendar, Settings, Cpu, Sparkles, Lock, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, AwardIcon, Wifi, Battery, Camera, Headphones, Mic, Video, Music, BookOpen, Lightbulb, Puzzle, Gamepad2, ShoppingCart, CreditCard, Wallet, note, Coins, Gift, Tag, Percent, Calculator, PieChart, Layers, Grid, List, Map, Compass, Navigation, Globe2, WifiOff, Signal, Bluetooth, Usb, HardDrive, MemoryStick, Printer, Voicemail, Headset, Speaker, Volume2, VolumeX, Play, Pause, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, watch } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence and analytics platform",
      price: "$99/month",
      features: ["Real-time analytics", "AI insights", "Custom dashboards", "Data visualization"],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/zion-ai-analytics-pro",
      popular: true
    },
    {
      id: 2,
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      price: "$79/month",
      features: ["AI lead scoring", "Automated follow-ups", "Customer insights", "Sales forecasting"],
      icon: <Users className="w-8 h-8" />,
      href: "/zion-ai-crm-pro",
      popular: false
    },
    {
      id: 3,
      name: "Zion AI Video Generator",
      description: "AI-powered video creation and editing platform",
      price: "$149/month",
      features: ["AI video generation", "Auto-editing", "Multiple formats", "Brand customization"],
      icon: <Video className="w-8 h-8" />,
      href: "/zion-ai-video-generator",
      popular: true
    },
    {
      id: 4,
      name: "Zion AI Invoice Generator",
      description: "Smart invoice generation and management system",
      price: "$49/month",
      features: ["Auto-invoice generation", "Payment tracking", "Tax calculations", "Multi-currency"],
      icon: <FileText className="w-8 h-8" />,
      href: "/zion-ai-invoice-generator",
      popular: false
    },
    {
      id: 5,
      name: "Zion AI Customer Insights",
      description: "Deep customer analytics and behavior prediction",
      price: "$89/month",
      features: ["Customer segmentation", "Behavior analysis", "Churn prediction", "Personalization"],
      icon: <Target className="w-8 h-8" />,
      href: "/zion-ai-customer-insights",
      popular: false
    },
    {
      id: 6,
      name: "Zion AI Email Analyzer",
      description: "AI-powered email analysis and optimization",
      price: "$69/month",
      features: ["Email sentiment analysis", "Open rate optimization", "A/B testing", "Automated responses"],
      icon: <Mail className="w-8 h-8" />,
      href: "/zion-ai-email-analyzer",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, AI-driven micro software solutions designed to streamline your business operations 
            and boost productivity. Choose from our comprehensive suite of specialized tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Micro SAAS Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`relative bg-slate-800/50 rounded-lg border p-6 hover:border-cyan-500/50 transition-all duration-300 ${
                  product.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-700'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-cyan-400 mb-4">
                  {product.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <div className="text-2xl font-bold text-white mb-4">
                  {product.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={product.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;