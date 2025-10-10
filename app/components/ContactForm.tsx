import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string,;}
}
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
;
  const [formData, setFormData] = useState<FormData>({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '';}
  });
;
  const [status, setStatus] = useState<FormStatus>({;
    type: 'idle',;
    message: '';}
  });
;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]: value;}
    }));
  };
      });
    } catch (error) {;
      setStatus({;
        type: 'error',;
        message: 'Sorry, there was an error sending your message. Please try again.';}
      });
    }
  };
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@company.com"
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company;
  </
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number;
  </
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest;
  </
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              ) : (
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
;
  const services = [;
    'AI Solutions',;
    'Web Development',;
    'Mobile App Development',;
    'Cloud Services',;
    'Data Analytics',;
    'Cybersecurity',;
    'IT Consulting',;
    'Other';
  ];
;
              </label>;
              <input;
                type="text";
                id="name";
                name="name";
                value={formData.name}
                onChange={handleChange}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="Your full name";
              />;
            </div>;
            <div></div>;
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
                Email Address *;
              </label>;
              <input;
                type="email";
                id="email";
                name="email";
                value={formData.email}
                onChange={handleChange}
                required;
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="your.email@company.com";
              />;
            </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
            <div></div>;
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;
                Company;
              </label>;
              <input;
                type="text";
                id="company";
                name="company";
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="Your company name";
              />;
            </div>;
            <div></div>;
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;
                Phone Number;
              </label>;
              <input;
                type="tel";
                id="phone";
                name="phone";
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
                placeholder="+1 (555) 123-4567";
              />;
            </div>;
          </div>;
          <div></div>;
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
              Service Interest;
            </label>;
            <select;
              id="service";
              name="service";
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
            >;
              ) : (;
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-fb16
              )}
              <span className="text-sm font-medium">{status.message}</span>;
            </div>;
          )}
