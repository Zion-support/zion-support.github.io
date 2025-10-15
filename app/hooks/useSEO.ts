import { useEffect, useState } from 'react';

export const useSEO = () => {
  const [state] = useState({});

  useEffect(() => {
    // Hook implementation
  }, []);

  return {
    state
  };
};

export default useSEO;