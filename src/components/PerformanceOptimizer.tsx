import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceOptimizerProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableReporting?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  onMetricsUpdate,
  enableReporting = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    if (!enableReporting) return;

    // Import web-vitals dynamically to avoid bundle bloat
    import('web-vitals').then(webVitals => {
      const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;
      onCLS(metric => {
        setMetrics(prev => {
          const newMetrics = { ...prev, cls: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      onINP(metric => {
        setMetrics(prev => {
          const newMetrics = { ...prev, fid: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      onFCP(metric => {
        setMetrics(prev => {
          const newMetrics = { ...prev, fcp: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      onLCP(metric => {
        setMetrics(prev => {
          const newMetrics = { ...prev, lcp: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });

      onTTFB(metric => {
        setMetrics(prev => {
          const newMetrics = { ...prev, ttfb: metric.value };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      });
    });

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/main.woff2',
        '/images/hero.webp',
        '/api/services',
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.woff')
          ? 'font'
          : resource.includes('.webp')
            ? 'image'
            : 'fetch';
        if (resource.includes('.woff')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();

    // Cleanup
    return () => {
      // Cleanup any observers or listeners if needed
    };
  }, [enableReporting, onMetricsUpdate, metrics]);

  // Performance budget monitoring
  useEffect(() => {
    const checkPerformanceBudget = () => {
      const { fcp, lcp, fid, cls } = metrics;

      // Performance budgets (in milliseconds)
      const budgets = {
        fcp: 1800, // First Contentful Paint
        lcp: 2500, // Largest Contentful Paint
        fid: 100, // First Input Delay
        cls: 0.1, // Cumulative Layout Shift
      };

      const violations = [];

      if (fcp && fcp > budgets.fcp) {
        violations.push(`FCP: ${fcp}ms (budget: ${budgets.fcp}ms)`);
      }
      if (lcp && lcp > budgets.lcp) {
        violations.push(`LCP: ${lcp}ms (budget: ${budgets.lcp}ms)`);
      }
      if (fid && fid > budgets.fid) {
        violations.push(`FID: ${fid}ms (budget: ${budgets.fid}ms)`);
      }
      if (cls && cls > budgets.cls) {
        violations.push(`CLS: ${cls} (budget: ${budgets.cls})`);
      }

      if (violations.length > 0 && enableReporting) {
        console.warn('Performance budget violations:', violations);

        // Report to analytics or monitoring service
        if (
          typeof window !== 'undefined' &&
          (window as unknown as { gtag?: Function }).gtag
        ) {
          (window as unknown as { gtag: Function }).gtag(
            'event',
            'performance_budget_violation',
            {
              event_category: 'Performance',
              event_label: violations.join(', '),
              value: violations.length,
            },
          );
        }
      }
    };

    checkPerformanceBudget();
  }, [metrics, enableReporting]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
import, Reac, t, { useEffe, c, t, useSta, t, e } fr, o, m "rea, c, t"; impo, r, t {} fr, o, m "w, e, b-vita, l, s"; interface, PerformanceMetric, s { c, l, s: numb, e, r | nu, l, l; f, i, d: numb, e, r | nu, l, l; f, c, p: numb, e, r | nu, l, l; l, c, p: numb, e, r | nu, l, l; tt, f, b: numb, e, r | nu, l, l; sc, o, r e: numb, e, r; } const, PerformanceOptimize, r: Rea, c, t.FC<PerformanceOptimizerPro, p, s> = ({ isVisib, l, e onClo, s, e; }) => { con, s, t [optimizatio, n, s, setOptimizatio, n, s] = useSta, t, e({ imageOptimizati, o, n: tr, u, e codeSplitti, n, g: tr, u, e lazyLoadi, n, g: tr, u, e cachi, n, g: tr, u, e compressi, o, n: tr, u, e c, d, n: fal, s, e; }); con, s, t [currentOptimizatio, n, s, setCurrentOptimizatio, n, s] = useSta, t, e<stri, n, g[]>([]);  import, Reac, t, { useEffe, c, t } fr, o, m "rea, c, t"; const, PerformanceOptimize, r: Rea, c, t.FC = () => { useEffe, c, t(() => { const, sendToAnalytic, s = (met, r, i c: a, n, y) => { // Send, to, your analytics, servic, e conso, l, e.l, o, g(`Performance, metri, c ${metr, i, c.na, m, e` }:`, metr, i, c.val, u, e);` setMetri, c, s(pr, e, v => { const, newMetric, s = { ...pr, e, v }; swit, c, h (metr, i, c.na, m, e) { ca, s, e 'C, L, S': newMetri, c, s.c, l, s = metr, i, c.val, u, e; bre, a, k;' ca, s, e 'F, I, D': newMetri, c, s.f, i, d = metr, i, c.val, u, e; bre, a, k;' ca, s, e 'F, C, P': newMetri, c, s.f, c, p = metr, i, c.val, u, e; bre, a, k;' ca, s, e 'L, C, P': newMetri, c, s.l, c, p = metr, i, c.val, u, e; bre, a, k;' ca, s, e 'TT, F, B': newMetri, c, s.tt, f, b = metr, i, c.val, u, e; bre, a, k; } if (optimizatio, n, s.imageOptimizati, o, n) {' optimizationsLi, s, t.pu, s, h('Optimizing, image, s...'); await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 10, 0, 0));' optimizationsLi, s, t.pu, s, h('✓ Images, optimize, d'); } if (optimizatio, n, s.codeSplitti, n, g) {' optimizationsLi, s, t.pu, s, h('Enabling, code, splitting...'); await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 8, 0, 0));' optimizationsLi, s, t.pu, s, h('✓ Code, splitting, enabled'); } if (optimizatio, n, s.lazyLoadi, n, g) {' optimizationsLi, s, t.pu, s, h('Implementing, lazy, loading...'); await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 6, 0, 0));' optimizationsLi, s, t.pu, s, h('✓ Lazy, loading, implemented'); } if (optimizatio, n, s.cachi, n, g) {' optimizationsLi, s, t.pu, s, h('Configuring, cachin, g...'); await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 7, 0, 0));' optimizationsLi, s, t.pu, s, h('✓ Caching, configure, d'); } if (optimizatio, n, s.compressi, o, n) {' optimizationsLi, s, t.pu, s, h('Enabling, compressio, n...'); await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 5, 0, 0));' optimizationsLi, s, t.pu, s, h('✓ Compression, enable, d'); } setCurrentOptimizatio, n, s(optimizationsLi, s, t); }; runOptimizatio, n, s(); } }, [isVisib, l, e, optimizatio, n, s]); const, handleOptimizationToggl, e = (k, e, y: keyof, typeof, optimizations) => { setOptimizatio, n, s(pr, e, v => ({ ...pr, e, v [k, e, y]: !pr, e, v[k, e, y] })); }; const, optimizationOption, s = [ {' k, e, y: 'imageOptimizati, o, n' as, cons, t' lab, e, l: 'Image, Optimizatio, n'' descripti, o, n: 'Compress, and, optimize images, for, faster loadi, n, g' ic, o, n: Ima, g, e enabl, e, d: optimizatio, n, s.imageOptimizati, o, n; } {' k, e, y: 'codeSplitti, n, g' as, cons, t' lab, e, l: 'Code, Splittin, g'' descripti, o, n: 'Split, code, into smaller, chunks, for better, performanc, e' ic, o, n: Co, d, e enabl, e, d: optimizatio, n, s.codeSplitti, n, g; } {' k, e, y: 'lazyLoadi, n, g' as, cons, t' lab, e, l: 'Lazy, Loadin, g'' descripti, o, n: 'Load, content, only when, neede, d' ic, o, n: Databa, s, e enabl, e, d: optimizatio, n, s.lazyLoadi, n, g; } {' k, e, y: 'cachi, n, g' as, cons, t' lab, e, l: 'Browser, Cachin, g'' descripti, o, n: 'Enable, aggressive, caching strategi, e, s' ic, o, n: Settin, g, s enabl, e, d: optimizatio, n, s.cachi, n, g; } {' k, e, y: 'compressi, o, n' as, cons, t' lab, e, l: 'Gzip, Compressio, n'' descripti, o, n: 'Compress, assets, for faster, transfe, r' ic, o, n: Z, a, p enabl, e, d: optimizatio, n, s.compressi, o, n; } {' k, e, y: 'c, d, n' as, cons, t' lab, e, l: 'CDN, Integratio, n'' descripti, o, n: 'Use, Content, Delivery Network, for, global performan, c, e' ic, o, n: Wi, f, i enabl, e, d: optimizatio, n, s.c, d, n; } ];  // Preload, critical, resources const, preloadCriticalResource, s = () => { const, criticalImage, s = [' '/a, p, i/placehold, e, r/8, 0, 0/4, 0, 0'' '/a, p, i/placehold, e, r/6, 0, 0/4, 0, 0' ]; criticalImag, e, s.forEa, c, h(s, r, c => {' const, lin, k = docume, n, t.createEleme, n, t('li, n, k');' li, n, k.r, e, l = 'prelo, a, d';' li, n, k.as = 'ima, g, e'; li, n, k.hr, e, f = s, r, c; docume, n, t.he, a, d.appendChi, l, d(li, n, k); }); }; return ( <div, className="spa, c, e-y-6" > <div, className="flex, justif, y-between, item, s-cent, e, r" > <h2, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-9, 0, 0" >Performance, Optimize, r</h2> <butt, o, n onCli, c, k={onClo, s, e} classNa, m, e="te, x, t-gr, a, y-400, hove, r: te, x, t-gr, a, y-6, 0, 0" > <X, className="h-6 w-6" /> </butt, o, n> </d, i, v> <div, className="grid, gri, d-co, l, s-1 m d:gr, i, d-co, l, s-2, ga, p-4" > {optimizationOptio, n, s.m, a, p((opti, o, n) => ( <d, i, v k, e, y={opti, o, n.k, e, y} classNa, m, e={`p-4, border, rounded-lg, transitio, n-colo, r, s ${` opti, o, n.enabl, e, d;' ? 'bord, e, r-gre, e, n-200, b, g-gre, e, n-50'' : 'bord, e, r-gr, a, y-200, b, g-gr, a, y-50' }`}` > <div, className="flex, item, s-start, spac, e-x-3" > <div, className="fl, e, x-shri, n, k-0" > <opti, o, n.icon, className={`h-5 w-5 ${`' opti, o, n.enabl, e, d ? 'te, x, t-gre, e, n-6, 0, 0' : 'te, x, t-gr, a, y-4, 0, 0' }`} />` </d, i, v> <div, className="fl, e, x-1, mi, n-w-0" > <div, className="flex, item, s-center, justif, y-betwe, e, n" > <h3, className="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-9, 0, 0" > {opti, o, n.lab, e, l} </h3> <label, className="relative, inlin, e-flex, item, s-center, curso, r-point, e, r" > <inp, u, t ty, p, e="checkb, o, x" check, e, d={opti, o, n.enabl, e, d} onChan, g, e={() => handleOptimizationTogg, l, e(opti, o, n.k, e, y)} classNa, m, e="sr-only, pee, r" />' <div, className="w-1, 1, h-6, b, g-gr, a, y-200, pee, r-foc, u, s: outli, n, e-none, pee, r-foc, u, s:ri, n, g-4, pee, r-foc, u, s:ri, n, g-bl, u, e-300, rounde, d-full, peer, peer-check, e, d:aft, e, r:transla, t, e-x-full, pee, r-check, e, d:aft, e, r:bord, e, r-white, afte, r:conte, n, t-[''] aft, e, r:absolute, afte, r:t, o, p-[2, p, x] aft, e, r:le, f, t-[2, p, x] aft, e, r:bg-white, afte, r:bord, e, r-gr, a, y-300, afte, r:border, afte, r:round, e, d-full, afte, r:h-5, afte, r:w-5, afte, r:transiti, o, n-all, pee, r-chec, k, e d:bg-bl, u, e-6, 0, 0" ></d, i, v> </lab, e, l> </d, i, v> <p, className="te, x, t-xs, tex, t-gr, a, y-500, m, t-1" > {opti, o, n.descripti, o, n} </p> </d, i, v> </d, i, v> </d, i, v> ))} </d, i, v> {currentOptimizatio, n, s.leng, t, h > 0 && ( <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4" > <h3, className="te, x, t-sm, fon, t-medium, tex, t-gr, a, y-900, m, b-2" >Optimization, Progres, s</h3> <div, className="spa, c, e-y-1" > {currentOptimizatio, n, s.m, a, p((optimizati, o, n, ind, e, x) => ( <d, i, v k, e, y={ind, e, x} classNa, m, e={`te, x, t-sm ${`' optimizati, o, n.startsWi, t, h('✓') ? 'te, x, t-gre, e, n-6, 0, 0' : 'te, x, t-gr, a, y-6, 0, 0' }`}` > {optimizati, o, n} </d, i, v> ))} </d, i, v> </d, i, v> )} <div, className="flex, justif, y-end, spac, e-x-3" > <butt, o, n onCli, c, k={onClo, s, e} classNa, m, e="px-4, p, y-2, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, b, g-white, border, border-gr, a, y-300, rounde, d-md, hove, r: bg-gr, a, y-50, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-offs, e, t-2, foc, u s:ri, n, g-bl, u, e-5, 0, 0" > Clo, s, e; </butt, o, n> <butt, o, n onCli, c, k={() => { setCurrentOptimizatio, n, s([]); // Trigger, r, e-optimizati, o, n; }} classNa, m, e="px-4, p, y-2, tex, t-sm, fon, t-medium, tex, t-white, b, g-bl, u, e-600, border, border-transparent, rounde, d-md, hove, r: bg-bl, u, e-700, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-offs, e, t-2, foc, u s:ri, n, g-bl, u, e-5, 0, 0" > Apply, Optimization, s; </butt, o, n> </d, i, v> </d, i, v> );  // Optimize, image, s const, optimizeImage, s = () => {' const, image, s = docume, n, t.querySelectorA, l, l('i, m, g'); imag, e, s.forEa, c, h(i, m, g => { // Add, loadin, g="la, z, y" for, no, n-critical, image, s' if (!i, m, g.hasAttribu, t, e('loadi, n, g')) {' i, m, g.setAttribu, t, e('loadi, n, g', 'la, z, y'); } // Add, decodin, g="asy, n, c" for, better, performance' if (!i, m, g.hasAttribu, t, e('decodi, n, g')) {' i, m, g.setAttribu, t, e('decodi, n, g', 'asy, n, c'); } }); }; // Initialize, performance, optimizations preloadCriticalResourc, e, s(); optimizeImag, e, s(); // Set, up, intersection observer, for, lazy loadi, n, g const, observe, r = new, IntersectionObserve, r((entri, e, s) => { entri, e, s.forEa, c, h(ent, r, y => { if (ent, r, y.isIntersecti, n, g) { const, im, g = ent, r, y.target, as, HTMLImageElement; if (i, m, g.datas, e, t.s, r, c) { i, m, g.s, r, c = i, m, g.datas, e, t.s, r, c;' i, m, g.removeAttribu, t, e('da, t, a-s, r, c'); observ, e, r.unobser, v, e(i, m, g); } } }); }); // Observe, all, images with, dat, a-s, r, c' const, lazyImage, s = docume, n, t.querySelectorA, l, l('i, m, g[da, t, a-s, r, c]'); lazyImag, e, s.forEa, c, h(i, m, g => observ, e, r.obser, v, e(i, m, g)); return () => { observ, e, r.disconne, c, t(); }; }, []); return, nul, l; }; export default PerformanceOptimizer;'
