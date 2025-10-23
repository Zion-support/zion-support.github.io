=======
import {CheckCircle, Phone, Mail, Star} from 'lucide-react';
import React, {useState} from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

constConsultationPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    message: ''

  constconsultationBenefits= [
    {icon: Target,
      title: 'Strategic Assessment',
      description: 'Comprehensive analysis of your current technology stack and business processes'
   },
    {icon: Brain,
      title: 'AI Readiness Evaluation',
      description: 'Determine how AI can best serve your specific business needs'
   },
    {icon: Shield,
      title: 'Security Audit',
      description: 'Identify potential vulnerabilities and security improvements'
   },
    {icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Develop a roadmap for scaling your technology infrastructure'

  constconsultationProcess= [
    {step: '1',
      title: 'Initial Assessment',
      description: 'We review your current setup and understand your business goals'
   },
    {step: '2',
      title: 'Gap Analysis',
      description: 'Identify areas where technology can drive improvement'
   },
    {step: '3',
      title: 'Solution Design',
      description: 'Create a customized technology roadmap for your business'
   },
    {step: '4',
      title: 'Implementation Plan',
      description: 'Provide detailed steps and timeline for your transformation'

  consttestimonials= [
    {name: 'David Thompson',
      company: 'Manufacturing Plus',
      text: 'The free consultation opened our eyes to possibilities we never considered. Highly valuable session.',
      rating:5},
    {name: 'Lisa Wang',
      company: 'Retail Innovations',
      text: 'Professional, insightful, and completely free. They helped us plan our digital transformation.',
      rating:5},
    {name: 'Robert Martinez',
      company: 'Healthcare Solutions',
      text: 'The consultation was worth every minute. Clear recommendations and actionable insights.',

  return (
  <><SEOOptimizertitle="Free Business Consultation - ZionTechGroup"
        description="Get a free30-minute consultation with our technology experts. Discover how AI and IT solutions can transformyourbusiness."
        keywords={['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'ITconsultation']}
        canonicalUrl="https://ziontechgroup.com/consultation"
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
                        /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor="company"className="block text-sm font-medium text-gray-300mb-2">Company Name *
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
                        /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor="industry"className="block text-sm font-medium text-gray-300mb-2">Industry
                      </labe><selectid="industry"
                         name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selectyourindustry</optio><optionvalue="healthcare">Healthcare</optio><optionvalue="finance">Finance</optio><optionvalue="manufacturing">Manufacturing</optio><optionvalue="retail">Retail</optio><optionvalue="technology">Technology</optio><optionvalue="education">Education</optio><optionvalue="other">Other</optio></selec></di><di v><labelhtmlFor="companySize"className="block text-sm font-medium text-gray-300mb-2">Company Size
                      </labe><selectid="companySize"
                         name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selectcompanysize</optio><optionvalue="1-10">1-10employees</optio><optionvalue="1 1-50">11-50employees</optio><optionvalue="5 1-200">51-200employees</optio><optionvalue="20 1-500">201-500employees</optio><optionvalue="500+">500+employees</optio></selec></di></di><di v><labelhtmlFor="currentChallenges"className="block text-sm font-medium text-gray-300mb-2">Current Challenges
                    </labe><textareaid="currentChallenges"
                       name="currentChallenges"
                        rows={3}
                        value={formData.currentChallenges}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Describe your current technologychallenges"
                      /></di><di v><labelhtmlFor="goals"className="block text-sm font-medium text-gray-300mb-2">Business Goals
                    </labe><textareaid="goals"
                       name="goals"
                        rows={3}
                        value={formData.goals}
                        onChange={handleInputChange}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="What are your main businessobjectives?"
                      /></di><divclassName="grid grid-cols-1md:grid-cols-2gap-4"><di v><labelhtmlFor="timeline"className="block text-sm font-medium text-gray-300mb-2">Implementation Timeline
                      </labe><selectid="timeline"
                         name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selecttimeline</optio><optionvalue="immediate">Immediate(0-3months)</optio><optionvalue="short">Short term(3-6months)</optio><optionvalue="medium">Mediumterm(6-12months)</optio><optionvalue="long">Long term (12+months)</optio></selec></di><di v><labelhtmlFor="budget"className="block text-sm font-medium text-gray-300mb-2">Budget Range
                      </labe><selectid="budget"
                         name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                        ><optionvalue="">Selectbudgetrange</optio><optionvalue="under-10k">Under $10,000</optio><optionvalue="10 k-50k">$1 0,000- $50,000</optio><optionvalue="50 k-100k">$5 0,000- $100,000</optio><optionvalue="100 k-500k">$10 0,000- $500,000</optio><optionvalue="500k+">$500000+</optio></selec></di></di><di v><labelhtmlFor="message"className="block text-sm font-medium text-gray-300mb-2">Additional Information
                    </labe><textareaid="message"
                       name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}

export default ConsultationPage