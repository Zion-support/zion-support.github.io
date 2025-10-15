<<<<<<< HEAD
import { ArrowRight, Mail, Smartphone, Globe, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 302 464 0950", "Mon-Fri 9AM-6PM EST"],
      action: "Call Now"
<<<<<<< HEAD
    },    {
=======
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
=======
    },
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
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
<<<<<<< HEAD
=======
      icon: <Clock className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Street, Suite 100',
      description: 'San Francisco, CA 94105'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
value: 'Monday - Friday',
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
<<<<<<< HEAD
      details: ["Mon-Fri: 9AM-6PM EST", "Sat: 10AM-4PM EST"],
      action: "Schedule Call"
<<<<<<< HEAD
    }  ];
=======
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "EST Time Zone"
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ec45
    }
  ];
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56

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
=======
import React from 'react';
import SEOHead from '../components/SEOHead';
>>>>>>> cursor/analyze-improve-and-merge-code-4a9f

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="contact - Zion Tech Group"
        description="Zion Tech Group contact service page"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">contact</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
