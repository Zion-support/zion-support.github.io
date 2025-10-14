'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity solutions designed to keep your data and systems secure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <ShieldCheckIcon className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Security Assessment</h3>
            <p className="text-gray-300 mb-4">Comprehensive security assessment to identify vulnerabilities and risks in your infrastructure.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Vulnerability scanning</li>
              <li>• Penetration testing</li>
              <li>• Security audits</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <LockClosedIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
            <p className="text-gray-300 mb-4">Advanced data protection solutions to secure your sensitive information and ensure compliance.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Encryption at rest</li>
              <li>• Encryption in transit</li>
              <li>• Access controls</li>
              <li>• Data loss prevention</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <EyeIcon className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Monitoring</h3>
            <p className="text-gray-300 mb-4">Round-the-clock security monitoring and incident response to keep your systems protected.</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Threat detection</li>
              <li>• Incident response</li>
              <li>• Security analytics</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Secure Your Business
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}