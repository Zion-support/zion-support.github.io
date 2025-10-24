'use client'
import {Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe} from 'lucide-react'
constEnhancedServicesShowcase: React.FC= () =>{constservices= [
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
    {
      icon: Brain,
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (</div>
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="text-sm text-cyan-400 font-semibold">{service.stats}</div>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="cyber-button inline-flex items-center">View All Services</a>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
    </section>
  )
}
export default EnhancedServicesShowcase
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
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
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
import { ArrowRight, TrendingUp } from 'lucide-react'
import React from 'react'
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe } from 'lucide-react'
import { CheckCircle, ArrowRight } from 'lucide-react'

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
