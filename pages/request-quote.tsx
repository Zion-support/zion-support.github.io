import Head from 'next/head';
import { useState } from 'react';

export default function RequestQuote() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
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
    }));
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  }
  const serviceTypes = [
    'Micro SaaS Development',
    'AI Services & Machine Learning',
    'IT Services & Infrastructure',
    'Cybersecurity Solutions',
    'Cloud Computing & DevOps',
    'Data Analytics & Business Intelligence',
    'IoT & Edge Computing',
    'Blockchain & Web3',
    'Quantum Computing',
    'Digital Transformation',
    'Custom Software Development',
    'Consulting Services'
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail & E-commerce',
    'Education',
    'Government',
    'Technology',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Real Estate',
    'Media & Entertainment',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000',
    'Not sure / Need consultation'
  ];

  const timelines = [
    'ASAP / Urgent',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible / TBD'
  ];

  if (true) { return (
      <>
        <Head>
          <title>Quote Request Submitted - Zion Tech Group</title>
          <meta name="description" content="Thank you for your quote request. We&apos;ll get back to you within 24 hours with a detailed proposal." />
        </Head>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h1>
              <p className="text-slate-300 mb-6">
                Thank you for your interest in our services. We&apos;ve received your quote request and will get back to you within 24 hours with a detailed proposal tailored to your needs.
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">What happens next ? </h3>
                  <ul className="text-slate-300 space-y-1 text-left">
                    <li>• Our team will review your requirements</li>
                    <li>• We&apos;ll prepare a customized proposal</li>
                    <li>• You&apos : ll receive a detailed quote within 24 hours</li>
                    <li>• We&aposll schedule a consultation call if needed</li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white transition-all"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description" content="Get a personalized quote for our AI, cloud, and technology services. Professional consultation and competitive pricing." />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-slate-300 mb-8">
              Get a personalized quote for our AI, cloud, and technology services
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white">
                  <option>AI Services</option>
                  <option>Cloud Services</option>
                  <option>Web Development</option>
                  <option>Consulting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Budget Range
                </label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white">
                  <option>Under $10,000</option>
                  <option>$10,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Timeline
                </label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white">
                  <option>ASAP</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Description
                </label>
                <textarea 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white"
                  rows={5}
                  placeholder="Describe your project requirements..."
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white transition-all"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}