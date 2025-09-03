import React, { useState } from 'react';
import { Button } from "./ui/Button.jsx";
const ContactForm = () => {};
};
    const [formData, setFormData] = useState({};
});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const handleInputChange = (e) => {};
        const { name, value } = e.target;
        setFormData(prev => ({};
}))};
    const handleSubmit = async (e) => {};
});
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus('idle'), 5000)}
        catch (error) {};
            setTimeout(() => setSubmitStatus('idle'), 5000)}
        finally {};
            setIsSubmitting(false)}
    };
    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message;
    return (<div className="max-w-2xl mx-auto">;
      {};
      )}
'";
      {};
      )}";
"";
      <form onSubmit={handleSubmit} className="space-y-6">"";
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>";
            <div>Broken JSX</div>
              className="block text-sm font-medium text-gray-300 mb-2">;
              Get Started,;
            </a>;
          </div>;
    </div>;,;
  )}
;
          <div>";
            <div>Broken JSX</div>
              className="block text-sm font-medium text-gray-300 mb-2">;
              Last Name *;
            </label>";
            <div>Broken JSX</div>
            />;
          </div>;
        </div>";
"";
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
          <div>";
            <div>Broken JSX</div>
              className="block text-sm font-medium text-gray-300 mb-2">;
              Email Address *;
            </label>";
            <div>Broken JSX</div>
            />;
          </div>;

          <div>";
            <div>Broken JSX</div>
              className="block text-sm font-medium text-gray-300 mb-2">;
              Phone Number;
            </label>";
            <div>Broken JSX</div>
            />;
          </div>;
        </div>;

        <div>";
          <div>Broken JSX</div>
            className="block text-sm font-medium text-gray-300 mb-2">;
            Comp Name;
          </label>";
          <div>Broken JSX</div>
          />;
        </div>;

        <div>";
          <div>Broken JSX</div>
            className="block text-sm font-medium text-gray-300 mb-2">;
            Service of Interest;
          </label>";
          <div>Broken JSX</div>
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"">"";
            <option value="">Select a service</option>"";
            <option value="ai-solutions">AI & Machine Learning</option>"";
            <option value="cloud-devops">Cloud & DevOps</option>"";
            <option value="cybersecurity">Cybersecurity</option>"";
            <option value="it-infrastructure">IT Infrastructure</option>"";
            <option value="digital-transformation">;
              Digital Transformation";
            </option>"";
            <option value="micro-saas">Micro SAAS Services</option>"";
            <option value="consulting">Consulting</option>"";
            <option value="other">Other</option>;
          </select>;
        </div>;

        <div>";
          <div>Broken JSX</div>
            className="block text-sm font-medium text-gray-300 mb-2">;
            Message *;
          </label>";
          <div>Broken JSX</div>
          />;
        </div>";
"";
        <div className="pt-4">";
          <div>Broken JSX</div>
            className="w-full">';
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>;
        </div>";
"";
        <p className="text-xs text-gray-400 text-center">';
          By submitting this form, you agree to our{' '}";
          <div>Broken JSX</div>
            className="text-blue-400 hover:text-blue-300 underline">';
            Privacy Policy'';
          </a>{' '}';
          and{' '}";
          <div>Broken JSX</div>
            className="text-blue-400 hover:text-blue-300 underline">;
            Terms of Service;
          </a>;
          .</p>;
      </form>;
    </div>)};
export default ContactForm;
;

export { ContactForm };
;
export { ContactForm };
;
export { ContactForm };
;
export { ContactForm };
;
export { ContactForm };
