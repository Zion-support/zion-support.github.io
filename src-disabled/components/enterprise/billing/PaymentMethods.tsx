:src_backup/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",

import React from "react",
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
origin/cursor/automate-test-improve-and-merge-code-2533
import { CreditCard, Plus, Trash } from 'lucide-react'

:src_backup/components/enterprise/billing/PaymentMethods.tsx
export function PaymentMethods() {
  // Mock payment methods
  const paymentMethods = [
    {
export function PaymentMethods() {
  // Mock payment methods
const paymentMethods = [
    {

      id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
isDefault: false}
  ],
export function PaymentMethods() {
  // Mock payment methods
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
:src_backup/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
=======
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
<CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
origin/cursor/automate-test-improve-and-merge-code-2533
      </CardHeader>
      <CardContent className="space-y-4">"
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}

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
:src_backup/components/enterprise/billing/PaymentMethods.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
:src_backup/components/enterprise/billing/PaymentMethods.tsx
<span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                      Default
                    </span>
                  )}
                </p>
:src_backup/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                <p className="text-sm text-muted-foreground">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                <p className="text-sm text-muted-foreground">"
                <p className="text-sm text-muted-foreground">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
:src_backup/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex gap-2">
              {!method.isDefault && (
=======

:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            <div className="flex gap-2">"
              {!method.isDefault && (
                <Button size="sm" variant="ghost">Set Default</Button>"
              )}
              <Button size="sm" variant="ghost" className="text-destructive">"
                <Trash className="h-4 w-4" />"
            <div className="flex gap-2">
              {!method.isDefault && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
                <Button size="sm" variant="ghost">Set Default</Button>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
:src_backup/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
<<<<<<< HEAD
      </CardContent>
      <CardFooter>

        <Button className="gap-1">

        <Button className="gap-1">

<<<<<<< HEAD

        <Button className="gap-1">

        <Button className="gap-1">

:src_backup/components/enterprise/billing/PaymentMethods.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>;
    </Card>;
  );
};
:src_backup/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
:src_backup/components/enterprise/billing/PaymentMethods.tsx
)
=======
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
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
:src_backup/components/enterprise/billing/PaymentMethods.tsx
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
:src_backup/components/enterprise/billing/PaymentMethods.tsx

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
:src_backup/components/enterprise/billing/PaymentMethods.tsx
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;
              method.isDefault ? "bg-muted border-primary" : "border-border";
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
:src_backup/components/enterprise/billing/PaymentMethods.tsx
                  {method.isDefault && (;
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">;
                      Default;
                    </span>;
                  )}
                </p>;
                <p className="text-sm text-muted-foreground">;
                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
            </div>;
:src_backup/components/enterprise/billing/PaymentMethods.tsx
            <div className="flex gap-2">;
              {!method.isDefault && (;
                <Button size="sm" variant="ghost">Set Default</Button>;
              )}
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h-4 w-4" />;
              </Button>;
            </div>;
          </div>;
        ))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
:src_backup/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/enterprise/billing/PaymentMethods.tsx
=======
}}}))))))]
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
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
:src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

              </div>;
              <div>;
                <p className='font - medium'>;
                    <span className='ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5'>                      Default;
</span>)
                    </span>)}
                </p>;
                <p className='text - sm text - muted - foreground'>                  Expires {method.exp_month}/{method.exp_year}
            <div className='flex gap - 2'>                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5">;"
                </p>;"
                <p className='text - sm text - muted - foreground'>                <p className="text - sm text - muted - foreground">;"
            </div>;"
            <div className='flex gap - 2'>;
                <Button size='sm' variant='ghost'>;

                )}
              <Button size='sm' variant='ghost' className='text - destructive'>;

                <Trash className='h - 4 w - 4' />                            {!method.is_default && (
)
                <Button size="sm" variant="ghost">Set Default)}""
              <Button size="sm" variant="ghost" className="text - destructive">;"
                <Trash className="h - 4 w - 4" />;"

          </div>))}
        <Button className='gap - 1'>;

          <Plus className='h - 4 w - 4' />          Add Payment Method        <Button className="gap - 1">;"
          <Plus className="h - 4 w - 4" />;"

    );"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/enterprise/billing/PaymentMethods.tsx
