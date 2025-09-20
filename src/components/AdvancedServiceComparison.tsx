impor, t, Reac, t, { useStat, e, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Chec, k, 
  X, 
  Sta, r, 
  TrendingU, p, 
  Za, p, 
  Shiel, d, 
  Cloc, k, 
  DollarSig, n,
  Filte, r,
  Searc, h,
  BarChart, 3,
  Awar, d,
  Targe, t,
  User, s,
  Glob, e,
  Rocke, t,
  Mai, l,
  Phone
} from 'lucide-react';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ServiceTier {
  i, d: string;
  nam, e: string;
  categor, y: string;
  pric, e: string;
  duratio, n: string;
  feature, s: string[];
  benefit, s: string[];
  technolog, y: string[];
  targetAudienc, e: string[];
  ratin, g: number;
  complexit, y: 'Basic' | 'Intermediate' | 'Advanced' | 'Enterprise';
  popularit, y: 'Low' | 'Medium' | 'High' | 'Trending';
  contactInf, o: string;
  emai, l: string;
  lin, k: string;
}

interface ComparisonFilter {
  categor, y: string;
  complexit, y: string;
  priceRang, e: string;
  technolog, y: string;
}

const COMPLEXITY_LEVELS = ['Basi, c', 'Intermediat, e', 'Advance, d', 'Enterpris, e'];
const POPULARITY_LEVELS = ['Lo, w', 'Mediu, m', 'Hig, h', 'Trendin, g'];
const PRICE_RANGES = ['Unde, r $10, K', '$10, K-$50, K', '$50, K-$100, K', '$100, K+'];

