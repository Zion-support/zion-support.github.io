// import, React { useEffec, t } fro, m \"reac, t\" interface, PerformanceMetrics {; fc, p?: numbe, r; lc, p?: numbe, r; fi, d?: numbe, r; cl, s?: numbe, r} ttf, b?: numbe, r} fm, p?: numbe, r} ; \"; interface, ApiResponse<T = unknow, n> {/* TOD, O: Fix, JSX expressio, n */}
  a: \'T\'; stat, u} s: \'numbe, r\'}messag, e?: strin, g} ; interface, User {/* TOD, O: Fix, JSX expressio, n */}"
  l: \'strin, g\'; na, m; e: \'strin, g\'} ro, l}\"} e: \"admi, n\" | \"use, r\" | \"gues, t\"} ; interface, Service {/* TOD, O: Fix, JSX expressio, n */}"
  l: \'strin, g\'; na, m; e: \'strin, g\'} ro, l}\"} e: \"admi, n\" | \"use, r\" | \"gues, t\"} ; interface, Service {/* TOD, O: Fix, JSX expressio, n */}
  n: \'string\'; pric} e: \'number\'}} categor y: \'string\'} ; interface FormData {; } [ke,
  y: \'string]: string | number | boolean | File\'} ; interface ComponentProps {; className?: string} children?: React.ReactNode [ke,
  y: \'string]: unknown\'} ; const,
  PerformanceMonitor: React.F,
  C: = () => {, useEffect(() => {} i,"
  f: (typeof window = == \"undefined\") return}const,
  metrics: PerformanceMetric,
  s: = {} ; const fcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: \'= entry.startTime\',\"}}}\"} })\" fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"paint\"]})\" const lcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: \'= lastEntry.startTime\',\";}}})\" lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"largest-contentful-paint\"]})\" const fidObserver = new PerformanceObserver((list) => {; metrics.fid = (entry as any).processingStart - entry.startTime,\";}}}\"})\" fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"first-input\"]})\" le,"
  t: \'clsValue = 0\'; const clsObserver = new PerformanceObserver((list) => {\";interface PerformanceMetrics {; const fcpObserver = new PerformanceObserver((list) => {; for (const entry of list.getEntries()) {\"; if (entry.name === \"first-contentful-paint\") {\"} metrics.fc,"
  p: \'= entry.startTime\',\"}} }\"} ;})\" fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"paint\"]})\" const lcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: \'= lastEntry.startTime\',\"}}})\" lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"largest-contentful-paint\"]})\" const fidObserver = new PerformanceObserver((list) => {; metrics.fid = (entry as any).processingStart - entry.startTime,\"}}}\"})\" fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"first-input\"]})\" le,"
  t: \'clsValue = 0\'; const clsObserver = new PerformanceObserver((list) => {\";interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number}} fmp?: number} ; const,"
  PerformanceMonitor: React.FC = () => {} if (typeof window === \"undefined\") return}; const,
  metrics: PerformanceMetrics = {} ; const metric s: PerformanceMetrics = {} ; const,"
  metric, s: PerformanceMetric, s = {} ; fo, r (const, entry of, list.getEntrie, s()) {; i, f (entr, y.nam, e = == \"firs, t-contentfu, l-pain, t\") {; metric, s.fc, p = entr, y.startTim, e}}} ;});} fcpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: [\"paint\"] });} const fcpObserver = new PerformanceObserver();} const lcpObserver = new PerformanceObserver(list => {) metrics.lcp = lastEntry.startTime}}});} lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"largest-contentful-paint\"] });} metrics.fcp = entry.startTime,\"})\" lcpObserver.observe();} metrics.fid = (entry as unknown).processingStart - entry.startTime;} ; const fidObserver = new PerformanceObserver(list => {\"} fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"firs, t-inpu, t\"] });} let, clsValue = 0; i, f (!(entry, as an, y).hadRecentInpu, t) {; clsValu, e += (entry, as an, y).valu, e} ; metric, s.cl, s = clsValu, e;})\" clsObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: [\"layout-shift\"]})\" const navigationEntry = performance.getEntriesByType(\"navigation\")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,\"}}\"; const fmpObserver = new PerformanceObserver((list) => {\"; if (entry.name === \"first-meaningful-paint\") {\"} metrics.fm,"
  p: \'= entry.startTime\',\"}}\";});} clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"layou, t-shif, t\"] });} const, clsObserver = new, PerformanceObserver();} const, navigationEntry = performanc, e.getEntriesByTyp, e(\" \"navigatio, n\" )[0] as, PerformanceNavigationTiming; i, f (navigationEntr, y) {; metric, s.ttf, b =; navigationEntr, y.responseStar, t - navigationEntr, y.requestStar, t} metric, s.fi, d = (entry, as an, y).processingStar, t - entr, y.startTim, e}\"; i, f (!(entry, as unknow, n).hadRecentInpu, t) {; clsValu, e += (entry, as unknow, n).valu, e}\"});} } ; i, f (entr, y.nam, e = == \"firs, t-meaningfu, l-pain, t\") {; metric, s.fm, p = entr, y.startTim, e}}}\" fmpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: [\"pain, t\"] })})\" fmpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: [\"paint\"]})\" const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {,\"} metric_,"
  1: \"fcp,\",metric_,"
  2: \"lcp,\",\" metric_,"
  3: \"fid,\",metric_,"
  4: \"cls,\",\" metric_,"
  5: \"ttfb}\"},valu,
  e: Math.round(metrics.fc)
  p: || 0),non_interactio,"
  n: \'tru\',e})}\" i,"
  f: (proces, s.en, v['NODE_EN, V'] = == \"productio, n\") {/* TOD, O: Fix, JSX expressio, n */}"
  s: {\"} \"Content-Type\": \"application/json}\"},\" bod,
  y: JSO, N.stringif, y({} u, r)
  l: \'window.location.hre\',f)timestam,"
  p: Date.now()}metrics})}).catch(console.error)} ; window.addEventListener(\"beforeunload\")sendMetrics);} setTimeout(sendMetrics)5000);} retur,"
  n: () => {\"}; fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"paint\"] });} const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {\"} metric_,\" 1: \"fcp\",metric_,"
  2: \"lcp\",\" metric_,"
  3: \"fid\",metric_,"
  4: \"cls\"}\" metric_,"
  5: \"ttfb\"},valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  n: \'true\'})} ; if (process.env['NODE_ENV'] = == \"production\") {; fetch()}}} const fmpObserver = new PerformanceObserver(list => {) metrics.fmp = entry.startTime)\" \"; fmpObserver.observe()}}} if (typeof window !== \"undefined\" && (window as any).gtag) {/* TODO: Fix JSX expression */}"
  4: \"cls\"}\" metric_,"
  5: \"ttfb\"}); valu,
  e: Math.round(metrics.fcp || 0); non_interactio,
  n: \'true\'});} metric_,"
  5: \"ttfb\"},\" non_interactio,"
  n: \'true\'}) (window as any).gtag(\"event web_vitals\" {/* TODO: Fix JSX expression */}"
  4: \"cls\"}metric_,")
  5: \"ttfb\"})valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  n: \'tru, e\'; ; i, f (proces, s.en, v['NODE_EN, V'] = == \"productio, n\") {/* TOD, O: Fix, JSX expressio, n */}"
  p: Date.now()} metrics}; metrics})}).catch(console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener(\"beforeunload\")sendMetrics)}\"},[]);} retur,
  n: \'null,"
  export: default PerformanceMonitor\',\" window.removeEventListener(\"beforeunload\")sendMetrics)}},[]);} return null export default PerformanceMonitor;\" return null; export default PerformanceMonitor;; metho,"
  d: \"POST\",header,"
  s: {\"}; \"Content-Type\": \"application/json\"},bod,</T>
  y: JSON.stringify({) ur} l: \'window.location.href\')timestam,"</T>
  p: Date.now()}metrics})}).catch(console.error)} ; return null export default PerformanceMonitor\\" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()\\"; window.removeEventListener(\\"beforeunload\\")sendMetrics);} },[]);} \\" return null; \\"' const React { useEffect } from "react" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; "; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */}"
  a: "T"; stat, u} s: "numbe, r"}messag, e?: strin, g} ; interface, User {/* TOD, O: Fix, JSX expressio, n */}"
  l: "strin, g"; na, m; e: "strin, g"} ro, l}"} e: "admi, n" | "use, r" | "gues, t"} ; interface, Service {/* TOD, O: Fix, JSX expressio, n */}"
  l: "strin, g"; na, m; e: "strin, g"} ro, l}"} e: "admi, n" | "use, r" | "gues, t"} ; interface, Service {/* TOD, O: Fix, JSX expressio, n */}"
  n: "string"; pric} e: "number"}} categor y: "string"} ; interface FormData {; } [ke,"
  y: "string]: string | number | boolean | File"} ; interface ComponentProps {; className?: string} children?: React.ReactNode [ke,"
  y: "string]: unknown"} ; const,
  PerformanceMonitor: React.F,
  C: = () => {, useEffect(() => {} i,"
  f: (typeof window = == "undefined") return}const,
  metrics: PerformanceMetric,
  s: = {} ; const fcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: "= entry.startTime","}}}"} })" fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"]})" const lcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: "= lastEntry.startTime","}}})"; lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"]})" const fidObserver = new PerformanceObserver((list) => {; metrics.fid = (entry as any).processingStart - entry.startTime,";}}}"})" fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["first-input"]})" le,"
  t: "clsValue = 0"; const clsObserver = new PerformanceObserver((list) => {"interface PerformanceMetrics {; const fcpObserver = new PerformanceObserver((list) => {; for (const entry of list.getEntries()) {"; if (entry.name === "first-contentful-paint") {"} metrics.fc,"
  p: "= entry.startTime","}} }"} ;})" fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"]})" const lcpObserver = new PerformanceObserver((list) => {; const entries = list.getEntries(); const lastEntry = entries[entries.length - 1]} metrics.lc,"
  p: "= lastEntry.startTime","}})"; lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"]})" const fidObserver = new PerformanceObserver((list) => {; metrics.fid = (entry as any).processingStart - entry.startTime,"}}}"})" fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["first-input"]})" le,"
  t: "clsValue = 0"; const clsObserver = new PerformanceObserver((list) => {"interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number}} fmp?: number} ; const,"
  PerformanceMonitor: React.FC = () => {} if (typeof window === "undefined") return}; const,
  metrics: PerformanceMetrics = {} ; const metric s: PerformanceMetrics = {} ; const,"
  metric, s: PerformanceMetric, s = {} ; fo, r (const, entry of, list.getEntrie, s()) {; i, f (entr, y.nam, e = == "firs, t-contentfu, l-pain, t") {; metric, s.fc, p = entr, y.startTim, e}}} ;});} fcpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["paint"] });} const fcpObserver = new PerformanceObserver();} const lcpObserver = new PerformanceObserver(list => {) metrics.lcp = lastEntry.startTime}}});} lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"] });} metrics.fcp = entry.startTime,"})" lcpObserver.observe();} metrics.fid = (entry as unknown).processingStart - entry.startTime;} ; const fidObserver = new PerformanceObserver(list => {"} fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["firs, t-inpu, t"] });} let, clsValue = 0; i, f (!(entry, as an, y).hadRecentInpu, t) {; clsValu, e += (entry, as an, y).valu, e} ; metric, s.cl, s = clsValu, e;})" clsObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["layout-shift"]})" const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,"}}"; const fmpObserver = new PerformanceObserver((list) => {"; if (entry.name === "first-meaningful-paint") {"} metrics.fm,"
  p: "= entry.startTime","}}";});} clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["layou, t-shif, t"] });} const, clsObserver = new, PerformanceObserver();} const, navigationEntry = performanc, e.getEntriesByTyp, e(" "navigatio, n" )[0] as, PerformanceNavigationTiming; i, f (navigationEntr, y) {; metric, s.ttf, b =; navigationEntr, y.responseStar, t - navigationEntr, y.requestStar, t} metric, s.fi, d = (entry, as an, y).processingStar, t - entr, y.startTim, e}"; i, f (!(entry, as unknow, n).hadRecentInpu, t) {; clsValu, e += (entry, as unknow, n).valu, e}"});} } ; i, f (entr, y.nam, e = == "firs, t-meaningfu, l-pain, t") {; metric, s.fm, p = entr, y.startTim, e}}}" fmpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["pain, t"] })})" fmpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["paint"]})" const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {,"} metric_,"
  1: "fcp,",metric_,"
  2: "lcp,"," metric_,"
  3: "fid,",metric_,"
  4: "cls,"," metric_,"
  5: "ttfb}"},valu,
  e: Math.round(metrics.fc)
  p: | 0),non_interactio,"
  n: "tru",e})}" i,"
  f: (proces, s.en, v['NODE_EN, V'] = == "productio, n") {/* TOD, O: Fix, JSX expressio, n */}"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSON.stringify({} ur,")
  l: "window.location.hre",f)timestam,"
  p: Date.now()}metrics})}).catch(console.error)} ; window.addEventListener("beforeunload")sendMetrics);} setTimeout(sendMetrics)5000);} retur,"
  n: () => {"}; fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"] });} const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {"} metric_," 1: "fcp",metric_,"
  2: "lcp"," metric_,"
  3: "fid",metric_,"
  4: "cls"}" metric_,"
  5: "ttfb"},valu,
  e: Math.round(metrics.fcp | 0),non_interactio,"
  n: "true"})} ; if (process.env['NODE_ENV'] = == "production") {; fetch()}}} const fmpObserver = new PerformanceObserver(list => {) metrics.fmp = entry.startTime)" "; fmpObserver.observe()}}} if (typeof window !== "undefined" && (window as any).gtag) {/* TODO: Fix JSX expression */}"
  4: "cls"}" metric_,"
  5: "ttfb"}); valu,
  e: Math.round(metrics.fcp | 0); non_interactio,"
  n: "true"});} metric_,"
  5: "ttfb"}," non_interactio,"
  n: "true"}) (window as any).gtag("event web_vitals" {/* TODO: Fix JSX expression */}"
  4: "cls"}metric_,")
  5: "ttfb"})valu,
  e: Math.round(metrics.fcp | 0),non_interactio,"
  n: "tru, e"; ; i, f (proces, s.en, v['NODE_EN, V'] = == "productio, n") {/* TOD, O: Fix, JSX expressio, n */}"
  p: Date.now()} metrics}; metrics})}).catch(console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener("beforeunload")sendMetrics)}"},[]);} retur,"
  n: "null,"
  export: default PerformanceMonitor"," window.removeEventListener("beforeunload")sendMetrics)}},[]);} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,"</T>
  y: JSON.stringify({) ur} l: "window.location.href")timestam,"</T>
  p: Date.now()}metrics})}).catch(console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics);} },[]);} " return null; "'"'"' import _React { useEffect } from "react" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; "; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */}
  a: 'T; stat, u} s: 'numbe, r}messag, e?: strin, g} ; interface, User {/* TOD, O: Fix, JSX expressio, n */}"
  l: 'strin, g; na, m; e: 'strin, g} ro, l}"} e: "admi, n" | "use, r" | "gues, t"} ; interface, Service {/* TOD, O: Fix, JSX expressio, n */}"
  l: 'strin, g; na, m; e: 'strin, g} ro, l}"} e: "admi, n" | "use, r" | "gues, t"} ; interface, Service {/* TOD, O: Fix, JSX expressio, n */}
  n: 'string; pric} e: 'number}} categor y: 'string'} ; interface FormData {; } [ke,
  y: 'string]: string | number | boolean | File'} ; interface ComponentProps {; className?: string} children?: _React.ReactNode [ke,
  y: 'string]: unknown'} ; const,
  PerformanceMonitor: _React.F,
  C: = () => {, useEffect(() => {} i,"
  f: (typeof window = == "undefined") return}const,
  metrics: PerformanceMetric,
  s: = {} ; const fcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: '= entry.startTime,"}}}"} })" fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"]})" const lcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: '= lastEntry.startTime,";}}})" lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"]})" const fidObserver = new PerformanceObserver((list) => {; metrics.fid = (entry as) any).processingStart - entry.startTime,";}}}"})" fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["first-input"]})" le,"
  t: 'clsValue = 0; const clsObserver = new PerformanceObserver((list) => {";interface PerformanceMetrics {; const fcpObserver = new PerformanceObserver((list) => {; for (const entry of list.getEntries()) {"; if (entry.name === "first-contentful-paint") {"} metrics.fc,"
  p: '= entry.startTime,"}} }"} ;})" fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"]})" const lcpObserver = new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}"
  p: '= lastEntry.startTime,"}}})" lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"]})" const fidObserver = new PerformanceObserver((list) => {; metrics.fid = (entry as) any).processingStart - entry.startTime,"}}}"})" fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["first-input"]})" le,"
  t: 'clsValue = 0; const clsObserver = new PerformanceObserver((list) => {";interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number}} fmp?: number} ; const,"
  PerformanceMonitor: _React.FC = () => {} if (typeof window === "undefined") return}; const,
  metrics: PerformanceMetrics = {} ; const metric s: PerformanceMetrics = {} ; const,"
  metric, s: PerformanceMetric, s = {} ; fo, r (const, entry of, list.getEntrie, s()) {; i, f (entr, y.nam, e = == "firs, t-contentfu, l-pain, t") {; metric, s.fc, p = entr, y.startTim, e}}} ;});} fcpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["paint"] });} const fcpObserver = new PerformanceObserver();} const lcpObserver = new PerformanceObserver(list => {) metrics.lcp = lastEntry.startTime}}});} lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"] });} metrics.fcp = entry.startTime,"})" lcpObserver.observe();} metrics.fid = (entry as) unknown).processingStart - entry.startTime;} ; const fidObserver = new PerformanceObserver(list => {"} fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["firs, t-inpu, t"] });} let, clsValue = 0; i, f (!(entry, as) an, y).hadRecentInpu, t) {; clsValu, e += (entry, as} an, y).valu, e} ; metric, s.cl, s = clsValu, e;})" clsObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["layout-shift"]})" const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,"}}"; const fmpObserver = new PerformanceObserver((list) => {"; if (entry.name === "first-meaningful-paint") {"} metrics.fm,"
  p: '= entry.startTime,"}}";});} clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["layout-shift"] });} const clsObserver = new PerformanceObserver();} const navigationEntry = performance.getEntriesByType(" "navigation" )[0] as PerformanceNavigationTiming; if (navigationEntry) {; metrics.ttfb =; navigationEntry.responseStart - navigationEntry.requestStart; metrics.fid = (entry as) any).processingStart - entry.startTime,"; if (!(entry as) unknown).hadRecentInput) {} clsValue += (entry as} unknown).value}"});} } ; if (entry.name = == "first-meaningful-paint") {; metrics.fmp = entry.startTime}}}" fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["pain, t"] })})" fmpObserve, r.observ, e({/* TOD, O: Fix, JSX expressio, n */}")
  s: ["paint"]})" const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {,"} metric_,"
  1: "fcp,",metric_,"
  2: "lcp,"," metric_,"
  3: "fid,",metric_,"
  4: "cls,"," metric_,"
  5: "ttfb}"},valu,
  e: Math.round(metrics.fc)
  p: || 0),non_interactio,"
  n: 'tru e})}" i,"
  f: (proces, s.en, v['NODE_EN, V'] = == "productio, n") {/* TOD, O: Fix, JSX expressio, n */}"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSO, N.stringif, y({} u, r)
  l: 'window.location.hre f)timestam,"
  p: Date.now()}metrics})}).catch(_console.error)} ; window.addEventListener("beforeunload")sendMetrics);} setTimeout(sendMetrics)5000);} retur,"
  n: () => {"}; fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"] });} const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {"} metric_," 1: "fcp",metric_,"
  2: "lcp"," metric_,"
  3: "fid",metric_,"
  4: "cls"}" metric_,"
  5: "ttfb"},valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  n: 'true'})} ; if (process.env['NODE_ENV'] = == "production") {; fetch()}}} const fmpObserver = new PerformanceObserver(list => {) metrics.fmp = entry.startTime)" "; fmpObserver.observe()}}} if (typeof window !== "undefined" && (window as) any).gtag) {/* TODO: Fix JSX expression */}"
  4: "cls"}" metric_,"
  5: "ttfb"}); valu,
  e: Math.round(metrics.fcp || 0); non_interactio,
  n: 'true'});} metric_,"
  5: "ttfb"}," non_interactio,"
  n: 'true'}) (window as) any).gtag("event web_vitals" {/* TODO: Fix JSX expression */}"
  4: "cls"}metric_,")
  5: "ttfb"})valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  n: 'tru, e; ; i, f (proces, s.en, v['NODE_EN, V'] = == "productio, n") {/* TOD, O: Fix, JSX expressio, n */}"
  p: Date.now()} metrics}; metrics})}).catch(_console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener("beforeunload")sendMetrics)}"},[]);} retur,
  n: 'null,"
  export: default PerformanceMonitor," window.removeEventListener("beforeunload")sendMetrics)}},[]);} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,
  y: JSON.stringify({) ur} l: 'window.location.href)timestam,"</T>
  p: Date.now()}metrics})}).catch(_console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics);} },[]);} " return null; "'"</T>