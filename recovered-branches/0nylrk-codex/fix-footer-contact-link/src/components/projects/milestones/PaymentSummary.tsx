
<<<<<<< HEAD
import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {
  milestones: Milestone[];
  paymentTerms: string | null
<<<<<<< HEAD
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  milestones
  paymentTerms
}) => {
  const totalPayment = milestones
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);
  const paidAmount = milestones
    .filter((m) => m.status === "paid")
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()), 
<<<<<<< HEAD
    0;
  ).toFixed(2);
=======
    0
  ).toFixed(2),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()), 
      0
    ).toFixed(2),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            <p className="text-2xl font-semibold">${totalPayment}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms |"Not specified"}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="font-medium">${paidAmount}</p>
=======
            <p className="font-medium">
              ${paidAmount}
<<<<<<< HEAD
            </p>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
  );
}

=======
            <p className="font-medium">
              ${paidAmount}
=======
  )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
