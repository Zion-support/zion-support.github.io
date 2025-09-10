import React from 'react'; const Help = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Help Center </h1> <p className="text - xl text - gray - 600"> Find answers to your questions and get the support you need. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Getting Started</h3> <p className="text - gray - 600 mb - 4">Learn how to get started with our services and solutions.</p> <span className="text - sm text - blue - 600">Read Guide</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Technical Support</h3> <p className="text - gray - 600 mb - 4">Get help with technical issues and troubleshooting.</p> <span className="text - sm text - blue - 600">Contact Support</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Documentation</h3> <p className="text - gray - 600 mb - 4">Browse our comprehensive documentation and guides.</p> <span className="text - sm text - blue - 600">View Docs</span> </div> </div> </div> </div> )} export default Help;
import React from 'react'; const Help = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Help Center </h1> <p className="text-xl text-gray-600"> Find answers to your questions and get the support you need. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3> <p className="text-gray-600 mb-4">Learn how to get started with our services and solutions.</p> <span className="text-sm text-blue-600">Read Guide</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h3> <p className="text-gray-600 mb-4">Get help with technical issues and troubleshooting.</p> <span className="text-sm text-blue-600">Contact Support</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3> <p className="text-gray-600 mb-4">Browse our comprehensive documentation and guides.</p> <span className="text-sm text-blue-600">View Docs</span> </div> </div> </div> </div> )}; export default Help;

import React from "react";
const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            Help Center{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            Find answers to your questions and get the support you need.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Getting Started
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Learn how to get started with our services and solutions.
            </p>{" "}
            <span className="text-sm text-blue-600">Read Guide</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Technical Support
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Get help with technical issues and troubleshooting.
            </p>{" "}
            <span className="text-sm text-blue-600">Contact Support</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Documentation
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Browse our comprehensive documentation and guides.
            </p>{" "}
            <span className="text-sm text-blue-600">View Docs</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Help;

import React, { useState } from 'react';""
import { motion } from 'framer-motion';""
import { SEO } from '../components/SEO';
import { 
  Search, MessageCircle, Phone, Mail, Clock, BookOpen, Video, FileText, Users, ChevronDown,
  ChevronUp, HelpCircle, CheckCircle, ArrowRight
} from 'lucide-react';