
  ];
  const validateForm = (): boolean => {}
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {'
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {'
      newErrors.name = 'Name must be at least 2 characters long'
    }

    if (!formData.email.trim()) {'
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {'
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) {'
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {'
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {'
      newErrors.message = 'Message must be less than 1000 characters'
    setErrors(newErrors);

    return Object && Object.keys(newErrors).length === 0
};

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!validateForm()) {;
'
      showError('Validation ErrorPlease fix the errors in the form');
      return;
    }
    setIsSubmitting(true);
      });
      setErrors({});
    } catch (error) {;'
      console && console.error('Error submitting form:', error);'
      showError('Submission FailedThere was an error sending your message. Please try again.');
    } finally {;
      setIsSubmitting(false);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
      setSelectedService('');
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  if (isSubmitted) {
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    return (
      <motion&& motion.div;
        initial={{ opacity: 0, scale: 0 && 0.9 }}
        animate={{ opacity: 1, scale: 1 }}"
        className="text-center py-12">;"
        <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">;"
          <CheckCircle className="w-10 h-10 text-green-400" />;
        </div>;"
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>;"
        <p className="text-white/70 mb-6">;'
          Thank you for reaching out. We'll get back to you within 24 hours.;
        </p>;
        <button;
          onClick={() => setIsSubmitted(false)}"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105";
        >;
          Send Another Message;
        </button>;
      </div>;
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;ve received your message and will get back to you within
              24 hours. Our team is excited to discuss your project and explore
              how we can help bring your vision to life.''
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What happens next?
              </h3>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Response within 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  <span>Schedule consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-green-500" />
                  <span>Project planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    );
  }
  return ("
    <div className="max-w-4xl mx-auto">;"
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
        {/* Contact Information */}`
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}"
                  placeholder="Enter your full name";
                />;
                {errors && errors.name && (;
                  <motion&& motion.p;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}"
                    className="mt-2 text-sm text-red-400 flex items-center gap-2">;"
                    <AlertCircle className="w-4 h-4" />;
                    {errors && errors.name}
                  </motion && motion.p>;
                )}
                  Email Address *"
                ">;
                  Email Address *;
                </label>;
                <input"
                  type="email""
                  id="email""
                  name="email"
                  value={formData && formData.email}
                  onChange={handleInputChange}'
                  onBlur={() => handleInputBlur('email')}`
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}"
                  placeholder="Enter your email address";
                />;
                {errors && errors.email && (;
                  <motion&& motion.p;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}"
                    className="mt-2 text-sm text-red-400 flex items-center gap-2">;"
                    <AlertCircle className="w-4 h-4" />;
                    {errors && errors.email}
                  </motion && motion.p>;
                )}
                  Company"
                ">;
                  Company;
                </label>;
                <input"
                  type="text""
                  id="company""
                  name="company"
                  value={formData && formData.company}
                  onChange={handleInputChange}"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300""
                  placeholder="Enter your company name"
                  Service Interest"
                ">;
                  Service Interest;
                </label>;
                <select"
                  id="service""
                  name="service"
                  value={formData && formData.service}
                  onChange={handleInputChange}"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300">;"
                  <option value="">Select a service</option>;
                  {services && services.map((service) => (;"
                    <option key={service} value={service} className="bg-slate-800 text-white">;
                      {service}
                    </option>;
                  ))}
                Message *"
              ">;
                Message *;
              </label>;
              <textarea"
                id="message""
                name="message"
                rows={5}
                value={formData && formData.message}
                onChange={handleInputChange}'
                onBlur={() => handleInputBlur('message')}`
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}"
                placeholder="Tell us about your project and requirements...";
              />;
              {errors && errors.message && (;
                <motion&& motion.p;
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}"
                  className="mt-2 text-sm text-red-400 flex items-center gap-2">;"
                  <AlertCircle className="w-4 h-4" />;
                  {errors && errors.message}
                </motion && motion.p>;
              )}
            <button"
              type="submit"
              disabled={isSubmitting}`
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${}
                isSubmitting'
                  ? 'bg-gray-600 cursor-not-allowed''
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'`
              } flex items-center justify-center gap-3`}>;
              {isSubmitting ? (;
                <>;"
                  <Loader2 className="w-5 h-5 animate-spin" />;
                  Sending Message...;
                </>;
              ) : (;
                <>;"
                  <Send className="w-5 h-5" />;
                  Send Message;
                </>;
              )}
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FormData, FormErrors } from '../types';
import { useToast } from './ui/Toast';
const EnhancedContactForm: React.FC;

