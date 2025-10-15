import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, MessageSquare, CheckCircle } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

const [isSubmitting, setIsSubmitting] = useState(false);

const [isSubmitted, setIsSubmitted] = useState(false);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '', preferredDate: '', preferredTime: '' });
    }, 3000);
  };

const demoOptions = [
    { icon: <Calendar className="w-6 h-6" />, title: "AI Solutions Demo", description: "See our AI analytics, content generation, and automation tools in action.", duration: "30 minutes" },
    { icon: <Clock className="w-6 h-6" />, title: "5G Technology Demo", description: "Experience next-generation connectivity and IoT solutions powered by 5G.", duration: "45 minutes" },
    { icon: <User className="w-6 h-6" />, title: "IT Services Demo", description: "Explore our cloud infrastructure, security, and DevOps solutions.", duration: "30 minutes" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Custom Demo", description: "Tailored demonstration based on your specific business needs and requirements.", duration: "60 minutes" }
  ];
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Demo page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Demo</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                See our AI solutions, 5G technology, and IT services in action. 
                Get a personalized demonstration tailored to your business needs.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Demo</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the type of demonstration that best fits your interests and business needs
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoOptions.map((option, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  
        <div className="text-center">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                    
          <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                    
        <div className="text-cyan-400 text-sm font-medium">{option.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-2xl mx-auto">
              
        <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Schedule Your Demo</h2>
                
          <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default DemoPage;