import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        description: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const serviceOptions = [
    'AI & Business Solutions',
    'Cybersecurity Suite',
    'Cloud Infrastructure',
    'Digital Marketing',
    'Financial Solutions',
    'Manufacturing Solutions',
    'IoT Services',
    'Blockchain Services',
    'Custom Development'
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000'
  ];

  const timelineOptions = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)'
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h2>
            <p className="text-zion-slate-light text-lg mb-6">
              Thank you for your interest! Our team will review your requirements and get back to you within 24 hours with a detailed quote.
            </p>
            <div className="bg-zion-blue/20 rounded-lg p-4">
              <p className="text-zion-slate-light">
                <strong>What happens next?</strong><br />
                • We'll analyze your requirements<br />
                • Prepare a customized solution<br />
                • Send you a detailed quote<br />
                • Schedule a consultation call
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get Your Custom Quote</h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Ready to transform your business? Fill out the form and our team will provide you with a customized quote tailored to your specific needs and budget.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <Phone className="h-6 w-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <Mail className="h-6 w-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <MapPin className="h-6 w-6 text-zion-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-zion-blue/20 rounded-xl border border-zion-cyan/30">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-3">
                {[
                  '✓ 15+ years of industry experience',
                  '✓ 500+ successful projects delivered',
                  '✓ 24/7 technical support',
                  '✓ Competitive pricing & flexible terms',
                  '✓ Custom solutions for your business'
                ].map((benefit, index) => (
                  <p key={index} className="text-zion-slate-light">{benefit}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <Card className="bg-zion-blue border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Request Your Quote</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Tell us about your project and we'll provide a detailed quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/80 py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-zion-blue-dark"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Get Your Quote
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}