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

  CheckCircle
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState()
  })
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
;
    const { name, value } = e.target;
    setFormData()
    }));
  }, []);
const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData()
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
  }
const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',

    'Cybersecurity',

    'DevOps',

    'Consulting',;
;
    'Other';
  ];
const contactInfo = [
    {
    icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST'
  },
    {
    icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours'
  },
    {
    icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office'
  },
    {
    icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time'
  };
    };
  ];
return ()
              )},
    {
    submitStatus === 'error' && ()
              )}
<form></form>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6" / /></div>
                  <div / /></div>
                    <label></label>
                      Full Name *
                    </label>
                    <div className="relative" / /></div>
                      <User></User>
                      <input / /></input>
                  </div>
                  <div / /></div>
                    <label></label>
                      Email Address *
                    </label>
                    <div className="relative" / /></div>
                      <Mail></Mail>
                      <input / /></input>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" / /></div>
                  <div / /></div>
                    <label></label>
                      Company
                    </label>
                    <div className="relative" / /></div>
                      <Building></Building>
                      <input / /></input>
                  </div>
                  <div / /></div>
                    <label></label>
                      Phone Number
                    </label>
                    <div className="relative" / /></div>
                      <Phone></Phone>
                      <input / /></input>
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Service Interest,
                  </label>
                  <div className="relative" / /></div>
                    <Globe></Globe>
                    <select></select>
                      <option value="">Select a service</option>
                      {
    services.map((service) => ()
                      ))}

                    </select>
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Message *
                  </label>
                  <div className="relative" / /></div>
                    <MessageCircle></MessageCircle>
                    <textarea / /></textarea>
                </div>
                <button></button>
                  {
    isSubmitting ? ()
                  ) : ()
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8" / /></div>
              <div / /></div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p></p>
                  We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8" / /></div>
                <div / /></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p></p>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6" / /></div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Phone / /></Phone>
                    <div / /></div>
<h3></h3>
                        {info.title}
                      </h3>
                      <p></p>
                        {info.details}
                      </p>
                      <p></p>
                        {info.description}

                      </p>
                    </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Mail / /></Mail>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <MapPin / /></MapPin>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Clock / /></Clock>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
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
