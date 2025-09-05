
import React from 'react';

interface PaymentSummaryProps {_milestones: Milestone[];
  paymentTerms: string | null;}

export const PaymentSummary: React.FC<PaymentSummaryProps> = (_{_milestones, _paymentTerms}) => {_const _totalPayment = milestones.reduce(_(sum, _m) => sum + parseFloat(m.amount.toString()), _0
  ).toFixed(2);
  
  const _paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(_(sum, _m) => sum + parseFloat(m.amount.toString()), _0
    ).toFixed(2);

  return (
    <Card className="mb-8 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
            <p className="text-2xl font-semibold">
              ${totalPayment}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {_paymentTerms || "Not specified"}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
            <p className="font-medium">
              ${_paidAmount}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
