'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe } from 'lucide-react';

export default function AiConversationalAiPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Conversational Ai</h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover our comprehensive ai conversational ai solutions designed to meet your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Brain className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-300">
              Leverage artificial intelligence to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Shield className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-300">
              Robust security measures to protect your data and ensure compliance.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-300">
              Dedicated support team to help you succeed with our solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Ai Conversational Ai Solutions?</h2>
          <ul className="space-y-4 text-lg text-gray-300 mb-8">
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Scalable and flexible architecture
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Industry-leading performance
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Easy integration with existing systems
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              24/7 monitoring and support
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}