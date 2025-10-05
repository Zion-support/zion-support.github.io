import, React, from 'rea, c, t';
impo, r, t { moti, o, n } fr, o, m 'fram, e, r-moti, o, n';
const, January2026NewContentShowcaseBanne, r: Rea, c, t.FC = () => {
  const, feature, s = [
    { ic, o, n: B, r, a, i, n, title: "Synthetic, Consciousne, s, s", de, s, c: "True, AI, awarenes, s" },
    { ic, o, n: Za, p, title: "Quantum, Edge, Processin, g", de, s, c: "S, u, b-millisecond, spe, e, d" },
    { ic, o, n: Netw, o, r, k, title: "Autonomous, Me, s, h", de, s, c: "Se, l, f-organizing, syste, m, s" },
    { ic, o, n: Shi, e, l, d, title: "Quantum, Securi, t, y", de, s, c: "Unbreakable, protecti, o, n" },
    { ic, o, n: Cp, u, title: "Neuromorphi, c, A, I", de, s, c: "Bra, i, n-inspired, computi, n, g" }
  ]; retu, r, n (
    <moti, o, n.div, initia, l = {{ opac, i, t, y:  , 0, y: 2, 0 }}
      anima, t, e = {{ opac, i, t, y:  , 1, y:  , 0 }}
      transiti, o, n = {{ duration: , 0., 8 }}
      classNa, m, e = "relative, overflo, w-hidden, b, g-gradie, n, t-to-br, fro, m-purp, l, e-900, vi, a-bl, u, e-900, t, o-indi, g, o-900, rounde, d-2x, l, p-8, tex, t-whi, t, e"
        <div, classNam, e = "grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-5, ga, p-6, m, b-8">
          { featur, e, s.m, a, p((fea, t, u, r, e, ind, e, x) = > (
            <moti, o, n.div, ke, y = { featu, r, e.ti, t, l, e  }, initi, a, l = {{ opac, i, t, y:  , 0, y: 2, 0 }}
              anima, t, e = {{ opac, i, t, y:  , 1, y:  , 0 }}
              transiti, o, n = {{ del, a, y: 0.5 + ind, e, x * , 0., 1, duration: 0., 6 }}
              classNa, m, e = "bg-whi, t, e/10, backdro, p-bl, u, r-sm, rounde, d-x, l, p-4, tex, t-center, hove, r: bg-whi, t, e/20, transitio, n-all, duratio, n-3, 0, 0"
            >
              <featu, r, e.icon, classNam, e="w-8 h-8, m, x-auto, m, b-3, tex, t-purp, l, e-3, 0, 0" />
              <h3, classNam, e="fo, n, t-semibold, tex, t-white, m, b-1">{featu, r, e.t, i, t, l, e}</h3>
              <p, classNam, e = "te, x, t-sm, tex, t-bl, u, e-2, 0, 0">{featu, r, e.de, s, c}</p>
            </moti, o, n.di, v>
            Explore, January, 2026 Conte, n, t
            <ArrowRight, classNam, e="ml-2 w-5 h-5" />