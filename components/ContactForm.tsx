<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
=======

import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { Mail, Phone, MapPin, Send, CheckCircle  } from 'lucide-react';
interface FormData  {name: string;

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;service: string;}
  message: string;}
}const ContactForm: React.FC = () => {const [formData, setFormData] = useState<FormData    />({name: '',
  email: '',company: '',
  phone: '',service: '',}
  message: '';}
  })const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus]  = useState<'idle' | 'success' | 'error'>('idle')const handleInputChange = ({ name, value ) => {
  return $3;}
} = e.target;
    setFormData(prev => ({...prev,[name]: value;}
    }))}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)setSubmitStatus('idle')try {// Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',
  email: '',company: '',
  phone: '',service: '',}
  message: '';}
      })} catch {setSubmitStatus('error')message: '';}
  })const [isSubmitting, setIsSubmitting] = useState(false)const [isSubmitted, setIsSubmitted] = useState(false)const handleChange = ({ name, value ) => {
  return $3;}
} = e.target;
    setFormData(prev => ({...prev,[name]: value;}
    }))}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)try {// Simulate API call;}
      await new Promise(resolve => setTimeout(resolve, 2000))setIsSubmitted(true)} catch (error) {console.error('Error submitting form: ', error)} finally {setIsSubmitting(false)}
  }return (<div className=\"max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8\"    />;

=======
=======
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

const ContactForm: React.FC = () => ;
  const [formData, setFormData] = useState<FormData    />({name: '',
  email: '',company: '',
  phone: '',service: '',}
  message: '';}
  })const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus]  = useState<'idle' | 'success' | 'error'>('idle')const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement    />) => ;
  const { name, value } = e.target;
    setFormData(prev => ({...prev,[name]: value;}
    }))}

const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)setSubmitStatus('idle')try {// Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',
  email: '',company: '',
  phone: '',service: '',}
  message: '';}
      })} catch {setSubmitStatus('error')message: '';}
  })const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = ({ name, value ) => {
  return $3;}
} = e.target;
    setFormData(prev => ({...prev,[name]: value;}
    }))}

const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)try {// Simulate API call;}
      await new Promise(resolve = > setTimeout(resolve, 2000))setIsSubmitted(true)} catch (error) {console.error('Error submitting form: ', error)} finally {setIsSubmitting(false)}
  ;
  return (<div className=\"max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8\"    />;
      <h2 className=\"text-3xl font-bold text-gray-900mb-6text-center\"    />Get In Touch</h2>;
      {submitStatus === 'success' && (<div className=\"mb-6 p-4 bg-green-100 border border-green-400text-green-700rounded\"    />;
          Thank you for your message! We&apos;ll get back to you soon.;}
        </div>;}
      )}{submitStatus === 'error' && (<div className=\"mb-6 p-4 bg-red-100 border border-red-400text-red-700rounded\"    />;
          Sorry, there was an error sending your message. Please try again.;}
        </div>;}
      )}<form onSubmit={handleSubmit} className=\"space-y-6\"    />;
        <div className=\"grid grid-cols-1md:grid-cols-2gap-6\"    />;
          <div    />;
            <label htmlFor=\"name\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />;
              Name *;
            </label>;
            <input;
              type=\'text\';
              id=\'name\';
              name=\'name\';

<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
interface FormData {
  }
  "name": string;
  "email": string;
  "company": string;
  "phone": string;
  "service": string;
  "message": string;

import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  name: string, email: string,
  company: string, phone: string,
  service: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  message: string,
};
=======
  message: string;}
}
}

