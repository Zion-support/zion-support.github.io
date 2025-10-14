

import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async
import { PhoneIcon,
  EnvelopeIcon,'
  MapPinIcon,;';}
  ClockIcon,';}
  ArrowRightIcon,';}
  CheckIcon'}
} from '@heroicons/react/24/outline
'
const ContactPage: React.FC = () => {'
  const [formData, setFormData] = useState({'
    name: '','
    email: '','
    company: '','}
    phone: '','}
    service: '','})
    message: ''})
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target
    setFormData(prev => ({}
      ...prev,})
      [name]: value;})
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission;}
    await new Promise(resolve => setTimeout(resolve, 2000));}
    setIsSubmitting(false);}
    setIsSubmitted(true);}
  }
  const contactInfo = [
    {
      icon: PhoneIcon,'}
      title: 'Phone','}
      details: '+1-302-464-0950','}
      description: 'Available 24/7'}
    },
    {
      icon: EnvelopeIcon,'}
      title: 'Email','}
      details: 'kleber@ziontechgroup.com','}
      description: 'Quick response guaranteed'}
    },
    {
      icon: MapPinIcon,'}
      title: 'Address','}
      details: '364 E Main St STE 1008','}
      description: 'Middletown', DE 19709'}
    },
    {
      icon: ClockIcon,'}
      title: 'Business Hours','}
      details: 'Monday - Friday: 9:00 AM - 6:00 PM','}
      description: 'Weekend support available'}
    }
  }]
  const services = ['
    'AI Solutions','
    'Cybersecurity','
    'Cloud Infrastructure','
    'Micro SaaS Solutions','
    '5G Technology','
    'IT Services','
    'Digital Transformation',']
    'Consulting']
  ]
  return (
    <></>
      <Helmet>title</Helmet>
      <title>Contact Us - Zion Tech Group</title>'
        <meta>meta</meta>
      <meta></meta>
      </Helmet>
      {/* Hero Section */}
      <section>div</section>
      <div></div>
        </div>
        
        <div>h1</div>
      <h1></h1>
              Get In Touch)
            </h1>
            <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed></p>
              Ready to Transform Your Business?
            </p>
            <p className="text-lg" text-gray-400 mb-12 max-w-3xl mx-auto></p>'
              Let's discuss how our technology solutions can help you achieve your business goals. '
              We're here to answer your questions and provide expert guidance.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form & Info */"}
      <section>div</section>
      <div></div>
            {/* Contact Form */"}
            <div>h2</div>
      <h2>Send Us a Message</h2>
              
              {isSubmitted ? (
                <div>CheckIcon</div>
      <CheckIcon></CheckIcon>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>'
                  <p className="text-gray-300 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>)
                  <button)
                    onClick="{()" => {
                      setIsSubmitted(false)
                      setFormData({'
                        name: '','
                        email: '','
                        company: '','}
                        phone: '','}
                        service: '','})
                        message: ''})
                      })
                    }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover: "'from-purple-700 hover:to-cyan-700 transition-all duration-300'",'
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form>div</form>
      <div></div>
                      <label htmlFor=name className="block" text-sm font-medium text-gray-300 mb-2></label>
                        Full Name *
                      </label>
                      <input)
                        type=text
                        id=name
                        name=name
value={formData.name
                        onChange={handleInputChange
                        required
                        className="w-full" px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus: "outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        placeholder=Your full name
                      /></input>
                    </div>
                    
                    <div>label</div>
      <label></label>
                        Email Address *
                      </label>
                      <input
                        type=email
                        id=email
                        name=email
value={formData.email
                        onChange={handleInputChange
                        required
                        className="w-full" px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        placeholder=your@email.com
                      /></input>
                    </div>
                  </div>
                  
                  <div>label</div>
      <label></label>
                        Company
                      </label>
                      <input
                        type=text
                        id=company
                        name=company
value={formData.company
                        onChange={handleInputChange
                        className="w-full" px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        placeholder=Your company name
                      /></input>
                    </div>
                    
                    <div>label</div>
      <label></label>
                        Phone Number
                      </label>
                      <input
                        type=tel
                        id=phone
                        name=phone
value={formData.phone
                        onChange={handleInputChange;)
                        className="w-full" px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent)
                        placeholder=+1 (555) 123-4567
                      /></input>
                    </div>
                  </div>
                  
                  <div>label</div>
      <label></label>
                      Service Interest
                    </label>
                    <select
                      id=service
                      name=service
value={formData.service
                      onChange={handleInputChange
                      className="w-full" px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"}
                    ></select>}
                      <option value="">Select a service</option>}
                      {services.map((service, index) => (})
                        <option key="{index}" value="{service}">{service}</option>)
                      ))}
                    </select>
                  </div>
                  
                  <div>label</div>
      <label></label>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
value="{formData.message;"
                      onChange="{handleInputChange;"
                      required
                      rows="{6;"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus: "outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      placeholder=Tell us about your project or how we can help...
                    /></textarea>
                  </div>
                  <button
                    type=submit"}
disabled="{isSubmitting;"}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover: "from-purple-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"}
                  ></button>'}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRightIcon className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
            {/* Contact Information */}
            <div>h2</div>
      <h2>Contact Information</h2>
                <p className="text-gray-300 mb-8"></p>'
                  Get in touch with us through any of the following methods. We're here to help 
                  you find the right technology solutions for your business.
                </p>
              </div>
              
              <div className="space-y-6"></div>
                {contactInfo.map((info, index) => (}
                  <div>info</div>
      <info></info>
                    </div>
                    <h3>h3</h3>
      <h3>{info.title}</h3>
                      <p className="text-gray-300 text-lg">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>)
                  </div>)
                ))}
              </div>
              
              <h3>h3</h3>
      <h3>Why Choose Us?</h3>
                <ul>li</ul>
      <li>CheckIcon</li>
      <CheckIcon>
                    24/7 Expert Support
                  </li>
                  <li>CheckIcon</li>
      <CheckIcon></CheckIcon>
                    Cutting-edge Technology
                  </li>
                  <li>CheckIcon</li>
      <CheckIcon></CheckIcon>
                    Proven Track Record
                  </li>
                  <li>CheckIcon</li>
      <CheckIcon></CheckIcon>
                    Custom Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ContactPage
'