
import React from "react",
import { Card,,, CardHeader,,, CardTitle,,, CardDescription,,  } from "
import { AlertTriangle,,, AlertCircle,,, ShieldAlert,,  } from 'lucide-react'
import { FraudStats,,  } from "
interface FraudStatsCardsProps {
  stats: FraudStats;
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
  return (
