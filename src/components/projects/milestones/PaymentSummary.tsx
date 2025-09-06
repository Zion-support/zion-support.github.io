
import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
interface PaymentSummaryProps {

  milestones: Milestone[]
  paymentTerms: string | null

}
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms },) => {
import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
interface PaymentSummaryProps {

  milestones: Milestone[]
  paymentTerms: string | null
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const totalPayment = milestones.reduce(

    (sum, m) => sum + parseFloat(m.amount.toString()),
    0
  ).toFixed(2),

  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()),
      0
    ).toFixed(2),

=======
  const paidAmount = milestones;
    .filter(m => m && m.status === 'paid');
    .reduce(;
      (sum, m) => sum + parseFloat(m && m.amount.toString());      0;
    ).toFixed(2);




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms |"Not specified"}
            </p>
          </div>
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
