
import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {
  milestones: Milestone[];
  paymentTerms: string | null
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = null;
