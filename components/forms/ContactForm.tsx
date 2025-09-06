<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

=======
=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


'use client';
'use client';
'use client';
;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {;
  Mail,;
  Phone,;
  MapPin,;
  Send,;
  CheckCircle,;
  AlertCircle,;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
'use client';
import React, { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD

=======
  Mail
  Phone
  MapPin
  Send
  CheckCircle
  AlertCircle;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  Mail,
  Phone,
  MapPin,
  Send,
<<<<<<< HEAD
=======
  CheckCircle,
<<<<<<< HEAD
<<<<<<< HEAD
  AlertCircle,
  CheckCircle,
  AlertCircle,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
=======
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '',;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  AlertCircle,;
} from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
message: '',
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData
      [e.target.name]: e.target.value
    });  };  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      ...formData;
      [e && e.target.name]: e && e.target.value;
    })
};
    // Simulate API call;
    try {;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        message: '',;
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
message: '',
origin/cursor/automate-test-improve-and-merge-code-2533
      });
    } catch (error) {;
      setSubmitStatus('error');
<<<<<<< HEAD
<<<<<<< HEAD
    } finally {;
      setIsSubmitting(false);    }
<<<<<<< HEAD

        message: '',
      });
    } catch (error) {
      setSubmitStatus ('error');
    } finally {
      setIsSubmitting (false);    }
  }
  const services = [    } catch (error) {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
      setIsSubmitting(false)
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    } finally {
      setIsSubmitting(false);
origin/cursor/automate-test-improve-and-merge-code-2533
    }
=======
  }
  const services = [
'AI Development',
    'Cloud Architecture',
    'Digital Transformation',
    'IoT Platforms',
    'Blockchain Solutions',
    'Data Analytics',
    'Other',
  ];

  const contactInfo = [;
    {;
      icon: Mail,;
      title: 'Email Us',;
      content: 'contact@ziontechgroup && ziontechgroup.com',;
      href: 'mailto:contact@ziontechgroup && ziontechgroup.com',;
    },    {;
      icon: Phone,;
      title: 'Call Us',;
      content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup && ziontechgroup.com'
};
    {;
      icon: Phone,;
      title: 'Call Us',;
      content: '+1 (555) 123-4567',;
      href: 'tel:+15551234567',;
    },    {;
      icon: MapPin,;
      title: 'Visit Us',;
      content: '123 Tech Street, Innovation City, IC 12345',;
      href: '#',;
    },;

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>
      {/* Background Elements */}

      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
      </div>;

      <div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">;

  ];
;
  const contact_info = [;
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Mail
      title: 'Email Us'
      content: 'contact@ziontechgroup.com'
      href: 'mailto:contact@ziontechgroup.com'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      icon: Mail,
      title: 'Email Us',
      content: 'contact@ziontechgroup.com',
href: 'mailto:contact@ziontechgroup.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City, IC 12345',
href: '#',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>

      <div className='relative container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
className='text-center mb-16'
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Let&apos;s Start a
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Conversation
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Ready to transform your business? Get in touch with our team of
            experts to discuss how we can help you achieve your technology
            goals.
          </p>
        </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Contact Information */}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Let&apos,s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss
            how we can help you achieve your technology goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
