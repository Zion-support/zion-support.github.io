<<<<<<< HEAD
// import React { useEffect } from \"react\" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; \"; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */}
  a: \'T\'; statu} s: \'number\'}message?: string} ; interface User {/* TODO: Fix JSX expression */}"
  l: \'string\'; nam; e: \'string\'} rol}\"} e: \"admin\" | \"user\" | \"guest\"} ; interface Service {/* TODO: Fix JSX expression */}"
  l: \'string\'; nam; e: \'string\'} rol}\"} e: \"admin\" | \"user\" | \"guest\"} ; interface Service {/* TODO: Fix JSX expression */}
  n: \'string\'; pric} e: \'number\'}} categor,y: \'string\'} ; interface FormData {; } [ke,
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
  metrics: PerformanceMetrics = {} ; const metric,s: PerformanceMetrics = {} ; const,"
  metrics: PerformanceMetrics = {} ; for (const entry of list.getEntries()) {; if (entry.name = == \"first-contentful-paint\") {; metrics.fcp = entry.startTime}}} ;});} fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"paint\"] });} const fcpObserver = new PerformanceObserver();} const lcpObserver = new PerformanceObserver(list => {) metrics.lcp = lastEntry.startTime}}});} lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"largest-contentful-paint\"] });} metrics.fcp = entry.startTime,\"})\" lcpObserver.observe();} metrics.fid = (entry as unknown).processingStart - entry.startTime;} ; const fidObserver = new PerformanceObserver(list => {\"} fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"first-input\"] });} let clsValue = 0; if (!(entry as any).hadRecentInput) {; clsValue += (entry as any).value} ; metrics.cls = clsValue;})\" clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"layout-shift\"]})\" const navigationEntry = performance.getEntriesByType(\"navigation\")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,\"}}\"; const fmpObserver = new PerformanceObserver((list) => {\"; if (entry.name === \"first-meaningful-paint\") {\"} metrics.fm,"
  p: \'= entry.startTime\',\"}}\";});} clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"layout-shift\"] });} const clsObserver = new PerformanceObserver();} const navigationEntry = performance.getEntriesByType(\" \"navigation\" )[0] as PerformanceNavigationTiming; if (navigationEntry) {; metrics.ttfb =; navigationEntry.responseStart - navigationEntry.requestStart} metrics.fid = (entry as any).processingStart - entry.startTime}\"; if (!(entry as unknown).hadRecentInput) {; clsValue += (entry as unknown).value}\"});} } ; if (entry.name = == \"first-meaningful-paint\") {; metrics.fmp = entry.startTime}}}\" fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: [\"paint\"] })})\" fmpObserver.observe({/* TODO: Fix JSX expression */}")
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
  f: (process.env['NODE_ENV'] = == \"production\") {/* TODO: Fix JSX expression */}"
  s: {\"} \"Content-Type\": \"application/json}\"},\" bod,
  y: JSON.stringify({} ur)
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
  n: \'true\'}) (window as any).gtag(\"event,web_vitals\" {/* TODO: Fix JSX expression */}"
  4: \"cls\"}metric_,")
  5: \"ttfb\"})valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  n: \'true\'; ; if (process.env['NODE_ENV'] = == \"production\") {/* TODO: Fix JSX expression */}"
  p: Date.now()} metrics}; metrics})}).catch(console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener(\"beforeunload\")sendMetrics)}\"},[]);} retur,
  n: \'null,"
  export: default PerformanceMonitor\',\" window.removeEventListener(\"beforeunload\")sendMetrics)}},[]);} return null export default PerformanceMonitor;\" return null; export default PerformanceMonitor;; metho,"
  d: \"POST\",header,"
  s: {\"}; \"Content-Type\": \"application/json\"},bod,
  y: JSON.stringify({) ur} l: \'window.location.href\')timestam,"
  p: Date.now()}metrics})}).catch(console.error)} ; return null export default PerformanceMonitor\\" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()\\"; window.removeEventListener(\\"beforeunload\\")sendMetrics);} },[]);} \\" return null; \\"' const React { useEffect } from "react" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; "; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */}"
  a: "T"; statu} s: "number"}message?: string} ; interface User {/* TODO: Fix JSX expression */}"
  l: "string"; nam; e: "string"} rol}"} e: "admin" | "user" | "guest"} ; interface Service {/* TODO: Fix JSX expression */}"
  l: "string"; nam; e: "string"} rol}"} e: "admin" | "user" | "guest"} ; interface Service {/* TODO: Fix JSX expression */}"
  n: "string"; pric} e: "number"}} categor,y: "string"} ; interface FormData {; } [ke,"
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
  metrics: PerformanceMetrics = {} ; const metric,s: PerformanceMetrics = {} ; const,"
  metrics: PerformanceMetrics = {} ; for (const entry of list.getEntries()) {; if (entry.name = == "first-contentful-paint") {; metrics.fcp = entry.startTime}}} ;});} fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"] });} const fcpObserver = new PerformanceObserver();} const lcpObserver = new PerformanceObserver(list => {) metrics.lcp = lastEntry.startTime}}});} lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"] });} metrics.fcp = entry.startTime,"})" lcpObserver.observe();} metrics.fid = (entry as unknown).processingStart - entry.startTime;} ; const fidObserver = new PerformanceObserver(list => {"} fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["first-input"] });} let clsValue = 0; if (!(entry as any).hadRecentInput) {; clsValue += (entry as any).value} ; metrics.cls = clsValue;})" clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["layout-shift"]})" const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,"}}"; const fmpObserver = new PerformanceObserver((list) => {"; if (entry.name === "first-meaningful-paint") {"} metrics.fm,"
  p: "= entry.startTime","}}";});} clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["layout-shift"] });} const clsObserver = new PerformanceObserver();} const navigationEntry = performance.getEntriesByType(" "navigation" )[0] as PerformanceNavigationTiming; if (navigationEntry) {; metrics.ttfb =; navigationEntry.responseStart - navigationEntry.requestStart} metrics.fid = (entry as any).processingStart - entry.startTime}"; if (!(entry as unknown).hadRecentInput) {; clsValue += (entry as unknown).value}"});} } ; if (entry.name = == "first-meaningful-paint") {; metrics.fmp = entry.startTime}}}" fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"] })})" fmpObserver.observe({/* TODO: Fix JSX expression */}")
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
  f: (process.env['NODE_ENV'] = == "production") {/* TODO: Fix JSX expression */}"
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
  n: "true"}) (window as any).gtag("event,web_vitals" {/* TODO: Fix JSX expression */}"
  4: "cls"}metric_,")
  5: "ttfb"})valu,
  e: Math.round(metrics.fcp | 0),non_interactio,"
  n: "true"; ; if (process.env['NODE_ENV'] = == "production") {/* TODO: Fix JSX expression */}"
