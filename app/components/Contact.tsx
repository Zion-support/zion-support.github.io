import React, { useState } from 'react;
import { EnvelopeIcon, 
  PhoneIcon, '
  MapPinIcon''
  ClockIcon } from '@heroicons/react/24/outline;
const Contact: React.FC = () => {,'
  const [formData, setFormData] = useState({''
    name: '';
    email: '';
    company: '';
    message: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({,
      ...formData,
      [e.target.name]: e.target.value;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()'
    // Handle form submission',;
    console.log('Form submitted:', formData);
  };

  const contactInfo = [{'
      icon: EnvelopeIcon''
      title: 'Email';
      details: 'contact@ziontech.com';
          description: 'Send us an email anytime'
  },
    },
    {'
      icon: PhoneIcon''
      title: 'Phone';
      details: '+1 (555) 123-4567';
          description: 'Mon-Fri from 9am to 6pm'
  },
    },
    {'
      icon: MapPinIcon''
      title: 'Office';
      details: 'San Francisco, CA';
          description: 'Visit our headquarters'
  },
    },'
    {icon: ClockIcon''
      title: 'Response Time';
      details: '< 24 hours';
          description: 'We respond quickly'
  }}
  ];

  return ()
    <section className="py-20 bg-white">"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="text-center mb-16">"
          <h2 />
            Get In Touch
          </h2>"'
          <p className="text-xl text-gray-600 max-w-3xl mx-auto'>';
            Ready to transform your business? Let's discuss how our solutions 
            can help you achieve your goals.
          </p>
        </div>
"
        <div />,
          {/* Contact Form */},
          <div>"
            <form onSubmit={handleSubmit} className="space-y-6">"
              <div>
    <div>"
                  <label />
                    Full Name *
                  </label>
                  <input />
                </div>
                <div>"
                  <label />
                    Email Address *
                  </label>
                  <input />
                </div>
  </div>
  <div>"
                <label />
                  Company
                </label>
                <input />
              </div>
              
              <div>"
                <label />
                  Message *
                </label>
                <textarea />
              </div>
              
              <button />

                Send Message
              </button>
            </form>
          </div>
,
          {/* Contact Information */}"
          <div>
    <div>"
              <h3 />
                Contact Information
              </h3>"'
              <p className="text-gray-600 mb-8'>';
                We're here to help! Reach out to us through any of the channels below, ';
                and we'll get back to you as soon as possible.
              </p>
            </div>
"
            <div />
              {contactInfo.map((info, index) => ("
                <div key={index} className="flex items-start space-x-4">"
                  <div className="flex-shrink-0">"
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">"
                      <info />
                    </div>
  </div>
  <div>"
                    <h4 />
                      {info.title},
                    </h4>"
                    <p />
                      {info.details},
                    </p>"
                    <p />
                      {info.description},
                    </p>
                  </div>
                </div>
              )})}
            </div>

            {/* Additional Info */}"
            <div className="bg-gray-50 rounded-lg p-6">"
              <h4 />
                Why Choose Us?
              </h4>
              <ul />
                <li />
                  <div />
                  Free initial consultation;
                </li>
                <li />
                  <div />
                  Customized solutions;
                </li>
                <li />
                  <div />
                  24/7 support available;
                </li>
                <li />
                  <div />
                  Proven track record;
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      </section>
  );
}'
"'
export default Contact;