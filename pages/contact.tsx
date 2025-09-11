import React from "react";
import Layout from "../components/Layout";
import React from 'react';




import React from 'react';

import Layout from '../components/Layout';

import Layout from '../components/Layout';
=======
    
    return this.props.children;
  }
}

=======

import React from "react";
import Layout from "../components/Layout";
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import Layout from '../components/Layout';
import Layout from '../components/Layout';
origin/automation-improvements-final
import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
  const services = [
    'AI Services & Solutions',
    'IT Infrastructure & Cloud',
    'Micro SAAS Development',
    'Digital Transformation',
    'Cybersecurity Solutions',
    'Data Analytics & Insights'
  ];
=======
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  const services = [
    'AI Automation Platform',
    'Cloud Infrastructure',
    'Micro SaaS Development',
    'Cybersecurity Solutions',
    'Data Analytics & BI',
    'Blockchain Solutions',
    'Other'
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
origin/automation-improvements-final
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
origin/main
import React from "react";
import Layout from "../components/Layout";
export default function Contact() {
  return (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.

import React from 'react';
    return this.props.children;
  }
}
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
ursor/integrate-build-improve-and-re-verify-8f7d
import Layout from '../components/Layout';
import Layout from '../components/Layout';
origin/automation-improvements-final

import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';
=======
    
    return this.props.children;
  }
}

=======

import React from "react";
import Layout from "../components/Layout";
=======
import React from 'react';

=======



=======
import Head from 'next/head';
import { useState } from 'react';
import { ContactInfo } from '../types';



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  const services = [
    'AI Automation Platform',
    'Cloud Infrastructure',
    'Micro SaaS Development',
    'Cybersecurity Solutions',
    'Data Analytics & BI',
    'Blockchain Solutions',
    'Other'
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  return (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import React from "react";
import Layout from "../components/Layout";
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
origin/automation-improvements-final
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
origin/main

import React from "react";
import Layout from "../components/Layout";
export default function Contact() {
  return (
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for advanced IT solutions and AI services." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind or a question for us? We'd love to hear from you.
          </p>
          <div className="card p-8 mb-8">
            <p className="text-lg text-gray-200 mb-4">
              You can reach us via email or phone, or fill out the form below.
            </p>
            <p className="text-lg font-semibold text-blue-400 mb-2">Email: info@ziontechgroup.com</p>
            <p className="text-lg font-semibold text-purple-400 mb-4">Phone: +1 (555) 123-4567</p>
            {/* A placeholder for a contact form could go here */}
            <p className="text-gray-500 text-sm">
              (Contact form functionality would be implemented here)
            </p>
export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Contact — Zion</title>
        <meta name="description" content="Get in touch to explore autonomous cloud solutions." />
=======
import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>Contact — Let's Collaborate</title>
        <meta name="description" content="Reach out to discuss your autonomous roadmap and use‑cases." />      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
}


            </div>
          </div>
        </div>
      </div>

