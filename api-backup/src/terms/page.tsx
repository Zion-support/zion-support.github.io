'use client'
import React from 'react'
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react'
export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.',
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.',
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain 99.9% uptime for our services, but we do not guarantee uninterrupted access and reserve the right to modify or discontinue services.',
    },
    {
      title: 'User Responsibilities',
      icon: User,
      content: 'Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.',
    },
    {
      title: 'Intellectual Property',
      icon: FileText,
      content: 'All content, trademarks, and intellectual property on our website are owned by Zion Tech Group and protected by applicable copyright and trademark laws.',
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.',
    }
  ]
  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting malicious code or harmful content',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with the proper functioning of our services',
    'Using our services for illegal or unauthorized purposes',
    'Impersonating another person or entity',
    'Collecting user information without consent',
    'Engaging in any form of harassment or abuse'
  ]
  const serviceLevels = [
    {
      service: 'AI Services',
      uptime: '99.9%',
      support: '24/7',
      response: '1 hour',
    },
    {
      service: 'IT Infrastructure',
      uptime: '99.95%',
      support: '24/7',
      response: '30 minutes',
    },
    {
      service: 'Cloud Services',
      uptime: '99.9%',
      support: '24/7',
      response: '1 hour',
    },
    {
      service: 'Support Services',
      uptime: 'N/A',
      support: 'Business Hours',
      response: '4 hours',
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Terms of Service,
  
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Scale className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Legal Agreement
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Protection
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Transparent
      {/* Last Updated */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-6 text-center">
              <p className="text-gray-300">
                <strong>Last Updated:</strong> {lastUpdated}
              <p className="text-sm text-gray-400 mt-2">
                These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
      {/* Key Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Terms
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <section.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{section.title}
                  <p className="text-gray-300 text-sm">{section.content}
              ))}
      {/* Prohibited Uses */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Uses
            <p className="text-gray-300 mb-8 text-center">
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{use}
              ))}
      {/* Service Level Agreements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Agreements
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-700/50">
                    <th className="px-6 py-4 text-left text-white font-semibold">Service
                    <th className="px-6 py-4 text-left text-white font-semibold">Uptime
                    <th className="px-6 py-4 text-left text-white font-semibold">Support
                    <th className="px-6 py-4 text-left text-white font-semibold">Response Time
                <tbody>
                  {serviceLevels.map((level, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="px-6 py-4 text-white font-medium">{level.service}
                      <td className="px-6 py-4 text-cyan-400">{level.uptime}
                      <td className="px-6 py-4 text-purple-400">{level.support}
                      <td className="px-6 py-4 text-green-400">{level.response}
                  ))}
      {/* Payment Terms */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Terms
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Billing
                <p className="text-gray-300">
                  Services are billed monthly or annually as agreed upon in your service contract. 
                  Payment is due within 30 days of invoice date.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Refunds
                <p className="text-gray-300">
                  Refunds are provided at our discretion and are subject to the terms of your specific service agreement. 
                  No refunds for services already delivered.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Late Payments
                <p className="text-gray-300">
                  Late payments may result in service suspension. A late fee of 1.5% per month may be applied to overdue accounts.
      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Termination
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Termination by You
                <p className="text-gray-300">
                  You may terminate your account at any time by providing 30 days written notice. 
                  Data will be provided in a standard format upon request.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Termination by Us
                <p className="text-gray-300">
                  We may terminate your account immediately if you violate these terms or engage in prohibited activities. 
                  We will provide reasonable notice when possible.
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">Effect of Termination
                <p className="text-gray-300">
                  Upon termination, your right to use our services ceases immediately. 
                  We will retain your data for 90 days after termination for recovery purposes.
      {/* Governing Law */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law
            <p className="text-xl text-gray-300 mb-8">
              These terms are governed by the laws of the State of Delaware, United States. 
              Any disputes will be resolved in the courts of Delaware.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Delaware, USA
              <div className="flex items-center justify-center space-x-3">
                <Scale className="w-5 h-5 text-cyan-400" />
                <span className="text-white">US Law
              <div className="flex items-center justify-center space-x-3">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-white">English Language
      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these Terms of Service, please contact us.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 (302) 464-0950
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE
            <$2 />
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover: bg-cyan-600 transition-colors inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
  
          </div>
        </div>
      </section>
    </div>
  ),
}
  </a>
  </h1>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></span></span></span></p></p></p></p></p></p></p></p></p></p></p></p></p></h2></h2></h2></h2></h2></h2></h2></h3></h3></h3></h3></h3></h3></h3></section></section></section></section></section></section></section></section></section>