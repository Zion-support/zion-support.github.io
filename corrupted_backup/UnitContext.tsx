 
}return 'metric' 
}return (<UnitContext.Provider value= {
  {
  unit, setUnit, toggleUnit 
}
<<<<<<< HEAD

interface UnitContextState {
  unit: UnitSystem;
  setUnit: (u: UnitSystem) => void;
  toggleUnit: () => void;
}

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
}

export const useUnitSystem = () => useContext(UnitContext);
=======
}> {
  children 
}</UnitContext.Provider>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
