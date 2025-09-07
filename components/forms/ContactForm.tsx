

<<<<<<< HEAD
import { motion } from 'framer-motion';
import {
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



'use client';
'use client';
'use client';
;
import React, { useState } from 'react';
import { motion } from 'framer-motion';


import {;
  Mail,;
  Phone,;
  MapPin,;
  Send,;
  CheckCircle,;
  AlertCircle,;
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  Mail
  Phone
  MapPin
  Send
  CheckCircle
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
  AlertCircle,;}
'use client';'
import React, { useState } from 'react';'
import { motion } from 'framer-motion';
import {};
  Mail;
  Phone;
  MapPin;
  Send;
  CheckCircle;
  AlertCircle;
import { motion } from 'framer-motion';
import {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle
>>>>>>> merged-prs-20250907-203621
}
  AlertCircle,;}
} from 'lucide-react';

<<<<<<< HEAD
  AlertCircle;
} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
=======
<<<<<<< HEAD
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState({;'
    name: '',;'
    email: '',;'
    company: '',;'
    phone: '',;'
    service: '',;'
    message: '',;
  AlertCircle,;
} from 'lucide-react';

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  AlertCircle;
  Mail,
  Phone,
  MapPin,
  Send,
<<<<<<< HEAD
  CheckCircle,
  AlertCircle,
  CheckCircle,
  AlertCircle,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState({;
    name: '',;
    email: '',;
    company: '',;
    phone: '',;
    service: '',;
    message: '',;
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: ''
<<<<<<< HEAD
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
=======
=======
const ContactForm: React.FC = () => {
 ;
  const [formData, setFormData] = useState({
    name: '',
  email: '',
    company: '',
  phone: '',
    service: ''}
  message: ''}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle');
<<<<<<< HEAD
'use client',

const [isSubmitting, setIsSubmitting] = useState(false);

const [submitStatus, setSubmitStatus] = useState<;
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
const ContactForm: React.FC = () => {
  const [form_data, setFormData] = useState ({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
<<<<<<< HEAD
});
=======
  });

    });  };  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
  const [is_submitting, setIsSubmitting] = useState (false);
  const [submit_status, setSubmitStatus] = useState<;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    'idle' | 'success' | 'error';
  >('idle');

<<<<<<< HEAD
<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault($2);
    setIsSubmitting($2);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setSubmitStatus($2);
      setFormData({
=======
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> merged-prs-20250907-203621
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,) => {
  return $3;}
}
    })
  },
<<<<<<< HEAD

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault($2);
    setIsSubmitting($2);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setSubmitStatus($2);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
=======

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)),
      setSubmitStatus('success'),
      setFormData({

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
<<<<<<< HEAD
      ...formData;
      [e && e.target.name]: e && e.target.value;
    })
};
=======
<<<<<<< HEAD
const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
=======


  const handleChange = (e: React && React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setFormData({;
  CheckCircle,;
  AlertCircle,;
} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData
      [e.target.name]: e.target.value
    });  };  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData;
      [e && e.target.name]: e && e.target.value;
    });
  };
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Simulate API call;
    try {;
=======
const handleChange = (
    setFormData({
>>>>>>> origin/chore/fix-lint-and-merge
      ...formData,
      [e.target.name]: e.target.value,) => {
  return $3;}
}
    })
};


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
<<<<<<< HEAD
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        phone: '',;
        service: '',;
        message: '',;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      });
    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);    }
<<<<<<< HEAD
    } finally {
      setIsSubmitting(false)
    }
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        message: '',
      });
    } catch (error) {
      setSubmitStatus ('error');
    } finally {
      setIsSubmitting (false);    }
  }
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const services = [    } catch (error) {
      setSubmitStatus('error')
    } finally {
<<<<<<< HEAD
  };
=======

  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const services = [    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false),;
    }
<<<<<<< HEAD
  }
  const services = [
    'AI Development'
    'Cloud Architecture'
    'Digital Transformation'
    'IoT Platforms'
    'Blockchain Solutions'
    'Data Analytics'
    'Other',  ];    'AI DevelopmentCloud ArchitectureDigital TransformationIoT PlatformsBlockchain SolutionsData AnalyticsOther'
  ];
  const contactInfo = [
    {
      icon: Mail
      title: 'Email Us'
      content: 'contact@ziontechgroup.com'
      href: 'mailto:contact@ziontechgroup.com'
    },    {
      icon: Phone
      title: 'Call Us'
      content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup.com'
    }
    {
      icon: Phone
      title: 'Call Us'
      content: '+1 (555) 123-4567'
      href: 'tel:+15551234567'
    },    {
      icon: MapPin
      title: 'Visit Us'
      content: '123 Tech Street, Innovation City, IC 12345'
      href: '#'
    }
;

  const services = [    } catch (error) {
      setSubmitStatus ('error');
    } finally {

  };

  const services = [    } catch (error) {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false),;
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

;
import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,'use client';
import React, { useState  } from 'react';
import { motion  } from 'framer-motion';
import { Mail;
  Phone;
  MapPin;
  Send;
  CheckCircle;
  AlertCircle;import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,CheckCircle,AlertCircle,} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle  } from 'lucide-react';
