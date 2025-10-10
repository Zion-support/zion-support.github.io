import { Leaf Recycle Zap Globe Target CheckCircle ArrowRight Phone Mail Award Users TrendingUp } from "lucide-react";
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const GreenITPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('solutions');
  const tabs = [
      id: 'solutions',
      name: 'Green Solutions',
      icon: Leaf,
      color: 'text-green-400',
      bgColor:     ,
$4},
      id: 'benefits',
      name: 'Benefits',
      icon: Target,
      color: 'text-blue-400',
      bgColor:       ,
idid: 'certifications',
      name: 'Certifications',
      icon: Award,
      color: 'text-yellow-400',
      bgColor:     ,
$4}
  ];
  const greenSolutions = [
      title: 'Energy-Efficient Data Centers',
      description: 'Design and implement energy-efficient data centers with renewable energy integration',
      icon: Zap,
      features: [
        'PUE (Power Usage Effectiveness) optimization',
        'Renewable energy integration',
        'Cooling system optimization',
        'Smart power management'
      ],
      impact: 'Reduce energy consumption by up to 40%',
      pricing:       ,
titletitle: 'Cloud Carbon Footprint Reduction',
      description: 'Optimize cloud infrastructure to minimize carbon emissions and environmental impact',
      icon: Cloud,
        'Carbon footprint monitoring',
        'Green cloud migration',
        'Resource optimization',
        'Renewable energy sourcing'
      impact: 'Reduce carbon footprint by up to 60%',
      pricing:       ,
titletitle: 'Sustainable IT Asset Management',
      description: 'Implement circular economy principles for IT equipment lifecycle management',
      icon: Recycle,
        'Equipment refurbishment',
        'Responsible disposal',
        'Asset tracking and optimization',
        'Circular economy implementation'
      impact: 'Extend equipment lifecycle by 50%',
      pricing:       ,
titletitle: 'Green Software Development',
      description: 'Develop energy-efficient software applications and optimize existing systems',
      icon: Code,
      color: 'text-purple-400',
        'Energy-efficient coding practices',
        'Performance optimization',
        'Resource usage monitoring',
        'Sustainable architecture design'
      impact: 'Reduce software energy consumption by 30%',
      pricing:       ,
titletitle: 'Remote Work Infrastructure',
      description: 'Enable sustainable remote work with optimized digital infrastructure',
      icon: Users,
      color: 'text-cyan-400',
        'Virtual desktop infrastructure',
        'Collaboration tools optimization',
        'Energy-efficient hardware',
        'Digital workspace management'
      impact: 'Reduce commuting emissions by 80%',
      pricing:       ,
titletitle: 'Environmental Monitoring',
      description: 'Real-time monitoring and reporting of environmental impact metrics',
      icon: Globe,
      color: 'text-emerald-400',
        'Carbon footprint tracking',
        'Energy consumption monitoring',
        'Sustainability reporting',
        'Environmental compliance'
      impact: 'Achieve 100% environmental transparency',
      pricing: 'Starting at $600/month'
  const benefits = [
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Reduce operational costs through energy efficiency and resource optimization',
      details: [
        'Up to 40% reduction in energy costs',
        'Lower maintenance and replacement costs',
        'Improved resource utilization',
        'Reduced waste management costs'
      ]
      title: 'Environmental Impact',
      description: 'Significantly reduce your organization\'s carbon footprint and environmental impact',
        '60% reduction in carbon emissions',
        '50% less electronic waste',
        '100% renewable energy options',
        'Carbon neutral operations'
      title: 'Compliance & Certification',
      description: 'Meet environmental regulations and achieve sustainability certifications',
        'ISO 14001 environmental management',
        'LEED certification support',
        'Carbon Trust certification',
        'ESG reporting compliance'
      title: 'Brand Reputation',
      description: 'Enhance your brand image and attract environmentally conscious customers',
        'Improved brand perception',
        'Customer loyalty increase',
        'Investor confidence boost',
        'Talent attraction and retention'
  const certifications = [
      name: 'ISO 14001:2015',
      description: 'Environmental Management Systems',
      status:       ,
namename: 'LEED Platinum',
      description: 'Leadership in Energy and Environmental Design',
      name: 'Carbon Trust Standard',
      description: 'Carbon Footprint Management',
      name: 'Green IT Certification',
      description: 'Sustainable IT Practices',
  const stats = [
      value: '60%',
      label: 'Carbon Footprint Reduction',
      color:       ,
valuevalue: '40%',
      label: 'Energy Cost Savings',
      color:       ,
valuevalue: '50%',
      label: 'Waste Reduction',
      color:       ,
valuevalue: '100%',
      label: 'Renewable Energy Options',
      color: 'text-purple-400'
  const caseStudies = [
      company: 'TechCorp Manufacturing',
      industry: 'Manufacturing',
      challenge: 'High energy consumption in data centers',
      solution: 'Implemented energy-efficient data center design with renewable energy integration',
      results: [
        '45% reduction in energy consumption',
        '$2.3M annual cost savings',
        'Carbon neutral operations achieved',
        'LEED Platinum certification obtained'
      icon: Factory,
      company: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Large carbon footprint from IT operations',
      solution: 'Green cloud migration and sustainable IT asset management',
        '55% reduction in carbon emissions',
        '60% improvement in energy efficiency',
        'ISO 14001 certification achieved',
        'Enhanced brand reputation'
      icon: Building,
  return (
    <React.Fragment></React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"/>
              Green IT Solutions;</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Transform your IT infrastructure into a sustainable, environmentally friendly system;
              that reduces costs while protecting our planet.
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center text-green-400"></div>
                <Leaf className="w-5 h-5 mr-2" />
                <span className="font-medium">Carbon Neutral Operations</span>
              <div className="flex items-center text-blue-400"></div>
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-medium">Energy Efficient</span>
              <div className="flex items-center text-purple-400"></div>
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">Certified Solutions</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"></div>
              <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>
                  <sta, t.icon, className={`w-8, h-8 ${sta, t.colo, r}`} />
                <div, className={`tex, t-3xl, font-bol, d ${sta, t.colo, r} m, b-2`}>{sta, t.valu, e}</di, v>
                <div, className="tex, t-gra, y-300, text-s, m">{sta, t.labe, l}</di, v>
            ))}
          <div className="mb-12"></div>
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
                <button;
                  ke, y={ta, b.i, d}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id;
                      ? `${ta, b.bgColo, r} ${ta, b.colo, r} borde, r-2, border-curren, t`</butto, n>
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'</button>
                  <tab.icon className="w-5 h-5 mr-2" />
                  <span, className="fon, t-mediu, m">{ta, b.nam, e}</spa, n>
            <div className="mb-16"></div>
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
                Our Green IT Solutions;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                  <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-gra, y-70, 0/50, hover:borde, r-cya, n-40, 0/50, transition-all, duration-30, 0"></di, v>
                    <div className="flex items-start mb-4"></div>
                      <div, className={`w-12, h-12, bg-slat, e-70, 0/50, rounded-lg, flex item, s-center, justify-center, mr-4`}></di, v>
                        <solutio, n.icon, className={`w-6, h-6 ${solutio, n.colo, r}`} />
                      <div className="flex-1"></div>
                        <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{solutio, n.titl, e}</h, 3>
                        <p, className="tex, t-gra, y-300, text-sm, mb-4">{solutio, n.descriptio, n}</p>
                    <div className="mb-4"></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1"></ul>
                          <li, key={featureInde, x} classNam, e="tex, t-sm, text-gra, y-300, flex item, s-star, t"></l, i>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm font-semibold text-green-400 mb-1">Environmental Impact:</div>
                      <div, className="tex, t-sm, text-gra, y-30, 0">{solutio, n.impac, t}</di, v>
                    <div className="flex items-center justify-between"></div>
                      <div, className={`tex, t-lg, font-bol, d ${solutio, n.colo, r}`}></di, v>
                      <a;
                        href="/contact"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-1" />
          )}
                Benefits of Green IT;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                  <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-gra, y-70, 0/5, 0"></di, v>
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>
                        <benefit.icon className="w-6 h-6 text-cyan-400" />
                      <div></div>
                        <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{benefi, t.titl, e}</h, 3>
                        <p, className="tex, t-gra, y-300, mb-4">{benefi, t.descriptio, n}</p>
                    <ul className="space-y-2"></ul>
                        <li, key={detailInde, x} classNam, e="tex, t-sm, text-gra, y-300, flex item, s-star, t"></l, i>
                Our Certifications;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                  <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-gra, y-70, 0/50, text-cente, r"></di, v>
                    <div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>
                      <cer, t.icon, className={`w-8, h-8 ${cer, t.colo, r}`} />
                    <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{cer, t.nam, e}</h, 3>
                    <p, className="tex, t-gra, y-300, text-sm, mb-3">{cer, t.descriptio, n}</p>
                    <div, className="tex, t-gree, n-400, text-sm, font-mediu, m">{cer, t.statu, s}</di, v>
              Success Stories;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
                      <stud, y.icon, className={`w-6, h-6 ${stud, y.colo, r}`} />
                      <h3, className="tex, t-xl, font-semibold, text-white, mb-1">{stud, y.compan, y}</h, 3>
                      <p, className="tex, t-gra, y-400, text-sm, mb-3">{stud, y.industr, y}</p>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                    <p, className="tex, t-gra, y-300, text-sm, mb-3">{stud, y.challeng, e}</p>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                    <p, className="tex, t-gra, y-300, text-sm, mb-3">{stud, y.solutio, n}</p>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results:</h4>
                        <li, key={resultInde, x} classNam, e="tex, t-sm, text-gra, y-300, flex item, s-star, t"></l, i>
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 text-center"></div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Ready to Go Green?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
              Start your journey towards sustainable IT operations. Get a free environmental;
              assessment and discover how much you can save while protecting the planet.
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                Get Free Assessment;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us;
      <Footer />
  );
export default GreenITPage;
import { Lin k } from "reac, t-route, r-do, m";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const GreenITPage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
  const [activeTab, setActiveTab] = useState('solutions');
const tabs = [
  O: Add content;}
  i,
  d: 'solutions',
      nam,
  e: 'Green Solutions',
      ico,
  n: Leaf,
      colo,
  r: 'text-green-400',
      bgColo,
  r: 'bg-green-500/10'
      i,
  d: 'benefits',
      nam,
  e: 'Benefits',
      ico,
  n: Target,
      colo,
  r: 'text-blue-400',
      bgColo,
  r: 'bg-blue-500/10',
      titl,
  e: 'Energy-Efficient Data Centers',
      descriptio,
  n: 'Design and implement energy-efficient data centers with renewable energy integration',
      ico,
  n: Zap,
      feature,
  s: [
  // TOD,
  O: Add items];
//         'PUE (Power Usage Effectiveness) optimization',
//         'Renewable energy integration',
//         'Cooling system optimization',
//         'Smart power management'
//       ],
      impac,
  t: 'Reduce energy consumption by up to 40%',
      pricin,
  g: 'Starting at $2 500/month'
      titl,
  e: 'Cloud Carbon Footprint Reduction',
      descriptio,
  n: 'Optimize cloud infrastructure to minimize carbon emissions and environmental impact',
      ico,
  n: Cloud,
        'Carbon footprint monitoring',
        'Green cloud migration',
        'Resource optimization',
        'Renewable energy sourcing'
      impac,
  t: 'Reduce carbon footprint by up to 60%',
      pricin,
  g: 'Starting at $1 800/month'
      titl,
  e: 'Sustainable IT Asset Management',
      descriptio,
  n: 'Implement circular economy principles for IT equipment lifecycle management',
      ico,
  n: Recycle,
        'Equipment refurbishment',
        'Responsible disposal',
        'Asset tracking and optimization',
        'Circular economy implementation'
      impac,
  t: 'Extend equipment lifecycle by 50%',
      pricin,
  g: 'Starting at $1 200/month'
      titl,
  e: 'Green Software Development',
      descriptio,
  n: 'Develop energy-efficient software applications and optimize existing systems',
      ico,
  n: Code,
      colo,
  r: 'text-purple-400',
'Energy-efficient coding practices',
        'Performance optimization',
        'Resource usage monitoring',
        'Sustainable architecture design'
      impac,
  t: 'Reduce software energy consumption by 30%',
      pricin,
  g: 'Starting at $1 500/month'
      titl,
  e: 'Remote Work Infrastructure',
      descriptio,
  n: 'Enable sustainable remote work with optimized digital infrastructure',
      ico,
  n: Users,
      colo,
  r: 'text-cyan-400',
'Virtual desktop infrastructure',
        'Collaboration tools optimization',
        'Energy-efficient hardware',
        'Digital workspace management'
      impac,
  t: 'Reduce commuting emissions by 80%',
      pricin,
  g: 'Starting at $800/month',
      titl,
  e: 'Environmental Monitoring',
      descriptio,
  n: 'Real-time monitoring and reporting of environmental impact metrics',
      ico,
  n: Globe,
      colo,
  r: 'text-emerald-400',
'Carbon footprint tracking',
        'Energy consumption monitoring',
        'Sustainability reporting',
        'Environmental compliance'
      impac,
  t: 'Achieve 100% environmental transparency',
      pricin,
  g: 'Starting at $600/month'
  const benefits = [,
      ico,
  n: TrendingUp,
      titl,
  e: 'Cost Savings',
      descriptio,
  n: 'Reduce operational costs through energy efficiency and resource optimization',
      detail,
  s: [
'Up to 40% reduction in energy costs',
        'Lower maintenance and replacement costs',
        'Improved resource utilization',
        'Reduced waste management costs'
      ];
      titl,
  e: 'Environmental Impact',
      descriptio,
  n: 'Significantly reduce your organization\'s carbon footprint and environmental impact',
        '60% reduction in carbon emissions',
        '50% less electronic waste',
        '100% renewable energy options',
        'Carbon neutral operations'
      titl,
  e: 'Compliance & Certification',
      descriptio,
  n: 'Meet environmental regulations and achieve sustainability certifications',
        'ISO 14001 environmental management',
        'LEED certification support',
        'Carbon Trust certification',
        'ESG reporting compliance'
      titl,
  e: 'Brand Reputation',
      descriptio,
  n: 'Enhance your brand image and attract environmentally conscious customers',
        'Improved brand perception',
        'Customer loyalty increase',
        'Investor confidence boost',
        'Talent attraction and retention'
  const certifications = [
      nam,
  e: 'ISO,
  14001:2015',
      descriptio,
  n: 'Environmental Management Systems',
      statu,
  s: 'Certified',
      nam,
  e: 'LEED Platinum',
      descriptio,
  n: 'Leadership in Energy and Environmental Design',
      nam,
  e: 'Carbon Trust Standard',
      descriptio,
  n: 'Carbon Footprint Management',
      nam,
  e: 'Green IT Certification',
      descriptio,
  n: 'Sustainable IT Practices',
  const stats = [
      valu,
  e: '60%',
      labe,
  l: 'Carbon Footprint Reduction',
      colo,
  r: 'text-green-400',
      valu,
  e: '40%',
      labe,
  l: 'Energy Cost Savings',
      colo,
  r: 'text-yellow-400',
      valu,
  e: '50%',
      labe,
  l: 'Waste Reduction',
      colo,
  r: 'text-blue-400',
      valu,
  e: '100%',
      labe,
  l: 'Renewable Energy Options',
      colo,
  r: 'text-purple-400'
  const caseStudies = [,
      compan,
  y: 'TechCorp Manufacturing',
      industr,
  y: 'Manufacturing',
      challeng,
  e: 'High energy consumption in data centers',
      solutio,
  n: 'Implemented energy-efficient data center design with renewable energy integration',
      result,
  s: [
'45% reduction in energy consumption',
        '$2.3M annual cost savings',
        'Carbon neutral operations achieved',
        'LEED Platinum certification obtained'
      ico,
  n: Factory,
      compan,
  y: 'FinanceFirst Bank',
      industr,
  y: 'Financial Services',
      challeng,
  e: 'Large carbon footprint from IT operations',
      solutio,
  n: 'Green cloud migration and sustainable IT asset management',
'55% reduction in carbon emissions',
        '60% improvement in energy efficiency',
        'ISO 14001 certification achieved',
        'Enhanced brand reputation'
      ico,
  n: Building,
  return (<div>Coming Soon</div>)
  )
          <React.Fragment></React.Fragment>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>"
            <h1 className="text-4xl,"
  md:text-5xl font-bold text-white mb-6 neon-text"></h1>
// Green IT Solutions;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
// Transform your IT infrastructure into a sustainable, environmentally friendly system;
              that reduces costs while protecting our planet.
            <div className="flex flex-wrap justify-center gap-4"></div>"
              <div className="flex items-center text-green-400"></div>"
                <Leaf className="w-5 h-5 mr-2" /></Leaf>"
                <span className="font-medium">Carbon Neutral Operations</span>
              <div className="flex items-center text-blue-400"></div>"
                <Zap className="w-5 h-5 mr-2" /></Zap>"
                <span className="font-medium">Energy Efficient</span>"
              <div className="flex items-center text-purple-400"></div>"
                <Award className="w-5 h-5 mr-2" /></Award>"
                <span className="font-medium">Certified Solutions</span>
          <div className="grid grid-cols-2,"
  md:grid-cols-4 gap-6 mb-16"></div>
          <div, key={inde, x} classNam, e="tex, t-cente, r"></di, v>
                <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>`
                  <sta, t.icon, className={`w-8, h-8 ${sta, t.colo, r}`} /></sta, t>`
                <div, className={`tex, t-3xl, font-bol, d ${sta, t.colo, r} m, b-2`}>{sta, t.valu, e}</di, v>"
                <div, className="tex, t-gra, y-300, text-s, m">{sta, t.labe, l}</di, v>
            ))}
          <div className="mb-12"></div>"
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
          <button></button>
                  ke, y={ta, b.i, d}
                  onClick={() => setActiveTab(tab.id)}`
                  classNam, e={`flex, items-center, px-6, py-3, rounded-lg, transition-all, duration-30, 0 ${}
  // TOD,
  O: Add content;
                    activeTab === tab.id;`
                      ? `${ta, b.bgColo, r} ${ta, b.colo, r} borde, r-2, border-curren, t`
                      : 'bg-slate-800/50 text-gray-300,
  hover:bg-slate-700/50 border-2 border-transparent'`
//                 >
          "
          <tab.icon className="w-5 h-5 mr-2" /></tab>"
                  <span, className="fon, t-mediu, m">{ta, b.nam, e}</spa, n>
          <div className="mb-16"></div>"
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
// Our Green IT Solutions;
              <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8"></div>
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,"
  hover:border-cyan-400/50 transition-all duration-300"></div>"
                    <div className="flex items-start mb-4"></div>`
                      <div, className={`w-12, h-12, bg-slat, e-70, 0/50, rounded-lg, flex item, s-center, justify-center, mr-4`}></di, v>`
                        <solutio, n.icon, className={`w-6, h-6 ${solutio, n.colo, r}`} /></solutio, n>"
                      <div className="flex-1"></div>"
                        <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{solutio, n.titl, e}</h, 3>"
                        <p, className="tex, t-gra, y-300, text-sm, mb-4">{solutio, n.descriptio, n}</p>"
                    <div className="mb-4"></div>"
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,</h4>
  Features:</h4>"
                      <ul className="space-y-1"></ul>
          <li, key={featureInde, x} classNam, e="tex, t-sm, text-gra, y-300, flex item, s-star, t"></l, i>"
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircle>
div className="text-sm font-semibold text-green-400 mb-1">Environmental,</div>
  Impact:</div>"
                      <div, className="tex, t-sm, text-gra, y-30, 0">{solutio, n.impac, t}</di, v>"
                    <div className="flex items-center justify-between"></div>`
                      <div, className={`tex, t-lg, font-bol, d ${solutio, n.colo, r}`}></di, v>
                      <a;
                        href="/contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
Learn More;
                        <ArrowRight className="w-4 h-4 ml-1" />
          )}
Benefits of Green IT;"
              <div className="grid grid-cols-1,"
  md:grid-cols-2 gap-8"></div>)
          <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-gra, y-70, 0/5, 0"></di, v>"
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"></div>"
                        <benefit.icon className="w-6 h-6 text-cyan-400" /></benefit>
                      <div></div>"
                        <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{benefi, t.titl, e}</h, 3>"
                        <p, className="tex, t-gra, y-300, mb-4">{benefi, t.descriptio, n}</p>"
                    <ul className="space-y-2"></ul>
          <li, key={detailInde, x} classNam, e="tex, t-sm, text-gra, y-300, flex item, s-star, t"></l, i>
                Our Certifications;"
              <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-4 gap-6"></div>)
          <div, key={inde, x} classNam, e="b, g-slat, e-80, 0/50, rounded-lg, p-6, border borde, r-gra, y-70, 0/50, text-cente, r"></di, v>`
                    <div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>`
                      <cer, t.icon, className={`w-8, h-8 ${cer, t.colo, r}`} /></cer, t>"
                    <h3, className="tex, t-lg, font-semibold, text-white, mb-2">{cer, t.nam, e}</h, 3>"
                    <p, className="tex, t-gra, y-300, text-sm, mb-3">{cer, t.descriptio, n}</p>"
                    <div, className="tex, t-gree, n-400, text-sm, font-mediu, m">{cer, t.statu, s}</di, v>
              Success Stories;"
            <div className="grid grid-cols-1,"
  lg:grid-cols-2 gap-8"></div>
                      <stud, y.icon, className={`w-6, h-6 ${stud, y.colo, r}`} /></stud, y>"
                      <h3, className="tex, t-xl, font-semibold, text-white, mb-1">{stud, y.compan, y}</h, 3>"
                      <p, className="tex, t-gra, y-400, text-sm, mb-3">{stud, y.industr, y}</p>"
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challeng,</h4>
  e:</h4>"
                    <p, className="tex, t-gra, y-300, text-sm, mb-3">{stud, y.challeng, e}</p>"
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solutio,</h4>
  n:</h4>"
                    <p, className="tex, t-gra, y-300, text-sm, mb-3">{stud, y.solutio, n}</p>"
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Result,</h4>
  s:</h4>)
          <li, key={resultInde, x} classNam, e="tex, t-sm, text-gra, y-300, flex item, s-star, t"></l, i>
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Ready to Go Green?"
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
// Start your journey towards sustainable IT operations. Get a free environmental;
              assessment and discover how much you can save while protecting the planet.
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105" Get Free Assessment;
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950;
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Mail className="w-4 h-4 mr-2" />
                Email Us;
      <Footer />
  );
export default GreenItPage;