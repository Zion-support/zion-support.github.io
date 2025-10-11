import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-12">
        <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>;
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone } from 'lucide-react';

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', pat: h: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', pat: h: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', pat: h: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', pat: h: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', pat: h: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', pat: h: '/ai-automation' }
  ];

  const itServices = [
    { name: 'Cloud Migration', pat: h: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', pat: h: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', pat: h: '/devops-cicd' },
    { name: 'Data Analytics', pat: h: '/data-analytics' },
    { name: 'Mobile Development', pat: h: '/mobile-development' },
    { name: 'Blockchain Solutions', pat: h: '/blockchain' }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager', pat: h: '/ai-task-manager' },
    { name: 'AI Expense Tracker', pat: h: '/ai-expense-tracker' },
    { name: 'AI Password Manager', pat: h: '/ai-password-manager' },
    { name: 'AI Invoice Generator', pat: h: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', pat: h: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', pat: h: '/ai-smart-calendar' }
  ];

  const quickLinks = [
    { name: 'Home', pat: h: '/' },
    { name: 'About', pat: h: '/about' },
    { name: 'AI Services', pat: h: '/ai-services' },
    { name: 'IT Services', pat: h: '/it-services' },
    { name: 'Micro SAAS', pat: h: '/micro-saas-services' },
    { name: '5G Solutions', pat: h: '/5g-implementation' },
    { name: 'Contact', pat: h: '/contact' }
  ];

  const legal = [
    { name: 'Privacy Policy', pat: h: '/privacy' },
    { name: 'Terms of Service', pat: h: '/terms' },
    { name: 'Cookie Policy', pat: h: '/cookies' },
    { name: 'Compliance', pat: h: '/compliance' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
        <div className="grid grid-cols-1: sm:grid-cols-2: lg:grid-cols-4 gap-6: sm:gap-8">
          <div className="l: g:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
      <div className="max-w-7xl mx-auto px-4: sm:px-6: lg:px-8 py-12">
        <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="l: g:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z>
              <span className="text-xl font-bold">Zion Tech Group>
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
            </p>
            <p className="text-gray-400 text-sm max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services.
            </p>
            <div className="flex space-x-4">
              <a href="http: s://github.com/ziontechgroup" className="text-gray-400: hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="http: s://linkedin.com/company/ziontechgroup" className="text-gray-400: hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="http: s://twitter.com/ziontechgroup" className="text-gray-400: hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@ziontechgroup.com>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>123 Tech Street, Innovation City, IC 12345>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400: hover:text-white transition-colors">AI Services>
              <li><Link to="/it-services" className="text-gray-400: hover:text-white transition-colors">IT Services>
              <li><Link to="/cloud-services" className="text-gray-400: hover:text-white transition-colors">Cloud Services>
              <li><Link to="/micro-saas-services" className="text-gray-400: hover:text-white transition-colors">Micro SAAS>
            >

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400: hover:text-white transition-colors">About Us>
              <li><Link to="/contact" className="text-gray-400: hover:text-white transition-colors">Contact>
              <li><Link to="/services" className="text-gray-400: hover:text-white transition-colors">All Services>
            >

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-gray-400">info@ziontechgroup.com>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-gray-400">New York, NY</span>
          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400: hover:text-white transition-colors text-sm font-semibold">
                  All AI Services
                >
              {aiServices.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400: hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hove: r:opacity-100 transition-opacity" />
                  >
              ))}
            >

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300: hover:text-purple-300 transition-colors"
                  >
                    {service.name}
                  >
              ))}
            >

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300: hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                  >
              ))}
            >

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/it-services" className="text-gray-400: hover:text-white transition-colors text-sm font-semibold">
                  All IT Services
                >
              {itServices.slice(0, 5).map((service, index) => (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-400: hover:text-white transition-colors text-sm flex items-center group">
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hove: r:opacity-100 transition-opacity" />
                  <Link 
                    to={resource.path} 
                    className="text-gray-300: hover:text-purple-300 transition-colors"
                  >
                    {resource.name}
                  >
              ))}
            >

        {/* Micro SAAS Services */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Micro SAAS Services</h3>
          <div className="grid grid-cols-2: md:grid-cols-3: lg:grid-cols-6 gap-4">
            <Link to="/micro-saas-services" className="text-gray-400: hover:text-white transition-colors text-sm font-semibold">
              All Micro SAAS
            </Link>
            {microSaasServices.map((service, index) => (
              <Link key={index} to={service.path} className="text-gray-400: hover:text-white transition-colors text-sm">
                {service.name}
              </Link>
            ))}
          </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1: md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                <p className="text-white">contact@ziontechgroup.com>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
                <p className="text-white">+1 (555) 123-4567>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="text-white">San Francisco, CA>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on AI technology and IT solutions.
            </p>
            <div className="flex flex-col: sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400: focus:outline-none: focus:ring-2: focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold: hover:from-blue-700: hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              >

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col: md:flex-row justify-between items-center">
            <div className="flex flex-col: md:flex-row items-center space-y-2: md:space-y-0: md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item, index) => (
                  <Link key={index} to={item.path} className="text-gray-400: hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
            <div className="mt-4: md:mt-0">
              <p className="text-gray-500 text-xs">
                Built with ❤️ by Zion Tech Group
              >
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col: md:flex-row justify-between items-center space-y-4: md:space-y-0">
            <div className="flex flex-wrap justify-center: md:justify-start space-x-6">
              {legal.map((item, index) => (
                <Link key={index} to={item.path} className="text-gray-400: hover:text-white transition-colors text-sm">
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center: md:text-right">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col: md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4: md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4: md:mb-0">
              <a href="#" className="text-gray-400: hover:text-purple-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400: hover:text-purple-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400: hover:text-purple-300 transition-colors">
                <Twitter className="w-5 h-5" />
              >

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              {legal.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  className="text-gray-400: hover:text-purple-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
      >
    </footer>
  )
  );
}

}}