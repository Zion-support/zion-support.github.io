<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react'; export function usePerformance() {; const [metrics, setMetrics] = useState({; fcp: null,; lcp: null,; fid: null,; cls: null,; ttfb: null,; domLoad: null,; windowLoad: null; }); const [observers, setObservers] = useState([]); const observerRef = useRef(null); useEffect(() => {;''
=======
import { useEffect, useRef, useState } from 'react'; export function usePerformance() {; const [metrics, setMetrics] = useState({; fcp: null,; lcp: null,; fid: null,; cls: null,; ttfb: null,; domLoad: null,; windowLoad: null; }); const [observers, setObservers] = useState([]); const observerRef = useRef(null); useEffect(() => {;
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
