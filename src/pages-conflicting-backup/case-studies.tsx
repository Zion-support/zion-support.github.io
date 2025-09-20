import React, { useState } from "react"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
import {
  CheckCircle;
  TrendingUp;
  Users;
  DollarSign;
  Clock;
  Target;
  ArrowRight;
  Star;
  Award;
  Zap;
  Shield;
  Cloud;
  Brain;
  Globe;
}
}
 } from "lucide-react";
const caseStudies = [
  {
  id: 1,tit,
  l: e: "AI-Powered Customer Service Transformation",compa,
  n: y: "TechCorp Solutions",indust,
  r: y: "Technology",challen,
  g: e: "High customer service costs and long response times",soluti,
  o: n: "Implemented AI chatbot with natural language processing",resul,
  t: s: [
  "40% reduction in customer service costs"
      "85% faster response times"
      "95% customer satisfaction rate"
      "24/7 automated support"
]
    metri,
  c: s: {
  costReductio,
  n: "40%",responseTi,
  m: e: "85% faster",satisfacti,
  o: n: "95%",availabili,
  t: y: "24/7"
}
    technologi,
  e: s: ["AI/ML", "NLP", "Cloud Computing", "API Integration"]
    durati,
  o: n: "6 months",r,
  o: i: "300%",ima,
  g: e: "/images/case-study-1.jpg"
},
  {
  id: 2,tit,
  l: e: "Cloud Migration & DevOps Automation",compa,
  n: y: "InnovateLab Inc",indust,
  r: y: "Healthcare",challen,
  g: e: "Legacy infrastructure causing downtime and security risks",soluti,
  o: n: "Complete cloud migration with CI/CD pipeline implementation",resul,
  t: s: [
  "99.9% uptime achieved"
      "60% reduction in deployment time"
      "Enhanced security compliance"
      "Scalable infrastructure"
]
    metri,
  c: s: {
  uptim,
  e: "99.9%",deploymentTi,
  m: e: "60% faster",securitySco,
  r: e: "A+",scalabili,
  t: y: "10x"
}
    technologi,
  e: s: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    durati,
  o: n: "8 months",r,
  o: i: "250%",ima,
  g: e: "/images/case-study-2.jpg"
},
  {
  id: 3,tit,
  l: e: "Data Analytics & Business Intelligence Platform",compa,
  n: y: "DataFlow Analytics",indust,
  r: y: "Finance",challen,
  g: e: "Scattered data sources and lack of real-time insights",soluti,
  o: n: "Centralized data warehouse with real-time analytics dashboard",resul,
  t: s: [
  "Real-time data insights"
      "30% improvement in decision making"
      "Automated reporting system"
      "Predictive analytics capabilities"
]
    metri,
  c: s: {
  dataProcessin,
  g: "Real-time",decisionMaki,
  n: g: "30% better",reporti,
  n: g: "Automated",predictio,
  n: s: "90% accuracy"
}
    technologi,
  e: s: ["Big Data", "Apache Spark", "Tableau", "Python", "SQL"]
    durati,
  o: n: "10 months",r,
  o: i: "400%",ima,
  g: e: "/images/case-study-3.jpg"
},
  {
  id: 4,tit,
  l: e: "Cybersecurity & Compliance Implementation",compa,
  n: y: "SecureBank Ltd",indust,
  r: y: "Banking",challen,
  g: e: "Increasing cyber threats and regulatory compliance requirements",soluti,
  o: n: "Comprehensive security framework with SOC2 compliance",resul,
  t: s: [
  "Zero security breaches"
      "SOC2 Type II compliance achieved"
      "Advanced threat detection"
      "Employee security training"
]
    metri,
  c: s: {
  breache,
  s: "0",complian,
  c: e: "SOC2 Type II",threatDetecti,
  o: n: "99.9%",traini,
  n: g: "100% staff"
}
    technologi,
  e: s: ["SIEM", "EDR", "Firewall", "VPN", "Security Training"]
    durati,
  o: n: "12 months",r,
  o: i: "200%",ima,
  g: e: "/images/case-study-4.jpg"
},
  {
  id: 5,tit,
  l: e: "IoT & Edge Computing Solution",compa,
  n: y: "SmartManufacturing Co",indust,
  r: y: "Manufacturing",challen,
  g: e: "Inefficient production monitoring and quality control",soluti,
  o: n: "IoT sensors with edge computing for real-time monitoring",resul,
  t: s: [
  "25% increase in production efficiency"
      "90% reduction in quality issues"
      "Predictive maintenance"
      "Real-time monitoring"
]
    metri,
  c: s: {
  efficienc,
  y: "25% increase",qualityIssu,
  e: s: "90% reduction",maintenan,
  c: e: "Predictive",monitori,
  n: g: "Real-time"
}
    technologi,
  e: s: ["IoT", "Edge Computing", "Machine Learning", "5G", "Cloud"]
    durati,
  o: n: "9 months",r,
  o: i: "350%",ima,
  g: e: "/images/case-study-5.jpg"
},
  {
  id: 6,tit,
  l: e: "Digital Transformation & Legacy Modernization",compa,
  n: y: "LegacyCorp Enterprises",indust,
  r: y: "Retail",challen,
  g: e: "Outdated systems limiting growth and customer experience",soluti,
  o: n: "Complete digital transformation with modern tech stack",resul,
  t: s: [
  "50% increase in online sales"
      "Enhanced customer experience"
      "Streamlined operations"
      "Mobile-first approach"
]
    metri,
  c: s: {
  onlineSale,
  s: "50% increase",customerExperien,
  c: e: "Enhanced",operatio,
  n: s: "Streamlined",mobi,
  l: e: "First priority"
}
    technologi,
  e: s: ["React", "Node.js", "Microservices", "API Gateway", "Mobile"]
    durati,
  o: n: "15 months",r,
  o: i: "500%",ima,
  g: e: "/images/case-study-6.jpg"
},
  ]
