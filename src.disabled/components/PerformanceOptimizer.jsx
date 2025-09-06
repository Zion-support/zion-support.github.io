



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
import React,{ useEffect } from \'react\'; import { useLocation } from \'react-router-dom\'; \"export\": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { \"if\": (\'requestIdleCallback\' in window) {\'; requestIdleCallback(() => { if: (\'startViewTransition\' in document) {\'; try: { document.startViewTransition?.(() => {})} \"catch\": {} } })} },[location.pathname]) return <>{children}</> } ; \"export\": default PerformanceOptimizer
const React,{ useEffect } from "react"; import { useLocation } from "react-router-dom"; export: const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { if: ("requestIdleCallback" in window) {"; requestIdleCallback(() => { if: ("startViewTransition" in document) {"; try: { document.startViewTransition?.(() => {})} catch: {} } })} },[location.pathname]) return <>{children}</> } ; export: default PerformanceOptimizer'"'"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/components/PerformanceOptimizer.jsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import _React,{ useEffect } from 'react'; import { useLocation } from 'react-router-dom'; "export": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { "if": ('requestIdleCallback' in, window) {'; requestIdleCallback(() => { if: ('startViewTransition' in, document) {'; try: { document.startViewTransition?.(() => {})} "catch": {} } })} },[location.pathname]) return <>{children}</> } ; "export": default PerformanceOptimizer
=======
=======
import React,{ useEffect } from \'react\'; import { useLocation } from \'react-router-dom\'; \"export\": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { \"if\": (\'requestIdleCallback\' in window) {\'; requestIdleCallback(() => { if: (\'startViewTransition\' in document) {\'; try: { document && document.startViewTransition?.(() => {})} \"catch\": {} } })} },[location && location.pathname]) return <>{children}</> } ; \"export\": default PerformanceOptimizer
const React,{ useEffect } from "react"; import { useLocation } from "react-router-dom"; export: const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { if: ("requestIdleCallback" in window) {"; requestIdleCallback(() => { if: ("startViewTransition" in document) {"; try: { document && document.startViewTransition?.(() => {})} catch: {} } })} },[location && location.pathname]) return <>{children}</> } ; export: default PerformanceOptimizer'"'"

import _React,{ useEffect } from 'react'; import { useLocation } from 'react-router-dom'; "export": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { "if": ('requestIdleCallback' in, window) {'; requestIdleCallback(() => { if: ('startViewTransition' in, document) {'; try: { document && document.startViewTransition?.(() => {})} "catch": {} } })} },[location && location.pathname]) return <>{children}</> } ; "export": default PerformanceOptimizer

