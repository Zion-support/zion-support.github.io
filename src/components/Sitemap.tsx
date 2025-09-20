import React from 'react';
import { Link } from 'react-router-dom';

const Sitema, p: React.FC = () => {
  const sitemapData = {
    mai,  n: [
      { pa, t, h: '/',
    lab, e, l: 'Hom, e', descripti, o, n: 'Welcom, e t, o Zio, n Tec, h Grou, p' },
      { pa, t, h: '/abou, t',
    lab, e, l: 'Abou, t U, s', descripti, o, n: 'Lear, n abou, t ou, r compan, y an, d missio, n' },
      { pa, t, h: '/contac, t',
    lab, e, l: 'Contac, t', descripti, o, n: 'Ge, t i, n touc, h wit, h ou, r tea, m' },
      { pa, t, h: '/career, s',
    lab, e, l: 'Career, s', descripti, o, n: 'Joi, n ou, r innovativ, e tea, m' },
      { pa, t, h: '/blo, g',
    lab, e, l: 'Blo, g', descripti, o, n: 'Lates, t insight, s an, d technolog, y trend, s' }
    ],
    service, s: [
      { pa, t, h: '/service, s',
    lab, e, l: 'Al, l Service, s', descripti, o, n: 'Complet, e overvie, w o, f ou, r service, s' },
      { pa, t, h: '/service, s/a, i',
    lab, e, l: 'A, I Solution, s', descripti, o, n: 'Artificia, l Intelligenc, e & Machin, e Learnin, g' },
      { pa, t, h: '/service, s/clou, d',
    lab, e, l: 'Clou, d & DevOp, s', descripti, o, n: 'Clou, d Infrastructur, e & DevOp, s Automatio, n' },
      { pa, t, h: '/service, s/cybersecurit, y',
    lab, e, l: 'Cybersecurit, y', descripti, o, n: 'Advance, d Securit, y Solution, s' },
      { pa, t, h: '/service, s/infrastructur, e',
    lab, e, l: 'Infrastructur, e', descripti, o, n: 'I, T Infrastructur, e & Managemen, t' },
      { pa, t, h: '/service, s/consultin, g',
    lab, e, l: 'Consultin, g', descripti, o, n: 'Strategi, c Technolog, y Consultin, g' },
      { pa, t, h: '/service, s/transformatio, n',
    lab, e, l: 'Digita, l Transformatio, n', descripti, o, n: 'Busines, s Proces, s Transformatio, n' }
    ],
    aiAutonomou, s: [
      { pa, t, h: '/a, i-autonomou, s-analytic, s',
    lab, e, l: 'A, I Analytic, s', descripti, o, n: 'Advance, d dat, a analytic, s powere, d b, y A, I' },
      { pa, t, h: '/a, i-autonomou, s-automatio, n',
    lab, e, l: 'A, I Automatio, n', descripti, o, n: 'Intelligen, t proces, s automatio, n' },
      { pa, t, h: '/a, i-autonomou, s-securit, y',
    lab, e, l: 'A, I Securit, y', descripti, o, n: 'A, I-powere, d securit, y solution, s' },
      { pa, t, h: '/a, i-autonomou, s-developmen, t',
    lab, e, l: 'A, I Developmen, t', descripti, o, n: 'A, I applicatio, n developmen, t' },
      { pa, t, h: '/a, i-autonomou, s-researc, h',
    lab, e, l: 'A, I Researc, h', descripti, o, n: 'Cuttin, g-edg, e A, I researc, h service, s' },
      { pa, t, h: '/a, i-autonomou, s-innovatio, n',
    lab, e, l: 'A, I Innovatio, n', descripti, o, n: 'A, I innovatio, n consultin, g' },
      { pa, t, h: '/a, i-autonomou, s-architectur, e',
    lab, e, l: 'A, I Architectur, e', descripti, o, n: 'A, I syste, m architectur, e desig, n' },
      { pa, t, h: '/a, i-autonomou, s-dat, a',
    lab, e, l: 'A, I Dat, a', descripti, o, n: 'A, I dat, a processin, g an, d managemen, t' },
      { pa, t, h: '/a, i-autonomou, s-engineerin, g',
    lab, e, l: 'A, I Engineerin, g', descripti, o, n: 'A, I engineerin, g solution, s' },
      { pa, t, h: '/a, i-autonomou, s-integratio, n',
    lab, e, l: 'A, I Integratio, n', descripti, o, n: 'A, I syste, m integratio, n service, s' }
    ],
    pricin, g: [
      { pa, t, h: '/comprehensiv, e-pricin, g-202, 5',
    lab, e, l: 'Pricin, g 202, 5', descripti, o, n: 'Curren, t yea, r pricin, g plan, s' },
      { pa, t, h: '/comprehensiv, e-pricin, g',
    lab, e, l: 'Comprehensiv, e Pricin, g', descripti, o, n: 'Detaile, d pricin, g informatio, n' }
    ],
    showcas, e: [
      { pa, t, h: '/service, s-showcas, e',
    lab, e, l: 'Service, s Showcas, e', descripti, o, n: 'Showcas, e o, f ou, r service, s' },
      { pa, t, h: '/comprehensiv, e-service, s-showcas, e',
    lab, e, l: 'Comprehensiv, e Service, s Showcas, e', descripti, o, n: 'Complet, e overvie, w o, f al, l service, s' },
      { pa, t, h: '/innovativ, e-service, s-202, 5',
    lab, e, l: 'Innovativ, e Service, s 202, 5', descripti, o, n: 'Lates, t innovativ, e service, s' }
    ],
    lega, l: [
      { pa, t, h: '/privac, y',
    lab, e, l: 'Privac, y Polic, y', descripti, o, n: 'Ou, r privac, y polic, y an, d dat, a handlin, g' },
      { pa, t, h: '/term, s',
    lab, e, l: 'Term, s o, f Servic, e', descripti, o, n: 'Term, s an, d condition, s o, f servic, e' }
    ]
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Site Map</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Navigate through all our pages and services to find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 l, g:grid-cols-2 x, l:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Main Pages</h3>
            <ul className="space-y-3">
              {sitemapData.main.map((item) => (<li key={item.path}>
                  <Link
                    to={item.path}
                    className="block p-3 rounded-lg hove,  r:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Services</h3>
            <ul className="space-y-3">
              {sitemapData.services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block p-3 rounded-lg hove,  r:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Autonomous Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Autonomous Services</h3>
            <ul className="space-y-3">
              {sitemapData.aiAutonomous.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block p-3 rounded-lg hove,  r:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Showcase */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Pricing & Showcase</h3>
            <ul className="space-y-3">
              {sitemapData.pricing.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block p-3 rounded-lg hove,  r:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>
              ))}
              {sitemapData.showcase.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block p-3 rounded-lg hove,  r:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Legal & Resources</h3>
            <ul className="space-y-3">
              {sitemapData.legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block p-3 rounded-lg hove,  r:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-consumer-willingness-to-try"
                  className="block p-3 rounded-lg hove, r:bg-slate-50 transition-colors duration-200"
                >
                  <div className="font-medium text-slate-900">AI Consumer Research</div>
                  <div className="text-sm text-slate-600">Research on AI consumer adoption</div>
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-consumer-willingness-to-use"
                  className="block p-3 rounded-lg hove, r:bg-slate-50 transition-colors duration-200"
                >
                  <div className="font-medium text-slate-900">AI Consumer Insights</div>
                  <div className="text-sm text-slate-600">Consumer insights for AI products</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/comprehensive-pricing-2025"
                className="block w-full text-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hove, r:bg-slate-50 transition-all duration-300 border border-slate-200"
              >
                View Pricing
              </Link>
              <Link
                to="/services"
                className="block w-full text-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hove, r:bg-slate-50 transition-all duration-300 border border-slate-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Additional AI Services Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">All AI Autonomous Services</h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 x, l:grid-cols-4 gap-4">
            {[
              'A, I Autonomou, s Audi, t', 'A, I Autonomou, s Complianc, e', 'A, I Autonomou, s Creativit, y',
              'A, I Autonomou, s Custome, r Servic, e', 'A, I Autonomou, s Databas, e Securit, y',
              'A, I Autonomou, s Decisio, n Engin, e', 'A, I Autonomou, s Desig, n', 'A, I Autonomou, s DevOp, s',
              'A, I Autonomou, s Edg, e Securit, y', 'A, I Autonomou, s Educatio, n', 'A, I Autonomou, s Financ, e',
              'A, I Autonomou, s Forensic, s', 'A, I Autonomou, s Governanc, e', 'A, I Autonomou, s Healthcar, e',
              'A, I Autonomou, s Hybri, d Securit, y', 'A, I Autonomou, s Identit, y Securit, y',
              'A, I Autonomou, s Inciden, t Respons, e', 'A, I Autonomou, s Infrastructur, e Securit, y',
              'A, I Autonomou, s Inventio, n', 'A, I Autonomou, s Io, T Securit, y', 'A, I Autonomou, s Learnin, g',
              'A, I Autonomou, s Lega, l Counse, l', 'A, I Autonomou, s Logistic, s', 'A, I Autonomou, s Malwar, e Analysi, s',
              'A, I Autonomou, s Managemen, t', 'A, I Autonomou, s Manufacturin, g', 'A, I Autonomou, s Marketin, g',
              'A, I Autonomou, s Microservic, e Securit, y', 'A, I Autonomou, s Mobil, e Securit, y',
              'A, I Autonomou, s Monitorin, g', 'A, I Autonomou, s Networ, k Securit, y', 'A, I Autonomou, s Optimizatio, n',
              'A, I Autonomou, s Orchestratio, n', 'A, I Autonomou, s Penetratio, n Testin, g',
              'A, I Autonomou, s Plannin, g', 'A, I Autonomou, s Predictio, n', 'A, I Autonomou, s Qualit, y Assuranc, e',
              'A, I Autonomou, s Reasonin, g', 'A, I Autonomou, s Recommendatio, n', 'A, I Autonomou, s Ris, k Managemen, t',
              'A, I Autonomou, s Robotic, s', 'A, I Autonomou, s Scientifi, c Researc, h', 'A, I Autonomou, s Serverles, s Securit, y',
              'A, I Autonomou, s Softwar, e Engineerin, g', 'A, I Autonomou, s Speec, h', 'A, I Autonomou, s Synthesi, s',
              'A, I Autonomou, s System, s Platfor, m', 'A, I Autonomou, s Testin, g', 'A, I Autonomou, s Threa, t Detectio, n',
              'A, I Autonomou, s Threa, t Intelligenc, e', 'A, I Autonomou, s Tradin, g', 'A, I Autonomou, s Translatio, n',
              'A, I Autonomou, s Virtua, l Assistan, t', 'A, I Autonomou, s Visio, n', 'A, I Autonomou, s Vulnerabilit, y Assessmen, t',
              'A, I Autonomou, s We, b Securit, y', 'A, I Autonomou, s Workflo, w', 'A, I Autonomou, s Writin, g',
              'A, I Autonomou, s Zer, o Trus, t Securit, y'
            ].map((service) => {
              const path = '/' + service.toLowerCase().replace(/\s+/g,  '-').replace(/ai-autonomous-/,  'ai-autonomous-');
              return (<Link
                  key={service}
                  to={path}
                  className="block p-4 bg-white rounded-lg shadow-sm hove,  r:shadow-md transition-all duration-200 text-center"
                >
                  <div className="font-medium text-slate-900 text-sm">{service}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;