import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, AppWindow, Globe, CheckCircle, ArrowRight, Star, FileText, Palette, Code, Users, Cloud, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function MobileDevelopment() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ["All", "iOS", "Android", "Cross-Platform", "PWA", "Enterprise", "Maintenance"];

  const mobileDevelopmentSolutions = [
    {
      id: 1,
      title: "Native iOS Development",
      description: "Build high-performance iOS apps using Swift and the latest Apple technologies",
      icon: Smartphone,
      category: "iOS",
      price: "Starting at $15,000",
      timeline: "8-16 weeks",
      features: ["Swift/Objective-C", "iOS SDK", "App Store optimization", "Push notifications"],
      technologies: ["Swift", "Xcode", "Core Data", "CloudKit"]
    },
    {
      id: 2,
      title: "Native Android Development",
      description: "Create powerful Android apps with Kotlin and modern Android development practices",
      icon: Smartphone,
      category: "Android",
      price: "Starting at $15,000",
      timeline: "8-16 weeks",
      features: ["Kotlin/Java", "Android SDK", "Material Design", "Google Play optimization"],
      technologies: ["Kotlin", "Android Studio", "Room", "Firebase"]
    },
    {
      id: 3,
      title: "React Native Development",
      description: "Cross-platform mobile apps with React Native for iOS and Android",
      icon: AppWindow,
      category: "Cross-Platform",
      price: "Starting at $12,000",
      timeline: "6-12 weeks",
      features: ["Single codebase", "Native performance", "Hot reload", "Third-party integrations"],
      technologies: ["React Native", "JavaScript", "Redux", "Native modules"]
    },
    {
      id: 4,
      title: "Flutter Development",
      description: "Beautiful cross-platform apps with Google's Flutter framework",
      icon: Palette,
      category: "Cross-Platform",
      price: "Starting at $12,000",
      timeline: "6-12 weeks",
      features: ["Dart language", "Custom UI", "Fast development", "Single codebase"],
      technologies: ["Flutter", "Dart", "Firebase", "Provider"]
    }
  ];

  const mobileTechnologies = [
    { name: "iOS Development", description: "Native iOS development with Apple's latest technologies", icon: Smartphone, useCase: "iPhone & iPad Apps", reliability: "High" },
    { name: "Android Development", description: "Native Android development with Google's modern tools", icon: Smartphone, useCase: "Android Devices", reliability: "High" },
    { name: "React Native", description: "Cross-platform development with React and native performance", icon: AppWindow, useCase: "Multi-platform Apps", reliability: "High" },
    { name: "Flutter", description: "Google's UI toolkit for cross-platform development", icon: Palette, useCase: "Beautiful UIs", reliability: "High" }
  ];

  const mobileBenefits = [
    {
      title: "Enhanced User Experience",
      description: "Native mobile apps provide superior user experience and performance",
      icon: Users,
      examples: ["Smooth animations", "Fast performance", "Native features", "Intuitive UI"]
    },
    {
      title: "Offline Functionality",
      description: "Mobile apps can work offline and sync when connectivity is restored",
      icon: Cloud,
      examples: ["Offline access", "Data synchronization", "Cached content", "Background sync"]
    },
    {
      title: "Device Integration",
      description: "Access to device features like camera, GPS, and sensors",
      icon: Smartphone,
      examples: ["Camera access", "GPS location", "Push notifications", "Biometric auth"]
    },
    {
      title: "App Store Presence",
      description: "Visibility in app stores and potential for monetization",
      icon: Award,
      examples: ["App store visibility", "In-app purchases", "Subscription models", "Premium features"]
    }
  ];

  const processSteps = [
    { step: 1, title: "Requirements Analysis", description: "Gather and analyze mobile app requirements and user needs", icon: FileText, duration: "1-2 weeks" },
    { step: 2, title: "Design & Prototyping", description: "Create UI/UX designs and interactive prototypes", icon: Palette, duration: "2-4 weeks" },
    { step: 3, title: "Development", description: "Build the mobile application with chosen technology stack", icon: Code, duration: "10-36 weeks" },
    { step: 4, title: "Testing & Deployment", description: "Test the app and deploy to app stores", icon: CheckCircle, duration: "2-4 weeks" }
  ];

  const filteredSolutions = selectedCategory === "All" 
    ? mobileDevelopmentSolutions 
    : mobileDevelopmentSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <>
      <SEO
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS, Android, and cross-platform solutions. Transform your ideas into powerful mobile applications."
        keywords="mobile app development, iOS development, Android development, React Native, Flutter, cross-platform apps"
        canonical="https://ziontechgroup.com/mobile-development"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-8"
              >
                <Smartphone className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Mobile App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">Development</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your ideas into powerful mobile applications. From native iOS and Android to cross-platform solutions, we build mobile apps that engage users and drive business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-blue-400">
                  <Smartphone className="w-4 h-4" />
                  <span>Native Apps</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <AppWindow className="w-4 h-4" />
                  <span>Cross-Platform</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Globe className="w-4 h-4" />
                  <span>Progressive Web Apps</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Mobile App Development Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the fundamental advantages that make mobile apps essential
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">{benefit.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-blue-400 font-semibold mb-3">Examples:</h4>
                    {benefit.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Mobile Technologies We Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive support for leading mobile development platforms and technologies
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileTechnologies.map((technology, index) => (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <technology.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{technology.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{technology.description}</p>
                  <p className="text-blue-400 font-semibold mb-2">{technology.useCase}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                    {technology.reliability} Reliability
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Mobile Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful mobile app development
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                    {step.duration}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Mobile Development Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed for the mobile-first era
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-slate-800/30 text-gray-300 border border-blue-500/20 hover:border-blue-500/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedSolution(solution)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-400 font-semibold">{solution.price}</span>
                    <span className="text-gray-300 text-sm">{solution.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      {solution.category}
                    </span>
                    <button className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready for Mobile Transformation?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss how mobile applications can transform your business, engage your customers, and create new opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Start Mobile Project
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Mobile Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}