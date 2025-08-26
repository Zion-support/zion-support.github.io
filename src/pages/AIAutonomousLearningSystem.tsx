import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, BookOpen, Target, CheckCircle, ArrowRight, Users, GraduationCap, Zap, TrendingUp, BarChart3, Cpu, Database, Network, Code, Palette, Rocket, Eye, DollarSign, ShoppingCart, Cloud, Building, Heart, Lock, AlertTriangle, Server, Truck, Car, TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone, Shield, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutonomousLearningSystem: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "AI-powered learning that adapts to individual learning styles and pace"
    },
    {
      icon: Lightbulb,
      title: "Intelligent Content",
      description: "Dynamically generated content based on learner progress and preferences"
    },
    {
      icon: BookOpen,
      title: "Multi-Modal Learning",
      description: "Support for various learning formats including text, video, audio, and interactive elements"
    },
    {
      icon: Target,
      title: "Personalized Paths",
      description: "Custom learning journeys tailored to each individual's goals and capabilities"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "AI-facilitated group learning experiences and peer-to-peer interactions"
    },
    {
      icon: GraduationCap,
      title: "Progress Analytics",
      description: "Comprehensive tracking and insights into learning progress and achievements"
    }
  ];

  const benefits = [
    "Accelerated learning through personalized approaches",
    "Improved retention with adaptive content delivery",
    "24/7 availability for continuous learning",
    "Scalable solution for organizations of any size",
    "Integration with existing learning management systems",
    "Real-time feedback and assessment capabilities"
  ];

  const useCases = [
    {
      title: "Corporate Training",
      description: "AI-powered employee development and skill enhancement programs",
      icon: Building
    },
    {
      title: "Academic Education",
      description: "Personalized learning experiences for students at all levels",
      icon: GraduationCap
    },
    {
      title: "Professional Development",
      description: "Continuous learning and certification programs for professionals",
      icon: Users
    },
    {
      title: "Skills Training",
      description: "Targeted skill development for specific job requirements",
      icon: Target
    }
  ];

  const learningMethods = [
    "Microlearning",
    "Gamification",
    "Virtual Reality",
    "Augmented Reality",
    "Interactive Simulations",
    "Adaptive Assessments",
    "Social Learning",
    "Mobile Learning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white">
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
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              AI Autonomous Learning System
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Revolutionizing education with AI-powered autonomous learning systems that provide 
              personalized, adaptive, and engaging learning experiences for every individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
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
              Advanced AI Learning Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Learning System combines cutting-edge artificial intelligence with 
              proven learning methodologies to deliver exceptional educational experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-green-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 dark:border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-100 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose AI Autonomous Learning?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of learning with our comprehensive AI-powered educational platform.
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
              Learning Applications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Learning System serves diverse educational needs across various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-green-50 dark:from-slate-700 dark:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Learning Methods Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-100 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Learning Methods Supported
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our system supports a wide range of modern learning methodologies and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {learningMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {method}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Learning?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join the future of AI-powered education and provide your learners with the most advanced 
              learning experience available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default AIAutonomousLearningSystem;