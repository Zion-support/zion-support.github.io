import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react'
import { allServices } from '../data/services'
import { NeonText, NeonCard, NeonButton } from '../components/NeonEffects'

export default function ServicesPage() {
  const aiServices = allServices.filter(service => service.category === 'ai')
  const microSaasServices = allServices.filter(service => service.category === 'micro-saas')
  const itServices = allServices.filter(service => service.category === 'it')

  const ServiceCard = ({ service }: { service: any }) => (
    <NeonCard className="group hover:scale-105 transition-all duration-300 h-full">
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-2 py-1 rounded-full">
              {service.category.toUpperCase()}
            </span>
            <span className="text-green-400 text-sm font-semibold">
              {service.price}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        </div>
        
        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit: string, benefitIndex: number) => (
              <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to={service.path}
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center text-sm"
            >
              Learn More 
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
            <a 
              href={`tel:${service.contactInfo.phone}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              Call Now
            </a>
          </div>
          <div className="text-xs text-gray-400">
            Market Price: <span className="line-through">{service.marketPrice}</span>
          </div>
        </div>
      </div>
    </NeonCard>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group. Transform your business with our expert solutions including AI services, micro SAAS, and enterprise IT solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, software development, Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <NeonText intensity="high">Our Services</NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business and drive growth. 
            Choose from our extensive portfolio of cutting-edge services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/pricing'}
            >
              View Pricing
            </NeonButton>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              <NeonText intensity="medium">Ready to Get Started?</NeonText>
            </h2>
            <p className="text-gray-300">Contact us directly for personalized service recommendations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Email Us</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>

        {/* AI Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">AI Services</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced artificial intelligence solutions to automate processes, gain insights, and drive innovation
            </p>
            <div className="mt-4 text-cyan-400 font-semibold">
              {aiServices.length} AI Services Available
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Micro SAAS Solutions</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specialized AI-powered tools and applications designed for specific business needs and rapid deployment
            </p>
            <div className="mt-4 text-cyan-400 font-semibold">
              {microSaasServices.length} Micro SAAS Solutions Available
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">IT Services</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions including cloud infrastructure, cybersecurity, and custom software development
            </p>
            <div className="mt-4 text-cyan-400 font-semibold">
              {itServices.length} IT Services Available
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            <NeonText intensity="high">Need a Custom Solution?</NeonText>
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't see exactly what you need? Our expert team can create custom AI and IT solutions 
            tailored to your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="accent" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Discuss Your Project
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/about'}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              Learn About Our Process
            </NeonButton>
          </div>
        </section>
      </div>
    </div>
  )
}