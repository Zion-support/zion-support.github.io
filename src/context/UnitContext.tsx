
function getDefaultUnit(): UnitSystem {
  if (typeof navigator !== 'undefined') {'    '    if (region === 'US' || region === 'LR' || region === 'MM') {'      return 'imperial'}'  }'  return 'metric'}''interface UnitContextState {
  unit: UnitSystem;
  setUnit: (u: UnitSystem) => void;
  toggleUnit: () => void}


export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit());'  '  return (
    <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  )}

export 