=======
  p: Date.now()} metrics}; metrics})}).catch(console.error)} } ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect()} fidObserver.disconnect()} clsObserver.disconnect()} fmpObserver.disconnect()} window.removeEventListener("beforeunload")sendMetrics)}"},[])} retur,"
  n: "null,"
  export: default PerformanceMonitor"," window.removeEventListener("beforeunload")sendMetrics)}},[])} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,"
  y: JSON.stringify({) ur} l: "window.location.href")timestam,"
  p: Date.now()}metrics})}).catch(console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect()} lcpObserver.disconnect()} fidObserver.disconnect()} clsObserver.disconnect()} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics)} },[])} " return null; "'"'"' import _React { useEffect } from "react" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; "; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */};
  a: 'T; statu} s: 'number}message?: string} ; interface User {/* TODO: Fix JSX expression */}"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  p: Date.now()} metrics}; metrics})}).catch(console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener("beforeunload")sendMetrics)}"},[]);} retur,"
  n: "null,"
  export: default PerformanceMonitor"," window.removeEventListener("beforeunload")sendMetrics)}},[]);} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,"
  y: JSON.stringify({) ur} l: "window.location.href")timestam,"
<<<<<<< HEAD
  p: Date.now()}metrics})}).catch(console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics);} },[]);} " return null; "'"'"' import _React { useEffect } from "react" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; "; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */}
  a: 'T; statu} s: 'number}message?: string} ; interface User {/* TODO: Fix JSX expression */}"
  l: 'string; nam; e: 'string} rol}"} e: "admin" | "user" | "guest"} ; interface Service {/* TODO: Fix JSX expression */}"
  l: 'string; nam; e: 'string} rol}"} e: "admin" | "user" | "guest"} ; interface Service {/* TODO: Fix JSX expression */}
  n: 'string; pric} e: 'number}} categor,y: 'string'} ; interface FormData {; } [ke,
=======
  p: Date.now()}metrics})}).catch(console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics);} },[]);} " return null; "'"'"' import _React { useEffect } from "react" interface PerformanceMetrics {; fcp?: number; lcp?: number; fid?: number; cls?: number} ttfb?: number} fmp?: number} ; "; interface ApiResponse<T = unknown> {/* TODO: Fix JSX expression */};
  a: 'T; statu} s: 'number}message?: string} ; interface User {/* TODO: Fix JSX expression */}',
  l: 'string; nam; e: 'string} rol}"} e: "admin" | "user" | "guest"} ; interface Service {/* TODO: Fix JSX expression */}"
  l: 'string; nam; e: 'string} rol}"} e: "admin" | "user" | "guest"} ; interface Service {/* TODO: Fix JSX expression */};
  n: 'string; pric} e: 'number}} categor,y: 'string'} ; interface FormData {} [ke,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
  metrics: PerformanceMetrics = {} ; const metric,s: PerformanceMetrics = {} ; const,"
  metrics: PerformanceMetrics = {} ; for (const entry of list.getEntries()) {; if (entry.name = == "first-contentful-paint") {; metrics.fcp = entry.startTime}}} ;});} fcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"] });} const fcpObserver = new PerformanceObserver();} const lcpObserver = new PerformanceObserver(list => {) metrics.lcp = lastEntry.startTime}}});} lcpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["largest-contentful-paint"] });} metrics.fcp = entry.startTime,"})" lcpObserver.observe();} metrics.fid = (entry as) unknown).processingStart - entry.startTime;} ; const fidObserver = new PerformanceObserver(list => {"} fidObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["first-input"] });} let clsValue = 0; if (!(entry as) any).hadRecentInput) {; clsValue += (entry as} any).value} ; metrics.cls = clsValue;})" clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["layout-shift"]})" const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming; i,"
  f: (navigationEntry) {} metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart,"}}"; const fmpObserver = new PerformanceObserver((list) => {"; if (entry.name === "first-meaningful-paint") {"} metrics.fm,"
  p: '= entry.startTime,"}}";});} clsObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["layout-shift"] });} const clsObserver = new PerformanceObserver();} const navigationEntry = performance.getEntriesByType(" "navigation" )[0] as PerformanceNavigationTiming; if (navigationEntry) {; metrics.ttfb =; navigationEntry.responseStart - navigationEntry.requestStart; metrics.fid = (entry as) any).processingStart - entry.startTime,"; if (!(entry as) unknown).hadRecentInput) {} clsValue += (entry as} unknown).value}"});} } ; if (entry.name = == "first-meaningful-paint") {; metrics.fmp = entry.startTime}}}" fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"] })})" fmpObserver.observe({/* TODO: Fix JSX expression */}")
  s: ["paint"]})" const sendMetrics = () => {/* TODO: Fix JSX expression */}"
  p: {,"} metric_,"
  1: "fcp,",metric_,"
  2: "lcp,"," metric_,"
  3: "fid,",metric_,"
  4: "cls,"," metric_,"
  5: "ttfb}"},valu,
  e: Math.round(metrics.fc)
  p: || 0),non_interactio,"
  n: 'tru,e})}" i,"
  f: (process.env['NODE_ENV'] = == "production") {/* TODO: Fix JSX expression */}"
  s: {"} "Content-Type": "application/json}"}," bod,
  y: JSON.stringify({} ur)
  l: 'window.location.hre,f)timestam,"
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
  n: 'true'}) (window as) any).gtag("event,web_vitals" {/* TODO: Fix JSX expression */}"
  4: "cls"}metric_,")
  5: "ttfb"})valu,
  e: Math.round(metrics.fcp || 0),non_interactio,"
  n: 'true; ; if (process.env['NODE_ENV'] = == "production") {/* TODO: Fix JSX expression */}"
