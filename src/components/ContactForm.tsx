import React, { useState } from 'react';'
import { motion } from 'framer-motion';'
import { Card } from './ui/card';'
import { Button } from './ui/button';'
import { Input } from './ui/input';'
import { Textarea } from './ui/textarea';

interface FormData {}
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {}
  const [formData, setFormData] = useState<FormData>({'
    name: '','
    email: '','
    company: '','
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);'
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}
    const { name, value } = e.target;
    setFormData(prev => ({}
      ...prev,
      [name]: value;
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission;
    try {}
      await new Promise(resolve => setTimeout(resolve, 1000));'
      setSubmitStatus('success');'
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {'
      setSubmitStatus('error');
    } finally {}
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div;
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">"
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Send us a Message;
        </h3>
        '
        {submitStatus === 'success' && (
          <motion.div;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}"
            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
          >'
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
'
        {submitStatus === 'error' && (
          <motion.div;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}"
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center"
          >
            Sorry, there was an error sending your message. Please try again.
          </motion.div>
        )}
"
        <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">"
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>"
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <Input"
                id="name""
                name="name""
                type="text"
                required;
                value={formData.name}
                onChange={handleChange}"
                className="w-full""
                placeholder="Your full name""
                aria-describedby="name-error"'
                aria-invalid={formData.name === '' ? 'true' : 'false'}
              />
            </div>
            <div>"
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input"
                id="email""
                name="email""
                type="email"
                required;
                value={formData.email}
                onChange={handleChange}"
                className="w-full""
                placeholder="your.email@company.com""
                aria-describedby="email-error"'
                aria-invalid={formData.email === '' ? 'true' : 'false'}
              />
            </div>
          </div>

          <div>"
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company;
            </label>
              <Input"
                id="company""
                name="company""
                type="text"
                value={formData.company}
                onChange={handleChange}"
                className="w-full""
                placeholder="Your company name""
                aria-describedby="company-error"
              />
          </div>

          <div>"
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <Textarea"
              id="message""
              name="message"
              required;
              value={formData.message}
              onChange={handleChange}"
              className="w-full min-h-[120px]""
              placeholder="Tell us about your project or how we can help...""
              aria-describedby="message-error"'
              aria-invalid={formData.message === '' ? 'true' : 'false'}
            />
          </div>

          <motion.div;
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button"
              type="submit"
              disabled={isSubmitting}"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >'
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;'"