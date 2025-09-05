import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive, 
  Database 
} from 'lucide-react';

const microSAASServices = [
  {
    name: "AI Invoice Generator Pro",
    description: "Intelligent invoice creation and payment tracking platform with AI-powered templates, automated follow-ups, and multi-currency support.",
    price: "$29/month",
    features: [
      "AI-powered invoice generation",
      "Automated payment reminders",
      "Multi-currency support",
      "Client management system",
      "Payment tracking dashboard",
      "Custom branding options",
      "Tax calculation automation",
      "Integration with accounting software"
    ],
    category: "Finance",
    popular: true
  },
  {
    name: "Smart Project Management Hub",
    description: "AI-enhanced project management with automated task assignment, progress tracking, and team collaboration tools.",
    price: "$49/month",
    features: [
      "AI task assignment",
      "Progress tracking",
      "Team collaboration",
      "Resource planning",
      "Time tracking",
      "Budget management",
      "Risk assessment",
      "Reporting dashboard"
    ],
    category: "Productivity",
    popular: true
  }
];

export default function MicroSAAS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, software as a service, business automation, productivity tools" />
      </Head>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our innovative micro SaaS solutions designed to streamline your business operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                {service.popular && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Popular</span>
                )}
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
              
              <div className="mb-4">
                <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}