import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string,
}

  const [formData, setFormData] = useState<FormData>()
  })

  const [status, setStatus] = useState<FormStatus>()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData()
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setStatus()
      })

      // Reset form
      setFormData()
      })
    } catch (error) {
      setStatus()
      })
    }
  }

  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',;
    'IT Consulting',;
    'Other';
  ];
  return ()
                placeholder="+1 (555) 123-4567"
              /></input>
            </div>
          </div>

          <div></div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2" /></label>
              Service Interest
            </label>
            <select id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" /></select>
              ) : ()
              )}
              <span className="text-sm font-medium">{status.message}</span>
            </div>
          )}

          <button type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2" /></button>
            {status.type === 'loading' ? ()
            ) : ()
            )}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center" /></div>
            <div className="flex flex-col items-center space-y-2" /></div>
              <div className="p-3 bg-blue-100 rounded-full" /></div>
                <Phone className="h-6 w-6 text-blue-600" / /></Phone>
              </div>
              <div></div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2" /></div>
              <div className="p-3 bg-green-100 rounded-full" /></div>
                <Mail className="h-6 w-6 text-green-600" / /></Mail>
              </div>
              <div></div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2" /></div>
              <div className="p-3 bg-purple-100 rounded-full" /></div>
                <MapPin className="h-6 w-6 text-purple-600" / /></MapPin>
              </div>
              <div></div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ContactForm;