const ContactForm: React.FC = () =    /> {
 ;
<<<<<<< HEAD
  }
  const [formData, setFormData] = useState<FormData>({

  service: string
  message: string
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
<<<<<<< HEAD
<<<<<<< HEAD
    message: '',
=======
message: '',
=======
    message: '',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });
  const [is_submitting, setIsSubmitting] = useState (false);
  const [submit_status, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>: any {
    const { name, value } = e.target;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface FormData {;
  name: string, email: string,;
  company: string, phone: string,;
  service: string,;
  message: string,;
};
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
=======
    message: ''
  });


  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const { name, value } = e.target;
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
=======
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {;
      // Simulate form submission,
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
<<<<<<< HEAD
      setFormData({
=======
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        message: '',;
      });
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      setSubmitStatus('success');
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">;
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">;
        Get In Touch;
      </h2>;
      {submitStatus === 'success' && (;
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">;
          Thank you for your message! We&apos;ll get back to you soon.;
        </div>;
      )}
      {submitStatus === 'error' && (;
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">;
          Something went wrong. Please try again.;
        </div>;
      )}
      <form onSubmit={handleSubmit} className="space-y-6">;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>;
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
              Name *;
            </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <input
              type="text"
              id="name"
              name="name"
              value={formData && formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
          </div>;
          <div>;
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
              Email *;
            </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <input
              type="email"
              id="email"
              name="email"
              value={formData && formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
          </div>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>;
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;
              Company;
            </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <input
              type="text"
              id="company"
              name="company"
              value={formData && formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
          </div>;
          <div>;
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;
              Phone;
            </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData && formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
          </div>;
        </div>;
        <div>;
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
            Service Interest;
          </label>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <select
            id="service"
            name="service"
            value={formData && formData.service}
            onChange={handleInputChange}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">;
            <option value="">Select a service</option>;
            <option value="web-development">Web Development</option>;
            <option value="mobile-development">Mobile Development</option>;
            <option value="ai-services">AI Services</option>;
            <option value="cloud-solutions">Cloud Solutions</option>;
    setFormData (prev => ({
      ...prev,
      [name]: value,
    }));
  }
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    setIsSubmitting (true);
    setSubmitStatus ('idle');
    try {,
      // Simulate form submission,
      await new Promise (resolve => set_timeout (resolve, 2000));
      setSubmitStatus ('success');
      setFormData ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
<<<<<<< HEAD
        message: '',
      })
    } catch {;
      setSubmitStatus('error')
    } finally {;
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            <option value="micro-saas">Micro SaaS Products</option>
            <option value="ai-services">AI Services</option>
            <option value="blockchain">Blockchain Solutions</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? <LoadingSpinner /> : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-green-600 text-center">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="text-red-600 text-center">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
=======

  const handleSubmit = async (e: React.FormEvent) => {
=======
  const [formData, setFormData] = useState<FormData    />({
    name: '',
  email: '',
    company: '',
  phone: '',
    service: '',
  message: ''}
 ,}
});

const [isSubmitting, setIsSubmitting] = useState(false);

const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

const handleInputChange = (
   ;) => {
  return $3;}
}
  const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,}
      [name]: value}
    }))
};


const handleSubmit = async (e: React.FormEvent) => {
>>>>>>> origin/chore/fix-lint-and-merge
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission;
await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
  email: '',
        company: '',
  phone: '',
        service: '',
  message: ''}
     ,}
});
    } catch {}
      setSubmitStatus('error');}
    } finally {}
      setIsSubmitting(false);}
    }
  };

<<<<<<< HEAD
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (
=======
message: '',
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
interface FormData {
  name: string, email: string
  company: string, phone: string
  service: string
  message: string
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev
      [name]: value
    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: ''
        email: ''
        company: ''
        phone: ''
        service: ''
        message: ''
      });
;
      setSubmitStatus ('success');
    } catch {
      setSubmitStatus ('error');
    } finally {
      setIsSubmitting (false);
    }
  }
;
  return (
    <div className="max - w-2xl mx - auto p - 6 bg - white rounded - lg shadow - lg">;
      <h2 className="text - 3xl font - bold text - gray - 900 mb - 6 text - center">;
        Get In Touch;
      </h2>;
      {submit_status === 'success' && (
        <div className="mb - 6 p - 4 bg - green - 100 border border - green - 400 text - green - 700 rounded">;
          Thank you for your message! We & apos;ll get back to you soon.;
        </div>)}
      {submit_status === 'error' && (
        <div className="mb - 6 p - 4 bg - red - 100 border border - red - 400 text - red - 700 rounded">;
          Something went wrong. Please try again.;
        </div>)}
      <form on_submit={handle_submit} className="space - y-6">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
          <div>;
            <label html_for="name" className="block text - sm font - medium text - gray - 700 mb - 2">;
              Name *;
            </label>;
            <input;
              type="text";
              id="name";
              name="name";
              value={form_data.name}
              on_change={handleInputChange}
              required;
              className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
            />;
          </div>;
          <div>;
            <label html_for="email" className="block text - sm font - medium text - gray - 700 mb - 2">;
              Email *;
            </label>;
            <input;
              type="email";
              id="email";
              name="email";
              value={form_data.email}
              on_change={handleInputChange}
              required;
              className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
            />;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
          <div>;
            <label html_for="company" className="block text - sm font - medium text - gray - 700 mb - 2">;
              Company;
            </label>;
            <input;
              type="text";
              id="company";
              name="company";
              value={form_data.company}
              on_change={handleInputChange}
              className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
            />;
          </div>;
          <div>;
            <label html_for="phone" className="block text - sm font - medium text - gray - 700 mb - 2">;
              Phone;
            </label>;
            <input;
              type="tel";
              id="phone";
              name="phone";
              value={form_data.phone}
              on_change={handleInputChange}
              className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
            />;
          </div>;
        </div>;
        <div>;
          <label html_for="service" className="block text - sm font - medium text - gray - 700 mb - 2">;
            Service Interest;
          </label>;
          <select;
            id="service";
            name="service";
            value={form_data.service}
            on_change={handleInputChange}
            className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
          >;
            <option value="">Select a service</option>;
            <option value="web - development">Web Development</option>;
            <option value="mobile - development">Mobile Development</option>;
            <option value="ai - services">AI Services</option>;
            <option value="cloud - solutions">Cloud Solutions</option>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <option value="consulting">Consulting</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          />;
        </div>;
=======

          />;
        </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">;
          {isSubmitting ? (;
            <div className="flex items-center justify-center">;
              <LoadingSpinner size="sm" />;
              <span className="ml-2">Sending...</span>;
            </div>;
          ) : (;
            'Send Message';
        name: ''
        email: ''
        company: ''
        phone: ''
        service: ''
        message: ''
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
=======
  return (
    <div className=\"max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8\"    />
      <h2 className=\"text-3xl font-bold text-gray-900mb-6text-center\"    />Get In Touch</h2>
>>>>>>> origin/chore/fix-lint-and-merge
      
      {submitStatus === 'success' && (
        <div className=\"mb-6 p-4 bg-green-100 border border-green-400text-green-700rounded\"    />
          Thank you for your message! We&apos;ll get back to you soon.}
        </div>}
      )}
      
      {submitStatus === 'error' && (
        <div className=\"mb-6 p-4 bg-red-100 border border-red-400text-red-700rounded\"    />
          Sorry, there was an error sending your message. Please try again.}
        </div>}
      )}

      <form onSubmit={handleSubmit} className=\"space-y-6\"    />
        <div className=\"grid grid-cols-1md: grid-cols-2gap-6\"    />
          <div    />
            <label htmlFor=\"name\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />
              Name *
            </label>
            <input;
type=\"text\"
              id=\"name\"
              name=\"name\"
              value={formData.name}
              onChange={handleInputChange}
              onChange={handleInputChang,}
}
              required;
              className=\'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\';
               />;
          </div>;
          <div    />;
            <label htmlFor=\"email\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />;
              Email *;
            </label>;
            <input;
              type=\'email\';
              id=\'email\';
              name=\'email\';
              value={formData.email}
              onChange={handleInputChange}
              required;
              className=\'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\';
               />;
          </div>;
        </div>;
        <div className=\"grid grid-cols-1md:grid-cols-2gap-6\"    />;
          <div    />;
            <label htmlFor=\"company\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />;
              Company;
            </label>;
            <input;
              type=\'text\';
              id=\'company\';
              name=\'company\';
              value={formData.company}
              onChange={handleInputChange}
              className=\'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\';
               />;
          </div>;
          <div    />;
            <label htmlFor=\"phone\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />;
              Phone;
            </label>;
            <input;
              type=\'tel\';
              id=\'phone\';
              name=\'phone\';
              value={formData.phone}
              onChange={handleInputChange}
              className=\'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\';
               />;
          </div>;
        </div>;
        <div    />;
          <label htmlFor=\"service\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />;
            Service Interest;
          </label>;
          <select;
            id=\'service\';
            name=\'service\';
            value={formData.service}
            onChange={handleInputChange}
            className=\'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\';
              />;
            className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\">

            <option value=\"\"    />Select a service</option>;
            <option value=\"web-development\"    />Web Development</option>;
            <option value=\"mobile-development\"    />Mobile Development</option>;
            <option value=\"cloud-solutions\"    />Cloud Solutions</option>;
            <option value=\"consulting\"    />Consulting</option>;
            <option value=\"other\"    />Other</option>;
          </select>;
        </div>;
        <div    />;
          <label htmlFor=\"message\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />;
            Message *;
          </label>;
          <textarea;
            id=\'message\';
            name=\'message\';
            value={formData.message}
            onChange={handleInputChange}
            required;
            rows={5}
            className=\'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\';
            placeholder=\'Tell us about your project...\';
             />;
        </div>;
        <button;
          type=\'submit\';
          disabled={isSubmitting}
          className=\'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200\';
            />;
          className=\"w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200\">

          {isSubmitting ? (<div className=\"flexitems-centerjustify-center\"    />;
              <LoadingSpinner    />;
              <span className=\"ml-2\"    />Sending...</span>;
            </div>;}
          ) : ('Send Message';}
          )}
        </button>;
      </form>;
    </div>;
  )}export default ContactForm;
  )}

export default ContactForm;
      setSubmitStatus('success')} catch {setSubmitStatus('error')} finally {setIsSubmitting(false)}
  }
  return (<option value=\"consulting\"    />Consulting</option>;
            <option value=\"other\"    />Other</option>;
          </select>;
        </div>;
        <button;
          type=\'submit\';
          disabled={isSubmitting}
          className=\"w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200\"    />;
          {isSubmitting ? (<div className=\"flex items-center justify-center\"    />;
              <LoadingSpinner size=\"sm\"    />;
              <span className=\"ml-2\"    />Sending...</span>;
            </div>;}
          ) : ('Send Message';}
          )}
        </button>;
      </form>;
    </div>;
  )if (isSubmitted) {return (<div className=\"bg-green-50 border border-green-200 rounded-xl p-8 text-center\"    />;
        <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\"    />;
        <h3 className=\"text-2xl font-bold text-green-800 mb-2\"    />;
          Message Sent!;
        </h3>;
        <p className=\"text-green-600\"    />;
          Thank you for reaching out. We&apos;ll get back to you within 24;
          hours.;
        </p>;}
      </div>;}
    )}return (<div className=\"bg-white rounded-xl shadow-xl p-8\"    />;
      <div className=\"text-center mb-8\"    />;
        <h2 className=\"text-3xl font-bold text-gray-900 mb-4\"    />Get In Touch</h2>;
        <p className=\"text-gray-600 max-w-2xl mx-auto\"    />;
          Ready to transform your business? Let&apos;s discuss how our;
          technology solutions can drive your success.;
        </p>;
      </div>;
      <div className=\"grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8\"    />;
        <div    />;
          <h3 className=\"text-xl font-semibold text-gray-900 mb-4\"    />;
            Contact Information;
          </h3>;
          <div className=\"space-y-4\"    />;
            <div className=\"flex items-center space-x-3\"    />;
              <Mail className=\"w-5 h-5 text-blue-600\"    />;
              <div    />;
                <p className=\"font-medium text-gray-900\"    />Email</p>;
                <p className=\"text-gray-600\"    />kleber@ziontechgroup.com</p>;
              </div>;
            </div>;
            <div className=\"flex items-center space-x-3\"    />;
              <Phone className=\"w-5 h-5 text-blue-600\"    />;
              <div    />;
                <p className=\"font-medium text-gray-900\"    />Phone</p>;
                <p className=\"text-gray-600\"    />+1 (302) 464-0950</p>;
              </div>;
            </div>;
            <div className=\"flex items-center space-x-3\"    />;
              <MapPin className=\"w-5 h-5 text-blue-600\"    />;
              <div    />;
                <p className=\"font-medium text-gray-900\"    />Address</p>;
                <p className=\"text-gray-600\"    />;
                  364 E Main St STE 1008;
                  <br    />;
                  Middletown, DE 19709;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
        <form onSubmit={handleSubmit} className=\"space-y-6\"    />;
          <div className=\"grid grid-cols-1 md: grid-cols-2 gap-4\"    />;
            <div    />;
              <label;
                htmlFor=\'name\';
                className=\'block text-sm font-medium text-gray-700 mb-2\';
                  />;
                className=\"block text-sm font-medium text-gray-700 mb-2\">

                Full Name *;
              </label>;
              <input;
                type=\'text\';
                id=\'name\';
                name=\'name\';
                value={formData.name}
                onChange={handleChange}
                required;
                className=\'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
                placeholder=\'Your full name\';
                 />;
            </div>;
            <div    />;
              <label;
                htmlFor=\'email\';
                className=\'block text-sm font-medium text-gray-700 mb-2\';
                  />;
                className=\"block text-sm font-medium text-gray-700 mb-2\">

                Email Address *;
              </label>;
              <input;
                type=\'email\';
                id=\'email\';
                name=\'email\';
                value={formData.email}
                onChange={handleChange}
                required;
                className=\'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
                placeholder=\'your@email.com\';
                 />;
            </div>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\"    />;
            <div    />;
              <label;
                htmlFor=\'company\';
                className=\'block text-sm font-medium text-gray-700 mb-2\';
                  />;
                className=\"block text-sm font-medium text-gray-700 mb-2\">

                Company;
              </label>;
              <input;
                type=\'text\';
                id=\'company\';
                name=\'company\';
                value={formData.company}
                onChange={handleChange}
                className=\'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
                placeholder=\'Your company name\';
                 />;
            </div>;
            <div    />;
              <label;
                htmlFor=\'service\';
                className=\'block text-sm font-medium text-gray-700 mb-2\';
                  />;
                className=\"block text-sm font-medium text-gray-700 mb-2\">

                Service Interest;
              </label>;
              <select;
                id=\'service\';
                name=\'service\';
                value={formData.service}
                onChange={handleChange}
                className=\'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
                  />;
                className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\">

                <option value=\"\"    />Select a service</option>;
                <option value=\"ai-solutions\"    />AI Solutions</option>;
                <option value=\"cloud-services\"    />Cloud Services</option>;
                <option value=\"cybersecurity\"    />Cybersecurity</option>;
                <option value=\"consulting\"    />Consulting</option>;
                <option value=\"other\"    />Other</option>;
              </select>;
            </div>;
          </div>;
          <div    />;
            <label;
              htmlFor=\'message\';
              className=\'block text-sm font-medium text-gray-700 mb-2\';
                />;
              className=\"block text-sm font-medium text-gray-700 mb-2\">

              Message *;
            </label>;
            <textarea;
              id=\'message\';
              name=\'message\';
              value={formData.message}
              onChange={handleChange}
              required;
              rows={5}
              className=\'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\';
              placeholder=\'Tell us about your project or requirements...\';
               />;
          </div>;
          <button;
            type=\'submit\';
            disabled={isSubmitting}
            className=\'w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2\';
              />;
            className=\"w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2\">

            {isSubmitting ? (<>;
                <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white\"    /></div>;
                <span    />Sending...</span>;
              <   />;
            ) : (<>;
                <Send className=\"w-5 h-5\"    />;
                <span    />Send Message</span>;}
              <   />;}
            )}
          </button>;
        </form>;
      </div>;
    </div>;
  )}export default ContactForm;
            className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\"
  )}

export default ContactForm;
            className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus: outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\"
          >
            <option value=\"\"    />Select a service</option>
            <option value=\"web-development\"    />Web Development</option>
            <option value=\"mobile-development\"    />Mobile Development</option>
            <option value=\"cloud-solutions\"    />Cloud Solutions</option>
            <option value=\"consulting\"    />Consulting</option>
            <option value=\"other\"    />Other</option>
          </select>
        </div>

<<<<<<< HEAD
        <div>

        >
          {isSubmitting ? (
            <div className="flexitems-centerjustify-center">"
              <LoadingSpinner />
              <span className="ml-2">Sending...</span>"
            </div>
          ) : (
            'Send Message'
          )}
        </button>;
      </form>;
    </div>;
  );

<<<<<<< HEAD
=======
<<<<<<< HEAD
      setSubmitStatus('success);
    } catch {
      setSubmitStatus(error');
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
            <option value="consulting>Consulting</option>;
            <option value=other">Other</option>;
          </select>;
=======
<<<<<<< HEAD
}
=======
        <div>;
          <label html_for="message" className="block text - sm font - medium text - gray - 700 mb - 2">;
            Message *;
          </label>;
          <textarea;
            id="message";
            name="message";
            value={form_data.message}
            on_change={handleInputChange}
            required;
            rows={5}
            className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent";
            placeholder="Tell us about your project...";
          />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </div>;
        <button
          type="submit
          disabled={isSubmitting}
          className=w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">;
          {isSubmitting ? (;
            <div className="flex items-center justify-center>;
              <LoadingSpinner size=sm" />;
              <span className="ml-2>Sending...</span>;
            </div>;
          ) : (;
            'Send Message';
          )}
        </button>;
      </form>;
    </div>;
  );

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  if (isSubmitted) {
    return (
      <div className=bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 />
        <h3 className=text-2xl font-bold text-green-800 mb-2">
          Message Sent!
        </h3>
        <p className="text-green-600>
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <div className=bg-white rounded-xl shadow-xl p-8">
      <div className="text-center mb-8>
        <h2 className=text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto>
          Ready to transform your business? Let&apos;s discuss how our
          technology solutions can drive your success.
        </p>
      </div>
      <div className=grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4>
            Contact Information
          </h3>
          <div className=space-y-4">
            <div className="flex items-center space-x-3>
              <Mail className=w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900>Email</p>
                <p className=text-gray-600">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3>
              <Phone className=w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900>Phone</p>
                <p className=text-gray-600">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3>
              <MapPin className=w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900>Address</p>
                <p className=text-gray-600">
                  364 E Main St STE 1008
                  <br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6>
          <div className=grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name
                className=block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text
                id=name"
                name="name
                value={formData.name}
                onChange={handleChange}
                required
                className=w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name
              />
            </div>
            <div>
              <label
                htmlFor=email"
                className="block text-sm font-medium text-gray-700 mb-2
              >
                Email Address *
              </label>
              <input
                type=email"
                id="email
                name=email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder=your@email.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4>
            <div>
              <label
                htmlFor=company"
                className="block text-sm font-medium text-gray-700 mb-2
              >
                Company
              </label>
              <input
                type=text"
                id="company
                name=company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder=Your company name"
              />
            </div>
            <div>
              <label
                htmlFor="service
                className=block text-sm font-medium text-gray-700 mb-2"
              >
                Service Interest
              </label>
              <select
                id="service
                name=service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              >
                <option value=">Select a service</option>
                <option value="ai-solutions>AI Solutions</option>
                <option value=cloud-services">Cloud Services</option>
                <option value="cybersecurity>Cybersecurity</option>
                <option value=consulting">Consulting</option>
                <option value="other>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor=message"
              className="block text-sm font-medium text-gray-700 mb-2
            >
              Message *
            </label>
            <textarea
              id=message"
              name="message
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className=w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your project or requirements...
            />
          </div>
          <button
            type=submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2
          >
            {isSubmitting ? (
              <>
                <div className=animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
export default ContactForm
  );
};

export default ContactForm;
=======
        <div    />
          <label htmlFor=\"message\" className=\"block text-sm font-mediumtext-gray-700mb-2\"    />
            Message *
          </label>
          <textarea;
id=\"message\"
            name=\"message\"
            value={formData.message}
            onChange={handleInputChange}
            required;
rows={5}
            className=\"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent\"
            placeholder=\"Tell us about your project...\"
             />
        </div>

<<<<<<< HEAD
        <button;
type=\"submit\"
          disabled={isSubmitting}
          className=\"w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200\"
            />
          {isSubmitting ? (
            <div className=\"flexitems-centerjustify-center\"    />
              <LoadingSpinner    />
              <span className=\"ml-2\"    />Sending...</span>
            </div>
          ) : (}
            'Send Message'}
          )}
        </button>
      </form>
    </div>
  )}


export default ContactForm;

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======
<<<<<<< HEAD
export default ContactForm;
export default ContactForm;
};

export default ContactForm;
}
};

export default ContactForm;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ContactForm;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
