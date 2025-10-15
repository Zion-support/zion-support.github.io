import React, { useState } from 'react',
      import React, { useState } from 'react',
      const SupportPage: React.FC = () => {"}
        "
  const [formData, setFormData] = useState({",)}
        "
    name: '',",
        "
    email: '',",
        "
    subject: '',",
        "
    priority: '',",
        "
    category: '',",
        "
    description: '';
  }),
      const [isSubmitting, setIsSubmitting] = useState(false),
      const [isSubmitted, setIsSubmitted] = useState(false);
,
      const supportChannels = [",
        "
    {""}
      icon: <MessageSquare className="w-8 h-8" />,",
        "
      title: 'Live Chat',",
        "
      description: 'Get instant help from our support team',",
        "
      availability: '24/7',",
        "
      responseTime: 'Immediate',",
        "
      action: 'Start Chat',",
        "
      color: 'from-blue-500 to-cyan-500';
    },",
        "
    {"}
        "
      icon: <Phone className="w-8 h-8" />,",
        "
      title: 'Phone Support',",
        "
      description: 'Speak directly with our technical experts',",
        "
      availability: 'Mon-Fri 9AM-6PM EST',",
        "
      responseTime: 'Immediate',",
        "
      action: 'Call Now',",
        "
      color: 'from-green-500 to-emerald-500';
    },",
        "
    {"}
        "
      icon: <Mail className="w-8 h-8" />,",
        "
      title: 'Email Support',",
        "
      description: 'Send detailed messages and get comprehensive responses',",
        "
      availability: '24/7',",
        "
      responseTime: '< 2 hours',",
        "
      action: 'Send Email',",
        "
      color: 'from-purple-500 to-pink-500';
    },",
        "
    {"}
        "
      icon: BookOpen,",
        "
      title: 'Documentation',",
        "
      description: 'Browse our comprehensive guides',",
        "
      action: 'View Docs',",
        "
      color: 'from-orange-500 to-red-500'
    },
    {}
  ];
,
      const priorityLevels = [",
        "
    { value: 'low', label: 'Low', description: 'General questions, feature requests' },",
        "
    { value: 'medium', label: 'Medium', description: 'Minor issues, configuration help' },",
        "
    { value: 'high', label: 'High', description: 'Service degradation, performance issues' },",
        "
    { value: 'critical', label: 'Critical', description: 'Service down, security issues' };
  ];
,
      const categories = [",
        "
    'Technical Support',",
        "
    'Billing & Account',",
        "
    'API Issues',",
        "
    'Feature Request',",
        "
    'Bug Report',",
        "
    'Security Issue',",
        "
    'General Inquiry';
  ];
,
      const faqs = [",
        "
    {"}
        "
      question: 'How do I report a technical issue?',",
        "
      answer: 'You can report technical issues through our support portal, live chat, or by calling our support line. Please provide as much detail as possible including error messages, steps to reproduce, and your system information.';
    },",
        "
    {"}
        "
      question: 'What information should I include in my support request?',",
        "
      answer: 'Include your account details, a clear description of the issue, steps to reproduce it, any error messages, and your system/browser information. Screenshots or screen recordings are also helpful.';
    },",
        "
    {"}
        "
      question: 'How quickly will I get a response?',",
        "
      answer: 'Response times vary by priority: Critical issues get immediate attention, High priority within 2 hours, Medium priority within 4 hours, and Low priority within 24 hours during business days.';
    },",
        "
    {"}
        "
      question: 'Can I get help with custom integrations?',",
        "
      answer: 'Yes! Our technical team can help with custom integrations, API implementations, and advanced configurations. Contact us to discuss your specific requirements.';
    },",
        "
    {"}
        "
      question: 'Is there a cost for support?',",
        "
      answer: 'Basic support is included with all plans. Premium support features and dedicated account management are available for Professional and Enterprise plans.'
    },
    {}
  ];
,
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {"}
        "
    const { name, value } = e.target,
      setFormData(prev => ({",)}
        "
      ...prev,",
        "
      [name]: value",
        "
    }))
    },
    {}
,
      const handleSubmit = async (e: React.FormEvent) => {"}
        "
    e.preventDefault(),
      setIsSubmitting(true);
;
    // Simulate form submission",
        "
    await new Promise(resolve => setTimeout(resolve, 2000));
,
      setIsSubmitting(false),
      setIsSubmitted(true);
;
    // Reset form after 3 seconds",
        "
    setTimeout(() => {"}
        "
      setIsSubmitted(false),
      setFormData({",)}
        "
        name: '',",
        "
        email: '',",
        "
        subject: '',",
        "
        priority: '',",
        "
        category: '',",
        "
        description: '';
      });
    }, 3000)
    },
    {}
,
      export default function Support() {"}
        "
  return (",)
        "
    <>{"}</>
        "
      <SEOHead",>
        "
        title="support - Zion Tech Group",
      description="Zion Tech Group support service page" />""
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold mb-4">support</h1>""
          <p className="text-gray-300">Coming soon...</p>",
        "
        </div>",
        "
      </div>",
        "
    </>",
        "
  )
    },
    {}
,
      export default SupportPage;
;