const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: '',email: '',company: '',phone: '',service: '',message: '',AlertCircle,} from 'lucide-react';const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: '',email: '',company: '',phone: '',service: '',message: '',})const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus] = useState<;
    'idle' | 'success' | 'error';
  >('idle')...formData;
      [e && e.target.name]: e && e.target.value;
    })}// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',email: '',company: '',phone: '',service: '',message: '',const handleChange = (e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {setFormData({...formData,[e.target.name]: e.target.value,})}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',email: '',company: '',phone: '',service: '',message: '',})} catch (error) {setSubmitStatus('error')} finally {setIsSubmitting(false)}
    } finally {setIsSubmitting(false)} finally {setIsSubmitting(false)}
  }
  const services = [;
'AI Development','Cloud Architecture','Digital Transformation','IoT Platforms','Blockchain Solutions','Data Analytics','Other',];const contactInfo = [;
    {icon: Mail,title: 'Email Us',content: 'contact@ziontechgroup && ziontechgroup.com',href: 'mailto:contact@ziontechgroup && ziontechgroup.com',},    {icon: Phone,title: 'Call Us',content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup && ziontechgroup.com';
}{icon: Phone,title: 'Call Us',content: '+1 (555) 123-4567',href: 'tel:+15551234567',},    {icon: MapPin,title: 'Visit Us',content: '123 Tech Street, Innovation City, IC 12345',href: '#',},return (<section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>;
      {/* Background Elements */}<div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
>>>>>>> merged-prs-20250907-203621
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  },
<<<<<<< HEAD

  const services = $2;
  const contactInfo = $2;
      title: 'Email Us',
      content: 'contact@ziontechgroup.com',
      href: 'mailto:contact@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Innovation City, IC 12345',
      href: '#'
    }
  ],

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
=======

  const services = $2;
  const contactInfo = $2;
      title: 'Email Us',
      content: 'contact@ziontechgroup.com',
      href: 'mailto:contact@ziontechgroup.com'
  const services = [
'AI Development',
    'Cloud Architecture',
    'Digital Transformation',
    'IoT Platforms',
    'Blockchain Solutions',
    'Data Analytics',
    'Other',
  ];

  const contactInfo = [;
    {;
      icon: Mail,;'
      title: 'Email Us',;'
      content: 'contact@ziontechgroup && ziontechgroup.com',;'
      href: 'mailto:contact@ziontechgroup && ziontechgroup.com',;
    },    {;
      icon: Phone,;
      title: 'Call Us',;
      content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup && ziontechgroup.com'
};
    {;
      icon: Phone,;'
      title: 'Call Us',;'
      content: '+1 (555) 123-4567',;'
      href: 'tel:+15551234567',;
    },    {;
      icon: MapPin,;'
      title: 'Visit Us',;'
      content: '123 Tech Street, Innovation City, IC 12345',;'
      href: '#',;
    },;

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>
      {/* Background Elements */}
<<<<<<< HEAD
'
      <div className='absolute inset-0'>;'
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;'
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;'
=======

    // Simulate API call;
try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
  email: '',
        company: '',
  phone: '',
        service: ''}
  message: ''}
      });
    } catch (error) {;
      setSubmitStatus('error');}
}
    } finally {}
      setIsSubmitting(false);}
    }

  }

const services = [
  'AI Development','Cloud Architecture','Digital Transformation','IoT Platforms','Blockchain Solutions','Data Analytics','Other'];

const contactInfo = [
  {icon: Mail,title: 'Email Us'}
  content: 'contact@ziontechgroup && ziontechgroup.com',href: 'mailto:contact@ziontechgroup && ziontechgroup.com'},    {icon: Phone,title: 'Call Us'}
  content: '+1 (555) 123-4567',      href: 'mailto:contact@ziontechgroup && ziontechgroup.com';}
}{icon: Phone,title: 'Call Us'}
  content: '+1 (555) 123-4567',href: 'tel:+15551234567'},    {icon: MapPin,title: 'Visit Us'}
  content: '123 Tech Street, Innovation City, IC 12345',href: '#'},return (<section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'    />;
      {/* Background Elements */}<div className='absolute inset-0'    />;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]'    />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]'    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>
      <div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      </div>;

      <div className='relative container mx-auto px-4'    />        {/* Section Header */}      <div className=\"relative container mx-auto px-4\"    />
];

;

<<<<<<< HEAD
      icon: Mail,
      title: 'Email Us',
      content: 'contact@ziontechgroup.com',
<<<<<<< HEAD
href: 'mailto:contact@ziontechgroup.com',
=======
const contact_info = [
  {

      icon: Mail,
      title: 'Email Us',
  content: 'contact@ziontechgroup.com'}
href: 'mailto:contact@ziontechgroup.com'}
>>>>>>> origin/chore/fix-lint-and-merge
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        >
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Let&apos;s Start a
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Conversation
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Ready to transform your business? Get in touch with our team of
            experts to discuss how we can help you achieve your technology
            goals.
          </p>
        </motion.div>

          className="text-center mb-16"
        >

<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}        >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Let&apos,s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss
            how we can help you achieve your technology goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
<<<<<<< HEAD
=======


          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
            Let&apos;s Start a;
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>;
              Conversation;
            </span>;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
      href: 'mailto:contact@ziontechgroup.com',
    },    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123 - 4567',      href: 'mailto:contact@ziontechgroup.com';
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {
      icon: Phone,
      title: 'Call Us',
<<<<<<< HEAD
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
=======
  content: '+1 (555) 123-4567'}
href: 'tel:+15551234567'}
>>>>>>> origin/chore/fix-lint-and-merge
    },
    {
      icon: MapPin,
      title: 'Visit Us',
<<<<<<< HEAD
      content: '123 Tech Street, Innovation City, IC 12345',
      href: '#'
    }
  ],
=======
  content: '123 Tech Street, Innovation City, IC 12345'}
href: '#'}
    }
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'    />
>>>>>>> origin/chore/fix-lint-and-merge

  return (
      </div>;<div className='relative container mx-auto px-4'>        {/* Section Header */}      <div className="relative container mx-auto px-4">;];const contact_info = [;
    {icon: Mail;
      title: 'Email Us';
      content: 'contact@ziontechgroup.com';
      href: 'mailto:contact@ziontechgroup.com';
      icon: Mail,title: 'Email Us',content: 'contact@ziontechgroup.com',href: 'mailto:contact@ziontechgroup.com',},{icon: Phone,title: 'Call Us',content: '+1 (555) 123-4567',href: 'tel:+15551234567',},{icon: MapPin,title: 'Visit Us',content: '123 Tech Street, Innovation City, IC 12345',href: '#',},];return (<section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>;
      {/* Background Elements */}
<<<<<<< HEAD
      <div className='absolute inset-0'>;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]' />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />;
      </div>;
      <div className='relative container mx-auto px-4'>;
        {/* Section Header */}
        <motion.div;
href: '#',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]' />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>

      <div className='relative container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      icon: Mail
      title: 'Email Us'
      content: 'contact@ziontechgroup.com'
      href: 'mailto:contact@ziontechgroup.com'
