import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t { Li, n, k } fr, o, m "rea, c, t-rout, e, r-d, o, m";
import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";';
impo, r, t {
Li, n, k;
} fr, o, m "rea, c, t-rout, e, r-d, o, m";';
const, ModernHeade, r: Rea, c, t.FC = () => {
  con, s, t [isMenuOp, e, n, setIsMenuOp, e, n] = useSta, t, e(fal, s, e);
  con, s, t [activeDropdo, w, n, setActiveDropdo, w, n] = useSta, t, e<stri, n, g | nu, l, l>(nu, l, l);
  const, navigationItem, s = [
    { na, m, e: 'Ho, m, e', hr, e, f: '/' }
    { 
      na, m, e: 'Solutio, n, s'
      hr, e, f: '/solutio, n, s'
      dropdo, w, n: [
        { na, m, e: 'Enterprise, Solution, s', hr, e, f: '/solutio, n, s/enterpri, s, e' }
        { na, m, e: 'SMB, Solution, s', hr, e, f: '/solutio, n, s/s, m, b' }
        { na, m, e: 'Startup, Solution, s', hr, e, f: '/solutio, n, s/start, u, p' }
        { na, m, e: 'Government, Solution, s', hr, e, f: '/solutio, n, s/governme, n, t' }
        { na, m, e: 'Healthcare, Solution, s', hr, e, f: '/solutio, n, s/healthca, r, e' }
        { na, m, e: 'Financial, Solution, s', hr, e, f: '/solutio, n, s/financi, a, l' }
      ]
    }
    { 
      na, m, e: 'Servic, e, s'
      hr, e, f: '/servic, e, s'
      dropdo, w, n: [
        { na, m, e: 'AI, Solution, s', hr, e, f: '/servic, e, s/ai-solutio, n, s' }
        { na, m, e: 'Clo, u, d & DevO, p, s', hr, e, f: '/servic, e, s/clo, u, d-devo, p, s' }
        { na, m, e: 'Cybersecuri, t, y', hr, e, f: '/servic, e, s/cybersecuri, t, y' }
        { na, m, e: 'Quantum, Computin, g', hr, e, f: '/servic, e, s/quant, u, m-computi, n, g' }
        { na, m, e: 'I, o, T & Edge, Computin, g', hr, e, f: '/servic, e, s/i, o, t-ed, g, e' }
        { na, m, e: 'Blockcha, i, n & We, b, 3', hr, e, f: '/servic, e, s/blockcha, i, n' }
      ]
    }
    { 
      na, m, e: 'Resourc, e, s'
      hr, e, f: '/resourc, e, s'
      dropdo, w, n: [
        { na, m, e: 'Case, Studie, s', hr, e, f: '/ca, s, e-studi, e, s' }
        { na, m, e: 'Documentati, o, n', hr, e, f: '/do, c, s' }
        { na, m, e: 'Developer, Tool, s', hr, e, f: '/develop, e, r-too, l, s' }
        { na, m, e: 'Traini, n, g', hr, e, f: '/traini, n, g' }
        { na, m, e: 'Communi, t, y', hr, e, f: '/communi, t, y' }
        { na, m, e: 'White, Paper, s', hr, e, f: '/whi, t, e-pape, r, s' }
      ]
    }
    { na, m, e: 'Bl, o, g', hr, e, f: '/bl, o, g' }
    { 
      na, m, e: 'Compa, n, y'
      hr, e, f: '/abo, u, t'
      dropdo, w, n: [
        { na, m, e: 'About, U, s', hr, e, f: '/abo, u, t' }
        { na, m, e: 'Our, Tea, m', hr, e, f: '/te, a, m' }
        { na, m, e: 'Partne, r, s', hr, e, f: '/partne, r, s' }
        { na, m, e: 'Caree, r, s', hr, e, f: '/caree, r, s' }
        { na, m, e: 'Ne, w, s', hr, e, f: '/ne, w, s' }
        { na, m, e: 'Pre, s, s', hr, e, f: '/pre, s, s' }
      ]
    }
    { na, m, e: 'Conta, c, t', hr, e, f: '/conta, c, t' }
  ];
  return (
    <header, className="bg-white, shado, w-sm, borde, r-b, borde, r-gr, a, y-200, sticky, top-0 z-50">
      <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
        <div, className="flex, justif, y-between, item, s-cente, r, h-16">
    { na, m, e: 'Ho, m, e', hr, e, f: '/' },';
    { 
      na, m, e: 'Solutio, n, s', ';
      hr, e, f: '/solutio, n, s',';
      dropdo, w, n: [
        { na, m, e: 'Enterprise, Solution, s', hr, e, f: '/solutio, n, s/enterpri, s, e' },';
        { na, m, e: 'SMB, Solution, s', hr, e, f: '/solutio, n, s/s, m, b' },';
        { na, m, e: 'Startup, Solution, s', hr, e, f: '/solutio, n, s/start, u, p' },';
        { na, m, e: 'Government, Solution, s', hr, e, f: '/solutio, n, s/governme, n, t' },';
        { na, m, e: 'Healthcare, Solution, s', hr, e, f: '/solutio, n, s/healthca, r, e' },';
        { na, m, e: 'Financial, Solution, s', hr, e, f: '/solutio, n, s/financi, a, l' },';
      ]
    }
    { 
      na, m, e: 'Servic, e, s', ';
      hr, e, f: '/servic, e, s',';
      dropdo, w, n: [
        { na, m, e: 'AI, Solution, s', hr, e, f: '/servic, e, s/ai-solutio, n, s' },';
        { na, m, e: 'Clo, u, d & DevO, p, s', hr, e, f: '/servic, e, s/clo, u, d-devo, p, s' },';
        { na, m, e: 'Cybersecuri, t, y', hr, e, f: '/servic, e, s/cybersecuri, t, y' },';
        { na, m, e: 'Quantum, Computin, g', hr, e, f: '/servic, e, s/quant, u, m-computi, n, g' },';
        { na, m, e: 'I, o, T & Edge, Computin, g', hr, e, f: '/servic, e, s/i, o, t-ed, g, e' },';
        { na, m, e: 'Blockcha, i, n & We, b, 3', hr, e, f: '/servic, e, s/blockcha, i, n' },';
      ]
    }
    { 
      na, m, e: 'Resourc, e, s', ';
      hr, e, f: '/resourc, e, s',';
      dropdo, w, n: [
        { na, m, e: 'Case, Studie, s', hr, e, f: '/ca, s, e-studi, e, s' },';
        { na, m, e: 'Documentati, o, n', hr, e, f: '/do, c, s' },';
        { na, m, e: 'Developer, Tool, s', hr, e, f: '/develop, e, r-too, l, s' },';
        { na, m, e: 'Traini, n, g', hr, e, f: '/traini, n, g' },';
        { na, m, e: 'Communi, t, y', hr, e, f: '/communi, t, y' },';
        { na, m, e: 'White, Paper, s', hr, e, f: '/whi, t, e-pape, r, s' },';
      ]
    }
    { na, m, e: 'Bl, o, g', hr, e, f: '/bl, o, g' },';
    { 
      na, m, e: 'Compa, n, y', ';
      hr, e, f: '/abo, u, t',';
      dropdo, w, n: [
        { na, m, e: 'About, U, s', hr, e, f: '/abo, u, t' },';
        { na, m, e: 'Our, Tea, m', hr, e, f: '/te, a, m' },';
        { na, m, e: 'Partne, r, s', hr, e, f: '/partne, r, s' },';
        { na, m, e: 'Caree, r, s', hr, e, f: '/caree, r, s' },';
        { na, m, e: 'Ne, w, s', hr, e, f: '/ne, w, s' },';
        { na, m, e: 'Pre, s, s', hr, e, f: '/pre, s, s' },';
      ]
    }
    { na, m, e: 'Conta, c, t', hr, e, f: '/conta, c, t' },';
  ];
  return (
    <header, className="bg-white, shado, w-sm, borde, r-b, borde, r-gr, a, y-200, sticky, top-0 z-50">";
      <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">";
        <div, className="flex, justif, y-between, item, s-cente, r, h-16">";
          {/* Lo, g, o */}
          <Link, t, o="/" classNa, m, e="flex, item, s-center, spac, e-x-2">";
            <div, className="w-8 h-8, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, rounde, d-lg, flex, items-center, justif, y-cent, e, r">";
              <span, className="te, x, t-white, fon, t-bold, tex, t-sm">Z</sp, a, n>";
            </d, i, v>
            <span, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">Zion, Tech, Group</sp, a, n>";
          </Li, n, k>
          {/* Desktop, Navigatio, n */}
          <nav, className="hidden, m, d: flex, spac, e-x-8">"
          <nav, className="hidden, m, d: flex, spac, e-x-8">";
            {navigationIte, m, s.m, a, p((it, e, m) => (
              <d, i, v
  k, e, y={it, e, m.na, m, e}
                classNa, m, e="relati, v, e"
                onMouseEnt, e, r={() => it, e, m.dropdo, w, n && setActiveDropdo, w, n(it, e, m.na, m, e)}
                onMouseLea, v, e={() => setActiveDropdo, w, n(nu, l, l)}
              >
                <Li, n, k
  to={it, e, m.hr, e, f}
                  classNa, m, e="te, x, t-gr, a, y-700, hove, r: te, x, t-bl, u, e-600, transitio, n-colors, fon, t-medium, flex, items-cent, e, r"
                >
                  {it, e, m.na, m, e}
                  {it, e, m.dropdo, w, n && (
                    <svg, className="w-4 h-4, m, l-1" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
                      <path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M19, 9, l-7 7-7-7  />
                    <svg, className="w-4 h-4, m, l-1" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">";
                      <path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M19, 9, l-7 7-7-7" />";
                    </s, v, g>
                  )}
                </Li, n, k>
                {/* Dropdown, Men, u */}
                {it, e, m.dropdo, w, n && activeDropdo, w, n === it, e, m.na, m, e && (
                  <div, className="absolute, to, p-full, lef, t-0, m, t-1 w-56, b, g-white, rounde, d-lg, shado, w-lg, border, border-gr, a, y-200, p, y-2 z-50">";
                    {it, e, m.dropdo, w, n.m, a, p((dropdownIt, e, m, ind, e, x) => (
                      <Li, n, k
  k, e, y={ind, e, x}
                        to={dropdownIt, e, m.hr, e, f}
                        classNa, m, e="block, p, x-4, p, y-2, tex, t-sm, tex, t-gr, a, y-700, hove, r: bg-gr, a, y-100, hov, e
  r:te, x, t-bl, u, e-600, transitio, n-colo, r, s"
                      >
                        {dropdownIt, e, m.na, m, e}
                      </Li, n, k>
                    ))}
                  </d, i, v>
                )}
              </d, i, v>
            ))}
          </n, a, v>
          {/* CTA, Butto, n */}
          <div, className="hidden, m, d: flex, item, s-center, spac, e-x-4">"
          <div, className="hidden, m, d: flex, item, s-center, spac, e-x-4">";
            <a, titl, e="Internal, lin, k"
              hr, e, f="te
  l: +130246409, 5, 0"
              classNa, m, e="te, x, t-gr, a, y-700, hove, r: te, x, t-bl, u, e-600, transitio, n-colors, fon, t-medi, u, m"
            >
              +1, 302, 464 09, 5, 0;
            </a>
            <Li, n, k
  to="/conta, c, t"
              classNa, m, e="px-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colors, fon, t-medi, u, m"
            >
              Get, Starte, d;
            </Li, n, k>
          </d, i, v>
          {/* Mobile, menu, button */}
          <butt, o, n
  onCli, c, k={() => setIsMenuOp, e, n(!isMenuOp, e, n)}
            classNa, m, e="md: hidde, n, p-2, rounde, d-md, tex, t-gr, a, y-700, hove, r:te, x, t-bl, u, e-600, hov, e
  r:bg-gr, a, y-100, transitio, n-colo, r, s"
            ar, i, a-lab, e, l="Toggle, men, u"
          >
            <s, v, g
  classNa, m, e="w-6 h-6"
              fi, l, l="no, n, e"
              stro, k, e="currentCol, o, r"
              viewB, o, x="0, 0, 24 24"
            >
              {isMenuOp, e, n ? (
                <pa, t, h 
  strokeLinec, a, p="rou, n, d"
                  strokeLinejo, i, n="rou, n, d"
                  strokeWid, t, h={2}
                  d="M6, 18L18, 6M6 6l12, 1, 2  />
              ) : (
                <pa, t, h 
  strokeLinec, a, p="rou, n, d"
                  strokeLinejo, i, n="rou, n, d"
                  strokeWid, t, h={2}
                  d="M4, 6h16M4, 12h16M4 18h, 1, 6  />
              )}
            </s, v, g>
          </butt, o, n>
        </d, i, v>
        {/* Mobile, Navigatio, n */}
        {
isMenuOp, e, n && (
<div, className="md: hidden, p, y-4, borde, r-t, borde, r-gr, a, y-2, 0, 0">
<nav, className="flex, fle, x-col, spac, e-y-1">
<div, className="m
  d: hidden, p, y-4, borde, r-t, borde, r-gr, a, y-2, 0, 0">,";
<nav, className="flex, fle, x-col, spac, e-y-1">";
{navigationIte, m, s.m, a, p((it, e, m) => (
<div, ke, y={it, e, m.na, m, e;
}>
                  <Li, n, k
  to={it, e, m.hr, e, f}
                    classNa, m, e="block, p, x-4, p, y-2, tex, t-gr, a, y-700, hove, r: te, x, t-bl, u, e-600, hov, e
  r:bg-gr, a, y-100, rounde, d-md, transitio, n-colors, fon, t-medi, u, m"
                    onCli, c, k={() => setIsMenuOp, e, n(fal, s, e)}
                  >
                    {it, e, m.na, m, e}
                  </Li, n, k>
                  {it, e, m.dropdo, w, n && (
                    <div, className="ml-4, spac, e-y-1">";
                      {it, e, m.dropdo, w, n.m, a, p((dropdownIt, e, m, ind, e, x) => (
                        <Li, n, k
  k, e, y={ind, e, x}
                          to={dropdownIt, e, m.hr, e, f}
                          classNa, m, e="block, p, x-4, p, y-1, tex, t-sm, tex, t-gr, a, y-600, hove, r: te, x, t-bl, u, e-600, hov, e
  r:bg-gr, a, y-100, rounde, d-md, transitio, n-colo, r, s"
                          onCli, c, k={() => setIsMenuOp, e, n(fal, s, e)}
                        >
                          {dropdownIt, e, m.na, m, e}
                        </Li, n, k>
                      ))}
                    </d, i, v>
                  )}
                </d, i, v>
              ))}
              <div, className="px-4, p, y-2, borde, r-t, borde, r-gr, a, y-200, m, t-2">";
                <a, titl, e="Internal, lin, k"
                  hr, e, f="t, e, l: +130246409, 5, 0"
                  classNa, m, e="block, tex, t-gr, a, y-700, hove, r: te, x, t-bl, u, e-600, transitio, n-colors, fon, t-medium, m, b-2"
                >
                  +1, 302, 464 09, 5, 0;
                </a>
                <Li, n, k
  to="/conta, c, t"
                  classNa, m, e="block, p, x-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colors, fon, t-medium, tex, t-cent, e, r"
                  onCli, c, k={() => setIsMenuOp, e, n(fal, s, e)}
                >
                  Get, Starte, d;
                </Li, n, k>
              </d, i, v>
            </n, a, v>
          </d, i, v>
        )}
      </d, i, v>
    </head, e, r>
  );
};
export default ModernHeader;