import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, IconComponent, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

const [isSubmitting, setIsSubmitting] = useState(false);

const [isSubmitted, setIsSubmitted] = useState(false);

const handleInputChange = () => {
  return;
} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

const contactInfo = [
    // ... features
  ];

  const services = [
    'AI Solutions',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Micro SAAS',
    '5G Solutions',
    'Digital Transformation',
    'Custom Development',
    'Consulting'
  ];
  if (isSubmitted) {
    return (
    <>
        <Helmet>
          <title>Thank You - Zion Tech Group | Contact Confirmation</title>
          <meta name="description" content="Thank you for contacting Zion Tech Group. We'll get back to you within 24 hours." />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          
        <div className="max-w-2xl mx-auto text-center">
            
        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You for <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Contacting Us</span>!
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We've received your message and will get back to you within 24 hours. 
              Our team is excited to discuss how we can help transform your business.
            </p>
            
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What happens next?</h3>
              
        <div className="space-y-4 text-left">
                
        <div className="flex items-start">
                  
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Initial Review</h4>
                    
          <p className="text-gray-300">Our team will review your requirements and prepare a customized proposal.</p>
                  </div>
                </div>
                
        <div className="flex items-start">
                  
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Consultation Call</h4>
                    
          <p className="text-gray-300">We'll schedule a call to discuss your project in detail.</p>
                  </div>
                </div>
                
        <div className="flex items-start">
                  
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Project Kickoff</h4>
                    
          <p className="text-gray-300">Once approved, we'll begin working on your solution immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Another Message
              </button>
              <a
                href="/"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  );
};
export default Contact;