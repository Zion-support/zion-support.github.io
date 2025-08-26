<<<<<<< HEAD:src/hooks/useTheme.tsx

// Provide a thin wrapper around the ThemeProvider's context so that hooks can
// be imported from a single location without losing type information.
import { useContext } from "react";
import {
  ThemeProviderContext,
  type ThemeProviderState,
} from "@/components/ThemeProvider";

export const useTheme = (): ThemeProviderState => {
  return useContext(ThemeProviderContext);
};
=======
// Re-export the theme hook from the shared ThemeProvider so that any component
// importing `@/hooks/useTheme` receives the real implementation.  This allows
// the ModeToggle and support components to correctly toggle between light and
// dark modes.
export { useTheme } from "@/components/ThemeProvider";
export type { Theme, ThemeProviderState } from "@/components/ThemeProvider";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/useTheme.tsx
