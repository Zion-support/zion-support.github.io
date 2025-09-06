

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import _React,{ useEffect } from 'react'; import { useLocation } from 'react-router-dom'; "export": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { "if": ('requestIdleCallback' in, window) {'; requestIdleCallback(() => { if: ('startViewTransition' in, document) {'; try: { document.startViewTransition?.(() => {})} "catch": {} } })} },[location.pathname]) return <>{children}</> } ; "export": default PerformanceOptimizer
=======
=======
import React,{ useEffect } from \'react\'; import { useLocation } from \'react-router-dom\'; \"export\": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { \"if\": (\'requestIdleCallback\' in window) {\'; requestIdleCallback(() => { if: (\'startViewTransition\' in document) {\'; try: { document && document.startViewTransition?.(() => {})} \"catch\": {} } })} },[location && location.pathname]) return <>{children}</> } ; \"export\": default PerformanceOptimizer
const React,{ useEffect } from "react"; import { useLocation } from "react-router-dom"; export: const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { if: ("requestIdleCallback" in window) {"; requestIdleCallback(() => { if: ("startViewTransition" in document) {"; try: { document && document.startViewTransition?.(() => {})} catch: {} } })} },[location && location.pathname]) return <>{children}</> } ; export: default PerformanceOptimizer'"'"

import _React,{ useEffect } from 'react'; import { useLocation } from 'react-router-dom'; "export": const PerformanceOptimizer = ({ children }) => { const location = useLocation(); useEffect(() => { "if": ('requestIdleCallback' in, window) {'; requestIdleCallback(() => { if: ('startViewTransition' in, document) {'; try: { document && document.startViewTransition?.(() => {})} "catch": {} } })} },[location && location.pathname]) return <>{children}</> } ; "export": default PerformanceOptimizer

