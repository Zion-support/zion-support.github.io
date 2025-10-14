

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async;
import { PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon'
} from '@heroicons/react/24/outline;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({'
    name: '','
    email: '','
    company: '','
    phone: '','
    service: '','
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const contactInfo = [
    {
      icon: PhoneIcon,'
          title: 'Phone','
      details: '+1-302-464-0950','
          description: 'Available 24/7'
  }
    },
    {
      icon: EnvelopeIcon,'
          title: 'Email','
      details: 'kleber@ziontechgroup.com','
          description: 'Quick response guaranteed'
  }
    },
    {
      icon: MapPinIcon,'
          title: 'Address','
      details: '364 E Main St STE 1008','
          description: 'Middletown, DE 19709'
  }
    },
    {
      icon: ClockIcon,'
          title: 'Business Hours','
      details: 'Monday - Friday: 9:00 AM - 6:00 PM','
          description: 'Weekend support available'
  }
    }
  };

  const services = ['
    'AI Solutions','
    'Cybersecurity','
    'Cloud Infrastructure','
    'Micro SaaS Solutions','
    '5G Technology','
    'IT Services','
    'Digital Transformation','
    'Consulting'
  ];
  return (
    
    <div>
      <Helmet />
        <title>Contact Us - Zion Tech Group</title>'
        <meta />
        <meta />
      </Helmet>
      {/* Hero Section */}
      <section>
        <div>
    <div />
  </div>
  <div>
    <div />
            <h1>Get In Touch
            </h1></h1>
            <p />
              Ready to Transform Your Business?
            </p>
            <p />'
              Let's discuss how our technology solutions can help you achieve your business goals. '
              We're here to answer your questions and provide expert guidance.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section>
        <div>
    <div />
            {/* Contact Form */}
            <div>
    <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div>
    <div />
                    <CheckIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>'
                  <p className="text-gray-300 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({'
                        name: '','
                        email: '','
                        company: '','
                        phone: '','
                        service: '','
                        message: ''
                      });
                    }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover: 'from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Send Another Message;
                  </button>
                </div>
              ) : (
                <form />
                  <div>
    <div />
                      <label />
                        Full Name *
                      </label>
                      <input />
                    </div>
                    
                    <div />
                      <label />
                        Email Address *
                      </label>
                      <input />
                    </div>
  </div>
  <div>
    <div />
                      <label />
                        Company
                      </label>
                      <input />
                    </div>
                    
                    <div />
                      <label />
                        Phone Number
                      </label>
                      <input />
                    </div>
  </div>
  <div />
                    <label />
                      Service Interest
                    </label>
                    <select />
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div />
                    <label />
                      Message *
                    </label>
                    <textarea />
                  </div>
                  <button />'
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRightIcon className="w-5 h-5">}
                  </button>
                </form>
              )}
            </div>
            {/* Contact Information */}
            <div>
    <div />
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p />'
                  Get in touch with us through any of the following methods. We're here to help 
                  you find the right technology solutions for your business.
                </p>
              </div>
              
              <div />
                {contactInfo.map((info, index) => (
                  <div>
    <div />
                      <info />
                    </div>
                    <div />
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-300 text-lg">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
    <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul />
                  <li />
                    <CheckIcon />
                    24/7 Expert Support
                  </li>
                  <li />
                    <CheckIcon />
                    Cutting-edge Technology
                  </li>
                  <li />
                    <CheckIcon />
                    Proven Track Record
                  </li>
                  <li />
                    <CheckIcon />
                    Custom Solutions
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ContactPage;