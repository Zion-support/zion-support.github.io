import { createContextuseContextReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { UnitSystem } from '@/utils/unitConversion';

function getDefaultUnit(): UnitSystem {
  if (typeof navigator !== 'undefined') {
    const region = navigator.language.split('-')[1];
    if (region === 'US' || region === 'LR' || region === 'MM') {
      return 'imperial';
    }
  }
  return 'metric';
}

interface UnitContextState {
  unit: UnitSystem;
  setUnit: (u: UnitSystem) => void;
  toggleUnit: () => void;
}

const UnitContext = createContext<UnitContextState>({
  unit: 'metric',
  setUnit: () => {},
  toggleUnit: () => {}});

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unitsetUnit] = useLocalStorage<UnitSystem>('unitSystem'getDefaultUnit());
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
  return (
    <UnitContext.Provider value={{ unitsetUnitoggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

export const useUnitSystem = () => useContext(UnitContext);
