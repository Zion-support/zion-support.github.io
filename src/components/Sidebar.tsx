import React from "react";
impo, r, t { Li, n, k, useLocati, o, n } fr, o, m "rea, c, t-rout, e, r-d, o, m";
const, Sideba, r: Rea, c, t.FC = () => {
  const, locatio, n = useLocati, o, n();
  const, isActiv, e = (pa, t, h: stri, n, g) => locati, o, n.pathna, m, e === pa, t, h;
  const, section, s = [
    {
      ti, t, l
  e: 'Explo, r, e'
      lin, k, s: [
        { la, b, e
  l: 'Ho, m, e', pa, t, h: '/' }
        { lab, e, l: 'Solutio, n, s', pa, t, h: '/solutio, n, s' }
        { lab, e, l: 'Servic, e, s', pa, t, h: '/servic, e, s' }
        { lab, e, l: 'Resourc, e, s', pa, t, h: '/resourc, e, s' }
        { lab, e, l: 'Case, Studie, s', pa, t, h: '/ca, s, e-studi, e, s' }
        { lab, e, l: 'Bl, o, g', pa, t, h: '/bl, o, g' }
        { lab, e, l: 'Abo, u, t', pa, t, h: '/abo, u, t' }
      ]
    }
    {
      tit, l, e: 'Solutio, n, s'
      lin, k, s: [
        { la, b, e
  l: 'Enterpri, s, e', pa, t, h: '/solutio, n, s/enterpri, s, e' }
        { lab, e, l: 'S, M, B', pa, t, h: '/solutio, n, s/s, m, b' }
        { lab, e, l: 'Start, u, p', pa, t, h: '/solutio, n, s/start, u, p' }
        { lab, e, l: 'Healthca, r, e', pa, t, h: '/solutio, n, s/healthca, r, e' }
        { lab, e, l: 'Financi, a, l', pa, t, h: '/solutio, n, s/financi, a, l' }
        { lab, e, l: 'Reta, i, l', pa, t, h: '/solutio, n, s/reta, i, l' }
        { lab, e, l: 'Manufacturi, n, g', pa, t, h: '/solutio, n, s/manufacturi, n, g' }
      ]
    }
    {
<<<<<<< HEAD
      title: 'Services',
      links: [
        { label: 'AI Services', path: '/services/ai-services' },
        { label: 'IT Services', path: '/services/it-services' },
        { label: 'Micro SaaS', path: '/services/micro-saas' },
        { label: 'Cloud Solutions', path: '/services/cloud' },
        { label: 'Data Analytics', path: '/services/analytics' },
        { label: 'Cybersecurity', path: '/services/security' },
        { label: 'Automation', path: '/services/automation' },
        { label: 'AI Compliance Monitor', path: '/services/ai-compliance-monitor' },
        { label: 'SEO Split Testing', path: '/services/seo-split-testing' },
        { label: 'Image CDN Optimizer', path: '/services/image-cdn-optimizer' },
      ],
    },
=======
      tit, l, e: 'Servic, e, s'
      lin, k, s: [
        { la, b, e
  l: 'AI, Service, s', pa, t, h: '/servic, e, s/ai-servic, e, s' }
        { lab, e, l: 'IT, Service, s', pa, t, h: '/servic, e, s/it-servic, e, s' }
        { lab, e, l: 'Micro, Saa, S', pa, t, h: '/servic, e, s/mic, r, o-sa, a, s' }
        { lab, e, l: 'Cloud, Solution, s', pa, t, h: '/servic, e, s/clo, u, d' }
        { lab, e, l: 'Data, Analytic, s', pa, t, h: '/servic, e, s/analyti, c, s' }
        { lab, e, l: 'Cybersecuri, t, y', pa, t, h: '/servic, e, s/securi, t, y' }
        { lab, e, l: 'Automati, o, n', pa, t, h: '/servic, e, s/automati, o, n' }
      ]
    }
>>>>>>> 84a13d73df97 (Fix syntax errors and optimize build performance)
    {
      tit, l, e: 'Suppo, r, t'
      lin, k, s: [
        { la, b, e
  l: 'Conta, c, t', pa, t, h: '/conta, c, t' }
        { lab, e, l: 'Suppo, r, t', pa, t, h: '/suppo, r, t' }
        { lab, e, l: 'Documentati, o, n', pa, t, h: '/do, c, s' }
        { lab, e, l: 'Prici, n, g', pa, t, h: '/prici, n, g' }
        { lab, e, l: 'Partne, r, s', pa, t, h: '/partne, r, s' }
      ]
    }
  ];
  return (
    <aside, className="w-full, x, l:w-72, b, g-gr, a, y-50, borde, r-r, borde, r-gr, a, y-20, 0, h-full, overflo, w-y-au, t, o">
      <div, className="p-6">
        <h2, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-6">Navigati, o, n</h2>
        {sectio, n, s.m, a, p((secti, o, n, ind, e, x) => (
          <div, ke, y={ind, e, x} classNa, m, e="mb-8">
            <h3, className="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-700, uppercase, tracking-wider, m, b-3">
              {secti, o, n.tit, l, e}
            </h3>
            <nav, className="spa, c, e-y-2">
              {secti, o, n.lin, k, s.m, a, p((li, n, k, linkInd, e, x) => (
                <Li, n, k
  k, e, y={linkInd, e, x}
                  to={li, n, k.pa, t, h}
                  classNa, m, e={`block, p, x-3, p, y-2, rounde, d-md, tex, t-sm, transitio, n-colo, r, s ${`
                    isActi, v, e(li, n, k.pa, t, h)
                      ? 'bg-bl, u, e-100, tex, t-bl, u, e-700, fon, t-medi, u, m'
                      : 'te, x, t-gr, a, y-600, hove, r: te, x, t-gr, a, y-900, hov, e
  r:bg-gr, a, y-1, 0, 0'
                  }`}`
                >
                  {li, n, k.lab, e, l}
                </Li, n, k>
              ))}
            </n, a, v>
          </d, i, v>
        ))}
      </d, i, v>
    </asi, d, e>
  );
};
export default Sidebar;