import React, { useState, useMemo } from "react"
import { motion, } from 'framer-motion';'
import { Lightbulb, Rocket, Brain, Zap, TrendingUp, Star, Users, Globe, CheckCircle, Cpu, Atom, Satellite, Dna, Shield, Leaf } from 'lucide-react';"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';";"
import { Button, } from './ui/button';";"
import { Badge, } from './ui/badge';";"
import { Input, } from './ui/input";
const AdvancedServiceInnovationHub = () => {}";
""'';"
    const [selectedCategory, setSelectedCategory] = useState('all')';'
    const [selectedImpact, setSelectedImpact] = useState('all')';'
    const [selectedStatus, setSelectedStatus] = useState('all')';"
    const [searchTerm, setSearchTerm] = useState(")';'
    const [viewMode, setViewMode] = useState('trends")
    // Mock data - in real app this would come from API
    const innovationTrends = []
        {}"
""''
            id: 'quantum-supremacy","'
            title: 'Quantum Supremacy & Commercialization","'
            description: 'The transition from quantum research to practical commercial applications across industries.","'
            category: 'quantum","'
            impact: 'High","'
            timeline: '2025-2030","
            adoption: 85,""
            investment: '$50B+","';
            keyPlayers['IBM',Google',Microsoft',Startups'],';'
            technologies['Quantum Computing',Quantum Algorithms',Quantum Software'],';'
            status: 'Emerging",
}, {}"
""''
            id: 'ai-consciousness","'
            title: 'AI Consciousness & General Intelligence","'
            description: 'Development of self-aware AI systems with human-like reasoning and consciousness.","'
            category: 'ai","'
            impact: 'High","'
            timeline: '2030-2040","
            adoption: 45,""
            investment: '$100B+","'
            keyPlayers['OpenAI',Anthropic',Research Labs',Universities'],';'
            technologies['AI Consciousness',General AI',Neural Networks'],';'
            status: 'Emerging",
}, {}"
""''
            id: 'space-mining","'
            title: 'Space Mining & Resource Extraction","'
            description: 'Commercial extraction of valuable resources from asteroids and celestial bodies.","'
            category: 'space-tech","'
            impact: 'High","'
            timeline: '2030-2040","
            adoption: 30,""
            investment: '$200B+","'
            keyPlayers['SpaceX',Blue Origin',Asteroid Mining Companies'],';'
            technologies['Space Robotics',Resource Processing',Space Logistics'],';'
            status: 'Emerging",
}, {}"
""''
            id: 'fusion-energy","'
            title: 'Fusion Energy Commercialization","'
            description: 'Breakthrough in controlled nuclear fusion for unlimited clean energy.","'
            category: 'green-tech","'
            impact: 'High","'
            timeline: '2030-2040","
            adoption: 60,""
            investment: '$500B+","'
            keyPlayers['ITER',Private Fusion Companies',Government Labs'],';'
            technologies['Fusion Physics',Plasma Confinement',Energy Conversion'],';'
            status: 'Growing",
}, {}"
""''
            id: 'synthetic-biology","'
            title: 'Synthetic Biology Revolution","'
            description: 'Engineering of custom organisms and biological systems for industrial applications.","'
            category: 'biotech-ai","'
            impact: 'High","'
            timeline: '2025-2035","
            adoption: 70,""
            investment: '$150B+","'
            keyPlayers['Ginkgo Bioworks',Twist Bioscience',Research Institutions'],';'
            technologies['DNA Programming',Genetic Engineering',Bio-Manufacturing'],';'
            status: 'Growing",
}, {}"
""''
            id: 'brain-computer-interfaces","'
            title: 'Brain-Computer Interface Revolution","'
            description: 'Direct neural control of computers and digital systems for enhanced human capabilities.","'
            category: 'biotech-ai","'
            impact: 'High","'
            timeline: '2030-2040","
            adoption: 40,""
            investment: '$80B+","'
            keyPlayers['Neuralink',Kernel',Medical Device Companies'],';'
            technologies['Neural Interfaces',Signal Processing',AI/ML'],';'
            status: 'Emerging",
}
    ]
    const filteredTrends = useMemo(() => {}
        return innovationTrends.filter(trend => {}
            const matchesSearch =, trend.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                trend.description.toLowerCase().includes(searchTerm.toLowerCase())
            return matchesCategory && matchesImpact && matchesStatus && matchesSearch})}, [selectedCategory, selectedImpact, selectedStatus, searchTerm])
    const getImpactColor = (impact) => {}
        switch (impact) {}"
