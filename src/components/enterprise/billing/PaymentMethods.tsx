<<<<<<< HEAD
<<<<<<< HEAD
=======
import { CreditCard, Plus, Trash } from 'lucide-react'



import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import { CreditCard, Plus, Trash } from 'lucide-react'



<<<<<<< HEAD
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function PaymentMethods() {
  // Mock payment methods
<<<<<<< HEAD

  const paymentMethods = [
    {


      id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',


      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,




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
      isDefault: false}
  ],
=======






>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

=======
id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },
    {
      id: 'pm-2',
      type: 'credit_card',
      brand: 'Mastercard',
      last4: '8888',
      expMonth: 4,
      expYear: 2026,
      isDefault: false,
    },
  ];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
<<<<<<< HEAD

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
=======
<CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      </CardHeader>

      <CardContent className="space-y-4">
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}
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

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}

            className={`flex items-center justify-between p-4 rounded-lg border ${

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

                      Default
                    </span>
                  )}
                </p>


<<<<<<< HEAD
=======
                <p className="text-sm text-muted-foreground">


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>


<<<<<<< HEAD
=======
            <div className="flex gap-2">
              {!method.isDefault && (


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                <Button size="sm" variant="ghost">Set Default</Button>
              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        <Button className="gap-1">


        <Button className="gap-1">

<<<<<<< HEAD
      </CardContent>
      <CardFooter>
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>;
    </Card>;
  );
};
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>




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
<<<<<<< HEAD
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className='flex gap-2'>

=======
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      Default
                    </span>
                  )}
                </p>
<<<<<<< HEAD

=======
<p className='text-sm text-muted-foreground'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
<<<<<<< HEAD

=======
<div className='flex gap-2'>
              {!method.isDefault && (
                <Button size='sm' variant='ghost'>
                  Set Default
                </Button>
              )}
              <Button size='sm' variant='ghost' className='text-destructive'>
                <Trash className='h-4 w-4' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              </Button>

            </div>
          </div>
        ))}
<<<<<<< HEAD
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
=======

  );
}

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/ card';
import { Button } from '@/components/ui/ button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/ card';
import { Button  } from '@/components/ui/ button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/ card';
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
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      </CardContent>
      <CardFooter>
<Button className='gap-1'>
          <Plus className='h-4 w-4' />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
