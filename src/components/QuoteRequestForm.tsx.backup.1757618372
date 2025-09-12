<<<<<<< HEAD
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Building, Users, Calendar, MessageSquare, CheckCircle } from 'lucide-react';

interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  projectType: string;
  timeline: string;
  budget: string;
  description: string;
  services: string[];
}

const QuoteRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companySize: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    services: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Digital Transformation',
    'IT Consulting',
    'Software Development',
    'Data Analytics',
    'DevOps & Automation',
    'Blockchain & Web3',
    'Enterprise Solutions'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        companySize: '',
        projectType: '',
        timeline: '',
        budget: '',
        description: '',
        services: []
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h2>
        <p className="text-gray-300 mb-6">
          Thank you for your interest in Zion Tech Group. Our team will review your request 
          and get back to you within 24 hours with a detailed quote.
        </p>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center text-gray-300">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3">1</div>
              <span>Our experts will analyze your requirements</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3">2</div>
              <span>We'll prepare a customized solution and quote</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3">3</div>
              <span>Schedule a consultation to discuss details</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-2">
            Request a Custom Quote
          </CardTitle>
          <CardDescription className="text-gray-300 text-lg">
            Tell us about your project and we'll provide a detailed quote tailored to your needs
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Company Size *
                  </label>
                  <select
                    required
                    value={formData.companySize}
                    onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Contact Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Project Timeline *
                  </label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Select project type</option>
                  <option value="New Development">New Development</option>
                  <option value="System Integration">System Integration</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Maintenance">Maintenance & Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Select budget range</option>
                  <option value="$10K - $50K">$10K - $50K</option>
                  <option value="$50K - $100K">$50K - $100K</option>
                  <option value="$100K - $250K">$100K - $250K</option>
                  <option value="$250K - $500K">$250K - $500K</option>
                  <option value="$500K+">$500K+</option>
                </select>
              </div>
            </div>

            {/* Services Needed */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Services Needed (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-4 h-4 text-cyan-500 bg-white/10 border-white/30 rounded focus:ring-cyan-400"
                    />
                    <span className="text-gray-300">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400"
                placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 text-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Request Quote'}
              </Button>
            </div>

            {/* Contact Information */}
            <div className="text-center text-gray-400 text-sm">
              <p>Need immediate assistance? Contact us directly:</p>
              <div className="flex justify-center items-center space-x-6 mt-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteRequestForm;
=======

import { useState } from "react";
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientHeading } from "@/components/GradientHeading";
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress";
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep";
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep";
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep";
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep";
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep";
import { AutoFillModal } from "@/components/QuoteRequestForm/AutoFillModal";
import { QuoteFormData } from "@/types/quotes";
import { Sparkles, Loader2 } from 'lucide-react'
import { z } from "zod";

export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";

const serviceStepSchema = z.object({
  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() }),
});

export function QuoteRequestForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoFillLoading, setAutoFillLoading] = useState(false);
  const [autoFillOpen, setAutoFillOpen] = useState(false);
  
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: "",
    serviceCategory: "",
    specificItem: null,
    projectName: "",
    projectDescription: "",
    startDate: undefined,
    endDate: undefined,
    timeline: "flexible",
    budget: {
      amount: 0,
      type: "fixed"
    },
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  });
  
  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
  };
  
  const handleNext = () => {
    switch (currentStep) {
      case "service": {
        const result = serviceStepSchema.safeParse({
          serviceType: formData.serviceType,
          specificItem: formData.specificItem,
        });
        if (!result.success) {
          toast({
            title: "Service Required",
            description: "Please select a service before continuing.",
            variant: "destructive",
          });
          return;
        }
        setCurrentStep("details");
        break;
      }
      case "details":
        setCurrentStep("timeline");
        break;
      case "timeline":
        setCurrentStep("budget");
        break;
      case "budget":
        setCurrentStep("summary");
        break;
      default:
        break;
    }
  };
  
  const handleBack = () => {
    switch (currentStep) {
      case "details":
        setCurrentStep("service");
        break;
      case "timeline":
        setCurrentStep("details");
        break;
      case "budget":
        setCurrentStep("timeline");
        break;
      case "summary":
        setCurrentStep("budget");
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the data to your backend
      logDebug("Submitting form data:", { data: formData });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon.",
      });
      
      // Redirect to confirmation page or homepage
      router.push("/");
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAutoFill = async (description: string) => {
    setAutoFillLoading(true);
    try {
      const res = await fetch("/api/openai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectDescription: description }),
      });
      if (!res.ok) throw new Error("Request failed");
      const { category, itemId, timeline, budget } = await res.json();
      updateFormData({
        projectDescription: description,
        serviceType: category,
        serviceCategory: category,
        specificItem: itemId
          ? { id: itemId, title: "AI Selected Item", category }
          : formData.specificItem,
        timeline: timeline || formData.timeline,
        budget: { ...formData.budget, ...(budget || {}) },
      });
      setCurrentStep("summary");
      setAutoFillOpen(false);
    } catch (err) {
      logErrorToProduction("Auto-fill API error", err as Error, { component: 'QuoteRequestForm', projectDescription: description });
      toast({
        title: "Auto-fill Failed",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAutoFillLoading(false);
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case "service":
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
      case "details":
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
      case "timeline":
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
      case "budget":
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
      case "summary":
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <GradientHeading>Request a Quote</GradientHeading>
          <p className="text-zion-slate-light mt-4">
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
          <Button
            size="sm"
            onClick={() => setAutoFillOpen(true)}
            disabled={autoFillLoading}
            className="mt-2"
          >
            {autoFillLoading && (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            )}
            Auto Fill with AI
          </Button>
        </div>
        
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={currentStep} />
            
            <div className="mt-8">
              {renderStepContent()}
            </div>
            
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                >
                  Back
                </Button>
              )}
              
              {currentStep !== "summary" ? (
                <Button 
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  Continue
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AutoFillModal
        open={autoFillOpen}
        onOpenChange={setAutoFillOpen}
        onSubmit={handleAutoFill}
        loading={autoFillLoading}
      />
    </div>
  );
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
