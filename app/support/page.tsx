import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function Support() {
=======
<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react;

interface FAQ {}
  question: string;

  answer: string;

  category: string});)
}
<<<<<<< HEAD

import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react;

import Navigation from ../components
import Footer from ../components

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(');

  const [selectedCategory, setSelectedCategory] = useState('all);

=======
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {}
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [;
    { id: 'all', name: 'All Topics },
    { id: 'general', name: 'General },
    { id: 'technical', name: 'Technical },
    { id: 'billing', name: 'Billing },
    { id: 'implementation', name: 'Implementation }

  ];

  const faqs: FAQ[] = [
<<<<<<< HEAD
    {
      question: 'How do I get started with your AI solutions?,
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.,
      category: 'general
    },
      category: 'general});)},
    {
      question: 'What support do you provide after implementation?,
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.,
      category: 'support
=======
    {}
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'
    },
      category: 'general'});;)
},
    {}
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.',
      category: 'support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    },
      category: 'support});)},
    {
      question: 'How long does implementation typically take?,
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.,
      category: 'implementation});)
},
<<<<<<< HEAD
    {
      question: 'Do you offer training for our team?,
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.,
      category: 'training});)
},
    {
      question: 'What security measures do you have in place?,
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.,
      category: 'security});)
},
    {
      question: 'Can you integrate with our existing systems?,
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.,
      category: 'integration});)
},
    {
      question: 'What happens if we need to scale up?,
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.,
      category: 'scaling});)
},
    {
      question: 'Do you provide custom development?,
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.,
      category: 'development
    }  ];

  const supportChannels = [;;

    {
      name: 'Phone Support,
      description: 'Speak directly with our technical experts,
=======
    {}
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'implementation'});;)
},
    {}
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'training'});;)
},
    {}
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'security'});;)
},
    {}
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with most platforms, databases, and APIs to ensure smooth data flow and functionality.',
      category: 'integration'});;)
},
    {}
      question: 'What happens if we need to scale up?',
      answer: 'Our solutions are designed to scale with your business. We can easily add more capacity, features, or users as your needs grow, with minimal disruption to your operations.',
      category: 'scaling'});;)
},
    {}
      question: 'Do you provide custom development?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'
    }
  ];

  const supportChannels = [
    {}
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Phone,
      contact: '+1 (555) 123-4567,
      availability: '24/7 Available,
      color: 'text-blue-400
    },
<<<<<<< HEAD
      color: 'text-blue-400});)},
    {
      name: 'Email Support,
      description: 'Get detailed responses to your questions,
=======
      color: 'text-blue-400'});;)
},
    {}
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Mail,
      contact: 'support@ziontech.com,
      availability: 'Response within 2 hours,
      color: 'text-green-400
    },
<<<<<<< HEAD
      color: 'text-green-400});)},
    {
      name: 'Live Chat,
      description: 'Instant help when you need it most,
=======
      color: 'text-green-400'});;)
},
    {}
      name: 'Live Chat',
      description: 'Instant help when you need it most',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: MessageCircle,
      contact: 'Available on website,
      availability: 'Mon-Fri 9AM-6PM EST,
      color: 'text-purple-400});)
},
<<<<<<< HEAD
    {
      name: 'Emergency Support,
      description: 'Critical issues resolved quickly,
=======
    {}
      name: 'Emergency Support',
      description: 'Critical issues resolved quickly',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: Zap,
      contact: '+1 (555) 911-TECH,
      availability: '24/7 Critical Support,
      color: 'text-red-400});)
}

  ];

<<<<<<< HEAD
  const filteredFAQs = faqs.filter(faq => {;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());;

  const toggleFAQ = (index: number) => {;
=======
  const filteredFAQs = faqs.filter(faq => {}
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory});;)
});;

  const toggleFAQ = (index: number) => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    setExpandedFAQ(expandedFAQ === index ? null : index);

  };

const PagePage: React.FC = () => {}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
<<<<<<< HEAD
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Customer support by Zion Tech Group" />
=======
<<<<<<< HEAD
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat. />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk />
>>>>>>> origin/cursor/ad-creation-and-management-f267
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get help and support for all your needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive documentation and guides for all our services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">
                Reach out to our support team for personalized assistance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Join our community forum for discussions and tips.
              </p>
            </div>
          </div>
<<<<<<< HEAD

=======
>>>>>>> origin/clean-main-20251013-145848
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======

  );  ));)
=======
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Support services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

export default SupportPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
