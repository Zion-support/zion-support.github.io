import React from 'react';
import { Milestone  } from '@/hooks/useMilestones';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
}; import React from 'react'
import { Milestone } from '@/hooks/useMilestones'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
interface PaymentSummaryProps {

  milestones: Milestone[]
  paymentTerms: string | null
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ milestones, paymentTerms },) => {;
  const totalPayment = milestones.reduce(;
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

  const paidAmount = milestones;
    .filter(m => m && m.status === 'paid');
    .reduce(;
      (sum, m) => sum + parseFloat(m && m.amount.toString());      0;
    ).toFixed(2);



            </p>
          </div>
          
            </p>;
          </div>;
        </div>;
      </CardContent>;
    </Card>;
  );
};
'";
