
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { CreditCard, Plus, Trash } from 'lucide-react'
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
xport function PaymentMethods() {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function PaymentMethods() {
>>>>>>>   // Mock payment methods
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from 'lucide-react'

export function PaymentMethods() {
  // Mock payment methods
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const paymentMethods = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       expYear: 2025,
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      expYear: 2025,
>>>>>>>       isDefault: true},
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      expYear: 2025,
      isDefault: true},
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      expMonth: 4,
      expYear: 2026,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      isDefault: false}
  ],

=======
      isDefault: false,
    },
  ]
      isDefault: false}
  ],
>>>>>>> 
>>>>>>>   return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      isDefault: false,
    },
  ]
      isDefault: false}
  ],

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
>>>>>>>       </CardHeader>

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {paymentMethods.map(method => (
          <div            key={method.id}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <CardContent className="space-y-4">
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border"
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className={`flex items-center justify-between p-4 rounded-lg border ${

              method.isDefault ? "bg-muted border-primary" : "border-border";
>>>>>>>             }`}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border"
            }`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

                      Default
                    </span>
                  )}
                </p>

                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className='flex gap-2'>                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                       Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                <p className="text-sm text-muted-foreground">
>>>>>>>                   Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                      Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                <p className="text-sm text-muted-foreground">
                <p className="text-sm text-muted-foreground">
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='flex gap-2'>
              {!method.isDefault && (
                <Button size='sm' variant='ghost'>
                  Set Default
                </Button>
              )}
              <Button size='sm' variant='ghost' className='text-destructive'>
                <Trash className='h-4 w-4' />              </Button>              {!method.isDefault && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <Button size="sm" variant="ghost">Set Default</Button>
ursor/fix-website-loading-errors-and-merge-6662
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>


            <div className="flex gap-2">
              {!method.isDefault && (


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <Button size="sm" variant="ghost">Set Default</Button>
>>>>>>>               )}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className="flex gap-2">
              {!method.isDefault && (
                <Button size="sm" variant="ghost">Set Default</Button>
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        ))}
      </CardContent>
      <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button className='gap-1'>
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">
        <Button className="gap-1">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>;
    </Card>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <Button className="gap-1">

=======
        <Button className="gap-1">
>>>>>>>           <Plus className="h-4 w-4" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Plus className="h-4 w-4" />
>>>>>>>           Add Payment Method
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Payment Method
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
      </CardContent>;
      <CardFooter>;
        <Button className='gap-1'>;
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">;
=======
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
