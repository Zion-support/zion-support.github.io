import React from "react";
const, FeaturedServiceCar, d: Rea, c, t.FC = () => {
  const, service, s = [
    {
      i, c, o
  n: "🧠","
      tit, l, e: "AI, Service, s","
      descripti, o, n: "Leverage, artificial, intelligence to, automate, processes and, gain, insights","
      featur, e, s: ["Machine, Learnin, g", "N, L, P", "Computer, Visio, n", "Predictive, Analytic, s"],"
      li, n, k: "/servic, e, s/ai-servic, e, s"
    }
    {
      ic, o, n: "🚀","
      tit, l, e: "Micro, Saa, S","
      descripti, o, n: "Scalable, software, solutions that, address, specific business, need, s","
      featur, e, s: ["Custom, App, s", "API, Developmen, t", "Database, Solution, s", "Integrati, o, n"],"
      li, n, k: "/servic, e, s/mic, r, o-sa, a, s"
    }
    {
      ic, o, n: "💻","
      tit, l, e: "IT, Service, s","
      descripti, o, n: "Comprehensive, IT, solutions to, modernize, your infrastructu, r, e","
      featur, e, s: ["Cloud, Migratio, n", "DevO, p, s", "Cybersecuri, t, y", "System, Admi, n"],"
=======
import React from "react";';
const, FeaturedServiceCar, d: Rea, c, t.FC = () => {
  const, service, s = [
    {
      i, c, o
  n: "🧠",";
      tit, l, e: "AI, Service, s",";
      descripti, o, n: "Leverage, artificial, intelligence to, automate, processes and, gain, insights",";
      featur, e, s: ["Machine, Learnin, g", "N, L, P", "Computer, Visio, n", "Predictive, Analytic, s"],";
      li, n, k: "/servic, e, s/ai-servic, e, s"
    }
    {
      ic, o, n: "🚀",";
      tit, l, e: "Micro, Saa, S",";
      descripti, o, n: "Scalable, software, solutions that, address, specific business, need, s",";
      featur, e, s: ["Custom, App, s", "API, Developmen, t", "Database, Solution, s", "Integrati, o, n"],";
      li, n, k: "/servic, e, s/mic, r, o-sa, a, s"
    }
    {
      ic, o, n: "💻",";
      tit, l, e: "IT, Service, s",";
      descripti, o, n: "Comprehensive, IT, solutions to, modernize, your infrastructu, r, e",";
      featur, e, s: ["Cloud, Migratio, n", "DevO, p, s", "Cybersecuri, t, y", "System, Admi, n"],";
      li, n, k: "/servic, e, s/it-servic, e, s"
    }
  ];
  return (
    <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-8">"
      {servic, e, s.m, a, p((servi, c, e, ind, e, x) => (
        <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, hover: shad, o, w-xl, transitio, n-shad, o, w">"
          <div, className="te, x, t-5xl, m, b-4">{servi, c, e.ic, o, n}</d, i, v>
          <h3, className="te, x, t-2xl, fon, t-bold, m, b-4">{servi, c, e.tit, l, e}</h3>
          <p, className="te, x, t-gr, a, y-600, m, b-6">{servi, c, e.descripti, o, n}</p>
          <ul, className="spa, c, e-y-2, m, b-6">
=======
    <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-8">";
      {servic, e, s.m, a, p((servi, c, e, ind, e, x) => (
        <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, hover: shad, o, w-xl, transitio, n-shad, o, w">";
          <div, className="te, x, t-5xl, m, b-4">{servi, c, e.ic, o, n}</d, i, v>";
          <h3, className="te, x, t-2xl, fon, t-bold, m, b-4">{servi, c, e.tit, l, e}</h3>";
          <p, className="te, x, t-gr, a, y-600, m, b-6">{servi, c, e.descripti, o, n}</p>";
          <ul, className="spa, c, e-y-2, m, b-6">";
            {servi, c, e.featur, e, s.m, a, p((featu, r, e, featureInd, e, x) => (
              <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-center, tex, t-gr, a, y-6, 0, 0">";
                <span, className="te, x, t-gre, e, n-500, m, r-2">✓</sp, a, n>";
                {featu, r, e}
              </li>
            ))}
          </ul>
          <a
  hr, e, f={servi, c, e.li, n, k}
            classNa, m, e="w-full, b, g-bl, u, e-600, tex, t-white, p, y-3, p, x-6, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colors, fon, t-semibold, tex, t-center, bloc, k"
          >
            Learn, Mor, e;
          </a>
        </d, i, v>
      ))}
    </d, i, v>
  );
};
export default FeaturedServiceCard;