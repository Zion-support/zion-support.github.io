import { create Context } from "react";

export interface Analytics Context Type {
  track Event: (event Name: string, properties?: Record<string, unknown>) => void;
  track Page View: (page Name: string, properties?: Record<string, unknown>) => void;
  identify User: (user Id: string, properties?: Record<string, unknown>) => void;
  set User: (user Id: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = create Context<AnalyticsContextType| undefined>(undefined);
