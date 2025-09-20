import React, { useState } from "react"
import { Search, Zap, Cloud, Shield, Server, Code, GitFork, Phone, Mail, MapPin   } from "lucide-react";
const CloudDevOpsServices = () () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedPricing, setSelectedPricing] = useState('all')
    // Cloud & DevOps Services data;
const cloudDevOpsServices = [
  {
  id: 1,na,
  m: e: "Multi-Cloud Infrastructure Management",catego,
  r: y: "Cloud Management",prici,
  n: g: "Enterprise",descripti,
  o: n: "Comprehensive multi-cloud infrastructure management across AWS, Azure, GCP with unified monitoring and cost optimization"
            pri,
  c: e: 8500,pricingMod,
  e: l: "monthly",userLim,
  i: t: "Unlimited users",featur,
  e: s: ["Multi-cloud orchestration", "Cost optimization", "Unified monitoring", "Auto-scaling", "Disaster recovery", "Security compliance"]
            benefi,
  t: s: ["Reduced cloud costs", "Improved reliability", "Better performance", "Enhanced security", "Simplified management"]
            targetAudien,
  c: e: ["Large enterprises", "Multi-cloud organizations", "Financial services", "Healthcare systems"]
            ta,
  g: s: ["Multi-Cloud", "AWS", "Azure", "GCP", "Infrastructure", "Cost Optimization"]
            contactIn,
  f: o: {
  phon,
  e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com"
}
            deliveryTi,
  m: e: "4-8 weeks",suppo,
  r: t: "24/7 cloud support"
},
  {
  id: 2,na,
  m: e: "Kubernetes Cluster Management",catego,
  r: y: "Container Orchestration",prici,
  n: g: "Professional",descripti,
  o: n: "Enterprise-grade Kubernetes cluster management with automated scaling, monitoring, and security"
            pri,
  c: e: 4200,pricingMod,
  e: l: "monthly",userLim,
  i: t: "Up to 50 clusters",featur,
  e: s: ["Cluster automation", "Auto-scaling", "Security hardening", "Monitoring & alerting", "Backup & recovery", "Multi-region support"]
            benefi,
  t: s: ["Improved scalability", "Enhanced security", "Reduced operational overhead", "Better resource utilization"]
            targetAudien,
  c: e: ["DevOps teams", "Software companies", "Digital agencies", "E-commerce platforms"]
            ta,
  g: s: ["Kubernetes", "Container Orchestration", "DevOps", "Automation", "Scaling"]
            contactIn,
  f: o: {
  phon,
  e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com"
}
            deliveryTi,
  m: e: "2-4 weeks",suppo,
  r: t: "24/7 K8s support"
},
  {
  id: 3,na,
  m: e: "CI/CD Pipeline Automation",catego,
  r: y: "DevOps Automation",prici,
  n: g: "Professional",descripti,
  o: n: "End-to-end CI/CD pipeline automation with testing, deployment, and rollback capabilities"
            pri,
  c: e: 3800,pricingMod,
  e: l: "monthly",userLim,
  i: t: "Up to 100 developers",featur,
  e: s: ["Automated testing", "Deployment automation", "Rollback mechanisms", "Security scanning", "Performance testing", "Multi-environment support"]
            benefi,
  t: s: ["Faster deployments", "Reduced errors", "Improved quality", "Better collaboration", "Cost savings"]
            targetAudien,
  c: e: ["Development teams", "Software companies", "IT departments", "Digital agencies"]
            ta,
  g: s: ["CI/CD", "Automation", "DevOps", "Testing", "Deployment"]
            contactIn,
  f: o: {
  phon,
  e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com"
}
            deliveryTi,
  m: e: "3-6 weeks",suppo,
  r: t: "24/7 DevOps support"
},
  {
  id: 4,na,
  m: e: "Serverless Architecture Design",catego,
  r: y: "Serverless",prici,
  n: g: "Enterprise",descripti,
  o: n: "Design and implementation of scalable serverless architectures using AWS Lambda, Azure Functions, and GCP Cloud Functions"
            pri,
  c: e: 6500,pricingMod,
  e: l: "monthly",userLim,
  i: t: "Unlimited users",featur,
  e: s: ["Architecture design", "Function optimization", "Event-driven design", "Cost optimization", "Monitoring setup", "Security implementation"]
            benefi,
  t: s: ["Reduced infrastructure costs", "Automatic scaling", "Pay-per-use pricing", "Reduced operational overhead"]
            targetAudien,
  c: e: ["Startups", "SaaS companies", "E-commerce platforms", "API providers"]
            ta,
  g: s: ["Serverless", "AWS Lambda", "Azure Functions", "Event-Driven", "Scalability"]
            contactIn,
  f: o: {
  phon,
  e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com"
}
            deliveryTi,
  m: e: "6-10 weeks",suppo,
  r: t: "24/7 serverless support"
},
  {
  id: 5,na,
  m: e: "Infrastructure as Code (IaC)",catego,
  r: y: "Infrastructure",prici,
  n: g: "Professional",descripti,
  o: n: "Infrastructure automation using Terraform, CloudFormation, and Ansible for consistent, repeatable deployments"
            pri,
  c: e: 3200,pricingMod,
  e: l: "monthly",userLim,
  i: t: "Up to 25 environments",featur,
  e: s: ["Terraform automation", "CloudFormation templates", "Ansible playbooks", "Version control", "Testing automation", "Documentation"]
            benefi,
  t: s: ["Consistent deployments", "Reduced errors", "Faster provisioning", "Better collaboration", "Cost control"]
            targetAudien,
  c: e: ["DevOps teams", "Infrastructure teams", "Cloud architects", "System administrators"]
            ta,
  g: s: ["Infrastructure as Code", "Terraform", "CloudFormation", "Ansible", "Automation"]
            contactIn,
  f: o: {
  phon,
  e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com"
}
            deliveryTi,
  m: e: "4-8 weeks",suppo,
  r: t: "24/7 IaC support"
},
  {
  id: 6,na,
  m: e: "Cloud Security & Compliance",catego,
  r: y: "Security",prici,
  n: g: "Enterprise",descripti,
  o: n: "Comprehensive cloud security implementation with compliance monitoring for SOC2, HIPAA, and PCI-DSS"
            pri,
  c: e: 7200,pricingMod,
  e: l: "monthly",userLim,
  i: t: "Unlimited users",featur,
  e: s: ["Security assessment", "Compliance monitoring", "Threat detection", "Access control", "Data encryption", "Audit logging"]
            benefi,
  t: s: ["Enhanced security", "Regulatory compliance", "Risk mitigation", "Customer trust", "Insurance benefits"]
            targetAudien,
  c: e: ["Financial services", "Healthcare organizations", "E-commerce businesses", "Government agencies"]
            ta,
  g: s: ["Cloud Security", "Compliance", "SOC2", "HIPAA", "PCI-DSS", "Threat Detection"]
            contactIn,
  f: o: {
  phon,
  e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com"
}
            deliveryTi,
  m: e: "8-12 weeks",suppo,
  r: t: "24/7 security support"
},
  ]
    const categories = [['allCloud Management', 'Container OrchestrationDevOps Automation', 'ServerlessInfrastructure', 'Security'],
  ]
    const pricingOptions = [['allEnterprise', 'ProfessionalStandard'],
  ]
    const filteredServices = cloudDevOpsServices.filter(service () => {
  const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
        return matchesSearch && matchesCategory && matchesPricing;
})
    const getCategoryIcon = (category) () => {
  switch (category) {
  case 'Cloud Management': return <Cloud className="w-6 h-6"/>
            case 'Container Orchestration': return <Server className="w-6 h-6"/>
            case 'DevOps Automation': return <GitFork className="w-6 h-6"/>
            case 'Serverless': return <Zap className="w-6 h-6"/>
            case 'Infrastructure': return <Server className="w-6 h-6"/>
            case 'Security': return <Shield className="w-6 h-6"/>
            defau,
  l: t: return <Code className="w-6 h-6"/>
        },
  }
    const getPricingColor = (pricing) () => {
  switch (pricing) {
  case 'Enterprise': return 'text-purple-400'
            case 'Professional': return 'text-blue-400'
            case 'Standard': return 'text-green-400'
            defau,
  l: t: return 'text-gray-400'
},
  }
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */},
  }
        <div className="text-center mb-12">
          <h1 className="text-4xl,
  m: d:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Cloud & DevOps Services;
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable cloud infrastructure, automated DevOps pipelines, and container orchestration solutions that accelerate your development cycle;
          </p>
        </div>

        {/* Search and Filters */},
  }
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input type="text" placeholder="Search cloud & DevOps services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-blue-500 focu,
  s:border-transparent"/>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-blue-500">
              {categories.map(category => (<option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category},
  }
                </option>))}
            </select>
            
            <select value={selectedPricing} onChange={(e) => setSelectedPricing(e.target.value)} className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-blue-500">
              {pricingOptions.map(pricing => (<option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Tiers' : pricing},
  }
                </option>))}
            </select>
          </div>
        </div>

        {/* Services Grid */},
  }
        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
          {filteredServices.map((service) => (<div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6,
  hove: r: bg-white/10 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(service.category)},
  }
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing},
  }
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category},
  }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  ${service.price.toLocaleString()}/month;
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key,
  Feature: s:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (<span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature},
  }
                    </span>))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect,
  Fo: r:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (<span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {audience},
  }
                    </span>))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Delive,
  r: y: {service.deliveryTime}</span>
                  <a href={service.contactInfo.website} className="text-blue-400,
  hove: r:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                    Get Started →
                  </a>
                </div>
              </div>
            </div>))}
        </div>

        {/* Contact Information */},
  }
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our cloud and DevOps solutions are designed to grow with your business needs;
            </p>
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2"/>
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default CloudDevOpsServices;