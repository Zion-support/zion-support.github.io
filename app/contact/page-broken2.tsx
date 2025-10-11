'use client';
import React from 'react';
'use client';

import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle;)
>>>>>>> main
} from 'lucide-react';
;
const ContactPage: React.FC = () => {const [formData, setFormData] = useState({
=======
  CheckCircle]
    } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '';)
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {;
const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;)
}););)
}, []);
const handleSubmit = async (e: React.FormEvent) => {
=======
    message: '']
    });;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {
>>>>>>> main
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value]
    });)]
    }, []);

  const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      /
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
  };
;
const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
    'Cybersecurity',
    'DevOps',
    'Consulting',
    'Other'
  ];
;
const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST']
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours']
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office']
    },
    {
      icon: Clock,
      title: 'Business Hours',
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
                {' '}Touch
              Ready to transform your business? Let's discuss your project and explore 
              how our AI and IT solutions can help you achieve your goals.
            <

          <
        <


              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name *

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  We're here to help! Reach out to us through any of these channels 
                  and we'll get back to you as soon as possible.
                <

              <

                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  <
                <

                        {info.description}
                      <

                    <
                  <


)]
    };
export default ContactPage;