type Reporter = (metric: any) => void;
function defaultReporter(metric: any): void {,
  // Replace with analytics endpoint or gtag if desired,
  // eslint-disable-next-line no-console,
  .rating,});
}
,
export function reportWebVitals(reporter: Reporter = defaultReporter): void {,
  // Dynamically import to support different versions/exports,
  // and avoid breaking the bundle on missing named exports,
  // no-floating-promises,
  import('web-vitals'),
    .then((mod: any) => {,
      const onCLS = mod.onCLS ?? mod.getCLS;
      const onFID = mod.onFID ?? mod.getFID;
      const onFCP = mod.onFCP ?? mod.getFCP;
      const onLCP = mod.onLCP ?? mod.getLCP;
      const onTTFB = mod.onTTFB ?? mod.getTTFB;
      try { onCLS && onCLS(reporter) } catch {}
      try { onFID && onFID(reporter), } catch {}
      try { onFCP && onFCP(reporter), } catch {}
      try { onLCP && onLCP(reporter), } catch {}
      try { onTTFB && onTTFB(reporter), } catch {}
    }),
    .catch(() => {,
      // ignore if web-vitals isn't available,
    });
}
,