'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Settings,

} from 'lucide-react';
;
const SecurityMonitoringPage: React.FC = () => {const features = [
    {
      ico,
    n: Eye,
      title: '24
      descriptio,
    n: 'Continuous surveillance of your entire IT infrastructure with instant threat detection and response.'
    },
    {
      icon: AlertTriangle,
      title: 'Advanced Threat Detection',
      description: 'AI-powered analysis to identify sophisticated cyber threats before they impact your business.'
    },
    {
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Detailed security reports and insights to help you understand and improve your security posture.'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Automated incident response and immediate notification systems to minimize security breaches.'
    }
  ];
    'AI-powered threat detection and analysis',
    'Real-time alerts and notifications',
    'Comprehensive security reporting',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Expert security team support',
    'Customizable monitoring rules'
  ];


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Security Monitoring Services
              <
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your business with our advanced 24
                Real-time threat detection, instant alerts, and expert response to keep your data safe.
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Security Monitoring?
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {features.map((feature, index) => (<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">

        {/* Benefits Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience comprehensive security protection with our advanced monitoring services.
              <
            <


        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              <
              <p className="text-xl text-purple-100 mb-8">
                Contact our security experts to discuss your monitoring needs and get a customized protection plan.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  
                  <Mail className="mr-2 h-5 w-5" 
                  Email Us
export default SecurityMonitoringPage;