import { useState } from 'react';

export function useCustomHook() {
  const [state, setState] = useState(null);
  
  return { state, setState };
}