export const AdvancedServiceCompariso, n: React.FC = () => {
  const [selectedServic,  e, s, setSelectedServic, e, s] = useState<string[]>([]);
  const [filte, r, s, setFilte, r, s] = useState<ComparisonFilter>({
    categor,  y: 'all',
    complexit, y: 'all',
    priceRang, e: 'all',
    technolog, y: 'all'
  });
  const [searchTe, r, m, setSearchTe, r, m] = useState('');
  const [viewMo,  d, e, setViewMo, d, e] = useState<'grid' | 'table' | 'detailed'>('grid');

  // Mock data - in real app this would come from props or API
  const mockService, s: ServiceTier[] = [
    {
      i, d: 'a, i-cr, m-basi, c',
    na, m, e: 'A, I CR, M Basi, c',
      catego, r, y: 'a, i',
    pri, c, e: '$5,00, 0/mont, h',
      durati, o, n: '3-6 month, s',
    featur, e, s: ['Basi, c A, I insight, s', 'Custome, r segmentatio, n', 'Emai, l automatio, n'],
      benefit, s: ['Improve, d custome, r retentio, n', 'Automate, d workflow, s', 'Basi, c analytic, s'],
      technolog, y: ['A, I/M, L', 'CR, M', 'Automatio, n'],
      targetAudienc, e: ['Smal, l Busines, s', 'Startup, s'],
      ratin, g: 4.2,
    complexit, y: 'Basic',
      popularit, y: 'Medium',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com',
    lin, k: 'http, s://ziontechgroup.com/services/ai-crm-basic'
    },
    {
      i, d: 'ai-crm-enterprise',
    nam, e: 'AI CRM Enterprise',
      categor, y: 'ai',
    pric, e: '$2, 5,000/month',
      duratio, n: '12-18 months',
    feature, s: ['Advance, d A, I insight, s', 'Predictiv, e analytic, s', 'Mult, i-channe, l integratio, n', 'Custo, m A, I model, s'],
      benefit, s: ['Predictiv, e custome, r behavio, r', 'Advance, d automatio, n', 'Enterpris, e scalabilit, y'],
      technolog, y: ['A, I/M, L', 'Bi, g Dat, a', 'Predictiv, e Analytic, s', 'Enterpris, e Integratio, n'],
      targetAudienc, e: ['Enterpris, e', 'Larg, e Corporation, s'],
      ratin, g: 4.8,
    complexit, y: 'Enterprise',
      popularit, y: 'High',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com',
    lin, k: 'http, s://ziontechgroup.com/services/ai-crm-enterprise'
    },
    {
      i, d: 'quantum-basic',
    nam, e: 'Quantum Computing Basic',
      categor, y: 'quantum',
    pric, e: '$5, 0,000/month',
      duratio, n: '6-12 months',
    feature, s: ['Basi, c quantu, m algorithm, s', 'Clou, d acces, s', 'Documentatio, n'],
      benefit, s: ['Quantu, m computin, g acces, s', 'Algorith, m developmen, t', 'Researc, h capabilitie, s'],
      technolog, y: ['Quantu, m Computin, g', 'Clou, d Platfor, m', 'Basi, c Algorithm, s'],
      targetAudienc, e: ['Researc, h Institution, s', 'Universitie, s'],
      ratin, g: 4.5,
    complexit, y: 'Intermediate',
      popularit, y: 'Medium',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com',
    lin, k: 'http, s://ziontechgroup.com/services/quantum-basic'
    },
    {
      i, d: 'quantum-enterprise',
    nam, e: 'Quantum Computing Enterprise',
      categor, y: 'quantum',
    pric, e: '$20, 0,000/month',
      duratio, n: '18-24 months',
    feature, s: ['Custo, m quantu, m algorithm, s', 'Dedicate, d processor, s', '2, 4/7 suppor, t', 'Custo, m developmen, t'],
      benefit, s: ['Competitiv, e advantag, e', 'Custo, m solution, s', 'Priorit, y acces, s', 'Exper, t suppor, t'],
      technolog, y: ['Quantu, m Computin, g', 'Custo, m Algorithm, s', 'Dedicate, d Hardwar, e', 'Advance, d Suppor, t'],
      targetAudienc, e: ['Larg, e Corporation, s', 'Governmen, t', 'Financia, l Service, s'],
      ratin, g: 4.9,
    complexit, y: 'Enterprise',
      popularit, y: 'Trending',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com',
    lin, k: 'http, s://ziontechgroup.com/services/quantum-enterprise'
    }
  ];

  const filteredServices = useMemo(() => {
    return mockServices.filter(service => {
      const matchesCategory = filters.category === 'all' || service.category === filters.category;
      const matchesComplexity = filters.complexity === 'all' || service.complexity === filters.complexity;
      const matchesTechnology = filters.technology === 'all' || service.technology.includes(filters.technology);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesComplexity && matchesTechnology && matchesSearch;
    });
  },  [filte, r, s, searchTe, r, m]);

  const toggleServiceSelection = (serviceI,  d: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...pr,  e, v, service, I, d]
    );
  };

  const getComplexityColor = (complexit,  y: string) => {
    switch (complexity) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Enterprise': return 'bg-purple-100 text-purple-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPopularityIcon = (popularit, y: string) => {
    switch (popularity) {
      case 'Trending': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'High': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'Medium': return <Zap className="w-4 h-4 text-blue-500" />;
      case 'Low': return <Target className="w-4 h-4 text-gray-500" />;
      defaul,  t: return <Users className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div 
        initial={{ opacit, y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-zion-blue-dark mb-4">
          Advanced Service Comparison
        </h1>
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          Compare our cutting-edge services across differen, t, tier, s, complexit, y, level, s, and pricing to find the perfect solution for your business needs.
        </p>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div 
        initial={{ opacit, y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Category</label>
            <select 
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...pre,  v, categor, y: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Categories</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="quantum">Quantum Computing</option>
              <option value="blockchain">Blockchain & Web3</option>
              <option value="cybersecurity">Cybersecurity</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Complexity</label>
            <select 
              value={filters.complexity}
              onChange={(e) => setFilters(prev => ({ ...pre,  v, complexit, y: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Levels</option>
              {COMPLEXITY_LEVELS.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Price Range</label>
            <select 
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...pre,  v, priceRang, e: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Prices</option>
              {PRICE_RANGES.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Technology</label>
            <select 
              value={filters.technology}
              onChange={(e) => setFilters(prev => ({ ...pre,  v, technolog, y: e.target.value }))}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Technologies</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Quantum Computing">Quantum Computing</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">View Mode</label>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <BarChart3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'table' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('table')}
              >
                <Target className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'detailed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('detailed')}
              >
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      </motion.div>

      {/* Service Grid */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.2 }}
        className="grid grid-cols-1 l, g:grid-cols-2 x, l:grid-cols-3 gap-6"
      >
        {filteredServices.map((servic, e, index) => (<motion.div
            key={service.id}
            initial={{ opacit,  y: 0,
    y: 20 }}
            animate={{ opacit, y: 1,
    y: 0 }}
            transition={{ dela, y: 0.1 * index }}
          >
            <Card className={`h-full transition-all duration-300 hove, r:shadow-xl ${
              selectedServices.includes(service.id) ? 'ring-2 ring-zion-cya, n' : ''
            }`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg text-zion-blue-dark">
                    {service.name}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleServiceSelection(service.id)}
                    className={selectedServices.includes(service.id) ? 'text-zion-cyan' : 'text-zion-slate-light'}
                  >
                    {selectedServices.includes(service.id) ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getComplexityColor(service.complexity)}>
                    {service.complexity}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {getPopularityIcon(service.popularity)}
                    <span className="text-sm text-zion-slate-light">{service.popularity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {service.price}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {service.rating}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0,  3).map((featur,  e, idx) => (<li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zion-slate-dark mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-zion-purple" />
                      Target Audience
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0,  2).map((audienc,  e, idx) => (<Badge key={idx} variant="outline" className="text-xs">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hove,  r:from-zion-cyan-dark hove, r:to-zion-purple-dark"
                      onClick={() => window.open(service.lin,  k, '_blank')}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Comparison Summary */}
      {selectedServices.length > 0 && (<motion.div 
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ dela, y: 0.3 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">
            Comparison Summary ({selectedServices.length} services selected)
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-zion-blue-light/10 rounded-lg">
              <div className="text-2xl font-bold text-zion-cyan">
                {selectedServices.length}
              </div>
              <div className="text-zion-slate-light">Services Selected</div>
            </div>
            <div className="text-center p-4 bg-zion-purple/10 rounded-lg">
              <div className="text-2xl font-bold text-zion-purple">
                {Math.max(...filteredServices.filter(s => selectedServices.includes(s.id)).map(s => s.rating))}
              </div>
              <div className="text-zion-slate-light">Highest Rating</div>
            </div>
            <div className="text-center p-4 bg-zion-green/10 rounded-lg">
              <div className="text-2xl font-bold text-zion-green">
                {filteredServices.filter(s => selectedServices.includes(s.id)).filter(s => s.complexity === 'Enterprise').length}
              </div>
              <div className="text-zion-slate-light">Enterprise Solutions</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hove,  r:from-zion-cyan-dark hove, r:to-zion-purple-dark"
              onClick={() => window.open('mailt,  o:kleber@ziontechgroup.com?subject=Service Comparison Inquiry', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Detailed Comparison
            </Button>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div 
        initial={{ opacit, y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our cutting-edge services are designed to give you a competitive advantage in the digital age. 
            Contact us today to discuss your specific needs and find the perfect solution.
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hove, r:bg-zion-slate-light"
              onClick={() => window.open('mailt,  o:kleber@ziontechgroup.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hove, r:bg-white hove, r:text-zion-purple"
              onClick={() => window.open('te,  l:+13024640950', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedServiceComparison;