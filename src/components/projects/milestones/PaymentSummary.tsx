import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
interface PaymentSummaryProps {
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {

    <Card className="mb-8 bg-muted/30">;"
"
      <CardHeader className="pb-3">;"
        <CardTitle className="text-lg flex items-center">;"
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;"

        ;
      <CardContent>;
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;"
</div>
          <div>;
</div>"
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>;""
            <p className="text-2xl font-semibold">;"
</p>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>""
            <p className="font-medium capitalize">"


          


            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>""
            <p className="font-medium">"
            </p>;
          </div>;
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>;""
            <p className="font-medium capitalize">;"
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>;""
            <p className="font-medium">;"
export const PaymentSummary: React.FC < PaymentSummaryProps> = ({ milestones, payment_terms }, ) => {
  const total_payment = milestones.reduce ()
    (sum, m) => sum + parse_float (m.amount.to_string ());    0).to_fixed (2);
  const paid_amount = milestones;"
    .filter (m => m.status === 'paid');
    .reduce ()
      (sum, m) => sum + parse_float (m.amount.to_string ());      0).to_fixed (2);
  return (
    <Card className="mb - 8 bg - muted / 30">;"
      <CardHeader className="pb - 3">;"
        <CardTitle className="text - lg flex items - center">;"
          <CreditCard className="h - 5 w - 5 mr - 2 text - primary" /> Payment Summary;"

        <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 6">;"
            <p className="text - sm text - muted - foreground mb - 1">Total Payment</p>;""
            <p className="text - 2xl font - semibold">;"
            <p className="text - sm text - muted - foreground mb - 1">Payment Terms</p>;""
            <p className="font - medium capitalize">;"
            <p className="text - sm text - muted - foreground mb - 1">Paid Amount</p>;""
            <p className="font - medium">;"
      ;)
    );"
pr-12325
