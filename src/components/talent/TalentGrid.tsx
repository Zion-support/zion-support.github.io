import React from "react";

import { TalentCard } from "@/components/talent/TalentCard, ";
import { TalentSkeleton } from "@/components/talent/TalentSkeleton, ";
import { TalentProfile } from "@/types/talent, ";

export interface TalentGridProps {;
talents: TalentProfile[];
isLoading: boolean;
onTalentClick: (id: string) => void;
isAuthenticated: boolean;
viewProfile?: (id: string) => void;
// unused but kept for backward compatibility;
clearFilters?: () => void;
handleBook?: (talent: TalentProfile) => void;
handleMessage?: (talent: TalentProfile) => void;
}
}
};