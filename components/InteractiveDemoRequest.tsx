<<<<<<< HEAD
import React from 'react';
=======
"use client";
import React{ useState } from 'react';

CalendarClockUsersZapCheckCircleArrowRightX

interface DemoFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  companySize: string;
  industry: string;
  interests: string[];
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const industries = [
  ', 'Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Other'
];

const companySizes = [
  '1-10 employees'11-50 employees'51-200 employees'201-1000 employees'1000+ employees'
];

const interests = [
  'AI 'Automation', 'Cybersecurity'Cloud 'Solutions', 'Data 'Analytics', 'Digital 'Transformation', 'Process Optimization'
];

const timeSlots = [
  '9:00 AM'10:00 AM'11:00 AM'1:00 PM'2:00 PM'3:00 PM'4:00 PM'
];

export default function InteractiveDemoRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    companySize: '',
    industry: '',
    interests: [],
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmittedsetIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof DemoFormDatavalue: string | string[]) => {
    setFormData(prev => ({ ...prev[field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interestsinterest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Demo request submitted:'formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const InteractiveDemoRequest: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveDemoRequest</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default InteractiveDemoRequest;