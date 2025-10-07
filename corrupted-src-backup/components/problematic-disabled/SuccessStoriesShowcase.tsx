import React from 'react';
import { Link } from 'react-router-dom';
const SuccessStoriesShowcas, e: React.FC = () => { 
  const storie, s = [
    {
      company: "TechCorp, Internatio, n, a, l",
      industry: "Technol, o, g, y",
      ic, o, n: '🚀',
      ic, o, n: <TrendingUp, classNam, e = "w-8 , h-, 8" / > ,
      resu, l, t: "3, 0, 0% Revenue, Grow, t, h",
      description: "Implemented, multimodal, AI achieving, unprecedented, customer engagement, and, conversion ra, t, e, s.",",
      metri, c, s: [
        "98% prediction, accura, c, y",
        "60% cost, reductio, n",
        "2M, users, impacted"
      ],",
      col, o, r: "fr, o, m-bl, u, e-500, t, o-cy, a, n-50, 0"
     },
    { ",
      company: "Global, Manufacturing, In, c",
      industry: "Manufactur, i, n, g",
      ic, o, n: '🚀',
      ic, o, n: <Target, classNam, e = "w-8 , h-, 8" / > ,
      resu, l, t: "85% Downtime, Reducti, o, n",
      description: "AI, predictive, maintenance transformed, operatio, n, s, eliminating, unplanned, downtime and, reducing, costs.",",
      metri, c, s: [
        "$2M, annual, saving, s",
        "40% lower, maintenance, costs",
        "99.9% uptime, achieve, d"
      ],",
      col, o, r: "fr, o, m-gre, e, n-500, t, o-emera, l, d-50, 0"
     },
    { ",
      company: "FinanceFirst, Ba, n, k",
      industry: "Financial, Servic, e, s",
      ic, o, n: '🚀',
      ic, o, n: <Users, classNam, e = "w-8 , h-, 8" / > ,
      resu, l, t: "99.95% Fraud, Detecti, o, n",
      description: "AI, fraud, prevention system, achieved, industry-leading, accuracy, while reducing, false, positives b, y, 9, 5%.",",
      metri, c, s: [
        "$5M, fraud, prevente, d",
        "S, u, b-100ms, detectio, n",
        "95% fewer, false, positives"
      ],",
      col, o, r: "fr, o, m-purp, l, e-500, t, o-pi, n, k-50, 0"
     }
  ]; return (
    <section, classNam, e = "py-20, b, g-gradie, n, t-to-br, fro, m-gr, a, y-50, t, o-bl, u, e-50">
      <div, className="container, m, x-auto, p, x-6">
        <div, className="te, x, t-center, m, b-16">
          <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
            Success, Storie, s
          </h2>
          <p, className="te, x, t-xl, tex, t-gr, a, y-600, ma, x-w-3xl, m, x-au, t, o">
            See, how, leading companies, are, transforming their, operations, with our, AI, solutions
          </p>
        </div>
        <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8, ma, x-w-7xl, m, x-auto, m, b-12">
          { stori, e, s.m, a, p((s, t, o, r, y, ind, e, x) = > (
            <div, ke, y = { in, d, e, x  }, classNa, m, e = "bg-white, rounde, d-2xl, shado, w-xl, overflo, w-hidden, hove, r: sca, l, e-105, transitio, n-all, duratio, n-3, 0, 0"
            >
              <div, classNam, e = { `bg-gradie, n, t-to-r ${sto, r, y.c, o, l, o, r }, te, x, t-whit, e, p-6`}>
                <div, classNam, e = "flex, item, s-center, ga, p-3, m, b-4">
                  {sto, r, y.ic, o, n}
                  <d, i, v>
                    <h3, className="fo, n, t-bold, tex, t-xl">{sto, r, y.company}</h3>
                    <p, className="te, x, t-sm, opacit, y-90">{sto, r, y.industry}</p>
                  </div>
                </div>
                <div, className="te, x, t-3xl, fon, t-bo, l, d">{sto, r, y.resu, l, t}</div>
              </div>
              <div, className="p-6">
                <p, className="te, x, t-gr, a, y-600, m, b-6">{sto, r, y.description}</p>
                <div, className="spa, c, e-y-2, m, b-6">
                  { sto, r, y.metri, c, s.m, a, p((met, r, i, c, i, d, x) = > (
                    <div, ke, y = { id, x  }, classNa, m, e = "flex, item, s-center, ga, p-2">
                      <div, className="w-2 h-2, b, g-gre, e, n-500, rounde, d-fu, l, l" />
                      <span, className="te, x, t-sm, tex, t-gr, a, y-7, 0, 0">{metr, i, c}</sp, a, n>
                    </di, v>
                  ))}
                </div>
                <Link, t, o = "/ca, s, e-studi, e, s"
                  className="te, x, t-indi, g, o-600, fon, t-semibold, hove, r: te, x, t-indi, g, o-800, flex, items-center, ga, p-2"
                >
                  Read, Full, Story
                  <ArrowRight, className="w-4 h-4" />
                </Li, n, k>
              </div>
            </div>
          ))}
        </div>
        <div, classNam, e = "te, x, t-cent, e, r">
          <Link, t, o="/ca, s, e-studi, e, s"
            className="inli, n, e-flex, item, s-center, ga, p-2, b, g-indi, g, o-600, tex, t-white, p, x-8, p, y-4, rounde, d-xl, fon, t-bold, tex, t-lg, hove, r: bg-indi, g, o-700, transitio, n-all, hove, r:sca, l, e-105, shado, w-lg"
          >
            View, All, Success Stori, e, s
            <ArrowRight, className="w-6 h-6" />
          </Li, n, k>
        </div>
      </div>
    </sec, t, i, o, n>
  );
};
export default SuccessStoriesShowcase;