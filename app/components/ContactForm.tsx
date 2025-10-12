import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

interface FormData {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;

  const [formData, setFormData] = useState<FormData />({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />) => {
    const { name, value } = e.target;
 ({
      ...prev,
      [name]: value
    }));
  };

    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
 setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (

        <h3 className="text-2 xl font-boldtext-whitemb-2">Message Sent!</h3>

        <p className="text-gray-300">Thank you for your message. We'll get back to you soon.</p>
  );

  return (

        <h2 className="text-3 xl font-boldtext-whitemb-4">Get In Touch</h2>

        <p className="text-gray-300">Ready to transform your business? Let's discuss your project.</p>

            <label htmlFor="name" className="block text-sm font-mediumtext-gray-300mb-2">Full Name *

            <label htmlFor="email" className="block text-sm font-mediumtext-gray-300mb-2">Email Address *

            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-300mb-2">Phone Number

            <label htmlFor="company" className="block text-sm font-mediumtext-gray-300mb-2">Company

          <label htmlFor="service" className="block text-sm font-mediumtext-gray-300mb-2">Service Interest

            <option value="">Select a service</option>
            <option value="ai-services">AI Services</option>
            <option value="it-services">IT Services</option>
            <option value="5 g-solutions">5 G Solutions</option>
            <option value="micro-saas">Micro SAAS</option>
            <option value="consulting">Consulting</option>

          <label htmlFor="message" className="block text-sm font-mediumtext-gray-300mb-2">Message *

          {isSubmitting ? (

        </div></div>

              Sending...
            </>
          ) : (

              Send Message
            </>
          )}

            <span className="text-gray-300">kleber@ziontechgroup.com</span>
            <span className="text-gray-300">+1 (302) 464-0950</span>
            <span className="text-gray-300">24/7 Support</span>

  );

