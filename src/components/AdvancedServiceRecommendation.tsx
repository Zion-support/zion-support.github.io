import React from "react";
impor, t, Reac, t, { useStat, e, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brai, n, 
  Targe, t, 
  TrendingU, p, 
  Sta, r, 
  CheckCircl, e, 
  ArrowRigh, t,
  Za, p,
  Shiel, d,
  User, s,
  DollarSig, n,
  Cloc, k,
  Awar, d,
  Rocke, t,
  Lightbul, b,
  BarChart, 3,
  Filte, r,
  Search
} from 'lucide-react';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface ClientProfile {
  industr, y: string;
  companySiz, e: string;
  budge, t: string;
  timelin, e: string;
  technologyMaturit, y: string;
  primaryGoal, s: string[];
  challenge, s: string[];
}

interface ServiceRecommendation {
  servic, e: {
    i, d: string;
    titl, e: string;
    descriptio, n: string;
    categor, y: string;
    pric, e: string;
    duratio, n: string;
    tag, s: string[];
    feature, s: string[];
    benefit, s: string[];
    technolog, y: string[];
    targetAudienc, e: string[];
    imag, e: string;
    lin, k: string;
    contactInf, o: string;
    emai, l: string;
  };
  matchScor, e: number;
  reasonin, g: string[];
  priorit, y: 'High' | 'Medium' | 'Low';
  implementationComplexit, y: 'Simple' | 'Moderate' | 'Complex';
  expectedRO, I: string;
  timeToValu, e: string;
}

