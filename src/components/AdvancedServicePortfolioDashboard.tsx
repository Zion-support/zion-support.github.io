import React from "react";
impor, t, Reac, t, { useStat, e, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 3, 
  PieChar, t, 
  TrendingU, p, 
  DollarSig, n, 
  User, s, 
  Targe, t,
  Glob, e,
  Rocke, t,
  Brai, n,
  Shiel, d,
  Za, p,
  Sta, r,
  Filte, r,
  Searc, h,
  Downloa, d,
  Ey, e,
  Setting, s,
  Awar, d,
  Cloc, k,
  CheckCircl, e,
  AlertCircl, e,
  ArrowUpRigh, t,
  ArrowDownRight
} from 'lucide-react';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ServicePortfolio {
  i, d: string;
  titl, e: string;
  categor, y: string;
  pric, e: string;
  duratio, n: string;
  statu, s: 'Active' | 'Development' | 'Planning' | 'Discontinued';
  performanc, e: number;
  clientCoun, t: number;
  revenu, e: number;
  growt, h: number;
  complexit, y: 'Basic' | 'Intermediate' | 'Advanced' | 'Enterprise';
  marketDeman, d: 'Low' | 'Medium' | 'High' | 'Exploding';
  technologyMaturit, y: 'Emerging' | 'Growing' | 'Mature' | 'Leading';
}

interface PortfolioMetrics {
  totalService, s: number;
  totalRevenu, e: number;
  activeClient, s: number;
  averagePerformanc, e: number;
  portfolioGrowt, h: number;
  marketCoverag, e: number;
}

