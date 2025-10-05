import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

const, Sideba, r: React.FC = () => { 
  const, locatio, n = useLocatio, n(); const, isActiv, e = (path: strin, g) = > location.pathname = == path; const, section, s = [
    {
      title: 'Explo, r, e',
      links: [
        { label: 'Hom, e', path: '/'  },
        { label: 'Solution, s', path: '/solution, s' },
        { label: 'Service, s', path: '/service, s' },
        { label: 'Resource, s', path: '/resource, s' },
        { label: 'Case, Studi, e, s', path: '/case-studie, s' },
        { label: 'Blo, g', path: '/blo, g' },
        { label: 'Abou, t', path: '/abou, t' },
      ],
    },
    {
      title: 'AI, Servic, e, s',
      links: [
        { label: 'AI, Solutio, n, s', path: '/services/ai-service, s' },
        { label: 'Micro, Sa, a, S', path: '/services/micro-saa, s' },
        { label: 'Data, Analyti, c, s', path: '/services/analytic, s' },
        { label: 'Workflow, Automati, o, n', path: '/services/automatio, n' },
      ],
    },
    {
      title: 'IT, Servic, e, s',
      links: [
        { label: 'IT, Servic, e, s', path: '/services/it-service, s' },
        { label: 'Cloud & DevOp, s', path: '/services/clou, d' },
        { label: 'Cybersecurit, y', path: '/services/securit, y' },
        {
          label: 'Compliance, Monit, o, r',
          path: '/services/ai-compliance-monito, r',
        },
      ],
    },
    {
      title: 'Tool, s',
      links: [
        { label: 'SEO, Split, Testin, g', path: '/services/seo-split-testin, g' },
        { label: 'Image, CDN, Optimize, r', path: '/services/image-cdn-optimize, r' },
      ],
    },
  ]; return (
    <aside, classNam, e = 'bg-gray-50, rounde, d-lgp-6 h-fit, sticky, top-24'>
      <div, classNam, e='space-y-6'>
        { sections.map((sectio, n, sectionInd, e, x) = > (
          <div, ke, y = {sectionIndex }>
            <h3, classNam, e='text-sm, fon, t-semibold, tex, t-gray-900, uppercase, tracking-widemb-3'>
              {section.title}
            </h3>
            <nav, classNam, e='space-y-1'>
              { section.links.map((lin, k, linkInd, e, x) = > (
                <Link, ke, y = { linkInde, x  }, to={ link.path } className={ `blockpx-3py-2, tex, t-sm, rounde, d-md, transitio, n-colors ${
                    isActive(link.pat, h)
                       ? 'bg-blue-100, tex, t-blue-700, fon, t-medium'
                      : 'text-gray-600, hove, r: text-gray-900, hove, r : bg-gray-10, 0'
                   }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}

        <div, classNam, e = 'pt-4, borde, r-t, borde, r-gray-200'>
          <Linkto='/contact'
            className='blockw-fullbg-blue-600, tex, t-white, tex, t-centerpy-2px-4, rounde, d-md, hove, r: bg-blue-700, transitio, n-colors, fon, t-medium'
          >
            Get, Starte, d
          </Link>
        </div>
      </div>
    </asi, d, e>
  );
};

export, default, Sidebar;
