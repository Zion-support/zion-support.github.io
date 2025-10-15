import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ExclamationTriangleIcon,
  BugAntIcon,
  ShieldExclamationIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const ReportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    issueType: '',
    priority: '',
    subject: '',
    description: '',
    stepsToReproduce: '',
    expectedBehavior: '',
    actualBehavior: '',
    environment: '',
    attachments: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const issueTypes = [
    { value: 'bug', label: 'Bug Report', icon: BugAntIcon, description: 'Report a software bug or technical issue' },
    { value: 'security', label: 'Security Issue', icon: ShieldExclamationIcon, description: 'Report a security vulnerability or concern' },
    { value: 'performance', label: 'Performance Issue', icon: WrenchScrewdriverIcon, description: 'Report slow performance or optimization needs' },
    { value: 'feature', label: 'Feature Request', icon: ExclamationTriangleIcon, description: 'Request a new feature or enhancement' },
    { value: 'other', label: 'Other Issue', icon: ExclamationTriangleIcon, description: 'Report any other type of issue' }
  ];

  const priorities = [
    { value: 'low', label: 'Low', description: 'Minor issue, can be addressed in next release' },
    { value: 'medium', label: 'Medium', description: 'Moderate issue, should be addressed soon' },
    { value: 'high', label: 'High', description: 'Important issue, needs prompt attention' },
    { value: 'critical', label: 'Critical', description: 'Urgent issue, needs immediate attention' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      attachments: e.target.files
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        issueType: '',
        priority: '',
        subject: '',
        description: '',
        stepsToReproduce: '',
        expectedBehavior: '',
        actualBehavior: '',
        environment: '',
        attachments: null
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Emergency Support',
      details: '+1 302 464 0950',
      description: 'Call us for critical issues',
      action: 'tel:+13024640950'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email',
      action: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPinIcon,
      title: 'Office Visit',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Report an Issue - Technical Support | Zion Tech Group</title>
        <meta name="description" content="Report bugs, security issues, or request features for our AI and IT solutions. Our technical team will address your concerns promptly." />
        <meta name="keywords" content="report issue, bug report, security issue, feature request, technical support, customer service" />
        <meta property="og:title" content="Report an Issue - Technical Support" />
        <meta property="og:description" content="Report bugs, security issues, or request features for our AI and IT solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/report" />
        <link rel="canonical" href="https://ziontechgroup.com/report" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Report an
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {' '}Issue
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Help us improve our services by reporting bugs, security issues, or requesting new features. 
                Our technical team will address your concerns promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Issue Types */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Can We Help You With?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the type of issue you'd like to report and we'll route it to the appropriate team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {issueTypes.map((type, index) => (
                <div key={index} className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">
                    {type.label}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Form */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
                  <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Issue Reported Successfully!</h3>
                  <p className="text-gray-300 mb-4">
                    Thank you for reporting this issue. We've received your submission and our technical team will review it promptly.
                  </p>
                  <p className="text-sm text-gray-400">
                    You should receive a confirmation email within the next few minutes with a ticket number for tracking.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="issueType" className="block text-white font-medium mb-2">
                        Issue Type *
                      </label>
                      <select
                        id="issueType"
                        name="issueType"
                        value={formData.issueType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select issue type</option>
                        {issueTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="priority" className="block text-white font-medium mb-2">
                        Priority Level *
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select priority</option>
                        {priorities.map((priority) => (
                          <option key={priority.value} value={priority.value}>{priority.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="environment" className="block text-white font-medium mb-2">
                        Environment
                      </label>
                      <input
                        type="text"
                        id="environment"
                        name="environment"
                        value={formData.environment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="e.g., Production, Staging, Development"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Brief description of the issue"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="description" className="block text-white font-medium mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Please provide a detailed description of the issue..."
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="stepsToReproduce" className="block text-white font-medium mb-2">
                      Steps to Reproduce
                    </label>
                    <textarea
                      id="stepsToReproduce"
                      name="stepsToReproduce"
                      value={formData.stepsToReproduce}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="1. Go to... 2. Click on... 3. See error..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="expectedBehavior" className="block text-white font-medium mb-2">
                        Expected Behavior
                      </label>
                      <textarea
                        id="expectedBehavior"
                        name="expectedBehavior"
                        value={formData.expectedBehavior}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder="What should have happened?"
                      />
                    </div>
                    <div>
                      <label htmlFor="actualBehavior" className="block text-white font-medium mb-2">
                        Actual Behavior
                      </label>
                      <textarea
                        id="actualBehavior"
                        name="actualBehavior"
                        value={formData.actualBehavior}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder="What actually happened?"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="attachments" className="block text-white font-medium mb-2">
                      Attachments (Optional)
                    </label>
                    <input
                      type="file"
                      id="attachments"
                      name="attachments"
                      onChange={handleFileChange}
                      multiple
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-500 file:text-white hover:file:bg-red-600"
                    />
                    <p className="text-sm text-gray-400 mt-2">
                      You can attach screenshots, log files, or other relevant documents (max 10MB total)
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center mx-auto disabled:transform-none disabled:shadow-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                          Submit Issue Report
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                For urgent issues or immediate assistance, contact us directly through these channels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-slate-700/50 hover:bg-slate-600/50 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:scale-105 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-red-400 font-medium mb-2">{method.details}</p>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  <a
                    href={method.action}
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                  >
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    Contact Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReportPage;