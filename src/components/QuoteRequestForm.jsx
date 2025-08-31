import React, { useState } from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/Button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import { Mail, Phone, Building, Send, CheckCircle, AlertCircle } from 'lucide-react';
export const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    urgency: 'medium',
    contactMethod: 'email',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
  const [errors, setErrors] = useState({});

=======
  const [errors, setErrors] = useState({ /* empty */ });
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const serviceTypes = [
    { value: 'ai-services', label: 'AI & Machine Learning Services' },
    { value: 'it-solutions', label: 'IT Infrastructure & Solutions' },
    { value: 'talent-hiring', label: 'Talent Acquisition & Staffing' },
    { value: 'equipment', label: 'Equipment & Hardware' },
    { value: 'consulting', label: 'IT Consulting & Strategy' },
    { value: 'custom-development', label: 'Custom Software Development' },
    { value: 'other', label: 'Other Services' }
  ];
  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Within 1 week)' },
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '1-month', label: '1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-months-plus', label: '6+ months' }
  ];
  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-plus', label: '$100,000+' },
    { value: 'to-be-discussed', label: 'To be discussed' }
  ];
  const urgencyLevels = [
    { value: 'low', label: 'Low - Planning phase' },
    { value: 'medium', label: 'Medium - Ready to start soon' },
    { value: 'high', label: 'High - Need to start immediately' },
    { value: 'critical', label: 'Critical - Emergency situation' }
  ];
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
<<<<<<< HEAD
      }));
    }
=======
      }))}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
  const validateForm = () => {
<<<<<<< HEAD
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
=======
    const newErrors = { /* empty */ };
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'}
    if (!formData.company.trim()) newErrors.comp = 'Comp name is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    if (!formData.budget) newErrors.budget = 'Budget range is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    setErrors(newErrors);
<<<<<<< HEAD
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Quote request error:', error);
      setErrors({ submit: 'An error occurred while submitting your request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
=======
    return Object.keys(newErrors).length === 0};
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return}
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      // In a real app, you would send the data to your backend
      // // // // // // // console.log('Quote request submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comp: '',
        serviceType: '',
        projectDescription: '',
        timeline: '',
        budget: '',
        urgency: 'medium',
        contactMethod: 'email',
        agreeToTerms: false,
        agreeToMarketing: false
      // // // // // // // console.error('Error submitting quote request:', error);
      setErrors({ submit: 'Failed to submit request. Please try again.' });
    } finally {
      setIsSubmitting(false);
=======
      })} catch (error) {
      console.error('Error submitting quote request:', error);
      setErrors({ submit: 'Failed to submit request. Please try again.' })} finally {
      setIsSubmitting(false)}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  };
  if (isSubmitted) {
    return (
<<<<<<< HEAD
      <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">Quote Request Submitted!</h3>
          <p className="text-zinc-300 mb-6">
            Thank you for your interest in Zion Tech Group. We've received your quote request and will get back to you within 24 hours with a detailed proposal.
          </p>
          <div className="space-y-3 text-sm text-zinc-400">
            <p>What happens next:</p>
            <ul className="space-y-1">
              <li>• Our team will review your requirements</li>
              <li>• We'll prepare a customized quote</li>
              <li>• You'll receive a detailed proposal via email</li>
              <li>• We'll schedule a follow-up call if needed</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

=======
      <Card className="max-w-2xl mx-auto bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Quote Request Submitted!
            </h3>
            <p className="text-green-700 mb-6">
              Thank you for your interest! Our team will review your request and get back to you within 24 hours with a detailed quote.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-green-600 hover:bg-green-700"
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    )}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <Card className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Get Your Custom Quote</CardTitle>
        <CardDescription className="text-zinc-300">
          Fill out the form below and we'll provide you with a detailed quote within 24 hours.
        </CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className="p-6">
=======
      <CardContent>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                First Name *
              </label>
              <Input
                type="text"
                value={formData.firstName}
<<<<<<< HEAD
                onChange={(e) => handleChange('firstName', e.target.value)}
                className={`${errors.firstName ? 'border-red-500' : 'border-zinc-600'}`}
                placeholder="Enter first name"
=======
                onChange = {
  (e) => handleChange('firstName',
  e.target.value)
}
                className={errors.firstName ? 'border-red-500' : ''}
                placeholder="Enter your first name"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Last Name *
              </label>
              <Input
                type="text"
                value={formData.lastName}
<<<<<<< HEAD
                onChange={(e) => handleChange('lastName', e.target.value)}
                className={`${errors.lastName ? 'border-red-500' : 'border-zinc-600'}`}
                placeholder="Enter last name"
=======
                onChange = {
  (e) => handleChange('lastName',
  e.target.value)
}
                className={errors.lastName ? 'border-red-500' : ''}
                placeholder="Enter your last name"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email Address *
              </label>
<<<<<<< HEAD
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`pl-10 ${errors.email ? 'border-red-500' : 'border-zinc-600'}`}
                  placeholder="Enter your email"
                />
              </div>
=======
              <Input
                type="email"
                value={formData.email}
                onChange = {
  (e) => handleChange('email',
  e.target.value)
}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="your.email@company.com"
              />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Phone Number
              </label>
