
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from "@/components/disputes/RaiseDisputeButton";
interface ProjectActionsProps {projectId: string;
isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
onAddMilestone: () => void
}
export function ProjectActions({}