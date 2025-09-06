<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/PaymentSummary.tsx


<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {
  milestones: Milestone[];
  paymentTerms: string | null
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()), 
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    0
  ).toFixed(2),

=======
    0;
  ).toFixed(2);
    0
  ).toFixed(2),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
0;
  ).toFixed(2);
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()), 
      0
    ).toFixed(2),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react";
import { Milestone } from "@/hooks/useMilestones";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
interface PaymentSummaryProps {
  milestones: Milestone[];
  paymentTerms: string | null;
}

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms |"Not specified"}
            </p>
          </div>
<<<<<<< HEAD
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>

            <p className="font-medium">${paidAmount}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            <p className="font-medium">${paidAmount}</p>
            <p className="font-medium">
              ${paidAmount}
            </p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/PaymentSummary.tsx
import {Milestone} from '@/hooks/useMilestones';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {CreditCard} from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
}
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {;
  const totalPayment = milestones && milestones.reduce(;
    (sum, m) => sum + parseFloat(m && m.amount.toString()), ;
    0;
  ).toFixed(2);
  const paidAmount = milestones;
    .filter(m => m && m.status === 'paid');
    .reduce(;
      (sum, m) => sum + parseFloat(m && m.amount.toString()), ;
      0;
    ).toFixed(2);
  return (
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}

            <p className="font-medium">
              ${paidAmount}
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

};

=======
=======

            <p className="font-medium">
              ${paidAmount}


};
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/PaymentSummary.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/PaymentSummary.tsx
=======

};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
