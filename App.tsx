// import React from 'react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
    icon: '🤖',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
    icon: '💻',
    features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support']
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling']
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
    icon: '🔒',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits']
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    icon: '📊',
    features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards']
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
    icon: '🚀',
    features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management']
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center py-20">
        Zion Tech Group
      </h1>
      <p className="text-center text-gray-600">
        This is a Next.js application. Please navigate to the appropriate pages using the Next.js routing system.
      </p>
    </div>
  );
}
