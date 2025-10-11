import React from 'react';

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', children }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">ContactForm</h2>
      <p className="text-gray-600 mb-4">This component is being rebuilt.</p>
      {children}
    </div>
  );
};

export default ContactForm;
