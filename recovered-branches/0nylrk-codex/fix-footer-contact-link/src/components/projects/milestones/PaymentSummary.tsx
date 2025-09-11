


=======import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;



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


=======import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()), 
=======    0;
  ).toFixed(2);
    0
  ).toFixed(2),
  
    0
  ).toFixed(2),
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()), 
      0
    ).toFixed(2),

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  milestones,
  paymentTerms,
}) => {
  const totalPayment = milestones
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);

  const paidAmount = milestones
    .filter((m) => m.status === "paid")
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms |"Not specified"}
            </p>
          </div>
            <p className="font-medium">${paidAmount}</p>
            <p className="font-medium">${paidAmount}</p>
            <p className="font-medium">
              ${paidAmount}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
);
}
  );
=======
=======          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>

import {Milestone} from '@/hooks/useMilestones';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {CreditCard} from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
            <p className="font-medium">
              ${paidAmount}

};
<<<<<<< HEAD
import React from './react';
import { Milestone  } from '@/hooks / use_milestones';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { CreditCard  } from './lucide-react';
interface PaymentSummaryProps {
  milestones: Milestone[];
  payment_terms: string | null;
}
export const PaymentSummary: React.FC < PaymentSummaryProps> = ({
  milestones,
  payment_terms,
}) => {
  const total_payment = milestones;
    .reduce ((sum, m) => sum + parse_float (m.amount.to_string ()), 0);
    .to_fixed (2);
;
  const paid_amount = milestones;
    .filter ((m) => m.status === "paid");
    .reduce ((sum, m) => sum + parse_float (m.amount.to_string ()), 0);
    .to_fixed (2);
;
  return (
    <Card className="mb - 8 bg - muted / 30">;
      <CardHeader className="pb - 3">;
        <CardTitle className="text - lg flex items - center">;
          <CreditCard className="h - 5 w - 5 mr - 2 text - primary" /> Payment Summary;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          <div>;
            <p className="text - sm text - muted - foreground mb - 1">Total Payment</p>;
            <p className="text - 2xl font - semibold">${total_payment}</p>;
          </div>;
          <div>;
            <p className="text - sm text - muted - foreground mb - 1">Payment Terms</p>;
            <p className="font - medium capitalize">;
              {payment_terms || "Not specified"}
            </p>;
          </div>;
          <div>;
            <p className="text - sm text - muted - foreground mb - 1">Paid Amount</p>;
            <p className="font - medium">${paid_amount}</p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
;
<<<<<<< HEAD

import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
;
interface PaymentSummaryProps {;
  milestones:Milestone[],;
  paymentTerms:string | null;
}
;
export const PaymentSummary:React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {;
  const totalPayment = milestones.reduce(;
    (sum, m) => sum + parseFloat(m.amount.toString()), ;
    0;
  ).toFixed(2),;
  ;
  const paidAmount = milestones;
    .filter(m => m.status === 'paid');
    .reduce(;
      (sum, m) => sum + parseFloat(m.amount.toString()), ;
      0;
    ).toFixed(2),;
;
  return (;
    <Card className="mb-8 bg-muted/30">;
      <CardHeader className="pb-3">;
        <CardTitle className="text-lg flex items-center">;
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          <div>;
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>;
            <p className="text-2xl font-semibold">;
              ${totalPayment}
            </p>;
          </div>;
          ;
          <div>;
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>;
            <p className="font-medium capitalize">;
              {paymentTerms || "Not specified"}
            </p>;
          </div>;
          ;
          <div>;
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>;
            <p className="font-medium">;
              ${paidAmount}
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  ),;
},; const paidAmount = milestones .filter (m => m.status === 'paid') return (<Card className="mb-8 bg-muted/30" > <CardHeader className="pb-3" > <CardTitle className="text-lg flex items-center" > <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary </CardTitle> </CardHeader> <CardContent> <div className="grid grid-cols-1 md:grid-cols-3 gap-6" > <div> <p className="text-sm text-muted-foreground mb-1" >Total Payment</p> <p className="text-2xl font-semibold" > $ {
  totalPayment 
}</p> </div> <div> </p> </div> <div> </p> </div> </div> </CardContent> </Card>) 
};

};

};
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======