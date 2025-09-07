import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { UnitSystem } from '@/utils/unitConversion';
function getDefaultUnit(): UnitSystem {
  if (typeof navigator !== 'undefined') {
    const region = $2;
    if (region = $2;
  setUnit: (u: UnitSystem) => void,
  toggleUnit: () => void
}

const UnitContext = $2;
  setUnit: () => {},
  toggleUnit: () => {}),

export function UnitProvider({ children }: { children: ReactNode}) {
  const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit()),
  const toggleUnit = () => setUnit($2);
  return (
    <UnitContext.Provider value={ unit, setUnit, toggleUnit }>
      {children}
    </UnitContext.Provider>
  )
}

export const useUnitSystem = () => useContext($2);