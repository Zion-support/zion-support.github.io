'use client';
import React from 'react';
'use client';
import React, {useState, useCallback}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Phone,}
  Mail,

  MapPin,

  Clock,

  Send,

  CheckCircle;}} from 'lucide-react'
const ContactPage: React.FC = () => {,
    const [formData, setFormData] = useState({)
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',}})
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,}const {name, value}}= e.target;
    setFormData(prev => ({)
    ...prev,
      [name]: value;}}));
  }, []);
const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',}})
    } catch (error) {setSubmitStatus('error')}} finally {setIsSubmitting(false)}}}
  }
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
  ]
const contactInfo = [
    {icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST',},
    {icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',},
    {icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office',},
    {icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time',}}
  ]
return(<>)
      <Helmet />
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4"></div>
          {/* Header */} <div className="text-center mb-16"></div>
            <h1>Get in;</h1>
              <span>{' '</span>}Touch;
              </span>
            </h1>
            <p>Ready to transform your business? Let's discuss your project and explore;</p>
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<div className="grid grid-cols-1 lg: grid-cols-2 gap-12"></div>,
            {/* Contact Form */} <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              {submitStatus === 'success' && (;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>})}
{submitStatus === 'error' && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>})}
<form>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
                  <div />
                    <label>
                      Full Name *
                    </label>
                    <div className="relative"></div>
                      <User>
                      <input />
                  </div>
                  <div />
                    <label>
                      Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail>
                      <input />
                  </div>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
                  <div />
                    <label>
                      Company;
                    </label>
                    <div className="relative"></div>
                      <Building>
                      <input />
                  </div>
                  <div />
                    <label>
                      Phone Number;
                    </label>
                    <div className="relative"></div>
                      <Phone>
                      <input />
                  </div>
                </div>
                <div />
                  <label>
                    Service Interest,
                  </label>
                  <div className="relative"></div>
                    <Globe>
                    <select>
                      <option value="">Select a service</option>
                      {services.map((service) => (} <option>

                          {service} </option>
                      ))}

                    </select>
                  </div>
                </div>
                <div />
                  <label>
                    Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle>
                    <textarea />
                </div>
                <button>{isSubmitting ? (;</button>
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (;
                    <>
                      <Send>
                      <span>Send Message</span>
                    </>})}
                </button>
              </form>
            </div>
            {/* Contact Information */} <div className="space-y-8"></div>
              <div />
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p>We're here to help! Reach out to us through any of these channels;</p>
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */} <div className="space-y-8"></div>
                <div />
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p>We're here to help you transform your business with cutting-edge AI and technology solutions.</p>
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Phone />
                    <div />
<h3>

                        {info.title} </h3>
                      <p>{info.details</p>} </p>
                      <p>{info.description</p>} </p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Mail />
                    <div />
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <MapPin />
                    <div />
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Clock />
                    <div />
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
</div>
  ),
};

export default ContactPage;

