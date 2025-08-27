import React, { useState } from 'react';
import { Button } from './ui/button';
export const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-zion-blue-dark rounded-xl p-8 border border-zion-cyan/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
          >
            <option value="">Select project type</option>
            <option value="ai-services">AI Services</option>
            <option value="it-solutions">IT Solutions</option>
            <option value="software-development">Software Development</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
          placeholder="Describe your project requirements, goals, and any specific details..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-500k">$100,000 - $500,000</option>
            <option value="over-500k">Over $500,000</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zion-slate border border-zion-cyan/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="over-12-months">Over 12 months</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        <Button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Request Quote
        </Button>
      </div>
      <p className="text-center text-zion-slate-light text-sm">
        We'll get back to you within 24 hours with a detailed quote and next steps.
      </p>
    </form>
  );
};
export default QuoteRequestForm;