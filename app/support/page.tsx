
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Phone, Mail, FileText } from 'lucide-react';


const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: '',
    category: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  
  
  
  
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        priority: '',
        category: '',
        description: ''
      });
    }, 3000);
  };
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get help and support for our AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}
