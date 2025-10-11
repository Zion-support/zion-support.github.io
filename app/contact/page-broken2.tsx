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

  CheckCircle;
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
  })
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = const handleInputChange = const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
;
    const { name, value } = e.target;
    }));
  }, []);
<<<<<<< HEAD
const handleSubmit = async (e: React.FormEvent) => {,
=======
const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/main
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try 
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
  }
const services = const services = const services = [
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
const contactInfo = const contactInfo = const contactInfo = [
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
<<<<<<< HEAD
      description: 'Eastern Time',}}
  ]
return(<>)
      <Helmet />
=======
      description: 'Eastern Time'
  };
    };
  ];
<<<<<<< HEAD
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
=======
return (
    <>
      <Helmet>
>>>>>>> origin/main
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div></div></div>
        <div className="container mx-auto px-4"></div></div></div>
          {/* Header */}
          <div className="text-center mb-16"></div></div></div>
            <h1>
              Get in;
              </h1></h1><span>
                {', '}Touch;
              </span></span></span>
            </h1>
            <p>Ready to transform your business? Let's discuss your project and explore;</p>
              how our AI and IT solutions can help you achieve your goals.
            </p></p></p>
          </div>
        </section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div></div></div>
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div></div></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2></h2></h2>
              {
    submitStatus === 'success' && (;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div></div></div>
                  <CheckCircle>
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span></span></span>
                </div>)
  })
              )},
    {
    submitStatus === 'error' && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div></div></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span></span></span>
                </div>)
  })
              )}
<form>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div></div></div>
                  <div />
                    </div></div><label>
                      Full Name *
                    </label>
                    <div className="relative"></div></div></div>
                      <User>
                      <input />
                  </div>
                  <div />
                    </div></div><label>
                      Email Address *
                    </label>
                    <div className="relative"></div></div></div>
                      <Mail>
                      <input />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div></div>
                  <div />
                    </div></div><label>
                      Company;
                    </label>
                    <div className="relative"></div></div></div>
                      <Building>
                      <input />
                  </div>
                  <div />
                    </div></div><label>
                      Phone Number;
                    </label>
                    <div className="relative"></div></div></div>
                      <Phone>
                      <input />
                  </div>
                </div>
                <div />
                  </div></div><label>
                    Service Interest,
                  </label>
                  <div className="relative"></div></div></div>
                    <Globe>
                    <select>
                      <option value="">Select a service</option>
                      {services.map((service) => (} <option>

                          {service})
                        </option>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      ))}

                    </select>
                  </div>
                </div>
                </div>
                <button></button>
                  {
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
                  We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.
                </p></p></p>
              </div>
              {/* Contact Information */}
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p></p></p>
                </div>
                        {info.description}

                      </p></p></p>
                    </div>
                  </div>
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
