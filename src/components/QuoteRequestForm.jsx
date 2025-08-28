import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          <CheckCircle className="h-16 w-16 text-zion-cyan mx-auto mb-6" />
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Email Address *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Company Name
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                placeholder="Enter company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Phone Number
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Service Type *
              </label>
              <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                <SelectTrigger className="bg-zion-blue border-zion-purple/30 text-white focus:border-zion-cyan">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue border-zion-purple/30">
                  <SelectItem value="ai-services">AI & Machine Learning</SelectItem>
                  <SelectItem value="it-infrastructure">IT Infrastructure</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="cloud-services">Cloud Services</SelectItem>
                  <SelectItem value="consulting">Strategic Consulting</SelectItem>
                  <SelectItem value="custom-development">Custom Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Budget Range
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                <SelectTrigger className="bg-zion-blue border-zion-purple/30 text-white focus:border-zion-cyan">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue border-zion-purple/30">
                  <SelectItem value="under-10k">Under $10,000</SelectItem>
                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                  <SelectItem value="over-500k">Over $500,000</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-light mb-2">
              Timeline
            </label>
            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
              <SelectTrigger className="bg-zion-blue border-zion-purple/30 text-white focus:border-zion-cyan">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-purple/30">
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
            <label className="block text-sm font-medium text-zion-slate-light mb-2">
              Project Description *
            </label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="bg-zion-blue border-zion-purple/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
              placeholder="Please describe your project requirements, goals, and any specific details that would help us provide an accurate quote..."
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90 px-8 py-3 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-zion-blue-dark mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
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

