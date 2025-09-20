import { useAuthStatus } from "./talent/useAuthStatus, ";
import { useTalentData } from "./talent/useTalentData, ";
import { useFilterTalents } from "./talent/useFilterTalents, ";
import { useUIState } from "./talent/useUIState, ";
export function useTalentDirectory() {
    // Fetch auth status and saved talents;
    const { isAuthenticated, userDetails, savedTalents, handleToggleSave } = useAuthStatus();
    // Fetch talent data;
