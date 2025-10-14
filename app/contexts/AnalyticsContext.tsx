import React, { createContext, useContext, ReactNode } from "react";
import { AnalyticsContextType } from "./AnalyticsContextDefinition";

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
);

export { AnalyticsContext };
f7f852c0f7415181a1b362c4aa5a784585ad5828;
