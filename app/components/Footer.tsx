import React from 'react';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Award,
  Users
} from "lucide-react";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
import React from "react";

const Footer = () => {
  const services = [
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  Shield,
  Zap,
  Globe,
  Star,
  Users,
  Sparkles,
  Monitor,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Award  } from 'lucide-react';
} from 'lucide-react';
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud",
    },
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield",
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap",
    }
  ];
const socialLinks = [
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "GitHub", href: "#", icon: "Github" }
const microSaasServices = [
    { name: "AI Analytics", href: "/ai-services" },
    { name: "Cloud Solutions", href: "/cloud-services" },
    { name: "DevOps", href: "/devops" }
  Clock,

import { ArrowRight, Mail, Phone, MapPin, Clock, Brain, Shield, Zap, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

    { name: "AI Solutions", href: "/ai-services" },
    { name: "Cloud Services", href: "/cloud-services" },
    { name: "DevOps", href: "/devops-services" },
    { name: "5G Solutions", href: "/5g-solutions" }

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }

    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" }

  const serviceCategories = [
      title: "AI Solutions",
      services: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Support", href: "/ai-customer-support" },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
        { name: "AI Data Analytics", href: "/ai-data-analytics" }
      ]
      title: "IT Services",
        { name: "Cloud Migration", href: "/cloud-migration" },
        { name: "DevOps Services", href: "/devops" },
        { name: "IT Consulting", href: "/it-consulting" },
        { name: "Network Security", href: "/network-security" },
        { name: "Custom Software", href: "/custom-software" }
      title: "Micro SAAS",
        { name: "Zion Analytics Pro", href: "/zion-ai-analytics-pro" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" },
        { name: "Zion AI Marketing", href: "/zion-ai-marketing-automation" }
      title: "5G Solutions",
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart Cities", href: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", href: "/5g-private-networks" }

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Support", path: "/support" },

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR", path: "/gdpr" },

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }

export default function Footer({ className = '', children }: FooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
import React, { useMemo } from 'react';
  Clock
  MapPin
  Cloud,
  Code,
  BarChart3,
  TrendingUp

const Footer: React.FC = () => {

      name: "Twitter",
      href: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />
      name: "LinkedIn",
      href: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />
      name: "GitHub",
      href: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />
const Footer = React.memo(() => {
  const socialLinks = useMemo(() => [
    {,
        url: "https://twitter.com/ziontechgroup",
        icon: <Twitter className="w-5 h-5" />,
        url: "https://linkedin.com/company/ziontechgroup",
        icon: <Linkedin className="w-5 h-5" />,
        url: "https://github.com/ziontechgroup",
        icon: <Github className="w-5 h-5" />,

    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }

    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas" },

  const supportLinks = useMemo(() => [
    { name: "Documentation", path: "/docs" },
    { name: "Pricing", path: "/pricing" }
  ], []);

  const legalLinks = useMemo(() => [
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Sitemap", path: "/sitemap" }

  const stats = useMemo(() => [


    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT Solutions for Modern Businesses
      <div className="container mx-auto px-4 py-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}

          {/* Services */}
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-lg font-semibold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      {service.name}
                  </li>
              </ul>

          {/* Quick Links */}
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              {quickLinks.map((link) => (
                <li key={link.name}>
                    to={link.path}
                    {link.name}

            <h3 className="text-lg font-semibold">Quick Links</h3>
                    className="text-gray-300 hover:text-white transition-colors text-sm"
          {/* Legal */}
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
              {legalLinks.map((link) => (

            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-1">
                          className="text-gray-400 hover:text-white transition-colors text-xs"

          {/* Contact & Stats */}
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1">
                    {stat.icon}
                  <div className="text-lg font-semibold">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            <div className="flex space-x-6">
                  className="text-sm text-gray-400 hover:text-white transition-colors"

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
    </footer>
};

export default Footer;

interface FooterProps {
  className?: string;
  children?: React.ReactNode;

export default function Footer({ className = '', children, ...props }: FooterProps) {
        <div className="component" {...props}>
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>

              {/* Social Links */}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
    <footer className="bg-gray-900 border-t border-gray-700">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
              Leading technology solutions provider specializing in AI, cybersecurity,
              cloud infrastructure, and digital transformation services.

            <h3 className="text-lg font-semibold text-white">Services</h3>
              {services.map((service) => (
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                    <ArrowRight className="w-3 h-3 mr-2" />

          {/* Company */}
            <h3 className="text-lg font-semibold text-white">Company</h3>
              {company.map((item) => (
                <li key={item.name}>
                    to={item.href}
                    {item.name}

            <h3 className="text-lg font-semibold text-white">Contact</h3>
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">kleber@ziontechgroup.com</span>
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 302 464 0950</span>
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Middletown, DE 19709</span>
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM EST</span>

            {/* Service Categories */}
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-cyan-400 font-semibold mb-4">{category.title}</h3>
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                {quickLinks.slice(0, 4).map((link) => (
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              <h4 className="text-lg font-semibold text-white mb-4">More Links</h4>
                {quickLinks.slice(4).map((link) => (
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <span>+1 (302) 464-0950</span>
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                    <Link>
  to={service.path}>
  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      <span className="text-sm">{service.name}</span>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                {companyLinks.map((link) => (
  to={link.path}>
  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"


            {/* Support */}
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                {supportLinks.map((link) => (
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
                key={social.name}
  href={social.url}>
  target="_blank">
  rel="noopener noreferrer">
  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110">
  aria-label={social.name}
                {social.icon}

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Built with ❤️ for innovation</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>24/7 Support Available</span>
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "10+" },
    { label: "Team Members", value: "50+" }

      <div className="max-w-7xl mx-auto px-4 py-12">

                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">

            <h4 className="text-lg font-semibold mb-4">Services</h4>
                  <Link to={service.href} className="text-gray-300 hover:text-white transition-colors">

            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                contact@ziontechgroup.com
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              <div className="flex space-x-6 mt-4 md:mt-0">
  to="/privacy">
  className="text-gray-400 hover:text-white transition-colors text-sm"
                  Privacy Policy
  to="/terms">
                  Terms of Service
  to="/cookies">
                  Cookie Policy


        <div className="border-t border-gray-700 mt-8 pt-8 text-center">

        <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-gray-400 text-sm">
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ for the future of technology


    <div className={`footer-component ${className}`} {...props}>




