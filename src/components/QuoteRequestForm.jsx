import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
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
  const [errors, setErrors] = useState({});

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
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you would send the data to your backend
      console.log('Quote request submitted:', formData);

      setIsSubmitted(true);
      setFormData({
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
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setErrors({ submit: 'Failed to submit request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
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
            >
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Quote Request Form</CardTitle>
        <CardDescription className="text-center">
          Please fill out the form below with your project requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className={errors.firstName ? 'border-red-500' : ''}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className={errors.lastName ? 'border-red-500' : ''}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <Input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className={errors.company ? 'border-red-500' : ''}
              placeholder="Enter your company name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company}</p>
            )}
          </div>

          {/* Project Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <Textarea
              value={formData.projectDescription}
              onChange={(e) => handleChange('projectDescription', e.target.value)}
              className={errors.projectDescription ? 'border-red-500' : ''}
              placeholder="Please describe your project requirements, goals, and any specific details..."
              rows={4}
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
            )}
          </div>

          {/* Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <Select value={formData.contactMethod} onValueChange={(value) => handleChange('contactMethod', value)}>
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
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleChange('agreeToTerms', checked)}
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                I agree to the terms and conditions *
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToMarketing"
                checked={formData.agreeToMarketing}
                onCheckedChange={(checked) => handleChange('agreeToMarketing', checked)}
              />
              <label htmlFor="agreeToMarketing" className="text-sm text-gray-700">
                I would like to receive updates about new services and offers
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Quote Request
                </>
              )}
            </Button>
          </div>

          {errors.submit && (
            <div className="text-center">
              <p className="text-red-500 text-sm">{errors.submit}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
