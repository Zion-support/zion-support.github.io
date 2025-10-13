import {Leaf, Recycle, Zap, Globe, Target, CheckCircle, ArrowRight, Phone, Mail, Award, Users, TrendingUp} from 'lucide-react';'
'use client'';
import React, { useState } from 'react';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';';
const GreenITPage: React.FC = () => {;
const [activeTab, setActiveTab] = useState('solutions');';
const tabs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'solutions','
      name: 'Green Solutions','
      icon: Leaf,
      color: 'text-green-400','
      bgColor:     ,
$4},
      id: 'benefits','
      name: 'Benefits','
      icon: Target,
      color: 'text-blue-400','
      bgColor:       ,
idid: 'certifications','
      name: 'Certifications','
      icon: Award,
      color: 'text-yellow-400','
      bgColor:     ,
$4}
  ];
const greenSolutions = [
  // TODO: Add items
]
  // TODO: Add items
]
      title: 'Energy-Efficient Data Centers','
      description: 'Design and implement energy-efficient data centers with renewable energy integration','
      icon: Zap,
      features: [
  // TODO: Add items
]
  // TODO: Add items
]
        'PUE (Power Usage Effectiveness) optimization','
        'Renewable energy integration','
        'Cooling system optimization','
        'Smart power management''
      ],
      impact: 'Reduce energy consumption by up to 40%','
      pricing:       ,
titletitle: 'Cloud Carbon Footprint Reduction','
      description: 'Optimize cloud infrastructure to minimize carbon emissions and environmental impact','
      icon: Cloud,
        'Carbon footprint monitoring','
        'Green cloud migration','
        'Resource optimization','
        'Renewable energy sourcing''
      impact: 'Reduce carbon footprint by up to 60%','
      pricing:       ,
titletitle: 'Sustainable IT Asset Management','
      description: 'Implement circular economy principles for IT equipment lifecycle management','
      icon: Recycle,
        'Equipment refurbishment','
        'Responsible disposal','
        'Asset tracking and optimization','
        'Circular economy implementation''
      impact: 'Extend equipment lifecycle by 50%','
      pricing:       ,
titletitle: 'Green Software Development','
      description: 'Develop energy-efficient software applications and optimize existing systems','
      icon: Code,
      color: 'text-purple-400','
        'Energy-efficient coding practices','
        'Performance optimization','
        'Resource usage monitoring','
        'Sustainable architecture design''
      impact: 'Reduce software energy consumption by 30%','
      pricing:       ,
titletitle: 'Remote Work Infrastructure','
      description: 'Enable sustainable remote work with optimized digital infrastructure','
      icon: Users,
      color: 'text-cyan-400','
        'Virtual desktop infrastructure','
        'Collaboration tools optimization','
        'Energy-efficient hardware','
        'Digital workspace management''
      impact: 'Reduce commuting emissions by 80%','
      pricing:       ,
titletitle: 'Environmental Monitoring','
      description: 'Real-time monitoring and reporting of environmental impact metrics','
      icon: Globe,
      color: 'text-emerald-400','
        'Carbon footprint tracking','
        'Energy consumption monitoring','
        'Sustainability reporting','
        'Environmental compliance''
      impact: 'Achieve 100% environmental transparency','
      pricing: 'Starting at $600/month';';
const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
      icon: TrendingUp,
      title: 'Cost Savings','
      description: 'Reduce operational costs through energy efficiency and resource optimization','
      details: [
  // TODO: Add items
]
  // TODO: Add items
]
        'Up to 40% reduction in energy costs','
        'Lower maintenance and replacement costs','
        'Improved resource utilization','
        'Reduced waste management costs''
      ]
      title: 'Environmental Impact','
      description: 'Significantly reduce your organization\'s carbon footprint and environmental impact','
        '60% reduction in carbon emissions','
        '50% less electronic waste','
        '100% renewable energy options','
        'Carbon neutral operations''
      title: 'Compliance & Certification','
      description: 'Meet environmental regulations and achieve sustainability certifications','
        'ISO 14001 environmental management','
        'LEED certification support','
        'Carbon Trust certification','
        'ESG reporting compliance''
      title: 'Brand Reputation','
      description: 'Enhance your brand image and attract environmentally conscious customers','
        'Improved brand perception','
        'Customer loyalty increase','
        'Investor confidence boost','
        'Talent attraction and retention';';
