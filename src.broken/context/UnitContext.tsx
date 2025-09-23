<<<<<<< HEAD
import { createContext, useContext, ReactNode } from 'react';
=======
import { createContextuseContextReactNode } from 'react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
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
  toggleUnit: () => {},
});

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit());
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
  return (
    <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}>
=======
  toggleUnit: () => {}});

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unitsetUnit] = useLocalStorage<UnitSystem>('unitSystem'getDefaultUnit());
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
  return (
    <UnitContext.Provider value={{ unitsetUnitoggleUnit }}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {children}
    </UnitContext.Provider>
  );
}

export const useUnitSystem = () => useContext(UnitContext);
