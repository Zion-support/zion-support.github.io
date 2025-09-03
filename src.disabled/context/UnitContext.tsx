<<<<<<< HEAD

function getDefaultUnit(): UnitSystem { if (typeof navigator !== "undefined") { if (region === "US" || region === "LR" || region === "MM") { return "imperial"} } return "metric"} interface UnitContextState { unit: UnitSystem; setUnit: (u: UnitSystem) => void; toggleUnit: () => void} export function UnitProvider({ children }: { children: ReactNode }) { const [unit, setUnit] = useLocalStorage<UnitSystem>("unitSystem", getDefaultUnit()); return ( <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}> {children} </UnitContext.Provider> )} export ";"""";

function getDefaultUnit(): UnitSystem { if(typeof navigator !== "undefined") { if(region === "US" || region === "LR" || region === "MM") { return "imperial"} } return "metric"} interface UnitContextState { unit: UnitSystem; setUnit: (u: UnitSystem) => void; toggleUnit: () => void } export function UnitProvider({ children }: { children: ReactNode  }) { const [unit, setUnit] = useLocalStorage<UnitSystem>("unitSystem", getDefaultUnit()); return (<UnitContext.Provider value={{ unit, setUnit, toggleUnit }}> {children} </UnitContext.Provider> )} export ";"
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
function: getDefaultUnit(): UnitSystem: { if (typeof navigator !== 'undefined') { if (region === 'US' || region === 'LR' || region === 'MM') { return 'imperial'} } return 'metric'} interface UnitContextState {';
  unit: UnitSystem;
<<<<<<< HEAD
   setUnit: (u: UnitSystem) => void: toggleUnit: () => voi,d} export: function UnitProvider({ children }: { children: ReactNode, }) { const: [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit()) return ( <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}> {children} </UnitContext.Provider> )} export '';'"";
=======
<<<<<<< HEAD
   setUnit: (,
    u: UnitSystem) => void'
   toggleUni,
    t: () => void} export function UnitProvider({ children }: { children: ReactNode }) { const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit()) return ( <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}> {children} </UnitContext.Provider> )} export '';""
=======
   setUnit: (u: UnitSystem) => void
<<<<<<< HEAD
   toggleUnit: () => void} export function UnitProvider({ children }: { children: ReactNode }) { const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit()) return ( <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}> {children} </UnitContext.Provider> )} export '''"
=======
   toggleUnit: () => void} export function UnitProvider({ children }: { children: ReactNode }) { const [unit, setUnit] = useLocalStorage<UnitSystem>('unitSystem', getDefaultUnit()) return ( <UnitContext.Provider value={{ unit, setUnit, toggleUnit }}> {children} </UnitContext.Provider> )} export '"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
