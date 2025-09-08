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

'use client';
'use client';
;
import React, { useState } from 'react';
import { motion } from 'framer-motion';


import {;
  Mail,;
  Phone,;
  MapPin,;
  Send,;
  CheckCircle,;
  AlertCircle,;
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle;
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
  CheckCircle,
  AlertCircle,
  CheckCircle,

const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '',;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');

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
      setSubmitStatus ('error');
    } finally {

  };

  const services = [    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false),;
    }
  }
      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
      </div>;

      <div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">;

  ];
;
  const contact_info = [;
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City, IC 12345',
      href: '#'
    }
  ],


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

          className="text-center mb-16"
        >
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
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
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your full name'                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-white font-medium mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your email'                    />
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

            {/* Contact Details */}
            <div className='space - y-6'>              {contact_info.map ((info, index) => (              <h3 className="text - 2xl font - bold text - white mb - 6">Get in Touch</h3>;
              <p className="text - gray - 300 leading - relaxed mb - 8">;
                Our team is here to help you navigate the complex world of technology and find;
                the perfect solutions for your business needs. Reach out to us today.;
            </div>;
            {/* Contact Details */}
            <div className='space - y-6'>            <div className="space - y-6">;
              {contact_info.map ((info, index) => (
                <motion.a;
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, coordinate_x: -20 }}
                  whileInView={{ opacity: 1, coordinate_x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items - start space - x-4 p - 4 rounded - xl bg - white / 5 border border - white / 10 hover:border - blue - 500 / 30 transition - all duration - 300 group';
                >;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - xl flex items - center justify - center flex - shrink - 0 group - hover:scale - 110 transition - transform duration - 300'>;
                    <info.icon className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div>;
                    <h4 className='text - lg font - semibold text - white mb - 1'>;
                      {info.title}
                    </h4>;
                    <p className='text - gray - 300 group - hover:text - blue - 400 transition - colors duration - 300'>                      {info.content}                >;
                  <div className="w - 12 h - 12 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - xl flex items - center justify - center flex - shrink - 0 group - hover:scale - 110 transition - transform duration - 300">;
                    <info.icon className="w - 6 h - 6 text - white" />;
                  </div>;
                  <div>;
                    <h4 className="text - lg font - semibold text - white mb - 1">{info.title}</h4>;
                    <p className="text - gray - 300 group - hover:text - blue - 400 transition - colors duration - 300">;
                      {info.content}
                    </p>;
                  </div>;
                </motion.a>))}
            </div>;
            {/* Additional Info */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className='bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border border - blue - 500 / 30 rounded - xl p - 6';
            >;
              <h4 className='text - lg font - semibold text - white mb - 3'>;
                Why Choose Zion Tech?;
              </h4>;
              <ul className='space - y-2 text - gray - 300'>            >;
              <h4 className="text - lg font - semibold text - white mb - 3">Why Choose Zion Tech?</h4>;
              <ul className="space - y-2 text - gray - 300">;
                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > Expert team with 10+ years experience</span>;
                </li>;
                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > Proven track record of successful projects</span>;
                </li>;
                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > 24 / 7 support and maintenance</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                  <span > Expert team with 10+ years experience</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                  <span > Proven track record of successful projects</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                  <span > 24 / 7 support and maintenance</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />                  <span > Competitive pricing and flexible solutions</span>                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > Competitive pricing and flexible solutions</span>;
                </li>;
              </ul>;
            </motion.div>;
          </motion.div>;
          {/* Contact Form */}
          <motion.div;
            initial={{ opacity: 0, coordinate_x: 30 }}
            whileInView={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8'          >            className="bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8";
          >;
            {submit_status === 'success' ? (
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text - center py - 12';
              >;
                <CheckCircle className='w - 20 h - 20 text - green - 400 mx - auto mb - 6' />;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  Message Sent Successfully!;
                </h3>;
                <p className='text - gray - 300 mb - 6'>;
                  Thank you for reaching out. Our team will get back to you;
                  within 24 hours.;
                </p>;
                <button;
                  on_click={() => setSubmitStatus ('idle')}
                  className='bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300'                >              >;
                <CheckCircle className="w - 20 h - 20 text - green - 400 mx - auto mb - 6" />;
                <h3 className="text - 2xl font - bold text - white mb - 4">Message Sent Successfully!</h3>;
                <p className="text - gray - 300 mb - 6">;
                  Thank you for reaching out. Our team will get back to you within 24 hours.;
                </p>;
                <button;
                  on_click={() => setSubmitStatus ('idle')}
                  className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300";
                >;
                  Send Another Message;
                </button>;
              </motion.div>) : (
              <form on_submit={handle_submit} className='space - y-6'>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
                  <div>;
                    <label;
                      html_for='name';
                      className='block text - white font - medium mb - 2';
                    >;
                      Full Name *;
                    </label>;
                    <input;
                      type='text';
                      id='name';
                      name='name';
                      value={form_data.name}
                      on_change={handle_change}
                      required;
                      className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors';
                      placeholder='Enter your full name'                    />;
                  </div>;
                  <div>;
                    <label;
                      html_for='email';
                      className='block text - white font - medium mb - 2';
                    >;
                      Email Address *;
                    </label>;
                    <input;
                      type='email';
                      id='email';
                      name='email';
                      value={form_data.email}
                      on_change={handle_change}
                      required;
                      className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors';
                      placeholder='Enter your email'                    />;
                  </div>;
                </div>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>                      className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors";

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
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea'
                    id='message''
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}'
                    className=w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'


                  />
                </div>'
                {submitStatus === 'error' && (
                  <motion.div
                  />;
                </div>;
                {submitStatus === 'error' && (<motion.div;
                  />;
                </div>;{submitStatus === 'error' && (<motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
className='flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4'

                  />;
                </div>;
                {submitStatus === 'error' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}


                )}
                <button

                  type="submit"
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />'
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>

                      <Send className='w-5 h-5' />                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
</button>;
<Send className='w-5 h-5' />'
                      <span>Send Message</span>
                    </>
                  
}
                </button>;
              </form>;
            )}


};

export default ContactForm;  );
};

export default ContactForm;


          </motion.div>
        </div>
      </div>
    </section>

export default ContactForm;
                <div>;
                  <label;
                    html_for='service';
                    className='block text - white font - medium mb - 2';
                  >;
                    Service of Interest;
                  </label>;

