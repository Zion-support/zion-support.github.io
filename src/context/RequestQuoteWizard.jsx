import React, { createContext, useContext, useState } from 'react';

const RequestQuoteWizardContext = createContext();

export const useRequestQuoteWizard = () => {
  const context = useContext(RequestQuoteWizardContext);
  if (!context) {
    throw new Error('useRequestQuoteWizard must be used within a RequestQuoteWizardProvider');
  }
  return context;
};

export const RequestQuoteWizardProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setFormData({
      service: '',
      company: '',
      name: '',
      email: '',
      phone: '',
      description: '',
      budget: '',
      timeline: ''
    });
  };

  const value = {
    currentStep,
    formData,
    nextStep,
    prevStep,
    updateFormData,
    resetWizard
  };

  return (
    <RequestQuoteWizardContext.Provider value={value}>
      {children}
    </RequestQuoteWizardContext.Provider>
  );
};