""''
            case 'High': return "bg-red-100 text-red-800"
            case 'Medium': return "bg-yellow-100 text-yellow-800"
            case 'Low': return "bg-green-100 text-green-800"
            default: return 'bg-gray-100 text-gray-800"}
    }
    const getStatusColor = (status) => {}
        switch (status) {}"
""''
            case 'Emerging': return "bg-blue-100 text-blue-800"
            case 'Growing': return "bg-green-100 text-green-800"
            case 'Mature': return "bg-orange-100 text-orange-800"
            case 'Disruptive': return "bg-purple-100 text-purple-800"
            default: return 'bg-gray-100 text-gray-800"}
    }
    const getCategoryIcon = (category) => {}
        switch(category) {}"""
"""";
            case 'quantum': return <Atom className='w-5 h-5'/" ></Atom>";""
            case 'ai': return <Brain className='w-5 h-5'/" ></Brain>";""
            case 'space-tech': return <Satellite className='w-5 h-5'/" ></Satellite>";""
            case 'green-tech': return <Leaf className='w-5 h-5'/" ></Leaf>";""
            case 'biotech-ai': return <Dna className='w-5 h-5'/" ></Dna>";"
            default: return <Cpu className='w-5 h-5'/" ></Cpu>}",;
}";"
    const categories = ["""'
        { id: 'all', name: 'All Categories', icon: <Globe className='w-4 h-4'/" ></Globe> },"""
        { id: 'quantum', name: 'Quantum Technology', icon: <Atom className='w-4 h-4'/" ></Atom> },"""
        { id: 'ai', name: 'Artificial Intelligence', icon: <Brain className='w-4 h-4'/" ></Brain> },"""
        { id: 'space-tech', name: 'Space Technology', icon: <Satellite className='w-4 h-4'/" ></Satellite> },"""
        { id: 'green-tech', name: 'Green Technology', icon: <Leaf className='w-4 h-4'/" ></Leaf> },"""
        { id: 'biotech-ai', name: 'Biotech AI', icon: <Dna className='w-4 h-4'/" ></Dna> }"',;
]";"
    return (<div className='max-w-7xl mx-auto p-6'>
      {/* Header */}
      <motion.div initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0 ""
"'',
}} className='mb-8"></motion>"''
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">""
          <div>"''
            <h1 className='text-3xl font-bold text-zion-blue-dark mb-2'>"
              Advanced Service Innovation Hub""
            </h1>"''
            <p className='text-zion-slate-light'>
              Explore cutting-edge innovation trends, future technology roadmaps, and strategic insights for the next generation of services
            </p>"
          </div>""
          """
          <div className='flex gap-2">"""'
            {['trends',roadmap',insights'].map((mode) => (<Button key={mode} variant={viewMode === mode ? 'default' : 'outline'} size='sm', onClick={() =" > setViewMode(mode)}>"""'
                {mode === 'trends' && <TrendingUp className='w-4 h-4 mr-2'/" ></TrendingUp>}"""'
                {mode === 'roadmap' && <Rocket className='w-4 h-4 mr-2'/" ></Rocket>}"""'
                {mode === 'insights' && <Lightbulb className='w-4 h-4 mr-2'/" ></Lightbulb>}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </Button>))}
          </div>
        </div>"
      </motion.div>""
      {/* Innovation Trends View */}"'
      {viewMode === 'trends' && (<>
          {/* Filters */}
          <motion.div initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0 ""
"'',
}} transition={{ delay: 0.1 } className='bg-white rounded-lg shadow-lg p-6 mb-8"></motion>"''
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">""
              <div>"''
                <label className='block text-sm font-medium text-zion-slate-dark mb-2"></labe>Category</label>"''
                <select value={selectedCategory} onChange={(e) =" > setSelectedCategory(e.target.value)} className='w-full p-2 border border-zion-slate-light rounded-md'>
                  {categories.map(category => (<option key={category.id} value={category.id}" >
                      {category.name}, </option>) ) }
                </select>
              </div>"'"
              <div>"''
                <label className='block text-sm font-medium text-zion-slate-dark mb-2"></labe>Impact</label>"''
                <select value={selectedImpact} onChange={(e) =" > setSelectedImpact(e.target.value)} className='w-full p-2 border border-zion-slate-light rounded-md">"''
                  <option value='all"></optio>All Impact Levels</option>"''
                  <option value='High"></optio>High Impact</option>"''
                  <option value='Medium"></optio>Medium Impact</option>"''
                  <option value='Low"></optio>Low Impact</option>
                </select>
              </div>"'"
              <div>"''
                <label className='block text-sm font-medium text-zion-slate-dark mb-2"></labe>Status</label>"''
                <select value={selectedStatus} onChange={(e) =" > setSelectedStatus(e.target.value)} className='w-full p-2 border border-zion-slate-light rounded-md">"''
                  <option value='all"></optio>All Statuses</option>"''
                  <option value='Emerging"></optio>Emerging</option>"''
                  <option value='Growing"></optio>Growing</option>"''
                  <option value='Mature"></optio>Mature</option>"''
                  <option value='Disruptive"></optio>Disruptive</option>
                </select>
              </div>"'"
              <div>"''
                <label className='block text-sm font-medium text-zion-slate-dark mb-2"></labe>Search</label>"''
                <Input placeholder='Search trends...' value={searchTerm} onChange={(e) =" > setSearchTerm(e.target.value)} className='w-full'/>
              </div>
            </div>
          </motion.div>
          {/* Trends Grid */}
          <motion.div initial = {}
  { opacity: 0,
  y: 20,
}} animate = {}"
  { opacity: 1, y: 0 ""
"'',
}} transition={{ delay: 0.2 } className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'></motion>
            {filteredTrends.map((trend, index) => (<motion .div key={trend.id} initial = {}
  { opacity: 0, x: index % 2 === 0 ? -20 : 20,
}} animate = {}"
  { opacity: 1, x: 0';',
}} transition={{ delay: 0.1 * index }" ></motion>"''
                <Card className='h-full hover:shadow-lg transition-shadow">""
                  <CardHeader>"''
                    <div className='flex items-start justify-between mb-4">"''
                      <div className='flex items-center gap-3">"''
                        <div className='w-10 h-10 bg-zion-blue-light/10 rounded-lg flex items-center justify-center'>
                          {getCategoryIcon(trend.category)}"
                        </div>""
                        <div>"''
                          <CardTitle className='text-lg text-zion-blue-dark'>"
                            {trend.title}""
                          </CardTitle>"''
                          <div className='flex gap-2 mt-2'>
                            <Badge className={getImpactColor(trend.impact)}" >
                              {trend.impact} Impact
                            </Badge>
                            <Badge className={getStatusColor(trend.status) }" >
                              {trend.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>"'"
                  <CardContent>"''
                    <p className='text-zion-slate-light mb-4'>
                      {trend.description}"
                    </p>""
                    "''
                    <div className='space-y-3">"''
                      <div className='flex justify-between items-center">"''
                        <span className='text-sm text-zion-slate-light"></spa>Timeline:</span>"''
                        <span className='text-sm font-medium text-zion-slate-dark'></spa>{trend.timeline}</span>"
                      </div>""
                      "''
                      <div className='flex justify-between items-center">"''
                        <span className='text-sm text-zion-slate-light"></spa>Adoption Rate:</span>"''
                        <div className='flex items-center gap-2">"''
                          <div className='w-20 bg-zion-slate-light/20 rounded-full h-2">"''
                            <div className='bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full' style={{ width: `${trend.adoption}%` }}" ></di></div>""
                          </div>"''
                          <span className='text-sm font-medium'></spa>{trend.adoption}%</span>
                        </div>"
                      </div>""
                      "''
                      <div className='flex justify-between items-center">"''
                        <span className='text-sm text-zion-slate-light"></spa>Investment:</span>"''
                        <span className='text-sm font-medium text-zion-cyan"></spa>{trend.investment}</span>
                      </div>"'"
                      <div>"''
                        <span className='text-sm text-zion-slate-light"></spa>Key Technologies:</span>"''
                        <div className='flex flex-wrap gap-1 mt-1">"''
                          {trend.technologies.slice(0, 3).map((tech, idx) => (<Badge key={idx} variant='outline' className='text-xs">
                              {tech}, </Badge>) ) }
                        </div>
                      </div>"'"
                      <div>"''
                        <span className='text-sm text-zion-slate-light"></spa>Key Players:</span>"''
                        <div className='flex flex-wrap gap-1 mt-1">"''
                          {trend.keyPlayers.slice(0, 3).map((player, idx) => (<Badge key={idx} variant='outline' className='text-xs'>
                              {player}, </Badge>) ) }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>) ) }
          </motion.div>
        </>) }
"
      {/* Future Roadmap View */}'
      {viewMode === 'roadmap' && (<motion.div initial = {}
  { opacity: 0,
  y: 20,
}} animate = {}"
  { opacity: 1, y: 0 ""
"'',
}} transition={{ delay: 0.1 } className='space-y-6'></motion>
          {futureRoadmap.map((roadmap, index) => (<motion .div key={roadmap.id} initial = {}
  { opacity: 0, x: -20,
}} animate = {}"
  { opacity: 1, x: 0';',
}} transition={{ delay: 0.1 * index }" ></motion>"''
              <Card className='hover:shadow-lg transition-shadow">""
                <CardHeader>"''
                  <div className='flex items-start justify-between">"''
                    <div className='flex-1">"''
                      <div className='flex items-center gap-3 mb-3">"''
                        <div className='w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center text-white'>
                          {getCategoryIcon(roadmap.category)}"
                        </div>""
                        <div>"''
                          <CardTitle className='text-xl text-zion-blue-dark'>"
                            {roadmap.title}""
                          </CardTitle>"''
                          <p className='text-zion-slate-light'>{roadmap.description}</p>
                        </div>"
                      </div>""
                      "''
                      <div className='flex flex-wrap gap-2">"''
                        <Badge className='bg-zion-blue-light/10 text-zion-blue-dark'>"
                          Timeline: {roadmap.timeline}""
                        </Badge>"''
                        <Badge className='bg-zion-cyan/10 text-zion-cyan'>"
                          Investment: {roadmap.investment}""
                        </Badge>"''
                        <Badge className='bg-zion-purple/10 text-zion-purple">
                          {roadmap.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>"'"
                <CardContent>"''
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6">""
                    <div>"''
                      <h4 className='font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">"''
                        <CheckCircle className='w-4 h-4 text-green-500'/" ></CheckCircle>"
                        Key Milestones""
                      </h4>"''
                      <ul className='space-y-2">"''
                        {roadmap.milestones.map((milestone, idx) => (<li key={idx} className='text-sm text-zion-slate-light flex items-start gap-2">"''
                            <div className='w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></di></div>
                            {milestone}, </li>) ) }
                      </ul>
                    </div>"'"
                    <div>"''
                      <h4 className='font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">"''
                        <Shield className='w-4 h-4 text-orange-500'/" ></Shield>"
                        Challenges""
                      </h4>"''
                      <ul className='space-y-2">"''
                        {roadmap.challenges.map((challenge, idx) => (<li key={idx} className='text-sm text-zion-slate-light flex items-start gap-2">"''
                            <div className='w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></di></div>
                            {challenge}, </li>) ) }
                      </ul>
                    </div>"'"
                    <div>"''
                      <h4 className='font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">"''
                        <Star className='w-4 h-4 text-yellow-500'/" ></Star>"
                        Opportunities""
                      </h4>"''
                      <ul className='space-y-2">"''
                        {roadmap.opportunities.map((opportunity, idx) => (<li key={idx} className='text-sm text-zion-slate-light flex items-start gap-2">"''
                            <div className='w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0'></di></div>
                            {opportunity}, </li>) ) }
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>) ) }
        </motion.div>) }
"
      {/* Strategic Insights View */}'
      {viewMode === 'insights' && (<motion.div initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0 ""
"'',
}} transition={{ delay: 0.1 } className='space-y-6"></motion>"''
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>"
            <Card>""
              <CardHeader>"''
                <CardTitle className='flex items-center gap-2">"''
                  <TrendingUp className='w-5 h-5 text-zion-green'/" ></TrendingUp>
                  Investment Trends
                </CardTitle>"
              </CardHeader>""
              <CardContent>"''
                <div className='space-y-4">"''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Quantum Technology</span>"''
                    <span className='font-semibold text-zion-cyan"></spa>$150B+</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-cyan h-2 rounded-full' style={{ width: '85%' }" ></di></div>"
                  </div>""
                  "''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>AI & Machine Learning</span>"''
                    <span className='font-semibold text-zion-purple"></spa>$300B+</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-purple h-2 rounded-full' style={{ width: '95%' }" ></di></div>"
                  </div>""
                  "''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Space Technology</span>"''
                    <span className='font-semibold text-zion-blue"></spa>$200B+</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-blue h-2 rounded-full' style={{ width: '70%' }" ></di></div>"
                  </div>""
                  "''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Biotech AI</span>"''
                    <span className='font-semibold text-zion-green"></spa>$100B+</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-green h-2 rounded-full' style={{ width: '60%' }" ></di></div>
                  </div>
                </div>
              </CardContent>
            </Card>"
            <Card>""
              <CardHeader>"''
                <CardTitle className='flex items-center gap-2">"''
                  <Users className='w-5 h-5 text-zion-blue'/" ></Users>
                  Market Adoption
                </CardTitle>"
              </CardHeader>""
              <CardContent>"''
                <div className='space-y-4">"''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Early Adopters</span>"''
                    <span className='font-semibold text-zion-cyan"></spa>15%</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-cyan h-2 rounded-full' style={{ width: '15%' }" ></di></div>"
                  </div>""
                  "''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Growing Market</span>"''
                    <span className='font-semibold text-zion-purple"></spa>35%</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-purple h-2 rounded-full' style={{ width: '35%' }" ></di></div>"
                  </div>""
                  "''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Mainstream</span>"''
                    <span className='font-semibold text-zion-blue"></spa>40%</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-blue h-2 rounded-full' style={{ width: '40%' }" ></di></div>"
                  </div>""
                  "''
                  <div className='flex justify-between items-center">"''
                    <span className='text-zion-slate-light"></spa>Mature Market</span>"''
                    <span className='font-semibold text-zion-green"></spa>10%</span>""
                  </div>"""
                  <div className='w-full bg-zion-slate-light/20 rounded-full h-2">"""'
                    <div className='bg-zion-green h-2 rounded-full' style={{ width: '10%' }" ></di></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>"
          <Card>""
            <CardHeader>"''
              <CardTitle className='flex items-center gap-2">"''
                <Lightbulb className='w-5 h-5 text-zion-yellow'/" ></Lightbulb>
                Strategic Recommendations
              </CardTitle>"
            </CardHeader>""
            <CardContent>"''
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6">""
                <div>"''
                  <h4 className='font-semibold text-zion-slate-dark mb-3"></h>Immediate Actions (0-2 years)</h4>"''
                  <ul className='space-y-2">"''
                    <li className='text-sm text-zion-slate-light flex items-start gap-2">"''
                      <CheckCircle className='w-4 h-4 text-green-500 mt-1 flex-shrink-0'/" ></CheckCircle>"
                      Invest in quantum computing research and development""
                    </li>"''
                    <li className='text-sm text-zion-slate-light flex items-start gap-2">"''
                      <CheckCircle className='w-4 h-4 text-green-500 mt-1 flex-shrink-0'/" ></CheckCircle>"
                      Develop AI ethics and governance frameworks""
                    </li>"''
                    <li className='text-sm text-zion-slate-light flex items-start gap-2">"''
                      <CheckCircle className='w-4 h-4 text-green-500 mt-1 flex-shrink-0'/" ></CheckCircle>
                      Establish partnerships with space technology companies
                    </li>
                  </ul>
                </div>"'"
                <div>"''
                  <h4 className='font-semibold text-zion-slate-dark mb-3"></h>Strategic Planning (2-5, years)</h4>"''
                  <ul className='space-y-2">"''
                    <li className='text-sm text-zion-slate-light flex items-start gap-2">"''
                      <CheckCircle className='w-4 h-4 text-blue-500 mt-1 flex-shrink-0'/" ></CheckCircle>"
                      Build quantum internet infrastructure""
                    </li>"''
                    <li className='text-sm text-zion-slate-light flex items-start gap-2">"''
                      <CheckCircle className='w-4 h-4 text-blue-500 mt-1 flex-shrink-0'/" ></CheckCircle>"
                      Develop synthetic biology capabilities""
                    </li>"''
                    <li className='text-sm text-zion-slate-light flex items-start gap-2">"''
                      <CheckCircle className='w-4 h-4 text-blue-500 mt-1 flex-shrink-0'/" ></CheckCircle>
                      Invest in fusion energy research
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>) }

      {/* CTA Section */}
      <motion.div initial = {}
  { opacity: 0, y: 20,
}} animate = {}"
  { opacity: 1, y: 0 ""
"'',
}} transition={{ delay: 0.4 } className='mt-12 text-center"></motion>"''
        <div className='bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">"''
          <h3 className='text-3xl font-bold mb-4"></h>Ready to Shape the Future?</h3>"''
          <p className='text-xl mb-6 max-w-2xl mx-auto'>
            Our innovation hub provides the insights and strategies you need to stay ahead"
            of emerging technologies and capitalize on future opportunities.""
          </p>"''
          <div className='flex flex-col sm:flex-row gap-4 justify-center">"''
            <Button className='bg-white text-zion-purple hover:bg-zion-slate-light" onClick = {}"
  () =" > window.open('mailto:kleber@ziontechgroup.com?subject=Innovation Strategy Consultation',_blank")"'",
}>"''
              <Users className='w-5 h-5 mr-2'/" ></Users>"
              Get Innovation Strategy""
            </Button>"''
            <Button variant='outline' className='border-white text-white hover:bg-white hover:text-zion-purple" onClick = {}"
  () =" > window.open('tel:+13024640950',_blank")"'",
}>"''
              <Zap className='w-5 h-5 mr-2"/" ></Zap>
              Speak with an Expert
            </Button>
          </div>
        </div>
      </motion.div>
    </div>)}
export default AdvancedServiceInnovationHub

export { AdvancedServiceInnovationHub }

export { AdvancedServiceInnovationHub }

export { AdvancedServiceInnovationHub }

export { AdvancedServiceInnovationHub }

export { AdvancedServiceInnovationHub }"`