<<<<<<< HEAD
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="pl-10 border-zinc-600"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
=======
              <Input
                type="tel"
                value={formData.phone}
                onChange = {
  (e) => handleChange('phone',
  e.target.value)
}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
          {/* Comp Information */}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Company Name *
            </label>
<<<<<<< HEAD
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className={`pl-10 ${errors.company ? 'border-red-500' : 'border-zinc-600'}`}
                placeholder="Enter company name"
              />
            </div>
            {errors.company && (
              <p className="text-red-400 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.company}
              </p>
            )}
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Service Type *
              </label>
              <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                <SelectTrigger className={`${errors.serviceType ? 'border-red-500' : 'border-zinc-600'}`}>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.serviceType}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Timeline *
              </label>
              <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                <SelectTrigger className={`${errors.timeline ? 'border-red-500' : 'border-zinc-600'}`}>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map((timeline) => (
                    <SelectItem key={timeline.value} value={timeline.value}>
                      {timeline.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.timeline && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.timeline}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Budget Range *
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                <SelectTrigger className={`${errors.budget ? 'border-red-500' : 'border-zinc-600'}`}>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((budget) => (
                    <SelectItem key={budget.value} value={budget.value}>
                      {budget.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && (
                <p className="text-red-400 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.budget}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Urgency Level
              </label>
              <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
                <SelectTrigger className="border-zinc-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((urgency) => (
                    <SelectItem key={urgency.value} value={urgency.value}>
                      {urgency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
=======
            <Input
              type="text"
              value={formData.company}
              onChange = {
  (e) => handleChange('company',
  e.target.value)
}
              className={errors.company ? 'border-red-500' : ''}
              placeholder="Your Company Inc."
            />
            {errors.comp && (
              <p className="text-red-500 text-sm mt-1">{errors.comp}</p>
            )}
          </div>
          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type *
            </label>
            <Select
              value={formData.serviceType}
              onValueChange = {
  (value) => handleChange('serviceType',
  value)
}
            >
              <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select a service type" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
            )}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
          {/* Project Description */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Project Description *
            </label>
            <Textarea
              value={formData.projectDescription}
<<<<<<< HEAD
              onChange={(e) => handleChange('projectDescription', e.target.value)}
              className={`${errors.projectDescription ? 'border-red-500' : 'border-zinc-600'}`}
              placeholder="Please describe your project requirements, goals, and any specific needs..."
=======
              onChange = {
  (e) => handleChange('projectDescription',
  e.target.value)
}
              className={errors.projectDescription ? 'border-red-500' : ''}
              placeholder="Please describe your project requirements, goals, and  specific needs..."
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              rows={4}
            />
            {errors.projectDescription && (
              <p className="text-red-400 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.projectDescription}
              </p>
            )}
          </div>
<<<<<<< HEAD

          {/* Preferences */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Preferred Contact Method
            </label>
            <Select value={formData.contactMethod} onValueChange={(value) => handleChange('contactMethod', value)}>
              <SelectTrigger className="border-zinc-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Checkboxes */}
=======
          {/* Timeline and Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <Select
                value={formData.timeline}
                onValueChange = {
  (value) => handleChange('timeline',
  value)
}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelineOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <Select
                value={formData.budget}
                onValueChange = {
  (value) => handleChange('budget',
  value)
}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Urgency and Contact Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Urgency
              </label>
              <Select
                value={formData.urgency}
                onValueChange = {
  (value) => handleChange('urgency',
  value)
}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {urgencyLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <Select
                value={formData.contactMethod}
                onValueChange = {
  (value) => handleChange('contactMethod',
  value)
}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Terms and Marketing */}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          <div className="space-y-4">
            <div className="flex items-start">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
<<<<<<< HEAD
                onCheckedChange={(checked) => handleChange('agreeToTerms', checked)}
=======
                onCheckedChange = {
  (checked) => handleChange('agreeToTerms',
  checked)
}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                className="mt-1"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-zinc-300">
                I agree to the{' '}
                <a href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Privacy Policy
                </a> *
              </label>
            </div>
<<<<<<< HEAD
            {errors.agreeToTerms && (
              <p className="text-red-400 text-sm ml-7 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.agreeToTerms}
              </p>
            )}

            <div className="flex items-start">
              <Checkbox
                id="marketing"
                checked={formData.agreeToMarketing}
                onCheckedChange={(checked) => handleChange('agreeToMarketing', checked)}
=======
            <div className="flex items-start space-x-3">
              <Checkbox
                id="marketing"
                checked={formData.agreeToMarketing}
                onCheckedChange = {
  (checked) => handleChange('agreeToMarketing',
  checked)
}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                className="mt-1"
              />
              <label htmlFor="marketing" className="ml-3 text-sm text-zinc-300">
                I want to receive updates about new services, industry insights, and special offers
              </label>
            </div>
<<<<<<< HEAD
=======
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
          </div>
          {/* Submit Error */}
          {errors.submit && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-400 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {errors.submit}
              </p>
            </div>
          )}
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
<<<<<<< HEAD
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
          >
=======
            className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white py-3 text-lg font-semibold"
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting Request...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Quote Request
              </>
            )}
          </Button>
<<<<<<< HEAD
        </form>
      </CardContent>
    </Card>
  );
};
=======
          <p className="text-sm text-gray-600 text-center">
            * Required fields. We'll respond to your quote request within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  )};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
