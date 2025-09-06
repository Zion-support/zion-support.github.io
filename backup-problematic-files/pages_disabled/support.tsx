import React from "react";

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    contact: '+1 302 464 0950',
    hours: '24/7 Emergency Support',
    response: 'Immediate'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    contact: 'kleber@ziontechgroup.com',
    hours: 'Monday - Friday: 9 AM - 6 PM EST',
    response: 'Within 2 hours'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help through our live chat system',
    contact: 'Available on website',
    hours: 'Monday - Friday: 9 AM - 6 PM EST',
    response: 'Immediate'
  }
];

const faqs = [
  {
    question: 'What support do you provide after project completion?',
    answer: 'We provide 30 days of free support after project completion, including bug fixes, minor adjustments, and technical guidance. Extended support plans are available for ongoing maintenance.'
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We respond to emergency requests within 1 hour, standard requests within 2-4 hours, and general inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you provide training for the solutions you build?',
    answer: 'Yes, we provide comprehensive training sessions for all team members who will be using the solutions we develop. This includes documentation, video tutorials, and hands-on training sessions.'
  },
  {
    question: 'What if I need changes to my existing solution?',
    answer: 'We offer flexible maintenance and enhancement services. Small changes can often be handled quickly, while larger modifications will be quoted separately based on scope and complexity.'
  },
  {
    question: 'Do you provide 24/7 monitoring for critical systems?',
    answer: 'Yes, we offer 24/7 monitoring services for critical business systems. This includes real-time alerts, automated backups, and immediate response to any issues.'
  },
  {
    question: 'How do I escalate a critical issue?',
    answer: 'For critical issues, call our emergency hotline at +1 302 464 0950. You can also email kleber@ziontechgroup.com with "URGENT" in the subject line for immediate attention.'
  }
];

const resources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation',
    href: '/docs'
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Searchable database of common questions and solutions',
    href: '/knowledge-base'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and share experiences',
    href: '/community'
  },
  {
    icon: Zap,
    title: 'Status Page',
    description: 'Real-time status of all our services and systems',
    href: '/status'
  }
];

export default function SupportPage() {
  return (
<div className={className || ""}>
      <h1>Support</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Support;
