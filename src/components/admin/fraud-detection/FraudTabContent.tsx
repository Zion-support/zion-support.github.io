
import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
interface FraudTabContentProps {tabValue: string,
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({}
  tabValue}) => {
  switch (tabValue) {    case 'pending':
      return (
