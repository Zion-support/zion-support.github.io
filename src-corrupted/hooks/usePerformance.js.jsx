import {useEffect, useRef, useState} from 'react', export function usePerformance(props: any) {, const [metrics, setMetrics] = useState({, fcp: null lcp: null fid: null cls: null ttfb: null domLoad: null windowLoad: null,}), const [observers, setObservers] = useState([]), const observerRef = useRef(null), useEffect(() => {,''),';
export default ComponentName,"',';
}}