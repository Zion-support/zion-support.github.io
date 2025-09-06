<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
}; import React from 'react'
import { Milestone } from '@/hooks/useMilestones'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
interface PaymentSummaryProps {

  milestones: Milestone[]
  paymentTerms: string | null
<<<<<<< HEAD
<<<<<<< HEAD

}
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms },) => {
  const totalPayment = milestones.reduce(

<<<<<<< HEAD
=======
import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms },) => {;
  const totalPayment = milestones.reduce(;
    (sum, m) => sum + parseFloat(m.amount.toString());    0
  ).toFixed(2)
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString());      0
    ).toFixed(2)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

<<<<<<< HEAD
  return (
=======
<<<<<<< HEAD
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>           <div>
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <Card className="mb-8 bg-muted/30">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg flex items-center">;
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;
          <div>;
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>;
            <p className="text-2xl font-semibold">;
              ${totalPayment}


          


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
}
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms },) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString());    0
  ).toFixed(2)
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString());      0
    ).toFixed(2)
import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
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

  return (
    <Card className="mb-8 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
            <p className="text-2xl font-semibold">
              ${totalPayment}
            </p>
          </div>
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div>
>>>>>>>             <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms |"Not specified"}
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
            <p className="font-medium">
              ${paidAmount}

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
            <p className="font-medium">
              ${paidAmount}
<<<<<<< HEAD
<<<<<<< HEAD

            </p>;
          </div>;

          <div>;
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>;
            <p className="font-medium capitalize">;
              {paymentTerms || "Not specified"}
            </p>;
          </div>;

          <div>;
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>;
            <p className="font-medium">;
              ${paidAmount}
<<<<<<< HEAD

>>>>>>>             </p>;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
'"
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

            </p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

} import React from 'react';
import { Milestone } from '@/hooks / use_milestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import React from 'react';
interface PaymentSummaryProps {
  milestones: Milestone[],
  payment_terms: string | null;
}
export const PaymentSummary: React.FC < PaymentSummaryProps> = ({ milestones, payment_terms }, ) => {
  const total_payment = milestones.reduce (
    (sum, m) => sum + parse_float (m.amount.to_string ());    0).to_fixed (2);
  const paid_amount = milestones;
    .filter (m => m.status === 'paid');
    .reduce (
      (sum, m) => sum + parse_float (m.amount.to_string ());      0).to_fixed (2);
  return (
    <Card className="mb - 8 bg - muted / 30">;
      <CardHeader className="pb - 3">;
        <CardTitle className="text - lg flex items - center">;
          <CreditCard className="h - 5 w - 5 mr - 2 text - primary" /> Payment Summary;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid - cols - 1 md: grid - cols - 3 gap - 6">;
          <div>;
            <p className="text - sm text - muted - foreground mb - 1">Total Payment</p>;
            <p className="text - 2xl font - semibold">;
              ${total_payment}
            </p>;
          </div>;
          <div>;
            <p className="text - sm text - muted - foreground mb - 1">Payment Terms</p>;
            <p className="font - medium capitalize">;
              {payment_terms || "Not specified"}
            </p>;
          </div>;
          <div>;
            <p className="text - sm text - muted - foreground mb - 1">Paid Amount</p>;
            <p className="font - medium">;
              ${paid_amount}
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
'";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
