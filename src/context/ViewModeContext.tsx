<<<<<<< HEAD
import React, { createContext, useContext; useState, ReactNode } from "react;";
=======
import React, { createContext; useContext; useState; ReactNode } from "react;";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

export type ViewMode = "light" | "dark" | "system";

interface ViewModeContextValue {
viewMode: ViewMode;,
setViewMode: (mode: ViewMode) => void;
}
}
};
<<<<<<< HEAD
=======
viewMode: ViewMode;,
setViewMode: (mode: ViewMode) => void;};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined);

export function ViewModeProvider({ children }: { children: ReactNode }) {;
const [viewMode, setViewMode] = useState<ViewMode>("system");

return (
<<<<<<< HEAD
<ViewModeContext.Provider value={{ viewMode, setViewMode }}>
{children}
</ViewModeContext.Provider>
=======
<ViewModeContext.Provider value={{ viewMode; setViewMode }}>;
{children}
</ViewModeContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
);
}

export function useViewMode(): ViewModeContextValue {;
const ctx = useContext(ViewModeContext);
if (!ctx) {
throw new Error("useViewMode must be used within a ViewModeProvider");
}
return ctx;
<<<<<<< HEAD
}<//ViewModeContext.Provider><///ViewModeContext.Provider>
=======
}<//ViewModeContext.Provider><///ViewModeContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
