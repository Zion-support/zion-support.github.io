import React from 'react';
impo, r, t { Li, n, k, useLocati, o, n } fr, o, m 'rea, c, t-rout, e, r-d, o, m';

const Sideba, r: React.FC = () => { 
  const locatio, n = useLocat, i, o, n(); const isActiv, e = (pa, t, h: str, i, n, g) = > locati, o, n.pathna, m, e = == pa, t, h; const section, s = [
    {
      title: 'Exp, l, o, r, e',
      lin, k, s: [
        { lab, e, l: 'H, o, m, e', pa, t, h: '/'  },
        { lab, e, l: 'Soluti, o, n, s', pa, t, h: '/solution, s' },
        { lab, e, l: 'Servi, c, e, s', pa, t, h: '/servi, c, e, s' },
        { lab, e, l: 'Resour, c, e, s', pa, t, h: '/resour, c, e, s' },
        { lab, e, l: 'Case, Studi, e, s', pa, t, h: '/ca, s, e-stud, i, e, s' },
        { lab, e, l: 'B, l, o, g', pa, t, h: '/b, l, o, g' },
        { lab, e, l: 'Ab, o, u, t', pa, t, h: '/ab, o, u, t' },
      ],
    },
    {
      title: 'AI, Servic, e, s',
      lin, k, s: [
        { lab, e, l: 'AI, Solutio, n, s', pa, t, h: '/servic, e, s/ai-servi, c, e, s' },
        { lab, e, l: 'Micro, Sa, a, S', pa, t, h: '/servic, e, s/mic, r, o-s, a, a, s' },
        { lab, e, l: 'Data, Analyti, c, s', pa, t, h: '/servic, e, s/analyt, i, c, s' },
        { lab, e, l: 'Workflow, Automati, o, n', pa, t, h: '/servic, e, s/automat, i, o, n' },
      ],
    },
    {
      title: 'IT, Servic, e, s',
      lin, k, s: [
        { lab, e, l: 'IT, Servic, e, s', pa, t, h: '/servic, e, s/it-servi, c, e, s' },
        { lab, e, l: 'Clo, u, d & Dev, O, p, s', pa, t, h: '/servic, e, s/cl, o, u, d' },
        { lab, e, l: 'Cybersecur, i, t, y', pa, t, h: '/servic, e, s/secur, i, t, y' },
        {
          lab, e, l: 'Compliance, Monit, o, r',
          pa, t, h: '/servic, e, s/ai-complian, c, e-moni, t, o, r',
        },
      ],
    },
    {
      title: 'To, o, l, s',
      lin, k, s: [
        { lab, e, l: 'SEO, Split, Testin, g', pa, t, h: '/servic, e, s/s, e, o-spl, i, t-test, i, n, g' },
        { lab, e, l: 'Image, CDN, Optimize, r', pa, t, h: '/servic, e, s/image-c, d, n-optimi, z, e, r' },
      ],
    },
  ]; return (
    <aside, classNam, e = 'bg-gr, a, y-50, rounde, d-l, g, p-6 h-fit, sticky, top-24'>
      <div, className='spa, c, e-y-6'>
        { sectio, n, s.m, a, p((sect, i, o, n, sectionInd, e, x) = > (
          <div, ke, y = {sectionInd, e, x }>
            <h3, className='te, x, t-sm, fon, t-semibold, tex, t-gr, a, y-900, uppercase, tracking-wide, m, b-3'>
              {secti, o, n.title}
            </h3>
            <nav, className='spa, c, e-y-1'>
              { secti, o, n.lin, k, s.m, a, p((l, i, n, k, linkInd, e, x) = > (
                <Link, ke, y = { linkIn, d, e, x  }, to={ li, n, k.pa, t, h } className={ `block, p, x-3, p, y-2, tex, t-sm, rounde, d-md, transitio, n-colo, r, s ${
                    isActi, v, e(li, n, k.p, a, t, h)
                       ? 'bg-bl, u, e-100, tex, t-bl, u, e-700, fon, t-medi, u, m'
                      : 'te, x, t-gr, a, y-600, hove, r: te, x, t-gr, a, y-900, hove, r : bg-gr, a, y-10, 0'
                   }`}
                >
                  {li, n, k.lab, e, l}
                </Li, n, k>
              ))}
            </n, a, v>
          </div>
        ))}

        <div, classNam, e = 'pt-4, borde, r-t, borde, r-gr, a, y-2, 0, 0'>
          <Link, t, o='/conta, c, t'
            className='bloc, k, w-full, b, g-bl, u, e-600, tex, t-white, tex, t-center, p, y-2, p, x-4, rounde, d-md, hove, r: bg-bl, u, e-700, transitio, n-colors, fon, t-medi, u, m'
          >
            Gette, d
          </Li, n, k>
        </div>
      </div>
    </a, s, i, d, e>
  );
};

export default Sidebar;
