import React, { useState } from 'react';
import { EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,'
  ClockIcon } from '@heroicons/react/24/outline';
const Contact: React.FC = () => {,
  const [formData, setFormData] = useState({'
    name: '','
    email: '','
    company: '','
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({,
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission',
    console.log('Form submitted:', formData);
  };

  const contactInfo = [{
      icon: EnvelopeIcon,'
      title: 'Email','
      details: 'contact@ziontech.com','
      description: 'Send us an email anytime',
    },
    {
      icon: PhoneIcon,'
      title: 'Phone','
      details: '+1 (555) 123-4567','
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPinIcon,'
      title: 'Office','
      details: 'San Francisco, CA','
      description: 'Visit our headquarters',
    },
    {icon: ClockIcon,'
      title: 'Response Time','
      details: '< 24 hours','
      description: 'We respond quickly'}];

  return ()
    <section className="py-20 bg-white">"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="text-center mb-16">"
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">'
            Ready to transform your business? Let's discuss how our solutions 
            can help you achieve your goals.
          </p>
        </div>
"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>,
          {/* Contact Form */},
          <div>"
            <form onSubmit={handleSubmit} className="space-y-6">"
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
                <div>"
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input"
                    type="text""
                    id="name""
                    name="name",
                    value: {formData.name},
                    onChange: {handleChange},
                    required"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                    placeholder="Your full name"
                  />
                </div>
                <div>"
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input"
                    type="email""
                    id="email""
                    name="email",
                    value: {formData.email},
                    onChange: {handleChange},
                    required"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>"
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input"
                  type="text""
                  id="company""
                  name="company",
                  value: {formData.company},
                  onChange={handleChange}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                  placeholder="Your company name"
                />
              </div>
              
              <div>"
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea"
                  id="message""
                  name="message",
                  value: {formData.message},
                  onChange: {handleChange},
                  required
                  rows={6}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                  placeholder="Tell us about your project or requirements..."
                />
              </div>
              
              <button"
                type="submit""
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              ></button>
                Send Message
              </button>
            </form>
          </div>
,
          {/* Contact Information */}"
          <div className="space-y-8"></div>
            <div>"
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>"
              <p className="text-gray-600 mb-8">'
                We're here to help! Reach out to us through any of the channels below, '
                and we'll get back to you as soon as possible.
              </p>
            </div>
"
            <div className="space-y-6"></div>
              {contactInfo.map((info, index) => ("
                <div key={index} className="flex items-start space-x-4">"
                  <div className="flex-shrink-0">"
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">"
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>"
                    <h4 className="text-lg font-semibold text-gray-900">
                      {info.title},
                    </h4>"
                    <p className="text-gray-900 font-medium">
                      {info.details},
                    </p>"
                    <p className="text-gray-600 text-sm">
                      {info.description},
                    </p>
                  </div>
                </div>
              ))},
            </div>

            {/* Additional Info */}"
            <div className="bg-gray-50 rounded-lg p-6">"
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Why Choose Us?
              </h4>"
              <ul className="space-y-2 text-gray-600">"
                <li className="flex items-center">"
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Free initial consultation
                </li>"
                <li className="flex items-center">"
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Customized solutions
                </li>"
                <li className="flex items-center">"
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  24/7 support available
                </li>"
                <li className="flex items-center">"
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Proven track record
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
"'
export default Contact;