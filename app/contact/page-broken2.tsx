import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Pagebroken2Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page Broken2 | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional page broken2 services by Zion Tech Group"
        />
import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {Phone,}
  Mail,

  MapPin,

  Clock,

  Send,

  CheckCircle;} from 'lucide-react'
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({)
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',}})
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,}const {name, value}}= e.target;
    setFormData(prev => ({)
    ...prev,
      [name]: value;}}));
  }, []);
const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
    setFormData(prev => ({
    ...prev,
      [name]: value
  }
    }))
  }, [])
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',}})
    } catch (error) {setSubmitStatus('error')}} finally {setIsSubmitting(false)}}}
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
  }
const services = [
];
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',

    'Cybersecurity',

    'DevOps',

    'Consulting',

    'Other'
  ]
const contactInfo = [
    {icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST',},
    {icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',},
    {icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office',},
    {icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time',}}
  ]
return (
    <>
  <Helmet />
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Page Broken2
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional page broken2 services by Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagebroken2Page;
    </>
  );
};

export default ContactPage;
