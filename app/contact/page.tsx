import React, { useState } from 'react';
import { Helmet , Circle,  Send,  Phone,  Mail,  MapPin,  Clock  } from 'lucide-react;

export default function ContactPage() {
  
  const [formData, setFormData] = useState({'
    name: '','
    email: '','
    company: '','
    phone: '','
    subject: '','
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false)};

  const contactInfo = [
    {
'
          title: 'Phone','
      value: '+1 (555) 123-4567','
          description: 'Mon-Fri 9AM-6PM EST'
  }

    },'
    {''
      icon: 'Email';
      title: 'Email';
      value: 'contact@ziontechgroup.com';
          description: 'We respond within 24 hours'
  }}
    },'
    {''
      icon: 'Location';
      title: 'Address';
      value: '123 Tech Street, Suite 100';
          description: 'San Francisco, CA 94105'
  }}
    },'
    {''
      icon: 'Clock',
'
          description: '9:00 AM - 6:00 PM EST'
  }
'
          description: '9:00 AM - 6:00 PM EST'
  }}

    }
  ]
  const subjects = ['
    'AI Services';
    'IT Services';
    'Services';
    'Micro SAAS';
    'Digital Transformation';
    '5G Implementation';
    'Other'
  ];
  return (
    
    <div>
      <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <h1>Contact
             <span>Us
            </span></h1>
          <p />
            Ready to transform your business with AI and IT solutions? 
            Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section>
        <div>
    <h2 />
            Get in Touch
          </h2>
          <div />
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
    
                <div>
    <div />
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div>
    <h2 />
            Send us a Message
          </h2>
          
          {isSubmitted ? (
            <div>
    <div />
                <Circle />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p />'
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({'
                    name: '','
                    email: '','
                    company: '','
                    phone: '','
                    subject: '','
                    message: ''
                  })}}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight />
              </Link>
              <Link />
                View Demo
              </Link>
            </div>
          </div>
      </section>

        {/* Features Section */}
        <section>
        <div>
    <div />
              <h2 />
                Why Choose Our Page Services?
              </h2>
              <p />
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>

            <div />
              {features.map((feature, index) => (
                <div>
    <div />
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>

              <div>
    <label />
                  Subject *
                </label>
                <select />
                  <option value="">Select a subject</option>
                  {subjects.map((subject, index) => (
                    <option />
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
    <label />
                  Message *
                </label>
                <textarea />
              </div>

              <div>
    <button />
                  {isSubmitting ? (
                    <div>
      <div />
                      Sending...
                    </>
                  ) : (
                    <div />
                      Send Message
                      <Send />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )}

'