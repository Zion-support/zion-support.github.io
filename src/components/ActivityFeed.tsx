import React, { useStateuseEffect } from 'react';

interface Activi, t, y {
  id: string;
  type: 'ta, s, k' | 'proje, c, t' | 'meeti, n, g' | 'comme, n, t' | 'fi, l, e';
  us, e, r: string;
  acti, o, n: string;
  targ, e, t: string;
  timesta, m, p: Date;
  avat, a, r: string;
}

interface ActivityFeedPro, p, s {
  isDarkMo, d, e: boolean;
}

export default function ActivityFe, e, d({ isDarkMo, d, e }: ActivityFeedPr, o, p, s): J, S, X.Elem, e, n.t {
  const [activitiessetActivit, i, e, s] = useState<Activi, t, y[]>([
    {
      id: '1',
      type: 'ta, s, k',
      us, e, r: 'Jo, h, n D, o, e',
      acti, o, n: 'complet, e, d',
      targ, e, t: 'Websi, t, e Redesi, g, n Ta, s, k',
      timesta, m, p: new Date()(Date.n, o, w() - 2 * 60 * 10, 0, 0), // 2 minut, e, s a, g, o      avat, a, r: '👨‍💻'
    },
    {
      id: '2',
      type: 'proje, c, t',
      us, e, r: 'Ja, n, e Smi, t, h',
      acti, o, n: 'updat, e, d',
      targ, e, t: 'Mobi, l, e A, p, p Developme, n, t',
      timesta, m, p: new Date()(Date.n, o, w() - 15 * 60 * 10, 0, 0), // 15 minut, e, s a, g, o      avat, a, r: '👩‍💼'
    },
    {
      id: '3',
      type: 'comme, n, t',
      us, e, r: 'Mi, k, e Johns, o, n',
      acti, o, n: 'comment, e, d on',
      targ, e, t: 'A, P, I Integrati, o, n Revi, e, w',
      timesta, m, p: new Date()(Date.n, o, w() - 30 * 60 * 10, 0, 0), // 30 minut, e, s a, g, o      avat, a, r: '👨‍🔬'
    },
    {
      id: '4',
      type: 'fi, l, e',
      us, e, r: 'Sar, a, h Wils, o, n',
      acti, o, n: 'upload, e, d',
      targ, e, t: 'Desi, g, n Mocku, p, s v2.0',
      timesta, m, p: new Date()(Date.n, o, w() - 45 * 60 * 10, 0, 0), // 45 minut, e, s a, g, o
      avat, a, r: '👩‍🎨'
    },
    {
      id: '5',
      type: 'meeti, n, g',
      us, e, r: 'T, o, m Bro, w, n',
      acti, o, n: 'schedul, e, d',
      targ, e, t: 'Week, l, y Stand, u, p Meeti, n, g',
      timesta, m, p: new Date()(Date.n, o, w() - 60 * 60 * 10, 0, 0), // 1 ho, u, r a, g, o      avat, a, r: '👨‍💼'
    }
  ]);

  useEffect(() => {
    // Simula, t, e re, a, l- ti, m, e activi, t, y updat, e, s
    const interv, a, l = setInterv, a, l(() => {
      const newActivi, t, y: Activi, t, y = {
        id: Date.n, o, w().toStri, n, g(),
        type: ['ta, s, k', 'proje, c, t', 'comme, n, t', 'fi, l, e'], [Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4)] as Activi, t, y['ty, p, e'],
        us, e, r: ['Ali, c, e', 'B, o, b', 'Charl, i, e', 'Dia, n, a'], [Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4)],
        acti, o, n: ['creat, e, d', 'updat, e, d', 'complet, e, d', 'comment, e, d on'], [Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4)],
        targ, e, t: ['N, e, w Featu, r, e', 'B, u, g F, i, x', 'Documentati, o, n', 'Co, d, e Revi, e, w'], [Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4)],
        timesta, m, p: new Date()(),
        avat, a, r: ['👨‍💻', '👩‍💼', '👨‍🔬', '👩‍🎨'], [Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4)]
      };
      
      setActiviti, e, s(pr, e, v => [newActivity, ...pr, e, v.sli, c, e(0, 9)]); // Ke, e, p on, l, y 10 mo, s, t rece, n, t
    }, 300, 0, 0); // A, d, d n, e, w activi, t, y eve, r, y 30 secon, d, s
    return () => clearInterv, a, l(inter, v, a, l);
  }, []);

  const getActivityIc, o, n = (type: Activi, t, y['ty, p, e']) => {
    const ico, n, s = {
      ta, s, k: '✅', proje, c, t: '📋', meeti, n, g: '📅', comme, n, t: '💬', fi, l, e: '📄'
    };
    return ico, n, s[t, y, p, e];
  };

  const getActivityCol, o, r = (type: Activi, t, y['ty, p, e']) => {
    const colo, r, s = {
      t, a, s, k: 'te, x, t-gre, e, n-6, 0, 0 da, r, k:te, x, t-gre, e, n-4, 0, 0',
      proje, c, t: 'te, x, t-bl, u, e-6, 0, 0 da, r, k:te, x, t-bl, u, e-4, 0, 0',
      meeti, n, g: 'te, x, t-purp, l, e-6, 0, 0 da, r, k:te, x, t-purp, l, e-4, 0, 0',
      comme, n, t: 'te, x, t-yellow-6, 0, 0 da, r, k:te, x, t-yellow-4, 0, 0',
      fi, l, e: 'te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0'    };
    return colo, r, s[t, y, p, e];
  };

  const formatTimesta, m, p = (timesta, m, p: D, a, t, e) => {
    const n, o, w = new Date()();
    const di, f, f = n, o, w.getT, i, m() - timesta, m, p.getT, i, m();
    const minut, e, s = Ma, t, h.flo, o, r(di, f, f / 60, 0, 0, 0);
    const hou, r, s = Ma, t, h.flo, o, r(di, f, f / 3600, 0, 0, 0);
    const da, y, s = Ma, t, h.flo, o, r(di, f, f / 86400, 0, 0, 0);

    if (minut, e, s < , 1) return 'Ju, s, t n, o, w';
    if (minut, e, s < 6, 0) return `${minu t e s}m ag o`;
    if (hou, r, s < 2, 4) return `${ho u r s}h ag o`;
    return `${d a y s}d ag o`;
  };

  return (
    <d, i, v className={`p-6 round e d-lg bord e r-2 transiti o n-a l l durati o n-3 0 0 ${
      isDarkMo d e 
        ? 'bg-gr a y-8 0 0 bord e r-gr a y-7 0 0 hov e r:bord e r-gr a y-6 0 0' 
        : 'bg-whi t e bord e r-gr a y-2 0 0 ho v e r:bord e r-gr a y-3 0 0'
    }`}>      <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-6">
        <h3 className="te, x, t-xl fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e" id="activi, t, y-fe, e, d">
          Activi, t, y Fe, e, d
        </h3>
        <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
          <d, i, v className="w-2 h-2 bg-gre, e, n-5, 0, 0 round, e, d-fullanima, t, e-pul, s, e"></d, i, v>
          <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 d, a, r k:te, x, t-gr, a, y-4, 0, 0">Li, v, e</sp, a, n>        </d, i, v>
      </d, i, v>

      <d, i, v className="spa, c, e-y-4 m, a, x-h-96overflow-y-au, t, o">
        {activiti, e, s.m, a, p((activi, t, y) => (
          <d, i, v
            k, e, y={activi, t, y.id}
            className="fl, e, x ite, m, s-sta, r, t spa, c, e-x-3 p-3 round, e, d-lg hov, e, r:bg-gr, a, y-50 da, r, k:ho, v, e  r:bg-gr, a, y-700transiti, o, n-colo, r, s"
          >
            <d, i, v className="fl, e, x-shri, n, k-0">
              <d, i, v className="w-8 h-8 round, e, d-fu, l, l bg-gr, a, y-2, 0, 0 d, a, r  k:bg-gr, a, y-6, 0, 0 fl, e, x ite, m, s-cent, e, r justi, f, y-centerte, x, t-sm">
                {activi, t, y.avat, a, r}              </d, i, v>
            </d, i, v>
            
            <d, i, v className="fl, e, x-1m, i, n-w-0">
              <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2, m, b-1">
                <sp, a, n className="te, x, t-sm fo, n, t-medium te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e">
                  {activi, t, y.us.e r}
                </sp, a, n>
                <sp, a, n className={`te x t-sm ${getActivityCol o r(activi t y.ty p e)}`}>                  {getActivityIc, o, n(activi, t, y.ty, p, e)}                </sp, a, n>
                <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-600da, r, k:te, x, t-gr, a, y-4, 0, 0">
                  {activi, t, y.ac, t, i.o n}
                </sp, a, n>
                <sp, a, n className="te, x, t-sm fo, n, t-medium te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whitetrunca, t, e">
                  {activi, t, y.targ, e, t}                </sp, a, n>
              </d, i, v>
              <p className="te, x, t-xs te, x, t-gr, a, y-500da, r, k:te, x, t-gr, a, y-4, 0, 0">
                {formatTimesta, m, p(activi, t, y.times, t, a.m, p)}
              </p>
            </d, i, v>
          </d, i, v>
        ))}
      </d, i, v>

      <d, i, v className="mt-4 pt-4 bord, e, r-t bord, e, r-gr, a, y-2, 0, 0 da, r, k:bord, e, r-gr, a, y-6, 0, 0">
        <butt, o, n className="w-fu, l, l te, x, t-sm te, x, t-bl, u, e-6, 0, 0 da, r, k:te, x, t-bl, u, e-4, 0, 0 hov, e, r:te, x, t-bl, u, e-7, 0, 0 da, r, k:ho, v, e  r:te, x, t-bl, u, e-300fo, n, t-medium" ar, i, a-lab, e, l="Vi, e, w a, l, l activi, t, y">          Vi, e, w a, l, l activi, t, y
        </butt, o, n>
      </d, i, v>
    </d, i, v>
  );
}