  n: \'string\'; pric} e: \'number\'}} categor,y: \'string\'} ; interface FormData {; } [ke,
  y: \'string]: string | number | boolean | File\'} ; interface ComponentProps {; className?: string} children?: React.ReactNode [ke,
  y: \'string]: unknown\'} ; const,
  PerformanceMonitor: React.F,
  C: = () => {, useEffect(() => {} i,"
  f: (typeof window = == \"undefined\") return}const,
  metrics: PerformanceMetric,
  s: [\"first-input\"]})\" le,"
  t: \'clsValue = 0\'; const clsObserver = new PerformanceObserver((list) => {\";interface PerformanceMetrics {; const fcpObserver = new PerformanceObserver((list) => {; for (const entry of list.getEntries()) {\"; if (entry.name === \"first-contentful-paint\") {\"} metrics.fc,"
  s: [\"first-input\"]})\" le,"
  t: \'clsValue = 0\'; const clsObserver = new PerformanceObserver((list) => {\";interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number}} fmp?: number} ; const,"
  PerformanceMonitor: React.FC = () => {} if (typeof window === \"undefined\") return}; const,
  metrics: PerformanceMetrics = {} ; const metric,s: PerformanceMetrics = {} ; const,"
  s: [\"layout-shift\"]})\" const navigationEntry = performance.getEntriesByType(\"navigation\")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,\"}}\"; const fmpObserver = new PerformanceObserver((list) => {\"; if (entry.name === \"first-meaningful-paint\") {\"} metrics.fm,"
  p: {,\"} metric_,"
  1: \"fcp,\",metric_,"
  2: \"lcp,\",\" metric_,"
  3: \"fid,\",metric_,"
  4: \"cls,\",\" metric_,"
  5: \"ttfb}\"},valu,
  e: Math.round(metrics.fc)
  p: || 0),non_interactio,"
  n: \'tru\',e})}\" i,"
  s: {\"} \"Content-Type\": \"application/json}\"},\" bod,
  y: JSON.stringify({} ur)
  l: \'window.location.hre\',f)timestam,"
  p: Date.now()}metrics})}).catch(console.error)} ; window.addEventListener(\"beforeunload\")sendMetrics);} setTimeout(sendMetrics)5000);} retur,"
  p: {\"} metric_,\" 1: \"fcp\",metric_,"
  2: \"lcp\",\" metric_,"
  3: \"fid\",metric_,"
  4: \"cls\"}\" metric_,"
  5: \"ttfb\"},valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  4: \"cls\"}\" metric_,"
  5: \"ttfb\"}); valu,
  e: Math.round(metrics.fcp || 0); non_interactio,
  n: \'true\'});} metric_,"
  5: \"ttfb\"},\" non_interactio,"
  4: \"cls\"}metric_,")
  5: \"ttfb\"})valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  p: Date.now()} metrics}; metrics})}).catch(console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener(\"beforeunload\")sendMetrics)}\"},[]);} retur,
  n: \'null,"
  export: default PerformanceMonitor\',\" window.removeEventListener(\"beforeunload\")sendMetrics)}},[]);} return null export default PerformanceMonitor;\" return null; export default PerformanceMonitor;; metho,"
  d: \"POST\",header,"
  s: {\"}; \"Content-Type\": \"application/json\"},bod,
  y: JSON.stringify({) ur} l: \'window.location.href\')timestam,"
  n: "string"; pric} e: "number"}} categor,y: "string"} ; interface FormData {; } [ke,"
  y: "string]: string | number | boolean | File"} ; interface ComponentProps {; className?: string} children?: React.ReactNode [ke,"
  y: "string]: unknown"} ; const,
  PerformanceMonitor: React.F,
  C: = () => {, useEffect(() => {} i,"
  f: (typeof window = == "undefined") return}const,
  metrics: PerformanceMetric,
  s: ["first-input"]})" le,"
  t: "clsValue = 0"; const clsObserver = new PerformanceObserver((list) => {"interface PerformanceMetrics {; const fcpObserver = new PerformanceObserver((list) => {; for (const entry of list.getEntries()) {"; if (entry.name === "first-contentful-paint") {"} metrics.fc,"
  s: ["paint"]})" const lcpObserver = new PerformanceObserver((list) => {; const entries = list.getEntries(); const lastEntry = entries[entries.length - 1]} metrics.lc,"
  s: ["first-input"]})" le,"
  t: "clsValue = 0"; const clsObserver = new PerformanceObserver((list) => {"interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number}} fmp?: number} ; const,"
  PerformanceMonitor: React.FC = () => {} if (typeof window === "undefined") return}; const,
  metrics: PerformanceMetrics = {} ; const metric,s: PerformanceMetrics = {} ; const,"
  s: ["layout-shift"]})" const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,"}}"; const fmpObserver = new PerformanceObserver((list) => {"; if (entry.name === "first-meaningful-paint") {"} metrics.fm,"
  p: {,"} metric_,"
  1: "fcp,",metric_,"
  2: "lcp,"," metric_,"
  3: "fid,",metric_,"
  4: "cls,"," metric_,"
  5: "ttfb}"},valu,
  e: Math.round(metrics.fc)
  p: | 0),non_interactio,"
  n: "tru",e})}" i,"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSON.stringify({} ur,")
  l: "window.location.hre",f)timestam,"
  p: Date.now()}metrics})}).catch(console.error)} ; window.addEventListener("beforeunload")sendMetrics);} setTimeout(sendMetrics)5000);} retur,"
  p: {"} metric_," 1: "fcp",metric_,"
  2: "lcp"," metric_,"
  3: "fid",metric_,"
  4: "cls"}" metric_,"
  5: "ttfb"},valu,
  e: Math.round(metrics.fcp | 0),non_interactio,"
  4: "cls"}" metric_,"
  5: "ttfb"}); valu,
  e: Math.round(metrics.fcp | 0); non_interactio,"
  n: "true"});} metric_,"
  5: "ttfb"}," non_interactio,"
  4: "cls"}metric_,")
  5: "ttfb"})valu,
  e: Math.round(metrics.fcp | 0),non_interactio,"
  p: Date.now()} metrics}; metrics})}).catch(console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener("beforeunload")sendMetrics)}"},[]);} retur,"
  n: "null,"
  export: default PerformanceMonitor"," window.removeEventListener("beforeunload")sendMetrics)}},[]);} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,"
  y: JSON.stringify({) ur} l: "window.location.href")timestam,"
  n: 'string; pric} e: 'number}} categor,y: 'string'} ; interface FormData {; } [ke,
  y: 'string]: string | number | boolean | File'} ; interface ComponentProps {; className?: string} children?: _React.ReactNode [ke,
  y: 'string]: unknown'} ; const,
  PerformanceMonitor: _React.F,
  C: = () => {, useEffect(() => {} i,"
  f: (typeof window = == "undefined") return}const,
  metrics: PerformanceMetric,
  s: ["first-input"]})" le,"
  t: 'clsValue = 0; const clsObserver = new PerformanceObserver((list) => {";interface PerformanceMetrics {; const fcpObserver = new PerformanceObserver((list) => {; for (const entry of list.getEntries()) {"; if (entry.name === "first-contentful-paint") {"} metrics.fc,"
  s: ["first-input"]})" le,"
  t: 'clsValue = 0; const clsObserver = new PerformanceObserver((list) => {";interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number}} fmp?: number} ; const,"
  PerformanceMonitor: _React.FC = () => {} if (typeof window === "undefined") return}; const,
  metrics: PerformanceMetrics = {} ; const metric,s: PerformanceMetrics = {} ; const,"
  s: ["layout-shift"]})" const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,"}}"; const fmpObserver = new PerformanceObserver((list) => {"; if (entry.name === "first-meaningful-paint") {"} metrics.fm,"
  p: {,"} metric_,"
  1: "fcp,",metric_,"
  2: "lcp,"," metric_,"
  3: "fid,",metric_,"
  4: "cls,"," metric_,"
  5: "ttfb}"},valu,
  e: Math.round(metrics.fc)
  p: || 0),non_interactio,"
  n: 'tru,e})}" i,"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSON.stringify({} ur)
  p: Date.now()}metrics})}).catch(_console.error)} ; window.addEventListener("beforeunload")sendMetrics);} setTimeout(sendMetrics)5000);} retur,"
  p: {"} metric_," 1: "fcp",metric_,"
  2: "lcp"," metric_,"
  3: "fid",metric_,"
  4: "cls"}" metric_,"
  5: "ttfb"},valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  4: "cls"}" metric_,"
  5: "ttfb"}); valu,
  e: Math.round(metrics.fcp || 0); non_interactio,
  n: 'true'});} metric_,"
  5: "ttfb"}," non_interactio,"
  4: "cls"}metric_,")
  5: "ttfb"})valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  p: Date.now()} metrics}; metrics})}).catch(_console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener("beforeunload")sendMetrics)}"},[]);} retur,
  n: 'null,"
  export: default PerformanceMonitor," window.removeEventListener("beforeunload")sendMetrics)}},[]);} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,
  y: JSON.stringify({) ur} l: 'window.location.href)timestam,"
  p: Date.now()}metrics})}).catch(_console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics);} },[]);} " return null; "'"