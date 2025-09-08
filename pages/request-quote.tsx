import React { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true)};

  const serviceTypes = [
    'AI & Machine Learning',
    'Micro SAAS Development',
    'IT Services & Infrastructure',
    'Digital Transformation',
    'Cybersecurity',
    'Cloud Solutions',
    'Custom Software Development',
    'Data Analytics',
    'Mobile App Development',
    'Web Development',
    'Other'
  ];

  const projectSizes = [
    'Small Project (< $10K)',
    'Medium Project ($10K - $50K)',
    'Large Project ($50K - $200K)',
    'Enterprise Project (> $200K)'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get your quote within 24 hours'
    }, {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Best value for your investment'
    }, {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals'
    }, {
      icon: Zap,
      title: 'Quick Start',
      description: 'Begin your project immediately'
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Quote Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Your quote request has been submitted successfully. We'll get back to you within 24 hours." />
        </Head>
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in Zion Tech Group. We've received your quote request and will get back to you within 24 hours with a detailed proposal.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-left text-blue-800 space-y-2">
                <li>• Our team will review your requirements</li>
                <li>• We'll prepare a detailed proposal</li>
                <li>• You'll receive your quote within 24 hours</li>
                <li>• We'll schedule a consultation call if needed</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </>
    )}

  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description" content="Get a personalized quote for our services and solutions. Contact us for a consultation." />
        <link rel="canonical" href="https://ziontechgroup.com/request-quote" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Request a Quote</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Get a personalized quote for our services and solutions. Our team will work with you to find the perfect solution for your needs.
        </p>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600
          }}>
            Contact Us
          </Link>
        </div>
      </main>
    </>
  )}