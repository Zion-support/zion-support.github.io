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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Card className="mb-8 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary

        </CardTitle>
      </CardHeader>
      <CardContent>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>"
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>"
            <p className="text-2xl font-semibold">${totalPayment}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className="font-medium capitalize">
              {paymentTerms |"Not specified"}
            </p>
          </div>


<<<<<<< HEAD
=======
            <p className="font-medium">${paidAmount}</p>
          </div>

        </div>
      </CardContent>
    </Card>
  );

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
import React from './react';
import { Milestone  } from '@/hooks / use_milestones';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components / ui / card';
import { CreditCard  } from './lucide-react';
interface PaymentSummaryProps {}
  milestones: Milestone[];
  payment_terms: string | null;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
import { CreditCard } from 'lucide-react',;

=======

          </div>;
        </div>;
      </CardContent>;
    </Card>);
}
;

'
import React from 'react',;'
import { Milestone } from '@/hooks/useMilestones',;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
interface PaymentSummaryProps {;
  milestones:Milestone[],;
  paymentTerms:string | null;
}
;
<<<<<<< HEAD

export const PaymentSummary:React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {;
  const totalPayment = milestones.reduce(;

=======
export const "PaymentSummary":React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms }) => {;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    (sum, m) => sum + parseFloat(m.amount.toString()), ;
    0;
  ).toFixed(2),;
  ;
<<<<<<< HEAD

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


=======
    .filter(m => { return m.status === 'paid'); }'
              ${paidAmount}
  )
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;

<<<<<<< HEAD
  );



=======
  ),;
},; const paidAmount = milestones .filter (m => m.status === 'paid') return (<Card className="mb-8 bg-muted/30" > <CardHeader className="pb-3" > <CardTitle className="text-lg flex items-center" > <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary </CardTitle> </CardHeader> <CardContent> <div className="grid grid-cols-1 md:grid-cols-3 gap-6" > <div> <p className="text-sm text-muted-foreground mb-1" >Total Payment</p> <p className="text-2xl font-semibold" > $ {
  totalPayment 
}</p> </div> <div> </p> </div> <div> </p> </div> </div> </CardContent> </Card>) 
};

};

};


'"
>>>>>>> origin/cursor/delete-old-data-records-6bba