=======
      <div className='absolute inset-0'    />;
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]'    />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]'    />;
      </div>;
      <div className='relative container mx-auto px-4'    />;
        {/* Section Header */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }
}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }
}
>>>>>>> origin/chore/fix-lint-and-merge

className='text-center mb-16'
            />
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'    />
            Let&apos;s Start a;
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'    />
              Conversation;
<<<<<<< HEAD
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'    />
=======
            </span>;
          </h2>;
          <p className='text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Ready to transform your business? Get in touch with our team of;
experts to discuss how we can help you achieve your technology;
goals.
          </p>
        </motion.div>
>>>>>>> merged-prs-20250907-203621

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Let&apos,s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true}}
=======
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg: grid-cols-2 gap-12 max-w-7xl mx-auto'    />
          {/* Contact Information *}
}

          <motion.div;
          <motion&& motion.div;
initial={{ opacity: 0, x: -30 }
}
            whileInView={{ opacity: 1, x: 0 }
}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Contact Information */}
          <motion&& motion.div


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}

          {/* Contact Information */}


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
<<<<<<< HEAD
                Our team is here to help you navigate the complex world of technology and find 
                the perfect solutions for your business needs. Reach out to us today.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true}}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
=======
              Conversation
            </span>
          </h2>
          
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;>
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto&quot;>
          {/* Contact Information */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>          {/* Contact Information */}

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Get in Touch
              </h3>
              <p className='text-gray-300 leading-relaxed mb-8'>
                Our team is here to help you navigate the complex world of
                technology and find the perfect solutions for your business
                needs. Reach out to us today.              </p>
            </div>
            {/* Contact Details */}
            <div className='space-y-6'>              {contactInfo.map((info, index) => (              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you navigate the complex world of technology and find
                the perfect solutions for your business needs. Reach out to us today.
            </div>
=======

className='space-y-8'
              />
            <div    />
              <h3 className='text-2xl font-bold text-white mb-6'    />
                Get in Touch;
<<<<<<< HEAD
              </h3>
              <p className='text-gray-300 leading-relaxed mb-8'    />
                Our team is here to help you navigate the complex world of;
technology and find the perfect solutions for your business;
needs. Reach out to us today.
              </p>
            </div>

            {/* Contact Details *}
}
<div className='space-y-6'    />;
              {contactInfo.map((info, index) => (<motion.a;}
=======
              </h3>;
              <p className='text-gray-300 leading-relaxed mb-8'>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </motion.div>;
        <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 12 max - w-7xl mx - auto'>          {/* Contact Information */}        >;
          <h2 className="text - 4xl md: text - 6xl font - bold text - white mb - 6">;
            Let & apos, s Start a;
            <span className="block bg - gradient - to - r from - blue - 400 to - purple - 400 bg - clip - text text - transparent">;
              Conversation;
            </span>;
          </h2>;
          <p className="text - xl text - gray - 300 max - w-3xl mx - auto leading - relaxed">;
            Ready to transform your business? Get in touch with our team of experts to discuss;
            how we can help you achieve your technology goals.;
          </p>;
        </motion.div>;
        <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12 max - w-7xl mx - auto">;
          {/* Contact Information */}
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -30 }}
            whileInView={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='space - y-8';
          >;
            <div>;
              <h3 className='text - 2xl font - bold text - white mb - 6'>;
                Get in Touch;
              </h3>;
              <p className='text - gray - 300 leading - relaxed mb - 8'>;
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Our team is here to help you navigate the complex world of;
                technology and find the perfect solutions for your business;
                needs. Reach out to us today.              </p>;
            </div>;
<<<<<<< HEAD
            <div className="space-y-6">
            <div className="space-y-6">
            {/* Contact Details */}
            <div className='space-y-6'>            <div className="space-y-6">
=======


            {/* Contact Details */}
            <div className='space-y-6'>            <div className="space-y-6">;
              {contactInfo && contactInfo.map((info, index) => (;
                <motion&& motion.a
                  key={info && info.title}
                  href={info && info.href}

=======
            <div className="space-y-6">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {contactInfo.map((info, index) => (
                <motion.a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  key={info.title}
<<<<<<< HEAD
                  href={info.href}
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  href={info.href}initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">;
                    <info.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>;
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">;
className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group';
                >;
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>;
                    <info.icon className='w-6 h-6 text-white' />;
                  </div>;
                  <div>;
                    <h4 className='text-lg font-semibold text-white mb-1'>;
                      {info.title}
                    </h4>;
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>;
=======
>>>>>>> origin/chore/fix-lint-and-merge

                  href={info.href}
                  initial={{ opacity: 0, x: -20 }
}
                  whileInView={{ opacity: 1, x: 0 }
}
                  transition={{ duration: 0 && 0.6, delay: 0 && 0.3 + index * 0 && 0.1 }}
                  viewport={{ once: true }}

<<<<<<< HEAD
className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'
                    />
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'    />
                    <info.icon className='w-6 h-6 text-white'    />
=======
                >
<<<<<<< HEAD
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'

                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'>                      {info.content}                >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>
<<<<<<< HEAD
                  <div>
>>>>>>> merged-prs-20250907-203621
                    <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
<<<<<<< HEAD
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true}}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
            >
=======
<<<<<<< HEAD
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true}}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
=======
                  <div    />
                    <h4 className='text-lg font-semibold text-white mb-1'    />
                      {info.title}
                    </h4>
                    <p className='text-gray-300 group-hover:text-blue-400 transition-colors duration-300'    />

                      {info.conten}
}
                    </p>;
                  </div>;
                </motion.a>;
              ))}
            </div>;
                  className='flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group'>;
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'    />;
                    <info && info.icon className='w-6 h-6 text-white'    />;
                  </div>;
                  <div    />;
                    <h4 className='text-lg font-semibold text-white mb-1'    />;
                      {info && info.title}
                    </h4>;
                    <p className='text-gray-300 group-hover: text-blue-400 transition-colors duration-300'    />                      {info && info.conten}
}                >;"
                  <div className=\"w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300\"    />;"
                    <info && info.icon className=\"w-6 h-6 text-white\"    />;
                  </div>;
                  <div    />;"
                    <h4 className=\"text-lg font-semibold text-white mb-1\"    />{info && info.title}</h4>;"
                    <p className=\"text-gray-300 group-hover:text-blue-400 transition-colors duration-300\"    />;
                      {info && info.content}
                    </p>;
                  </div>;
                </motion && motion.a>;
