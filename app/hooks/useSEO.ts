'use client';
import { useState, useEffect } from 'react';

export const UseSEO = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // UseSEO hook logic
  }, []);

  return { state };
};

export default UseSEO;