const certifications = [
  // TODO: Add items
]
  // TODO: Add items
]
      name: 'ISO 14001:2015','
      description: 'Environmental Management Systems','
      status:       ,
namename: 'LEED Platinum','
      description: 'Leadership in Energy and Environmental Design','
      name: 'Carbon Trust Standard','
      description: 'Carbon Footprint Management','
      name: 'Green IT Certification','
      description: 'Sustainable IT Practices',;';
const stats = [
  // TODO: Add items
]
  // TODO: Add items
]
      value: '60%','
      label: 'Carbon Footprint Reduction','
      color:       ,
valuevalue: '40%','
      label: 'Energy Cost Savings','
      color:       ,
valuevalue: '50%','
      label: 'Waste Reduction','
      color:       ,
valuevalue: '100%','
      label: 'Renewable Energy Options','
      color: 'text-purple-400';';
const caseStudies = [
  // TODO: Add items
]
  // TODO: Add items
]
      company: 'TechCorp Manufacturing','
      industry: 'Manufacturing','
      challenge: 'High energy consumption in data centers','
      solution: 'Implemented energy-efficient data center design with renewable energy integration','
      results: [
  // TODO: Add items
]
  // TODO: Add items
]
        '45% reduction in energy consumption','
        '$2.3 M annual cost savings','
        'Carbon neutral operations achieved','
        'LEED Platinum certification obtained''
      icon: Factory,
      company: 'FinanceFirst Bank','
      industry: 'Financial Services','
      challenge: 'Large carbon footprint from IT operations','
      solution: 'Green cloud migration and sustainable IT asset management','
        '55% reduction in carbon emissions','
        '60% improvement in energy efficiency','
        'ISO 14001 certification achieved','
        'Enhanced brand reputation''
      icon: Building,
  return (
  // TODO: Add parameters
)
    <React.Fragment>
<Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"container mx-auto px-4 py-16 pt-24"
          {/* Header */}
          <div className="
<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-6 neon-text"text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
              Transform your IT infrastructure into a sustainable, environmentally friendly system
              that reduces costs while protecting our planet.
            <div className="
<div className="flex items-center text-green-400"w-5 h-5 mr-2"
<span className="
              <div className="flex items-center text-blue-400"w-5 h-5 mr-2"
<span className="
              <div className="flex items-center text-purple-400"w-5 h-5 mr-2"
<span className="
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"text-center"
<div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>'
<stat.icon className={`w-8 h-8 ${stat.color}`} />
<div className={`text-3 xl font-bold ${stat.color} mb-2`}>{stat.value}
                <div className="
            ))}
          {/* Tabs */}
          <div className="mb-12"flex flex-wrap justify-center gap-4 mb-8"
              {tabs.map((tab) => (
  // TODO: Add parameters
)
                <$2 />
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
  // TODO: Add properties
}
  // TODO: Add properties
}
                    activeTab === tab.id
                      ? `${tab.bgColor} ${tab.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent''
                  }`}
                >
