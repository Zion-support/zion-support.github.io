import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1-302-464-0950',
    site: 'https://ziontechgroup.com'
  };

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer 40+ micro SaaS products, 16+ AI services, and 16+ IT solutions including cloud migration, cybersecurity, data engineering, machine learning, and more."
    },
    {
      question: "How do I get started with your services?",
      answer: "Contact us through our contact form, call us at +1 302 464 0950, or email kleber@ziontechgroup.com. We'll schedule a consultation to understand your needs and provide a custom solution."
    },
    {
      question: "What is the typical pricing for your services?",
      answer: "Pricing varies by service and complexity. Micro SaaS products typically range from $99-$3,500/month, AI services from $699-$12,999/month, and IT services from $999-$15,999/month. Contact us for a custom quote."
    },
    {
      question: "Do you offer custom development?",
      answer: "Yes, we specialize in custom development for micro SaaS products, AI solutions, and IT services. We work closely with clients to build tailored solutions that meet their specific business requirements."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including AWS, Azure, GCP, Kubernetes, Docker, Python, JavaScript, React, Node.js, machine learning frameworks, and various cloud and AI platforms."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple micro SaaS products can be delivered in 2-4 weeks, while complex AI or IT solutions may take 2-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services for all our solutions. This includes monitoring, updates, troubleshooting, and optimization to ensure optimal performance."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Absolutely! We specialize in cloud migration and modernization services, helping businesses move to AWS, Azure, or GCP with minimal downtime and maximum efficiency."
    },
    {
      question: "What makes your AI services different?",
      answer: "Our AI services are tailored to specific business needs, not generic solutions. We focus on practical applications that deliver measurable ROI, with custom model development and integration support."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to enterprises. Our micro SaaS products are particularly well-suited for small and medium businesses looking for cost-effective solutions."
    }
  ];

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Faq;