origin/cursor/automate-test-improve-and-merge-code-2533
          {/* Contact Information */}

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <motion.div
          <motion&& motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <div className='space-y-6'>              {contactInfo.map((info, index) => (              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you navigate the complex world of technology and find
                the perfect solutions for your business needs. Reach out to us today.
            </div>

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Our team is here to help you navigate the complex world of;
                technology and find the perfect solutions for your business;
                needs. Reach out to us today.              </p>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD


            {/* Contact Details */}
            <div className='space-y-6'>            <div className="space-y-6">;
              {contactInfo && contactInfo.map((info, index) => (;
                <motion&& motion.a
                  key={info && info.title}
                  href={info && info.href}

=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Get in Touch
              </h3>
              <p className='text-gray-300 leading-relaxed mb-8'>
                Our team is here to help you navigate the complex world of
                technology and find the perfect solutions for your business
                needs. Reach out to us today.
              </p>
            </div>
            {/* Contact Details */}
<div className='space-y-6'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>                      {info.content}                >

                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

<<<<<<< HEAD
            {/* Additional Info */}
            <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
                  className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>;
                    <info && info.icon className='w-6 h-6 text-white' />;
                  </div>;
                  <div>;
                    <h4 className='text-lg font-semibold text-white mb-1'>;
                      {info && info.title}
                    </h4>;
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>                      {info && info.content}                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">;
                    <info && info.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="text-lg font-semibold text-white mb-1">{info && info.title}</h4>;
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">;
                      {info && info.content}
                    </p>;
                  </div>;
                </motion && motion.a>;
              ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Additional Info */}
            <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6'>;
              <h4 className='text-lg font-semibold text-white mb-3'>;
                Why Choose Zion Tech?;
              </h4>;
              <ul className='space-y-2 text-gray-300'>            >;
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>;
              <ul className="space-y-2 text-gray-300">;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>Expert team with 10+ years experience</span>;
                </li>;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>Proven track record of successful projects</span>;
                </li>;
                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>24/7 support and maintenance</span>;
                </li>;
                <li className='flex items-center space-x-2'>;
                  <CheckCircle className='w-5 h-5 text-green-400' />;
                  <span>Expert team with 10+ years experience</span>;
                </li>;
                <li className='flex items-center space-x-2'>;
                  <CheckCircle className='w-5 h-5 text-green-400' />;
                  <span>Proven track record of successful projects</span>;
                </li>;
                <li className='flex items-center space-x-2'>;
                  <CheckCircle className='w-5 h-5 text-green-400' />;
                  <span>24/7 support and maintenance</span>;
                </li>;
                <li className='flex items-center space-x-2'>;
                  <CheckCircle className='w-5 h-5 text-green-400' />                  <span>Competitive pricing and flexible solutions</span>                <li className="flex items-center space-x-2">;
                  <CheckCircle className="w-5 h-5 text-green-400" />;
                  <span>Competitive pricing and flexible solutions</span>;
                </li>;
              </ul>;
            </motion && motion.div>;
          </motion && motion.div>;

<<<<<<< HEAD
<<<<<<< HEAD
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support and maintenance</span>
                </li>
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6'
            >
              <h4 className='text-lg font-semibold text-white mb-3'>
                Why Choose Zion Tech?
              </h4>
              <ul className='space-y-2 text-gray-300'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className='flex items-center space-x-2'>
<<<<<<< HEAD
                  <CheckCircle className='w-5 h-5 text-green-400' />                  <span>Competitive pricing and flexible solutions</span>                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
=======
                  <CheckCircle className='w-5 h-5 text-green-400' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Contact Form */}
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          {/* Contact Form */}
          <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
<<<<<<< HEAD

=======
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='text-center py-12'
              >
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Message Sent Successfully!
                </h3>
                <p className='text-gray-300 mb-6'>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2" htmlFor="input-
                      Full Name *
                    ">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
              <form onSubmit={handleSubmit} className='space-y-6'>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
<form onSubmit={handleSubmit} className='space-y-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-white font-medium mb-2'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                    <input
                      type='email'
                      id='email'
                      name='email'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
<<<<<<< HEAD


                      placeholder='Enter your email'                    />;
                  </div>;
                </div>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      placeholder="Enter your email";
                    />;
                  </div>;
                </div>;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your email'
                    />
                  </div>
                </div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='company'
                      className='block text-white font-medium mb-2'
                    >
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter company name'                    />
                  </div>
                  <div>
origin/cursor/automate-test-improve-and-merge-code-2533
                    <label
                      htmlFor='phone'
                      className='block text-white font-medium mb-2'>;
                      Phone Number;
                    </label>;
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData && formData.phone}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
<<<<<<< HEAD
<<<<<<< HEAD
                      placeholder="Enter phone number";
                    />;
                  </div>;
                </div>;
                  <select
                    id="service"
                    name="service"
                    value={formData && formData.service}
                    onChange={handleChange}
<<<<<<< HEAD


                        {service}
                      </option>;
                    ))}

=======
                  </select>;
                </div>;

                <div>;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <label
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      placeholder='Enter phone number'
                    />
                  </div>
                </div>
                <div>