<tab.icon className="
<span className="font-medium"mb-16"
<h2 className="
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
<div className="
<div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
<solution.icon className={`w-6 h-6 ${solution.color}`} />
<div className="flex-1"text-xl font-semibold text-white mb-2"
                        <p className="
                    <div className="mb-4"text-sm font-semibold text-cyan-400 mb-2"
                      <ul className="
                        {solution.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-start"w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"
                            {feature}
                      <div className="
                      <div className="text-sm text-gray-300"flex items-center justify-between"
<div className={`text-lg font-bold ${solution.color}`}>
                        {solution.pricing}
                      <$2 />
                        href=""
                        className="
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1"grid grid-cols-1 md:grid-cols-2 gap-8"
                {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
                  <div key={index} className="
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"w-6 h-6 text-cyan-400"
<div>
<h3 className="
                        <p className="text-gray-300 mb-4"space-y-2"
                      {benefit.details.map((detail, detailIndex) => (
  // TODO: Add parameters
)
                        <li key={detailIndex} className="
                          {detail}
          {activeTab === 'certifications' && ('
                Our Certifications
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 text-center"
<div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>'
<cert.icon className={`w-8 h-8 ${cert.color}`} />
<h3 className="
                    <p className="text-gray-300 text-sm mb-3"text-green-400 text-sm font-medium"
          {/* Case Studies */}
              Success Stories
            <div className="
              {caseStudies.map((study, index) => (
  // TODO: Add parameters
)
                      <study.icon className={`w-6 h-6 ${study.color}`} />
<h3 className="text-xl font-semibold text-white mb-1"text-gray-400 text-sm mb-3"
                    <h4 className="
                    <p className="text-gray-300 text-sm mb-3"text-sm font-semibold text-cyan-400 mb-2"
                    <p className="
                    <h4 className="text-sm font-semibold text-green-400 mb-2"text-sm text-gray-300 flex items-start"
                          {result}
          {/* CTA Section */}
          <div className="
<h2 className="text-2 xl font-bold text-white mb-4"text-gray-300 mb-6 max-w-2 xl mx-auto"
              Start your journey towards sustainable IT operations. Get a free environmental
              assessment and discover how much you can save while protecting the planet.
            <div className="
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"tel:+13024640950""border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                <Phone className="
                (302) 464-0950
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"w-4 h-4 mr-2"
                Email Us
      <Footer /></React.Fragment>
  ),
}
export default GreenITPage;
import { Link } from 'react-router-dom';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';';
const GreenITPage: React.FC = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    return (
  // TODO: Add parameters
)
    <div>Coming Soon</div>
  )
  }
  const [activeTab, setActiveTab] = useState('solutions');';
const tabs = [
  // TODO: Add items
]
  // TODO: Add items
]
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  i,
  d: 'solutions','
      nam,
  e: 'Green Solutions','
      ico,
  n: Leaf,
      colo,
  r: 'text-green-400','
      bgColo,
  r: 'bg-green-500/10''
    },
      i,
  d: 'benefits','
      nam,
  e: 'Benefits','
      ico,
  n: Target,
      colo,
  r: 'text-blue-400','
      bgColo,
  r: 'bg-blue-500/10','
      titl,
  e: 'Energy-Efficient Data Centers','
      descriptio,
  n: 'Design and implement energy-efficient data centers with renewable energy integration','
      ico,
  n: Zap,
      feature,
  s: [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items],
//         'PUE (Power Usage Effectiveness) optimization','
//         'Renewable energy integration','
//         'Cooling system optimization','
//         'Smart power management''
//       ],
      impac,
  t: 'Reduce energy consumption by up to 40%','
      pricin,
  g: 'Starting at $2,500/month''
      titl,
  e: 'Cloud Carbon Footprint Reduction','
      descriptio,
  n: 'Optimize cloud infrastructure to minimize carbon emissions and environmental impact','
      ico,
  n: Cloud,
        'Carbon footprint monitoring','
        'Green cloud migration','
        'Resource optimization','
        'Renewable energy sourcing''
      impac,
  t: 'Reduce carbon footprint by up to 60%','
      pricin,
  g: 'Starting at $1,800/month''
      titl,
  e: 'Sustainable IT Asset Management','
      descriptio,
  n: 'Implement circular economy principles for IT equipment lifecycle management','
      ico,
  n: Recycle,
        'Equipment refurbishment','
        'Responsible disposal','
        'Asset tracking and optimization','
        'Circular economy implementation''
      impac,
  t: 'Extend equipment lifecycle by 50%','
      pricin,
  g: 'Starting at $1,200/month''
      titl,
  e: 'Green Software Development','
      descriptio,
  n: 'Develop energy-efficient software applications and optimize existing systems','
      ico,
  n: Code,
      colo,
  r: 'text-purple-400','
'Energy-efficient coding practices','
        'Performance optimization','
        'Resource usage monitoring','
        'Sustainable architecture design''
      impac,
  t: 'Reduce software energy consumption by 30%','
      pricin,
  g: 'Starting at $1,500/month''
      titl,
  e: 'Remote Work Infrastructure','
      descriptio,
  n: 'Enable sustainable remote work with optimized digital infrastructure','
      ico,
  n: Users,
      colo,
  r: 'text-cyan-400','
'Virtual desktop infrastructure','
        'Collaboration tools optimization','
        'Energy-efficient hardware','
        'Digital workspace management''
      impac,
  t: 'Reduce commuting emissions by 80%','
      pricin,
  g: 'Starting at $800/month','
      titl,
  e: 'Environmental Monitoring','
      descriptio,
  n: 'Real-time monitoring and reporting of environmental impact metrics','
      ico,
  n: Globe,
      colo,
  r: 'text-emerald-400','
'Carbon footprint tracking','
        'Energy consumption monitoring','
        'Sustainability reporting','
        'Environmental compliance''
      impac,
  t: 'Achieve 100% environmental transparency','
      pricin,
  g: 'Starting at $600/month';';
const benefits = [,
      ico,
  n: TrendingUp,
      titl,
  e: 'Cost Savings','
      descriptio,
  n: 'Reduce operational costs through energy efficiency and resource optimization','
      detail,
  s: [
  // TODO: Add items
]
  // TODO: Add items
]
'Up to 40% reduction in energy costs','
        'Lower maintenance and replacement costs','
        'Improved resource utilization','
        'Reduced waste management costs''
      ]
      titl,
  e: 'Environmental Impact','
      descriptio,
  n: 'Significantly reduce your organization\'s carbon footprint and environmental impact','
        '60% reduction in carbon emissions','
        '50% less electronic waste','
        '100% renewable energy options','
        'Carbon neutral operations''
      titl,
  e: 'Compliance & Certification','
      descriptio,
  n: 'Meet environmental regulations and achieve sustainability certifications','
        'ISO 14001 environmental management','
        'LEED certification support','
        'Carbon Trust certification','
        'ESG reporting compliance''
      titl,
  e: 'Brand Reputation','
      descriptio,
  n: 'Enhance your brand image and attract environmentally conscious customers','
        'Improved brand perception','
        'Customer loyalty increase','
        'Investor confidence boost','
        'Talent attraction and retention';';
const certifications = [
  // TODO: Add items
]
  // TODO: Add items
]
      nam,
  e: 'ISO,'
  14001:2015','
      descriptio,
  n: 'Environmental Management Systems','
      statu,
  s: 'Certified','
      nam,
  e: 'LEED Platinum','
      descriptio,
  n: 'Leadership in Energy and Environmental Design','
      nam,
  e: 'Carbon Trust Standard','
      descriptio,
  n: 'Carbon Footprint Management','
      nam,
  e: 'Green IT Certification','
      descriptio,
  n: 'Sustainable IT Practices',;';
