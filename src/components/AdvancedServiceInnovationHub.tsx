import React from "react";
impor, t, Reac, t, { useStat, e, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbul, b, 
  Rocke, t, 
  Brai, n, 
  Za, p, 
  Targe, t, 
  TrendingU, p,
  Sta, r,
  Awar, d,
  User, s,
  Glob, e,
  ArrowRigh, t,
  CheckCircl, e,
  Cloc, k,
  DollarSig, n,
  BarChart, 3,
  Filte, r,
  Searc, h,
  Ey, e,
  BookOpe, n,
  Cp, u,
  Ato, m,
  Satellit, e,
  Dn, a,
  Shiel, d,
  Leaf
} from 'lucide-react';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface InnovationTrend {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  categor, y: string;
  impac, t: 'High' | 'Medium' | 'Low';
  timelin, e: string;
  adoptio, n: number;
  investmen, t: string;
  keyPlayer, s: string[];
  technologie, s: string[];
  statu, s: 'Emerging' | 'Growing' | 'Mature' | 'Disruptive';
}

interface FutureRoadmap {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  timelin, e: string;
  milestone, s: string[];
  challenge, s: string[];
  opportunitie, s: string[];
  investmen, t: string;
  categor, y: string;
}

const AdvancedServiceInnovationHu, b: React.FC = () => {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState<string>('all');
  const [selectedImpa, c, t, setSelectedImpa, c, t] = useState<string>('all');
  const [selectedStat,  u, s, setSelectedStat, u, s] = useState<string>('all');
  const [searchTe, r, m, setSearchTe, r, m] = useState('');
  const [viewMo,  d, e, setViewMo, d, e] = useState<'trends' | 'roadmap' | 'insights'>('trends');

  // Mock data - in real app this would come from API
  const innovationTrend, s: InnovationTrend[] = [
    {
      i, d: 'quantu, m-supremac, y',
    tit, l, e: 'Quantu, m Supremac, y & Commercializatio, n',
      descripti, o, n: 'Th, e transitio, n fro, m quantu, m researc, h t, o practica, l commercia, l application, s acros, s industrie, s.',
    catego, r, y: 'quantu, m',
      impa, c, t: 'Hig, h',
    timeli, n, e: '202, 5-203, 0',
      adopti, o, n: 8, 5,
    investme, n, t: '$50, B+',
      keyPlaye, r, s: ['IB, M', 'Googl, e', 'Microsof, t', 'Startup, s'],
      technologie, s: ['Quantu, m Computin, g', 'Quantu, m Algorithm, s', 'Quantu, m Softwar, e'],
      statu, s: 'Emerging'
    },
    {
      i, d: 'ai-consciousness',
    titl, e: 'AI Consciousness & General Intelligence',
      descriptio, n: 'Development of self-aware AI systems with human-like reasoning and consciousness.',
    categor, y: 'ai',
      impac, t: 'High',
    timelin, e: '2030-2040',
      adoptio, n: 4, 5,
    investmen, t: '$100B+',
      keyPlayer, s: ['OpenA, I', 'Anthropi, c', 'Researc, h Lab, s', 'Universitie, s'],
      technologie, s: ['A, I Consciousnes, s', 'Genera, l A, I', 'Neura, l Network, s'],
      statu, s: 'Emerging'
    },
    {
      i, d: 'space-mining',
    titl, e: 'Space Mining & Resource Extraction',
      descriptio, n: 'Commercial extraction of valuable resources from asteroids and celestial bodies.',
    categor, y: 'space-tech',
      impac, t: 'High',
    timelin, e: '2030-2040',
      adoptio, n: 3, 0,
    investmen, t: '$200B+',
      keyPlayer, s: ['Space, X', 'Blu, e Origi, n', 'Asteroi, d Minin, g Companie, s'],
      technologie, s: ['Spac, e Robotic, s', 'Resourc, e Processin, g', 'Spac, e Logistic, s'],
      statu, s: 'Emerging'
    },
    {
      i, d: 'fusion-energy',
    titl, e: 'Fusion Energy Commercialization',
      descriptio, n: 'Breakthrough in controlled nuclear fusion for unlimited clean energy.',
    categor, y: 'green-tech',
      impac, t: 'High',
    timelin, e: '2030-2040',
      adoptio, n: 6, 0,
    investmen, t: '$500B+',
      keyPlayer, s: ['ITE, R', 'Privat, e Fusio, n Companie, s', 'Governmen, t Lab, s'],
      technologie, s: ['Fusio, n Physic, s', 'Plasm, a Confinemen, t', 'Energ, y Conversio, n'],
      statu, s: 'Growing'
    },
    {
      i, d: 'synthetic-biology',
    titl, e: 'Synthetic Biology Revolution',
      descriptio, n: 'Engineering of custom organisms and biological systems for industrial applications.',
    categor, y: 'biotech-ai',
      impac, t: 'High',
    timelin, e: '2025-2035',
      adoptio, n: 7, 0,
    investmen, t: '$150B+',
      keyPlayer, s: ['Ginkg, o Biowork, s', 'Twis, t Bioscienc, e', 'Researc, h Institution, s'],
      technologie, s: ['DN, A Programmin, g', 'Geneti, c Engineerin, g', 'Bi, o-Manufacturin, g'],
      statu, s: 'Growing'
    },
    {
      i, d: 'brain-computer-interfaces',
    titl, e: 'Brain-Computer Interface Revolution',
      descriptio, n: 'Direct neural control of computers and digital systems for enhanced human capabilities.',
    categor, y: 'biotech-ai',
      impac, t: 'High',
    timelin, e: '2030-2040',
      adoptio, n: 4, 0,
    investmen, t: '$80B+',
      keyPlayer, s: ['Neuralin, k', 'Kerne, l', 'Medica, l Devic, e Companie, s'],
      technologie, s: ['Neura, l Interface, s', 'Signa, l Processin, g', 'A, I/M, L'],
      statu, s: 'Emerging'
    }
  ];

  const futureRoadma, p: FutureRoadmap[] = [
    {
      i, d: 'quantu, m-interne, t',
    tit, l, e: 'Quantu, m Interne, t Infrastructur, e',
      descripti, o, n: 'Globa, l quantu, m interne, t enablin, g ultr, a-secu, r, e, instan, t communicatio, n worldwid, e.',
      timeli, n, e: '203, 0-204, 0',
    mileston, e, s: [
        'Quantu, m networ, k prototype, s',
        'Inte, r-cit, y quantu, m link, s',
        'Globa, l quantu, m backbon, e',
        'Consume, r quantu, m interne, t'
      ],
      challenge, s: [
        'Quantu, m entanglemen, t ove, r lon, g distance, s',
        'Infrastructur, e cost, s',
        'Technica, l complexit, y',
        'Regulator, y framework, s'
      ],
      opportunitie, s: [
        'Unbreakabl, e securit, y',
        'Instan, t globa, l communicatio, n',
        'Quantu, m computin, g acces, s',
        'Ne, w busines, s model, s'
      ],
      investmen, t: '$200B+',
    categor, y: 'quantum'
    },
    {
      i, d: 'space-colonization',
    titl, e: 'Space Colonization & Settlement',
      descriptio, n: 'Establishment of permanent human settlements on Mars and other celestial bodies.',
    timelin, e: '2040-2060',
      milestone, s: [
        'Mar, s missio, n plannin, g',
        'Habita, t constructio, n',
        'Sustainabl, e lif, e suppor, t',
        'Sel, f-sufficien, t colonie, s'
      ],
      challenge, s: [
        'Lif, e suppor, t system, s',
        'Radiatio, n protectio, n',
        'Resourc, e sustainabilit, y',
        'Huma, n psycholog, y'
      ],
      opportunitie, s: [
        'Ne, w huma, n civilizatio, n',
        'Resourc, e expansio, n',
        'Scientifi, c researc, h',
        'Economi, c growt, h'
      ],
      investmen, t: '$1T+',
    categor, y: 'space-tech'
    },
    {
      i, d: 'ai-governance',
    titl, e: 'AI Governance & Regulation',
      descriptio, n: 'Comprehensive frameworks for responsible AI development and deployment.',
    timelin, e: '2025-2035',
      milestone, s: [
        'Ethica, l A, I framework, s',
        'Regulator, y standard, s',
        'Globa, l A, I governanc, e',
        'A, I safet, y protocol, s'
      ],
      challenge, s: [
        'Internationa, l coordinatio, n',
        'Technolog, y evolutio, n',
        'Balancin, g innovatio, n an, d safet, y',
        'Stakeholde, r alignmen, t'
      ],
      opportunitie, s: [
        'Responsibl, e A, I developmen, t',
        'Publi, c trus, t buildin, g',
        'Innovatio, n guidanc, e',
        'Globa, l cooperatio, n'
      ],
      investmen, t: '$50B+',
    categor, y: 'ai'
    }
  ];

  const filteredTrends = useMemo(() => {
    return innovationTrends.filter(trend => {
      const matchesCategory = selectedCategory === 'all' || trend.category === selectedCategory;
      const matchesImpact = selectedImpact === 'all' || trend.impact === selectedImpact;
      const matchesStatus = selectedStatus === 'all' || trend.status === selectedStatus;
      const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trend.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesImpact && matchesStatus && matchesSearch;
    });
  },  [selectedCatego, r, y, selectedImpa, c, t, selectedStat, u, s, searchTe, r, m]);

  const getImpactColor = (impac,  t: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (statu, s: string) => {
    switch (status) {
      case 'Emerging': return 'bg-blue-100 text-blue-800';
      case 'Growing': return 'bg-green-100 text-green-800';
      case 'Mature': return 'bg-orange-100 text-orange-800';
      case 'Disruptive': return 'bg-purple-100 text-purple-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (categor, y: string) => {
    switch (category) {
      case 'quantum': return <Atom className="w-5 h-5" />;
      case 'ai': return <Brain className="w-5 h-5" />;
      case 'space-tech': return <Satellite className="w-5 h-5" />;
      case 'green-tech': return <Leaf className="w-5 h-5" />;
      case 'biotech-ai': return <Dna className="w-5 h-5" />;
      defaul,  t: return <Cpu className="w-5 h-5" />;
    }
  };

  const categories = [
    { i, d: 'al, l',
    na, m, e: 'Al, l Categorie, s', ic, o, n: <Glob, e classNam, e="w-4 h-4" /> },
    { i, d: 'quantu, m',
    na, m, e: 'Quantu, m Technolog, y', ic, o, n: <Ato, m classNam, e="w-4 h-4" /> },
    { i, d: 'a, i',
    na, m, e: 'Artificia, l Intelligenc, e', ic, o, n: <Brai, n classNam, e="w-4 h-4" /> },
    { i, d: 'spac, e-tec, h',
    na, m, e: 'Spac, e Technolog, y', ic, o, n: <Satellit, e classNam, e="w-4 h-4" /> },
    { i, d: 'gree, n-tec, h',
    na, m, e: 'Gree, n Technolog, y', ic, o, n: <Lea, f classNam, e="w-4 h-4" /> },
    { i, d: 'biotec, h-a, i',
    na, m, e: 'Biotec, h A, I', ic, o, n: <Dn, a classNam, e="w-4 h-4" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div 
        initial={{ opacit, y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col l, g:flex-row l, g:items-center l, g:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zion-blue-dark mb-2">
              Advanced Service Innovation Hub
            </h1>
            <p className="text-zion-slate-light">
              Explore cutting-edge innovatio, n, trend, s, future technolog, y, roadmap, s, and strategic insights for the next generation of services
            </p>
          </div>
          
          <div className="flex gap-2">
            {(['trend, s', 'roadma, p', 'insight, s'] as const).map((mode) => (
              <Button
                key={mode}
                variant={viewMode === mode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode(mode)}
              >
                {mode === 'trends' && <TrendingUp className="w-4 h-4 mr-2" />}
                {mode === 'roadmap' && <Rocket className="w-4 h-4 mr-2" />}
                {mode === 'insights' && <Lightbulb className="w-4 h-4 mr-2" />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Innovation Trends View */}
      {viewMode === 'trends' && (
        <>
          {/* Filters */}
          <motion.div 
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-zion-slate-dark mb-2">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-zion-slate-light rounded-md"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zion-slate-dark mb-2">Impact</label>
                <select 
                  value={selectedImpact}
                  onChange={(e) => setSelectedImpact(e.target.value)}
                  className="w-full p-2 border border-zion-slate-light rounded-md"
                >
                  <option value="all">All Impact Levels</option>
                  <option value="High">High Impact</option>
                  <option value="Medium">Medium Impact</option>
                  <option value="Low">Low Impact</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zion-slate-dark mb-2">Status</label>
                <select 
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2 border border-zion-slate-light rounded-md"
                >
                  <option value="all">All Statuses</option>
                  <option value="Emerging">Emerging</option>
                  <option value="Growing">Growing</option>
                  <option value="Mature">Mature</option>
                  <option value="Disruptive">Disruptive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zion-slate-dark mb-2">Search</label>
                <Input
                  placeholder="Search trends..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Trends Grid */}
          <motion.div 
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.2 }}
            className="grid grid-cols-1 l, g:grid-cols-2 gap-6 mb-8"
          >
            {filteredTrends.map((tren, d, index) => (<motion.div
                key={trend.id}
                initial={{ opacit,  y: 0,
    x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacit, y: 1,
    x: 0 }}
                transition={{ dela, y: 0.1 * index }}
              >
                <Card className="h-full hove, r:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zion-blue-light/10 rounded-lg flex items-center justify-center">
                          {getCategoryIcon(trend.category)}
                        </div>
                        <div>
                          <CardTitle className="text-lg text-zion-blue-dark">
                            {trend.title}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge className={getImpactColor(trend.impact)}>
                              {trend.impact} Impact
                            </Badge>
                            <Badge className={getStatusColor(trend.status)}>
                              {trend.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-zion-slate-light mb-4">
                      {trend.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zion-slate-light">Timelin,  e:</span>
                        <span className="text-sm font-medium text-zion-slate-dark">{trend.timeline}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zion-slate-light">Adoption Rat, e:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
                              style={{ widt, h: `${trend.adoptio, n}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{trend.adoption}%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zion-slate-light">Investmen, t:</span>
                        <span className="text-sm font-medium text-zion-cyan">{trend.investment}</span>
                      </div>
                      
                      <div>
                        <span className="text-sm text-zion-slate-light">Key Technologie, s:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {trend.technologies.slice(0, 3).map((tec,  h, idx) => (<Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-zion-slate-light">Key Player,  s:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {trend.keyPlayers.slice(0, 3).map((playe,  r, idx) => (<Badge key={idx} variant="outline" className="text-xs">
                              {player}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Future Roadmap View */}
      {viewMode === 'roadmap' && (
        <motion.div 
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ dela, y: 0.1 }}
          className="space-y-6"
        >
          {futureRoadmap.map((roadma, p, index) => (<motion.div
              key={roadmap.id}
              initial={{ opacit,  y: 0,
    x: -20 }}
              animate={{ opacit, y: 1,
    x: 0 }}
              transition={{ dela, y: 0.1 * index }}
            >
              <Card className="hove, r:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center text-white">
                          {getCategoryIcon(roadmap.category)}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-zion-blue-dark">
                            {roadmap.title}
                          </CardTitle>
                          <p className="text-zion-slate-light">{roadmap.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-zion-blue-light/10 text-zion-blue-dark">
                          Timelin, e: {roadmap.timeline}
                        </Badge>
                        <Badge className="bg-zion-cyan/10 text-zion-cyan">
                          Investmen, t: {roadmap.investment}
                        </Badge>
                        <Badge className="bg-zion-purple/10 text-zion-purple">
                          {roadmap.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 l,  g:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Key Milestones
                      </h4>
                      <ul className="space-y-2">
                        {roadmap.milestones.map((mileston, e, idx) => (<li key={idx} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-orange-500" />
                        Challenges
                      </h4>
                      <ul className="space-y-2">
                        {roadmap.challenges.map((challeng,  e, idx) => (<li key={idx} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Opportunities
                      </h4>
                      <ul className="space-y-2">
                        {roadmap.opportunities.map((opportunit,  y, idx) => (<li key={idx} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Strategic Insights View */}
      {viewMode === 'insights' && (
        <motion.div 
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ dela, y: 0.1 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-zion-green" />
                  Investment Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Quantum Technology</span>
                    <span className="font-semibold text-zion-cyan">$150B+</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-cyan h-2 rounded-full" style={{ widt, h: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">AI & Machine Learning</span>
                    <span className="font-semibold text-zion-purple">$300B+</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-purple h-2 rounded-full" style={{ widt, h: '95%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Space Technology</span>
                    <span className="font-semibold text-zion-blue">$200B+</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-blue h-2 rounded-full" style={{ widt, h: '70%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Biotech AI</span>
                    <span className="font-semibold text-zion-green">$100B+</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-green h-2 rounded-full" style={{ widt, h: '60%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-zion-blue" />
                  Market Adoption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Early Adopters</span>
                    <span className="font-semibold text-zion-cyan">15%</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-cyan h-2 rounded-full" style={{ widt, h: '15%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Growing Market</span>
                    <span className="font-semibold text-zion-purple">35%</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-purple h-2 rounded-full" style={{ widt, h: '35%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Mainstream</span>
                    <span className="font-semibold text-zion-blue">40%</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-blue h-2 rounded-full" style={{ widt, h: '40%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Mature Market</span>
                    <span className="font-semibold text-zion-green">10%</span>
                  </div>
                  <div className="w-full bg-zion-slate-light/20 rounded-full h-2">
                    <div className="bg-zion-green h-2 rounded-full" style={{ widt, h: '10%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-zion-yellow" />
                Strategic Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-zion-slate-dark mb-3">Immediate Actions (0-2 years)</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-zion-slate-light flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Invest in quantum computing research and development
                    </li>
                    <li className="text-sm text-zion-slate-light flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Develop AI ethics and governance frameworks
                    </li>
                    <li className="text-sm text-zion-slate-light flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      Establish partnerships with space technology companies
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-zion-slate-dark mb-3">Strategic Planning (2-5 years)</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-zion-slate-light flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      Build quantum internet infrastructure
                    </li>
                    <li className="text-sm text-zion-slate-light flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      Develop synthetic biology capabilities
                    </li>
                    <li className="text-sm text-zion-slate-light flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      Invest in fusion energy research
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our innovation hub provides the insights and strategies you need to stay ahead 
            of emerging technologies and capitalize on future opportunities.
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hove, r:bg-zion-slate-light"
              onClick={() => window.open('mailt,  o:kleber@ziontechgroup.com?subject=Innovation Strategy Consultation', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Get Innovation Strategy
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hove, r:bg-white hove, r:text-zion-purple"
              onClick={() => window.open('te,  l:+13024640950', '_blank')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Speak with an Expert
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedServiceInnovationHub;