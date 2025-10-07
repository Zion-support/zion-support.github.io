import React from 'react';
import { Link } from 'react-router-dom';
const NewContentShowcase202, 5: React.FC = () => {
  const highlight, s = [
    {
      title: "🎭 Multimodal, AI, Revoluti, o, n",
      description: "Unified, visio, n-langua, g, e-audio, processing, with 98% accur, a, c, y",
      li, n, k: "/bl, o, g/multimod, a, l-ai-revoluti, o, n-2, 0, 2, 5",
      col, o, r: "fr, o, m-purp, l, e-500, t, o-pi, n, k-50, 0"
    },
    {
      title: "⛓️ Blockcha, i, n-AI, Integrati, o, n",
      description: "Trustless, intelligence, with decentralized, governan, c, e",
      li, n, k: "/bl, o, g/blockcha, i, n-ai-integrati, o, n-2, 0, 2, 5",
      col, o, r: "fr, o, m-bl, u, e-500, t, o-cy, a, n-50, 0"
    },
    {
      title: "🌱 Green, A, I & Sustainabil, i, t, y",
      description: "Carb, o, n-neutral, ML, with 90% emissions, reducti, o, n",
      li, n, k: "/bl, o, g/gre, e, n-ai-sustainabili, t, y-2, 0, 2, 5",
      col, o, r: "fr, o, m-gre, e, n-500, t, o-emera, l, d-50, 0"
    },
    {
      title: "⚙️ AI, Predictive, Maintenanc, e",
      description: "85% downtime, reduction, with 98% prediction, accura, c, y",
      li, n, k: "/servic, e, s/ai-predicti, v, e-maintena, n, c, e",
      col, o, r: "fr, o, m-oran, g, e-500, t, o-r, e, d-50, 0"
    }
  ]; return (
    <section, classNam, e = "py-16, b, g-gr, a, y-900, tex, t-whi, t, e">
      <div, className="container, m, x-auto, p, x-6">
        <div, className="te, x, t-center, m, b-12">
          <div, className="flex, item, s-center, justif, y-center, ga, p-2, m, b-4">
            <Sparkles, className="w-6 h-6, tex, t-yell, o, w-400, animat, e-pul, s, e" />
            <h2, className="te, x, t-4xl, fon, t-bo, l, d">2025, Breakthrough, Content</h2>
            <Sparkles, className="w-6 h-6, tex, t-yell, o, w-400, animat, e-pul, s, e" />
          </div>
          <p, className="te, x, t-xl, tex, t-gr, a, y-3, 0, 0">
            The, most, innovative AI, content, of the, yea, r
          </p>
        </div>
        <div, className="grid, m, d: gr, i, d-co, l, s-2, l, g:gr, i, d-co, l, s-4, ga, p-6">
          { highligh, t, s.m, a, p((it, e, m, ind, e, x) = > (
            <Link, ke, y = { in, d, e, x  }, to={ it, e, m.li, n, k } className="group, relative, overflow-hidden, rounde, d-2x, l, p-6, b, g-gr, a, y-800, hove, r: sca, l, e-105, transitio, n-all, duratio, n-3, 0, 0"
            >
              <div, classNam, e = { `absolute, inse, t-0, b, g-gradie, n, t-to-br ${it, e, m.c, o, l, o, r }, opaci, t, y-0, grou, p-hov, e, r: opaci, t, y-20, transitio, n-opac, i, t, y`} />
              <h3, classNam, e = "te, x, t-xl, fon, t-bold, m, b-3, relative, z-10">{it, e, m.title}</h3>
              <p, className="te, x, t-gr, a, y-300, tex, t-sm, relative, z-10">{it, e, m.description}</p>
            </L, i, n, k>
          ))}
        </div>
      </div>
    </secti, o, n>
  );
};
export default NewContentShowcase2025;