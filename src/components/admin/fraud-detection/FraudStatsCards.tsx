import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,;
} from '@/components/ui/card';
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react';
import { FraudStats } from '@/types/fraud';

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from 'lucide-react'
import { FraudStats } from "@/types/fraud";
interface FraudStatsCardsProps {
  stats: FraudStats
}
export const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ stats },) => {
  return (
