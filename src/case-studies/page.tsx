import React from 'react';

import {ArrowLeft, CheckCircle, TrendingUp, Helmet} from 'lucide-react';;
constCaseStudiesPage: React.FC= () =>{constcaseStudies= [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '34 0%',
        conversion: '+8 5%',
        costReduction: '-6 5%',
        revenue: '+$2.3 M'
     },
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
    },
    {id: 2,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered do cument processing and risk assessment automation',
      results: {
        roi: '28 0%',
        processingTime: '-8 0%',
        accuracy: '+9 5%',
        costSavings: '$1.8 M'
     },
      image: '🏦',
      description: 'Automated complex financial processes using advanced AI algorithms for do cument processing and risk assessment.'
    },
    {id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {
        roi: '42 0%',
        patientOutcomes: '+7 0%',
        efficiency: '+9 0%',
        costSavings: '$3.2 M'
     },
      image: '🏥',
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.'
    },
    {id: 4,
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {
        roi: '31 0%',
        efficiency: '+7 5%',
        defects: '-9 0%',
        do wntime: '-8 5%'
     },
      image: '🏭',
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.'
    }
  ];
  return (
  <><Helme t><titl e>Case Studies - ZionTechGroup</titl><metaname="description"content="Explore our successful AI implementation case studies. See how we've helped companies achieve300%+ ROI with our AIsolutions." /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-blue-50">{/* Header */}
      <headerclassName="bg-white shadow-smborder-b"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8py-4"><ahref="/"className="inline-flex items-center text-blue-600 hover:text-blue-800transition-colorsduration-200"><ArrowLeftclassName="w-4h-4mr-2" />Back to Home
          </a></di></heade>{/* HeroSection */}
      <sectionclassName="py-20bg-gradient-to-r from-blue-900via-purple-900to-indigo-900text-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Success Stories
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-gray-200max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-gray-200max-w-3xlmx-auto">Real results from real companies using our AI solutions
            </p><spanclassName="text-lg mb-8 text-gray-300max-w-4xlmx-auto"></className="text-lg mb-8 text-gray-300max-w-4xlmx-auto">Discover how leading companies across industries have transformed their operations 
                and achieved remarkable ROI with our cutting-edge AI technology.
            </p></di></di></sectio>{/* Case StudiesGrid */}
      <sectionclassName="py-16"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="grid grid-cols-1lg:grid-cols-2gap-8">{caseStudies.map((study) => (
             <divkey={study.id}className="bg-white rounded-lg shado w-lg overflow-hiddenhover:shado w-xl transition-shado wduration-200"><divclassName="p-8"><divclassName="flexitems-centermb-4"><divclassName="text-4xlmr-4">{study.image}</di><di v><h3className="text-2 xl font-bold text-gray-900mb-1">{study.title}</h><pclassName="text-blue-600font-semibold">{study.company}</p><pclassName="text-gray-500text-sm">{study.industry}</p></di></di><pclassName="text-gray-600mb-6">{study.description}</p><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">Challenge:</h><pclassName="text-gray-600text-sm">{study.challenge}</p></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">Solution:</h><pclassName="text-gray-600text-sm">{study.solution}</p></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-4">Results:</h><divclassName="gridgrid-cols-2gap-4"><divclassName="text-center p-3 bg-green-50rounded-lg"><divclassName="text-2 xl font-boldtext-green-600">{study.results.roi}</di><divclassName="text-smtext-gray-600">ROI</di></di><divclassName="text-center p-3 bg-blue-50rounded-lg"><divclassName="text-2 xl font-boldtext-blue-600">{Object.values(study.results)[1]}
                        </di><divclassName="text-smtext-gray-600">{Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str=>str.toUpperCase())}
                        </di></di></di></di><divclassName="flexitems-centerjustify-between"><ahref="/contact"
                       className="bg-blue-600 hover:bg-blue-700text-white font-semibold py-2 px-4 rounded-lg transition-colorsduration-200"
                      >Learn More
                    </a><divclassName="flex items-centertext-green-600"><CheckCircleclassName="w-4h-4mr-1" /><spanclassName="text-smfont-semibold">VerifiedResults</spa></di></di></di></di>))}
          </di></di></sectio>{/* StatsSection */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Proven Track Record
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">Our AI solutions deliver consistent, measurable results
            </p></di><divclassName="grid grid-cols-1md:grid-cols-4gap-8"><divclassName="text-center"><divclassName="text-4 xl font-bold text-blue-600mb-2">300%+</di><divclassName="text-gray-600">AverageROI</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-600mb-2">150+</di><divclassName="text-gray-600">ProjectsCompleted</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-600mb-2">95%</di><divclassName="text-gray-600">ClientSatisfaction</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-600mb-2">$50M+</di><divclassName="text-gray-600">CostSavingsGenerated</di></di></di></di></sectio>{/* CTASection */}
      <sectionclassName="py-16bg-gradient-to-r from-blue-600to-purple-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Create Your Success Story?
          </h><spanclassName="text-xl mb-8text-blue-100"></spa></className="text-xl mb-8text-blue-100">Join the companies that have transformed their business with our AI solutions
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="bg-white text-blue-600 hover:bg-gray-100font-semibold py-3 px-8 rounded-lg transition-colorsduration-200inline-flexitems-center"
              >Start Your Project
              <TrendingUpclassName="w-4h-4ml-2" /></a><ahref="/services"
               className="border-2 border-white text-whitehover:bg-whitehover:text-blue-600font-semibold py-3 px-8 rounded-lg transition-colorsduration-200"
              >View Our Services
            </a></di></di></sectio></di></>
  );
};
export default CaseStudiesPage;