import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MessageCircle, Book, FileText, Users, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const SupportPage: NextPage = () => {;
  const supportOptions = [;
    {;
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7 for Enterprise clients',
      contact: '+1 302 464 0950',
      color: 'blue';
},
    {;
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your technical questions',
      availability: 'Response within 2 hours',
      contact: 'kleber@ziontechgroup.com',
      color: 'green';
},
    {;
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support through our website chat',
      availability: 'Monday - Friday, 9 AM - 6 PM EST',
      contact: 'Available on website',
      color: 'purple';
},
    {;
      icon: Book,
      title: 'Knowledge Base',
      description: 'Comprehensive documentation and guides',
      availability: 'Always available',
      contact: 'Self-service resources',
      color: 'orange';
}
  ];
  const faqCategories = [;
    {;
      category: 'General',
      questions: [;
        {;
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive technology solutions including AI services, IT services, and micro SaaS applications. Our services range from custom AI model development to cloud migration and cybersecurity solutions.';
},
        {;
          question: 'How do I get started with your services?',
          answer: 'You can get started by contacting us through our contact form, calling us at +1 302 464 0950, or emailing kleber@ziontechgroup.com. We offer free consultations to understand your needs.';
},
        {;
          question: 'Do you offer custom development services?',
          answer: 'Yes, we specialize in custom development solutions tailored to your specific business requirements. Our team can build custom applications, integrate existing systems, and develop unique solutions.';
}
      ];
},
    {;
      category: 'Technical',
      questions: [;
        {;
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and modern development tools and practices.';
},
        {;
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer comprehensive maintenance and support packages including 24/7 monitoring, regular updates, security patches, and technical support for all our solutions.';
},
        {;
          question: 'How do you ensure data security and compliance?',
          answer: 'We implement industry-standard security measures including encryption, secure coding practices, regular security audits, and compliance with regulations like GDPR, HIPAA, and SOC 2.';
}
      ];
},
    {;
      category: 'Billing',
      questions: [;
        {;
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, monthly subscriptions for SaaS solutions, and enterprise packages. Contact us for a custom quote based on your specific needs.';
},
        {;
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans for larger projects. We can discuss payment terms that work best for your business during our consultation.';
},
        {;
          question: 'What is included in your support packages?',
          answer: 'Our support packages include technical support, regular updates, security monitoring, performance optimization, and access to our knowledge base and documentation.';
}
      ];
}
  ];
  const resources = [;
    {;
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/documentation';
},
    {;
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get help from the community',
      link: '/community';
},
    {;
      icon: Book,
      title: 'Tutorials',
      description: 'Step-by-step tutorials and best practices',
      link: '/tutorials';
},
    {;
      icon: MessageCircle,
      title: 'Status Page',
      description: 'Real-time system status and incident updates',
      link: '/status';
}
  ];
  return (;
    <MainLayout;
      title="Support - Zion Tech Group";
      description="Get help and support for all your technology needs. 24/7 support available for enterprise clients.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <motion.h1 ;
            className="text-4xl md:text-5xl font-bold mb-6";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            We're Here to Help;
          </motion.h1>;
          <motion.p ;
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200";