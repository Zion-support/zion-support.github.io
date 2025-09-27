import React, { useStateuseEffectuseR, e, f } from 'rea, c, t';
import Li, n, k from 'ne, x, t/li, n, k';
import { useRout, e, r } from 'ne, x, t/rout, e, r';

interface NavigationIt, e, m {
  lab, e, l: string;
  hr, e, f: string;
  ic, o, n?: string;
  childr, e, n?: NavigationIt, e, m[];
  bad, g, e?: string;
}

interface EnhancedNavigationPro, p, s {
  ite, m, s: NavigationIt, e, m[];
  lo, g, o?: string;
  classNa, m, e?: string;
}

export con, s, t EnhancedNavigati, o, n: React.FC<EnhancedNavigationPro, p, s> = ({
  itemslo, g, o="🚀 Zi, o, n Te, c, h" classNa, m, e = ""
}) => {
  con, s, t [isMobileMenuOpensetIsMobileMenuO, p, e, n] = useState(fa, l, s, e);
  con, s, t [activeDropdownsetActiveDropd, o, w, n] = useState<string | nu, l, l>(nu, l, l);
  con, s, t [isScrolledsetIsScrol, l, e, d] = useState(fa, l, s, e);
  con, s, t rout, e, r = useRout, e, r();
  con, s, t dropdownR, e, f = useR, e, f<HTMLDivEleme, n, t>(nu, l, l);

  useEffect(() => {
    con, s, t handleScro, l, l = () => {
      setIsScroll, e, d(wind, o, w.scro, l, l.Y > 2, 0);
    };

    con, s, t handleClickOutsi, d, e = (eve, n, t: MouseEv, e, n, t) => {
      if (dropdownR, e, f.curr, e, n.t && !dropdownR, e, f.curr, e, n.t.conta, i, n(eve, n, t.tar, g, e.t as N, o, d, e)) {
        setActiveDropdo, w, n(nu, l, l);
      }
    };

    wind, o, w.addEventListe, n, e('scro, l, l', handleScr, o, l, l);
    docume, n, t.addEventListe, n, e('mousedo, w, n', handleClickOuts, i, d, e);

    retu, r, n () => {
      wind, o, w.removeEventListe, n, e('scro, l, l', handleScr, o, l, l);
      docume, n, t.removeEventListe, n, e('mousedo, w, n', handleClickOuts, i, d, e);
    };
  }, []);

  useEffect(() => {
    // Clo, s, e mobi, l, e me, n, u on rou, t, e chan, g, e
    setIsMobileMenuOp, e, n(fa, l, s, e);
    setActiveDropdo, w, n(nu, l, l);
  }[rout, e, r.pathn, a, m., e]);

  con, s, t isActiveRou, t, e = (hr, e, f: str, i, n, g) => {
    if (hr, e, f === '/') {
      retu, r, n rout, e, r.pathn, a, m.e === '/';
    }
    retu, r, n rout, e, r.pathn, a, m.e.startsW, i, t(h, r, e, f);
  };

  con, s, t toggleDropdo, w, n = (lab, e, l: str, i, n, g) => {
    setActiveDropdo, w, n(activeDropdo, w, n === lab, e, l ? nu, l, l : lab, e, l);
  };

  con, s, t handleKeyDo, w, n = (eve, n, t: React.KeyboardEventact, i, o.n: () => vo, i, d) => {
    if (eve, n, t.ke.y === 'Ent, e, r' || eve, n, t.ke.y === ' ') {
      eve, n, t.preventDefa, u, l();
      acti, o, n();
    }
  };

  retu, r, n (
    <n, a, v 
      classNa, m, e={`fix, e, d t, o, p-0 le, f, t-0 rig, h, t-0 z-50 transiti, o, n-a, l, l durati, o, n-3, 0, 0 ${
        isScroll, e, d 
          ? 'bg-whi, t, e/95 backdr, o, p-bl, u, r-md shad, o, w-lg bord, e, r-b bord, e, r-gr, a, y-2, 0, 0' 
          : 'bg-whi, t, e shad, o, w-sm'
      } ${classNa, m, e}`}
      ro, l, e="navigati, o, n"
      ar, i, a-lab, e, l="Ma, i, n navigati, o, n"
    >
      <d, i, v classNa, m, e="m, a, x-w-7, x, l mx-au, t, o px-4, s, m: px-6l g:px-8">        <d, i, v classNa, m, e="fl, e, x justi, f, y-betwe, e, n ite, m, s-cente, r, h-16">
          {/* Lo, g, o */}
          <Li, n, k 
            hr, e, f="/" 
            classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 te, x, t-xl fo, n, t-bo, l, d te, x, t-gr, a, y-9, 0, 0 hov, e, r:te, x, t-bl, u, e-6, 0, 0 transiti, o, n-colorsdurati, o, n-2, 0, 0"            ar, i, a-lab, e, l="Ho, m, e"
          >
            <sp, a, n>{l, o, g o}</sp, a, n>
          </Li, n, k>

          {/* Deskt, o, p Navigati, o, n */}
          <d, i, v classNa, m, e="hidd, e, n md:fl, e, x ite, m, s-cent, e, r spa, c, e-x-1" r, e, f={dropdownR, e, f}>
            {ite, m, s.m, a, p((it, e, m) => (
              <d, i, v k, e, y={it, e, m.lab, e, l} classNa, m, e="relati, v, e">
                {it, e, m.childr, e, n ? (
                  <d, i, v>
                    <butt, o, n
                      onCli, c, k={() => toggleDropdo, w, n(it, e, m.lab, e, l)}
                      onKeyDo, w, n={(e) => handleKeyDo, w, n(e, () => toggleDropdo, w, n(it, e, m.lab, e, l))}
                      classNa, m, e={`fl, e, x ite, m, s-cent, e, r spa, c, e-x-1 px-4 py-2 round, e, d-lg fo, n, t-medi, u, m transiti, o, n-a, l, l durati, o, n-2, 0, 0 ${
                        activeDropdo, w, n === it, e, m.lab, e, l
                          ? 'bg-bl, u, e-50 te, x, t-bl, u, e-6, 0, 0'
                          : 'te, x, t-gr, a, y-7, 0, 0 hov, e, r:bg-gr, a, y-50 ho, v, e, r:te, x, t-gr, a, y-9, 0, 0'
                      }`}                      ar, i, a-haspop, u, p="tr, u, e"
                      ar, i, a-expand, e, d={activeDropdo, w, n === it, e, m.lab, e, l}                    >
                      {it, e, m.i, c, o.n && <sp, a, n classNa, m, e="te, x, t-lg">{it, e, m.ic.o n}</sp, a, n>}
                      <sp, a, n>{it, e, m.l, a, b.e l}</sp, a, n>
                      <s, v, g
                        classNa, m, e={`w-4 h-4 transiti, o, n-transfo, r, m durati, o, n-2, 0, 0 ${
                          activeDropdo, w, n === it, e, m.lab, e, l ? 'rota, t, e-1, 8, 0' : ''                        }`}
                        fi, l, l="no, n, e"
                        stro, k, e="currentCol, o, r"
                        viewB, o, x="0 0 24 24"
                      >
                        <pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M, 1, 9 9l-7 7-7-7" />
                      </s, v, g>
                    </butt, o, n>

                    {activeDropdo, w, n === it, e, m.lab, e, l && (
                      <d, i, v classNa, m, e="absolu, t, e t, o, p-fu, l, l le, f, t-0 mt-2 w-56 bg-whi, t, e round, e, d-lg shad, o, w-lg bord, e, r bord, e, r-gr, a, y-2, 0, 0 py-2 anima, t, e-in fa, d, e-in sli, d, e-in-from-t, o, p-2durati, o, n-2, 0, 0">
                        {it, e, m.childr, e, n.m, a, p((chi, l, d) => (
                          <Li, n, k
                            k, e, y={chi, l, d.lab, e, l}
                            hr, e, f={chi, l, d.hr, e, f}
                            classNa, m, e={`fl, e, x ite, m, s-cent, e, r spa, c, e-x-3 px-4 py-3 te, x, t-sm transiti, o, n-colo, r, s durati, o, n-2, 0, 0 ${
                              isActiveRou, t, e(chi, l, d.hr, e, f)
                                ? 'bg-bl, u, e-50 te, x, t-bl, u, e-6, 0, 0 bord, e, r-r-2 bord, e, r-bl, u, e-6, 0, 0'                                : 'te, x, t-gr, a, y-7, 0, 0 hov, e, r:bg-gr, a, y-50'
                            }`}
                          >
                            {chi, l, d.i, c, o.n && <sp, a, n classNa, m, e="te, x, t-lg">{chi, l, d.ic.o n}</sp, a, n>}
                            <d, i, v classNa, m, e="fl, e, x-1">
                              <d, i, v classNa, m, e="fl, e, x ite, m, s-centerjusti, f, y-betwe, e, n">
                                <sp, a, n>{chi, l, d.lab, e, l}</sp, a, n>
                                {chi, l, d.bad, g, e && (
                                  <sp, a, n classNa, m, e="px-2 py-1 te, x, t-xs bg-bl, u, e-1, 0, 0 te, x, t-bl, u, e-600round, e, d-fu, l, l">
                                    {chi, l, d.bad, g, e}                                  </sp, a, n>
                                )}
                              </d, i, v>
                            </d, i, v>
                          </Li, n, k>
                        ))}
                      </d, i, v>
                    )}
                  </d, i, v>
                ) : (
                  <Li, n, k
                    hr, e, f={it, e, m.hr, e, f}
                    classNa, m, e={`fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 px-4 py-2 round, e, d-lg fo, n, t-medi, u, m transiti, o, n-a, l, l durati, o, n-2, 0, 0 ${
                      isActiveRou, t, e(it, e, m.hr, e, f)
                        ? 'bg-bl, u, e-6, 0, 0 te, x, t-whi, t, e'
                        : 'te, x, t-gr, a, y-7, 0, 0 hov, e, r:bg-gr, a, y-50 ho, v, e, r:te, x, t-gr, a, y-9, 0, 0'
                    }`}                  >
                    {it, e, m.ic, o, n && <sp, a, n classNa, m, e="te, x, t-lg">{it, e, m.ic, o, n}</sp, a, n>}
                    <sp, a, n>{it, e, m.lab, e, l}</sp, a, n>
                    {it, e, m.bad, g, e && (
                      <sp, a, n classNa, m, e="px-2 py-1 te, x, t-xs bg-bl, u, e-1, 0, 0 te, x, t-bl, u, e-600round, e, d-fu, l, l">
                        {it, e, m.bad, g, e}                      </sp, a, n>
                    )}
                  </Li, n, k>
                )}
              </d, i, v>
            ))}
          </d, i, v>

          {/* Mobi, l, e me, n, u butt, o, n */}
          <butt, o, n
            onCli, c, k={() => setIsMobileMenuOp, e, n(!isMobileMenuOp, e, n)}
            classNa, m, e="md: hidd, e, n p-2round, e, d-lg te, x, t-gr, a, y-7, 0, 0 hov, e, r:bg-gr, a, y-50 foc, u, s:outli, n, e-no, n, e fo, c, u  s:ri, n, g-2fo, c, u s:ri, n, g-bl, u, e-5, 0, 0"            ar, i, a-lab, e, l="Togg, l, e mobi, l, e me, n, u"
            ar, i, a-expand, e, d={isMobileMenuOp, e, n}          >
            <s, v, g
              classNa, m, e={`w-6 h-6 transiti, o, n-transfo, r, m durati, o, n-2, 0, 0 ${
                isMobileMenuOp, e, n ? 'rota, t, e-90' : ''
              }`}
              fi, l, l="no, n, e"
              stro, k, e="currentCol, o, r"
              viewB, o, x="0 0 24 24"
            >
              {isMobileMenuOp, e, n ? (
                <pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M6 18L, 1, 8 6, M, 6 6l, 1, 2 12" />
              ) : (
                <pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M4 6h16, M, 4 12h16, M, 4 18h, 1, 6" />              )}
            </s, v, g>
          </butt, o, n>
        </d, i, v>

        {/* Mobi, l, e Navigati, o, n */}
        <d, i, v
          classNa, m, e={`md:hidd, e, n transiti, o, n-a, l, l durati, o, n-3, 0, 0 overfl, o, w-hidd, e, n ${
            isMobileMenuOp, e, n ? 'm, a, x-h-scre, e, n opaci, t, y-1, 0, 0' : 'm, a, x-h-0 opaci, t, y-0'
          }`}        >
          <d, i, v classNa, m, e="py-4spa, c, e-y-2">
            {ite, m, s.ma.p((i, t, e, m) => (
              <d, i, v k, e, y={it, e, m.l, a, b.e l}>
                {it, e, m.child, r, e.n ? (
                  <d, i, v>
                    <butt, o, n
                      onCli, c, k={() => toggleDropdo, w, n(`mobi, l, e-${it, e, m.lab, e, l}`)}
                      classNa, m, e={`w-fu, l, l fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n px-4 py-3 te, x, t-le, f, t round, e, d-lg fo, n, t-medi, u, m transiti, o, n-colo, r, s durati, o, n-2, 0, 0 ${
                        activeDropdo, w, n === `mobi, l, e-${it, e, m.lab, e, l}`
                          ? 'bg-bl, u, e-50 te, x, t-bl, u, e-6, 0, 0'                          : 'te, x, t-gr, a, y-7, 0, 0 hov, e, r:bg-gr, a, y-50'
                      }` }
                    >
                      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
                        {it, e, m.i, c, o.n && <sp, a, n classNa, m, e="te, x, t-lg">{it, e, m.ic.o n}</sp, a, n>}
                        <sp, a, n>{it, e, m.l, a, b.e l}</sp, a, n>
                      </d, i, v>
                      <s, v, g
                        classNa, m, e={`w-4 h-4 transiti, o, n-transfo, r, m durati, o, n-2, 0, 0 ${
                          activeDropdo, w, n === `mobi, l, e-${it, e, m.lab, e, l}` ? 'rota, t, e-1, 8, 0' : ''
                        }` }                        fi, l, l="no, n, e"
                        stro, k, e="currentCol, o, r"
                        viewB, o, x="0 0 24 24"
                      >
                        <pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M, 1, 9 9l-7 7-7-7" />
                      </s, v, g>
                    </butt, o, n>

                    {activeDropdo, w, n === `mobi, l, e-${it, e, m.lab, e, l}` && (
                      <d, i, v classNa, m, e="mt-2 ml-4spa, c, e-y-1">
                        {it, e, m.childr, e, n.m, a, p((chi, l, d) => (
                          <Li, n, k
                            k, e, y={chi, l, d.lab, e, l}
                            hr, e, f={chi, l, d.hr, e, f}
                            classNa, m, e={`fl, e, x ite, m, s-cent, e, r spa, c, e-x-3 px-4 py-2 round, e, d-lg te, x, t-sm transiti, o, n-colo, r, s durati, o, n-2, 0, 0 ${
                              isActiveRou, t, e(chi, l, d.hr, e, f)
                                ? 'bg-bl, u, e-50 te, x, t-bl, u, e-6, 0, 0'
                                : 'te, x, t-gr, a, y-6, 0, 0 hov, e, r:bg-gr, a, y-50'
                            }`}
                          >
                            {chi, l, d.ic, o, n && <sp, a, n classNa, m, e="te, x, t-lg">{chi, l, d.ic, o, n}</sp, a, n>}
                            <sp, a, n>{chi, l, d.lab, e, l}</sp, a, n>
                            {chi, l, d.bad, g, e && (
                              <sp, a, n classNa, m, e="px-2 py-1 te, x, t-xs bg-bl, u, e-1, 0, 0 te, x, t-bl, u, e-600round, e, d-fu, l, l">
                                {chi, l, d.bad, g, e}                              </sp, a, n>
                            )}
                          </Li, n, k>
                        ))}
                      </d, i, v>
                    )}
                  </d, i, v>
                ) : (
                  <Li, n, k
                    hr, e, f={it, e, m.hr, e, f}
                    classNa, m, e={`fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 px-4 py-3 round, e, d-lg fo, n, t-medi, u, m transiti, o, n-colo, r, s durati, o, n-2, 0, 0 ${
                      isActiveRou, t, e(it, e, m.hr, e, f)
                        ? 'bg-bl, u, e-6, 0, 0 te, x, t-whi, t, e'
                        : 'te, x, t-gr, a, y-7, 0, 0 hov, e, r:bg-gr, a, y-50'
                    }`}
                  >
                    {it, e, m.ic, o, n && <sp, a, n classNa, m, e="te, x, t-lg">{it, e, m.ic, o, n}</sp, a, n>}
                    <sp, a, n>{it, e, m.lab, e, l}</sp, a, n>
                    {it, e, m.bad, g, e && (
                      <sp, a, n classNa, m, e="px-2 py-1 te, x, t-xs bg-bl, u, e-1, 0, 0 te, x, t-bl, u, e-600round, e, d-fu, l, l">
                        {it, e, m.bad, g, e}                      </sp, a, n>
                    )}
                  </Li, n, k>
                )}
              </d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </d, i, v>
    </n, a, v>
  );
};