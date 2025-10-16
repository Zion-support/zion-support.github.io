import { useState, useEffect } from "react";

export function useIntersectionObserver() {
  const [state, setState] = useState(null);

  useEffect(() => {
    /// Comment
  }, []);

  return { state, setState };
}
