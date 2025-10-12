import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group - Learn how we protect and handle your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Our Commitment to Privacy</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            or use our services.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Name and contact information (email, phone number, address)</li>
                <li>• Business information (company name, job title, industry)</li>
                <li>• Account credentials and preferences</li>
                <li>• Communication history and support interactions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• IP address and device information</li>
                <li>• Browser type and version</li>
                <li>• Website usage patterns and analytics data</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Service Delivery</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Provide and maintain our services</li>
                <li>• Process transactions and payments</li>
                <li>• Deliver customer support</li>
                <li>• Send service-related communications</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Business Operations</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Improve our services and user experience</li>
                <li>• Conduct analytics and research</li>
                <li>• Marketing and promotional activities</li>
                <li>• Legal compliance and security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Lock className="w-8 h-8 text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              We implement industry-standard security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Encryption of data in transit and at rest</li>
              <li>• Regular security audits and assessments</li>
              <li>• Access controls and authentication protocols</li>
              <li>• Employee training on data protection practices</li>
              <li>• Incident response and breach notification procedures</li>
            </ul>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <UserCheck className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Your Rights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Access & Control</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Access your personal information</li>
                <li>• Update or correct your data</li>
                <li>• Delete your account and data</li>
                <li>• Export your data</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Communication</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Opt-out of marketing communications</li>
                <li>• Control cookie preferences</li>
                <li>• Request data processing restrictions</li>
                <li>• Object to certain data processing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h2>
          <p className="text-white/90 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}