'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const subject = `Free Consultation Request from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nCompany Size: ${formData.companySize}\nCurrent Challenges: ${formData.currentChallenges}\nGoals: ${formData.goals}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const consultationBenefits = [
    {
      icon: Target,
      title: 'Strategic Assessment',
      description: 'Comprehensive analysis of your current technology stack and business processes'
    },
    {
      icon: Brain,
      title: 'AI Readiness Evaluation',
      description: 'Determine how AI can best serve your specific business needs'
    },
    {
      icon: Shield,
      title: 'Security Audit',
      description: 'Identify potential vulnerabilities and security improvements'
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Develop a roadmap for scaling your technology infrastructure'
    }
  ];

  const consultationProcess = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'We review your current setup and understand your business goals'
    },
    {
      step: '2',
      title: 'Gap Analysis',
      description: 'Identify areas where technology can drive improvement'
    },
    {
      step: '3',
      title: 'Solution Design',
      description: 'Create a customized technology roadmap for your business'
    },
    {
      step: '4',
      title: 'Implementation Plan',
      description: 'Provide detailed steps and timeline for your transformation'
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Manufacturing Plus',
      text: 'The free consultation opened our eyes to possibilities we never considered. Highly valuable session.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'Retail Innovations',
      text: 'Professional, insightful, and completely free. They helped us plan our digital transformation.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      company: 'Healthcare Solutions',
      text: 'The consultation was worth every minute. Clear recommendations and actionable insights.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Free Business Consultation - Zion Tech Group"
        description="Get a free 30-minute consultation with our technology experts. Discover how AI and IT solutions can transform your business."
        keywords={['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'IT consultation']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      /><>
</SEOOptimizer
        title="Free Business Consultation - Zion Tech Group"
        description="Get a free 30-minute consultation with our technology experts. Discover how AI and IT solutions can transform your business."
        keywords={['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'IT consultation']}
        canonicalUrl="https://ziontechgroup.com/consultation"
      />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Navigation /><>
</Navigation />
<main className="pt-16"></main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center"><>
</section className="container mx-auto px-4 py-16 text-center">
<div className="max-w-4xl mx-auto"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text"></h1><//h1>
                Free Business Consultation</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl md:text-2xl text-cyan-400 mb-8"></p><//p>
                Discover how technology can transform your business</p><>
<//p>
</p><>
<//p>
<p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"></p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Get a free 30-minute consultation with our technology experts. We'll assess your current setup, </p><//p>
                identify opportunities, and provide actionable recommendations to drive your business forward.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div><>
<//div>
<a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                ><>
</a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
<Phone className="w-5 h-5" /><>
</Phone className="w-5 h-5" />
<span>Call (302) 464-0950</span><>
<//span>
</a><>
<//a>
<a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                ><>
</a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
<Mail className="w-5 h-5" /><>
</Mail className="w-5 h-5" />
<span>Schedule Now</span><>
<//span>
</a><>
<//a>
</div><>
<//div>
</div><>
<//div>
</section><//section>
          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              What You'll Get</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
              {consultationBenefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div><>
<//div>
<benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><>
</benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
<h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3><>
<//h3>
<p className="text-gray-300">{benefit.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Process Section */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              Our Consultation Process</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
              {consultationProcess.map((step, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6 text-center"></div><>
<//div>
<div className="w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div><//div>
                    {step.step}</div><>
<//div>
</div><>
<//div>
<h3 className="text-xl font-bold text-white mb-3">{step.title}</h3><>
<//h3>
<p className="text-gray-300">{step.description}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Consultation Form */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<div className="max-w-4xl mx-auto"></div><>
<//div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div><//div>
                {/* Form */}</div><>
<//div>
<div className="cyber-card p-8"></div><>
<//div>
<h2 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h2><>
<//h2>
<form onSubmit={handleSubmit} className="space-y-6"><>
</form onSubmit={handleSubmit} className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div><>
<//div>
<div></div><>
<//div>
<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label><>
<//label>
<input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your full name"
                        /><>
</input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your full name"
                        />
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label><>
<//label>
<input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your email"
                        /><>
</input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your email"
                        />
</div><>
<//div>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div><>
<//div>
<div></div><>
<//div>
<label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name *
                        </label><>
<//label>
<input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your company name"
                        /><>
</input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your company name"
                        />
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label><>
<//label>
<input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your phone number"
                        /><>
</input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                          placeholder="Enter your phone number"
                        />
</div><>
<//div>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div><>
<//div>
<div></div><>
<//div>
<label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                          Industry
                        </label><>
<//label>
<select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        ><>
</select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
<option value="">Select your industry</option><>
<//option>
<option value="healthcare">Healthcare</option><>
<//option>
<option value="finance">Finance</option><>
<//option>
<option value="manufacturing">Manufacturing</option><>
<//option>
<option value="retail">Retail</option><>
<//option>
<option value="technology">Technology</option><>
<//option>
<option value="education">Education</option><>
<//option>
<option value="other">Other</option><>
<//option>
</select><>
<//select>
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2">
                          Company Size
                        </label><>
<//label>
<select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        ><>
</select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
<option value="">Select company size</option><>
<//option>
<option value="1-10">1-10 employees</option><>
<//option>
<option value="11-50">11-50 employees</option><>
<//option>
<option value="51-200">51-200 employees</option><>
<//option>
<option value="201-500">201-500 employees</option><>
<//option>
<option value="500+">500+ employees</option><>
<//option>
</select><>
<//select>
</div><>
<//div>
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-300 mb-2">
                        Current Challenges
                      </label><>
<//label>
<textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        rows={3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Describe your current technology challenges"
                      /><>
</textarea
                        id="currentChallenges"
                        name="currentChallenges"
                        rows={3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Describe your current technology challenges"
                      />
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">
                        Business Goals
                      </label><>
<//label>
<textarea
                        id="goals"
                        name="goals"
                        rows={3}
                        value={formData.goals}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="What are your main business objectives?"
                      /><>
</textarea
                        id="goals"
                        name="goals"
                        rows={3}
                        value={formData.goals}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="What are your main business objectives?"
                      />
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div><>
<//div>
<div></div><>
<//div>
<label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                          Implementation Timeline
                        </label><>
<//label>
<select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        ><>
</select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
<option value="">Select timeline</option><>
<//option>
<option value="immediate">Immediate (0-3 months)</option><>
<//option>
<option value="short">Short term (3-6 months)</option><>
<//option>
<option value="medium">Medium term (6-12 months)</option><>
<//option>
<option value="long">Long term (12+ months)</option><>
<//option>
</select><>
<//select>
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range
                        </label><>
<//label>
<select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        ><>
</select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        >
<option value="">Select budget range</option><>
<//option>
<option value="under-10k">Under $10,000</option><>
<//option>
<option value="10k-50k">$10,000 - $50,000</option><>
<//option>
<option value="50k-100k">$50,000 - $100,000</option><>
<//option>
<option value="100k-500k">$100,000 - $500,000</option><>
<//option>
<option value="500k+">$500,000+</option><>
<//option>
</select><>
<//select>
</div><>
<//div>
</div><>
<//div>
<div></div><>
<//div>
<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Information
                      </label><>
<//label>
<textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Any additional information you'd like to share"
                      /><>
</textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Any additional information you'd like to share"
                      />
</div><>
<//div>
<button
                      type="submit"
                      className="w-full cyber-button py-3 px-6 text-center"
                    ></button><//button>
                      Schedule Free Consultation</button><>
<//button>
</button><>
<//button>
</form><>
<//form>
</div><//div>
                {/* Benefits Sidebar */}
                <div className="space-y-8"></div><>
<//div>
<div className="cyber-card p-8"></div><>
<//div>
<h3 className="text-xl font-bold text-white mb-6">Why Choose Our Consultation?</h3><>
<//h3>
<ul className="space-y-4"><>
</ul className="space-y-4">
<li className="flex items-start"><>
</li className="flex items-start">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
<span className="text-gray-300">Completely free with no obligations</span><>
<//span>
</li><>
<//li>
<li className="flex items-start"><>
</li className="flex items-start">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
<span className="text-gray-300">Expert analysis of your current setup</span><>
<//span>
</li><>
<//li>
<li className="flex items-start"><>
</li className="flex items-start">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
<span className="text-gray-300">Actionable recommendations</span><>
<//span>
</li><>
<//li>
<li className="flex items-start"><>
</li className="flex items-start">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
<span className="text-gray-300">Customized technology roadmap</span><>
<//span>
</li><>
<//li>
<li className="flex items-start"><>
</li className="flex items-start">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" /><>
</CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
<span className="text-gray-300">30-minute focused session</span><>
<//span>
</li><>
<//li>
</ul><>
<//ul>
</div><>
<//div>
<div className="cyber-card p-8"></div><>
<//div>
<h3 className="text-xl font-bold text-white mb-6">Contact Information</h3><>
<//h3>
<div className="space-y-4"></div><>
<//div>
<div className="flex items-center"></div><>
<//div>
<Phone className="w-5 h-5 text-cyan-400 mr-3" /><>
</Phone className="w-5 h-5 text-cyan-400 mr-3" />
<a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400"></a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400">
                          (302) 464-0950
                        </a><>
<//a>
</div><>
<//div>
<div className="flex items-center"></div><>
<//div>
<Mail className="w-5 h-5 text-cyan-400 mr-3" /><>
</Mail className="w-5 h-5 text-cyan-400 mr-3" />
<a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400"></a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400">
                          kleber@ziontechgroup.com
                        </a><>
<//a>
</div><>
<//div>
<div className="flex items-center"></div><>
<//div>
<Clock className="w-5 h-5 text-cyan-400 mr-3" /><>
</Clock className="w-5 h-5 text-cyan-400 mr-3" />
<span className="text-gray-300">Mon-Fri: 9AM-6PM EST</span><>
<//span>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
          {/* Testimonials */}
          <section className="container mx-auto px-4 py-16"><>
</section className="container mx-auto px-4 py-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              What Our Clients Say</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div><//div>
              {testimonials.map((testimonial, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6"></div><>
<//div>
<div className="flex items-center mb-4"></div><//div>
                    {[...Array(testimonial.rating)].map((_, i) => (</div><>
<//div>
<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div><>
<//div>
<p className="text-gray-300 mb-4">"{testimonial.text}"</p><>
<//p>
<div></div><>
<//div>
<div className="font-bold text-white">{testimonial.name}</div><>
<//div>
<div className="text-cyan-400 text-sm">{testimonial.company}</div><>
<//div>
</div><>
<//div>
</div><//div>
              ))}
            </div><>
<//div>
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</div><>
<//div>
</><//>
  );
};

export default ConsultationPage;