import React from 'react'
import {Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe} from 'lucide-react'
constEnhancedServicesShowcase: React.FC= () =>{constservices= [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      color: 'text-purple-40 0',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '30 0% ROI'
   },
    {title: 'IT Infrastructure',
      description: 'Build and maintain robust technology foundations',
      icon: Cloud,
      color: 'text-blue-40 0',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Data Backup'],
      stats: '9 9.9% Uptime'
   },
    {title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security',
      icon: Shield,
      color: 'text-green-40 0',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
      stats: 'Zero Breaches'
   },
    {title: 'Automation',
      description: 'Streamline processes with intelligent automation',
      icon: Zap,
      color: 'text-yellow-40 0',
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management'],
      stats: '9 5% Efficiency'
   }
  ]
  return (
  <sectionclassName="py-16"><divclassName="containermx-autopx-4"><divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-5 xl font-bold text-white mb-6cyber-textneon-pulse"></spa></className="text-4 xlmd:text-5 xl font-bold text-white mb-6cyber-textneon-pulse">Our Core Services

        <spanclassName="text-xl text-cyan-400max-w-3xlmx-auto"></spa></className="text-xl text-cyan-400max-w-3xlmx-auto">Comprehensive AI and IT solutions designed to transform your business and drive innovation

      </di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{services.map((serviceindex)=>(</di><divkey={index}className="cyber-card hologram-card p-6 grouphover:scale-105transition-allduration-300"><divclassName="flexitems-centermb-4"><service.iconclassName={`w-12h-12${service.color}mr-4`} /><di v></di><h3className="text-xlfont-boldtext-white">{service.title}</h><divclassName="text-sm text-cyan-400font-semibold">{service.stats}</di></di><pclassName="text-gray-300mb-4">{service.description}</p><ulclassName="space-y-2mb-6">{service.features.map((featurefeatureIndex) => (
               <likey={featureIndex}className="flex items-center text-smtext-gray-400"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />{feature}
                </l>))}
            </u><ahref="/services"
               className="inline-flex items-center text-cyan-400 hover:text-cyan-300font-mediumgroup-hover:translate-x-1transition-transform">LearnMore<ArrowRightclassName="w-4h-4ml-2" /></a></di>))}
      </di><divclassName="text-centermt-12"><ahref="/services"
           className="cyber-buttoninline-flexitems-center">View All Services
          <ArrowRightclassName="w-5h-5ml-2" /></a></di></sectio>)
}
export defaultEnhancedServicesShowcase</p></h>