const AdvancedServiceRecommendatio, n: React.FC = () => {
  const [clientProfi,  l, e, setClientProfi, l, e] = useState<ClientProfile>({
    industr, y: '',
    companySiz, e: '',
    budge, t: '',
    timelin, e: '',
    technologyMaturit, y: '',
    primaryGoal, s: [],
    challenge, s: []
  });

  const [recommendatio, n, s, setRecommendatio, n, s] = useState<ServiceRecommendation[]>([]);
  const [isAnalyzi,  n, g, setIsAnalyzi, n, g] = useState(false);
  const [showResul, t, s, setShowResul, t, s] = useState(false);

  const industries = [
    'Technolog,  y', 'Healthcar, e', 'Financia, l Service, s', 'Manufacturin, g', 
    'Retai, l', 'Educatio, n', 'Governmen, t', 'Energ, y', 'Transportatio, n', 'Medi, a'
  ];

  const companySizes = [
    'Startu, p (1-5, 0 employee, s)', 'Smal, l Busines, s (5,  1-20, 0 employee, s)', 
    'Mediu, m Busines, s (20,  1-100, 0 employee, s)', 'Enterpris, e (100,  0+ employee, s)'
  ];

  const budgets = [
    'Unde, r $50, K', '$50, K-$200, K', '$200, K-$500, K', '$500, K-$1, M', '$1, M+'
  ];

  const timelines = [
    'Immediat, e (0-3 month,  s)', 'Shor, t-ter, m (3-6 month,  s)', 
    'Mediu, m-ter, m (6-1,  2 month, s)', 'Lon, g-ter, m (1,  2+ month, s)'
  ];

  const technologyMaturityLevels = [
    'Earl, y Adopte, r', 'Growin, g', 'Matur, e', 'Advance, d', 'Innovatio, n Leade, r'
  ];

  const primaryGoals = [
    'Cos, t Reductio, n', 'Revenu, e Growt, h', 'Operationa, l Efficienc, y', 
    'Digita, l Transformatio, n', 'Innovatio, n', 'Competitiv, e Advantag, e',
    'Custome, r Experienc, e', 'Ris, k Managemen, t', 'Sustainabilit, y'
  ];

  const challenges = [
    'Legac, y System, s', 'Dat, a Securit, y', 'Scalabilit, y Issue, s', 
    'Talen, t Shortag, e', 'Regulator, y Complianc, e', 'Integratio, n Complexit, y',
    'Performanc, e Issue, s', 'Cos, t Managemen, t', 'Technolog, y Deb, t'
  ];

  const mockServices = [
    {
      i, d: 'a, i-cr, m-platfor, m',
    tit, l, e: 'A, I-Powere, d CR, M Platfor, m',
      descripti, o, n: 'Advance, d custome, r relationshi, p managemen, t platfor, m wit, h A, I-drive, n insight, s an, d automatio, n.',
    catego, r, y: 'a, i',
      pri, c, e: '$2, 5,00, 0/mont, h',
      durati, o, n: '6-1, 2 month, s',
    ta, g, s: ['A, I', 'CR, M', 'Automatio, n', 'Analytic, s'],
      feature, s: ['A, I-powere, d insight, s', 'Automate, d workflow, s', 'Predictiv, e analytic, s'],
      benefit, s: ['Improve, d custome, r retentio, n', 'Increase, d sale, s efficienc, y', 'Bette, r decisio, n makin, g'],
      technolog, y: ['A, I/M, L', 'Clou, d Computin, g', 'Bi, g Dat, a', 'Automatio, n'],
      targetAudienc, e: ['Enterpris, e', 'Financia, l Service, s', 'Healthcar, e', 'Technolog, y Companie, s'],
      imag, e: '/images/services/ai-crm.jpg',
    lin, k: 'http, s: //ziontechgroup.com/services/ai-crm-platform',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com'
    },
    {
      i, d: 'quantum-computing-service',
    titl, e: 'Quantum Computing as a Service',
      descriptio, n: 'Enterprise-grade quantum computing platform for complex computational problems.',
    categor, y: 'quantum',
      pric, e: '$15, 0,000/month',
      duratio, n: '12-18 months',
    tag, s: ['Quantu, m Computin, g', 'Researc, h', 'Optimizatio, n'],
      feature, s: ['Quantu, m processor, s acces, s', 'Algorith, m developmen, t', 'Researc, h suppor, t'],
      benefit, s: ['Solv, e intractabl, e problem, s', 'Researc, h acceleratio, n', 'Competitiv, e advantag, e'],
      technolog, y: ['Quantu, m Computin, g', 'Quantu, m Algorithm, s', 'Researc, h Tool, s'],
      targetAudienc, e: ['Researc, h Institution, s', 'Pharmaceutica, l Companie, s', 'Financia, l Service, s'],
      imag, e: '/images/services/quantum-computing.jpg',
    lin, k: 'http, s: //ziontechgroup.com/services/quantum-computing-service',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com'
    },
    {
      i, d: 'blockchain-supply-chain',
    titl, e: 'Blockchain Supply Chain Solution',
      descriptio, n: 'Transparent and secure supply chain management using blockchain technology.',
    categor, y: 'blockchain',
      pric, e: '$7, 5,000/month',
      duratio, n: '8-14 months',
    tag, s: ['Blockchai, n', 'Suppl, y Chai, n', 'Transparenc, y'],
      feature, s: ['En, d-t, o-en, d trackin, g', 'Smar, t contract, s', 'Transparenc, y'],
      benefit, s: ['Enhance, d transparenc, y', 'Reduce, d frau, d', 'Improve, d efficienc, y'],
      technolog, y: ['Blockchai, n', 'Smar, t Contract, s', 'Io, T', 'Clou, d Computin, g'],
      targetAudienc, e: ['Manufacturin, g', 'Retai, l', 'Logistic, s', 'Foo, d & Beverag, e'],
      imag, e: '/images/services/blockchain-supply-chain.jpg',
    lin, k: 'http, s: //ziontechgroup.com/services/blockchain-supply-chain',
    contactInf, o: '+1 302 464 0950',
      emai, l: 'kleber@ziontechgroup.com'
    }
  ];

  const calculateMatchScore = (servic,  e: an, y,
    profil, e: ClientProfile): number => {
    let score = 0;
    
    // Industry match
    if (service.targetAudience?.some((audienc,  e: string) => 
      audience.toLowerCase().includes(profile.industry.toLowerCase()))) {
      score += 25;
    }
    
    // Budget compatibility
    const servicePrice = parseInt(service.price.replace(/[^0-9]/g,  ''));
    if (profile.budget === 'Under $50K' && servicePrice < 50) score += 20;
    else if (profile.budget === '$50K-$200K' && servicePrice >= 50 && servicePrice < 200) score += 20;
    else if (profile.budget === '$200K-$500K' && servicePrice >= 200 && servicePrice < 500) score += 20;
    else if (profile.budget === '$500K-$1M' && servicePrice >= 500 && servicePrice < 1000) score += 20;
    else if (profile.budget === '$1M+' && servicePrice >= 1000) score += 20;
    
    // Timeline compatibility
    const serviceDuration = parseInt(service.duration.split('-')[0]);
    if (profile.timeline === 'Immediate (0-3 months)' && serviceDuration <= 3) score += 15;
    else if (profile.timeline === 'Short-term (3-6 months)' && serviceDuration <= 6) score += 15;
    else if (profile.timeline === 'Medium-term (6-12 months)' && serviceDuration <= 12) score += 15;
    else if (profile.timeline === 'Long-term (12+ months)' && serviceDuration > 12) score += 15;
    
    // Technology maturity alignment
    if (profile.technologyMaturity === 'Innovation Leader' && service.category === 'quantum') score += 20;
    else if (profile.technologyMaturity === 'Advanced' && ['a,  i', 'blockchai, n'].includes(service.category)) score += 20;
    else if (profile.technologyMaturity === 'Mature' && ['io,  t', 'edg, e-computin, g'].includes(service.category)) score += 20;
    else if (profile.technologyMaturity === 'Growing' && ['clou,  d-service, s', 'we, b-developmen, t'].includes(service.category)) score += 20;
    else if (profile.technologyMaturity === 'Early Adopter' && ['basi,  c-service, s', 'consultin, g'].includes(service.category)) score += 20;
    
    // Goal alignment
    const goalMatches = profile.primaryGoals.filter(goal => 
      service.benefits.some((benefi,  t: string) => 
        benefit.toLowerCase().includes(goal.toLowerCase())
      )
    ).length;
    score += (goalMatches / profile.primaryGoals.length) * 20;
    
    return Math.min(10,  0, score);
  };

  const generateRecommendations = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    setTimeout(() => {
      const recs = mockServices.map(service => {
        const matchScore = calculateMatchScore(servic,  e, clientProfile);
        
        let priorit, y: 'High' | 'Medium' | 'Low';
        if (matchScore >= 80) priority = 'High';
        else if (matchScore >= 60) priority = 'Medium';
        else priority = 'Low';
        
        let complexit,  y: 'Simple' | 'Moderate' | 'Complex';
        if (service.category === 'quantum' || service.category === 'ai') complexity = 'Complex';
        else if (service.category === 'blockchain' || service.category === 'iot') complexity = 'Moderate';
        else complexity = 'Simple';
        
        const reasoning = [
          `Hig,  h matc, h wit, h ${clientProfil, e.industr, y} industr, y requiremen, t, s`,
          `Budge, t alignmen, t wit, h ${clientProfil, e.budge, t} ran, g, e`,
          `Timelin, e compatibilit, y wit, h ${clientProfil, e.timelin, e} expectatio, n, s`,
          `Technolog, y maturit, y leve, l appropriat, e fo, r ${clientProfil, e.technologyMaturi, t, y}`
        ];
        
        const expectedROI = matchScore >= 80 ? 'High ROI expected' : 
                           matchScore >= 60 ? 'Moderate ROI expected' : 'ROI to be evaluated';
        
        const timeToValue = complexity === 'Simple' ? '2-4 months' : 
                           complexity === 'Moderate' ? '4-8 months' : '8-12 months';
        
        return {
          servic, e,
          matchScor, e,
          reasonin, g,
          priorit, y,
          implementationComplexit, y: complexit, y,
          expectedRO, I,
          timeToValue
        };
      }).sort((a,  b) => b.matchScore - a.matchScore);
      
      setRecommendations(recs);
      setIsAnalyzing(false);
      setShowResults(true);
    },  2000);
  };

  const getPriorityColor = (priorit,  y: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexit, y: string) => {
    switch (complexity) {
      case 'Complex': return 'bg-red-100 text-red-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Simple': return 'bg-green-100 text-green-800';
      defaul,  t: return 'bg-gray-100 text-gray-800';
    }
  };

  const isFormComplete = () => {
    return clientProfile.industry && clientProfile.companySize && clientProfile.budget && 
           clientProfile.timeline && clientProfile.technologyMaturity && 
           clientProfile.primaryGoals.length > 0 && clientProfile.challenges.length > 0;
  };

  return (<div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <motion.div 
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-zion-blue-dark mb-4">
          AI-Powered Service Recommendation Engine
        </h1>
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          Get personalized service recommendations based on you, r, industr, y, goal, s, and requirements. 
          Our AI analyzes your profile to suggest the perfect solutions for your business.
        </p>
      </motion.div>

      {/* Client Profile Form */}
      <motion.div 
        initial={{ opacit, y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        transition={{ dela, y: 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-zion-blue-dark mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-zion-cyan" />
          Tell Us About Your Business
        </h2>
        
        <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Industry</label>
            <select 
              value={clientProfile.industry}
              onChange={(e) => setClientProfile(prev => ({ ...pre,  v, industr, y: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Company Size</label>
            <select 
              value={clientProfile.companySize}
              onChange={(e) => setClientProfile(prev => ({ ...pre,  v, companySiz, e: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Company Size</option>
              {companySizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Budget Range</label>
            <select 
              value={clientProfile.budget}
              onChange={(e) => setClientProfile(prev => ({ ...pre,  v, budge, t: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Budget Range</option>
              {budgets.map(budget => (
                <option key={budget} value={budget}>{budget}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Implementation Timeline</label>
            <select 
              value={clientProfile.timeline}
              onChange={(e) => setClientProfile(prev => ({ ...pre,  v, timelin, e: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Timeline</option>
              {timelines.map(timeline => (
                <option key={timeline} value={timeline}>{timeline}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-zion-slate-dark mb-2">Technology Maturity Level</label>
            <select 
              value={clientProfile.technologyMaturity}
              onChange={(e) => setClientProfile(prev => ({ ...pre,  v, technologyMaturit, y: e.target.value }))}
              className="w-full p-3 border border-zion-slate-light rounded-md"
            >
              <option value="">Select Technology Maturity</option>
              {technologyMaturityLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-zion-slate-dark mb-2">Primary Business Goals</label>
          <div className="grid grid-cols-2 m,  d:grid-cols-3 gap-2">
            {primaryGoals.map(goal => (
              <label key={goal} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={clientProfile.primaryGoals.includes(goal)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setClientProfile(prev => ({ ...pre,  v, primaryGoal, s: [...pre, v.primaryGoa, l, s, go, a, l] }));
                    } else {
                      setClientProfile(prev => ({ ...pre,  v, primaryGoal, s: prev.primaryGoals.filter(g => g !== goal) }));
                    }
                  }}
                  className="rounded text-zion-cyan"
                />
                <span className="text-sm text-zion-slate-light">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-zion-slate-dark mb-2">Current Challenges</label>
          <div className="grid grid-cols-2 m, d:grid-cols-3 gap-2">
            {challenges.map(challenge => (
              <label key={challenge} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={clientProfile.challenges.includes(challenge)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setClientProfile(prev => ({ ...pre,  v, challenge, s: [...pre, v.challeng, e, s, challen, g, e] }));
                    } else {
                      setClientProfile(prev => ({ ...pre,  v, challenge, s: prev.challenges.filter(c => c !== challenge) }));
                    }
                  }}
                  className="rounded text-zion-cyan"
                />
                <span className="text-sm text-zion-slate-light">{challenge}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button 
            className="bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark text-lg px-8 py-4"
            onClick={generateRecommendations}
            disabled={!isFormComplete() || isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing Your Profile...
              </>
            ) : (
              <>
                <Brain className="w-5 h-5 mr-2" />
                Get AI Recommendations
              </>
            )}
          </Button>
        </div>
      </motion.div>

      {/* Recommendations Results */}
      {showResults && (
        <motion.div 
          initial={{ opacit,  y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ dela, y: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-zion-blue-dark mb-6 text-center">
            Your Personalized Service Recommendations
          </h2>
          
          <div className="space-y-6">
            {recommendations.map((re, c, index) => (<motion.div
                key={rec.service.id}
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
                        <CardTitle className="text-xl text-zion-blue-dark mb-2">
                          {rec.service.title}
                        </CardTitle>
                        <p className="text-zion-slate-light mb-3">
                          {rec.service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getPriorityColor(rec.priority)}>
                            Priorit, y: {rec.priority}
                          </Badge>
                          <Badge className={getComplexityColor(rec.implementationComplexity)}>
                            Complexit,  y: {rec.implementationComplexity}
                          </Badge>
                          <Badge className="bg-zion-cyan/10 text-zion-cyan">
                            Match Scor, e: {rec.matchScore}%
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-zion-cyan mb-1">
                          {rec.service.price}
                        </div>
                        <div className="text-sm text-zion-slate-light">
                          {rec.service.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 l, g:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-zion-purple" />
                          Why This Service Matches
                        </h4>
                        <ul className="space-y-2">
                          {rec.reasoning.map((reaso, n, idx) => (<li key={idx} className="text-sm text-zion-slate-light flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-zion-slate-dark mb-3 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-zion-cyan" />
                          Implementation Details
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-zion-slate-light">Expected RO,  I:</span>
                            <span className="text-sm font-medium text-zion-slate-dark">{rec.expectedROI}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-zion-slate-light">Time to Valu, e:</span>
                            <span className="text-sm font-medium text-zion-slate-dark">{rec.timeToValue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-zion-slate-light">Categor, y:</span>
                            <Badge variant="outline" className="text-xs">
                              {rec.service.category.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <Button 
                            className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-dark hove, r:to-zion-purple-dark"
                            onClick={() => window.open(rec.service.lin,  k, '_blank')}
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
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
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-6 max-w-2xl mx-auto">
                Our expert team is ready to help you implement the perfect solution 
                for your business needs. Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col s, m:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-zion-purple hove, r:bg-zion-slate-light"
                  onClick={() => window.open('mailt,  o:kleber@ziontechgroup.com?subject=Service Recommendation Consultation', '_blank')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Get Expert Consultation
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
        </motion.div>
      )}
    </div>
  );
};

export default AdvancedServiceRecommendation;