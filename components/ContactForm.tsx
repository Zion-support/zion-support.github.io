<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lgshadow-lgp-8">
      <h2 className="text-3xl font-bold text-gray-900mb-6text-center">Get In Touch</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400text-green-700rounded">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400text-red-700rounded">
          Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1md:grid-cols-2gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-700mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-700mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1md:grid-cols-2gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-700mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-700mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-700mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="cloud-solutions">Cloud Solutions</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-700mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowedtransition-colorsduration-200"
        >
          {isSubmitting ? (
            <div className="flexitems-centerjustify-center">
              <LoadingSpinner />
              <span className="ml-2">Sending...</span>
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
};

<<<<<<< HEAD
export default ContactForm;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      setSubmitStatus('success');
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  }
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <option value="consulting">Consulting</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;
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
          )}
        </button>;
      </form>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default ContactForm;
export default ContactForm;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export default ContactForm;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
