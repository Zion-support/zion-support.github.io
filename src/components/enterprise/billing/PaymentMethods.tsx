<<<<<<< HEAD



import { CreditCard, Plus, Trash } from 'lucide-react'



=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
=======
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from 'lucide-react'
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import { CreditCard, Plus, Trash } from 'lucide-react'
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';


import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from 'lucide-react'

<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export function PaymentMethods() {
  // Mock payment methods

  const paymentMethods = [
    {
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
      id: 'pm-1'
      type: 'credit_card'
      brand: 'Visa'
      last4: '4242'
      expYear: 2025
      isDefault: true
    }
    {
      id: 'pm-2'
      type: 'credit_card'
      brand: 'Mastercard'
      last4: '8888'
      expMonth: 4
      expYear: 2026
      isDefault: false
    }
  ]
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      expYear: 2025,
      isDefault: true},
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      expMonth: 4,
      expYear: 2026,
<<<<<<< HEAD







>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      isDefault: false,
    },
  ]
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      isDefault: false}
  ],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CreditCard, Plus, Trash } from 'lucide-react';
export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
      id: 'pm-1',;
      type: 'credit_card',;
      brand: 'Visa',;
      last4: '4242',;
      expYear: 2025,;
      isDefault: true,;
    },;
    {;
      id: 'pm-2',;
      type: 'credit_card',;
      brand: 'Mastercard',;
      last4: '8888',;
      expMonth: 4,;
      expYear: 2026,;
      isDefault: false,;
    },;
  ];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
        {paymentMethods && paymentMethods.map(method => (;
          <div            key={method && method.id}
      <CardContent className="space-y-4">;
        {paymentMethods && paymentMethods.map((method,) => (;
          <div
            key = {method && method.id,}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            className={`flex items-center justify-between p-4 rounded-lg border ${

=======
              method.isDefault ? "bg-muted border-primary" : "border-border";
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
<<<<<<< HEAD

=======
<<<<<<< HEAD
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className='flex gap-2'>                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
=======
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                      Default
                    </span>
                  )}
                </p>


                <p className="text-sm text-muted-foreground">
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>


            <div className="flex gap-2">
              {!method.isDefault && (
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                <Button size="sm" variant="ghost">Set Default</Button>
              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
        ))}
<<<<<<< HEAD

=======
      </CardContent>
      <CardFooter>
<<<<<<< HEAD
        <Button className='gap-1'>
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        <Button className="gap-1">

=======

        <Button className="gap-1">

=======
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>;
    </Card>;
  );
};
=======
        <Button className="gap-1">
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD


=======

=======

=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from 'lucide-react';
export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
      id: "pm-1",;
      type: "credit_card",;
      brand: "Visa",;
      last4: "4242",;
      expMonth: 12,;
      expYear: 2025,;
      isDefault: true},;
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
      expYear: 2026;
      isDefault: false}
  ];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (;
          <div;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;
              method.isDefault ? "bg-muted border-primary" : "border-border";
            }`}
          >
            <div className='flex items-center space-x-4'>
              <div className='h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background'>
                <CreditCard className='h-5 w-5' />
              </div>
              <div>
                <p className='font-medium'>
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className='flex gap-2'>

                      Default
                    </span>
                  )}
                </p>

                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>

              </Button>

            </div>
          </div>
        ))}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      </CardContent>;
      <CardFooter>;
        <Button className='gap-1'>;
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
<<<<<<< HEAD

  );
}

=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
export /**
 * PaymentMethods - Function description
 */
function PaymentMethods() {
  // Mock payment methods;
  const payment_methods = [;
    {
      id: 'pm - 1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
      exp_year: 2025,
      is_default: true,
    },
    {
      id: 'pm - 2',
      type: 'credit_card',
      brand: 'Mastercard',
      last4: '8888',
      exp_month: 4,
      exp_year: 2026,
      is_default: false,
    },
  ];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle > Payment Methods</CardTitle>;
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        {payment_methods.map (method => (
          <div            key={method.id}
      <CardContent className="space - y-4">;
        {payment_methods.map ((method, ) => (
          <div;
            key = {method.id, }
            className={`flex items - center justify - between p - 4 rounded - lg border ${
              method.is_default ? 'bg - muted border - primary' : 'border - border';
            }`}
          >;
            <div className='flex items - center space - x-4'>;
              <div className='h - 10 w - 10 rounded - md border border - border flex items - center justify - center bg - background'>;
                <CreditCard className='h - 5 w - 5' />;
              </div>;
              <div>;
                <p className='font - medium'>;
                  {method.brand} •••• {method.last4}
                  {method.is_default && (
                    <span className='ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5'>                      Default;
                    </span>)}
                </p>;
                <p className='text - sm text - muted - foreground'>                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
            <div className='flex gap - 2'>                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5">;
                      Default;
                    </span>)}
                </p>;
                <p className='text - sm text - muted - foreground'>                <p className="text - sm text - muted - foreground">;
                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
            <div className='flex gap - 2'>;
              {!method.is_default && (
                <Button size='sm' variant='ghost'>;
                  Set Default;
                </Button>)}
              <Button size='sm' variant='ghost' className='text - destructive'>;
                <Trash className='h - 4 w - 4' />              </Button>              {!method.is_default && (
                <Button size="sm" variant="ghost">Set Default</Button>)}
              <Button size="sm" variant="ghost" className="text - destructive">;
                <Trash className="h - 4 w - 4" />;
              </Button>;
            </div>;
          </div>))}
      </CardContent>;
      <CardFooter>;
        <Button className='gap - 1'>;
          <Plus className='h - 4 w - 4' />          Add Payment Method        <Button className="gap - 1">;
          <Plus className="h - 4 w - 4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
