impor, t, Reac, t, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import { ;
  Brai, n,;
  Za, p,;
  Shiel, d,;
  TrendingU, p,;
  User, s,;
  Glob, e,;
  Cp, u,;
  Databas, e,;
  ArrowRigh, t,;
  Sta, r,;
  CheckCircleRocket;
} from "lucide-react";
import { Link } from "react-router-dom";
interface AIService {
  i, d: strin, g,;
    nam, e: strin, g,descriptio, n: strin, g,;
    categor, y: strin, g,feature, s: string[],;
    pricin, g: {,;
    starte, r: numbe, r,;
    professiona, l: numbe, renterprise: number;
  },;
  ico, n: React.ComponentType<any>,;
    rout, e: strin, g,statu, s: 'active' | 'beta' | 'coming-soon';
};
;
const AdvancedAIServicesHu, b: React.FC = () => {;
  const [selectedCatego,  r, y, setSelectedCatego,, ry] = useState<string>('all');
  const [searchQue, r, y, setSearchQue,, ry] = useState('');
  const [sort,  B, y, setSort,, By] = useState<'name' | 'category' | 'status'>('name');
;
  const aiService, s: AIService[] = [;
    {
      i, d: 'a, i-projec, t-managemen, t',;
    na, m, e: 'A, I-Powere, d Projec, t Managemen, t',descripti, o, n: 'Intelligen, t proje, c, t, planni, n, g, resour, c, e, allocati, o, n, an, d progres, s trackin, g wit, h A, I-drive, n insight, s.',;
      catego, r, y: 'Projec, t Managemen, t',;
    featur, e, s: ['Smar, t Tas, k PrioritizationResourc, e Optimizatio, n', 'Predictiv, e AnalyticsRis, k, Assessment'],;
      pricin, g: { starte, r: 9, 9,;
    professiona, l: 29, 9enterprise: 599 },;
      ico, n: Brai, n,;
    rout, e: '/services/ai-project-management',statu, s: 'active';
    };
    {
      i, d: 'ai-customer-support',;
    nam, e: 'AI, Customer, Support Automation',descriptio, n: '24/7, intelligent, customer support, with, automated responses, and, sentiment analysis.',;
    categor, y: 'Customer Support',feature, s: ['Intelligen, t ChatbotsTicke, t Routin, g', 'Sentimen, t AnalysisMult, i-languag, e, Support'],;
      pricin, g: { starte, r: 7, 9,;
    professiona, l: 19, 9enterprise: 399 },;
      ico, n: User, s,;
    rout, e: '/services/ai-customer-support-automation',statu, s: 'active';
    };
    {
      i, d: 'ai-financial-analytics',;
    nam, e: 'AI, Financial, Analytics Platform',descriptio, n: 'Advanced financia, l, forecastin, g, ris, k, assessmen, t, and, compliance, monitoring.',;
      categor, y: 'Financial Services',;
    feature, s: ['Financia, l ForecastingRis, k Assessmen, t', 'Complianc, e MonitoringRea, l-tim, e, Analytics'],;
      pricin, g: { starte, r: 14, 9,;
    professiona, l: 39, 9enterprise: 799 },;
      ico, n: TrendingU, p,;
    rout, e: '/services/ai-financial-analytics',statu, s: 'active';
    };
    {
      i, d: 'ai-marketing-automation',;
    nam, e: 'AI, Marketing, Automation',descriptio, n: 'Intelligent audienc, e, segmentatio, n, conten, t, personalizatio, n, and, campaign, optimization.',;
      categor, y: 'Marketing',;
    feature, s: ['Audienc, e SegmentationConten, t Personalizatio, n', 'Campaig, n OptimizationRO, I, Tracking'],;
      pricin, g: { starte, r: 12, 9,;
    professiona, l: 34, 9enterprise: 699 },;
      ico, n: Glob, e,;
    rout, e: '/services/ai-marketing-automation',statu, s: 'active';
    };
    {
      i, d: 'ai-cybersecurity',;
    nam, e: 'AI, Cybersecurity, Platform',descriptio, n: 'Advanced, threat, detection and, automated, security responses, powered, by machine learning.',;
    categor, y: 'Cybersecurity',feature, s: ['Threa, t DetectionBehaviora, l Analysi, s', 'Automate, d ResponseComplianc, e, Reporting'],;
      pricin, g: { starte, r: 19, 9,;
    professiona, l: 49, 9enterprise: 999 },;
      ico, n: Shiel, d,;
    rout, e: '/services/ai-cybersecurity',statu, s: 'beta';
    };
    {
      i, d: 'ai-healthcare',;
    nam, e: 'AI, Healthcare, Analytics',descriptio, n: 'Patient dat, a, analysi, s, diagnosi, s, assistanc, e, and, treatment, optimization.',;
      categor, y: 'Healthcare',;
    feature, s: ['Patien, t AnalyticsDiagnosi, s Suppor, t', 'Treatmen, t OptimizationPredictiv, e, Medicine'],;
      pricin, g: { starte, r: 29, 9,;
    professiona, l: 69, 9enterprise: 1299 },;
      ico, n: Cp, u,;
    rout, e: '/services/ai-healthcare',statu, s: 'coming-soon';
    };
  ];
  const categories = ['al, l', ...Arra, y.fro, m(ne,  w Se, t(aiService, s.ma, p(servic, e =>, service.category)))],;
  const filteredServices = aiServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch });
