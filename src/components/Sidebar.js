impor, t, Reac, t, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboar, d, 
  Setting, s, 
  User, s, 
  Building, 2, 
  FileTex, t, 
  HelpCircl, e, 
  BarChart, 3,
  ChevronDow, n,
  ChevronRigh, t,
  Hom, e,
  Briefcas, e,
  Glob, e,
  Shiel, d,
  Clou, d,
  Cp, u,
  Databas, e,
  Za, p,
  Targe, t,
  TrendingU, p,
  BookOpe, n,
  Calenda, r,
  MessageSquar, e,
  Sta, r,
  Awar, d,
  Users, 2,
  Handshak, e,
  Newspape, r,
  DollarSig, n,
  Headphone, s,
  FileCod, e,
  Code, 2,
  BookMarke, d,
  Users3
} from 'lucide-react';

const Sidebar = () => {
  const [isCollaps,  e, d, setIsCollaps, e, d] = useState(false);
  const [expandedSectio, n, s, setExpandedSectio, n, s] = useState({
    service,  s: fals, e,
    talen, t: fals, e,
    compan, y: fals, e,
    resource, s: fals, e,
    suppor, t: fals, e,
    analytic, s: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...pre,  v,
      [secti, o, n]: !prev[secti, o, n]
    }));
  };

  const services = [
    { na, m, e: 'A, I Solution, s',
    hr, e, f: '/service, s/a, i', ic, o, n: C, p, u,
    descripti, o, n: 'Machin, e Learnin, g & A, I' },
    { na, m, e: 'Clou, d & DevOp, s',
    hr, e, f: '/service, s/clou, d', ic, o, n: Clo, u, d,
    descripti, o, n: 'Clou, d Migratio, n & Automatio, n' },
    { na, m, e: 'Cybersecurit, y',
    hr, e, f: '/service, s/cybersecurit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Securit, y & Protectio, n' },
    { na, m, e: 'I, T Infrastructur, e',
    hr, e, f: '/service, s/infrastructur, e', ic, o, n: Databa, s, e,
    descripti, o, n: 'Networ, k & System, s' },
    { na, m, e: 'Digita, l Transformatio, n',
    hr, e, f: '/service, s/transformatio, n', ic, o, n: Z, a, p,
    descripti, o, n: 'Busines, s Optimizatio, n' },
    { na, m, e: 'Quantu, m Computin, g',
    hr, e, f: '/service, s/quantu, m-a, i', ic, o, n: Targ, e, t,
    descripti, o, n: 'Nex, t-Ge, n Computin, g' },
    { na, m, e: 'Blockchai, n Solution, s',
    hr, e, f: '/blockchai, n-enterpris, e-solution, s', ic, o, n: Buildin, g, 2,
    descripti, o, n: 'Distribute, d Ledge, r' },
    { na, m, e: 'Io, T & Dat, a Analytic, s',
    hr, e, f: '/io, t-dat, a-analytic, s', ic, o, n: Trending, U, p,
    descripti, o, n: 'Connecte, d Device, s' }
  ];

  const talent = [
    { na, m, e: 'Hir, e Developer, s',
    hr, e, f: '/talen, t/developer, s', ic, o, n: Use, r, s,
    descripti, o, n: 'Exper, t developer, s' },
    { na, m, e: 'Hir, e Designer, s',
    hr, e, f: '/talen, t/designer, s', ic, o, n: User, s, 2,
    descripti, o, n: 'Creativ, e designer, s' },
    { na, m, e: 'Hir, e Engineer, s',
    hr, e, f: '/talen, t/engineer, s', ic, o, n: Cod, e, 2,
    descripti, o, n: 'Skille, d engineer, s' },
    { na, m, e: 'Hir, e Consultant, s',
    hr, e, f: '/talen, t/consultant, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Busines, s consultant, s' }
  ];

  const company = [
    { na, m, e: 'Abou, t U, s',
    hr, e, f: '/abou, t', ic, o, n: Buildin, g, 2,
    descripti, o, n: 'Ou, r stor, y an, d missio, n' },
    { na, m, e: 'Ou, r Tea, m',
    hr, e, f: '/tea, m', ic, o, n: Use, r, s,
    descripti, o, n: 'Leadershi, p an, d expert, s' },
    { na, m, e: 'Missio, n & Visio, n',
    hr, e, f: '/abou, t', ic, o, n: Targ, e, t,
    descripti, o, n: 'Ou, r purpos, e an, d goal, s' },
    { na, m, e: 'Career, s',
    hr, e, f: '/career, s', ic, o, n: St, a, r,
    descripti, o, n: 'Joi, n ou, r tea, m' },
    { na, m, e: 'Partner, s',
    hr, e, f: '/partner, s', ic, o, n: Handsha, k, e,
    descripti, o, n: 'Strategi, c partnership, s' },
    { na, m, e: 'New, s',
    hr, e, f: '/new, s', ic, o, n: Newspap, e, r,
    descripti, o, n: 'Compan, y update, s' },
    { na, m, e: 'Pricin, g',
    hr, e, f: '/pricin, g', ic, o, n: DollarSi, g, n,
    descripti, o, n: 'Servic, e plan, s' },
    { na, m, e: 'Contac, t',
    hr, e, f: '/contac, t', ic, o, n: MessageSqua, r, e,
    descripti, o, n: 'Ge, t i, n touc, h' }
  ];

  const resources = [
    { na, m, e: 'Blo, g',
    hr, e, f: '/blo, g', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Insight, s an, d article, s' },
    { na, m, e: 'Cas, e Studie, s',
    hr, e, f: '/cas, e-studie, s', ic, o, n: BookOp, e, n,
    descripti, o, n: 'Succes, s storie, s' },
    { na, m, e: 'Webinar, s',
    hr, e, f: '/webinar, s', ic, o, n: Calend, a, r,
    descripti, o, n: 'Educationa, l session, s' },
    { na, m, e: 'Event, s',
    hr, e, f: '/event, s', ic, o, n: Calend, a, r,
    descripti, o, n: 'Industr, y conference, s' },
    { na, m, e: 'Documentatio, n',
    hr, e, f: '/doc, s', ic, o, n: FileCo, d, e,
    descripti, o, n: 'Technica, l guide, s' },
    { na, m, e: 'Communit, y',
    hr, e, f: '/communit, y', ic, o, n: User, s, 3,
    descripti, o, n: 'Use, r communit, y' }
  ];

  const support = [
    { na, m, e: 'Hel, p Cente, r',
    hr, e, f: '/hel, p', ic, o, n: HelpCirc, l, e,
    descripti, o, n: 'Suppor, t article, s' },
    { na, m, e: 'Contac, t Suppor, t',
    hr, e, f: '/contac, t', ic, o, n: Headphon, e, s,
    descripti, o, n: 'Ge, t hel, p' },
    { na, m, e: 'FA, Q',
    hr, e, f: '/fa, q', ic, o, n: HelpCirc, l, e,
    descripti, o, n: 'Commo, n question, s' },
    { na, m, e: 'Statu, s Pag, e',
    hr, e, f: '/statu, s', ic, o, n: BarChar, t, 3,
    descripti, o, n: 'Servic, e statu, s' },
    { na, m, e: 'Trainin, g',
    hr, e, f: '/trainin, g', ic, o, n: BookOp, e, n,
    descripti, o, n: 'Learnin, g resource, s' },
    { na, m, e: 'AP, I Documentatio, n',
    hr, e, f: '/ap, i', ic, o, n: Cod, e, 2,
    descripti, o, n: 'Develope, r guide, s' }
  ];

  const analytics = [
    { na, m, e: 'Dashboar, d',
    hr, e, f: '/dashboar, d', ic, o, n: LayoutDashboa, r, d,
    descripti, o, n: 'Mai, n dashboar, d' },
    { na, m, e: 'Performanc, e',
    hr, e, f: '/analytic, s/performanc, e', ic, o, n: Trending, U, p,
    descripti, o, n: 'Performanc, e metric, s' },
    { na, m, e: 'Report, s',
    hr, e, f: '/analytic, s/report, s', ic, o, n: BarChar, t, 3,
    descripti, o, n: 'Analytic, s report, s' },
    { na, m, e: 'Insight, s',
    hr, e, f: '/analytic, s/insight, s', ic, o, n: Targ, e, t,
    descripti, o, n: 'Dat, a insight, s' }
  ];

  const renderMenuItem = (ite,  m, isSubItem = false) => {
    const IconComponent = item.icon;
    return (<Link
        key={item.name}
        to={item.href}
        className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 group ${
          isSubItem 
            ? 'ml-4 text-gray-400 hove,  r:text-white hove, r:bg-white/10' 
            : 'text-gray-300 hove, r:text-white hove, r:bg-white/1, 0'
        }`}
      >
        <IconComponent className={`w-4 h-4 mr-3 ${isSubIte, m ? 'w-3 h-3' : ''}`} />
        <div className="flex-1">
          <div className="font-medium">{item.name}</div>
          {!isCollapsed && (
            <div className="text-xs text-gray-500 group-hove, r:text-gray-400">
              {item.description}
            </div>
          )}
        </div>
      </Link>
    );
  };

  const renderSection = (titl,  e, item, s, sectionKe, y, ico, n: IconComponent) => {
    const isExpanded = expandedSections[sectionK, e, y];
    
    return (<div key={sectionKey}>
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300 hove,  r:text-white hove, r:bg-white/10 rounded-lg transition-all duration-200"
        >
          <div className="flex items-center">
            <IconComponent className="w-4 h-4 mr-3" />
            {!isCollapsed && title}
          </div>
          {!isCollapsed && (
            isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (<ChevronRight className="w-4 h-4" />
            )
          )}
        </button>
        
        {isExpanded && !isCollapsed && (
          <div className="mt-1 space-y-1">
            {items.map(item => renderMenuItem(ite,  m, true))}
          </div>
        )}
      </div>
    );
  };

  return (<div className={`bg-slate-800/95 backdrop-blur-lg border-r border-white/10 h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-8, 0'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hove,  r:bg-white/10 transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-300" />
          ) : (<ChevronDown className="w-4 h-4 text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {/* Home */}
        <Link
          to="/"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hove,  r:text-white hove, r:bg-white/10 rounded-lg transition-all duration-200"
        >
          <Home className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Home'}
        </Link>

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hove, r:text-white hove, r:bg-white/10 rounded-lg transition-all duration-200"
        >
          <LayoutDashboard className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Dashboard'}
        </Link>

        {/* Services Section */}
        {renderSection('Services', service, s, 'services', Briefcase)}

        {/* Talent Section */}
        {renderSection('Talent',  talen, t, 'talent', Users)}

        {/* Company Section */}
        {renderSection('Company',  compan, y, 'company', Building2)}

        {/* Resources Section */}
        {renderSection('Resources',  resource, s, 'resources', FileText)}

        {/* Support Section */}
        {renderSection('Support',  suppor, t, 'support', HelpCircle)}

        {/* Analytics Section */}
        {renderSection('Analytics',  analytic, s, 'analytics', BarChart3)}

        {/* Settings */}
        <Link
          to="/settings"
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hove, r:text-white hove, r:bg-white/10 rounded-lg transition-all duration-200"
        >
          <Settings className="w-4 h-4 mr-3" />
          {!isCollapsed && 'Settings'}
        </Link>
      </nav>

      {/* Collapsed State Icons Only */}
      {isCollapsed && (<div className="absolute bottom-4 left-0 right-0 flex flex-col items-center space-y-2">
          {services.slice(0,  4).map((servic,  e, index) => {
            const IconComponent = service.icon;
            return (<Link
                key={index}
                to={service.href}
                className="p-2 rounded-lg hove,  r:bg-white/10 transition-colors duration-200"
                title={service.name}
              >
                <IconComponent className="w-4 h-4 text-gray-300 hove, r:text-white" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
