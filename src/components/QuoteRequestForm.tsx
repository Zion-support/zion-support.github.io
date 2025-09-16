import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const QuoteRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
            placeholder="Enter company name"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
        >
          <option value="">Select a service type</option>
          <option value="ai-services">AI Services</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SAAS</option>
          <option value="cloud-solutions">Cloud Solutions</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">
          Project Description *
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={4}
          value={formData.projectDescription}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
          placeholder="Describe your project requirements, goals, and any specific needs..."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
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
            className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-2-months">1-2 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3"
      >
        Request Quote
      </Button>
    </form>
  );
};