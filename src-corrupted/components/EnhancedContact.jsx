<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/Textarea';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building, Users, Globe } from 'lucide-react';
export const EnhancedContact = () => {
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
    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Send us a detailed message',
            action: 'kleber@ziontechgroup.com',
            href: 'mailto:kleber@ziontechgroup.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Speak with our team directly',
            action: '+1 302 464 0950',
            href: 'tel:+13024640950'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            description: 'Our office location',
            action: '364 E Main St STE 1008, Middletown DE 19709',
            href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            description: 'When we\'re available',
            action: 'Mon-Fri: 9AM-6PM EST',
            href: '#'
        }
    ];
    const services = [
        'AI Solutions',
        'Cloud & DevOps',
        'Cybersecurity',
        'Digital Transformation',
        'IT Infrastructure',
        'Consulting',
        'Other'
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
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
    if (isSubmitted) {
        return (<motion.div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6"/>
          <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            Send Another Message
          </Button>
        </div>
      </motion.div>);
    }
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-7xl mx-auto text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={itemVariants}>
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Touch
            </span>
          </motion.h1>
          <motion.p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
            Ready to transform your business? Let's discuss how our technology solutions can drive your success.
          </motion.p>
        </motion.div>
      </section>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const EnhancedContact: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedContact</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedContact;