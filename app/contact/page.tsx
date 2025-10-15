import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

// Contact information
const contactInfo = [
  { icon: <Phone className="w-6 h-6" />, title: "Phone", details: "+1-302-464-0950", description: "Call us for immediate assistance" },
  { icon: <Mail className="w-6 h-6" />, title: "Email", details: "kleber@ziontechgroup.com", description: "Send us an email anytime" },
  { icon: <MapPin className="w-6 h-6" />, title: "Location", details: "Delaware, USA", description: "Serving clients globally" },
  { icon: <Clock className="w-6 h-6" />, title: "Business Hours", details: "24/7 Support", description: "We're always here to help" }
];
// Contact form data
const ContactPage: React.FC = () => {
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
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 3000);
  };
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Contact page" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Us</span>
              </h1>
              
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business? Get in touch with our experts for a consultation 
                on AI solutions, IT services, and 5G technology.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed. Choose the best way to reach us.
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              { contactInfo.map((info, index) => (
                <div key={index } className="text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                  
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{ info.title }</h3>
                  
          <p className="text-cyan-400 font-semibold mb-2">{ info.details }</p>
                  
          <p className="text-gray-300 text-sm">{ info.description }</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50">
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