const stats = [
  // TODO: Add items
]
  // TODO: Add items
]
      valu,
  e: '60%','
      labe,
  l: 'Carbon Footprint Reduction','
      colo,
  r: 'text-green-400','
      valu,
  e: '40%','
      labe,
  l: 'Energy Cost Savings','
      colo,
  r: 'text-yellow-400','
      valu,
  e: '50%','
      labe,
  l: 'Waste Reduction','
      colo,
  r: 'text-blue-400','
      valu,
  e: '100%','
      labe,
  l: 'Renewable Energy Options','
      colo,
  r: 'text-purple-400';';
const caseStudies = [,
      compan,
  y: 'TechCorp Manufacturing','
      industr,
  y: 'Manufacturing','
      challeng,
  e: 'High energy consumption in data centers','
      solutio,
  n: 'Implemented energy-efficient data center design with renewable energy integration','
      result,
  s: [
  // TODO: Add items
]
  // TODO: Add items
]
'45% reduction in energy consumption','
        '$2.3 M annual cost savings','
        'Carbon neutral operations achieved','
        'LEED Platinum certification obtained''
      ico,
  n: Factory,
      compan,
  y: 'FinanceFirst Bank','
      industr,
  y: 'Financial Services','
      challeng,
  e: 'Large carbon footprint from IT operations','
      solutio,
  n: 'Green cloud migration and sustainable IT asset management','
'55% reduction in carbon emissions','
        '60% improvement in energy efficiency','
        'ISO 14001 certification achieved','
        'Enhanced brand reputation''
      ico,
  n: Building,
  return (<div>Coming Soon</div>)
  )
          <React.Fragment>
<Navigation />
<div className=""
        <div className="
          {/* Header */}""text-center mb-16""text-4 xl,"
  md: text-5 xl font-bold text-white mb-6 neon-text"
</h1>
// Green IT Solutions,
          </h1>""text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
