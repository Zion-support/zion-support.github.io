
import React from 'react',
import { Milestone } from '@/hooks/useMilestones',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { CreditCard } from 'lucide-react',
interface PaymentSummaryProps {
  milestones: Milestone[],
  paymentTerms: string | null
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()),
    0
  ).toFixed(2),  
  const _paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()),
      0
    ).toFixed(2),
  return (
    <Card className=&quot;mb-8 bg-muted/30&quot;>
      <CardHeader className=&quot;pb-3&quot;>
        <CardTitle className=&quot;text-lg flex items-center&quot;>
          <CreditCard className=&quot;h-5 w-5 mr-2 text-primary&quot; /> Payment Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
          <div>
            <p className=&quot;text-sm text-muted-foreground mb-1&quot;>Total Payment</p>
            <p className=&quot;text-2xl font-semibold&quot;>
              ${totalPayment}
            </p>
          </div>
          
          <div>
            <p className=&quot;text-sm text-muted-foreground mb-1&quot;>Payment Terms</p>
            <p className=&quot;font-medium capitalize&quot;>
              {paymentTerms || &quot;Not specified&quot;}            </p>
          </div>
          
          <div>
            <p className=&quot;text-sm text-muted-foreground mb-1&quot;>Paid Amount</p>
            <p className=&quot;font-medium&quot;>
              ${paidAmount}            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
