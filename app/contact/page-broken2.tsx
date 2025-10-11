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

<<<<<<< HEAD
  CheckCircle;
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
<<<<<<< HEAD
    const [formData, setFormData] = useState()
=======
    const [formData, setFormData] = useState(
=======
  CheckCircle;}} from 'lucide-react'
const ContactPage: React.FC = () => {,
    const [formData, setFormData] = useState({)
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
<<<<<<< HEAD
    message: '')
  })
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  })
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = const handleInputChange = const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
;
    const { name, value } = e.target;
<<<<<<< HEAD
    setFormData()
=======
    setFormData(prev => ({
    ...prev,
      [name]: value;)
  })
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    }));
=======
    message: '',}})
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,}const {name, value}}= e.target;
    setFormData(prev => ({)
    ...prev,
      [name]: value;}}));
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  }, []);
<<<<<<< HEAD
const handleSubmit = async (e: React.FormEvent) => {,
=======
const handleSubmit = async (e: React.FormEvent) => {;
>>>>>>> origin/main
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
<<<<<<< HEAD
try 
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
<<<<<<< HEAD
      setFormData()
=======
      setFormData(
=======
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
<<<<<<< HEAD
        message: '')
  })
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
=======
        message: '',}})
    } catch (error) {setSubmitStatus('error')}} finally {setIsSubmitting(false)}}}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
<<<<<<< HEAD
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
=======
  ];];];
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
<<<<<<< HEAD
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div></div></div>
        <div className="container mx-auto px-4"></div></div></div>
          {/* Header */}
          <div className="text-center mb-16"></div></div></div>
            <h1>
              Get in;
              </h1></h1><span>
                {', '}Touch;
              </span></span></span>
=======
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4"></div>
          {/* Header */} <div className="text-center mb-16"></div>
            <h1>Get in;</h1>
              <span>{' '</span>}Touch;
              </span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            </h1>
            <p>Ready to transform your business? Let's discuss your project and explore;</p>
              how our AI and IT solutions can help you achieve your goals.
            </p></p></p>
          </div>
        </section>
<<<<<<< HEAD
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
=======
<div className="grid grid-cols-1 lg: grid-cols-2 gap-12"></div>,
            {/* Contact Form */} <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              {submitStatus === 'success' && (;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle />
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
<<<<<<< HEAD
                </div>})}
{submitStatus === 'error' && (;
=======
                </div>
  }
              )},
    {
    submitStatus === 'error' && (;
>>>>>>> origin/main
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>})}
<form>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
<<<<<<< HEAD
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div></div>
                  <div />
                    </div></div><label>
=======
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
                  <div />
                    <label>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                      Company;
                    </label>
                    <div className="relative"></div></div></div>
                      <Building>
                      <input />
                  </div>
                  <div />
<<<<<<< HEAD
                    </div></div><label>
=======
                    <label>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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

<<<<<<< HEAD
                          {service})
                        </option>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                          {service} </option>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                      ))}

                    </select>
                  </div>
                </div>
<<<<<<< HEAD
                <div / /></div>
                  <label></label>
                    Message *
                  </label>
                  <div className="relative" / /></div>
                    <MessageCircle></MessageCircle>
                    <textarea / /></textarea>
=======
                <div />
                  </div></div><label>
                    Message *
                  </label>
                  <div className="relative"></div></div></div>
                    <MessageCircle>
                    <textarea />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
<<<<<<< HEAD
                <button></button>
                  {
<<<<<<< HEAD
    isSubmitting ? ()
                  ) : ()
=======
    isSubmitting ? (;
                    </button></button><>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div></div></div>
                      <span>Sending...</span></span></span>)
                    </>)
                  ) : (;
                    <>
                      <Send>
                      <span>Send Message</span></span></span>
                    </>)
  })
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
<<<<<<< HEAD
            <div className="space-y-8" / /></div>
              <div / /></div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p></p>
=======
            <div className="space-y-8"></div></div></div>
              <div />
                </div></div><h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2></h2></h2>
                <p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  We're here to help! Reach out to us through any of these channels;
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                  and we'll get back to you as soon as possible.
                </p></p></p>
              </div>
<<<<<<< HEAD
              {/* Contact Information */}
<<<<<<< HEAD
              <div className="space-y-8" / /></div>
                <div / /></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p></p>
=======
              <div className="space-y-8"></div></div></div>
                <div />
                  </div></div><h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2></h2></h2>
                  <p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p></p></p>
                </div>
<<<<<<< HEAD
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
=======
                <div className="space-y-6"></div></div></div>
                  <div className="flex items-center"></div></div></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div></div></div>
                      <Phone />
                    <div />
</div></div><h3>

                        {info.title}
                      </h3></h3></h3>
                      <p>
                        {info.details}
                      </p></p></p>
                      <p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                        {info.description}

                      </p></p></p>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                    </div>
                  </div>
<<<<<<< HEAD
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
<<<<<<< HEAD
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
=======
                  <div className="flex items-center"></div></div></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4"></div></div></div>
                      <Mail />
                    <div />
                      </div></div><h3 className="text-lg font-semibold text-white">Email</h3></h3></h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p></p></p>
                    </div>
                  </div>
                  <div className="flex items-center"></div></div></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4"></div></div></div>
                      <MapPin />
                    <div />
                      </div></div><h3 className="text-lg font-semibold text-white">Address</h3></h3></h3>
                      <p className="text-gray-300">123 Tech Street</p></p><br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div></div></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4"></div></div></div>
                      <Clock />
                    <div />
                      </div></div><h3 className="text-lg font-semibold text-white">Business Hours</h3></h3></h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p></p><br />Sat: 10:00 AM - 4:00 PM</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
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
