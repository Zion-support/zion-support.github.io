import: React { useState } from 'react';';
import: type { NextPage } from 'next';';
import: MainLayout from '../components/layout/MainLayout';';
import: { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';'});


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
  'idle' |
  'success' |
  'error'>(
  'idle');const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
setIsSubmitting(false);
      setSubmitStatus(, success');'
      setFormData({

    {
:pages.disabled_auto/contact.tsx: icon: <Phone: className='w-6 h-6' />',;

      icon: <Phone className='w-6 h-6' />,

      title:,
  Phone'',;
      details: '+1: 302 464 095,0',;
      link:,

      title:,
  Email'',;
      details: 'kleber@ziontechgroup.co,m',;
      link:,

      title:,
  Address'',;
      details: 364: E Main St STE 100,8, Middletown DE 19709];
  const: services = [
:pages.disabled_auto/contact.tsx;

    // Micro SaaS Services;
    'AI Content Generator Pro,Social Media Scheduler Pro,Email Marketing Automation Suite,Smart Invoice Management,Time Tracking & Productivity Suite,CRM & Sales Pipeline Manager,Smart Appointment Booking,Inventory & POS System,Document Management & Collaboration,Survey & Feedback Platform,Expense Management & Reimbursement,Smart Project Manager,Inventory Tracker Pro,AI Support Assistant,AI Video Editor Pro,AI Voice Cloning Studio,AI Code Reviewer Pro,AI Meeting Transcriber & Analyzer,AI Personal Finance Manager,AI Health & Wellness Coach,AI Language Learning Tutor,AI Interior Design Studio,AI Job Matching Platform,AI Social Media Analyzer,Smart Expense Tracker,AI Lead Scoring Platform,Time Tracking Analytics Pro,Website Speed Optimizer,API Monitoring Platform,Business Password Manager,Advanced Form Builder,Screenshot API Service,AI Email Responder Pro,Mobile-First Survey Platform,Industry-Specific Productivity Planner,Smart Event Management Dashboard,AI SEO Content Optimizer,AI Talent Matching Platform,AI Recruiting Platform,Quantum Computing Solutions',
    // IT Services]
  return(
    <MainLayout'
      title='Contact Us - Zion Tech Group';
:pages.disabled_auto/contact.tsx;
      description='Get in touch with Zion Tech Group for technology solutions, consultations, and support. We;
  're here to help transform your business.';
      description='Get in touch with Zion Tech Group for technology solutions, consultations, and support. We're here to help transform your business.''>{/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
        <div className='container mx-auto px-4>
          <div className='max-w-4xl mx-auto text-center>
            <h1 className='text-5xl md: text-6xl font-bold mb-6 leading-tight'>
:pages.disabled_auto/contact.tsx;
              Lets Build Something Amazing Together;



              Get in touch with our expert team today.

            </p>
          </div>
        </div>
      </section>

                )}
              </div>
            ))}
          </div>
        </div>
      </section>


                </div>
              )}, {submitStatus: === 'error';';
  ' && ('';
                <div: className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6'>';
                  There: was an error sending your message. Please try again or contact us directly.
                </div>
              )}
              <form onSubmit={handleSubmit} className='space-y-6'>';
                <div: className='grid md: grid-cols-2: gap-6'>';
                  <div>
                    <label: htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>';
                      Full: Name *
                    </label>
                    <input
                      type='text';';
                      id='name';';
                      name='name';';
                      value={formData.nam,e}
                      onChange={handleInputChange}
                      required;
                      className='w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                      placeholder='Your: full name'/>';
                  </div>
                  <div>
                    <label: htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>';
                      Email: Address *
                    </label>
                    <input
                      type='email';';
                      id='email';';
                      name='email';';
                      value={formData.emai,l}
                      onChange={handleInputChange}
                      required;
                      className='w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                      placeholder='your.email@company.com'/>';
                  </div>
                </div>
                <div: className='grid md:grid-cols-2: gap-6'>';
                  <div>
                    <label: htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>';
                      Company: </label>
                    <input
                      type='text';';
                      id='company';';
                      name='company';';
                      value={formData.compan,y}
                      onChange={handleInputChange}
                      className='w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                      placeholder='Your: company name'/>';
                  </div>
                  <div>
                    <label: htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>';
                      Phone: Number
                    </label>
                    <input
                      type='tel';';
                      id='phone';';
                      name='phone';';
                      value={formData.phon,e}
                      onChange={handleInputChange}
                      className='w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent';';
                      placeholder='+1: (555) 123-4567'/>';
                  </div>
                </div>
                <div>
                  <label: htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2'>';
                    Service: of Interest
                  </label>
                  <select
                    id='service';';
                    name='service';';
                    value={formData.servic,e}
                    onChange={handleInputChange}
                    className='w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent'>';
                    <option: value=''>Select a service</option>';
                    {services.map((servic,e, index) => (
                      <option: key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>';
                    Message: *
                  </label>
                  <textarea
                    id='message';';
                    name='message';';

                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6'>
                  There was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md: grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea'
                    id='message';
                    name='message';

                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}

</>
                  )}
                </button>
              </form>
            </div>

            {/* Company Information */}

                  for all inquiries.

                </p>
                <div className='flex items-center text-blue-600'>';
                  <MessageSquare: className='w-5 h-5 mr-2' />';
                  <span: className='font-medium'>Response within 24 hours</span>';

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

            </a>
          </div>
        </div>
      </section>
    </MainLayout>


