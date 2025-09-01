import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Clock, 
  Globe, 
  X,
  Copy,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface EnhancedContactIntegrationProps {

  onClose: () => void;
  serviceTitle?: string;
}

export const EnhancedContactIntegration: React.FC<EnhancedContactIntegrationProps> = ({

  onClose, 
  serviceTitle 
}) => {

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'contact' | 'schedule' | 'support'>('contact');

  const contactInfo = {

    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    responseTime: 'Within 2 hours during business hours'
  };

  const copyToClipboard = async (text: string, field: string) => {

    try {

      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {

      // // // console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {

      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: contactInfo.phone,
      action: () => window.open(`tel:${contactInfo.phone}`, '_self'),
      color: 'from-green-500 to-emerald-500'
    },
    {

      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      value: contactInfo.email,
      action: () => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${serviceTitle || 'Zion Tech Group Services'}`, '_self'),
      color: 'from-blue-500 to-cyan-500'
    },
    {

      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant support',
      value: 'Available on website',
      action: () => window.open(contactInfo.website, '_blank'),
      color: 'from-purple-500 to-pink-500'
    },
    {

      icon: Calendar,
      title: 'Schedule Demo',
      description: 'Book a personalized demo',
      value: 'Book online',
      action: () => window.open(`${contactInfo.website}/demo`, '_blank'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportTiers = [
    {

      tier: 'Basic Support',
      description: 'Email support with 24-hour response',
      included: ['Email support', 'Documentation access', 'Community forum'],
      price: 'Included'
    },
    {

      tier: 'Priority Support',
      description: 'Enhanced support with faster response times',
      included: ['Phone support', '4-hour response', 'Dedicated support team', 'Priority ticket handling'],
      price: '$99/month'
    },
    {

      tier: 'Enterprise Support',
      description: 'Dedicated support with SLA guarantees',
      included: ['24/7 phone support', '1-hour response', 'Dedicated account manager', 'Custom SLA', 'On-site support'],
      price: '$299/month'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div className="bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-white">Contact Zion Tech Group</h2>
            <p className="text-slate-400">
              {serviceTitle ? `Get in touch about ${serviceTitle}` : 'Multiple ways to reach our team'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-slate-400" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-700">
          {[
            { key: 'contact', label: 'Contact Methods', icon: Phone },
            { key: 'schedule', label: 'Schedule & Availability', icon: Calendar },
            { key: 'support', label: 'Support Tiers', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 p-4 flex items-center justify-center gap-2 transition-colors ${

                activeTab === tab.key
                  ? 'bg-cyan-500/10 border-b-2 border-cyan-500 text-cyan-400'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeTab === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors cursor-pointer"
                      onClick={method.action}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{method.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{method.value}</span>
                        <ExternalLink className="h-4 w-4 text-slate-400" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Contact Info */}
                <div className="bg-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">{contactInfo.phone}</p>
                        <p className="text-slate-400 text-sm">Main phone line</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                        className="ml-auto p-2 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        {copiedField === 'phone' ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">{contactInfo.email}</p>
                        <p className="text-slate-400 text-sm">Primary email</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(contactInfo.email, 'email')}
                        className="ml-auto p-2 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        {copiedField === 'email' ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">{contactInfo.website}</p>
                        <p className="text-slate-400 text-sm">Company website</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(contactInfo.website, 'website')}
                        className="ml-auto p-2 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        {copiedField === 'website' ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Middletown, DE</p>
                        <p className="text-slate-400 text-sm">Headquarters</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(contactInfo.address, 'address')}
                        className="ml-auto p-2 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        {copiedField === 'address' ? (
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'schedule' && (
              <motion.div
                key="schedule"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Business Hours */}
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Monday - Friday</span>
                        <span className="text-white font-medium">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Saturday</span>
                        <span className="text-white font-medium">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Sunday</span>
                        <span className="text-white font-medium">Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg">
                      <p className="text-cyan-400 text-sm">
                        <strong>Response Time:</strong> {contactInfo.responseTime}
                      </p>
                    </div>
                  </div>

                  {/* Scheduling Options */}
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-6 w-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">Schedule Options</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-medium mb-2">Free Consultation</h4>
                        <p className="text-slate-400 text-sm mb-3">30-minute discovery call to discuss your needs</p>
                        <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm transition-colors">
                          Book Free Call
                        </button>
                      </div>
                      
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-medium mb-2">Product Demo</h4>
                        <p className="text-slate-400 text-sm mb-3">60-minute personalized demo of our solutions</p>
                        <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm transition-colors">
                          Schedule Demo
                        </button>
                      </div>
                      
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <h4 className="text-white font-medium mb-2">Technical Review</h4>
                        <p className="text-slate-400 text-sm mb-3">Deep dive into technical requirements</p>
                        <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm transition-colors">
                          Book Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'support' && (
              <motion.div
                key="support"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {supportTiers.map((tier, index) => (
                    <motion.div
                      key={tier.tier}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-slate-800 rounded-lg p-6 border-2 ${

                        tier.tier === 'Priority Support' 
                          ? 'border-cyan-500 bg-cyan-500/5' 
                          : 'border-slate-700'
                      }`}
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">{tier.tier}</h3>
                        <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                        <div className="text-3xl font-bold text-cyan-400">{tier.price}</div>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {tier.included.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                        Get Started
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 bg-slate-800/50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Ready to get started? Contact us today for a personalized consultation.
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};