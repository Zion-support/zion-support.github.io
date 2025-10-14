import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';

// Contact information
const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+1-302-464-0950",
    description: "Call us for immediate assistance"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "kleber@ziontechgroup.com",
    description: "Send us an email anytime"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: "Delaware, USA",
    description: "Serving clients globally"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: "24/7 Support",
    description: "We're always here to help"
  }
];

// Contact methods
const contactMethods = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Live Chat",
    description: "Get instant answers to your questions through our live chat support.",
    action: "Start Chat"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Schedule Meeting",
    description: "Book a consultation to discuss your project requirements in detail.",
    action: "Book Now"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Support",
    description: "Send us detailed information about your project and we'll get back to you.",
    action: "Send Email"
  }
];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
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
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get In Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI solutions, 5G technology, and IT services. Get in touch with our experts for consultation and support." />
        <meta name="keywords" content="contact us, AI consultation, 5G services, IT support, tech consulting, get in touch" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with our experts for AI and IT solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
            <p className="text-xl text-gray-300 mb-8">Professional contact solutions and services</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Solutions</h3>
                <p className="text-blue-700">Our team of experts delivers cutting-edge solutions.</p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Other Ways to Reach Us</h2>
                  <p className="text-gray-300 mb-8">
                    Choose the communication method that works best for you.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                          <p className="text-gray-300 mb-4">{method.description}</p>
                          <button className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors duration-300">
                            {method.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Response Time */}
                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-gray-300 text-sm">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly at +1-302-464-0950.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let&apos;s discuss your project and explore how our AI and IT solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Call Now: +1-302-464-0950
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;