import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Car, CheckCircle, ArrowRight, Users, Target, Lightbulb, Zap, TrendingUp, BarChart3, Cpu, Database, Network, Code, Palette, Rocket, Eye, DollarSign, ShoppingCart, Cloud, Building, Heart, Lock, AlertTriangle, Server, Truck, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Shield, Clock, Globe, BookOpen, GraduationCap, Stethoscope, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutonomousVehicle: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Navigation",
      description: "Advanced AI algorithms for autonomous vehicle navigation and control"
    },
    {
      icon: Car,
      title: "Vehicle Control",
      description: "Intelligent control systems for safe and efficient autonomous driving"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced computer vision for road detection and obstacle avoidance"
    },
    {
      icon: Target,
      title: "Route Optimization",
      description: "AI-driven route planning and traffic optimization"
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Comprehensive safety and emergency response systems"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time monitoring and optimization of vehicle performance"
    }
  ];

  const benefits = [
    "Enhanced safety through AI-powered driving",
    "Improved traffic flow and reduced congestion",
    "24/7 autonomous operation capabilities",
    "Scalable solution for fleet management",
    "Integration with existing vehicle systems",
    "Real-time monitoring and control"
  ];

  const useCases = [
    {
      title: "Passenger Vehicles",
      description: "Autonomous cars for personal and ride-sharing use",
      icon: Car
    },
    {
      title: "Commercial Fleets",
      description: "Autonomous trucks and delivery vehicles",
      icon: Truck
    },
    {
      title: "Public Transport",
      description: "Autonomous buses and shuttles",
      icon: Building
    },
    {
      title: "Specialized Vehicles",
      description: "Autonomous vehicles for specific industries",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Car className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              AI Autonomous Vehicle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Revolutionizing transportation with AI-powered autonomous vehicles that provide 
              safe, efficient, and intelligent driving experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Autonomous Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Vehicle combines cutting-edge artificial intelligence with 
              advanced automotive technology to deliver exceptional driving experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 dark:border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-100 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose AI Autonomous Vehicle?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of transportation with our comprehensive AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Vehicle Applications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Vehicle serves diverse transportation needs across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-orange-50 dark:from-slate-700 dark:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Transportation?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join the future of autonomous vehicles and revolutionize your transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousVehicle;