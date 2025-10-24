import {Building, Handshake, Award, Users, Globe, Star, CheckCircle, Phone, Mail} from 'lucide-react'
'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      icon: Building,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      partners: [
        { name: 'Microsoft', description: 'Azure Cloud Services & AI Platform', logo: '🏢' },
        { name: 'Amazon Web Services', description: 'Cloud Infrastructure & AI Services', logo: '☁️' },
        { name: 'Google Cloud', description: 'AI/ML Platform & Analytics', logo: '🔍' },
        { name: 'IBM', description: 'Watson AI & Enterprise Solutions', logo: '🤖' },
        { name: 'NVIDIA', description: 'GPU Computing & AI Hardware', logo: '🎮' },
        { name: 'Intel', description: 'AI Processors & Edge Computing', logo: '💻' }
      ]
    },
      title: 'Solution Partners',
      description: 'Specialized solution providers that complement our offerings',
      icon: Handshake,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
        { name: 'Salesforce', description: 'CRM & Customer Experience Platform', logo: '☁️' },
        { name: 'ServiceNow', description: 'IT Service Management & Automation', logo: '⚙️' },
        { name: 'Splunk', description: 'Data Analytics & Security Monitoring', logo: '📊' },
        { name: 'Tableau', description: 'Business Intelligence & Visualization', logo: '📈' },
        { name: 'Workday', description: 'HR & Financial Management', logo: '👥' },
        { name: 'Zendesk', description: 'Customer Support & Engagement', logo: '🎧' }
      title: 'Integration Partners',
      description: 'Partners that help us integrate with existing enterprise systems',
      icon: Award,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
        { name: 'Dell Technologies', description: 'Infrastructure & Storage Solutions', logo: '💾' },
        { name: 'Cisco', description: 'Networking & Security Infrastructure', logo: '🌐' },
        { name: 'VMware', description: 'Virtualization & Cloud Management', logo: '🖥️' },
        { name: 'Red Hat', description: 'Open Source Solutions & Support', logo: '🎩' },
        { name: 'Oracle', description: 'Database & Enterprise Applications', logo: '🗄️' },
        { name: 'SAP', description: 'Enterprise Resource Planning', logo: '📋' }
    }
  ]
  const benefits = [
      icon: Globe,
      title: 'Global Reach',
      description:       ,
icon$5: Users,
      title: 'Expertise Sharing',
      description:       ,
icon$5: Star,
      title: 'Innovation',
      description:       ,
icon$5: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous partner certification and quality standards',
  const partnershipTiers = [
      name: 'Strategic Partners',
      level: 'Platinum',
      description: 'Long-term strategic relationships with joint go-to-market initiatives',
      benefits: [
        'Joint marketing and sales initiatives',
        'Co-development of solutions',
        'Priority support and resources',
        'Executive relationship management',
        'Custom pricing and terms'
      ],
      color: 'text-yellow-400',
      bgColor:       ,
namename: 'Solution Partners',
      level: 'Gold',
      description: 'Technology integration and solution delivery partnerships',
        'Technical integration support',
        'Joint solution development',
        'Marketing support and co-marketing',
        'Training and certification',
        'Preferred pricing'
      color: 'text-gray-400',
      bgColor:       ,
namename: 'Channel Partners',
      level: 'Silver',
      description: 'Reseller and referral partnerships for market expansion',
        'Reseller program access',
        'Sales training and support',
        'Marketing materials and tools',
        'Lead sharing and referrals',
        'Competitive margins'
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
  const partnerTypes = [],
  return (
    {
    // TODO: Add content
  }
}
  titl,
  e: 'Technology Partners',
      descriptio,
  n: 'Leading technology companies that provide the foundation for our solutions',
      ico,
  n: Building,
      colo,
  r: 'text-blue-400',
      bgColo,
  r: 'bg-blue-500/10',
      partner,
  s: [
  // TOD,
  O: Add items],
        {/* TODO: Fix JSX expression */}
  o: '' },
        {/* TODO: Fix JSX expression */}
  o: '' },
        {/* TODO: Fix JSX expression */}
  o: '' },
        {/* TODO: Fix JSX expression */}
  o: '' },
        {/* TODO: Fix JSX expression */}
  o: '' },
        {/* TODO: Fix JSX expression */}
  o: '' }