>>>>>>> origin/chore/fix-lint-and-merge
              ))}
            {/* Additional Info */}
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }
}
              whileInView={{ opacity: 1, y: 0 }
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </div>;





            {/* Additional Info */}
            <motion&& motion.div
<<<<<<< HEAD
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              transition={{ duration: 0 && 0.6, delay: 0 && 0.6 }}

              viewport={{ once: true }}
<<<<<<< HEAD
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
            >
              className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6'
            >
              <h4 className='text-lg font-semibold text-white mb-3'>
                Why Choose Zion Tech?
              </h4>
              <ul className='space-y-2 text-gray-300'>            >
>>>>>>> merged-prs-20250907-203621
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support and maintenance</span>
                </li>
<<<<<<< HEAD
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
=======
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />                  <span>Competitive pricing and flexible solutions</span>                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>





          {/* Contact Form */}
          <motion&& motion.div

          {/* Contact Form */}
          <motion.div
=======

className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6'
                />
              <h4 className='text-lg font-semibold text-white mb-3'    />
                Why Choose Zion Tech?
              </h4>
              <ul className='space-y-2 text-gray-300'    />
                <li className='flex items-center space-x-2'    />
                  <CheckCircle className='w-5 h-5 text-green-400'    />
                  <span    />Expert team with 10+ years experience</span>
                </li>
                <li className='flex items-center space-x-2'    />
                  <CheckCircle className='w-5 h-5 text-green-400'    />
                  <span    />Proven track record of successful projects</span>
                </li>
                <li className='flex items-center space-x-2'    />
                  <CheckCircle className='w-5 h-5 text-green-400'    />
                  <span    />24/7 support and maintenance</span>
                </li>
<<<<<<< HEAD
                <li className='flex items-center space-x-2'>'
                  <CheckCircle className='w-5 h-5 text-green-400' />'
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ','
    email: ,'
    company: ',
    phone: '',
    service: ','
    message: ,
  AlertCircle,
} from 'lucide-react';

  AlertCircle;
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  CheckCircle,
  AlertCircle} from lucide-react;import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

  const [formData, setFormData] = useState({})
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus(success);
      setFormData({
        name: '',
        email: ,
        company: '',
        phone: ,
        service: '',
        message: });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);    }
    } finally {
      setIsSubmitting(false)
    }
import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,use client;
import React, { useState  } from 'react';
import { motion  } from framer-motion;
import { Mail;
  Phone;
  MapPin;
  Send;
  CheckCircle;
  AlertCircle;import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,CheckCircle,AlertCircle} from 'lucide-react';import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle  } from lucide-react;
const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: '',email: ,company: '',phone: ,service: '',message: ,AlertCircle} from 'lucide-react';const ContactForm: React.FC = () => {const [formData, setFormData] = useState({name: ,email: '',company: ,phone: '',service: ,message: ''})const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus] = useState<;
    idle | 'success' | error;
  >('idle')...formData;
      [e && e.target.name]: e && e.target.value;
    })}// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus(success)setFormData({name: '',email: ,company: '',phone: ,service: '',message: ,const handleChange = (e: React.ChangeEvent<;
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    >;
  ) => {setFormData({...formData,[e.target.name]: e.target.value})}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)// Simulate API call;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: ,email: '',company: ,phone: '',service: ,message: ''})} catch (error) {setSubmitStatus(error)} finally {setIsSubmitting(false)}
    } finally {setIsSubmitting(false)} finally {setIsSubmitting(false)}
  }
'AI Development',Cloud Architecture,'Digital Transformation',IoT Platforms,'Blockchain Solutions',Data Analytics,'Other'];const contactInfo = [;
    {icon: Mail,title: Email Us,content: 'contact@ziontechgroup && ziontechgroup.com',href: mailto:contact@ziontechgroup && ziontechgroup.com},    {icon: Phone,title: 'Call Us',content: +1 (555) 123-4567,      href: 'mailto:contact@ziontechgroup && ziontechgroup.com';
}{icon: Phone,title: Call Us,content: '+1 (555) 123-4567',href: tel:+15551234567},    {icon: MapPin,title: 'Visit Us',content: 123 Tech Street, Innovation City, IC 12345,href: '#'},return (<section className=py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden>;
      {/* Background Elements */}<div className='absolute inset-0'>;
        <div className=absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)] />;
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)]' />;
        message: 
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }

  ];

    {
      icon: Mail,
      title: Email Us','
      content: contact@ziontechgroup && ziontechgroup.com,'
      href: 'mailto:contact@ziontechgroup && ziontechgroup.com},    {

    {
      icon: Phone,
      title: 'Call Us',
      content: +1 (555) 123-4567','
      href: tel:+15551234567},    {
      icon: MapPin,'
      title: 'Visit Us,
      content: '123 Tech Street, Innovation City, IC 12345',
      href: #'},


    <section className='py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden>
      {/* Background Elements */}

      <div className='absolute inset-0'>;
        <div className=absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;'
        <div className=absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0 && 0.1),transparent_50%)] />;
      </div>;
'
      <div className='relative container mx-auto px-4>        {/* Section Header */}      <div className="relative container mx-auto px-4>;

  ];
    {}
      icon: Mail
      title: 'Email Us'
      content: contact@ziontechgroup.com''
      href: mailto:contact@ziontechgroup.com


    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 123 Tech Street, Innovation City, IC 12345,

        {/* Section Header */}
        <motion.div;
href: '#'}];

  return (
    <section className=py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className=absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)] />
        <div className='absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]' />
      </div>

      <div className=relative container mx-auto px-4>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

                      {info.content}
                    </p>
                  </div>
                </motion.a>

              ))}
            </div>

            {/* Additional Info */}

>>>>>>> merged-prs-20250907-203621
                  <span>Competitive pricing and flexible solutions</span>
=======
                <li className='flex items-center space-x-2'    />
                  <CheckCircle className='w-5 h-5 text-green-400'    />
                  <span    />Competitive pricing and flexible solutions</span>
>>>>>>> origin/chore/fix-lint-and-merge
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, x: 30}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true}}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1}}
                className="text-center py-12"
              >
