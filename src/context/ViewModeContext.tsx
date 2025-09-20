import React, { createContext; useContext; useState; ReactNode } from "react;";

export type ViewMode = "light" | "dark" | "system";

interface ViewModeContextValue {
