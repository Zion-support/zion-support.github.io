=======


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

'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  Mail,
  Phone,
  MapPin,
  Send,

  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');

=======
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
const ContactForm: React.FC = () => {
  const [form_data, setFormData] = useState ({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

    });  };  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({

=======
;
  const [is_submitting, setIsSubmitting] = useState (false);
  const [submit_status, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');
;
  const handle_change = (
    e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >) =>: any {
    setFormData ({
      ...form_data,
      [e.target.name]: e.target.value,
    });  }  });
;
  const [is_submitting, setIsSubmitting] = useState (false);
  const [submit_status, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  const handle_change = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>: any {
    setFormData ({
      ...form_data;
      [e.target.name]: e.target.value;
    });
  }
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    setIsSubmitting (true);
;
    // Simulate API call;
    try {
      await new Promise (resolve => set_timeout (resolve, 2000));
      setSubmitStatus ('success');
      setFormData ({

        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',


  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    setFormData({;
=======
  CheckCircle,;
  AlertCircle,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

      ...formData;
      [e && e.target.name]: e && e.target.value;
    });
  };
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);
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

      });
    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);    }

        message: '',
      });
    } catch (error) {
      setSubmitStatus ('error');
    } finally {
      setIsSubmitting (false);    }
  }
;

  const services = [    } catch (error) {

    } finally {

  };

  const services = [    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false),;
    }

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

          {/* Contact Information */}

            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss
            how we can help you achieve your technology goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">


          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
            Let&apos;s Start a;
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>;
              Conversation;
            </span>;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
      href: 'mailto:contact@ziontechgroup.com',
    },    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123 - 4567',      href: 'mailto:contact@ziontechgroup.com';
    }
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123 - 4567',
      href: 'tel:+15551234567',
    },    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City, IC 12345',
      href: '#',
    },
  return (
    <section className='py - 20 bg - gradient - to - b from - black to - gray - 900 relative overflow - hidden'>;
      {/* Background Elements */}
      <div className='absolute inset - 0'>;
        <div className='absolute top - 0 left - 0 w - full h - full bg-[radial - gradient (circle_at_20%_80%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
        <div className='absolute top - 0 right - 0 w - full h - full bg-[radial - gradient (circle_at_80%_20%, rgba (147, 51, 234, 0.1), transparent_50%)]' />;
      </div>;
      <div className='relative container mx - auto px - 4'>        {/* Section Header */}      <div className="relative container mx - auto px - 4">;
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text - center mb - 16';
        >;
          <h2 className='text - 4xl md:text - 6xl font - bold text - white mb - 6'>;
            Let & apos;s Start a;
            <span className='block bg - gradient - to - r from - blue - 400 to - purple - 400 bg - clip - text text - transparent'>;
              Conversation;
            </span>;
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed'>;
            Ready to transform your business? Get in touch with our team of;
            experts to discuss how we can help you achieve your technology;
            goals.;
          </p>;


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          {/* Contact Information */}
          <motion&& motion.div
=======


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}

          {/* Contact Information */}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            viewport={{ once: true }}

            <div className='space-y-6'>              {contactInfo.map((info, index) => (              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you navigate the complex world of technology and find
                the perfect solutions for your business needs. Reach out to us today.
            </div>

                Our team is here to help you navigate the complex world of;
                technology and find the perfect solutions for your business;
                needs. Reach out to us today.              </p>;
            </div>;


            {/* Contact Details */}
            <div className='space-y-6'>            <div className="space-y-6">;
              {contactInfo && contactInfo.map((info, index) => (;
                <motion&& motion.a
                  key={info && info.title}
                  href={info && info.href}

=======
            <div className="space-y-6">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}

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
                      {info.content}
                    </p>
                  </div>
                </motion.a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}

            {/* Additional Info */}
            <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Additional Info */}
            <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}
              viewport={{ once: true }}

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
                  <CheckCircle className='w-5 h-5 text-green-400' />                  <span>Competitive pricing and flexible solutions</span>                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Contact Form */}
          <motion&& motion.div
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}
            viewport={{ once: true }}

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}

                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>


                      placeholder='Enter your email'                    />;
                  </div>;
                </div>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";

                      placeholder="Enter your email";
                    />;
                  </div>;
                </div>;


                    <label
                      htmlFor='company'
                      className='block text-white font-medium mb-2'>;
                      Company;
                    </label>;
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData && formData.company}
                      onChange={handleChange}
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'


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


                      placeholder="Enter phone number";
                    />;
                  </div>;
                </div>;


                  <label
                    htmlFor='service'
                    className='block text-white font-medium mb-2'>;
                    Service of Interest;
                  </label>;
                  <select
                    id='service'
                    name='service'
                    value={formData && formData.service}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'>;
                    <option value=''>Select a service</option>;
                    {services && services.map(service => (;
                      <option
                        key={service}
                        value={service}
                        className='bg-gray-800 text-white'>                        {service}                    Service of Interest;
                  </label>;

=======
                  <label htmlFor="service" className="block text-white font-medium mb-2" htmlFor="input-
                    Service of Interest
                  ">
                    Service of Interest
                  </label>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  <select
                    id="service"
                    name="service"
                    value={formData && formData.service}
                    onChange={handleChange}


                        {service}
                      </option>;
                    ))}

=======
                  </select>;
                </div>;

                <div>;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  <label
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea
                    id='message'
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'

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

                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}

                  />
                </div>
                {submitStatus === 'error' && (
                  <motion.div
                  )}
</button>;
              </form>;
            )}
          </motion.div>
        </div>
      </div>
    </section>

export default ContactForm;  )
}
export default ContactForm;
=======
  );

};


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
