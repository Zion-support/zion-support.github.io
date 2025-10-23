'use client';
import {CheckCircle, Phone, Mail, Star} from 'lucide-react';
import React, {useState} from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';

constDemoPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
 });

  consthandleInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {const{namevalue} = e.targetsetFormData(prev=> ({...prev,
      [name]: value
   }));
  };

  consthandleSubmit= (e: React.FormEvent) => {e.preventDefault();
    // Handle formsubmissionconstsubject= `Demo Request from${formData.name} -${formData.company}`;
    constbody= `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage:${formData.message}`;
    windo w.location.href= `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
   }
  ];

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
      rating:5}
  ];

  return (
  <><SEOOptimizertitle="Request a Demo - ZionTechGroup"
        description="Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology."
        keywords={['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']}
        canonicalUrl="https://ziontechgroup.com/demo"
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-90 0via-purple-900to-slate-900"><Navigation /><mainclassName="pt-16">{/* HeroSection */}
        <sectionclassName="container mx-auto px-4 py-16text-center"><divclassName="max-w-4xlmx-auto"><spanclassName="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-4 xlmd:text-6 xl font-bold text-whitemb-6neon-text">Request a Demo
            </h><spanclassName="text-xlmd:text-2 xl text-cyan-400mb-8"></className="text-xlmd:text-2 xl text-cyan-400mb-8">See our AI and IT solutions in action
            </p><spanclassName="text-lg text-gray-300mb-12max-w-3xlmx-auto"></className="text-lg text-gray-300mb-12max-w-3xlmx-auto">Schedule a personalized demonstration of our services tailored to your business needs. 
                Our experts will show you exactly how we can help transform your operations.
            </p></di></sectio>{/* DemoFeatures */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">What to Expect
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{demoFeatures.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><feature.iconclassName="w-12h-1 2text-cyan-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300">{feature.description}</p></di>))}
          </di></sectio>{/* DemoForm */}
        <sectionclassName="container mx-auto px-4py-16"><divclassName="max-w-4xlmx-auto"><divclassName="grid grid-cols-1 lg:grid-cols-2gap-12">{/* Form */}
              <divclassName="cyber-cardp-8"><h2className="text-2 xl font-boldtext-whitemb-6">ScheduleYourDemo</h><formonSubmit={handleSubmit}className="space-y-6"><di v><labelhtmlFor="name"className="block text-sm font-medium text-gray-300mb-2">Full Name *
                    </labe><inputtype="text"
                       id="name"
                       name="name"
                        requiredvalue={formData.name}
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
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                       placeholder="Tell us about your specific needs orquestions"
                      /></di><
                     type="submit"
                     className="w-full cyber-button py-3px-6text-center"
                    ></
                     type="submit"
                     className="w-full cyber-button py-3px-6text-center"
                    >Schedule Demo
                  </butto></for></di>{/* ContactInfo */}
              <divclassName="space-y-8"><divclassName="cyber-cardp-8"><h3className="text-xl font-boldtext-whitemb-6">Why ChooseOurDemo?</h><ulclassName="space-y-4"><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">Personalized to yourbusinessneeds</spa></l><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">Live demonstration ofoursolutions</spa></l><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">Expert consultationandQ&A</spa></l><liclassName="flexitems-start"><CheckCircleclassName="w-5 h-5 text-green-400mr-3mt-1flex-shrink-0" /><spanclassName="text-gray-300">No obligation,completelyfree</spa></l></u></di><divclassName="cyber-cardp-8"><h3className="text-xl font-boldtext-whitemb-6">ContactInformation</h><divclassName="space-y-4"><divclassName="flexitems-center"><PhoneclassName="w-5 h-5 text-cyan-400mr-3" /><ahref="tel:+13024640950"className="text-gray-300hover:text-cyan-400">(30 2)464-0950</a></di><divclassName="flexitems-center"><MailclassName="w-5 h-5 text-cyan-400mr-3" /><ahref="mailto:kleber@ziontechgroup.com"className="text-gray-300hover:text-cyan-400">kleber@ziontechgroup.com
                      </a></di><divclassName="flexitems-center"><ClockclassName="w-5 h-5 text-cyan-400mr-3" /><spanclassName="text-gray-300">Mon-Fri:9AM-6PMEST</spa></di></di></di></di></di></di></sectio>{/* Testimonials */}
        <sectionclassName="container mx-auto px-4py-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text">What Our Clients Say
          </h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
             <divkey={index}className="cyber-cardp-6"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                   <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
                </di><pclassName="text-gray-300mb-4">"{testimonial.text}"</p><di v><divclassName="font-boldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.company}</di></di></di>))}
          </di></sectio></mai><Footer /></di></>
  );
};

export default DemoPage;