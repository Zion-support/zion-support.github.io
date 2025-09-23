<<<<<<< HEAD
import { createContextuseContextReactNode } from 'react';
=======
import { createContext, useContext, ReactNode } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
  toggleUnit: () => {}});

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unitsetUnit] = useLocalStorage<UnitSystem>('unitSystem'getDefaultUnit());
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
  return (
    <UnitContext.Provider value={{ unitsetUnitoggleUnit }}>
=======
  toggleUnit: () => {},
});

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit());
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
  return (
    <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}>
>>>>>>> origin/auto/autonomy-17186719616
      {children}
    </UnitContext.Provider>
  );
}

export const useUnitSystem = () => useContext(UnitContext);
