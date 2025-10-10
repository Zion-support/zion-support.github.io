'use client';
import React from 'react';
import { RefreshCw, Target, Users, BarChart, Cloud, Shield, Zap, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const DigitalTransformationPage: React.FC = () => {
  const phases = [
    {
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of current state and digital readiness',
      icon: Target,
      duration: '2-4 weeks',
      deliverables: [
        'Digital maturity assessment',
        'Technology gap analysis',
        'Strategic roadmap development',
        'ROI projections'
      ]
    },
    {
      title: 'Planning & Design',
      description: 'Detailed planning and architecture design for transformation',
      icon: Users,
      duration: '3-6 weeks',
      deliverables: [
        'Solution architecture design',
        'Implementation timeline',
        'Change management plan',
        'Resource allocation strategy'
      ]
    },
    {
      title: 'Implementation',
      description: 'Phased implementation of digital solutions and processes',
      icon: Cloud,
      duration: '8-16 weeks',
      deliverables: [
        'System integration',
        'Process automation',
        'User training',
        'Performance monitoring'
      ]
    },
    {
      title: 'Optimization',
      description: 'Continuous improvement and optimization of digital systems',
      icon: TrendingUp,
      duration: 'Ongoing',
      deliverables: [
        'Performance optimization',
        'User feedback integration',
        'Technology updates',
        'Continuous monitoring'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows',
      benefits: ['50% time savings', 'Reduced errors', 'Improved efficiency'],
      icon: Zap
    },
    {
      title: 'Cloud Migration',
      description: 'Move to cloud infrastructure for scalability and flexibility',
      benefits: ['Cost reduction', 'Better scalability', 'Enhanced security'],
      icon: Cloud
    },
    {
      title: 'Data Analytics',
      description: 'Implement advanced analytics for data-driven decisions',
      benefits: ['Better insights', 'Predictive analytics', 'Improved forecasting'],
      icon: BarChart
    },
    {
      title: 'Security Enhancement',
      description: 'Strengthen cybersecurity and compliance measures',
      benefits: ['Enhanced protection', 'Compliance assurance', 'Risk mitigation'],
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work by up to 70%',
      metric: '70% efficiency gain'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimization',
      metric: '40% cost savings'
    },
    {
      title: 'Better Customer Experience',
      description: 'Improve customer satisfaction with faster, more reliable services',
      metric: '85% customer satisfaction'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with modern digital capabilities',
      metric: '3x faster innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">*</div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">/</div>}</div>
     <//div> <//div><div className="container mx-auto px-4 py-16">
       </div className="container mx-auto px-4 py-16"> </div className="container mx-auto px-4 py-16"><div className="text-center mb-16">
        </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-5xl font-bold text-white mb-6">
            Digita</h1 className="text-5xl font-bold text-white mb-6">l</h1 className="text-5xl font-bold text-white mb-6"> </h1><span className="text-cyan-400">Transformati</span className="text-cyan-400">o</span className="text-cyan-400">n</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Transform your business with cutting-edge digital solutions. Our comprehensive approach helps you modernize operation</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">s</p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">,</p>
            improve efficiency, and stay competitive in the digital ag<//p>e<//p>.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><RefreshCw className="w-5 h-5 mr-2" >Start Transformati</RefreshCw className="w-5 h-5 mr-2" >o</RefreshCw className="w-5 h-5 mr-2" >n</RefreshCw>
          <//RefreshCw> <//RefreshCw> </RefreshCw>
           <//RefreshCw> <//RefreshCw><Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ><Target className="w-5 h-5 mr-2" >Free Assessme</Target className="w-5 h-5 mr-2" >n</Target className="w-5 h-5 mr-2" >t</Target>
          <//Target> <//Target> </Target>
        <//Target> <//Target> </div>
      <//div> <//div> </div>

        {/* Transformation Phases */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Transformat</span className="text-cyan-400">i</span className="text-cyan-400">o</span>n</span> Process
         <//span> <//span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{phases.map((phase, index) =</div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
             <//div> <//div><div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
               </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              > </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ><div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                </div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"> </div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"> </div><phase.icon className="w-6 h-6 text-white" />
               </phase.icon className="w-6 h-6 text-white" /> </phase.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{phase.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{phase.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><div className="text-cyan-400 text-sm font-medium mb-4">Duration: {phase.duratio</div className="text-cyan-400 text-sm font-medium mb-4">n</div className="text-cyan-400 text-sm font-medium mb-4">}</div><ul className="space-y-2">{phase.deliverables.map((deliverable, deliverableIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                     </li key={deliverableIndex} className="flex items-center text-sm text-gray-300"> </li key={deliverableIndex} className="flex items-center text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{deliverabl</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >e</CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Solutions Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Digital</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Solutio</span className="text-cyan-400">n</span className="text-cyan-400">s</span><div className="grid md:grid-cols-2 gap-8">{solutions.map((solution, index) =</div className="grid md:grid-cols-2 gap-8">></div className="grid md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
               </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              > </div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ><div className="flex items-start space-x-4">
                 </div className="flex items-start space-x-4"> </div className="flex items-start space-x-4"><div className="p-3 bg-cyan-400 rounded-lg">
                  </div className="p-3 bg-cyan-400 rounded-lg"> </div className="p-3 bg-cyan-400 rounded-lg"> </div><solution.icon className="w-6 h-6 text-white" />
                </solution.icon className="w-6 h-6 text-white" /> </solution.icon className="w-6 h-6 text-white" /> </div>
                 <//div> <//div><div className="flex-1">
                  </div className="flex-1"> </div className="flex-1"> </div><h3 className="text-2xl font-semibold text-white mb-4">{solution.title</h3 className="text-2xl font-semibold text-white mb-4">}</h3 className="text-2xl font-semibold text-white mb-4"><p className="text-gray-300 mb-6">{solution.description</p className="text-gray-300 mb-6">}</p className="text-gray-300 mb-6"><ul className="space-y-2">{solution.benefits.map((benefit, benefitIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                       <//ul> <//ul><li key={benefitIndex} className="flex items-center text-cyan-400">
                         </li key={benefitIndex} className="flex items-center text-cyan-400"> </li key={benefitIndex} className="flex items-center text-cyan-400"><CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{benefi</CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >t</CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >}</CheckCircle>
                      <//CheckCircle> <//CheckCircle> </CheckCircle>
                      ))}
                  <//CheckCircle> <//CheckCircle> </ul>
                <//ul> <//ul> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Benefits Section */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Transformation</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Benefi</span className="text-cyan-400">t</span className="text-cyan-400">s</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) =</div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="text-center">
               </div key={index} className="text-center"> </div key={index} className="text-center"><div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                </div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"> </div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"> </div><TrendingUp className="w-8 h-8 text-white" />
               </TrendingUp className="w-8 h-8 text-white" /> </TrendingUp className="w-8 h-8 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{benefit.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{benefit.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><div className="text-cyan-400 font-bold text-lg">{benefit.metr</div className="text-cyan-400 font-bold text-lg">i</div className="text-cyan-400 font-bold text-lg">c</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Industry Focus */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Expert</span className="text-cyan-400">i</span className="text-cyan-400">s</span>e</span>
        <//span> <//span> </h2>
         <//h2> <//h2><div className="grid md:grid-cols-3 gap-8">
           </div className="grid md:grid-cols-3 gap-8"> </div className="grid md:grid-cols-3 gap-8"><div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"> </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"> </div><h3 className="text-xl font-semibold text-white mb-4">Healthcar</h3 className="text-xl font-semibold text-white mb-4">e</h3 className="text-xl font-semibold text-white mb-4"><p className="text-gray-300 mb-4">HIPAA-compliant digital solutions for healthcare provide</p className="text-gray-300 mb-4">r</p className="text-gray-300 mb-4">s</p>
             <//p> <//p><ul className="text-sm text-cyan-400 space-y-1">
               </ul className="text-sm text-cyan-400 space-y-1"> </ul className="text-sm text-cyan-400 space-y-1"><li>• Electronic Health Record</li>s</li><li>• Telemedicine Platform</li>s</li><li>• Patient Management Syste</li>m</li>s</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"> </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"> </div><h3 className="text-xl font-semibold text-white mb-4">Financ</h3 className="text-xl font-semibold text-white mb-4">e</h3 className="text-xl font-semibold text-white mb-4"><p className="text-gray-300 mb-4">Secure financial technology solutions and complian</p className="text-gray-300 mb-4">c</p className="text-gray-300 mb-4">e</p>
             <//p> <//p><ul className="text-sm text-cyan-400 space-y-1">
               </ul className="text-sm text-cyan-400 space-y-1"> </ul className="text-sm text-cyan-400 space-y-1"><li>• Banking System</li>s</li><li>• Payment Processin</li>g</li><li>• Risk Manageme</li>n</li>t</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
            </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"> </div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"> </div><h3 className="text-xl font-semibold text-white mb-4">Manufacturin</h3 className="text-xl font-semibold text-white mb-4">g</h3 className="text-xl font-semibold text-white mb-4"><p className="text-gray-300 mb-4">Industry 4.0 solutions for smart manufacturi</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">g</p>
             <//p> <//p><ul className="text-sm text-cyan-400 space-y-1">
               </ul className="text-sm text-cyan-400 space-y-1"> </ul className="text-sm text-cyan-400 space-y-1"><li>• IoT Integratio</li>n</li><li>• Predictive Maintenanc</li>e</li><li>• Supply Chain Optimizati</li>o</li>n</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* Success Stories */}
       <//div> <//div><div className="mb-16">
        </div className="mb-16"> </div className="mb-16"> </div><h2 className="text-3xl font-bold text-white text-center mb-12">
            Success</h2 className="text-3xl font-bold text-white text-center mb-12"> </h2 className="text-3xl font-bold text-white text-center mb-12"><span className="text-cyan-400">Stor</span className="text-cyan-400">i</span className="text-cyan-400">e</span>s</span>
        <//span> <//span> </h2>
         <//h2> <//h2><div className="grid md:grid-cols-2 gap-8">
           </div className="grid md:grid-cols-2 gap-8"> </div className="grid md:grid-cols-2 gap-8"><div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8">
            </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8"> </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8"> </div><h3 className="text-2xl font-semibold text-white mb-4">Manufacturing Compan</h3 className="text-2xl font-semibold text-white mb-4">y</h3 className="text-2xl font-semibold text-white mb-4"><p className="text-gray-300 mb-4">"Zion Tech Group helped us implement IoT sensors and predictive analytic</p className="text-gray-300 mb-4">s</p className="text-gray-300 mb-4">,</p>
                reducing equipment downtime by 60% and increasing production efficiency by 40%.<//p>"<//p><div className="text-cyan-400 font-semibold">- CEO, Tech Manufacturing I</div className="text-cyan-400 font-semibold">n</div className="text-cyan-400 font-semibold">c</div>.</div>
          <//div> <//div> </div>
           <//div> <//div><div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
            </div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8"> </div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8"> </div><h3 className="text-2xl font-semibold text-white mb-4">Healthcare Provide</h3 className="text-2xl font-semibold text-white mb-4">r</h3 className="text-2xl font-semibold text-white mb-4"><p className="text-gray-300 mb-4">"Their digital transformation solution streamlined our patient managemen</p className="text-gray-300 mb-4">t</p className="text-gray-300 mb-4">,</p>
                reducing administrative overhead by 50% and improving patient satisfaction scores.<//p>"<//p><div className="text-purple-400 font-semibold">- CTO, Regional Medical Cen</div className="text-purple-400 font-semibold">t</div className="text-purple-400 font-semibold">e</div>r</div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>

        {/* CTA Section */}
       <//div> <//div><div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
        </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"> </div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"> </div><h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Busines</h2 className="text-3xl font-bold text-white mb-4">s</h2 className="text-3xl font-bold text-white mb-4">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join hundreds of businesses that have successfully transformed their operations with our digital solution</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><ArrowRight className="w-5 h-5 mr-2" >Start Your Transformati</ArrowRight className="w-5 h-5 mr-2" >o</ArrowRight className="w-5 h-5 mr-2" >n</ArrowRight>
          <//ArrowRight> <//ArrowRight> </ArrowRight>
           <//ArrowRight> <//ArrowRight><Link
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
             </Link
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            > </Link
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ><BarChart className="w-5 h-5 mr-2" >View Case Studi</BarChart className="w-5 h-5 mr-2" >e</BarChart className="w-5 h-5 mr-2" >s</BarChart>
          <//BarChart> <//BarChart> </BarChart>
        <//BarChart> <//BarChart> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
};

export default DigitalTransformationPage<//div>;<//div>