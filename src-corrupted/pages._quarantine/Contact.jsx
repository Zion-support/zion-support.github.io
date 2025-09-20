<<<<<<< HEAD
import React from 'react',

const Contact: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">Contact</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default Contact;
=======
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Building,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github} from 'lucide-react';

const contactMethods = [
  {icon: Phone,
    title: 'Phone',
    value: '+1 302 464 0950',
    description: 'Call us during business hours',
    action: 'tel:+13024640950',
    color: 'from-blue-500 to-cyan-500'},
  {icon: Mail,
    title: 'Email',
    value: 'kleber@ziontechgroup.com',
    description: 'Send us a message time',
    action: 'mailto:kleber@ziontechgroup.com',
    color: 'from-purple-500 to-pink-500'},
  {icon: MapPin,
    title: 'Address',
    value: '364 E Main St STE 1008',
    description: 'Middletown, DE 19709',
    action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
    color: 'from-green-500 to-emerald-500'},
  {icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    description: 'Eastern Time Zone',
    action: null,
    color: 'from-orange-500 to-red-500'}
];

const socialLinks = [
  {name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/ziontechgroup',
    color: 'hover:text-blue-500'},
  {name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/ziontechgroup',
    color: 'hover:text-sky-500'},
  {name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/ziontechgroup',
    color: 'hover:text-blue-600'},
  {name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/ziontechgroup',
    color: 'hover:text-pink-500'},
  {name: 'GitHub',
    icon: Github,
    url: 'https://github.com/ziontechgroup',
    color: 'hover:text-gray-400'}
];

const contactFormFields = [
  {name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your first name'},
  {name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your last name'},
  {name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Enter your email address'},
  {name: 'phone',
    label: 'Phone',
    type: 'tel',
    required: false,
    placeholder: 'Enter your phone number (optional)'},
  {name: 'comp',
    label: 'Comp',
    type: 'text',
    required: false,
    placeholder: 'Enter your comp name (optional)'},
  {name: 'service',
    label: 'Service Interest',
    type: 'select',
    required: true,
    options: [
      'AI & Analytics',
      'Cybersecurity',
      'Cloud & DevOps',
      'IoT & Edge Computing',
      'Digital Transformation',
      'Mobile Development',
      'Micro SaaS Solutions',
      'Other'
    ]}
];

export default function Contact(props: any) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comp: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (props: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev,
      [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comp: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

const Contact: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Contact</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Contact;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