=======
=======

<<<<<<< HEAD
          {/* Contact Form *}
}
>>>>>>> origin/chore/fix-lint-and-merge
          <motion&& motion.div;
            initial={{ opacity: 0, x: 30 }
}
            whileInView={{ opacity: 1, x: 0 }
}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Contact Form */}
          <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}

<<<<<<< HEAD
<<<<<<< HEAD
=======
            viewport={{ once: true }
}
>>>>>>> origin/chore/fix-lint-and-merge
=======
            className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'          >            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'          >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
              />
            {submitStatus === 'success' ? (
              <motion.div;}
initial={{ opacity: 0, scale: 0.8 }
}
                animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD

<<<<<<< HEAD
className='text-center py-12''
=======
<<<<<<< HEAD
                className='text-center py-12'
=======
                className="text-center py-12"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              >
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Message Sent Successfully!
                </h3>
                <p className='text-gray-300 mb-6'>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'                >              >
>>>>>>> merged-prs-20250907-203621
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
<<<<<<< HEAD
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
=======
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            {submitStatus === 'success' ? (
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}"
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />"
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>"
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button'
                  onClick={() => setSubmitStatus('idle')}"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
className='text-center py-12'
              >
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
=======
className='text-center py-12'
                  />
                <CheckCircle className='w-20 h-20 text-green-400 mx-auto mb-6'    />
                <h3 className='text-2xl font-bold text-white mb-4'    />
>>>>>>> origin/chore/fix-lint-and-merge
                  Message Sent Successfully!
                </h3>
                <p className='text-gray-300 mb-6'    />
                  Thank you for reaching out. Our team will get back to you;
within 24 hours.
                </p>
<<<<<<< HEAD
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                <button;
onClick={() =    /> setSubmitStatus('idle')}
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300'
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
                >
                  Send Another Message;
                </button>
              </motion.div>
            ) : (
<<<<<<< HEAD
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
=======
<<<<<<< HEAD

<form onSubmit={handleSubmit} className='space-y-6'    />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'    />
                  <div    />
                    <label;
htmlFor='name'
                      className='block text-white font-medium mb-2'
                        />
                      Full Name *
                    </label>
                    <input;
type='text'
                      id='name'
                      name='name'
                    <input;
type='email'
                      id='email'
                      name='email'
=======
<<<<<<< HEAD
=======
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2" htmlFor="input-
                      Full Name *
                    ">
>>>>>>> merged-prs-20250907-203621
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
<<<<<<< HEAD
                    />
                  </div>
                  
=======
                    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-white font-medium mb-2'
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your full name'                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-white font-medium mb-2'
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter your email'                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      value={formData.email}

<<<<<<< HEAD
                      onChange={handleChang}
}
                      required;
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors';
                      placeholder='Enter your email';
                       />;
                  </div>;
                </div>;
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'    />;
                  <div    />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      placeholder='Enter your email'                    />;
                  </div>;
                </div>;
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Contact Details */}
            <div className='space - y-6'>              {contact_info.map ((info, index) => (              <h3 className="text - 2xl font - bold text - white mb - 6">Get in Touch</h3>;
              <p className="text - gray - 300 leading - relaxed mb - 8">;
                Our team is here to help you navigate the complex world of technology and find;
                the perfect solutions for your business needs. Reach out to us today.;
            </div>;
            {/* Contact Details */}
            <div className='space - y-6'>            <div className="space - y-6">;
              {contact_info.map ((info, index) => (
                <motion.a;
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, coordinate_x: -20 }}
                  whileInView={{ opacity: 1, coordinate_x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items - start space - x-4 p - 4 rounded - xl bg - white / 5 border border - white / 10 hover:border - blue - 500 / 30 transition - all duration - 300 group';
                >;
                  <div className='w - 12 h - 12 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - xl flex items - center justify - center flex - shrink - 0 group - hover:scale - 110 transition - transform duration - 300'>;
                    <info.icon className='w - 6 h - 6 text - white' />;
                  </div>;
                  <div>;
                    <h4 className='text - lg font - semibold text - white mb - 1'>;
                      {info.title}
                    </h4>;
                    <p className='text - gray - 300 group - hover:text - blue - 400 transition - colors duration - 300'>                      {info.content}                >;
                  <div className="w - 12 h - 12 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - xl flex items - center justify - center flex - shrink - 0 group - hover:scale - 110 transition - transform duration - 300">;
                    <info.icon className="w - 6 h - 6 text - white" />;
                  </div>;
                  <div>;
                    <h4 className="text - lg font - semibold text - white mb - 1">{info.title}</h4>;
                    <p className="text - gray - 300 group - hover:text - blue - 400 transition - colors duration - 300">;
                      {info.content}
                    </p>;
                  </div>;
                </motion.a>))}
            </div>;
            {/* Additional Info */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className='bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border border - blue - 500 / 30 rounded - xl p - 6';
            >;
              <h4 className='text - lg font - semibold text - white mb - 3'>;
                Why Choose Zion Tech?;
              </h4>;
              <ul className='space - y-2 text - gray - 300'>            >;
              <h4 className="text - lg font - semibold text - white mb - 3">Why Choose Zion Tech?</h4>;
              <ul className="space - y-2 text - gray - 300">;
                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > Expert team with 10+ years experience</span>;
                </li>;
                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > Proven track record of successful projects</span>;
                </li>;
                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > 24 / 7 support and maintenance</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                  <span > Expert team with 10+ years experience</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                  <span > Proven track record of successful projects</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                  <span > 24 / 7 support and maintenance</span>;
                </li>;
                <li className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 5 h - 5 text - green - 400' />                  <span > Competitive pricing and flexible solutions</span>                <li className="flex items - center space - x-2">;
                  <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                  <span > Competitive pricing and flexible solutions</span>;
                </li>;
              </ul>;
            </motion.div>;
          </motion.div>;
          {/* Contact Form */}
          <motion.div;
            initial={{ opacity: 0, coordinate_x: 30 }}
            whileInView={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8'          >            className="bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 800 rounded - 2xl p - 8";
          >;
            {submit_status === 'success' ? (
              <motion.div;
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text - center py - 12';
              >;
                <CheckCircle className='w - 20 h - 20 text - green - 400 mx - auto mb - 6' />;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  Message Sent Successfully!;
                </h3>;
                <p className='text - gray - 300 mb - 6'>;
                  Thank you for reaching out. Our team will get back to you;
                  within 24 hours.;
                </p>;
                <button;
                  on_click={() => setSubmitStatus ('idle')}
                  className='bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300'                >              >;
                <CheckCircle className="w - 20 h - 20 text - green - 400 mx - auto mb - 6" />;
                <h3 className="text - 2xl font - bold text - white mb - 4">Message Sent Successfully!</h3>;
                <p className="text - gray - 300 mb - 6">;
                  Thank you for reaching out. Our team will get back to you within 24 hours.;
                </p>;
                <button;
                  on_click={() => setSubmitStatus ('idle')}
                  className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 6 py - 3 rounded - lg font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300";
                >;
                  Send Another Message;
                </button>;
              </motion.div>) : (
              <form on_submit={handle_submit} className='space - y-6'>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
                  <div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <label;
                      htmlFor='company';
                      className='block text-white font-medium mb-2'    />

                      Company;
                    </label>;
                    <input;
                      type='text';
                      id='company';
                      name='company';
                      value={formData.company}
                      onChange={handleChange}
<<<<<<< HEAD
                    <label
                      htmlFor='phone'
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors';
                      placeholder='Enter company name'                    />;
                  </div>;
                  <div>;
                    <label;
<<<<<<< HEAD
                      htmlFor='phone';
                    />
              <form onSubmit={handleSubmit} className='space-y-6'>
<form onSubmit={handleSubmit} className='space-y-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
>>>>>>> merged-prs-20250907-203621
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
<<<<<<< HEAD
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
=======
                    <input'
                      type='text''
                      id='name''
                      name='name'
                    <input'
                      type='email''
                      id='email''
                      name='email'
                  </div>
                </div>'"
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors""
                      placeholder="Enter your email"

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label
                      htmlFor='name'
                      className=block text-white font-medium mb-2'
                    >
                      Full Name *
                    </label>
                    <input'
                      type=text'
                      id='name
                      name='name'
                    <input
                      type=email''
                      id=email'
                      name='email
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder=Enter your email"
                    />
                  </div>
                </div>"
                      placeholder=Enter your email;
                    />;
                  </div>;
                </div>;
                      value={formData.email}
=======
                      html_for='email';
                      className='block text - white font - medium mb - 2';
                    >;
                      Email Address *;
                    </label>;
                    <input;
                      type='email';
                      id='email';
                      name='email';
                      value={form_data.email}
                      on_change={handle_change}
                      required;
                      className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors';
                      placeholder='Enter your email'                    />;
                  </div>;
                </div>;
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>                      className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors";
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      placeholder="Enter your email";
                    />;
                  </div>;
                </div>;
<<<<<<< HEAD
                      placeholder='Enter company name'                    />;
                  </div>;
                  <div>;
=======


                    <label
                      htmlFor='company'
                      className='block text-white font-medium mb-2'>;
                      Company;
                    </label>;
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData && formData.company}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      onChange={handleChange}
                      required
=======

>>>>>>> origin/chore/fix-lint-and-merge
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
                      placeholder='Enter company name'                       />
                  </div>
                  <div    />
                    <label;
htmlFor='phone'

<<<<<<< HEAD
<<<<<<< HEAD
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 "focus":outline-none "focus":border-blue-500 transition-colors''
                      placeholder='Enter company name' />'
                  </div>
                  <div>
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <label
                      htmlFor='phone'
                      className='block text-white font-medium mb-2'>;
                      Phone Number;
                    </label>;
                    <input'
                      type='tel
                      id='phone'
                      name=phone'
                      value={formData && formData.phone}
                      onChange={handleChange}


                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors';
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors'
<<<<<<< HEAD
                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors';
=======
<<<<<<< HEAD
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2" htmlFor="input-
                      Company
                    ">
>>>>>>> merged-prs-20250907-203621
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>
<<<<<<< HEAD
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
=======
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2" htmlFor="input-
                      Phone Number
                    ">
>>>>>>> merged-prs-20250907-203621
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter phone number"
                    />
<<<<<<< HEAD
=======
                  </div>
                </div>
                <div>
                      placeholder='Enter phone number'                    />                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors";
                <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 6'>;
                  <div>;
                    <label;
                      html_for='company';
                      className='block text - white font - medium mb - 2';
                    >;
                      Company;
                    </label>;
                    <input;
                      type='text';
                      id='company';
                      name='company';
                      value={form_data.company}
                      on_change={handle_change}
                      className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors';
                      placeholder='Enter company name'                    />;
                  </div>;
                  <div>;
                    <label;
                      html_for='phone';
                      className='block text - white font - medium mb - 2';
                    >;
                      Phone Number;
                    </label>;
                    <input;
                      type='tel';
                      id='phone';
                      name='phone';
                      value={form_data.phone}
                      on_change={handle_change}
                      className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors';
                      placeholder='Enter phone number'                    />                      className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      placeholder="Enter phone number";
                    />;
                  </div>;
                </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


                  <label
                    htmlFor='service'
                    className='block text-white font-medium mb-2'>;
                    Service of Interest;
                  </label>;
                  <select
                    id='service'
                    name='service'
                    value={formData && formData.service}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'>;
                    <option value=''>Select a service</option>;
                    {services && services.map(service => (;
                      <option
                        key={service}
                        value={service}
                        className='bg-gray-800 text-white'>                        {service}                    Service of Interest;
                  </label>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <label htmlFor="service" className="block text-white font-medium mb-2" htmlFor="input-
                    Service of Interest
                  ">
                    Service of Interest
                  </label>
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <select
                    id="service"
                    name="service"
                    value={formData && formData.service}
                    onChange={handleChange}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800 text-white">
                        {service}
                      </option>;
                    ))}
                  </select>
                </div>
                <div>
=======


                        {service}
                      </option>;
                    ))}

                  </select>;
                </div>;

                <div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <label
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea
                    id='message'
                  </select>;
                </div>;
                <div>;
<label;
                    htmlFor='message';
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea;
                    id='message';
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none';
                    name='message';
                    value={formData.message}
                  <label
                      placeholder='Enter phone number'
                    />
>>>>>>> merged-prs-20250907-203621
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
<<<<<<< HEAD
                  <select
=======
                  <select,
id='service''
                    name='service''

                    value={formData.service}
                    onChange={handleChang
}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white 'focus':outline-none 'focus':border-blue-500 transition-colors'>'

                    <option value=''>Select a service</option>;'
                    {services.map(service => { return (<option; }
                        }
                        key={service}
                        value={service}
                        className='bg-gray-800 text-white'>'

                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
<label
origin/cursor/automate-test-improve-and-merge-code-2533
                    htmlFor='message'
                    className='block text-white font-medium mb-2'>;
                    Message *;
                  </label>;
                  <textarea'
                    id='message''
                    name='message'                    value={formData && formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}'
                    className=w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
<<<<<<< HEAD
=======

<<<<<<< HEAD
                    placeholder='Tell us about your project or inquiry...'                  />                  <label htmlFor="message" className="block text-white font-medium mb-2" htmlFor="input-
                    Message *
                  ">;
                    Message *;
                  </label>;
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    placeholder='Tell us about your project or inquiry...'                  />

                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  />
                </div>'
                {submitStatus === 'error' && (
                  <motion.div
<<<<<<< HEAD
className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none';
                    placeholder='Tell us about your project or inquiry...';
                  />;
                </div>;
                {submitStatus === 'error' && (<motion.div;
                  />;
                </div>;{submitStatus === 'error' && (<motion&& motion.div;
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
className='flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4'
                  >
                    <AlertCircle className='w-5 h-5' />'
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
=======
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  />;
                </div>;
                {submitStatus === 'error' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
                <button
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                
}
                <button;

                )}
                <button
<<<<<<< HEAD
type='submit'
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  type="submit"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />'
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
<<<<<<< HEAD

                      <span>Send Message</span>
                    </>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
                      <Send className='w-5 h-5' />                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
=======
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  )}
</button>;
              </form>;
            )}
<<<<<<< HEAD
          </motion.div>
        </div>
      </div>
    </section>
=======


<<<<<<< HEAD
export default ContactForm;
origin/cursor/automate-test-improve-and-merge-code-2533
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2';
                >;
                  {isSubmitting ? (<>;
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />;
                      <span>Sending...</span>;
                    </>;
                  ) : (<>;
<Send className='w-5 h-5' />;
                      <span>Send Message</span>;
                    </>;
                  )}
                </button>;
              </form>;
            )}export default ContactForm;
=======
};
export default ContactForm;  );
};
export default ContactForm;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div>;
                  <label;
                    html_for='service';
                    className='block text - white font - medium mb - 2';
                  >;
                    Service of Interest;
                  </label>;
