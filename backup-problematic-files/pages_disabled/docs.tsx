import React from "react";

const categories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions',
    icon: BookOpen,
    articles: [
      { title: 'Introduction to Zion Tech Group', href: '/docs/getting-started/introduction' },
      { title: 'Setting Up Your Account', href: '/docs/getting-started/account-setup' },
      { title: 'First Steps with AI Services', href: '/docs/getting-started/ai-services' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Comprehensive guides for our AI solutions',
    icon: Zap,
    articles: [
      { title: 'AI Email Responder Setup', href: '/docs/ai-services/email-responder' },
      { title: 'Predictive Analytics Guide', href: '/docs/ai-services/predictive-analytics' },
      { title: 'Chatbot Configuration', href: '/docs/ai-services/chatbot' }
    ]
  },
  {
    title: 'IT Services',
    description: 'Documentation for our IT infrastructure services',
    icon: Settings,
    articles: [
      { title: 'Cloud Infrastructure Setup', href: '/docs/it-services/cloud-infrastructure' },
      { title: 'Cybersecurity Best Practices', href: '/docs/it-services/cybersecurity' },
      { title: 'Network Configuration', href: '/docs/it-services/network' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Code,
    articles: [
      { title: 'Authentication', href: '/docs/api/authentication' },
      { title: 'Endpoints Reference', href: '/docs/api/endpoints' },
      { title: 'Code Examples', href: '/docs/api/examples' }
    ]
  },
  {
    title: 'Security',
    description: 'Security guidelines and compliance information',
    icon: Shield,
    articles: [
      { title: 'Data Protection', href: '/docs/security/data-protection' },
      { title: 'Compliance Standards', href: '/docs/security/compliance' },
      { title: 'Security Best Practices', href: '/docs/security/best-practices' }
    ]
  },
  {
    title: 'Support',
    description: 'Troubleshooting and support resources',
    icon: Users,
    articles: [
      { title: 'FAQ', href: '/docs/support/faq' },
      { title: 'Troubleshooting Guide', href: '/docs/support/troubleshooting' },
      { title: 'Contact Support', href: '/docs/support/contact' }
    ]
  }
];

export default function DocsPage() {
  return (
<div className={className || ""}>
      <h1>Docs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Docs;
