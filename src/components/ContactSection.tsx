import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    website: string;
  };
  onPhoneClick: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo, onPhoneClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of companies already using our AI-powered solutions to achieve unprecedented growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center space-x-2 group"
              onClick={onPhoneClick}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Phone</p>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-white font-semibold text-lg hover:text-cyan-200 transition-colors"
                  onClick={onPhoneClick}
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold text-lg hover:text-cyan-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Address</p>
                <p className="text-white font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Business Hours</p>
                <p className="text-white font-semibold">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;