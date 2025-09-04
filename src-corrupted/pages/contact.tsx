import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Shield, 
  Award, 
  Users, 
  Zap 
} from 'lucide-react';

const Contact: React.FC = (props: any) => {
  return (
    <>
      <SEO title="Contact - Zion Tech Group" />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
          <p className="text-lg text-gray-600 mb-8">We'd love to hear from you. Reach us via phone, email, or visit our office.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+13024640950" className="border rounded-lg p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
              <Phone className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Mobile</div>
                <div className="font-semibold text-gray-900">+1 302 464 0950</div>
              </div>
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border rounded-lg p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
              <Mail className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">E-mail</div>
                <div className="font-semibold text-gray-900">kleber@ziontechgroup.com</div>
              </div>
            </a>
            <div className="border rounded-lg p-5 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Address</div>
                <div className="font-semibold text-gray-900">364 E Main St STE 1008 Middletown DE 19709</div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Business Hours</h2>
            <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM EST</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;