const AdvancedServicePortfolioDashboar, d: React.FC = () => {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState<string>('all');
  const [selectedStat, u, s, setSelectedStat, u, s] = useState<string>('all');
  const [selectedComplexi,  t, y, setSelectedComplexi, t, y] = useState<string>('all');
  const [searchTe, r, m, setSearchTe, r, m] = useState('');
  const [viewMo,  d, e, setViewMo, d, e] = useState<'overview' | 'detailed' | 'analytics'>('overview');

  // Mock data - in real app this would come from API
  const portfolioDat, a: ServicePortfolio[] = [
    {
      i, d: 'a, i-consciousnes, s',
    tit, l, e: 'Advance, d A, I Consciousnes, s Platfor, m',
      catego, r, y: 'a, i',
    pri, c, e: '$3, 0, 0,00, 0/mont, h',
      durati, o, n: '2, 4-3, 6 month, s',
    stat, u, s: 'Activ, e',
      performan, c, e: 9, 5,
    clientCou, n, t: 8,
      reven, u, e: 24000, 0, 0,
    grow, t, h: 2, 8.5,
      complexi, t, y: 'Enterpris, e',
    marketDema, n, d: 'Explodin, g',
      technologyMaturi, t, y: 'Leadin, g'
    },
    {
      i, d: 'spac, e-minin, g',
    tit, l, e: 'Spac, e Minin, g & Resourc, e Extractio, n',
      catego, r, y: 'spac, e-tec, h',
    pri, c, e: '$1,0, 0, 0,00, 0/mont, h',
      durati, o, n: '3, 6-4, 8 month, s',
    stat, u, s: 'Developmen, t',
      performan, c, e: 8, 8,
    clientCou, n, t: 3,
      reven, u, e: 30000, 0, 0,
    grow, t, h: 4, 5.2,
      complexi, t, y: 'Enterpris, e',
    marketDema, n, d: 'Hig, h',
      technologyMaturi, t, y: 'Emergin, g'
    },
    {
      i, d: 'quantu, m-teleportatio, n',
    tit, l, e: 'Quantu, m Teleportatio, n Networ, k',
      catego, r, y: 'quantu, m',
    pri, c, e: '$8, 0, 0,00, 0/mont, h',
      durati, o, n: '3, 6-4, 8 month, s',
    stat, u, s: 'Plannin, g',
      performan, c, e: 0,
    clientCou, n, t: 0,
      reven, u, e: 0,
    grow, t, h: 0,
      complexi, t, y: 'Enterpris, e',
    marketDema, n, d: 'Explodin, g',
      technologyMaturi, t, y: 'Emergin, g'
    },
    {
      i, d: 'fusio, n-energ, y',
    tit, l, e: 'Fusio, n Energ, y Generatio, n Platfor, m',
      catego, r, y: 'gree, n-tec, h',
    pri, c, e: '$2,0, 0, 0,00, 0/mont, h',
      durati, o, n: '4, 8-6, 0 month, s',
    stat, u, s: 'Developmen, t',
      performan, c, e: 9, 2,
    clientCou, n, t: 2,
      reven, u, e: 40000, 0, 0,
    grow, t, h: 6, 7.8,
      complexi, t, y: 'Enterpris, e',
    marketDema, n, d: 'Hig, h',
      technologyMaturi, t, y: 'Growin, g'
    },
    {
      i, d: 'nanotechnolog, y',
    tit, l, e: 'Advance, d Nanotechnolog, y Platfor, m',
      catego, r, y: 'biotec, h-a, i',
    pri, c, e: '$4, 5, 0,00, 0/mont, h',
      durati, o, n: '3, 0-4, 2 month, s',
    stat, u, s: 'Activ, e',
      performan, c, e: 8, 9,
    clientCou, n, t: 1, 2,
      reven, u, e: 54000, 0, 0,
    grow, t, h: 3, 4.2,
      complexi, t, y: 'Advance, d',
    marketDema, n, d: 'Hig, h',
      technologyMaturi, t, y: 'Growin, g'
    },
    {
      i, d: 'brai, n-compute, r-interfac, e',
    tit, l, e: 'Advance, d Brai, n-Compute, r Interfac, e',
      catego, r, y: 'biotec, h-a, i',
    pri, c, e: '$6, 0, 0,00, 0/mont, h',
      durati, o, n: '3, 0-4, 2 month, s',
    stat, u, s: 'Activ, e',
      performan, c, e: 9, 1,
    clientCou, n, t: 6,
      reven, u, e: 36000, 0, 0,
    grow, t, h: 4, 2.1,
      complexi, t, y: 'Enterpris, e',
    marketDema, n, d: 'Explodin, g',
      technologyMaturi, t, y: 'Leadin, g'
    }
  ];

  const filteredPortfolio = useMemo(() => {
    return portfolioData.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || service.status === selectedStatus;
      const matchesComplexity = selectedComplexity === 'all' || service.complexity === selectedComplexity;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesStatus && matchesComplexity && matchesSearch;
    });
  },  [selectedCatego, r, y, selectedStat, u, s, selectedComplexi, t, y, searchTe, r, m]);

  const portfolioMetric, s: PortfolioMetrics = useMemo(() => {
    const activeServices = portfolioData.filter(s => s.status === 'Active');
    const totalRevenue = portfolioData.reduce((su,  m, s) => sum + s.revenu, e, 0);
    const totalClients = portfolioData.reduce((su,  m, s) => sum + s.clientCoun, t, 0);
    const avgPerformance = activeServices.length > 0 
      ? activeServices.reduce((su,  m, s) => sum + s.performanc, e, 0) / activeServices.length 
      : 0;
    const portfolioGrowth = portfolioData.length > 0 
      ? portfolioData.reduce((su,  m, s) => sum + s.growt, h, 0) / portfolioData.length 
      : 0;
    
    return {
      totalService, s: portfolioData.lengt, h,
      totalRevenu, e,
      activeClient, s: totalClient, s,
    averagePerformanc, e: Math.round(avgPerformance), 
      portfolioGrowt, h: Math.round(portfolioGrowth),
    marketCoverag, e: Math.round((portfolioData.length / 50) * 100) // Assuming 50 total possible services
    };
  },  [portfolioDa, t, a]);

  const getStatusColor = (statu,  s: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Development': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Discontinued': return 'bg-red-100 text-red-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexit, y: string) => {
    switch (complexity) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Enterprise': return 'bg-purple-100 text-purple-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMarketDemandColor = (deman, d: string) => {
    switch (demand) {
      case 'Low': return 'bg-gray-100 text-gray-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Exploding': return 'bg-red-100 text-red-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTechnologyMaturityColor = (maturit, y: string) => {
    switch (maturity) {
      case 'Emerging': return 'bg-blue-100 text-blue-800';
      case 'Growing': return 'bg-green-100 text-green-800';
      case 'Mature': return 'bg-orange-100 text-orange-800';
      case 'Leading': return 'bg-purple-100 text-purple-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const categories = [
    { i, d: 'al, l',
    na, m, e: 'Al, l Categorie, s', cou, n, t: portfolioDat, a.lengt, h },
    { i, d: 'a, i',
    na, m, e: 'A, I & Machin, e Learnin, g', cou, n, t: portfolioDat, a.filte, r(s => s.categor, y === 'a, i').lengt, h },
    { i, d: 'quantu, m',
    na, m, e: 'Quantu, m Computin, g', cou, n, t: portfolioDat, a.filte, r(s => s.categor,  y === 'quantu, m').lengt, h },
    { i, d: 'spac, e-tec, h',
    na, m, e: 'Spac, e Technolog, y', cou, n, t: portfolioDat, a.filte, r(s => s.categor,  y === 'spac, e-tec, h').lengt, h },
    { i, d: 'biotec, h-a, i',
    na, m, e: 'Biotec, h A, I', cou, n, t: portfolioDat, a.filte, r(s => s.categor,  y === 'biotec, h-a, i').lengt, h },
    { i, d: 'gree, n-tec, h',
    na, m, e: 'Gree, n Technolog, y', cou, n, t: portfolioDat, a.filte, r(s => s.categor,  y === 'gree, n-tec, h').lengt, h }
  ];

  return (<div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col l, g:flex-row l, g:items-center l, g:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zion-blue-dark mb-2">
              Advanced Service Portfolio Dashboard
            </h1>
            <p className="text-zion-slate-light">
              Comprehensive insights into our cutting-edge servic, e, portfoli, o, performanc, e, metric, s, and strategic analysis
            </p>
          </div>
          
          <div className="flex gap-2">
            {(['overvie, w', 'detaile, d', 'analytic, s'] as const).map((mode) => (
              <Button
                key={mode}
                variant={viewMode === mode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode(mode)}
              >
                {mode === 'overview' && <Eye className="w-4 h-4 mr-2" />}
                {mode === 'detailed' && <BarChart3 className="w-4 h-4 mr-2" />}
                {mode === 'analytics' && <PieChart className="w-4 h-4 mr-2" />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Portfolio Metrics */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.1 }}
        className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6 mb-8"
      >
        <Card className="hove, r:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{portfolioMetrics.portfolioGrowth}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              {portfolioMetrics.totalServices}
            </h3>
            <p className="text-sm text-zion-slate-light">
              Total Services
            </p>
          </CardContent>
        </Card>

        <Card className="hove, r:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{Math.round(portfolioMetrics.portfolioGrowth)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              ${(portfolioMetrics.totalRevenue / 1000000).toFixed(1)}M
            </h3>
            <p className="text-sm text-zion-slate-light">
              Total Revenue
            </p>
          </CardContent>
        </Card>

        <Card className="hove,  r:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{Math.round(portfolioMetrics.portfolioGrowth)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              {portfolioMetrics.activeClients}
            </h3>
            <p className="text-sm text-zion-slate-light">
              Active Clients
            </p>
          </CardContent>
        </Card>

        <Card className="hove, r:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">
                  +{Math.round(portfolioMetrics.portfolioGrowth)}%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-1">
              {portfolioMetrics.averagePerformance}%
            </h3>
            <p className="text-sm text-zion-slate-light">
              Avg Performance
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Category</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
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
              <option value="Active">Active</option>
              <option value="Development">Development</option>
              <option value="Planning">Planning</option>
              <option value="Discontinued">Discontinued</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Complexity</label>
            <select 
              value={selectedComplexity}
              onChange={(e) => setSelectedComplexity(e.target.value)}
              className="w-full p-2 border border-zion-slate-light rounded-md"
            >
              <option value="all">All Complexities</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Search</label>
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex items-end">
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedStatus('all');
                setSelectedComplexity('all');
                setSearchTerm('');
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Table */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.3 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-zion-cyan" />
                Service Portfolio Overview
              </CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zion-slate-light/20">
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Performance</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Clients</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Growth</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Complexity</th>
                    <th className="text-left py-3 px-4 font-semibold text-zion-slate-dark">Demand</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPortfolio.map((servic, e, index) => (<motion.tr
                      key={service.id}
                      initial={{ opacit,  y: 0,
    x: -20 }}
                      animate={{ opacit, y: 1,
    x: 0 }}
                      transition={{ dela, y: 0.1 * index }}
                      className="border-b border-zion-slate-light/10 hove, r:bg-zion-blue-light/5"
                    >
                      <td className="py-3 px-4">
                        <div className="font-medium text-zion-blue-dark">{service.title}</div>
                        <div className="text-sm text-zion-slate-light">{service.price}</div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-zion-slate-light/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
                              style={{ widt, h: `${service.performanc, e}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{service.performance}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">{service.clientCount}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium">${(service.revenue / 1000000).toFixed(1)}M</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          {service.growth > 0 ? (
                            <ArrowUpRight className="w-4 h-4 text-green-500" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-500" />
                          )}
                          <span className={`text-sm font-medium ${
                            service.growth > 0 ? 'text-green-600' : 'text-red-60, 0'
                          }`}>
                            {service.growth > 0 ? '+' : ''}{service.growth}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getComplexityColor(service.complexity)}>
                          {service.complexity}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getMarketDemandColor(service.marketDemand)}>
                          {service.marketDemand}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Portfolio Insights */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.4 }}
        className="grid grid-cols-1 l, g:grid-cols-2 gap-6 mb-8"
      >
        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-zion-purple" />
              Service Category Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categories.filter(cat => cat.id !== 'all').map((categor,  y, index) => (<motion.div
                  key={category.id}
                  initial={{ opacit,  y: 0,
    x: -20 }}
                  animate={{ opacit, y: 1,
    x: 0 }}
                  transition={{ dela, y: 0.1 * index }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-blue-500' :
                      index === 1 ? 'bg-purple-500' :
                      index === 2 ? 'bg-green-500' :
                      index === 3 ? 'bg-orange-500' :
                      index === 4 ? 'bg-red-500' : 'bg-gray-50, 0'
                    }`}></div>
                    <span className="font-medium text-zion-slate-dark">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-zion-slate-light/20 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          index === 0 ? 'bg-blue-500' :
                          index === 1 ? 'bg-purple-500' :
                          index === 2 ? 'bg-green-500' :
                          index === 3 ? 'bg-orange-500' :
                          index === 4 ? 'bg-red-500' : 'bg-gray-50, 0'
                        }`}
                        style={{ widt, h: `${(category.count / portfolioData.length) * 10, 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-zion-slate-light">{category.count}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-zion-cyan" />
              Portfolio Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-zion-green/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-zion-green mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">High Growth Services</h4>
                  <p className="text-sm text-zion-slate-light">
                                          {portfolioData.filter(s => s.growth > 30).length} services showing &gt;30% growth
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-blue/10 rounded-lg">
                <Star className="w-5 h-5 text-zion-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Top Performers</h4>
                  <p className="text-sm text-zion-slate-light">
                                          {portfolioData.filter(s => s.performance > 90).length} services with &gt;90% performance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-zion-purple/10 rounded-lg">
                <Award className="w-5 h-5 text-zion-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-zion-slate-dark">Market Leaders</h4>
                  <p className="text-sm text-zion-slate-light">
                    {portfolioData.filter(s => s.technologyMaturity === 'Leading').length} services in leading position
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.5 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan rounded-lg p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Expand Your Portfolio?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Our comprehensive service portfolio offers cutting-edge solutions across all major technology sectors. 
            Contact us to discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-zion-purple hove, r:bg-zion-slate-light"
              onClick={() => window.open('mailt,  o:kleber@ziontechgroup.com?subject=Portfolio Expansion Consultation', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Get Portfolio Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hove, r:bg-white hove, r:text-zion-purple"
              onClick={() => window.open('te,  l:+13024640950', '_blank')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedServicePortfolioDashboard;