import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smartphone, Code, Globe, Zap, Shield, ArrowRight, CheckCircle, Star, Users, Award, Phone, Mail, MapPin } from 'lucide-react';

const services = [
  {
    title: "Native iOS Development",
    description: "High-performance iOS apps using Swift and Objective-C",
    icon: Smartphone,
    features: ["Swift & Objective-C", "iOS SDK", "Core Data", "App Store Optimization"]
  },
  {
    title: "Native Android Development",
    description: "Robust Android applications with Java and Kotlin",
    icon: Code,
    features: ["Java & Kotlin", "Android SDK", "Room Database", "Google Play Optimization"]
  },
  {
    title: "Cross-Platform Development",
    description: "Single codebase for both iOS and Android using React Native and Flutter",
    icon: Globe,
    features: ["React Native", "Flutter", "Xamarin", "Ionic"]
  },
  {
    title: "Progressive Web Apps",
    description: "Web applications that work like native apps",
    icon: Zap,
    features: ["PWA Technology", "Offline Support", "Push Notifications", "App-like Experience"]
  }
];

const platforms = [
  "iOS", "Android", "React Native", "Flutter", "Xamarin", "Ionic", "Cordova", "PWA",
  "Swift", "Kotlin", "Java", "JavaScript", "TypeScript", "Dart", "C#", "Objective-C"
];

export default function MobileDevelopment() {
  return (
    <>
      <Head>
        <title>Mobile Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. Native and cross-platform solutions with expert implementation." />
        <meta name="keywords" content="mobile development, iOS apps, Android apps, React Native, Flutter, cross-platform development" />
        <meta property="og:title" content="Mobile Development Services - Zion Tech Group" />
        <meta property="og:description" content="Create powerful mobile applications that engage users and drive business growth." />
        <meta property="og:url" content="https://ziontechgroup.com/mobile-development" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/mobile-development" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Mobile Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Create powerful mobile applications that engage users and drive business growth. 
                From native iOS and Android apps to cross-platform solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start Your App
                </Link>
                <Link href="/portfolio" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile Development Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in creating mobile applications that deliver exceptional user experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Platforms & Technologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with all major mobile development platforms and technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <span className="text-gray-800 font-medium">{platform}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Let's turn your mobile app idea into reality with our expert development team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Quote
                </Link>
                <Link href="/portfolio" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}