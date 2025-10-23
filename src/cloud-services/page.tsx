import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react';
import { CheckCircle, Check } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle} from 'lucide-react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

const CloudServicesPage: React.FC = () => {constservices= [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to leading cloud platforms',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Zero Downtime']
   },
    {icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
   },
    {icon: Zap,
      title: 'Auto Scaling',
      description: 'Dynamic resource allocation based on demand',
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
   },
    {icon: BarChart,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring for cloud resources',
      features: ['Real-time Monitoring', 'Cost Analytics', 'Performance Metrics', 'Predictive Insights']
    }
  ]
  const benefits = [
    '99.9% Uptime Guarantee',
    '24/7 Expert Support',
   }
  ];
  constbenefits= [
    '9 9.9% Uptime Guarantee',
    '2 4/7 Expert Support',
    'Cost Optimization',
    'Scalable Infrastructure',
    'Enhanced Security',
    'Global CDN'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Services</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions.
            From migration to optimization, we provide end-to-end cloud services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Started Today</a>
            <a;
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Learn More</a>
          </div>
        </section>
        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Cloud Services?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Call (302) 464-0950</a>
            <a;
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Get Free Consultation</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default CloudServicesPage<divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
      <sectionclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></spa></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">Cloud Services</h><spanclassName="text-xl text-gray-300mb-8 max-w-3xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-3xlmx-auto">Transform your business with our comprehensive cloud solutions. 
            From migration to optimization, we provide end-to-end cloud services.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-500to-blue-600text-white px-8 py-3 rounded-lg font-semiboldhover:from-cyan-600 hover:to-blue-700transition-all"
            >Get Started Today</a><ahref="/contact"
             className="border border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400hover:text-whitetransition-all"
            >Learn More</a></di></sectio>{/* ServicesGrid */}
      <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white mb-12text-center">OurCloudServices</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{services.map((serviceindex) => (
           <divkey={index}className="bg-white/10backdrop-blur-md rounded-xl p-6 borderborder-white/20"><service.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-semiboldtext-whitemb-3">{service.title}</h><pclassName="text-gray-300mb-4">{service.description}</p><ulclassName="space-y-2">{service.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />{feature}
                  </l>))}
              </u></di>))}
        </di></sectio>{/* BenefitsSection */}
      <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white mb-12text-center">Why Choose OurCloudServices?</h><divclassName="grid grid-cols-2 md:grid-cols-3lg:grid-cols-6gap-6">{benefits.map((benefitindex) => (
           <divkey={index}className="text-center"><divclassName="bg-gradient-to-r from-cyan-50 0 to-blue-600w-16h-16rounded-full flex items-center justify-centermx-automb-4"><CheckCircleclassName="w-8h-8text-white" /></di><pclassName="text-whitefont-medium">{benefit}</p></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-slate-800to-purple-900rounded-2 xlp-12"><spanclassName="text-3 xl font-boldtext-whitemb-4"></spa></className="text-3 xl font-boldtext-whitemb-4">Ready to Transform Your Infrastructure?
        </h><spanclassName="text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-gray-300mb-8 max-w-2xlmx-auto">Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-500to-blue-600text-white px-8 py-3 rounded-lg font-semiboldhover:from-cyan-600 hover:to-blue-700transition-all"
            >Call (30 2)464-0950</a><ahref="/contact"
             className="border border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400hover:text-whitetransition-all"
            >Get Free Consultation</a></di></sectio></mai><Footer /></di>
  );
};
export default CloudServicesPage;