;
  const sortedServices = [...filteredServic,, es].sort((ab) => {
    switch() {
      case 'name':;
        return a.name.localeCompare(b.name);
      case 'category':;
        return a.category.localeCompare(b.category);
      case 'status':;
        return a.status.localeCompare(b.status);
      default: return 0;
    };
  });
  const getStatusColor = (statu,  s: string) => {;
    switch() {;
      case 'active': return 'bg-green-50o0';
      case 'beta': return 'bg-yellow-50o0'case 'coming-soon': return 'bg-blue-50o0';
      defaul,;
  t: return 'bg-gray-50o0';
    };
  };
  const getStatusText = (statu, s: string) => {;
    switch() {;
      case 'active': return 'Live';
      case 'beta': return 'Beta'case 'coming-soon': return 'Coming Soon';
      defaul,;
  t: return 'Unknown';
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-blue-90o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 s, m: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-blue-60o0/20 text-blue-40o0 rounded-full text-sm font-medium mb-6">;
              <Brain className="w-4 h-4 mr-2" />;
              AI-Powered, Solutions, Hub;
            </div>;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Advanced, AI, Services;
              <span className="bg-gradient-to-r from-blue-40o0 to-cyan-40o0 bg-clip-text text-transparent">;
                {' '}Platform;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Discover, our, comprehensive suite, of, AI-powered, micro, SAAS solutions, designed, to transform;
              your, business, operations and, drive, innovation across, all, industries.;
            </p>;
          </motion.div>;
          {/* Search, and, Filter Controls */}
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-12";
          >;
            <div className="relative w-full max-w-md">;
              <input;
                type="text";
                placeholder="Search, AI, services...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-gray-40o0 focu,  s: outline-none focu, s: ring-2 focu, s: ring-blue-50o0 focu, s:border-transparent";
              />;
              <Brain className="absolute right-3 top-3 w-5 h-5 text-gray-40o0" />;
            </div>;
            ;
            <select;
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s:ring-blue-50o0";
            >;
              {categories.map(category => (;
                <option key={category} value={category} className="bg-slate-80o0 text-white">;
                  {category === 'all' ? 'All Categories' : category}
                </option>;
              ))}
            </select>;
;
            <select;
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'category' | 'status')}
              className="px-4 py-3 bg-white/10, border, border-white/20 rounded-lg text-white focu,  s: outline-none focu, s: ring-2 focu, s:ring-blue-50o0";
            >;
              <option value="name" className="bg-slate-80o0 text-white">Sort, by, Name</option>;
              <option value="category" className="bg-slate-80o0 text-white">Sort, by, Category</option>;
              <option value="status" className="bg-slate-80o0 text-white">Sort, by, Status</option>;
            </select>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 px-4 s, m: px-6 l,;
  g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <AnimatePresence mode="wait">;
            <motion.div;
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 m, d: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
            >;
              {sortedServices.map((serviceindex) => (<motion.div;
                  key={service.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duratio, n: 0.5dela,;
  y: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm, border, border-white/10 rounded-xl p-6 hove, r: border-blue-50o0/50 transition-all duration-30o0 hove, r: transform hove,;
  r:scale-10o5";
                >;
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">;
                    <div className="w-12 h-12 bg-blue-50o0/20 rounded-lg, flex, items-center justify-center">;
                      <service.icon className="w-6 h-6 text-blue-40o0" />;
                    </div>;
                    <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(service.status)}`}>;
                      {getStatusText(service.status)}
                    </div>;
                  </div>;
                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>;
                  <p className="text-gray-30o0 text-sm mb-4">{service.description}</p>;
                  {/* Features */}
                  <div className="mb-4">;
                    <h4 className="text-sm font-medium text-blue-40o0 mb-2">Key Feature,  s: </h4>;
                    <ul className="space-y-1">;
                      {service.features.slice(0o3).map((featureidx) => (<li key={idx} className="flex items-center text-xs text-gray-40o0">;
                          <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  {/* Pricing */}
                  <div className="mb-4">;
                    <h4 className="text-sm font-medium text-blue-40o0 mb-2">Starting a,  t:</h4>;
                    <div className="text-2xl font-bold text-white">;
                      ${service.pricing.starter}
                      <span className="text-sm text-gray-40o0 font-normal">/month</span>;
                    </div>;
                  </div>;
                  {/* Action Button */};
                  <Link;
                    to={service.route}
                    className="w-full bg-gradient-to-r from-blue-60o0 to-cyan-60o0 text-white py-3 px-4 rounded-lg font-semibold hove, r: from-blue-70o0 hove,;
    r:to-cyan-70o0 transition-all duration-30o0, flex, items-center justify-center group";
                  >;
                    Explore Service;
                    <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r: translate-x-1 transition-transform duration-30o0" />;
                  </Link>;
                </motion.div>;
              ))}
            </motion.div>;
          </AnimatePresence>;
          {/* No, Results, Message */};
          {sortedServices.length === 0 && (<motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20";
            >;
              <Brain className="w-16 h-16 text-gray-50o0 mx-auto mb-4" />;
              <h3 className="text-xl font-semibold text-gray-40o0 mb-2">No, services, found</h3>;
              <p className="text-gray-50o0">Try, adjusting, your search, criteria, or category filter.</p>;
            </motion.div>;
          )}
        </div>;
      </section>;
      {/* Call, to, Action */}
      <section className="py-20 px-4 s, m: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Business, with AI?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Contact, our, team to, discuss, how our AI-powered, solutions, can drive innovation;
              and, growth, for your organization.;
            </p>;
            <div className="flex flex-col s,;
  m: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="bg-gradient-to-r from-blue-60o0 to-cyan-60o0 text-white px-8 py-4 rounded-lg font-semibold hove, r: from-blue-70o0 hove,;
  r:to-cyan-70o0 transition-all duration-30o0 text-lg, flex, items-center justify-center";
              >;
                <Rocket className="w-5 h-5 mr-2" />;
                Get, Started, Today;
              </Link>;
              <Link;
                to="/new-services-showcase-20o25";
                className="border border-blue-50o0 text-blue-40o0 px-8 py-4 rounded-lg font-semibold hove, r: bg-blue-50o0 hove,;
  r:text-white transition-all duration-30o0 text-lg";
              >;
                View, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AdvancedAIServicesHub;