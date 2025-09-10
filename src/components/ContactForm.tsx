<<<<<<< HEAD
import React, { useState } from 'react',;',';';';';
    ';';';';';';
import { motion } from 'framer-motion';';
import {;';';
  Mail, Phone,;';';';
  MapPin, Send,;';';';';
  CheckCircle, AlertCircle,;';';';';';
  User, Building,;',';';';';
    ';';';';';
  MessageSquare} from 'lucide-react';';';';';
export const ContactForm: Reac t.FC = () => {';';';';';
  const [formData, setFormData] = useState<any>({',';';';';
    ';';';';';
    firstName: '', lastName: '',',';';';';
    ';';';';';
    email: '', company: '',',';';';';
    ';';';';';
    phone: '', service: '',',';';';';
    ';';';';';
    message: '', budget: '',',';';';';
    ';';';';';
    timeline: ''});';';';';';
  const [isSubmitting, setIsSubmitting] = useState<any>(false);',';';';';
    ';';';';';import React, { useState } from 'react',;',';';
    ;
import { motion } from 'framer-motion';
import {;
  Mail, Phone,;';
  MapPin, Send,;';';
  CheckCircle, AlertCircle,;';';';
  User, Building,;',';';
    ';';';
  MessageSquare} from 'lucide-react';';';
export const "ContactForm": "React.FC = () => {';';';
  const [formData", setFormData] = useState<any>({',';';
    ';';';
    "firstName": '', "lastName": '',',';';
    ';';';
    "email": '', "company": '',',';';
    ';';';
    "phone": '', "service": '',',';';
    ';';';
    "message": '', "budget": '',',';';
    ';';';
    "timeline": ''});';';';
  const [isSubmitting, setIsSubmitting] = useState<any>(false);',';';
    ';';';  const handleSubmit = async (e: React.FormEvent) => {;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);';
    // Simulate form submission';';
    try {';';';
      await new Promise(resolve => setTimeout(resolve", 2000));',';';
    ';';';
      setSubmitStatus('success');';';';
      setFormData({',';';
    ';';';
        "firstName": '', "lastName": '',',';';
    ';';';
        "email": '', "company": '',',';';
    ';';';
        "phone": '', "service": '',',';';
    ';';';
        "message": '', "budget": '',',';';
    ';';';
        "timeline": ''});';';';  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white"  />';
        </div>';';
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!';';';
        <p className="text-zion-slate-light mb-6">',';';
    ';';';
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.''';';
        </p>';';';
        <button',';';
    ';';';
          onClick={() => setSubmitStatus('idle');
          onClick={() => setSubmitStatus('idle')
      )}
    </div>;
  );
}
          className="px-6 py-3 bg-zion-cyan text-white rounded-lg "hover": "b g-zion-cyan/90 transition-colors";
        >;
          Send Another Message;
        </button>;
      </motion.div>;
    );
      )"}
    </div>;
  );
}';
  return (';';
    <div className="min-h-screen bg-white">';';';
      <div className="text-center mb-8">';';';';
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>';';';';';
        <p className="text-zion-slate-light">',';';';';
    ';';';';';
          Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.''
        </p>
      </div>
      <div className="grid grid-cols-1 lg: gri d-cols-2 gap-8 mb-8">    </div>
    );
}
          className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover: b g-zion-cyan/90 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    )
      )}
    </div>
    );
}
  return (
        <div className="min-h-screen bg-white">';
      <div className="text-center mb-8">';';
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>';';';
        <p className="text-zion-slate-light">',';';
    ';';';
          Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals.'';
        </p>;
      </div>;
      <div className="grid grid-cols-1 lg: gri d-cols-2 gap-8 mb-8">;
        {/* Contact Information */}                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white focus: outlin e-none focus: borde r-zion-cyan/50 transition-colors"
              >
                <option value="">Select budget range</option>
                { budgets.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))
      )}
    </div>
    );
}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white "focus": "outlin e-none "focus": borde r-zion-cyan/50 transition-colors";
            >;
              <option value="">Select timeline</option>;
              { timelines.map((timeline) => (;
                <option key={timeline"} value={timeline}>{timeline}</option>;
              ));              required;
              required
              rows={4}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light "focus": "outlin e-none "focus": borde r-zion-cyan/50 transition-colors resize-none"';
              placeholder="Tell us about your project and how we can help..."';';
             />';';';
          </div>'",';';
    ';';' {submitStatus === 'error' && (;
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">;
              <AlertCircle className="w-5 h-5"  />;
              <span>There was an error sending your message. Please try again.</span>;
            </div>;
          );          </div>',';';
    ';';' {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              <AlertCircle className="w-5 h-5"  />
              <span>There was an error sending your message. Please try again.</span>
            </div>
          )
      )}
    </div>
    );
}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ "scale": "1.02 "}}
            whileTap={{ "scale": "0.98 "}}
            className="w-full px-6 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold "hover": "fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2 "disabled": opacit y-50 "disabled": curso r-not-allowed";
          >;
            {isSubmitting ? (;
              <>;
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>;
                Sending Message...;
</>;
            ) : (;
              <>;
                <Send className="w-5 h-5"  />;
                Send Message;
</>;
            );
      )"}
    </div>;
  );          </motion.button>;
        </form>;
          </motion.button>
        </form>
      </div>';
    </div>';';
  );';';';
};";
</motion>;
</textarea>;
</motion>;
</any>;
</any>;};"';';';';
</motion>
</textarea>
</motion>
</any>
</any>
=======
import React, { useState } from 'react';
import { Button } from './ui/Button';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Reset form on success
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });
            setSubmitStatus('success');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
        catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message;
    return (<div className="max-w-2xl mx-auto">
      {submitStatus === 'success' && (<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </div>
        </div>)}

      {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            Something went wrong. Please try again or contact us directly.
          </div>
        </div>)}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
              First Name *
            </label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your first name"/>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name *
            </label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your last name"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your email address"/>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your phone number"/>
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company Name
          </label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Enter your company name"/>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service of Interest
          </label>
          <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
            <option value="">Select a service</option>
            <option value="ai-solutions">AI & Machine Learning</option>
            <option value="cloud-devops">Cloud & DevOps</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="it-infrastructure">IT Infrastructure</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="micro-saas">Micro SAAS Services</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell us about your project or how we can help..."/>
        </div>

        <div className="pt-4">
          <Button type="submit" size="lg" fullWidth loading={isSubmitting} disabled={!isFormValid} className="w-full">
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">
            Terms of Service
          </a>
          .
        </p>
      </form>
    </div>);
};
export default ContactForm;
>>>>>>> origin/backup-improvements-20250827-015311
