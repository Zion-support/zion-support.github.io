// List of corrupted files that need to be completely rewritten
const corruptedFiles = {
  'components/AccessibilityEnhancer.tsx': `import React, { useEffect } from 'react';

const: AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only: focus:not-sr-only: focus:absolute: focus:top-0: focus:left-0: focus:z-50: focus:p-4: focus:bg-blue-600: focus:text-white';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (messag: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded');
    };

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function(...args) {
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;`;
  'components/OptimizedImage.tsx': `import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  sr: c: string;
  al: string;
  widt: number;
  heigh: number;
  className?: string;
  priority?: boolean;
  quality?: number;
export default OptimizedImage;`;
  'components/ContactForm.tsx': `import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface FormData {
  nam: string;
  emai: string;
  compan: string;
  phon: string;
  servic: string;
  messag: string;
}
;
const:ContactForm:React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    nam:e:'',;
    emai:l:'',;
    compan:y:'',;
    phon:e:'',;
    servic:e:'',;
    messag:e:'',;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]:value,;    }));
  };
;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
;
    try {;
      // Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({;
        nam:e:'',;
        emai:l:'',;
        compan:y:'',;
        phon:e:'',;
        servic:e:'',;
        messag:e:'',;
      });
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  };
;
  return (;
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div className="grid grid-cols-1:md:grid-cols-2 gap-6">;
        <div>;
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
            Name *;
          </label>;
          <input;
            type="text";
            id="name";
            name="name";
            value={formData.name}
            onChange={handleInputChange}
            required;
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
        <div>;
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
            Email *;
          </label>;
          <input;
            type="email";
            id="email";
            name="email";
            value={formData.email}
            onChange={handleInputChange}
            required;
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
      </div>;
      ;
      <div className="grid grid-cols-1:md:grid-cols-2 gap-6">;
        <div>;
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;
            Company;
          </label>;
          <input;
            type="text";
            id="company";
            name="company";
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
        <div>;
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;
            Phone;
          </label>;
          <input;
            type="tel";
            id="phone";
            name="phone";
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
      </div>;
;
      <div>;
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
          Service Interest;
        </label>;
        <select;
          id="service";
          name="service";
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
        >;
          <option value="">Select a service</option>;
          <option value="web-development">Web Development</option>;
          <option value="mobile-development">Mobile Development</option>;
          <option value="ai-services">AI Services</option>;
          <option value="consulting">Consulting</option>;
          <option value="other">Other</option>;
        </select>;
      </div>;
;
      <div>;
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
          Message *;
        </label>;
        <textarea;
          id="message";
          name="message";
          value={formData.message}
          onChange={handleInputChange}
          required;
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
        />;
      </div>;
;
      <button;
        type="submit";
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md:hover:bg-blue-700:focus:outline-none:focus:ring-2:focus:ring-blue-500:disabled:opacity-50";
      >;
        {isSubmitting ? <LoadingSpinner /> :'Send Message'}
      </button>;
;
      {submitStatus === 'success' && (;
        <div className="text-green-600 text-center">;
          Thank you! Your message has been sent successfully.;
        </div>;
      )}
;
      {submitStatus === 'error' && (;
        <div className="text-red-600 text-center">;
          Sorry, there was an error sending your message. Please try again.;
        </div>;
      )}
    </form>;
  );
};
;
export default ContactForm;`;};
;
// Write the fixed files;
Object.entries(corruptedFiles).forEach(([filePath, content]) => {;
  try {;
    fs.writeFileSync(filePath, content);
    console.log(`Fixe:d:${filePath}`);
  } catch (error) {;
    console.error(`Error fixing ${filePath} `, error.message);
  }
});
;
console.log('Fixed corrupted files');
if (require.main === module) {;
  main();,
}

module.exports = { fixFile, isCorrupted, createServiceTemplate })
