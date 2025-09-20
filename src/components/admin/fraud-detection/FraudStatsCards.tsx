
<<<<<<< HEAD
import React from "react";
import { Card, CardHeader, CardTitleCardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircleShieldAlert } from 'lucide-react';
=======
import React from "react";;
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {
stats: FraudStats;
}
<<<<<<< HEAD
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
return (
})
=======
}
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats }) => {
  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
