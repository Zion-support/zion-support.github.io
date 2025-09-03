import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, CheckCircle, Star, TrendingUp, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Award, 
  Clock, 
  Brain, 
  Cloud, 
  Database, 
  Network, 
  Target, 
  Phone, 
  Mail,
  MapPin,
  MessageCircle,
  Eye,
  FileText,
  Settings,
  Link as LinkIcon,
  CheckSquare,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  Wifi,
  Link2,
  Glasses,
  Bot,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';

export default function Home() {
  const stats = [
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
  Code,
  Lock,
  Rocket,
  MapPin

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and decision-making processes.',
      color: 'from-purple-500 to-pink-500'
    } {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      color: 'from-blue-500 to-cyan-500'
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      color: 'from-green-500 to-emerald-500'
      icon: Zap,
      title: 'DevOps Excellence',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      color: 'from-yellow-500 to-orange-500'
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platforms.',
      color: 'from-indigo-500 to-purple-500'
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      color: 'from-red-500 to-pink-500'
    }
  ];

    { number: '500+', label: 'Projects Completed' } { number: '99.9%', label: 'Uptime Guarantee' } { number: '50+', label: 'Expert Team Members' } { number: '24/7', label: 'Support Available' }

  const testimonials = [
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'The cloud architecture they designed is incredibly scalable and secure. We can now handle 10x more traffic.',
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their DevOps practices reduced our deployment time from hours to minutes. Outstanding work!',

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations. Contact us at +1 302 464 0950." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, micro SaaS, cloud solutions, IT services, cybersecurity, data analytics, technology consulting" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Leading Technology Solutions</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge AI services, micro SaaS solutions, cloud infrastructure, and innovative technology platforms that drive real business results.
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI, cloud architecture, DevOps, and innovative development services. Expert technology solutions for modern enterprises." />
        <meta name="keywords" content="AI solutions, cloud architecture, DevOps, cybersecurity, digital transformation, micro SaaS, technology consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600 block">Cutting-Edge Technology</span>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, cloud solutions, and innovative micro SaaS platforms. 
                We help enterprises scale, secure, and optimize their digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                  Explore Services
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
              ))}

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                )})}

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
                What Our Clients Say
              <p className="text-xl text-gray-600">
                Trusted by leading companies worldwide
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI, cloud, and development services can accelerate your digital transformation.
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                Contact Us Today
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
                View Pricing
      </main>
      
      <SimpleFooter />
    </>
