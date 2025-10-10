'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Target, Users, Shield, Brain, Cloud, Database, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development and digital transformation roadmaps',
      features: ['Technology Assessment', 'Digital Roadmap', 'ROI Analysis', 'Risk Management'],
      benefits: ['Clear technology direction', 'Cost optimization', 'Competitive advantage'],
      price: 'Starting at $2,500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Migration Planning', 'Cost Optimization', 'Security Design'],
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Enhanced security'],
      price: 'Starting at $3,500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Strategy',
      description: 'Comprehensive security assessments and implementation strategies',
      features: ['Security Audits', 'Compliance Planning', 'Incident Response', 'Training Programs'],
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation'],
      price: 'Starting at $4,000'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Optimize data architecture and implement modern data solutions',
      features: ['Data Strategy', 'Database Design', 'Analytics Setup', 'Governance Planning'],
      benefits: ['Better data insights', 'Improved decision making', 'Data security'],
      price: 'Starting at $3,000'
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Access to experienced IT consultants with deep industry knowledge',
      icon: Users
    },
    {
      title: 'Cost Savings',
      description: 'Optimize your IT investments and reduce operational costs',
      icon: TrendingUp
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential technology risks before they become problems',
      icon: Shield
    },
    {
      title: 'Competitive Advantage',
      description: 'Leverage technology to stay ahead of your competition',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
       </Helmet> </Helmet><title>IT Consulting Services - Zion Tech Gro</title>u</title>p</title>
       <//title> <//title><meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." />
       </meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /> </meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /><meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" />
    </meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /> </meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /> </Helmet>

     <//Helmet> <//Helmet><div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      </div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> </div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"> </div><Navigation />

       </Navigation /> </Navigation /><main className="pt-24 pb-16 px-4">
         </main className="pt-24 pb-16 px-4"> </main className="pt-24 pb-16 px-4"><div className="max-w-7xl mx-auto">{/* Hero Section </div className="max-w-7xl mx-auto">*</div className="max-w-7xl mx-auto">/</div>}</div>
           <//div> <//div><div className="text-center mb-16">
            </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">IT Consulting Servic</h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">e</h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">s</h1><p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your business with expert IT consulting. We provide strategic guidanc</p className="text-xl text-gray-600 max-w-3xl mx-auto">e</p className="text-xl text-gray-600 max-w-3xl mx-auto">,</p>
                digital transformation, and technology solutions that drive growth and efficienc<//p>y<//p>.</p>
          <//p> <//p> </div>

            {/* Services Section */}
           <//div> <//div><div className="grid md:grid-cols-2 gap-8 mb-16">{consultingServices.map((service, index) =</div className="grid md:grid-cols-2 gap-8 mb-16">></div className="grid md:grid-cols-2 gap-8 mb-16"> </div>(</div>
               <//div> <//div><div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                 </div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"> </div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"><div className="flex items-center mb-6">
                   </div className="flex items-center mb-6"> </div className="flex items-center mb-6"><div className="p-3 bg-blue-100 rounded-xl mr-4">
                    </div className="p-3 bg-blue-100 rounded-xl mr-4"> </div className="p-3 bg-blue-100 rounded-xl mr-4"> </div><service.icon className="w-8 h-8 text-blue-600" />
                  </service.icon className="w-8 h-8 text-blue-600" /> </service.icon className="w-8 h-8 text-blue-600" /> </div>
                   <//div> <//div><div>
                    </div> </div> </div><h3 className="text-2xl font-bold text-gray-900">{service.title</h3 className="text-2xl font-bold text-gray-900">}</h3 className="text-2xl font-bold text-gray-900"><p className="text-gray-600">{service.descriptio</p className="text-gray-600">n</p className="text-gray-600">}</p>
                  <//p> <//p> </div>
                <//div> <//div> </div>

                 <//div> <//div><div className="mb-6">
                  </div className="mb-6"> </div className="mb-6"> </div><h4 className="font-semibold text-gray-900 mb-3">Key Features</h4 className="font-semibold text-gray-900 mb-3">:</h4 className="font-semibold text-gray-900 mb-3"><ul className="space-y-2">{service.features.map((feature, idx) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                       <//ul> <//ul><li key={idx} className="flex items-center text-gray-600">
                         </li key={idx} className="flex items-center text-gray-600"> </li key={idx} className="flex items-center text-gray-600"><CheckCircle className="w-5 h-5 text-green-500 mr-2" >{featur</CheckCircle className="w-5 h-5 text-green-500 mr-2" >e</CheckCircle className="w-5 h-5 text-green-500 mr-2" >}</CheckCircle>
                      <//CheckCircle> <//CheckCircle> </CheckCircle>
                      ))}
                  <//CheckCircle> <//CheckCircle> </ul>
                <//ul> <//ul> </div>

                 <//div> <//div><div className="mb-6">
                  </div className="mb-6"> </div className="mb-6"> </div><h4 className="font-semibold text-gray-900 mb-3">Benefits</h4 className="font-semibold text-gray-900 mb-3">:</h4 className="font-semibold text-gray-900 mb-3"><ul className="space-y-2">{service.benefits.map((benefit, idx) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                       <//ul> <//ul><li key={idx} className="flex items-center text-gray-600">
                         </li key={idx} className="flex items-center text-gray-600"> </li key={idx} className="flex items-center text-gray-600"><ArrowRight className="w-5 h-5 text-blue-500 mr-2" >{benefi</ArrowRight className="w-5 h-5 text-blue-500 mr-2" >t</ArrowRight className="w-5 h-5 text-blue-500 mr-2" >}</ArrowRight>
                      <//ArrowRight> <//ArrowRight> </ArrowRight>
                      ))}
                  <//ArrowRight> <//ArrowRight> </ul>
                <//ul> <//ul> </div>

                 <//div> <//div><div className="text-center">
                   </div className="text-center"> </div className="text-center"><div className="text-3xl font-bold text-blue-600 mb-2">{service.pric</div className="text-3xl font-bold text-blue-600 mb-2">e</div className="text-3xl font-bold text-blue-600 mb-2">}</div><button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Start</button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">e</button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">d</button>
                  <//button> <//button> </button>
                <//button> <//button> </div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>

            {/* Benefits Section */}
           <//div> <//div><section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
             </section className="py-16 bg-white rounded-2xl shadow-lg mb-16"> </section className="py-16 bg-white rounded-2xl shadow-lg mb-16"><div className="text-center mb-12">
              </div className="text-center mb-12"> </div className="text-center mb-12"> </div><h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Consulting</h2 className="text-3xl font-bold text-gray-900 mb-4">?</h2 className="text-3xl font-bold text-gray-900 mb-4"><p className="text-xl text-gray-600">Proven benefits that drive business succes</p className="text-xl text-gray-600">s</p className="text-xl text-gray-600"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
                 <//div> <//div><div key={index} className="text-center">
                   </div key={index} className="text-center"> </div key={index} className="text-center"><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    </div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> </div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"> </div><benefit.icon className="w-8 h-8 text-blue-600" />
                   </benefit.icon className="w-8 h-8 text-blue-600" /> </benefit.icon className="w-8 h-8 text-blue-600" /><h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title</h3 className="text-xl font-semibold text-gray-900 mb-2">}</h3 className="text-xl font-semibold text-gray-900 mb-2"><p className="text-gray-600">{benefit.descriptio</p className="text-gray-600">n</p className="text-gray-600">}</p>
                <//p> <//p> </div>
                ))}
            <//div> <//div> </div>
          <//div> <//div> </section>

            {/* CTA Section */}
           <//section> <//section><section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
             </section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"> </section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"><h2 className="text-3xl font-bold mb-4">Ready to Transform Your I</h2 className="text-3xl font-bold mb-4">T</h2 className="text-3xl font-bold mb-4">?</h2>
           <//h2> <//h2><p className="text-xl mb-8">Contact our experts for a free consultation and discover how we can help your busines</p className="text-xl mb-8">s</p className="text-xl mb-8">.</p>
             <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                 </a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                > </a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                ><Phone className="w-5 h-5 mr-2" >Call (302) 464-09</Phone className="w-5 h-5 mr-2" >5</Phone className="w-5 h-5 mr-2" >0</Phone>
              <//Phone> <//Phone> </Phone>
               <//Phone> <//Phone><a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                 </a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                > </a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                ><Mail className="w-5 h-5 mr-2" >Email </Mail className="w-5 h-5 mr-2" >U</Mail className="w-5 h-5 mr-2" >s</Mail>
              <//Mail> <//Mail> </Mail>
            <//Mail> <//Mail> </div>
          <//div> <//div> </section>
        <//section> <//section> </div>
      <//div> <//div> </main>

       <//main> <//main><Footer />
    </Footer /> </Footer /> </div>
   <//div> <//div></>
  );
};

export default ITConsultingPage<//>;<//>