//       ]
    },
      titl,
  e: 'Solution Partners',
      descriptio,
  n: 'Specialized solution providers that complement our offerings',
      ico,
  n: Handshake,
      colo,
  r: 'text-green-400',
      bgColo,
  r: 'bg-green-500/10',
        {/* TODO: Fix JSX expression */}
  o: '☁️' },
        {/* TODO: Fix JSX expression */}
  o: '⚙️' },
        {/* TODO: Fix JSX expression */}
  o: '📊' },
        {/* TODO: Fix JSX expression */}
  o: '📈' },
        {/* TODO: Fix JSX expression */}
  o: '👥' },
        {/* TODO: Fix JSX expression */}
  o: '🎧' }
  titl,
  e: 'Integration Partners',
      descriptio,
  n: 'Partners that help us integrate with existing enterprise systems',
      ico,
  n: Award,
      colo,
  r: 'text-purple-400',
      bgColo,
  r: 'bg-purple-500/10',
{/* TODO: Fix JSX expression */}
  o: '💾' },
        {/* TODO: Fix JSX expression */}
  o: '🌐' },
        {/* TODO: Fix JSX expression */}
  o: '🖥️' },
        {/* TODO: Fix JSX expression */}
  o: '🎩' },
        {/* TODO: Fix JSX expression */}
  o: '🗄️' },
        {/* TODO: Fix JSX expression */}
  o: '📋' }
    }
  ]
  const benefits = [
icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets and customers through our partner network',
const PagePage: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Our Partners,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We work with industry-leading technology partners to deliver comprehensive solutions 
              that drive innovation and business success.
          {/* Partner Types */}
          <div className="mb-16">
            {partnerTypes.map((type, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${type.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  <div>
                    <h2 className="text-2xl font-bold text-white neon-text">{type.title}
                    <p className="text-gray-300">{type.description}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {type.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="text-3xl mb-3">{partner.logo}
                      <h3 className="text-lg font-semibold text-white mb-2">{partner.name}
                      <p className="text-gray-300 text-sm">{partner.description}
                  ))}
          {/* Partnership Benefits */}
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Partner With Us?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}
                  <p className="text-gray-300 text-sm">{benefit.description}
          {/* Partnership Tiers */}
              Partnership Tiers
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50`}>
                  <div className="text-center mb-6">
                    <div className={`text-2xl font-bold ${tier.color} mb-2`}>{tier.level}
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}
                    <p className="text-gray-300 text-sm">{tier.description}
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}
          {/* Become a Partner CTA */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Become Our Partner
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success. 
              Let's build the future together.
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <$2 />
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                <Handshake className="w-5 h-5 mr-2" />
                Become a Partner,
  
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer />
          {/* Header */}
          <div className="text-center mb-16"></div>"
            < className="text-4xl,"$2 />
  md: text-5xl font-bold text-white mb-6 neon-text"></h1>
// Our Partners
          </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
// We work with industry-leading technology partners to deliver comprehensive solutions,
//               that drive innovation and business success.
          {/* Partner Types */}"
          <div className="mb-16">
            {partnerTypes.map((type, index) => ()}"
          <div key={index} className="mb-12"></div>"
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${type.bgColor} rounded-lg flex items-center justify-center mr-4`}></div>`
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  <div></div>"
                    <h2 className="text-2xl font-bold text-white neon-text">{type.title}</h2>"
                    <p className="text-gray-300">{type.description}</p>"
                < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-3 gap-6">
                  {type.partners.map((partner, partnerIndex) => ()}"
          < key={partnerIndex} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,"$2 />
  hover:border-cyan-400/50 transition-all duration-300"></div>"
                      <div className="text-3xl mb-3">{partner.logo}</div>"
                      <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>"
                      <p className="text-gray-300 text-sm">{partner.description}
                  ))}
          {/* Partnership Benefits */}"
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
// Why Partner With Us?
          </h2>"
            < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => ()}"
          <div key={index} className="text-center"></div>"
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <benefit.icon className="w-8 h-8 text-cyan-400" /></benefit>"
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>"
                  <p className="text-gray-300 text-sm">{benefit.description}
{/* Partnership Tiers */}
              Partnership Tiers;"
            < className="grid grid-cols-1,"$2 />
  md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => ()}`
          <div key={index} className={`${tier.bgColor} rounded-lg p-6 border border-gray-700/50`}></div>"
                  <div className="text-center mb-6"></div>`
                    <div className={`text-2xl font-bold ${tier.color} mb-2`}>{tier.level}</div>"
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>"
                    <p className="text-gray-300 text-sm">{tier.description}</p>"
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="flex items-start"></li>"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" /></CheckCircle>"
                        <span className="text-gray-300 text-sm">{benefit}
{/* Become a Partner CTA */}"
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-2xl font-bold text-white mb-4">
              Become Our Partner;"
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
              Let's build the future together.
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <$2 />
                href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
// >
          "
          <Handshake className="w-5 h-5 mr-2" />
// Become a Partner
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
<Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us
      <Footer />
    </div>
  ),
}
export default PartnersPage</a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</div></div></div></div></div></span></span></p></p></p></p></p></p></p></p></p></h2></h2></h2></h2></h3></h3></h3></ul></ul></li>