import React from 'react';
import { Helmet } from 'react-helmet-async';

import React, { useState } from "react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function contact() {
  return (
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Clock, MapPin, Code, Mail, Phone, Smartphone, Cloud } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

export default function Contact() {
  const [formData, setFormData] = useState({,
    name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
  });

      return (
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend;
    setIsSubmitted(true);
    // Reset form after 3 seconds;
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

      setFormData({,
    name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
  const contactInfo = [
    {,
    icon: <Mail className="w-6 h-6" />,
        title: "Email",
        details: "kleber@ziontechgroup.com",
        description: "Send us an email anytime"
    },
    {,
    icon: <Smartphone className="w-6 h-6" />,
        title: "Phone",
        details: "+1 302 464 0950",
        description: "Call us during business hours"
    },
    {,
    icon: <MapPin className="w-6 h-6" />,
        title: "Address",
        details: "364 E Main St STE 1008",
        description: "Middletown DE 19709"
    },
    {,
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
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {

  return (
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {

      return (
    <div className="min-h-screen bg-gray-900 text-white">
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
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

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive contact solutions designed to meet your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
}
}
  );
import { ArrowRight, Mail, Smartphone, Globe, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

}
}}
}
}}
