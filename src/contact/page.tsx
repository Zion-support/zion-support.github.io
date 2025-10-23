=======
import React, {useState} from 'react';
import {Send, CheckCircle, Phone, Mail} from 'lucide-react';;
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

constContactPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''

  constservices= [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Mobile App Development',
    'Custom Development',
    'Other'
  ]

                      value={formData.name}
                      onChange={handleInputChange}
                     requiredclassName="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                     placeholder="Your fullname"
                    /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                  </labe><inputtype="email"
                     id="email"
                     name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      value={formData.company}
                      onChange={handleInputChange}
                     className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                     placeholder="Your companyname"
                    /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number
                  </labe><inputtype="tel"
                     id="phone"
                     name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}

export default ContactPage