=======
                      className='block text-white font-medium mb-2'    />;
                      Phone Number;
                    </label>;
                    <input;
                      type='tel';
                      id='phone';
                      name='phone';
                      value={formData && formData.phone}
                      onChange={handleChange}

                      className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-blue-500 transition-colors'

                      placeholder='Enter phone number'
                       />
                  </div>
                </div>
                <div    />
<label;
htmlFor='service'
                    className='block text-white font-medium mb-2'
                      />
                    Service of Interest;
                  </label>
>>>>>>> origin/chore/fix-lint-and-merge
                  <select;
id='service'
                    name='service'

                    value={formData.service}
                    onChange={handleChang}
}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'    />

                    <option value=''    />Select a service</option>;
                    {services.map(service => (<option;}
                        key={service}
                        value={service}
<<<<<<< HEAD
                        className='bg - gray - 800 text - white';
                      >                        {service}                    Service of Interest;
                  </label>;
                  <select;
                    id='service';
                    name='service';
                    value={form_data.service}
                    on_change={handle_change}
                    className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white focus:outline - none focus:border - blue-500 transition-colors';
                  >;
                    <option value="">Select a service</option>;
                    {services.map ((service) => (<option key={service} value={service} className="bg - gray-800 text-white">;
                        {service}
                      </option>))}
                  </select>;
                </div>;
                <div>;
                  <label;
                    html_for='message';
                    className='block text - white font - medium mb - 2';
                  >;
                    Message *;
                  </label>;
                  <textarea;
                    id='message';
                    name='message'                    value={form_data.message}
                    on_change={handle_change}
                    required;
                    rows={5}
                    className=w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors resize - none';
                    placeholder='Tell us about your project or inquiry...                  />                  <label html_for="message" className=block text - white font-medium mb-2 html_for="input-;
                    Message *;
                  ">;
                    Message *;
                  </label>;
                  <textarea;
                    id=message";"
                    name=message;
                    on_change={handle_change}
                    required;

                    placeholder="Tell us about your project or inquiry...";
                  />;
                </div>;
                {submit_status === 'error' && (<motion.div;
                    initial={ opacity: 0, coordinate_y: -10 }
                    animate={ opacity: 1, coordinate_y: 0 }
                    className='flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded - lg p - 4';
                  ">;
                    Message *;
                  </label>;
                  <textarea;'
                    id='message';'
                    name='message';
                    on_change={handle_change}
                    required;
                    rows={5}
                    className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition - colors resize - none';
                    placeholder='Tell us about your project or inquiry...'                    className="w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:border - blue - 500 transition-colors resize-none";
                    placeholder="Tell us about your project or inquiry...";
                  />;
                </div>;'
                {submit_status === 'error' && (
                  <motion.div;
                    initial={ opacity: 0, coordinate_y: -10 }
                    animate={ opacity: 1, coordinate_y: 0 }'
                    className='flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded - lg p - 4';
                  >;
                    <AlertCircle className='w - 5 h - 5' />                    <span > Something went wrong. Please try again.</span>                    className='flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded-lg p-4';
                  >;
                    <AlertCircle className="w-5 h-5" />;
                    <span > Something went wrong. Please try again.</span>;
                  </motion.div>)}
                <button;
                  type='submit';
                  disabled={is_submitting}
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify - center space - x-2';
                >;
                  {is_submitting ? (<>;
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded - full animate - spin' />                      <span > Sending...</span>;
                    </>) : (<>;
                      <Send className='w - 5 h - 5' />                      <span > Send Message</span>                  disabled={is_submitting}
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify-center space-x-2';
                >;
                  {is_submitting ? (<>;
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded-full animate-spin' />;
                      <span > Sending...</span>;
                    </>) : (<>;
                      <Send className='w - 5 h - 5' />                      <Send className="w-5 h-5" />;
                    <span > Something went wrong. Please try again.</span>;
                  </motion.div>)}
                <button;'
                  type=submit;
                  disabled={is_submitting}'
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify - center space - x-2;
                >;
                  {is_submitting ? (
                    <>;
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded - full animate - spin' />                      <span > Sending...</span>;
                    </>) : (
                    <>;
                      <Send className='w - 5 h - 5' />                      <span > Send Message</span>                  disabled={is_submitting}
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify-center space-x-2';
                >;
                  {is_submitting ? (
                    <>;
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded-full animate-spin' />;
                      <span > Sending...</span>;
                    </>) : (
                    <>;
                      <Send className='w - 5 h - 5' />                      <Send className="w-5 h-5" />;
                      <span > Send Message</span>;
                    </>)}
                </button>;
              </form>)}
          </motion.div>;
        </div>;
      </div>;
    </section>)}export default ContactForm)}export default ContactForm;)export default ContactForm;  )}
