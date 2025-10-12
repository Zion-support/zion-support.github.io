import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, CheckCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Read our terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, Zion Tech Group" />
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Agreement to Terms</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree 
            to these Terms, please do not use our services.
          </p>
        </div>

        {/* Service Description */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Scale className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Service Description</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Zion Tech Group provides advanced AI and IT solutions including but not limited to:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Artificial Intelligence services and solutions</li>
              <li>• Information Technology consulting and implementation</li>
              <li>• Cloud services and migration</li>
              <li>• 5G network implementation</li>
              <li>• Digital transformation services</li>
              <li>• Micro SaaS development</li>
            </ul>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Acceptable Use</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Use our services only for lawful purposes</li>
                <li>• Provide accurate and complete information</li>
                <li>• Maintain the confidentiality of your account</li>
                <li>• Comply with all applicable laws and regulations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Prohibited Activities</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Violating any applicable laws or regulations</li>
                <li>• Infringing on intellectual property rights</li>
                <li>• Transmitting malicious code or harmful content</li>
                <li>• Attempting to gain unauthorized access to our systems</li>
                <li>• Interfering with the proper functioning of our services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              All content, trademarks, and intellectual property on our website and services are owned by 
              Zion Tech Group or our licensors. You may not:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Copy, modify, or distribute our content without permission</li>
              <li>• Use our trademarks or logos without authorization</li>
              <li>• Reverse engineer or attempt to extract source code</li>
              <li>• Create derivative works based on our services</li>
            </ul>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Loss of profits, data, or business opportunities</li>
              <li>• Service interruptions or downtime</li>
              <li>• Third-party actions or content</li>
              <li>• Security breaches or data loss</li>
            </ul>
            <p className="mt-4">
              Our total liability shall not exceed the amount paid by you for our services in the 12 months 
              preceding the claim.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
          
          <div className="space-y-4 text-gray-300">
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice, 
              for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our services will cease immediately, and we may delete 
              your account and data at our discretion.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
          
          <div className="space-y-4 text-gray-300">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any material 
              changes by posting the new Terms on our website and updating the "Last updated" date.
            </p>
            <p>
              Your continued use of our services after any such changes constitutes your acceptance of the 
              new Terms.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
          <p className="text-white/90 mb-6">
            If you have any questions about these Terms of Service, please contact us.
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