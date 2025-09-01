import React, { useState } from 'react';
export default React.memo(function CaseStudies () {
import { motion  } from 'framer-motion';

  FileText,
  Building,
  Users,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,  Star,
  Award,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Globe,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  DollarSign,
  ChartBar,
  Clock,
  MapPin,
  Factory} from 'lucide-react';

export default function CaseStudies() {
'
  const [selectedIndustry, setSelectedIndustry] = useState('all');'
  const [selectedService, setSelectedService] = useState('all');'
  const [searchQuery, setSearchQuery] = useState('');

  
  
  
  // Calculate counts
  industries.forEach(industry => {
'
    if (industry.id === 'all') {

      industry.count = caseStudies.length} else {

      industry.count = caseStudies.filter()
        cs => cs.industry === industry.id
      ).length}
  }) ;
  services.forEach(service => {
'
    if (service.id === 'all') {

      service.count = caseStudies.length} else {

      service.count = caseStudies.filter()
        cs => cs.service === service.id
      ).length}
  ];

  const services = [{ id: 'all', name: 'All Services', icon: Zap, count: 0 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 0 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 0 },
  ];

  
  return()    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">"
      {/* Header */}""
      <div className="bg-white border-b border-gray-200">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">""
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}"
            >""
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">""
                <FileText className="h-10 w-10 text-white"  />"
              </div>""
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Customer Success Stories"
              </h1>"              <p className="text-xl text-gray-600 max-w-3xl mx-auto">'
                Discover how organizations across industries are transforming''
                their business with Zion Tech Group's innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>"
""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
        {/* Search and Filters */}""
        <div className="mb-8">""
          <div className="flex flex-col lg:flex-row gap-4">""
            <div className="flex-1">""
              <div className="relative">""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"  />"
                <input""
                  type="text""                  placeholder="Search case studies..."
                  value={searchQuery}"
                  onChange={e => setSearchQuery(e.target.value)}""
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>"
            </div>""
            <div className="flex gap-4">
              <select
                value={selectedIndustry}"
                onChange={e => setSelectedIndustry(e.target.value)}""
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {industries.map(industry => (<option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count}) </option>) ) }
              </select>
              <select
                value={selectedService}"
                onChange={e => setSelectedService(e.target.value)}""
                className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {services.map(service => (<option key={service.id} value={service.id}>
                    {service.name} ({service.count}) </option>) ) }
              </select>
            </div>
          </div>
        </div>

        {/* Featured Case Studies */}"
        {filteredCaseStudies.filter(cs => cs.featured).length > 0 && (""
          <div className="mb-12">""
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Success Stories"
            </h2>""
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies
                .filter(cs => cs.featured) .map((cs, index) => (<motion.article
                    key={cs.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}"
                    transition={{ delay: index * 0.1 }}""
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow""
                  >""
                    <div className="p-6">""
                      <div className="flex items-center space-x-2 mb-3">""
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                          Featured"
                        </span>""
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {industries.find(i => i.id === cs.industry)?.name}
                        </span>"
                      </div>""
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cs.title}"
                      </h3>""
                      <p className="text-gray-600 mb-3 font-medium">
                        {cs.company}"
                      </p>""
                      <p className="text-gray-600 mb-4">{cs.challenge}</p>""
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">""
                        <span className="flex items-center">""
                          <Clock className="h-4 w-4 mr-1"  />
                          {cs.duration}"
                        </span>""
                        <span className="flex items-center">""
                          <Users className="h-4 w-4 mr-1"  />
                          {cs.teamSize}
                        </span>
                      </div>
                      <a"
                        href={`/case-studies/${cs.id}`}""
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >"
                        Read Full Case Study""
                        <ArrowRight className="ml-1 h-4 w-4"  />
                      </a>
                    </div>
                  </motion.article>) ) }
            </div>
          </div>) }

        {/* All Case Studies */}"
        <div>""
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {filteredCaseStudies.length} Case Studies Found"
          </h2>""
          <div className="space-y-6">
            {filteredCaseStudies
              .filter(cs => !cs.featured) .map((cs, index) => (<motion.article
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}"
                  transition={{ delay: index * 0.1 }}""
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow""
                >""
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">""
                    <div className="lg:col-span-2">""
                      <div className="flex items-center space-x-2 mb-2">""
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {industries.find(i => i.id === cs.industry)?.name}"
                        </span>""
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {services.find(s => s.id === cs.service)?.name}
                        </span>"
                      </div>""
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {cs.title}"
                      </h3>""
                      <p className="text-gray-600 mb-2 font-medium">
                        {cs.company}"
                      </p>""
                      <p className="text-gray-600 mb-3">{cs.challenge}</p>""
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">""
                        <span className="flex items-center">""
                          <Clock className="h-4 w-4 mr-1"  />
                          {cs.duration}"
                        </span>""
                        <span className="flex items-center">""
                          <Users className="h-4 w-4 mr-1"  />
                          {cs.teamSize}
                        </span>"
                      </div>""
                      <div className="flex items-center space-x-2">""
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">""
                          <Bookmark className="h-4 w-4"  />"
                        </button>""
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">""
                          <Share2 className="h-4 w-4" />
                        </button>`
                        <a`"`
                          href={`/case-studies/${cs.id}`}""
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >"
                          Read Full Case Study""
                          <ArrowRight className="ml-1 h-4 w-4"  />
                        </a>
                      </div>"
                    </div>""
                    <div className="lg:col-span-1">""
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Results"
                      </h4>""
                      <ul className="space-y-2">
                        {cs.results.slice(0, 3).map((result, idx) => (
                          <li"
                            key={idx}""
                            className="flex items-start text-sm text-gray-600""
                          >""
                            <TrendingUp className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"  />
                            {result}
                          </li>) ) }
                      </ul>
                    </div>
"
                    <div className="mb-6">"
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>"
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => ("
                          <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
"
                    <div className="flex items-center justify-between">"
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">"
                        <span className="mr-2">View Details</span>"
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"  />
                      </div>"
                      <div className="flex items-center space-x-2">"
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300">"
                          <Share2 className="w-4 h-4" />
                        </button>"
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300">"
                          <Download className="w-4 h-4"  />
                        </button>
                      </div>
                    </div>                  </div>
                </motion.article>
              ))}
          </div>
        </section>
"
          {filteredCaseStudies.length === 0 && (""
            <div className="text-center py-12">""
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4"  />""
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No case studies found"
              </h3>""
              <p className="text-gray-600">
                Try adjusting your search terms or filters.
              </p>            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}"
          transition={{ delay: 0.5 }}""
          className="mt-16 text-center""
        >""
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">""
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Your Success Story?"
            </h2>""
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">'
              Let's discuss how Zion Tech Group can help transform your business
              with cutting-edge technology solutions."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <a""
                href="/contact""
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >"
                Schedule a Consultation""
                <ArrowRight className="ml-2 h-4 w-4"  />              </a>"
              <a""
                href="/services""
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                <span>Explore Our Services</span>"
                <Rocket className="w-5 h-5 ml-2"  />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )}'"`
'"`'"`