<<<<<<< HEAD
  p: Date.now()} metrics}; metrics})}).catch(_console.error)} ;} ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect();} window.removeEventListener("beforeunload")sendMetrics)}"},[]);} retur,
=======
  p: Date.now()} metrics}; metrics})}).catch(_console.error)} } ; return () => {; fcpObserver.disconnect()}}} lcpObserver.disconnect()} fidObserver.disconnect()} clsObserver.disconnect()} fmpObserver.disconnect()} window.removeEventListener("beforeunload")sendMetrics)}"},[])} retur,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  n: 'null,"
  export: default PerformanceMonitor," window.removeEventListener("beforeunload")sendMetrics)}},[]);} return null export default PerformanceMonitor;" return null; export default PerformanceMonitor;; metho,"
  d: "POST",header,"
  s: {"}; "Content-Type": "application/json"},bod,
  y: JSON.stringify({) ur} l: 'window.location.href)timestam,"
<<<<<<< HEAD
  p: Date.now()}metrics})}).catch(_console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect();} lcpObserver.disconnect();} fidObserver.disconnect();} clsObserver.disconnect();} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics);} },[]);} " return null; "'"
  </T>
  </T>
  </T>
=======
  p: Date.now()}metrics})}).catch(_console.error)} ; return null export default PerformanceMonitor" fcpObserver.disconnect()} lcpObserver.disconnect()} fidObserver.disconnect()} clsObserver.disconnect()} fmpObserver.disconnect()"; window.removeEventListener("beforeunload")sendMetrics)} },[])} " return null; "'"
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