<label
                    htmlFor='service'
                    className='block text-white font-medium mb-2'
                  >
                    Service of Interest
                  </label>
                  <select
                    id='service'
                    name='service'
                    value={formData.service}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'
                  >
                    <option value=''>Select a service</option>
                    {services.map(service => (
                      <option
                        key={service}
                        value={service}
                        className='bg-gray-800 text-white'
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
<label
origin/cursor/automate-test-improve-and-merge-code-2533
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea
                    id='message'
<<<<<<< HEAD
<<<<<<< HEAD
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
<<<<<<< HEAD
<<<<<<< HEAD
                    placeholder='Tell us about your project or inquiry...'                  />                  <label htmlFor="message" className="block text-white font-medium mb-2" htmlFor="input-
                    Message *
                  ">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    placeholder='Tell us about your project or inquiry...'                  />

                    Message *
                  ">;
                    Message *;
                  </label>;
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."

=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                    name='message'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  />
                </div>
                {submitStatus === 'error' && (
                  <motion.div
                  />;
                </div>;

                {submitStatus === 'error' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
className='flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4'
                  >
                    <AlertCircle className='w-5 h-5' />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
                <button
type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
<Send className='w-5 h-5' />
                      <span>Send Message</span>
                    </>
origin/cursor/automate-test-improve-and-merge-code-2533
                  )}
                </button>;
              </form>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default ContactForm;
                <div>;
                  <label;
                    html_for='service';
                    className='block text - white font - medium mb - 2';
                  >;
                    Service of Interest;
                  </label>;
                  <select;
                    id='service';
                    name='service';
                    value={form_data.service}
                    on_change={handle_change}
                    className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white focus:outline - none focus:border - blue - 500 transition - colors';
                  >;
                    <option value=''>Select a service</option>;
                    {services.map (service => (
                      <option;
                        key={service}
                        value={service}
                        className='bg - gray - 800 text - white';
                      >                        {service}                    Service of Interest;
                  </label>;
                  <select;
                    id="service";
                    name="service";
                    value={form_data.service}
                    on_change={handle_change}
                    className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white focus:outline - none focus:border - blue-500 transition-colors";
                  >;
                    <option value="">Select a service</option>;
                    {services.map ((service) => (
                      <option key={service} value={service} className="bg - gray-800 text-white">;
                        {service}
                      </option>))}
                  </select>;
                </div>;
                <div>;
                  <label;
                    html_for='message';
                    className='block text - white font - medium mb - 2';
                  >;
                    Message *;
                  </label>;
                  <textarea;
                    id='message';
                    name='message'                    value={form_data.message}
                    on_change={handle_change}
                    required;
                    rows={5}
                    className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors resize - none';
                    placeholder='Tell us about your project or inquiry...'                  />                  <label html_for="message" className="block text - white font-medium mb-2" html_for="input-;
                    Message *;
                  ">;
                    Message *;
                  </label>;
                  <textarea;
                    id="message";
                    name="message";
                    on_change={handle_change}
                    required;
                    rows={5}
                    className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors resize - none';
                    placeholder='Tell us about your project or inquiry...'                    className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition-colors resize-none";
                    placeholder="Tell us about your project or inquiry...";
                  />;
                </div>;
                {submit_status === 'error' && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    className='flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded - lg p - 4';
                  >;
                    <AlertCircle className='w - 5 h - 5' />                    <span > Something went wrong. Please try again.</span>                    className="flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded-lg p-4";
                  >;
                    <AlertCircle className="w-5 h-5" />;
                    <span > Something went wrong. Please try again.</span>;
                  </motion.div>)}
                <button;
                  type='submit';
                  disabled={is_submitting}
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify - center space - x-2';
                >;
                  {is_submitting ? (
                    <>;
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded - full animate - spin' />                      <span > Sending...</span>;
                    </>) : (
                    <>;
                      <Send className='w - 5 h - 5' />                      <span > Send Message</span>                  disabled={is_submitting}
                  className="w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify-center space-x-2";
                >;
                  {is_submitting ? (
                    <>;
                      <div className="w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded-full animate-spin" />;
                      <span > Sending...</span>;
                    </>) : (
                    <>;
                      <Send className='w - 5 h - 5' />                      <Send className="w-5 h-5" />;
                      <span > Send Message</span>;
                    </>)}
                </button>;
              </form>)}
          </motion.div>;
        </div>;
      </div>;
    </section>);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
export default ContactForm;
<<<<<<< HEAD
=======
=======
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
export default ContactForm;  )
}
export default ContactForm;

export default ContactForm;
<<<<<<< HEAD
<<<<<<< HEAD
export default ContactForm;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
          </motion.div>
        </div>
      </div>
    </section>
);
};

export default ContactForm;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
