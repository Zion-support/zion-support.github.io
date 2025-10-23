=======
import {CheckCircle, Phone, Mail, Star} from 'lucide-react';
import React, {useState} from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

constDemoPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''

  constdemoFeatures= [
    {icon: Brain,
      title: 'AI Solutions Demo',
      description: 'See our AI services in action with live demonstrations'
   },
    {icon: Shield,
      title: 'Security Assessment',
      description: 'Get a free security evaluation of your current setup'
   },
    {icon: Zap,
      title: 'Performance Analysis',
      description: 'Learn how to optimize your business processes'
   },
    {icon: Users,
      title: 'Team Training',
      description: 'Hands-on training for your team members'

  consttestimonials= [
    {name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      text: 'The demo was incredibly insightful. We saw immediate value in their AI solutions.',
      rating:5},
    {name: 'Michael Chen',
      company: 'InnovateLabs',
      text: 'Professional team with deep expertise. The demo exceeded our expectations.',
      rating:5},
    {name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      text: 'Clear, concise, and very informative. Highly recommend scheduling a demo.',

  return (
  <><SEOOptimizertitle="Request a Demo - ZionTechGroup"
        description="Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology."
        keywords={['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']}
        canonicalUrl="https://ziontechgroup.com/demo"
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Enter your fullname"
                      /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                    </labe><inputtype="email"
                       id="email"
                       name="email"
                        requiredvalue={formData.email}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Enter youremail"
                      /></di><di v><labelhtmlFor="company"className="block text-sm font-medium text-gray-300mb-2">Company Name *
                    </labe><inputtype="text"
                       id="company"
                       name="company"
                        requiredvalue={formData.company}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Enter your companyname"
                      /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number
                    </labe><inputtype="tel"
                       id="phone"
                       name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Enter your phonenumber"
                      /></di><di v><labelhtmlFor="service"className="block text-sm font-medium text-gray-300mb-2">Service of Interest
                    </labe><selectid="service"
                       name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                      ><optionvalue="">Selectaservice</optio><optionvalue="ai-services">AIServices</optio><optionvalue="it-services">ITServices</optio><optionvalue="cloud-services">CloudServices</optio><optionvalue="cybersecurity">Cybersecurity</optio><optionvalue="data-analytics">DataAnalytics</optio><optionvalue="custom-solution">CustomSolution</optio></selec></di><di v><labelhtmlFor="message"className="block text-sm font-medium text-gray-300mb-2">Additional Information
                    </labe><textareaid="message"
                       name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}

export default DemoPage