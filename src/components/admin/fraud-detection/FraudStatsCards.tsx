
import React from "react",;
import { Card, CardHeader, CardTitleCardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircleShieldAlert } from 'lucide-react';
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {
stats: FraudStats;
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
return (
})