export default ContactForm;export default ContactForm;</motion.div>;
        </div>;
      </div>;
    </section>;
    </section>);
}
export default ContactForm);
}
export default ContactForm;
<<<<<<< HEAD
  );
export default ContactForm;  )
}
export default ContactForm;
=======
;
<<<<<<< HEAD
  );
  );
}
};

export default ContactForm;  )
}
export default ContactForm;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default ContactForm;
)}export default ContactForm;
>>>>>>> merged-prs-20250907-203621
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors'
                  >
                    <option value=''>Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-800 text-white">
=======
                        className='bg-gray-800 text-white'    />

>>>>>>> origin/chore/fix-lint-and-merge
                        {service}
                      </option>;
                    ))}

                  </select>
                </div>
                <div    />
<label;
htmlFor='message'
                    className='block text-white font-medium mb-2'    />;
                    Message *;
                  </label>;
                  <textarea;
id='message'

                    name='message'

                    value={formData.message}
                    onChange={handleChange}
                    required;
                    rows={5}

<<<<<<< HEAD
                {submitStatus === 'error' && (
                  <motion.div
<<<<<<< HEAD
=======
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0}}
                    className = $2;
export default ContactForm,
=======
className='w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none'
                    placeholder='Tell us about your project or inquiry...'
>>>>>>> merged-prs-20250907-203621
                     />
                </div>
                {submitStatus === 'error' && (
                  <motion.div;
                     />;
                </div>;
                {submitStatus === 'error' && (<motion.div;
                     />;
                </div>;{submitStatus === 'error' && (<motion&& motion.div;}
                    initial={{ opacity: 0, y: -10 }
}

                    animate={ opacity: 1, y: 0 }

className='flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4'
                      />
                    <AlertCircle className='w-5 h-5'    />
                    <span    />Something went wrong. Please try again.</span>
                  </motion.div>

                
}
                <button;
type='submit';
                  disabled={isSubmitting}

                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2'
                    />
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'    />
                      <span    />Sending...</span>
                    <   />
                  ) : (
                    <>
<Send className='w-5 h-5'    />
                      <span    />Send Message</span>
                    <   />}
                  }
}
                </button>;
              </form>;
            )}