,"});,"})
import { SEO } from '../components/SEO';,"});,"})
import { Button } from '../components/ui/Button';,"});,"})
import { Card } from '../components/ui/Card';,"});,"})
import { Badge } from '../components/ui/Badge';,"});,"})
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';,"});,"})
;,"});,"})
const Home: React.FC = () => {,"});,"})
  const stats = [,"});,"})
    { number: '500+', label: 'Projects Completed' },;,"});,"})
    { number: '50+', label: 'Happy Clients' },;,"});,"})
    { number: '99.9%', label: 'Uptime Guarantee' },;,"});,"})
    { number: '24/7', label: 'Support Available' },;,"});,"})
  ];,"});,"})
  const services = [,"});,"})
    {,"});,"})
      title: "AI Services",;,"});,"})
      description: "Cutting-edge artificial intelligence solutions",;,"});,"})
      icon: Brain,;,"});,"})
      href: "/services/ai-services";,"});,"})
    },;,"});,"})
      title: "IT Services",;,"});,"})
      description: "Comprehensive information technology services",;,"});,"})
      icon: Network,;,"});,"})
      href: "/services/it-services";,"});,"})
      title: "Micro SaaS",;,"});,"})
      description: "Scalable software as a service solutions",;,"});,"})
      icon: Cloud,;,"});,"})
      href: "/services/micro-saas";,"});,"})
    }"});,"})
  return (;,"});,"})
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;,"});,"})
      <SEO;,"});,"})
        title="Zion Tech Group - Leading AI & Technology Solutions";,"});,"})
        description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.";,"});,"})
      />;,"});,"})
      {/* Hero Section */}"});,"})
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">;,"});,"})
        {/* Animated background elements */}"});,"})
        <div className="absolute inset-0">;,"});,"})
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;,"});,"})
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>;,"});,"})
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>;,"});,"})
        </div>;,"});,"})
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;,"});,"})
          <div className="text-center">;,"});,"})
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">;,"});,"})
              <Star className="w-4 h-4 mr-2" />;,"});,"})
              Leading AI & Technology Solutions;,"});,"})
            </Badge>;,"});,"})
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;,"});,"})
              Transform Your Business with AI;,"});,"})
            </h1>;,"});,"})
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">;,"});,"})
              Join 1000+ successful businesses that have transformed their operations with our cutting-edge technology solutions.;,"});,"})
              From AI-powered automation to quantum-ready security, get a free consultation and discover how we can accelerate your growth.;,"});,"})
            </p>;,"});,"})
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;,"});,"})
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">;,"});,"})
                Get Started Today;,"});,"})
                <ArrowRight className="w-5 h-5 ml-2" />;,"});,"})
              </Button>;,"});,"})
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-500/20">;,"});,"})
                <Phone className="w-5 h-5 mr-2" />;,"});,"})
                Schedule Consultation;,"});,"})
            {/* Stats */}"});,"})
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">;,"});,"})
              {stats.map((stat, index) => (;,"});,"})
                <div key={index} className="text-center">;,"});,"})
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>;,"});,"})
                  <div className="text-blue-200 text-sm">{stat.label}</div>;,"});,"})
              ))}"});,"})
      </section>;,"});,"})
      {/* Services Section */}"});,"})
      <section className="py-20 px-4 sm:px-6 lg:px-8">;,"});,"})
        <div className="max-w-7xl mx-auto">;,"});,"})
          <div className="text-center mb-16">;,"});,"})
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>;,"});,"})
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;,"});,"})
              Comprehensive technology solutions designed to accelerate your business growth and innovation.;,"});,"})
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;,"});,"})
            {services.map((service, index) => (;,"});,"})
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">;,"});,"})
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">;,"});,"})
                  <service.icon className="w-8 h-8 text-white" />;,"});,"})
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>;,"});,"})
                <p className="text-gray-300 mb-6">{service.description}</p>;,"});,"})
                <Link href={service.href}>;,"});,"})
                  <Button variant="outline" className="w-full">;,"});,"})
                    Learn More;,"});,"})
                    <ArrowRight className="w-4 h-4 ml-2" />;,"});,"})
                </Link>;,"});,"})
              </Card>;,"});,"})
      {/* CTA Section */}"});,"})
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">;,"});,"})
        <div className="max-w-4xl mx-auto text-center">;,"});,"})
          <h2 className="text-4xl font-bold text-white mb-6">;,"});,"})
            Ready to Transform Your Business?;,"});,"})
          </h2>;,"});,"})
          <p className="text-xl text-gray-300 mb-8">;,"});,"})
            Let's discuss how we can help transform your business with cutting-edge technology solutions tailored to your needs.;,"});,"})
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;,"});,"})
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">;,"});,"})
              Get Free Consultation;,"});,"})
            <Button size="lg" variant="outline">;,"});,"})
              <Mail className="w-5 h-5 mr-2" />;,"});,"})
              Contact Our Team;,"});,"})
  );,"});,"})
};,"});,"})
export default Home;,"});,"})
import Head from 'next/head;
import Link from 'next/link;
import { SEO } from '../components/SEO;
import { Button } from '../components/ui/Button;
import { Card } from '../components/ui/Card;
import { Badge } from '../components/ui/Badge;
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

  const stats = [ { number: '500+,', label: 'Projects: Completed'}, { number: '50+,', label: 'Happy: Clients'}, { number: '99.9%,', label: 'Uptime: Guarantee'}, { number: '24/7,', label: 'Support: Available'};
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import Navigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';
import SEOHead from '../components/SEOHead';
const React = dynamic(() => import('react') { ssr: false });;
const Head = dynamic(() => import('next/head') { ssr: false });;
const Link = dynamic(() => import('next/link') { ssr: false });;
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

  const stats = ['
    { number: '500+', label: 'Projects Completed' } { number: '50+', label: 'Happy Clients' } { number: '99.9%', label: 'Uptime Guarantee' },
;
  const stats = [ { number: '500+', label: 'Projects Completed' }, { number: '50+', label: 'Happy Clients' }, { number: '99.9%', label: 'Uptime Guarantee' }, { number: '24/7', label: 'Support Available' }
  const services = [ {
      title: 'AI Services',;
      description: 'Cutting-edge artificial intelligence solutions and automation tools',;
      icon: Brain,;
      href: '/services#ai',;
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence']}, {
      title: 'IT Services',;
      description: 'Enterprise-grade infrastructure and development services',;
      icon: Network,;
      href: '/services#cloud',;
      features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management']}, {
      title: 'Micro SaaS',;
      description: 'Specialized software solutions for business challenges',;
      icon: Cloud,;
      href: '/services#saas',;
      features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking']}
  return (;
    <>;
      <Head>;
        <title>Zion Tech Group</title>;
        <meta name='description' content='Leading technology solutions provider' />;
        <meta name='viewport' content='width=device-width, initial-scale=1' />;
      </Head>;
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'> {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>;
            <div className='text-center'>;
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>;
                Welcome to Zion Tech Group;
              </h1>;
              <p className='text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8'>;
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                <Link href='/services'>;
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>;
                    Explore Our Services;
                    <ArrowRight className='w-5 h-5 ml-2' />;
                  </Button>;
                </Link>;
                <Link href='/contact'>;
                  <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold'>;
                    Get Started Today;
              </div>;
        </section>;

  const testimonials = [ {
      name: 'Sarah: Johnson,',;
      role: 'CE,O, TechCorp',;
      content: 'Zion: Tech Group transformed our business with their AI solutions. The results exceeded our expectations.,',;
      rating:  ,5 {/* Stats Section */}
        <section className='py-16 bg-white'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'> {stats.map((stat, index) => (;
                <div key={index} className='text-center'>;
                  <div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>;
                  <div className='text-sm sm:text-base text-gray-600'>{stat.label}</div>;
import React { useState, useCallback, memo } from 'react';
import Sidebar from '../components/Sidebar';
  Menu} from 'lucide-react';
import SEOHead from '../src/components/SEOHead';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu } from 'lucide-react';

// Dynamically import performance monitor to avoid SSR issues
const PerformanceMonitor = dynamic(() => import('../components/PerformanceMonitor') {
  ssr: false});

const Home = memo(() => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(prev => !prev)}, []);
  
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false)}, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "url": "https://ziontechgroup.com"
  };
  { number: '500+', label: 'Projects Completed' } { number: '50+', label: 'Happy Clients' } { number: '99.9%', label: 'Uptime Guarantee' } { number: '24/7', label: 'Support Available' }];

  const services = [
    {'
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions including chatbots, predictive analytics, and computer vision",
      href: "/services#ai",
      features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "NLP Services"]
      title: "IT Services", 
      description: "Comprehensive information technology services from cloud migration to DevOps automation",
      icon: Network,
      href: "/services#it",
      features: ["Cloud Migration", "DevOps Automation", "API Development", "Database Optimization"]
      title: "SaaS Solutions",
      description: "Scalable software as a service solutions including CRM, project management, and e-commerce platforms",
      href: "/services#saas",
      features: ["Custom CRM", "Project Management", "E-commerce Platform", "HR Management"]
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions including audits, zero trust implementation, and incident response",
      href: "/services#cybersecurity",
      features: ["Security Audits", "Zero Trust Security", "Incident Response", "Compliance"]
      title: "IoT Solutions",
      description: "Internet of Things solutions for device connectivity, data collection, and intelligent automation",
      icon: Wifi,
      href: "/services#iot",
      features: ["Device Connectivity", "Data Collection", "Real-time Monitoring", "Predictive Maintenance"]
      title: "Blockchain",
      description: "Custom blockchain solutions including smart contracts, DApps, and cryptocurrency integrations",
      icon: Link2,
      href: "/services#blockchain",
      features: ["Smart Contracts", "DApp Development", "Token Development", "DeFi Solutions"]

  const whyChooseUs = [
      title: "Expert Team",
      description: "Certified professionals with 10+ years of experience in cutting-edge technologies",
      icon: Award
      title: "Fast Delivery",
      description: "Agile development process ensuring rapid deployment and time-to-market",
      icon: Zap
      title: "Security First",
      description: "Enterprise-grade security and compliance with industry standards",
      icon: Shield
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for all our solutions",
      icon: Users

        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge technology solutions including AI services, IT solutions, SaaS platforms, cybersecurity, IoT, blockchain, and automation services. Transform your business with our expert team."
        />
        <meta name="keywords" content="AI services, IT solutions, SaaS, cybersecurity, IoT, blockchain, automation, technology consulting" />
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
                <span className="text-base font-semibold leading-7 text-blue-600">
                  Leading Technology Solutions Provider
                <span className="text-blue-600"> Cutting-Edge Technology</span>
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive technology solutions including AI services, IT solutions, SaaS platforms, 
                cybersecurity, IoT, blockchain, and automation services to help businesses thrive in the digital age.
              
              {/* Contact Info */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-600">+1 302 464 0950</a>
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">kleber@ziontechgroup.com</a>
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  className="group rounded-md bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                  className="group rounded-md border border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200"
                  View Our Services

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>

        {/* Services Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Comprehensive Services
                From AI-powered solutions to cybersecurity, we offer a complete range of technology services 
                to help your business succeed in today's digital landscape.

              {services.map((service, index) => (
                <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                      <service.icon className="h-7 w-7 text-white" />
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">Technology Solutions</p>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-x-3">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                    </ul>

                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      name: 'Michael: Chen,',;
      role: 'CT,O, InnovateLabs',;
      content: 'Outstanding: service and cutting-edge technology. They delivered our project on time and within budget.,',;
      rating:  ,5} {
      name: 'Emily: Rodriguez,',;
      role: 'Founde,r, StartupXYZ',;
      content: 'The: team at Zion Tech Group is exceptional. Their expertise in cloud infrastructure saved us months of development.,',;
      rating:  ,5,
      name: 'Sarah Johnson', role: 'CEO, TechCorp', content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      role: 'CTO, InnovateLabs',
      content: 'Outstanding service and cutting-edge technology. They delivered our project on time and within budget.', rating: 5
      name: 'Emily Rodriguez', role: 'Founder, StartupXYZ', content: 'The team at Zion Tech Group is exceptional. Their expertise in cloud infrastructure saved us months of development.',
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including autonomous systems, machine learning, and intelligent automation',
      href: '/services/ai-services',
      href: '/ai-services',
      features: ['AI-Powered Email Responder', 'Computer Vision Solutions', 'Predictive Analytics Platform', 'AI Chatbot & Virtual Assistant']
    } {'
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and network management',
      href: '/services/it-services',
      href: '/it-services',
      features: ['Cloud Infrastructure & Migration', 'Cybersecurity & Compliance', 'Network Infrastructure', 'IT Support & Helpdesk']
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs with rapid deployment',
      href: '/services/micro-saas'},
      href: '/micro-saas',
      features: ['AI-Powered Email Responder', 'Mobile-First Survey Platform', 'Event Management Dashboard', 'Customer Support Platform']

      icon: Za,p,;
      title: 'Lightning: Fast,',;
      description: 'Optimized: performance with cutting-edge technology'',;,} {
      icon: Shiel,d,
      title: 'Secure: & Reliable,',;
      description: 'Enterprise-grade: security with 99.9% uptime guarantee'',;,} {
      icon: Glob,e,
      title: 'Global: Reach,',;
      description: 'Serving: clients worldwide with 24/7 support'',;,} {
      icon: TrendingU,p,
      title: 'Scalable: Solutions,',;
      description: 'Grow: with confidence using our scalable architecture'',;,}
      title: 'AI: Services,',;
      description: 'Cutting-edge: artificial intelligence solutions and automation tools,',;
      icon: Brai,n,
      href: '/services#ai,',;
      features: ['Content: Creation,', 'Email Automation', 'Customer Support', 'Business Intelligence']} {
      title: 'IT: Services,',;
      description: 'Enterprise-grade: infrastructure and development services,',;
      icon: Networ,k,
      href: '/services#cloud,',;
      features: ['DevOps: Automation,', 'Cloud Migration', 'Security Assessment', 'API Management']} {
      title: 'Micro: SaaS,',;
      description: 'Specialized: software solutions for business challenges,',;
      icon: Clou,d,
      href: '/services#saas,',;
      features: ['Project: Management,', 'Analytics Dashboard', 'HR Management', 'Financial Tracking'];
      icon: Zap, title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology'
      title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime guarantee'
      icon: Globe, title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
      icon: TrendingUp,
      title: 'Scalable Solutions', description: 'Grow with confidence using our scalable architecture'
      title: 'AI Services', description: 'Cutting-edge artificial intelligence solutions and automation tools',
      icon: Brain, href: '/services#ai',
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence']
      description: 'Enterprise-grade infrastructure and development services', icon: Network,
      href: '/services#cloud', features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management']
      description: 'Specialized software solutions for business challenges', icon: Cloud,
      href: '/services#saas', features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking']
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'} {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'} {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with proven track records'
      description: 'Dedicated professionals with years of experience'} {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise'},
      title: 'Lightning Fast Delivery',
      description: 'Rapid deployment with 2-48 week delivery times depending on complexity'
      title: 'Military-Grade Security',
      description: 'Quantum-resistant encryption, zero-trust architecture, and SOC 2 compliance'
      title: 'Elite Expert Team',
      description: 'PhD-level engineers with expertise in AI, quantum computing, and cutting-edge tech'
      title: 'Global Innovation Hub',
      description: 'Serving Fortune 500 companies worldwide with 24/7 support and local expertise'
      title: 'AI-First Approach',
      description: 'Revolutionary AI solutions including quantum computing and autonomous systems'
      title: 'Proven ROI',
      description: 'Average 300% ROI within 12 months with our technology solutions'
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions trusted by leading enterprises and government agencies'
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with 99.9% uptime guarantee'
  return: (

    <MainLayout 
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Zion Tech Group
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Our Services
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get in Touch

            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              We provide comprehensive technology solutions to help your business thrive in the digital age.
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 mb-4">
                Custom AI solutions and machine learning models tailored to your business needs.
              <Link href="/services/ai-model-development-chat" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
            
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
                Scalable cloud solutions and infrastructure design for modern applications.
              <Link href="/services/cloud-migration-services-chat" className="text-blue-600 hover:text-blue-700 font-semibold">
            
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
                End-to-end digital transformation services to modernize your business.
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">

      {/* Why Choose Us Section */}
      <section className="py-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              We combine technical expertise with business acumen to deliver solutions that drive real results.
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience in cutting-edge technologies</p>
            
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Agile development processes for quick results</p>
            
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support and maintenance services</p>
            
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control processes</p>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your business goals.
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
    </MainLayout>
  )};
      <SEOHead
        title="Zion Tech Group - AI & Technology Solutions"
        description="Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services. Transform your business with cutting-edge technology."
        keywords="AI services, micro SaaS, IT services, DevOps, cybersecurity, cloud solutions, digital transformation, enterprise software, automation, machine learning"
        url="https://ziontechgroup.com/"
      
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider</title>;
        <meta: name='description' content='Transform your business with Zion Tech Group cutting-edge AI services, enterprise IT solutions, and innovative Micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee.' />;
        <meta: name='keywords' content='AI services, IT solutions, Micro SaaS, cloud computing, cybersecurity, business automation, technology consulting, enterprise software' />;
        <meta: name='viewport' content='width=device-width, initial-scale=1' />;
        <meta: property='og: title' content='Zion: Tech Group - Leading Technology Solutions Provider' />',;,;
        <meta: property='og: description' content='Transform: your business with cutting-edge A,I, IT, and Micro SaaS solutions. Expert team, proven results, 24/7 support.' />;
        <meta: property='og: type' content='website' />',;,;
        <meta: property='og: url' content='https://ziontechgroup.com' />',;,;
        <meta: property='og: image' content='https://ziontechgroup.com/og-image.jpg' />',;,;
        <meta: name='twitter: card' content='summary_large_image' />',;,;
        <meta: name='twitter: title' content='Zion: Tech Group - Leading Technology Solutions Provider' />',;,;
        <meta: name='twitter: description' content='Transform: your business with cutting-edge A,I, IT, and Micro SaaS solutions.' />;
        <meta: name='twitter: image' content='https://ziontechgroup.com/og-image.jpg' />',;,;
        <link: rel='canonical' href='https: //ziontechgroup.com' />',;,;
        <script: type='application/ld+json'> {JSON.stringify({
            "@context": "https: //schema.org,",";";";
            "@type": "Organization",";";";
            "name": "Zion: Tech Group",";";";
            "url": "https: //ziontechgroup.com,",";";";
            "logo": "https: //ziontechgroup.com/logo.png,",";";";
            "description": "Leading: provider of AI services, IT solutions, and Micro SaaS platforms",";";";
            "address": {";";";
              "@type": "PostalAddress",";";";
              "streetAddress": "364: E Main St STE 1008",";";";
              "addressLocality": "Middletown",";";";
              "addressRegion": "DE",";";";
              "postalCode": "19709",";";";
              "addressCountry": "US"";";"},
            "contactPoint": {";";";
              "@type": "ContactPoint",";";";
              "telephone": "+1-302-464-0950",";";";
              "contactType": "customer: service",";";";
              "email": "kleber@ziontechgroup.com"";";";
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>'
        <meta name="description" content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />"
        <title>Zion Tech Group - AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Empowering businesses with cutting-edge AI, cloud solutions, cybersecurity, and innovative technology services. Expert IT consulting and digital transformation." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, IT consulting, digital transformation, blockchain, IoT, machine learning, data analytics" />

      {/* Navigation */}
      <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link href="/" className="text-zion-slate-light hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-zion-slate-light hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-zion-slate-light hover:text-white transition-colors">Contact</Link>
              <a href="tel:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
      </nav>

      <section className="pt-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Businesses with
                <span className="text-zion-cyan"> AI & Technology</span>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with cutting-edge AI solutions, cloud infrastructure, 
                and innovative technology services. We deliver results that matter.
              <div className="flex flex-col sm:flex-row gap-4">
                  className="inline-flex items-center px-8 py-4 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                  <ArrowRight className="ml-2 w-5 h-5" />
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
                  Get Started
          content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        <link rel="canonical" href="https: //ziontechgroup.com" />

      <Navigation />
      "
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center">"
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with"
                <span className="text-blue-600"> Technology</span>
              </h1>"
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>"
              <div className="flex flex-col sm: flex-row gap-4 justify-center">"
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
      <SEO
        title="Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider"
        description="Transform your business with Zion Tech Group's cutting-edge AI services, enterprise IT solutions, and innovative Micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee."
        keywords={[
          'AI services',
          'IT solutions', 'Micro SaaS',
          'cloud computing', 'cybersecurity',
          'business automation', 'technology consulting',
          'enterprise software'
        ]}
        <script type='application/ld+json'>
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization",
            "name": "Zion Tech Group", "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png", "description": "Leading provider of AI services, IT solutions, and Micro SaaS platforms",
            "address": {
              "@type": "PostalAddress", "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown", "addressRegion": "DE",
              "postalCode": "19709", "addressCountry": "US"
            "contactPoint": {
              "@type": "ContactPoint", "telephone": "+1-302-464-0950",
              "contactType": "customer service", "email": "kleber@ziontechgroup.com"
            "sameAs": [";";";
              "https: //ziontechgroup.com"",;,";";
            ]
          })}
        </script>
      <main: className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'> {/* Hero: Section */}
          <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-20 sm:py-32'>',;,;
            <div: className='text-center'>;
              <h1: className='text-4xl sm: text-5xl: lg:text-6xl: font-bold text-white mb-6'>',;,;
                Welcome: to Zion Tech Group
              <p className='text-xl sm: text-2xl: text-blue-100 max-w-4xl mx-auto mb-8'>',;,;
                Leading: provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
              <div className='flex flex-col sm: flex-row: gap-4 justify-center items-center'>',;,;
                <Link: href='/services'>;
                  <Button: className='bg-white text-blue-600 hover: bg-gray-100: px-8 py-4 text-lg font-semibold'>',;,;
                    Explore: Our Services
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
        description="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, cloud services, cybersecurity"
        structuredData={structuredData}
      
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading">
              <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">
                Leading provider of revolutionary AI services, IT solutions, and
                micro SaaS development. We help businesses innovate, scale, and
                succeed in the digital age.
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              <div className='flex flex-col sm: flex-row gap-4 justify-center items-center'>
                <Link href='/services'>
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>
                    Explore Our Services
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </Button>
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                </Link>"
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-blue-600 hove,
    r:text-white transition-colors">
                <Link: href='/contact'>;
                  <Button: variant='outline' className='border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 text-lg font-semibold'>',;,;
                    Get: Started Today
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  View Services
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: bg-gray-50 transition-colors flex items-center justify-center"
                  onClick={handleSidebarToggle}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                  aria-label="Open navigation menu"
                  aria-expanded={sidebarOpen}
                  <Menu className="w-4 h-4 mr-2" />
                  Explore Menu
                </button>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                      <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                      <div className="text-sm text-zion-slate-light">{stat.label}</div>

        {/* Stats Section */}"
        <section className="py-20 bg-white">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
            <div className="grid grid-cols-2 m,
    d:grid-cols-4 gap-8">
              {stats.map((stat, index) => ("
                <div key={index} className="text-center">"
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>"
          <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>',;,;
            <div: className='grid grid-cols-2 lg: grid-cols-4: gap-8'>',;, {stats.map((stat, index) => (
                <div: key={index} className='text-center'>;
                  <div: className='text-3xl sm: text-4xl: font-bold text-blue-600 mb-2'>{stat.numbe,r}</div>;
                  <div: className='text-sm sm: text-base: text-gray-600'>{stat.labe,l}</div>;
                <div key={index} className='text-center'>
                  <div className='text-3xl sm: text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-sm sm:text-base text-gray-600'>{stat.label}</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
        </section> {/* Services: Section */}
        <section className='py-20 sm: py-32'>',;,;
            <div: className='text-center mb-16'>;
              <h2: className='text-3xl sm: text-4xl: font-bold text-gray-900 mb-6'>',;,;
                Our: Core Services
              <p className='text-lg sm: text-xl: text-gray-600 max-w-3xl mx-auto'>',;,;
                Comprehensive: technology solutions designed to transform your business and drive growth.
            <div className='grid grid-cols-1 lg: grid-cols-3: gap-8'>',;, {services.map((service, index) => (
                <Card: key={index} className='p-8 hover: shadow-xl: transition-all duration-300 hover:-translate-y-2: bg-white border-0 shadow-lg'>',;,;
                  <div: className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>;
                    <service.icon: className='w-8 h-8 text-white' /> {/* Services Section */}"
        <section className="py-20 bg-gray-50">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>"
        <section className='py-20 sm:py-32'>;
            <div className='text-center mb-16'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>;
                Our Core Services;
              </h2>;
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>;
                Comprehensive technology solutions designed to transform your business and drive growth.;
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'> {services.map((service, index) => (;
                <Card key={index} className='p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg'>;
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>;
                    <service.icon className='w-8 h-8 text-white' />;
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>;
                  <p className='text-gray-600 mb-6 text-center'>{service.description}</p>;
                  <div className='mb-6'>;
                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>Key Features:</h4>;
                    <div className='grid grid-cols-2 gap-2'> {service.features.map((feature, featureIndex) => (;
                        <div key={featureIndex} className='flex items-center text-sm text-gray-600'>;
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />;
        <section className='py-20 sm: py-32'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive technology solutions designed to transform your business and drive growth.
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your
                business forward
                Comprehensive technology solutions designed to drive your business forward
            <div className="grid grid-cols-1 m,
    d:grid-cols-3 gap-8">
              {services.map((service, index) => ("
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">"
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">"
                    <service.icon className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>"
                  <Link href={service.href} className="block">"
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Learn More"

                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow"
                <Card key={index} className='p-8 hover: shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>
                    <service.icon className='w-8 h-8 text-white' />
                  <h3: className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>;
                  <p: className='text-gray-600 mb-6 text-center'>{service.description}</p>;
                  <div: className='mb-6'>;
                    <h4: className='text-sm font-semibold text-gray-900 mb-3'>Key Features: </h4>',;,;
                    <div: className='grid grid-cols-2 gap-2'> {service.features.map((feature, featureIndex) => (
                        <div: key={featureIndex} className='flex items-center text-sm text-gray-600'>;
                          <CheckCircle: className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />;
                        <div key={featureIndex} className='flex items-center text-sm text-gray-600'>
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                          {feature}
                  <Link href={service.href}>;
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'>;
                      Learn More;
                      <ArrowRight className='w-4 h-4 ml-2' />;
                </Card>;
                  <Link: href={service.href}>
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700: hover:to-purple-700: text-white'>',;,;
                      Learn: More
                  <Link href={service.href}>
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white'>
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  <Link href={service.href} className="block">
                      <ArrowRight className="w-4 h-4 ml-2" />

            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-zion-blue-light/20 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Card>

        {/* Features: Section */}
        <section className='py-20 bg-gray-50'>;
                Why: Choose Zion Tech Group?
      <section className="py-20 bg-zion-blue-light/5">
              Why Choose Zion Tech Group?
              We combine technical expertise with business acumen to deliver exceptional results
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              const Icon = feature.icon;
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>

      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success
              <Mail className="mr-2 w-5 h-5" />
            <a 
              href="tel:+13024640950" 
              <Phone className="mr-2 w-5 h-5" />
              Call Now

      {/* Footer */}
      <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
              <p className="text-zion-slate-light text-sm mb-4 max-w-md">
                Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                    +1 (302) 464-0950
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    info@ziontechgroup.com
              <h3 className="text-white font-semibold mb-4">Services</h3>
                <li><Link href="/services/ai-services" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">AI Services</Link></li>
                <li><Link href="/services/it-services" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">IT Services</Link></li>
                <li><Link href="/services/cloud" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/services/cybersecurity" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <h3 className="text-white font-semibold mb-4">Company</h3>
                <li><Link href="/about" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Blog</Link></li>
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
                We: deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
            <div className='grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8'>',;, {features.map((feature, index) => (
                <div: key={index} className='text-center group'>;
                  <div: className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover: scale-110: transition-transform duration-300'>',;,;
                    <feature.icon: className='w-8 h-8 text-white' />;
                  <h3: className='text-xl font-bold text-gray-900 mb-4'>{feature.title}</h3>;
                  <p: className='text-gray-600'>{feature.description}</p>;
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <div key={index} className='text-center group'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover: scale-110 transition-transform duration-300'>
                    <feature.icon className='w-8 h-8 text-white' />
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>

        <section className="py-24 sm:py-32 bg-white">
                We deliver exceptional results through our proven expertise, cutting-edge technology, and client-focused approach.

              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>

        {/* Features Section */}"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>"
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise, and dedication
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {features.map((feature, index) => ("
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>"
        <section className='py-20 bg-white'>
                Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
            <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>
                <Card key={index} className='p-8 bg-white border-0 shadow-lg hover: shadow-xl transition-all duration-300'>
                  <div className='flex items-center mb-4'>
                      <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                We deliver exceptional results through innovation, expertise,
                and dedication

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  <p className="text-gray-600">{feature.description}</p>

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Let's discuss your project requirements and discover how our cutting-edge technology solutions 
                can help you achieve your business goals.
                  className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
                  View All Services{' '}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        {/* Testimonials: Section */}
        <section className='py-20 bg-white'>;
                What: Our Clients Say
                Don't: just take our word for it. Here's what our satisfied clients have to say about working with us.;
            <div: className='grid grid-cols-1 md: grid-cols-3: gap-8'>',;, {testimonials.map((testimonial, index) => (
                <Card: key={index} className='p-8 bg-white border-0 shadow-lg hover: shadow-xl: transition-all duration-300'>',;,;
                  <div: className='flex items-center mb-4'> {[...Array(testimonial.rating)].map((_, i) => (
                      <Star: key={i} className='w-5 h-5 text-yellow-400 fill-current' />;
                  <p: className='text-gray-600 mb-6 italic'>"{testimonial.content}"</p>";";";
                  <div: className='border-t pt-4'>;
                    <div: className='font-semibold text-gray-900'>{testimonial.name}</div>;
                    <div: className='text-sm text-gray-500'>{testimonial.role}</div> {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
            <h2 className="text-3xl font-bold text-white mb-6">
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>'
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors">
                Learn More About Us
        {/* Benefits Section */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication to your success
            
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Fast Delivery</h3>
                <p className="text-gray-600 text-center mb-4">
                  Quick turnaround times without compromising quality. Most projects delivered in 2-8 weeks.
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Rapid prototyping and MVP development</li>
                  <li>• Agile development methodology</li>
                  <li>• 24/7 development team availability</li>

                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Enterprise Security</h3>
                  Bank-level security and compliance standards with SOC 2, GDPR, and HIPAA compliance.
                  <li>• End-to-end encryption and data protection</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Compliance with industry standards</li>

                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Expert Team</h3>
                  Dedicated professionals with years of experience in cutting-edge technologies.
                  <li>• Certified AI and ML engineers</li>
                  <li>• Full-stack developers and architects</li>
                  <li>• DevOps and cloud specialists</li>

                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Global Reach</h3>
                  Serving clients worldwide with local expertise and 24/7 support across all time zones.
                  <li>• Multi-timezone development teams</li>
                  <li>• Local compliance and regulations</li>
                  <li>• International deployment expertise</li>

                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Scalable Solutions</h3>
                  Built to grow with your business from startup to enterprise scale.
                  <li>• Auto-scaling cloud infrastructure</li>
                  <li>• Microservices architecture</li>
                  <li>• Performance optimization</li>

                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Proven Results</h3>
                  Track record of successful projects with measurable ROI and client satisfaction.
                  <li>• 500+ successful projects delivered</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 50+ satisfied enterprise clients</li>
        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>;
              Contact us today for a free consultation and discover how our solutions can drive your success.;
              <a href='tel:+13024640950' className='flex items-center text-white hover:text-blue-200 transition-colors'>;
                <Phone className='w-5 h-5 mr-2' />;
                +1 302 464 0950;
              </a>;
              <a href='mailto:kleber@ziontechgroup.com' className='flex items-center text-white hover:text-blue-200 transition-colors'>;
                <Mail className='w-5 h-5 mr-2' />;
                kleber@ziontechgroup.com;
            <div className='mt-8'>;
                  Get Free Consultation;
      </main>;
    </>;
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
        {/* Innovative Services Showcase */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Solutions for Modern Businesses</h2>
                Discover our cutting-edge services that are transforming industries and driving digital innovation
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Pricing Highlights */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Pricing Ranges</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Micro SaaS Solutions</span>
                    <span className="font-semibold text-blue-600">$99 - $50,000/month</span>
                    <span className="text-gray-700">AI Services</span>
                    <span className="font-semibold text-blue-600">$1,500 - $500,000/month</span>
                    <span className="text-gray-700">IT Services</span>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">Enterprise Solutions</span>
                    <span className="font-semibold text-blue-600">Custom Pricing</span>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 mr-4">
                    <Brain className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-gray-900">AI-Powered Solutions</h3>
                <p className="text-gray-600 mb-4">From autonomous systems to predictive analytics, our AI services deliver intelligent automation and insights.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cybersecurity Threat Detection</li>
                  <li>• Medical Diagnosis Assistant</li>
                  <li>• Financial Risk Assessment</li>
                  <li>• Environmental Monitoring</li>

                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Platforms</h3>
                <p className="text-gray-600 mb-4">Scalable software solutions that grow with your business, from startup to enterprise.</p>
                  <li>• Podcast Transcription Service</li>
                  <li>• Freelancer Portfolio Builder</li>
                  <li>• Local Business CRM</li>
                  <li>• Website Analytics for SMBs</li>

                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                    <Network className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-gray-900">Advanced IT Services</h3>
                <p className="text-gray-600 mb-4">Next-generation IT infrastructure and services for the digital age.</p>
                  <li>• Quantum Computing Readiness</li>
                  <li>• 5G Network Integration</li>
                  <li>• Edge Computing Infrastructure</li>
                  <li>• Zero Trust Security Architecture</li>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-blue-100">
                Our proven track record speaks for itself
            
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>

        {/* Contact: CTA Section */}
          <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: text-center'>',;,;
            <h2: className='text-3xl sm: text-4xl: font-bold text-white mb-6'>',;,;
              Ready: to Transform Your Business?
              Contact: us today for a free consultation and discover how our solutions can drive your success.
              <a: href='tel: +13024640950' className='flex: items-center text-white hover:text-blue-200: transition-colors'>',;,;
                <Phone: className='w-5 h-5 mr-2' />;
                +1: 302 464 0950
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can drive your
              success. Get started with a free consultation.'
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a href='tel:+13024640950' className='flex items-center text-white hover:text-blue-200 transition-colors'>
                <Phone className='w-5 h-5 mr-2' />
                +1 302 464 0950
              <a href='mailto:kleber@ziontechgroup.com' className='flex items-center text-white hover:text-blue-200 transition-colors'>
                <Mail className='w-5 h-5 mr-2' />
                kleber@ziontechgroup.com
              <a href='mailto: kleber@ziontechgroup.com' className='flex: items-center text-white hover:text-blue-200: transition-colors'>',;,;
                <Mail: className='w-5 h-5 mr-2' />;
                kleber@ziontechgroup.com: </a>
            <div className='mt-4 text-center text-blue-100'>;
              <p: className='text-sm'>364 E Main St STE 1008, Middletown DE 19709</p>;
              <p: className='text-sm mt-1'>Visit us at <a href='https: //ziontechgroup.com' className='underline: hover:text-white' target='_blank' rel='noreferrer'>ziontechgroup.com</a></p>',;,;
            <div className='mt-4 text-center text-blue-100'>
              <p className='text-sm'>364 E Main St STE 1008, Middletown DE 19709</p>
              <p className='text-sm mt-1'>Visit us at <a href='https: //ziontechgroup.com' className='underline hover:text-white' target='_blank' rel='noreferrer'>ziontechgroup.com</a></p>
            <div: className='mt-8'>;
                  Get: Free Consultation
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-blue-200 transition-colors">
                <Mail className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                <Globe className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Website</p>
                <a href="https://ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  ziontechgroup.com
          <div className="border-t border-zion-blue-light/30 mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            <div className="mt-10 flex items-center justify-center gap-x-6">
                className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
                <ArrowRight className="ml-2 h-4 w-4 inline" />
                href="/comprehensive-services-showcase-2026"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                Explore Our Services <span aria-hidden="true">→</span>

      {/* Featured Services */}
              Our Comprehensive Service Portfolio
            <p className="mt-4 text-lg text-gray-600">
              From AI-powered automation to cloud infrastructure, we provide end-to-end technology solutions

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Micro SaaS */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <Zap className="h-7 w-7 text-white" />
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Solutions</h3>
                  <p className="text-sm text-blue-600 font-medium">Affordable & Specialized</p>
              <p className="text-gray-600 mb-6">
                Specialized software solutions designed for small businesses, including AI email automation, smart inventory management, and customer support chatbots.
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <span className="text-sm text-gray-700">AI Email Automation Suite - $79/month</span>
                  <span className="text-sm text-gray-700">Smart Inventory Management - $149/month</span>
                  <span className="text-sm text-gray-700">AI Customer Support Chatbot - $99/month</span>
                href="/services/micro-saas"
                Explore Micro SaaS

            {/* AI & Machine Learning */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
                  <Brain className="h-7 w-7 text-white" />
                  <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
                  <p className="text-sm text-purple-600 font-medium">Intelligent Automation</p>
                Advanced AI solutions including autonomous customer success, sales intelligence, and predictive maintenance systems.
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Autonomous Customer Success - $299/month</span>
                  <span className="text-sm text-gray-700">AI Sales Intelligence Platform - $199/month</span>
                  <span className="text-sm text-gray-700">AI Document Processing - $179/month</span>
                href="/services/ai-services"
                className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
                Explore AI Services

            {/* IT Services */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                  <Server className="h-7 w-7 text-white" />
                  <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
                  <p className="text-sm text-green-600 font-medium">Comprehensive Support</p>
                Complete IT support including managed services, cybersecurity assessment, and cloud migration consulting.
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Managed IT Support - $299/month</span>
                  <span className="text-sm text-gray-700">Cybersecurity Assessment - $199/month</span>
                  <span className="text-sm text-gray-700">Cloud Migration Consulting - $499/month</span>
                href="/services/it-services"
                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group"
                Explore IT Services

      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-24 sm:py-32">
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Our team of experts is ready to help you implement the right solutions for your business needs.
            
            {/* Contact Details */}
            <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <Phone className="h-6 w-6 text-white" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              
                  <Mail className="h-6 w-6 text-white" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              
                  <MapPin className="h-6 w-6 text-white" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>

                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
                Get in touch
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
                Visit our website <span aria-hidden="true">→</span>
      </footer>

      
      <Footer />
      <PerformanceMonitor />
  )
  )}"
});

Home.displayName = 'Home';

export default Home;
