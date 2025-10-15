import React from 'react';

  const [formData, setFormData] = useState({)
    name: '',''
    email: '',''
    company: '',''
    phone: '',''
    service: '',''
    message: ''''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({)
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);''
    alert('Thank you for your message! We will get back to you within 24 hours.');''
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',''
      details: '+1 302 464 0950',''
      description: 'Call us for immediate assistance'''
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',''
      details: 'kleber@ziontechgroup.com',''
      description: 'Send us an email anytime'''
    },
    {
      icon: MapPinIcon,
      title: 'Address',''
      details: '364 E Main St STE 1008',''
      city: 'Middletown, DE 19709',''
      description: 'Visit our office'''
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',''
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',''
      description: 'Eastern Time Zone'''
    }
  ];

  const services = [
    'AI Solutions & Machine Learning',''
    'Cybersecurity Services',''
    'Cloud Infrastructure',''
    'Digital Transformation',''
    'Micro SaaS Solutions',''
    '5G & IoT Solutions',''
    'Web Development',''
    'Mobile App Development',''
    'Data Analytics',''
    'IT Consulting'''
  ];

  return ()


