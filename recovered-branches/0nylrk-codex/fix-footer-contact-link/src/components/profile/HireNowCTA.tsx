
import { Button } from "@/components/ui/button";
import { HireRequestModal } from "./hire-request";
import { useState } from "react";
import { TalentProfile } from "@/types/talent";

interface HireNowCTAProps {
  talentProfile: {
    id: string;
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;
  };
}

export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
