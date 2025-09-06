
import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface FraudTabContentProps {
  tabValue: string}

export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending':
      return($2);
    case 'dangerous':
      return($2);
    case 'actioned':
      return($2);
    default:
      return null
  }
},
