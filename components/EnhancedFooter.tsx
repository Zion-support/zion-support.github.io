import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
        <div />
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group
            <p className="text-lg text-gray-300 mb-8">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
              Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <ArrowRight className="w-4 h-4 ml-2" />
            
          
          <div />
            <h4 className="text-lg font-semibold text-white mb-4">Services
            <ul className="space-y-2">
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  AI Solutions
                
              
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  IT Services
                
              
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  Cloud Solutions
                
              
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  Cybersecurity
                
              
            
          
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <div />
            <h4 className="text-lg font-semibold text-white mb-4">Company
            <ul className="space-y-2">
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  About Us
                
              
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  Our Team
                
              
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  Careers
                
              
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
              <li />
                <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            
                  Contact
                
              
            
          
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <div />
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info
            <div className="space-y-3">
        <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">info@ziontechgroup.com
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">San Francisco, CA
              
      
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-lg text-gray-300 mb-8">
            © 2024 Zion Tech Group. All rights reserved.
          
        
    
  );
};

export default EnhancedFooter</p>