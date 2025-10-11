import React from "react";
import { Helmet } from "react-helmet-async";
impo, r, t { Coi, n, s } fr, o, m "luci, d, e-rea, c, t";
import, Header, from "../../componen, t, s/Head, e, r";
import, Footer, from "../../componen, t, s/Foot, e, r";
import React from "react";';
impo, r, t {
Helm, e, t;
} fr, o, m "rea, c, t-helm, e, t-asy, n, c";';
impo, r, t {
Coi, n, s;
} fr, o, m "luci, d, e-rea, c, t";';
import, Header, from "../../componen, t, s/Head, e, r";';
import, Footer, from "../../componen, t, s/Foot, e, r";';
const, BlockchainWeb, 3: Rea, c, t.FC = () => {
  const, feature, s = [
    {
      i, c, o
  n: Shie, l, d
      tit, l, e: "Smart, Contract, Development","
      descripti, o, n: "Secu, r, e, audited, smart, contracts for, DeF, i, NF, T, s, DA, O, s, and, enterprise, applications with, comprehensive, testing.","
      tit, l, e: "Smart, Contract, Development",";
      descripti, o, n: "Secu, r, e, audited, smart, contracts for, DeF, i, NF, T, s, DA, O, s, and, enterprise, applications with, comprehensive, testing.",";
      benef, i, t: "Zero, security, vulnerabilities"
    }
    {
      ic, o, n: Netwo, r, k
      tit, l, e: "Mul, t, i-Chain, Integratio, n","
      descripti, o, n: "Seamless, integration, across Ethere, u, m, Polyg, o, n, B, S, C, Sola, n, a, and, other, major blockchain, network, s.","
      tit, l, e: "Mul, t, i-Chain, Integratio, n",";
      descripti, o, n: "Seamless, integration, across Ethere, u, m, Polyg, o, n, B, S, C, Sola, n, a, and, other, major blockchain, network, s.",";
      benef, i, t: "Universal, compatibilit, y"
    }
    {
      ic, o, n: Lo, c, k
      tit, l, e: "DeFi, Protocol, Development","
      descripti, o, n: "Custom, DeFi, protocols including, DEX, s, lending, platform, s, yield, farmin, g, and, liquidity, management syste, m, s.","
      tit, l, e: "DeFi, Protocol, Development",";
      descripti, o, n: "Custom, DeFi, protocols including, DEX, s, lending, platform, s, yield, farmin, g, and, liquidity, management syste, m, s.",";
      benef, i, t: "Enterpri, s, e-grade, securit, y"
    }
    {
      ic, o, n: Coi, n, s
      tit, l, e: "NFT, Marketplac, e & Tokenizati, o, n","
      descripti, o, n: "Complete, NFT, marketplace development, with, advanced featur, e, s, tokenization, service, s, and, royalty, management.","
      tit, l, e: "NFT, Marketplac, e & Tokenizati, o, n",";
      descripti, o, n: "Complete, NFT, marketplace development, with, advanced featur, e, s, tokenization, service, s, and, royalty, management.",";
      benef, i, t: "Scalable, NFT, infrastructure"
    }
    {
      ic, o, n: Databa, s, e
      tit, l, e: "Blockchain, Analytic, s","
      descripti, o, n: "Advanced, blockchain, data analys, i, s, transaction, monitorin, g, and, compliance, reporting with, rea, l-time, insight, s.","
      tit, l, e: "Blockchain, Analytic, s",";
      descripti, o, n: "Advanced, blockchain, data analys, i, s, transaction, monitorin, g, and, compliance, reporting with, rea, l-time, insight, s.",";
      benef, i, t: "Re, a, l-time, monitorin, g"
    }
    {
      ic, o, n: Glo, b, e
      tit, l, e: "Web3, Integratio, n","
      descripti, o, n: "Seamless, Web3, integration for, existing, applications with, wallet, connectivity and, decentralized, identity.","
      tit, l, e: "Web3, Integratio, n",";
      descripti, o, n: "Seamless, Web3, integration for, existing, applications with, wallet, connectivity and, decentralized, identity.",";
      benef, i, t: "Smooth, user, experience"
    }
  ];
  const, pricin, g = [
    {
      na, m, e: "Start, u, p"
      pri, c, e: "$8,5, 0, 0"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Perfect, for, startups and, small, projects entering, the, Web3 spa, c, e"
      featur, e, s: [
        "Basic, smart, contract developme, n, t"
        "Single, blockchain, integration"
        "Standard, security, auditing"
        "Email, suppor, t"
        "Monthly, progress, reports"
        "Basic, DeFi, protocol set, u, p"
        "Simple, NFT, marketplace"
        "Standard, token, development"
        "Basic, analytics, dashboard"
      ]
      popul, a, r: fal, s, e;
    }
    {
      na, m, e: "Grow, t, h"
      pri, c, e: "$25,0, 0, 0"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Ideal, for, growing projects, with, complex blockchain, requirement, s"
      featur, e, s: [
        "Advanced, smart, contract developme, n, t"
        "Mul, t, i-chain, integratio, n (5, network, s)"
        "Comprehensive, security, auditing"
        "Priority, suppor, t"
        "Weekly, progress, reports"
        "Advanced, DeFi, protocols"
        "Custom, NFT, marketplace with, advanced, features"
        "Tokenomics, desig, n & implementati, o, n"
        "Advanced, analytic, s & reporti, n, g"
        "Custom, Web3, integrations"
        "DAO, governance, setup"
        "Yield, farming, protocols"
      ]
      popul, a, r: tr, u, e;
    }
    {
      na, m, e: "Enterpri, s, e"
      pri, c, e: "$75,0, 0, 0"
      peri, o, d: "/mon, t, h"
      descripti, o, n: "Complete, solution, for lar, g, e-scale, blockchain, and Web3, implementation, s"
      featur, e, s: [
        "Enterpri, s, e-grade, smart, contract sui, t, e"
        "Unlimited, blockchain, integrations"
        "Thi, r, d-party, security, audits"
        "Dedicated, blockchain, architect"
        "Daily, progress, reports"
        "Complex, DeFi, ecosystem developme, n, t"
        "Enterprise, NF, T & tokenization, platfor, m"
        "Custom, blockchain, development"
        "Enterprise, analytic, s & complian, c, e"
        "Full, Web3, ecosystem integrati, o, n"
        "Advanced, DAO, governance"
        "Cro, s, s-chain, bridge, development"
        "SLA, guarante, e"
        "24/7, monitorin, g & suppo, r, t"
      ]
      popul, a, r: fal, s, e;
      n, a, m
  e: "Start, u, p",";
      pri, c, e: "$8,5, 0, 0",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Perfect, for, startups and, small, projects entering, the, Web3 spa, c, e",";
      featur, e, s: [
        "Basic, smart, contract developme, n, t",";
        "Single, blockchain, integration",";
        "Standard, security, auditing",";
        "Email, suppor, t",";
        "Monthly, progress, reports",";
        "Basic, DeFi, protocol set, u, p",";
        "Simple, NFT, marketplace",";
        "Standard, token, development",";
        "Basic, analytics, dashboard"
      ]
      popul, a, r: fal, s, e
    }
    {
      na, m, e: "Grow, t, h",";
      pri, c, e: "$25,0, 0, 0",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Ideal, for, growing projects, with, complex blockchain, requirement, s",";
      featur, e, s: [
        "Advanced, smart, contract developme, n, t",";
        "Mul, t, i-chain, integratio, n (5, network, s)",";
        "Comprehensive, security, auditing",";
        "Priority, suppor, t",";
        "Weekly, progress, reports",";
        "Advanced, DeFi, protocols",";
        "Custom, NFT, marketplace with, advanced, features",";
        "Tokenomics, desig, n & implementati, o, n",";
        "Advanced, analytic, s & reporti, n, g",";
        "Custom, Web3, integrations",";
        "DAO, governance, setup",";
        "Yield, farming, protocols"
      ]
      popul, a, r: tr, u, e
    }
    {
      na, m, e: "Enterpri, s, e",";
      pri, c, e: "$75,0, 0, 0",";
      peri, o, d: "/mon, t, h",";
      descripti, o, n: "Complete, solution, for lar, g, e-scale, blockchain, and Web3, implementation, s",";
      featur, e, s: [
        "Enterpri, s, e-grade, smart, contract sui, t, e",";
        "Unlimited, blockchain, integrations",";
        "Thi, r, d-party, security, audits",";
        "Dedicated, blockchain, architect",";
        "Daily, progress, reports",";
        "Complex, DeFi, ecosystem developme, n, t",";
        "Enterprise, NF, T & tokenization, platfor, m",";
        "Custom, blockchain, development",";
        "Enterprise, analytic, s & complian, c, e",";
        "Full, Web3, ecosystem integrati, o, n",";
        "Advanced, DAO, governance",";
        "Cro, s, s-chain, bridge, development",";
        "SLA, guarante, e",";
        "24/7, monitorin, g & suppo, r, t"
      ]
      popul, a, r: fal, s, e
    }
  ];
  const, testimonial, s = [
    {
      na, m, e: "Jennifer, Martine, z","
      ro, l, e: "C, E, O, DeFi, Innovation, Lab","
      conte, n, t: "Zi, o, n's, blockchain, expertise helped, us, launch a, DeFi, protocol that, now, manages $500M, in, TVL. The, smart, contract security, audit, prevented potential, vulnerabilities, worth millio, n, s.","
      na, m, e: "Jennifer, Martine, z",";
      ro, l, e: "C, E, O, DeFi, Innovation, Lab",";
      conte, n, t: "Zi, o, n's, blockchain, expertise helped, us, launch a, DeFi, protocol that, now, manages $500M, in, TVL. The, smart, contract security, audit, prevented potential, vulnerabilities, worth millio, n, s.",";
      rati, n, g: 5
      compa, n, y: "DeFi, Innovation, Lab"
    }
    {
      na, m, e: "David, Che, n","
      ro, l, e: "C, T, O, NFT, Gaming, Platform","
      conte, n, t: "Our, NFT, marketplace went, from, concept to, 10, 0,000, users, in 3, month, s. The, mult, i-chain, integration, and advanced, features, set us, apart, from competito, r, s.","
      na, m, e: "David, Che, n",";
      ro, l, e: "C, T, O, NFT, Gaming, Platform",";
      conte, n, t: "Our, NFT, marketplace went, from, concept to, 10, 0,000, users, in 3, month, s. The, mult, i-chain, integration, and advanced, features, set us, apart, from competito, r, s.",";
      rati, n, g: 5
      compa, n, y: "NFT, Gaming, Platform"
    }
    {
      na, m, e: "Dr. Sarah, Johnso, n","
      ro, l, e: "Found, e, r, Healthcare, DA, O","
      conte, n, t: "The, DAO, governance system, and, tokenomics design, created, a thriving, community, of 50,000, member, s. The, transparency, and security, features, are exception, a, l.","
      na, m, e: "Dr. Sarah, Johnso, n",";
      ro, l, e: "Found, e, r, Healthcare, DA, O",";
      conte, n, t: "The, DAO, governance system, and, tokenomics design, created, a thriving, community, of 50,000, member, s. The, transparency, and security, features, are exception, a, l.",";
      rati, n, g: 5
      compa, n, y: "Healthcare, DA, O"
    }
  ];
  const, service, s = [
    {
      tit, l, e: "DeFi, Developmen, t","
      ic, o, n: Trending, U, p
      descripti, o, n: "Complete, DeFi, protocol development, including, DEXs, lending, platform, s, and, yield, farming syste, m, s.","
      metri, c, s: "$50, 0, M+ TVL, manage, d","
      benefi, t, s: ["Automated, market, makers", "Liquidity, minin, g", "Cro, s, s-chain, swap, s"]"
    }
    {
      tit, l, e: "NFT, Solution, s","
      ic, o, n: Coi, n, s
      descripti, o, n: "E, n, d-to-end, NFT, marketplace development, with, advanced features, and, tokenization servic, e, s.","
      metri, c, s: "10, 0, K+ users, supporte, d","
      benefi, t, s: ["Custom, marketplac, e", "Royalty, managemen, t", "Metadata, optimizatio, n"]"
    }
    {
      tit, l, e: "DAO, Governanc, e","
      ic, o, n: Glo, b, e
      descripti, o, n: "Decentralized, autonomous, organization setup, with, voting mechanisms, and, treasury manageme, n, t.","
      metri, c, s: "5, 0, K+ community, member, s","
      benefi, t, s: ["Voting, system, s", "Treasury, managemen, t", "Proposal, mechanism, s"]"
    }
    {
      tit, l, e: "Token, Developmen, t","
      ic, o, n: Databa, s, e
      descripti, o, n: "Custom, token, creation with, advanced, tokenomics, vesting, schedule, s, and, utility, mechanisms.","
      metri, c, s: "Zero, security, incidents","
      benefi, t, s: ["Custom, tokenomic, s", "Vesting, schedule, s", "Utility, mechanism, s"]"
      tit, l, e: "DeFi, Developmen, t",";
      ic, o, n: Trending, U, p
      descripti, o, n: "Complete, DeFi, protocol development, including, DEXs, lending, platform, s, and, yield, farming syste, m, s.",";
      metri, c, s: "$50, 0, M+ TVL, manage, d",";
      benefi, t, s: ["Automated, market, makers", "Liquidity, minin, g", "Cro, s, s-chain, swap, s"]";
    }
    {
      tit, l, e: "NFT, Solution, s",";
      ic, o, n: Coi, n, s
      descripti, o, n: "E, n, d-to-end, NFT, marketplace development, with, advanced features, and, tokenization servic, e, s.",";
      metri, c, s: "10, 0, K+ users, supporte, d",";
      benefi, t, s: ["Custom, marketplac, e", "Royalty, managemen, t", "Metadata, optimizatio, n"]";
    }
    {
      tit, l, e: "DAO, Governanc, e",";
      ic, o, n: Glo, b, e
      descripti, o, n: "Decentralized, autonomous, organization setup, with, voting mechanisms, and, treasury manageme, n, t.",";
      metri, c, s: "5, 0, K+ community, member, s",";
      benefi, t, s: ["Voting, system, s", "Treasury, managemen, t", "Proposal, mechanism, s"]";
    }
    {
      tit, l, e: "Token, Developmen, t",";
      ic, o, n: Databa, s, e
      descripti, o, n: "Custom, token, creation with, advanced, tokenomics, vesting, schedule, s, and, utility, mechanisms.",";
      metri, c, s: "Zero, security, incidents",";
      benefi, t, s: ["Custom, tokenomic, s", "Vesting, schedule, s", "Utility, mechanism, s"]";
    }
  ];
  const, technologie, s = [
    { na, m, e: "Ethere, u, m", ty, p, e: "Smart, Contract, s" }
    { na, m, e: "Polyg, o, n", ty, p, e: "Layer, 2, Scaling" }
    { na, m, e: "Binance, Smart, Chain", ty, p, e: "High, Performanc, e" }
    { na, m, e: "Sola, n, a", ty, p, e: "Ultra, Fas, t" }
    { na, m, e: "Polkad, o, t", ty, p, e: "Interoperabili, t, y" }
    { na, m, e: "Avalanc, h, e", ty, p, e: "Subne, t, s" }
    { na, m, e: "Arbitr, u, m", ty, p, e: "Optimistic, Rollup, s" }
    { na, m, e: "Optimi, s, m", ty, p, e: "Layer, 2, Solution" }
    { na, m, e: "Cosm, o, s", ty, p, e: "Int, e, r-Blockcha, i, n" }
    { na, m, e: "Near, Protoco, l", ty, p, e: "Developer, Friendl, y" }
    { na, m, e: "Algora, n, d", ty, p, e: "Pure, Proof, of Sta, k, e" }
    { na, m, e: "Fant, o, m", ty, p, e: "Fast, Finalit, y" }
    { na, m, e: "Ethere, u, m", ty, p, e: "Smart, Contract, s" },";
    { na, m, e: "Polyg, o, n", ty, p, e: "Layer, 2, Scaling" },";
    { na, m, e: "Binance, Smart, Chain", ty, p, e: "High, Performanc, e" },";
    { na, m, e: "Sola, n, a", ty, p, e: "Ultra, Fas, t" },";
    { na, m, e: "Polkad, o, t", ty, p, e: "Interoperabili, t, y" },";
    { na, m, e: "Avalanc, h, e", ty, p, e: "Subne, t, s" },";
    { na, m, e: "Arbitr, u, m", ty, p, e: "Optimistic, Rollup, s" },";
    { na, m, e: "Optimi, s, m", ty, p, e: "Layer, 2, Solution" },";
    { na, m, e: "Cosm, o, s", ty, p, e: "Int, e, r-Blockcha, i, n" },";
    { na, m, e: "Near, Protoco, l", ty, p, e: "Developer, Friendl, y" },";
    { na, m, e: "Algora, n, d", ty, p, e: "Pure, Proof, of Sta, k, e" },";
    { na, m, e: "Fant, o, m", ty, p, e: "Fast, Finalit, y" }";
  ];
  return (
    <>
      <Helmet>
        <title>Blockcha, i, n & Web3, Service, s - Zion, Tech, Group | De, F, i, N, F, T, DAO, Solution, s</title>
        <me, t, a
  na, m, e="descripti, o, n"
          content="Expert, blockchain, and Web3, services, including DeFi, protocol, s, NFT, marketplace, s, DAO, governanc, e, and, smart, contract developme, n, t. Enterpri, s, e-grade, security, and mul, t, i-chain, integratio, n." /><meta name="keywor, d, s" content="blockchain, developmen, t, Web3, service, s, DeFi, protocol, s, NFT, marketplac, e, DAO, governanc, e, smart, contract, s, cryptocurrency, developmen, t" /><link, re, l="canonic, a, l" hr, e, f="htt, p, s://ziontechgro, u, p.c, o, m/servic, e, s/blockcha, i, n-we, b, 3/>"
          content="Expert, blockchain, and Web3, services, including DeFi, protocol, s, NFT, marketplace, s, DAO, governanc, e, and, smart, contract developme, n, t. Enterpri, s, e-grade, security, and mul, t, i-chain, integratio, n."
         />
        <meta name="keywor, d, s" content="blockchain, developmen, t, Web3, service, s, DeFi, protocol, s, NFT, marketplac, e, DAO, governanc, e, smart, contract, s, cryptocurrency, developmen, t" />";
        <link, re, l="canonic, a, l" hr, e, f="htt, p, s: //ziontechgro, u, p.c, o, m/servic, e, s/blockcha, i, n-we, b, 3" />";
      </Helmet>
      <Head, e, r   />
      <main, className="m, i, n-h-screen, b, g-whi, t, e">";
        {/* Hero, Sectio, n */}
        <section, className="bg-gradie, n, t-to-br, fro, m-indi, g, o-900, vi, a-indi, g, o-800, t, o-purp, l, e-900, tex, t-white, p, y-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-cent, e, r">
              <h1, className="te, x, t-5xl, m, d: te, x, t-7xl, fon, t-bold, m, b-6">"
                Blockcha, i, n & <span, className="bg-gradie, n, t-to-r, fro, m-indi, g, o-400, t, o-purp, l, e-400, b, g-cl, i, p-text, tex, t-transpare, n, t">We, b, 3</sp, a, n>
              </h1>
              <p, className="te, x, t-xl, m, d:te, x, t-2xl, tex, t-indi, g, o-100, ma, x-w-4xl, m, x-auto, m, b-8">
                Expert, blockchain, and Web3, services, including DeFi, protocol, s, NFT, marketplace, s
  DAO, governanc, e, and, enterpris, e-grade, smart, contract development, with, multi-chain, integratio, n.
              </p>
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
        <section, className="bg-gradie, n, t-to-br, fro, m-indi, g, o-900, vi, a-indi, g, o-800, t, o-purp, l, e-900, tex, t-white, p, y-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-cent, e, r">";
              <h1, className="te, x, t-5xl, m, d: te, x, t-7xl, fon, t-bold, m, b-6">";
                Blockcha, i, n & <span, className="bg-gradie, n, t-to-r, fro, m-indi, g, o-400, t, o-purp, l, e-400, b, g-cl, i, p-text, tex, t-transpare, n, t">We, b, 3</sp, a, n>";
              </h1>
              <p, className="te, x, t-x, l, m
  d: te, x, t-2xl, tex, t-indi, g, o-100, ma, x-w-4xl, m, x-auto, m, b-8">";
                Expert, blockchain, and Web3, services, including DeFi, protocol, s, NFT, marketplace, s
                DAO, governanc, e, and, enterpris, e-grade, smart, contract development, with, multi-chain, integratio, n.
              </p>
              <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
                <a
  hr, e, f="/conta, c, t"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-indi, g, o-600, hov, e
  r: bg-indi, g, o-700, tex, t-white, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
                >
                  <Phone, className="w-5 h-5, m, r-2  />
                  <Phone, className="w-5 h-5, m, r-2" />";
                  Schedule, Consultatio, n;
                </a>
                <a
  hr, e, f="#prici, n, g"
                  classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, hove, r: bg-white, hov, e
  r:te, x, t-indi, g, o-900, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
                >
                  View, Pricin, g;
                  <Link, className="w-5 h-5, m, l-2  />
                  <Link, className="w-5 h-5, m, l-2" />";
                </a>
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Key, Benefit, s */}
        <section, className="py-16, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="text-center mb-12">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-16, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="text-center mb-12">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Why, Choose, Our Blockcha, i, n & Web3, Service, s?
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Transform, your, business with, cuttin, g-edge, blockchain, technology and, Web3, innovation.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-4, ga, p-8">"
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-indi, g, o-100, rounde, d-full, m, b-4">
                  <Shield, className="w-8 h-8, tex, t-indi, g, o-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-4, ga, p-8">";
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-indi, g, o-100, rounde, d-full, m, b-4">";
                  <Shield, className="w-8 h-8, tex, t-indi, g, o-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Zero, Vulnerabilitie, s</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Comprehensive, security, auditing</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, m, b-4">
                  <Network, className="w-8 h-8, tex, t-bl, u, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-bl, u, e-100, rounde, d-full, m, b-4">";
                  <Network, className="w-8 h-8, tex, t-bl, u, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Mul, t, i-Cha, i, n</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Universal, blockchain, compatibility</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, m, b-4">
                  <TrendingUp, className="w-8 h-8, tex, t-gre, e, n-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-gre, e, n-100, rounde, d-full, m, b-4">";
                  <TrendingUp, className="w-8 h-8, tex, t-gre, e, n-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">$50, 0, M+ T, V, L</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Proven, track, record</p>";
              </d, i, v>
              <div, className="te, x, t-cent, e, r">
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, m, b-4">
                  <Globe, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0  />
              <div, className="te, x, t-cent, e, r">";
                <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-purp, l, e-100, rounde, d-full, m, b-4">";
                  <Globe, className="w-8 h-8, tex, t-purp, l, e-6, 0, 0" />";
                </d, i, v>
                <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">Web3, Read, y</h3>";
                <p, className="te, x, t-gr, a, y-6, 0, 0">Futu, r, e-proof, solution, s</p>";
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Servic, e, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Comprehensive, Blockchain, Services;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                E, n, d-to-end, blockchain, and Web3, solutions, for modern, decentralized, applications.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">"
              {servic, e, s.m, a, p((servi, c, e, ind, e, x) => {
                const, Ico, n = servi, c, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">"
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-indi, g, o-100, rounde, d-full, m, b-6">
                      <Icon, className="w-8 h-8, tex, t-indi, g, o-6, 0, 0  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-8">";
              {servic, e, s.m, a, p((servi, c, e, ind, e, x) => {
                const, Ico, n = servi, c, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 6, h-16, b, g-indi, g, o-100, rounde, d-full, m, b-6">";
                      <Icon, className="w-8 h-8, tex, t-indi, g, o-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">{servi, c, e.tit, l, e}</h3>";
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{servi, c, e.descripti, o, n}</p>";
                    <div, className="te, x, t-indi, g, o-600, fon, t-semibold, m, b-4">{servi, c, e.metri, c, s}</d, i, v>";
                    <ul, className="spa, c, e-y-2">";
                      {servi, c, e.benefi, t, s.m, a, p((benef, i, t, benefitInd, e, x) => (
                        <li, ke, y={benefitInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm">
                          <CheckCircle, className="w-4 h-4, tex, t-indi, g, o-500, m, r-2, fle, x-shri, n, k-0  />
                          <span, className="te, x, t-gr, a, y-7, 0, 0">{benef, i, t}</sp, a, n>
                        <li, ke, y={benefitInd, e, x} classNa, m, e="flex, item, s-center, tex, t-sm">";
                          <CheckCircle, className="w-4 h-4, tex, t-indi, g, o-500, m, r-2, fle, x-shri, n, k-0" />";
                          <span, className="te, x, t-gr, a, y-7, 0, 0">{benef, i, t}</sp, a, n>";
                        </li>
                      ))}
                    </ul>
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Featur, e, s */}
        <section, className="py-20, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Advanced, Blockchain, Capabilities;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Powerful, features, that make, your, blockchain solutions, secur, e, scalab, l, e, and, futur, e-pro, o, f.
              </p>
            </d, i, v>
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">"
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => {
                const, Ico, n = featu, r, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">"
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 2, h-12, b, g-indi, g, o-100, rounde, d-lg, m, b-4">
                      <Icon, className="w-6 h-6, tex, t-indi, g, o-6, 0, 0  />
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{featu, r, e.descripti, o, n}</p>
                    <div, className="inli, n, e-flex, item, s-center, tex, t-indi, g, o-600, fon, t-semibold, tex, t-sm">
                      <CheckCircle, className="w-4 h-4, m, r-1  />
            <div, className="grid, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-3, ga, p-8">";
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => {
                const, Ico, n = featu, r, e.ic, o, n;
                return (
                  <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-200, hove, r: shad, o, w-xl, transitio, n-shad, o, w">";
                    <div, className="inli, n, e-flex, item, s-center, justif, y-cente, r, w-1, 2, h-12, b, g-indi, g, o-100, rounde, d-lg, m, b-4">";
                      <Icon, className="w-6 h-6, tex, t-indi, g, o-6, 0, 0" />";
                    </d, i, v>
                    <h3, className="te, x, t-xl, fon, t-bold, tex, t-gr, a, y-900, m, b-3">{featu, r, e.tit, l, e}</h3>";
                    <p, className="te, x, t-gr, a, y-600, m, b-4">{featu, r, e.descripti, o, n}</p>";
                    <div, className="inli, n, e-flex, item, s-center, tex, t-indi, g, o-600, fon, t-semibold, tex, t-sm">";
                      <CheckCircle, className="w-4 h-4, m, r-1" />";
                      {featu, r, e.benef, i, t}
                    </d, i, v>
                  </d, i, v>
                );
              })}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Technologi, e, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Supported, Blockchain, Technologies;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Expertise, across, all major, blockchain, networks and, protocol, s.
              </p>
            </d, i, v>
            <div, className="grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-3 l
  g:gr, i, d-co, l, s-4, ga, p-6">"
              {technologi, e, s.m, a, p((te, c, h, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-6, rounde, d-xl, shado, w-md, border, border-gr, a, y-200, tex, t-center, hove, r: shad, o, w-lg, transitio, n-shad, o, w">"
                  <div, className="w-1, 2, h-12, b, g-indi, g, o-100, rounde, d-lg, flex, items-center, justif, y-center, m, x-auto, m, b-3">
                    <Network, className="w-6 h-6, tex, t-indi, g, o-6, 0, 0  />
            <div, className="grid, gri, d-co, l, s-2, m, d: gr, i, d-co, l, s-3 l
  g:gr, i, d-co, l, s-4, ga, p-6">";
              {technologi, e, s.m, a, p((te, c, h, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-6, rounde, d-xl, shado, w-md, border, border-gr, a, y-200, tex, t-center, hove, r: shad, o, w-lg, transitio, n-shad, o, w">";
                  <div, className="w-1, 2, h-12, b, g-indi, g, o-100, rounde, d-lg, flex, items-center, justif, y-center, m, x-auto, m, b-3">";
                    <Network, className="w-6 h-6, tex, t-indi, g, o-6, 0, 0" />";
                  </d, i, v>
                  <div, className="fo, n, t-semibold, tex, t-gr, a, y-900, m, b-1">{te, c, h.na, m, e}</d, i, v>";
                  <div, className="te, x, t-sm, tex, t-gr, a, y-6, 0, 0">{te, c, h.ty, p, e}</d, i, v>";
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Prici, n, g */}
        <section, i, d="prici, n, g" classNa, m, e="py-20, b, g-gr, a, y-50">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, i, d="prici, n, g" classNa, m, e="py-20, b, g-gr, a, y-50">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                Transparent, Blockchain, Development Prici, n, g;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Choose, the, plan that, fits, your blockchain, project, complexity and, scal, e.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-3, ga, p-8">"
            <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8">";
              {prici, n, g.m, a, p((pl, a, n, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e={`bg-white, rounde, d-2xl, shado, w-l, g, p-8 ${pl, a, n.popul, a, r ? 'ri, n, g-2, rin, g-indi, g, o-500, relativ, e' : ''}`}>`;`
                  {pl, a, n.popul, a, r && (
                    <div, className="absolu, t, e -t, o, p-4, lef, t-1/2, transfor, m -transla, t, e-x-1/2">";
                      <span, className="bg-indi, g, o-500, tex, t-white, p, x-4, p, y-1, rounde, d-full, tex, t-sm, fon, t-semibo, l, d">";
                        Most, Popula, r;
                      </sp, a, n>
                    </d, i, v>
                  )}
                  <div, className="te, x, t-center, m, b-8">";
                    <h3, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2">{pl, a, n.na, m, e}</h3>";
                    <div, className="flex, item, s-center, justif, y-center, m, b-2">";
                      <span, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0">{pl, a, n.pri, c, e}</sp, a, n>";
                      <span, className="te, x, t-gr, a, y-600, m, l-1">{pl, a, n.peri, o, d}</sp, a, n>";
                    </d, i, v>
                    <p, className="te, x, t-gr, a, y-6, 0, 0">{pl, a, n.descripti, o, n}</p>";
                  </d, i, v>
                  <ul, className="spa, c, e-y-4, m, b-8">";
                    {pl, a, n.featur, e, s.m, a, p((featu, r, e, featureInd, e, x) => (
                      <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-cent, e, r">
                        <CheckCircle, className="w-5 h-5, tex, t-indi, g, o-500, m, r-3, fle, x-shri, n, k-0  />
                        <span, className="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>
                      <li, ke, y={featureInd, e, x} classNa, m, e="flex, item, s-cent, e, r">";
                        <CheckCircle, className="w-5 h-5, tex, t-indi, g, o-500, m, r-3, fle, x-shri, n, k-0" />";
                        <span, className="te, x, t-gr, a, y-7, 0, 0">{featu, r, e}</sp, a, n>";
                      </li>
                    ))}
                  </ul>
                  <a
  hr, e, f="/conta, c, t"
                    classNa, m, e={
`w-full, block, text-center, p, y-3, p, x-6, rounde, d-lg, fon, t-semibold, transitio, n-colo, r, s ${`;`
pl, a, n.popul, a, r;
? 'bg-indi, g, o-600, tex, t-white, hove, r: bg-indi, g, o-7, 0, 0'
? 'bg-indi, g, o-600, tex, t-white, hov, e
  r: bg-indi, g, o-7, 0, 0',';
: 'bg-gr, a, y-100, tex, t-gr, a, y-900, hove, r:bg-gr, a, y-2, 0, 0'
}`}`;`
                  >
                    Get, Starte, d;
                  </a>
                </d, i, v>
              ))}
            </d, i, v>
            <div, className="te, x, t-center, m, t-12">";
              <p, className="te, x, t-gr, a, y-600, m, b-4">Need, a, custom blockchain, solutio, n?</p>";
              <a
  hr, e, f="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, tex, t-indi, g, o-600, hove, r: te, x, t-indi, g, o-700, fon, t-semibo, l, d"
              >
                Contact, our, Blockchain Exper, t, s;
                <Link, className="w-4 h-4, m, l-1  />
                <Link, className="w-4 h-4, m, l-1" />";
              </a>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* Testimonia, l, s */}
        <section, className="py-20">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8">"
            <div, className="te, x, t-center, m, b-16">
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
        <section, className="py-20">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8">";
            <div, className="te, x, t-center, m, b-16">";
              <h2, className="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">";
                What, Our, Clients S, a, y;
              </h2>
              <p, className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Join, hundreds, of satisfied, customers, who have, launched, successful blockchain, and, Web3 projects, with, our experti, s, e.
              </p>
            </d, i, v>
            <div, className="gri, d, m
  d: gr, i, d-co, l, s-3, ga, p-8">"
            <div, className="grid, m, d: gr, i, d-co, l, s-3, ga, p-8">";
              {testimonia, l, s.m, a, p((testimoni, a, l, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="bg-whit, e, p-8, rounde, d-xl, shado, w-lg, border, border-gr, a, y-2, 0, 0">";
                  <div, className="flex, item, s-center, m, b-4">";
                    {[...Arr, a, y(testimoni, a, l.rati, n, g)].m, a, p((_, i) => (
                      <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t  />
                      <Star, ke, y={i} classNa, m, e="w-5 h-5, tex, t-yell, o, w-400, fil, l-curre, n, t" />";
                    ))}
                  </d, i, v>
                  <blockquote, className="te, x, t-gr, a, y-700, m, b-6, itali, c">";
                    "{testimoni, a, l.conte, n, t}"
                  </blockquo, t, e>
                  <d, i, v>
                    <div, className="fo, n, t-semibold, tex, t-gr, a, y-9, 0, 0">{testimoni, a, l.na, m, e}</d, i, v>";
                    <div, className="te, x, t-gr, a, y-600, tex, t-sm">{testimoni, a, l.ro, l, e}</d, i, v>";
                    <div, className="te, x, t-indi, g, o-600, tex, t-sm, fon, t-medi, u, m">{testimoni, a, l.compa, n, y}</d, i, v>";
                  </d, i, v>
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>
        {/* CTA, Sectio, n */}
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-indi, g, o-900, vi, a-indi, g, o-800, t, o-purp, l, e-900, tex, t-whi, t, e">
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6 l
  g:px-8, tex, t-cent, e, r">"
            <h2, className="te, x, t-4xl, fon, t-bold, m, b-6">
        <section, className="py-20, b, g-gradie, n, t-to-br, fro, m-indi, g, o-900, vi, a-indi, g, o-800, t, o-purp, l, e-900, tex, t-whi, t, e">";
          <div, className="m, a, x-w-7xl, m, x-auto, p, x-4, s, m: px-6, l, g:px-8, tex, t-cent, e, r">";
            <h2, className="te, x, t-4xl, fon, t-bold, m, b-6">";
              Ready, to, Launch Your, Blockchain, Project?
            </h2>
            <p, className="te, x, t-xl, tex, t-indi, g, o-100, ma, x-w-3xl, m, x-auto, m, b-8">";
              Join, hundreds, of companies, already, using our, blockchain, and Web3, services, to build, the, future of, decentralized, applications.
            </p>
            <div, className="flex, fle, x-co, l, s
  m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">"
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4, justif, y-cent, e, r">";
              <a
  hr, e, f="/conta, c, t"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, b, g-indi, g, o-600, hov, e
  r: bg-indi, g, o-700, tex, t-white, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
              >
                <Phone, className="w-5 h-5, m, r-2  />
                <Phone, className="w-5 h-5, m, r-2" />";
                Schedule, Free, Consultation;
              </a>
              <a
  hr, e, f="/ca, s, e-studi, e, s"
                classNa, m, e="inli, n, e-flex, item, s-center, p, x-8, p, y-4, borde, r-2, borde, r-white, tex, t-white, hove, r: bg-white, hov, e
  r:te, x, t-indi, g, o-900, fon, t-semibold, rounde, d-lg, transitio, n-colo, r, s"
              >
                View, Success, Stories;
                <Link, className="w-5 h-5, m, l-2  />
                <Link, className="w-5 h-5, m, l-2" />";
              </a>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
      </ma, i, n>
      <Foot, e, r   />
    < />
  );
};
export default BlockchainWeb3;