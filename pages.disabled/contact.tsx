=======
import React from 'react';
=======
import React, { useState } from 'react';
=======
import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, Send, CheckCircle, Star, Zap, Shield, Users, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      value: '+1 302 464 0950',
      description: 'Available 24/7 for urgent matters',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10',
      link: 'tel:+13024640950'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      value: 'kleber@ziontechgroup.com',
      description: 'Response within 2 hours during business hours',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, United States',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10',
      link: null
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website',
      value: 'ziontechgroup.com',
      description: 'Visit our main website for more information',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-500/10 to-cyan-600/10',
      link: 'https://ziontechgroup.com'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Get instant help from our AI support team',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-500/10 to-pink-600/10',
      link: null
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-5 h-5" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Fast Response',
      description: 'Average response time under 2 hours'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Global Support',
      description: '24/7 support across all time zones'
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment options'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Proven Results',
      description: 'Thousands of satisfied customers worldwide'
    }
  ];

  const additionalServices = [
    {
      title: 'Technical Consultation',
      description: 'Get expert advice on technology implementation',
      price: 'Free for first consultation',
      duration: '30 minutes'
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      price: 'Custom quote',
      duration: 'Project-based'
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training for your team',
      price: 'Starting at $199/hour',
      duration: 'Flexible scheduling'
    },
    {
      title: 'Emergency Support',
      description: '24/7 critical issue resolution',
      price: 'Included in enterprise plans',
      duration: 'Immediate response'
    }
  ];

  return (
    <QuantumHolographicBackground variant="quantum">
      <div className="min-h-screen">
        <Head>
          <title>Contact Us - Zion Tech Group | Get Started with Revolutionary Technology Solutions</title>
          <meta name="description" content="Contact Zion Tech Group today for a free consultation on our revolutionary AI, quantum computing, and emerging technology solutions. Transform your business with guaranteed ROI." />
          <meta name="keywords" content="contact Zion Tech Group, AI consultation, quantum computing services, technology solutions, business transformation" />
          <meta property="og:title" content="Contact Us - Zion Tech Group" />
          <meta property="og:description" content="Get started with revolutionary technology solutions. Free consultation available." />
          <meta property="og:url" content="https://ziontechgroup.com/contact" />
        </Head>

const Contact: NextPage = () => (
  <div className="py-10">
    <Head><title>Contact - Zion</title></Head>
    <h1 className="text-2xl font-semibold text-white">Contact</h1>
    <p className="text-white/80 mt-2">Get in touch at contact@zion.ai</p>
  </div>
);

      <p className="mt-2 text-gray-600 dark:text-gray-300">Get in touch with us.</p>
=======
      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="neon-text-green">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of experts is here to help you succeed with our micro SaaS services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <Phone className="h-16 w-16 text-neon-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
                <p className="text-neon-blue font-semibold text-xl mb-2">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">Available 24/7 for urgent support</p>
                <p className="text-gray-400 text-sm mt-2">International calls welcome</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <Mail className="h-16 w-16 text-neon-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-neon-green font-semibold text-xl mb-2">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 2 hours</p>
                <p className="text-gray-400 text-sm mt-2">Technical and sales inquiries</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <MapPin className="h-16 w-16 text-neon-purple mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Headquarters</h3>
                <p className="text-neon-purple font-semibold text-base leading-tight mb-2">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709<br />
                  United States
                </p>
                <p className="text-gray-400 text-sm">Main office location</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-lg mb-8">
              Ready to transform your business? Start your free trial today or schedule a consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/micro-saas"
                className="btn-futuristic px-8 py-3 text-lg font-semibold"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                View Pricing
                <DollarSign className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}