const industries = [['AllTechnology', 'HealthcareFinance', 'BankingManufacturing', 'Retail'],
  ]
const technologies = [['AllAI/ML', 'Cloud ComputingCybersecurity', 'IoTData Analytics', 'DevOps'],
  ]

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCaseStudies = caseStudies.filter(study () => {
  const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
const matchesTechnology = selectedTechnology === 'All' ||
      study.technologies.some(tech => tech.toLowerCase().includes(selectedTechnology.toLowerCase()))
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesIndustry && matchesTechnology && matchesSearch;
})
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */},
  }
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">
              <Award className="w-5 h-5" />
              <span className="font-medium">Success Stories</span>
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Real Results, Real Impact;
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Discover how Zion Tech Group has transformed businesses across industries with;
              cutting-edge technology solutions. Our case studies showcase measurable results;
              and proven success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */},
  }
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 m,
  d:grid-cols-4 gap-4">
              {/* Search */},
  }
              <div className="md:col-span-2">
                <div className="relative">
                  <input;
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm},
  }
                    onChange={(e) => setSearchTerm(e.target.value)},
  }
                    className="className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                  />
                </div>
              </div>

              {/* Industry Filter */},
  }
              <div>
                <select;
                  value={selectedIndustry},
  }
                  onChange={(e) => setSelectedIndustry(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                >
                  {industries.map(industry => (
  <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Technology Filter */},
  }
              <div>
                <select;
                  value={selectedTechnology},
  }
                  onChange={(e) => setSelectedTechnology(e.target.value)},
  }
                  className="className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg,
  focu: s: outline-none,
  focu: s:ring-2 focu,
  s:ring-zion-cyan";"
                >
                  {technologies.map(tech => (
  <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */},
  }
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
  <motion.div;
                key={study.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6,
  hove: r: bg-white/10 hove,
  r:border-zion-cyan/30 transition-all duration-300";"
              >
                {/* Header */},
  }
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.company},
  }
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {study.industry},
  }
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{study.roi}</div>
                    <div className="text-sm text-zion-slate-light">ROI</div>
                  </div>
                </div>

                {/* Challenge & Solution */},
  }
                <div className="mb-4">
                  <div className="mb-3">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-red-400" />
                      Challenge;
                    </h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Solution;
                    </h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Key Results */},
  }
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Key Results;
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {study.results.slice(0, 4).map((result, idx) => (
  <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Metrics */},
  }
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
  <span key={idx} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tech},
  }
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration},
  }
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {study.metrics.satisfaction}% satisfaction;
                    </span>
                  </div>
                </div>

                {/* CTA */},
  }
                <div className="flex items-center justify-between">
                  <Link;
                    href={`/case-studies/${study.id}`}
                    className="className="inline-flex items-center text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors duration-300";"
                  >
                    Read Full Case Study;
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <div className="text-right">
                    <div className="text-sm text-zion-slate-light">Contact us to learn more</div>
                    <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Let's discuss how Zion Tech Group can transform your business with;
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link;
                href="/contact"
                className="className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl,
  hove: r:bg-zion-slate-light transition-all duration-300 font-medium text-lg";"
              >
                Get Started Today;
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link;
                href="/services"
                className="className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl,
  hove: r:bg-white hove,
  r:text-zion-cyan transition-all duration-300 font-medium text-lg";"
              >
                View Our Services;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}