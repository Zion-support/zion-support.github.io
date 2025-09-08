<<<<<<< HEAD



import React from react",
=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
import { CreditCard, Plus, Trash } from 'lucide-react'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { CreditCard, Plus, Trash } from 'lucide-react'
import { CreditCard, Plus, Trash } from 'lucide-react
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';



<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import React from "react,
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card",
import { Button } from "@/components/ui/button,
=======
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from "react",
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
origin/cursor/automate-test-improve-and-merge-code-2533
import { CreditCard, Plus, Trash } from 'lucide-react'

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



export function PaymentMethods() {
  // Mock payment methods








<<<<<<< HEAD
id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',
=======
id: pm-1',
      type: 'credit_card,
      brand: Visa',
      last4: '4242,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function PaymentMethods() {
  // Mock payment methods

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


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
      isDefault: false,
    },
  ];
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      isDefault: false,
    },
  ];
      isDefault: false}];
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

export function PaymentMethods() {
  // Mock payment methods

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>

<CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
origin/cursor/automate-test-improve-and-merge-code-2533
      </CardHeader>
      <CardContent className="space-y-4">"
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
import { CreditCard, Plus, Trash  } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter  } from '@/components/ui/card';
import React from "react",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import React from 'react';
export function PaymentMethods() {// Mock payment methods;
  const paymentMethods = [;
<<<<<<< HEAD
    {id: 'pm-1',type: 'credit_card',brand: 'Visa',last4: '4242',id: "pm-1",type: "credit_card",brand: "Visa",last4: "4242",expMonth: 12,expYear: 2025,isDefault: true},{id: "pm-2",type: "credit_card",brand: "Mastercard",last4: "8888",expMonth: 4,expYear: 2026,isDefault: false}
  ],id: 'pm-1',type: 'credit_card',brand: 'Visa',last4: '4242',expMonth: 12,expYear: 2025,isDefault: true},{id: 'pm-2',type: 'credit_card',brand: 'Mastercard',last4: '8888',expMonth: 4,expYear: 2026,isDefault: false}];return (<Card>;
=======
    {id: 'pm-1,type: credit_card',brand: 'Visa,last4: 4242',id: pm-1,type: "credit_card",brand: Visa,last4: "4242",expMonth: 12,expYear: 2025,isDefault: true},{id: pm-2,type: "credit_card",brand: Mastercard,last4: "8888",expMonth: 4,expYear: 2026,isDefault: false}
  ],id: 'pm-1,type: credit_card',brand: 'Visa,last4: 4242',expMonth: 12,expYear: 2025,isDefault: true},{id: 'pm-2,type: credit_card',brand: 'Mastercard,last4: 8888',expMonth: 4,expYear: 2026,isDefault: false}];return (<Card>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <Card>

      <CardHeader>

        <CardTitle>Payment Methods

        <CardDescription>Manage your payment methods for automatic billing
"
      <CardContent className="space-y-4">"

          <div;
            key = {method.id,}"
pr-12325
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
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from "react";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { CreditCard, Plus, Trash } from 'lucide-react';')
pr-12325
export function PaymentMethods() {;
  // Mock payment methods;,
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
      id: 'pm-2',;
pr-12325
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
        <CardDescription>;
          Manage your payment methods for automatic billing;
=======
<<<<<<< HEAD
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
<CardDescription>Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method,) => (<div;
            key = {method.id}
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components/ui/card';
export function PaymentMethods() {// Mock payment methods;
  const paymentMethods = [;
    {id: 'pm-1',type: 'credit_card',brand: 'Visa',last4: '4242',expYear: 2025,isDefault: true},{id: 'pm-2',type: 'credit_card',brand: 'Mastercard',last4: '8888',expMonth: 4,expYear: 2026,isDefault: false}];
  return (<Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing;
=======
        <CardDescription>;
          Manage your payment methods for automatic billing;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
<<<<<<< HEAD
        {paymentMethods && paymentMethods.map(method => (<div            key={method && method.id}
      <CardContent className="space-y-4">;
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
        {paymentMethods && paymentMethods.map(method => (;
          <div            key={method && method.id}
      <CardContent className="space-y-4">;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {paymentMethods && paymentMethods.map((method,) => (<div;
            key = {method && method.id}<CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (<div;
<<<<<<< HEAD
            key={method.id}className={`flex items-center justify-between p-4 rounded-lg border ${method.isDefault ? "bg-muted border-primary" : "border-border";
=======
            key={method.id}className={`flex items-center justify-between p-4 rounded-lg border ${method.isDefault ? "bg-muted border-primary : border-border";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {paymentMethods && paymentMethods.map((method,) => (;
          <div
            key = {method && method.id,}

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">"
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${`
              method.isDefault ? "bg-muted border-primary" : "border-border";
            }`}`
          >
            <div className="flex items-center space-x-4">"
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">"
                <CreditCard className="h-5 w-5" />"
              </div>
              <div>
                <p className="font-medium">"
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border"
            }`}

<<<<<<< HEAD

=======
                      Default
                    </span>
                  )}
                </p>
=======
<<<<<<< HEAD
          >;
            <div className="flex items-center space-x-4">;
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">;
                <CreditCard className="h-5 w-5" />;
              </div>;
              <div>;
                <p className="font-medium">;
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (Default;
                    </span>;
                  )}
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
                </p>

:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
                </p>

=======
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
>>>>>>> merged-prs-20250907-203621

                      Default
                    </span>
                  )}
                </p>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <p className="text-sm text-muted-foreground">

                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            <div className="flex gap-2">
              {!method.isDefault && (



<<<<<<< HEAD
            <div className="flex gap-2">
=======
            <div className=flex gap-2>
=======
>>>>>>> merged-prs-20250907-203621
            <div className="flex gap-2">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {!method.isDefault && (

                <Button size="sm" variant="ghost">Set Default</Button>

              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
        ))}

        <Button className="gap-1">

        <Button className="gap-1">

        <Button className="gap-1">

<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
        <Button className="gap-1">
=======
        <Button className="gap-1">
        <Button className=gap-1>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
<<<<<<< HEAD

=======
<<<<<<< HEAD
      </CardFooter>;
    </Card>;
=======
<<<<<<< HEAD
                </p>;
                <p className="text-sm text-muted-foreground">;
                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
            <div className="flex gap-2">;
              {!method.isDefault && (<Button size="sm" variant="ghost">Set Default</Button>;
              )}
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h-4 w-4" />;
              </Button>;
            </div>;
        ))}<Button className="gap-1">;
        <Button className="gap-1">;
      </CardContent>;
      <CardFooter>;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )}<Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
export function PaymentMethods() {// Mock payment methods;
  const paymentMethods = [;
    {id: "pm-1",type: "credit_card",brand: "Visa",last4: "4242",expMonth: 12,expYear: 2025,isDefault: true},{id: "pm-2",type: "credit_card",brand: "Mastercard",last4: "8888",expMonth: 4,expYear: 2026;
      isDefault: false}
  ];
  return (<Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (<div;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${method.isDefault ? "bg-muted border-primary" : "border-border";
            }`}
          >;
            <div className='flex items-center space-x-4'>;
              <div className='h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background'>;
                <CreditCard className='h-5 w-5' />;
              </div>;
              <div>;
                <p className='font-medium'>;
                  {method.brand} •••• {method.last4}
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {method.isDefault && (
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      Default
                    </span>
                  )}
                </p>
<p className='text-sm text-muted-foreground'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
<div className='flex gap-2'>
              {!method.isDefault && (
                <Button size='sm' variant='ghost'>
                  Set Default
                </Button>
              )}
              <Button size='sm' variant='ghost' className='text-destructive'>
                <Trash className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
              </Button>

            </div>
        ))}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
  // Mock payment methods;,
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
      expYear: 2026;,
      expYear: 2026;
      isDefault: false}

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
});
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx

import React from 'react';
import {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React from react;
=======
>>>>>>> merged-prs-20250907-203621
import React from 'react';
import {
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD


=======
<<<<<<< HEAD
  CardTitle,
} from '@/components/ui/ card';
import { Button } from '@/components/ui/ button';
import { CreditCard, Plus, Trash } from 'lucide-react';
                  {method.isDefault && (<span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default;
=======
<<<<<<< HEAD
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
=======
<<<<<<< HEAD
  CardTitle} from '@/components/ui/ card';
import { Button } from @/components/ui/ button;
                  {method.isDefault && (<span className=ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5>                      Default;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </span>;
                  )}
                </p>;
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
            <div className='flex gap-2'>;
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>;
                      Default;
                    </span>;
                  )}
                </p>;
<p className='text-sm text-muted-foreground'>;
                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
<div className='flex gap-2'>;
              {!method.isDefault && (<Button size='sm' variant='ghost'>;
                  Set Default;
                </Button>;
              )}
              <Button size='sm' variant='ghost' className='text-destructive'>;
                <Trash className='h-4 w-4' />;
              </Button>;
            </div>;
        ))}</CardContent>;
      <CardFooter>;
        <Button className='gap-1'>;
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  )})}import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
import React from './react';
=======
import React from './react';
import React from ./react;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle   } from '@/components / ui / card';
import { Button   } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter  } from '@/components / ui / card';
export /**;
 * PaymentMethods - Function description;
 */;
function PaymentMethods() {// Mock payment methods;
  const payment_methods = [;
    {id: 'pm - 1',type: 'credit_card',brand: 'Visa',last4: '4242',exp_year: 2025,is_default: true},{id: 'pm - 2',type: 'credit_card',brand: 'Mastercard',last4: '8888',exp_month: 4,exp_year: 2026,is_default: false}];
  return (<Card>;
      <CardHeader>;
        <CardTitle > Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
      <CardContent className='space - y-4'>;
        {payment_methods.map (method => (<div            key={method.id}
      <CardContent className="space - y-4">;
        {payment_methods.map ((method, ) => (<div;
            key = {method.id }
<<<<<<< HEAD
            className={`flex items - center justify - between p - 4 rounded - lg border ${method.is_default ? 'bg - muted border - primary' : 'border - border';
=======
            className={`flex items - center justify - between p - 4 rounded - lg border ${method.is_default ? 'bg - muted border - primary' : border - border;
=======
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
export /**
 * PaymentMethods - Function description
 */
function PaymentMethods() {
  // Mock payment methods;
  const payment_methods = [;,
    {
      id: 'pm - 1','
      type: 'credit_card','
      brand: 'Visa','
      last4: '4242','
      exp_year: 2025,
      is_default: true,
    },
    {
      id: 'pm - 2','
      type: 'credit_card','
      brand: 'Mastercard','
      last4: '8888','
      exp_month: 4,
      exp_year: 2026,
      is_default: false,
    },

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

            }`}
    },;]
  ];
    <Card>;
</div>
      <CardHeader>;

        <CardTitle>Payment Methods;
        <CardDescription>;

        ;
      <CardContent className='space-y-4'>;

          <div            key={method && method.id}
      <CardContent className="space-y-4">;"
            key = {method && method.id,}

            key={method.id}

            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border";"`;
            }`}
          >
</div>"
            <div className="flex items-center space-x-4">"
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">"
                <CreditCard className="h-5 w-5" />"

              <div>
                <p className="font-medium">"
</p>
                    </span>

                <p className="text-sm text-muted-foreground">"

            <div className="flex gap-2">"
                <Button size="sm" variant="ghost">Set Default""
              <Button size="sm" variant="ghost" className="text-destructive">"
                <Trash className="h-4 w-4" />"

        <Button className="gap-1">"
          <Plus className="h-4 w-4" />"

    ;"

        <CardDescription>Manage your payment methods for automatic billing;

            key={method.id}`;
            className={`flex items-center justify-between p-4 rounded-lg border ${;"
            <div className='flex items-center space-x-4'>
              <div className='h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background'>
                <CreditCard className='h-5 w-5' />

                <p className='font-medium'>
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default;
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
            <div className='flex gap-2'>

      <CardFooter>;

        <Button className='gap-1'>;

          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">;"
          <Plus className="h-4 w-4" />;"

        <CardTitle > Payment Methods;

      <CardContent className='space - y-4'>;

          <div            key={method.id}
      <CardContent className="space - y-4">;"
            key = {method.id, }`;
            className={`flex items - center justify - between p - 4 rounded - lg border ${"
              method.is_default ? 'bg - muted border - primary' : 'border - border';`;
pr-12325
          >;
            <div className="flex items-center space-x-4">;
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">;
                <CreditCard className="h-5 w-5" />;
              </div>;
              <div>;
                <p className="font-medium">;
                  {method.brand} •••• {method.last4}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  {method.is_default && (<span className='ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5'>                      Default;
                    </span>)}
                </p>;
                <p className='text - sm text - muted - foreground'>                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
<<<<<<< HEAD
            <div className='flex gap - 2'>                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5">;
=======
            </div>;
            <div className='flex gap - 2'>                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      Default;
                    </span>;
                  )}
                </p>;
                <p className="text-sm text-muted-foreground">;
                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
            <div className='flex gap - 2'>;
              {!method.is_default && (<Button size='sm' variant='ghost'>;
                  Set Default;
                </Button>)}
              <Button size='sm' variant='ghost' className='text - destructive'>;
                <Trash className='h - 4 w - 4' />              </Button>              {!method.is_default && (<Button size="sm" variant="ghost">Set Default</Button>)}
              <Button size="sm" variant="ghost" className="text - destructive">;
                <Trash className="h - 4 w - 4" />;
=======
            </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className='flex gap - 2'>;
              {!method.is_default && (<Button size='sm' variant='ghost'>;
            <div className=flex gap - 2>;
              {!method.is_default && (<Button size='sm' variant=ghost>;
                  Set Default;
                </Button>)}
              <Button size='sm' variant=ghost className='text - destructive'>;
                <Trash className=h - 4 w - 4 />              </Button>              {!method.is_default && (<Button size="sm variant=ghost">Set Default</Button>)}
              <Button size="sm variant=ghost" className="text - destructive>;
                <Trash className=h - 4 w - 4" />;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

              </Button>;
            </div>;
        ))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </Card>);
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </Card>;
  );
}
;

      </CardContent>
      <CardFooter>
<Button className='gap-1'>
          <Plus className='h-4 w-4' />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
  );
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </Card>)}</CardContent>;
      <CardFooter>;
<Button className='gap-1'>;
          <Plus className='h-4 w-4' />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  )}
}
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
