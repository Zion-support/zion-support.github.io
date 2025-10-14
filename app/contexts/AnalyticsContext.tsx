import React, { createContext, useContext, ReactNode } from "react";
import { AnalyticsContextType } from "./AnalyticsContextDefinition";

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
);

export { AnalyticsContext };
