<<<<<<< HEAD
import { createContext, useContext, ReactNode } from 'react',
import { useLocalStorage } from '@/hooks/useLocalStorage',
import type { UnitSystem } from '@/utils/unitConversion',
function getDefaultUnit(): UnitSystem {
  if (typeof navigator !== 'undefined') {
    const region = navigator.language.split('-')[1],
    if (region === 'US' || region === 'LR' || region === 'MM') {
      return 'imperial'
    }
=======
import type {_UnitSystem} from '@/utils/unitConversion';

function getDefaultUnit(): UnitSystem {_if (typeof navigator !== 'undefined') {
    const _region = navigator.language.split('-')[1];
    if (region === 'US' || region === 'LR' || region === 'MM') {
      return 'imperial';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return 'metric'
}

<<<<<<< HEAD
interface UnitContextState {
  unit: UnitSystem,
  setUnit: (u: UnitSystem) => void,
  toggleUnit: () => void
}

const UnitContext = createContext<UnitContextState>({
  unit: 'metric',
  setUnit: () => {},
  toggleUnit: () => {}}),

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit()),
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric'),
=======
interface UnitContextState {_unit: UnitSystem;
  setUnit: (_u: UnitSystem) => void;
  toggleUnit: () => void;}

const _UnitContext = createContext<UnitContextState>(_{_unit: 'metric', _setUnit: () => {},
  toggleUnit: () => {}});

export function UnitProvider(_{_children}: {_children: ReactNode}) {_const [unit, _setUnit] = useLocalStorage<UnitSystem>('unitSystem', _getDefaultUnit());
  const _toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <UnitContext.Provider value={{ unit, _setUnit, _toggleUnit}}>
      {_children}
    </UnitContext.Provider>
  )
}

<<<<<<< HEAD
export const useUnitSystem = () => useContext(UnitContext),
=======
export const _useUnitSystem = () => useContext(UnitContext);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
