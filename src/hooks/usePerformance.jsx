import { useEffect, useRef, useState } from 'react' export function usePerformance() { const [metrics, setMetrics] = useState({ "fcp": null, "lcp": null, "fid": null, "cls": null, "ttfb": null, "domLoad": null, "windowLoad": null,'
});
  const [observers, setObservers] = useState([]);
  const observerRef = useRef(null);
<<<<<<< HEAD:src/hooks/usePerformance.jsx
  useEffect(() => {
"";"
}}
=======
  useEffect(() => {}
\"\";}
}}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/hooks/usePerformance.jsx
