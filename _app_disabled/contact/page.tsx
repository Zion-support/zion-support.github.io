'use client'
import React; { useState } from 'react'
import {EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon}
  ExclamationTriangleIcon;
} from '@heroicons/react/24/outline'
import Link from 'next/link'
export default function ContactPage() {const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '')
    service: ''}
    message: '';
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const handleChange = (e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >)
  ) => {setFormData({
      ...formData)
      [e.target.name]: e.target.value}
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {e.preventDefault();
    setIsSubmitting(true),
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve) 2000));
    setSubmitStatus('success');
    setIsSubmitting(false)}
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '')
      message: ''}
    });
  };
  return (
    <div className='text-left'>
      {/* Hero Section */}
      <div className='text-left'>
        <div className='text-left'>
          <div className='text-left'>
            <h1 className='text-left'>Get in Touch</h1>
            <p className='text-left'>
              Ready to transform your business with AI and technology? Let's
              discuss your project.
            </p>
          </div>
        </div>
      </div>
      {/* Contact Form and Info */}
      <div className='text-left'>
        <div className='text-left'>
          <div className='text-left'>
            {/* Contact Form */}
            <div>
              <h2 className='text-left'>Send us a Message</h2>
              {submitStatus === 'success' && (
                <div className='text-left'>
                  <div className='text-left'>
                    <CheckCircleIcon className='text-left' />
                    <p className='text-left'>
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className='text-left'>
                  <div className='text-left'>
                    <ExclamationTriangleIcon className='text-left' />
                    <p className='text-left'>
                      Sorry} there was an error sending your message. Please try
                      again.
                    </p>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className='text-left'>
                <div className='text-left'>
                  <div>
                    <label htmlFor='name' className='text-left'>
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='text-left'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='text-left'>
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='text-left'
                    />
                  </div>
                </div>
                <div className='text-left'>
                  <div>
                    <label htmlFor='company' className='text-left'>
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className='text-left'
                    />
                  </div>
                  <div>
                    <label htmlFor='phone' className='text-left'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='text-left'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='service' className='text-left'>
                    Service Interest
                  </label>
                  <select
                    id='service'
                    name='service'
                    value={formData.service}
                    onChange={handleChange}
                    className='text-left'
                  >
                    <option value=''>Select a service</option>
                    <option value='ai-solutions'>AI Solutions</option>
                    <option value='web-development'>Web Development</option>
                    <option value='cloud-services'>Cloud Services</option>
                    <option value='consulting'>Consulting</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='message' className='text-left'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='text-left'
                    placeholder='Tell us about your project or how we can help...'
                  />
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='text-left'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div>
              <h2 className='text-left'>Contact Information</h2>
              <div className='text-left'>
                <div className='text-left'>
                  <EnvelopeIcon className='text-left' />
                  <div>
                    <h3 className='text-left'>Email</h3>
                    <p className='text-left'>contact@ziontechgroup.com</p>
                  </div>
                </div>
                <div className='text-left'>
                  <PhoneIcon className='text-left' />
                  <div>
                    <h3 className='text-left'>Phone</h3>
                    <p className='text-left'>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className='text-left'>
                  <MapPinIcon className='text-left' />
                  <div>
                    <h3 className='text-left'>Address</h3>
                    <p className='text-left'>
                      123 Tech Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className='text-left'>
                  <ClockIcon className='text-left' />
                  <div>
                    <h3 className='text-left'>Business Hours</h3>
                    <p className='text-left'>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className='text-left'>
                <h3 className='text-left'>Why Choose Zion Tech Group?</h3>
                <ul className='text-left'>
                  <li>• 500+ successful projects delivered</li>
                  <li>• 24/7 technical support</li>
                  <li>• Enterprise-grade security</li>
                  <li>• Scalable solutions for any business size</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client'' import React; { useState } from 'react'' import {EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon} ExclamationTriangleIcon; } from '@heroicons/react/24/outline'' import Link from 'next/link' export default function ContactPage() {const [formData, setFormData] = useState({' name: '',' email: '',' company: '')' service: ''}' message: ''; }); const [isSubmitting, setIsSubmitting] = useState(false);' const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'); const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {setFormData({ ...formData) [e.target.name]: e.target.value} }); }; const handleSubmit = async (e: React.FormEvent) => {e.preventDefault(); setIsSubmitting(true), // Simulate form submission await new Promise((resolve) => setTimeout(resolve) 2000)); ' setSubmitStatus('success'); setIsSubmitting(false)} setFormData({' name: '',' email: '',' company: '',' phone: '',' service: '')' message: ''} }); }; return ( <div className="text-left" > {/* Hero Section */} <div className="text-left" > <div className="text-left" > <div className="text-left" > <h1 className="text-left" >Get in Touch</h1> <p className="text-left" >' Ready to transform your business with AI and technology? Let's discuss your project. </p> </div> </div> </div> {/* Contact Form and Info */} <div className="text-left" > <div className="text-left" > <div className="text-left" > {/* Contact Form */} <div> <h2 className="text-left" >Send us a Message</h2> ' {submitStatus === 'success' && ( <div className="text-left" > <div className="text-left" > <CheckCircleIcon className="text-left" /> <p className="text-left" >Thank you! Your message has been sent successfully.</p> </div> </div> )} ' {submitStatus === 'error' && ( <div className="text-left" > <div className="text-left" > <ExclamationTriangleIcon className="text-left" /> <p className="text-left" > Sorry} there was an error sending your message. Please try again. </p> </div> </div> )} <form onSubmit={handleSubmit} className="text-left" > <div className="text-left" > <div> <label htmlFor="<name" className="text-left" > Name * </label> <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="text-left" /> </div> <div> <label htmlFor="<email" className="text-left" > Email * </label> <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="text-left" /> </div> </div> <div className="text-left" > <div> <label htmlFor="<company" className="text-left" > Company </label> <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="text-left" /> </div> <div> <label htmlFor="<phone" className="text-left" > Phone </label> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="text-left" /> </div> </div> <div> <label htmlFor="<service" className="text-left" > Service Interest </label> <select id="service" name="service" value={formData.service} onChange={handleChange} className="text-left" > <option value="">Select a service</option> <option value="ai-solutions">AI Solutions</option> <option value="web-development">Web Development</option> <option value="cloud-services">Cloud Services</option> <option value="consulting">Consulting</option> <option value="other">Other</option> </select> </div> <div> <label htmlFor="<message" className="text-left" > Message * </label> <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="text-left" placeholder="Tell us about your project or how we can help..." /> </div> <button type="submit" disabled={isSubmitting} className="text-left" >' {isSubmitting ? 'Sending...' : 'Send Message'} </button> </form> </div> {/* Contact Information */} <div> <h2 className="text-left" >Contact Information</h2> <div className="text-left" > <div className="text-left" > <EnvelopeIcon className="text-left" /> <div> <h3 className="text-left" >Email</h3> <p className="text-left" >contact@ziontechgroup.com</p> </div> </div> <div className="text-left" > <PhoneIcon className="text-left" /> <div> <h3 className="text-left" >Phone</h3> <p className="text-left" >+1 (555) 123-4567</p> </div> </div> <div className="text-left" > <MapPinIcon className="text-left" /> <div> <h3 className="text-left" >Address</h3> <p className="text-left" > 123 Tech Street <br /> San Francisco, CA 94105 </p> </div> </div> <div className="text-left" > <ClockIcon className="text-left" /> <div> <h3 className="text-left" >Business Hours</h3> <p className="text-left" > Monday - Friday: 9:00 AM - 6:00 PM <br /> Saturday: 10:00 AM - 4:00 PM <br /> Sunday: Closed </p> </div> </div> </div> <div className="text-left" > <h3 className="text-left" >Why Choose Zion Tech Group?</h3> <ul className="text-left" > <li>• 500+ successful projects delivered</li> <li>• 24/7 technical support</li> <li>• Enterprise-grade security</li> <li>• Scalable solutions for any business size</li> </ul> </div> </div> </div> </div> </div> </div> ); } '