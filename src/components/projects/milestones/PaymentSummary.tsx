<<<<<<< HEAD
};
import React from 'react';
import { Milestone } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

=======

import React from 'react';
import { Milestone } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface PaymentSummaryProps {
  milestones: Milestone[],
  paymentTerms: string | null
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms },) => {
  const totalPayment = milestones.reduce(
<<<<<<< HEAD
    (sum, m) => sum + parseFloat(m.amount.toString());
=======
    (sum, m,) => sum + parseFloat(m.amount.toString()), 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    0
  ).toFixed(2);
  
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
<<<<<<< HEAD
      (sum, m) => sum + parseFloat(m.amount.toString());
=======
      (sum, m,) => sum + parseFloat(m.amount.toString()), 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      0
    ).toFixed(2);

  return (
    <Card className="mb-8 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
            <p className="text-2xl font-semibold">
              ${totalPayment}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms || "Not specified"}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
            <p className="font-medium">
              ${paidAmount}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};
'"
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
