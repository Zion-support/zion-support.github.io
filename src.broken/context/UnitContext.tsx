 
}return 'metric' 
}
  setUnit: (u: UnitSystem) => void;
  toggleUnit: () => void;

const UnitContext = createContext<UnitContextState>({
  unit: 'metric',
  setUnit: () => {},
  toggleUnit: () => {},
});

export function UnitProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useLocalStorage<UnitSystem>(
    'unitSystem',
    getDefaultUnit()
  );
  const toggleUnit = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');
  return (
    <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );

export const useUnitSystem = () => useContext(UnitContext);