// Transform your IT infrastructure into a sustainable, environmentally friendly system
              that reduces costs while protecting our planet.
          </p>"
            <div className="flex flex-wrap justify-center gap-4"
              <div className="flex items-center text-green-400"
                <LeafclassName="w-5 h-5 mr-2"
                <span className="font-medium""
              <div className=""
                <ZapclassName=""
                <span className=""
              <div className=""
                <AwardclassName=""
                <span className="
          {/* Stats */}""grid grid-cols-2,"
  md:grid-cols-4 gap-6 mb-16"
            {stats.map((stat, index) => ()}""text-center"
<div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>`'
                  <stat.icon className={`w-8 h-8 ${stat.color}`} /></stat>`
                <div className={`text-3 xl font-bold ${stat.color} mb-2`}>{stat.value}</div>"
                <div className="text-gray-300 text-sm""
          <div className=""
            <div className="
              {tabs.map((tab) => ()}
          <button>
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}`
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${}
  // TOD,
  O: Add content,
}
                    activeTab === tab.id;`
                      ? `${tab.bgColor} ${tab.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300,'
  hover:bg-slate-700/50 border-2 border-transparent'`'
                  }`}
//                 >
          ""w-5 h-5 mr-2""font-medium"
          {/* Tab Content */}
          {activeTab === 'solutions' && ()}"'"
          <div className=""
              <h2 className="
// Our Green IT Solutions</$1>""grid grid-cols-1,$2 />"">"
                {greenSolutions.map((solution, index) => ()}"
          < key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,">"
</div>"
                    <div className="flex items-start mb-4""
                      <div className=""
                        <h3 className=""
                        <p className=""
                    <div className=""
                      <h4 className="
  Features:</h4>""space-y-1"
                        {solution.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="text-sm text-gray-300 flex items-start"
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0""
<div className="
  Impact:</div>""text-sm text-gray-300""flex items-center justify-between"
                      <div className={`text-lg font-bold ${solution.color}`}>
                        {solution.pricing}
                      <$2 />
                        href=" className="inline-flex items-center text-cyan-400 hover: text-cyan-300 font-medium text-sm transition-colors"w-4 h-4 ml-1"
          )}
          {activeTab === 'benefits' && (}'
Benefits of Green IT;"
              < className="grid grid-cols-1,">"
</div>)
                {benefits.map((benefit, index) => ()}"
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50"
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4"
                        <benefit.icon className="w-6 h-6 text-cyan-400""
                        <h3 className=""
                        <p className=""
                    <ul className="
                      {benefit.details.map((detail, detailIndex) => ()}""text-sm text-gray-300 flex items-start"
                          {detail}
{activeTab === 'certifications' && (}'
                Our Certifications;"
              < className="grid grid-cols-1,$2 />"
  lg:grid-cols-4 gap-6">""
          <div key={index} className="
                    <div className={`w-16 h-16 ${cert.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}></div>`'
                      <cert.icon className={`w-8 h-8 ${cert.color}`} /></cert>""text-lg font-semibold text-white mb-2""text-gray-300 text-sm mb-3""text-green-400 text-sm font-medium"
{/* Case Studies */}
              Success Stories;"
            < className="grid grid-cols-1,">"
              {caseStudies.map((study, index) => (}`
                      <study.icon className={`w-6 h-6 ${study.color}`} /></study>"
                      <h3 className="text-xl font-semibold text-white mb-1"
                      <p className="text-gray-400 text-sm mb-3"
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2""
                    <p className=""
                    <h4 className="
  n:</h4>""text-gray-300 text-sm mb-3""text-sm font-semibold text-green-400 mb-2"
  s:</h4>)
                      {study.results.map((result, resultIndex) => ()}"
          <li key={resultIndex} className="text-sm text-gray-300 flex items-start""
          <div className=""
            <h2 className="
              Ready to Go Green?""text-gray-300 mb-6 max-w-2 xl mx-auto"
// Start your journey towards sustainable IT operations. Get a free environmental
              assessment and discover how much you can save while protecting the planet.
          <div className="
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"tel:+13024640950" className="
                <Phone className="w-4 h-4 mr-2"mailto:kleber@ziontechgroup.com" className="
                <Mail className="w-4 h-4 mr-2"
                Email Us
      <Footer /></div>
  ),
}
export default GreenItPage</div></div>;
</div></div>
</div></li>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</h2></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</span></span>
</span></span>
</span></span>
</span></button>
</p></p>
</p></p>
</p></p>
</p></p>
</h2></h2>
</h2></h3>
</h3></h3>
</h3></h4>
</h4></h4>
</h4></ul>
</ul></ul>
</li></li>
</li></li>
}))))))))))))))))))))))