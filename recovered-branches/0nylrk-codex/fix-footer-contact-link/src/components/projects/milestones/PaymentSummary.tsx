<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
interface PaymentSummaryProps {
  milestones: Milestone[];
  paymentTerms: string | null
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react',;
import { Milestone } from '@/hooks/useMilestones',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { CreditCard } from 'lucide-react',;
interface PaymentSummaryProps {;
  milestones: Milestone[],;
<<<<<<< HEAD
=======
import React from "react";
import { Milestone } from "@/hooks/useMilestones";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
interface PaymentSummaryProps {
  milestones: Milestone[];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  paymentTerms: string | null;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

<<<<<<< HEAD
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()), 
<<<<<<< HEAD
  
  const paidAmount = milestones
    .filter(m => m.status === 'paid')
    .reduce(
      (sum, m) => sum + parseFloat(m.amount.toString()), 
      0
    ).toFixed(2),
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import { Milestone } from "@/hooks/useMilestones";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
=======
import React from "react";"
import { Milestone } from "@/hooks/useMilestones";"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CreditCard } from "lucide-react";
interface PaymentSummaryProps {}
  milestones: Milestone[];
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  paymentTerms: string | null;
}

<<<<<<< HEAD
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {
  const totalPayment = milestones.reduce(
    (sum, m) => sum + parseFloat(m.amount.toString()), 
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const paidAmount = milestones
=======
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({}
  milestones,
  paymentTerms,
}) => {};
  const totalPayment = milestones;
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);

  const paidAmount = milestones"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  milestones,
  paymentTerms,
}) => {
  const totalPayment = milestones
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);

  const paidAmount = milestones
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    .filter((m) => m.status === "paid")
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)
    .toFixed(2);

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Card className="mb-8 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary
=======





  return ("
    <Card className="mb-8 bg-muted/30">"
      <CardHeader className="pb-3">"
        <CardTitle className="text-lg flex items-center">"
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </CardTitle>
      </CardHeader>
      <CardContent>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>"
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>"
            <p className="text-2xl font-semibold">${totalPayment}</p>
          </div>

          <div>"
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>"
            <p className="font-medium capitalize">"
              {paymentTerms |"Not specified"}
            </p>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div>"
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <p className="font-medium">${paidAmount}</p>
            <p className="font-medium">
              ${paidAmount}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Milestone} from '@/hooks/useMilestones';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {CreditCard} from 'lucide-react';
interface PaymentSummaryProps {;
  milestones: Milestone[],;
  paymentTerms: string | null;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <p className="font-medium">
              ${paidAmount}
<<<<<<< HEAD
  )
=======
=======
            <p className="font-medium">${paidAmount}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          </div>
=======
}

            <p className="font-medium">
              ${paidAmount}          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>
            <p className="font-medium">${paidAmount}</p>
          </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>
      </CardContent>
    </Card>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};




  );



  );
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );  );
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  );  );
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
};
  );
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
import React from './react';'
import { Milestone  } from '@/hooks / use_milestones';'
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';'
import { CreditCard  } from './lucide-react';
interface PaymentSummaryProps {}
  milestones: Milestone[];
  payment_terms: string | null;
}
export const PaymentSummary: React.FC < PaymentSummaryProps> = ({}
  milestones,
  payment_terms,
}) => {};
  const total_payment = milestones;
    .reduce ((sum, m) => sum + parse_float (m.amount.to_string ()), 0);
    .to_fixed (2);
;
  const paid_amount = milestones;"
    .filter ((m) => m.status === "paid");
    .reduce ((sum, m) => sum + parse_float (m.amount.to_string ()), 0);
    .to_fixed (2);
;
<<<<<<< HEAD
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
<<<<<<< HEAD
            <p className="text - sm text - muted - foreground mb-1">Paid Amount</p>;
            <p className="font-medium">${paid_amount}</p>;
=======
  return ("
    <Card className="mb - 8 bg - muted / 30">;"
      <CardHeader className="pb - 3">;"
        <CardTitle className="text - lg flex items - center">;"
          <CreditCard className="h - 5 w - 5 mr - 2 text - primary" /> Payment Summary;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
          <div>;"
            <p className="text - sm text - muted - foreground mb - 1">Total Payment</p>;"
            <p className="text - 2xl font - semibold">${total_payment}</p>;
          </div>;
          <div>;"
            <p className="text - sm text - muted - foreground mb - 1">Payment Terms</p>;"
            <p className="font - medium capitalize">;"
              {payment_terms || "Not specified"}
            </p>;
          </div>;
          <div>;"
            <p className="text - sm text - muted - foreground mb - 1">Paid Amount</p>;"
            <p className="font - medium">${paid_amount}</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <p className="text - sm text - muted - foreground mb - 1">Paid Amount</p>;
            <p className="font - medium">${paid_amount}</p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
;

'
import React from 'react',;'
import { Milestone } from '@/hooks/useMilestones',;'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
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
  const paidAmount = milestones;'
    .filter(m => m.status === 'paid');
    .reduce(;
      (sum, m) => sum + parseFloat(m.amount.toString()), ;
      0;
    ).toFixed(2),;
;
  return (;"
    <Card className="mb-8 bg-muted/30">;"
      <CardHeader className="pb-3">;"
        <CardTitle className="text-lg flex items-center">;"
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;
        </CardTitle>;
      </CardHeader>;
      <CardContent>;"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
          <div>;"
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>;"
            <p className="text-2xl font-semibold">;
              ${totalPayment}
            </p>;
          </div>;
          ;
          <div>;"
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>;"
            <p className="font-medium capitalize">;"
              {paymentTerms || "Not specified"}
            </p>;
          </div>;
          ;
          <div>;"
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>;"
            <p className="font-medium">;
              ${paidAmount}
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  ),;'"
},; const paidAmount = milestones .filter (m => m.status === 'paid') return (<Card className="mb-8 bg-muted/30" > <CardHeader className="pb-3" > <CardTitle className="text-lg flex items-center" > <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary </CardTitle> </CardHeader> <CardContent> <div className="grid grid-cols-1 md:grid-cols-3 gap-6" > <div> <p className="text-sm text-muted-foreground mb-1" >Total Payment</p> <p className="text-2xl font-semibold" > $ {}
  totalPayment;
}</p> </div> <div> </p> </div> <div> </p> </div> </div> </CardContent> </Card>) 
};

};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
