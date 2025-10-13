<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
import React, { useState } from "react";

import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
import { Link } from "react-router-dom";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6

export default function contact() {
  return (
=======
import React from "react";
import { Helmet } from "react-helmet-async";
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

export default function Contact() {

<<<<<<< HEAD
      return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ad48
=======
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "364 E Main St STE 1008",
      description: "Middletown DE 19709"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "EST Time Zone"
    }
  ];

  const services = [
    "AI Business Intelligence",
    "AI Customer Support",
    "AI Content Generation",
    "AI Cybersecurity",
    "5G Solutions",
    "Cloud Infrastructure",
    "Data Analytics",
    "Code Assistant",
    "Marketing Automation",
    "Document Processing",
    "CRM Assistant",
    "Financial Analytics"
  ];

  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
=======
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}
<<<<<<< HEAD
=======
}
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { ArrowRight, Mail, Smartphone, Globe, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
