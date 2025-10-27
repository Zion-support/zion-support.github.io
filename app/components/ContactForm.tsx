

interface ContactFormProps {
  className?: string;
  children?: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`contactform ${className}`}>
      {children || <p>ContactForm component</p>}
    </div>
  );
};

export default ContactForm;