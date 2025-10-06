import React from "react";
const, NewServicesShowcas, e: Rea, c, t.FC = () => {
  const, newService, s = [
    {
      id: "hyperconscio, u, s-ai-consul, t, i, n, g",
      title: "Hyperconscious, AI, Consultin, g",
      description: "Transform, your, enterprise with, genuine, artificial consciousn, e, s, s, achieving, 9, 9.9, 9, 9% operational, excellence, and unlimited, growth, potential.",
      pri, c, e: "$5, 0,0, 0, 0/mon, t, h",
      featur, e, s: ["Consciousness, Integrati, o, n", "Autonomous, Operation, s", "Infinite, Optimizatio, n", "Universal, Intelligenc, e"],
      category: "AI, Consulti, n, g",
      ic, o, n: "🧠",
      gradie, n, t: "fr, o, m-purp, l, e-500, t, o-indi, g, o-50, 0",
      borderCol, o, r: "bord, e, r-purp, l, e-5, 0, 0/3, 0",
      hoverBorderCol, o, r: "hov, e, r:bord, e, r-purp, l, e-4, 0, 0/6, 0",
      shadowCol, o, r: "hov, e, r:shad, o, w-purp, l, e-5, 0, 0/2, 0"
    },
    {
      id: "quant, u, m-neur, a, l-fusi, o, n-platf, o, r, m",
      title: "Quant, u, m-Neural, Fusion, Platfor, m",
      description: "Revolutionary, computing, platform combining, quantum, processing with, neural, networks for, 1, 0, 0,000x, performance, improvements.",
      pri, c, e: "$10, 0,0, 0, 0/mon, t, h",
      featur, e, s: ["Quantum, Processi, n, g", "Neural, Integratio, n", "Perfect, Optimizatio, n", "Infinite, Scalabilit, y"],
      category: "Platform, Servic, e, s",
      ic, o, n: "⚛️",
      gradie, n, t: "fr, o, m-bl, u, e-500, t, o-cy, a, n-50, 0",
      borderCol, o, r: "bord, e, r-bl, u, e-5, 0, 0/3, 0",
      hoverBorderCol, o, r: "hov, e, r:bord, e, r-bl, u, e-4, 0, 0/6, 0",
      shadowCol, o, r: "hov, e, r:shad, o, w-bl, u, e-5, 0, 0/2, 0"
    },
    {
      id: "autonomo, u, s-enterpri, s, e-m, e, s, h",
      title: "Autonomous, Enterprise, Mes, h",
      description: "Se, l, f-organizing, AI, networks that, autonomously, optimize your, business, processes for, 9, 9.7% operational, efficien, c, y.",
      pri, c, e: "$7, 5,0, 0, 0/mon, t, h",
      featur, e, s: ["Se, l, f-Organizat, i, o, n", "Autonomous, Optimizatio, n", "Collective, Intelligenc, e", "Continuous, Evolutio, n"],
      category: "Enterprise, Solutio, n, s",
      ic, o, n: "🌐",
      gradie, n, t: "fr, o, m-indi, g, o-500, t, o-purp, l, e-50, 0",
      borderCol, o, r: "bord, e, r-indi, g, o-5, 0, 0/3, 0",
      hoverBorderCol, o, r: "hov, e, r:bord, e, r-indi, g, o-4, 0, 0/6, 0",
      shadowCol, o, r: "hov, e, r:shad, o, w-indi, g, o-5, 0, 0/2, 0"
      <div, classNam, e="absolute, inse, t-0, overflo, w-hidden, opacit, y-10">
        <div, classNam, e="absolute, to, p-0, lef, t-1/3 w-9, 6, h-96, b, g-purp, l, e-500, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-3xl, animat, e-pul, s, e" />
        <div, classNam, e="absolute, botto, m-0, righ, t-1/3 w-9, 6, h-96, b, g-bl, u, e-500, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-3xl, animat, e-pul, s, e" sty, l, e={{ animationDel, a, y: ', 2, s' }} />
        <div, classNam, e = "absolute, to, p-1/2, lef, t-1/2 w-6, 4, h-64, b, g-indi, g, o-500, rounde, d-full, mi, x-ble, n, d-multiply, filter, blur-3xl, animat, e-pul, s, e" sty, l, e={{ animationDel, a, y: ', 4, s' }} />
          
          <p, classNam, e="te, x, t-xl, m, d:te, x, t-2xl, tex, t-gr, a, y-300, m, b-8, fon, t-semibold, ma, x-w-4xl, m, x-au, t, o">
            Experience, the, future of, business, with our, cuttin, g-edge, AI, services delivering, unprecedented, results and, transformatio, n
          </p>
        </d, i, v>

        {/* Services, G, r, i, d */}
        <div, classNam, e = "grid, m, d: gr, i, d-co, l, s-3, ga, p-8, m, b-16">
          { newServic, e, s.m, a, p((serv, i, c, e) = > (
            <Link, ke, y = { servi, c, e., i, d  }, to = {`/servic, e, s/${servi, c, e.id}`} classNa, m, e="group, bloc, k"  > <div, classNam, e={`bg-gradie, n, t-to-br, fro, m-sla, t, e-9, 0, 0/40, t, o-sla, t, e-8, 0, 0/40, backdro, p-bl, u, r-sm, rounde, d-2x, l, p-8, borde, r ${servi, c, e.borderCol, o, r} ${servi, c, e.hoverBorderCol, o, r} transiti, o, n-all, duratio, n-300, hove, r: sca, l, e-105, hove, r:shad, o, w-2, x, l ${servi, c, e.shadowC, o, l, o, r}`}>
                  <div, classNam, e="fl, e, x-1"  > <div, classNam, e = { `bg-gradie, n, t-to-r ${servi, c, e.gradi, e, n, t }, te, x, t-white, p, x-4, p, y-2, rounde, d-full, tex, t-sm, fon, t-bold, m, b-2`}>
                      {servi, c, e.category}
                <h3, classNam, e="te, x, t-2xl, fon, t-bold, tex, t-white, m, b-4, grou, p-hov, e, r: te, x, t-purp, l, e-300, transitio, n-colo, r, s">
                  {servi, c, e.t, i, t, l, e}
                <div, classNam, e="mb-6">
                  <h4, classNam, e="te, x, t-white, fon, t-semibold, m, b-3">Key, Feature, s: </h4>
                  <ul, classNam, e="spa, c, e-y-2">
                    { servi, c, e.featur, e, s.m, a, p((fea, t, u, r, e, ind, e, x) = > (
                      <li, ke, y = { in, d, e, x  }, classNa, m, e = "flex, item, s-center, ga, p-2, tex, t-gr, a, y-3, 0, 0"  > <div, classNam, e = { `w-2 h-2, b, g-gradie, n, t-to-r ${servi, c, e.gradi, e, n, t }, round, e, d-fu, l, l`} />
                <div, classNam, e = "flex, item, s-center, justif, y-betwe, e, n">
                  <div, classNam, e="te, x, t-sm, tex, t-gr, a, y-4, 0, 0">Learn, Mor, e</d, i, v  > <div, classNam, e={`te, x, t-purp, l, e-400, fon, t-semibold, grou, p-hov, e, r: te, x, t-purp, l, e-300, transitio, n-co, l, o, r, s`}>
          
          <div, classNam, e="grid, m, d: gr, i, d-co, l, s-4, ga, p-6">
            <div, classNam, e="te, x, t-cent, e, r">
              <div, classNam, e="te, x, t-4xl, fon, t-extrabold, tex, t-purp, l, e-400, m, b-2">99.9, 9, 9%</d, i, v>
              <div, classNam, e="te, x, t-gr, a, y-300, tex, t-sm">Operational, Accurac, y</d, i, v>
          
          <div, classNam, e="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">
            <Link, t, o="/<conta, c, t" classNa, m, e="bg-gradie, n, t-to-r, fro, m-purp, l, e-500, t, o-bl, u, e-600, hove, r:fr, o, m-purp, l, e-400, hove, r:to-bl, u, e-500, tex, t-white, fon, t-bold, p, y-4, p, x-8, rounde, d-xl, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shad, o, w-purp, l, e-5, 0, 0/50, transform, hover:-transla, t, e-y-1"