<<<<<<< HEAD
export default ContactForm
                <div>
                  <label;'
                    html_for='service';'
                    className='block text - white font - medium mb - 2'
                  >
                    Service of Interest
                  </label>
                  <select;'
                    id='service';'
                    name='service'
                    value={form_data.service}
                    on_change={handle_change}'
                    className='w - full px - 4 py - 3 bg - white / 10 border border - gray - 700 rounded - lg text - white focus:outline - none focus:border - blue - 500 transition - colors'
                  >;'
                    <option value=''>Select a service</option>
                    {services.map (service => (
                      <option
                        key={service}
                        value={service}'
                        className='bg - gray - 800 text - white'
                      >                        {service}                    Service of Interest
                  </label>
                  <select;'
                    id='service';'
                    name='service'
                    value={form_data.service}

                        {service}
                      </option>))}
                  </select>
                </div>
                <div>
                  <label;'
                    html_for='message';'
                    className='block text - white font - medium mb - 2'
                  >
                    Message *
                  </label>
                  <textarea;'
                    id='message';'
                    name='message'                    value={form_data.message}
                    on_change={handle_change}
                    required
                  '>
                    Message *
                  </label>
                  <textarea;'
                    id='message';'
                    name='message'
                    on_change={handle_change}
                    required
                    placeholder='Tell us about your project or inquiry...'
                  />
                </div>;'
                {submit_status === 'error' && (
                  <motion.div
                    initial={ opacity: 0, coordinate_y: -10 }
                    animate={ opacity: 1, coordinate_y: 0 }'
                    className='flex items - center space - x-2 text - red - 400 bg - red - 400 / 10 border border - red - 400 / 20 rounded - lg p - 4'
                    <span > Something went wrong. Please try again.</span>
                  </motion.div>)}
                <button;'
                  type='submit'
                  disabled={is_submitting}'
                  className='w - full bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 4 rounded - xl font - semibold text - lg hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1 disabled:opacity - 50 disabled:cursor - not - allowed disabled:transform - none flex items - center justify - center space - x-2'
                >
                  {is_submitting ? (
                    <>;'
                      <div className='w - 5 h - 5 border - 2 border - white / 30 border - t-white rounded - full animate - spin' />                      <span > Sending...</span>
                    </>) : (

                      <span > Send Message</span>
                    </>)}
                </button>
              </form>)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;  )
}
export default ContactForm;

"
<<<<<<< HEAD
=======
);
}
export default ContactForm;
origin/cursor/automate-test-improve-and-merge-code-2533
'"
=======
)
};


<<<<<<< HEAD
export default ContactForm;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
export default ContactForm;
export default ContactForm;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
