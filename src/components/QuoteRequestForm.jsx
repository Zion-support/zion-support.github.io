import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Send } from "lucide-react";

export const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user makes a selection
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a description of your requirements';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
        <CardContent className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-zion-cyan mx-auto mb-6" aria-hidden="true" />
          <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
          <p className="text-zion-slate-light text-lg">
            Your quote request has been submitted successfully. We'll get back to you within 24 hours with a detailed quote.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-zion-blue-dark border-zion-purple/20 text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-zion-cyan">Quote Request Form</CardTitle>
        <CardDescription className="text-zion-slate-light">
          Please provide your details and requirements for a customized quote
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          aria-label="Quote request form"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                placeholder="Enter your company name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-zion-slate-light mb-2">
                Service Required *
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleSelectChange('service', value)}
                required
              >
                <SelectTrigger 
                  id="service"
                  className={`bg-zion-blue border-zion-purple/30 text-white focus:border-zion-cyan ${
                    errors.service ? 'border-red-500' : ''
                  }`}
                  aria-required="true"
                  aria-invalid={errors.service ? 'true' : 'false'}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-services">AI & Machine Learning Services</SelectItem>
                  <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity Services</SelectItem>
                  <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                  <SelectItem value="it-consulting">IT Consulting</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure Solutions</SelectItem>
                  <SelectItem value="custom-development">Custom Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p id="service-error" className="text-red-400 text-sm mt-1" role="alert">
                  {errors.service}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-zion-slate-light mb-2">
                Budget Range
              </label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleSelectChange('budget', value)}
              >
                <SelectTrigger 
                  id="budget"
                  className="bg-zion-blue border-zion-purple/30 text-white focus:border-zion-cyan"
                >
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-10k">Under $10,000</SelectItem>
                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="over-500k">Over $500,000</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-zion-slate-light mb-2">
              Timeline
            </label>
            <Select
              value={formData.timeline}
              onValueChange={(value) => handleSelectChange('timeline', value)}
            >
              <SelectTrigger 
                id="timeline"
                className="bg-zion-blue border-zion-purple/30 text-white focus:border-zion-cyan"
              >
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-3-months">1-3 months</SelectItem>
                <SelectItem value="3-6-months">3-6 months</SelectItem>
                <SelectItem value="6-12-months">6-12 months</SelectItem>
                <SelectItem value="over-12-months">Over 12 months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zion-slate-light mb-2">
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={errors.description ? 'true' : 'false'}
              aria-describedby={errors.description ? 'description-error' : undefined}
              rows={4}
              className={`w-full px-3 py-2 bg-zion-blue border border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none rounded-md resize-vertical ${
                errors.description ? 'border-red-500' : ''
              }`}
              placeholder="Please describe your project requirements, goals, and any specific needs..."
            />
            {errors.description && (
              <p id="description-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.description}
              </p>
            )}
          </div>
          
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/80 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isSubmitting ? "Submitting quote request..." : "Submit quote request"}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-zion-blue-dark mr-2" aria-hidden="true"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                  Submit Quote Request
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

