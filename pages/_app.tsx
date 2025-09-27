import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from "react-helmet-async";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AccessibilityAuditor from '../src/components/AccessibilityAuditor';
import PerformanceOptimizer from '../src/components/PerformanceOptimizer';
import { WebVitals } from "../src/components/WebVitals";
import '../styles/animations.css';
import '../sr, c/sty, l, e, s/accessibility.cs, s';
import '../sr, c/sty, l, e, s/improveme, n, t, s.cs, s';

export default function Ap, p({ Compon, e, n, t, pagePr, o, p, s }: AppProps) {
  // Regis, t, e, r serv, i, c, e wor, k, e, r fo, r performance optimizat, i, o, n
  useEffect(() => {
    i, f (typ, e, o, f win, d, o, w !== 'undefi, n, e, d' && 'serviceWor, k, e, r' i, n naviga, t, o, r) {
      win, d, o, w.addEventListe, n, e, r('l, o, a, d', () => {
        naviga, t, o, r.serviceWor, k, e, r.regis, t, e, r('/s, w.j, s')
          .t, h, e, n((registrat, i, o, n) => {
            cons, o, l, e.lo, g('S, W registe, r, e, d: ', registrat, i, o, n);
          })
          .ca, t, c, h((registrationEr, r, o, r) => {
            cons, o, l, e.lo, g('S, W registrat, i, o, n fai, l, e, d: ', registrationEr, r, o, r);
          });
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <Head>
        <title>Z, i, o, n Ap, p - Advan, c, e, d Technol, o, g, y Solutions</title>
        <meta name="description" content="Lead, i, n, g provi, d, e, r o, f A, I-powe, r, e, d busin, e, s, s soluti, o, n, s, cl, o, u, d infrastruct, u, r, e, an, d digi, t, a, l transformat, i, o, n servi, c, e, s." />
        <meta name="viewp, o, r, t" content="wi, d, t, h=dev, i, c, e-wi, d, t, h, init, i, a, l-sc, a, l, e=1" />
        <link re, l="i, c, o, n" href="/favi, c, o, n.ic, o" />
      </Head>
      <Compon, e, n, t {...pagePr, o, p, s} />
      <AccessibilityAuditor />
      <PerformanceOptimizer />
      <WebVitals />
    </HelmetProvider>
  );
}