


import React from react",

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card;
import { Button } from @/components/ui/button";
origin/cursor/automate-test-improve-and-merge-code-2533



export function PaymentMethods() {
  // Mock payment methods

      id: "pm-1,
      type: credit_card",
      brand: "Visa,
      last4: 4242",
      expMonth: 12,

      expYear: 2025,
      isDefault: true},
    {
      id: "pm-2,
      type: credit_card",
      brand: "Mastercard,
      last4: 8888",
      expMonth: 4,
      expYear: 2026,



export function PaymentMethods() {
  // Mock payment methods

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>

<CardDescription>
          Manage your payment methods for automatic billing
        </CardDescription>
origin/cursor/automate-test-improve-and-merge-code-2533
      </CardHeader>
      <CardContent className="space-y-4>
        {paymentMethods.map((method,) => (
          <div
            key = {method.id,}



  return (
    <Card>

      <CardHeader>

        <CardTitle>Payment Methods

        <CardDescription>Manage your payment methods for automatic billing

      <CardContent className=space-y-4">"

          <div;
            key = {method.id}
pr-12325
import React from 'react;
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle} from @/components/ui/card';
import { Button } from '@/components/ui/button;
import { CreditCard, Plus, Trash } from lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card";
import { Button } from "@/components/ui/button;
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card;
import React from react";"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from @/components/ui/card";"
import { Button } from @/components/ui/button";"
import { CreditCard, Plus, Trash } from 'lucide-react;)
pr-12325
export function PaymentMethods() {
  // Mock payment methods;,
    {
      id: 'pm-1',
      type: credit_card,
      brand: 'Visa',
      last4: 4242,
      expYear: 2025,
      isDefault: true},
    {
      id: 'pm-2',
      type: credit_card,
      id: 'pm-2',
pr-12325
      brand: Mastercard,
      last4: '8888',
      expMonth: 4,
      expYear: 2026,
      isDefault: false}];
  return (
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;


        </CardDescription>;
      </CardHeader>;
      <CardContent className='space-y-4'>;
        {paymentMethods && paymentMethods.map(method => (;
          <div            key={method && method.id}
      <CardContent className="space-y-4">;


        {paymentMethods && paymentMethods.map((method,) => (;
          <div
            key = {method && method.id}

        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${`
              method.isDefault ? "bg-muted border-primary" : border-border;
            }`}`
          >
            <div className="flex items-center space-x-4">
              <div className=h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">"
                <CreditCard className=h-5 w-5 />"
              </div>
              <div>
                <p className="font-medium>
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
      <CardContent className="space-y-4">
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? bg-muted border-primary : "border-border"
            }`}



                <p className=text-sm text-muted-foreground>

                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>



              {!method.isDefault && (

                <Button size="sm" variant=ghost>Set Default</Button>

              )}
              <Button size="sm" variant=ghost className="text-destructive">
                <Trash className=h-4 w-4 />
              </Button>
            </div>
          </div>
        ))}

        <Button className="gap-1">

        <Button className=gap-1>

        <Button className="gap-1">

        <Button className="gap-1">
        <Button className=gap-1>

          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>


  );
}

        <Button className=gap-1>
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>

import React from react,
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from @/components/ui/button,
import { CreditCard, Plus, Trash } from 'lucide-react';
export function PaymentMethods() {
  // Mock payment methods;,
  // Mock payment methods;
    {
      id: "pm-1",
      type: credit_card,
      brand: "Visa",
      last4: 4242,
      expMonth: 12,
      expYear: 2025,
      isDefault: true},
    {
      id: "pm-2",
      type: credit_card,
      brand: "Mastercard",
      last4: 8888,
      expMonth: 4,
      expYear: 2026;,
      expYear: 2026;
      isDefault: false}

      </CardContent>;
      <CardFooter>;
        <Button className=gap-1>;
          <Plus className='h-4 w-4' />          Add Payment Method        <Button className="gap-1">;

          <Plus className=h-4 w-4 />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
  );
});
}


  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,


import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
export /**
 * PaymentMethods - Function description
 */
  // Mock payment methods;
  const payment_methods = [;,
    {
      id: pm - 1,'
      type: 'credit_card,
      brand: 'Visa',
      last4: 4242','
      exp_year: 2025,
      is_default: true},
    {
      id: pm - 2,'
      type: 'credit_card,
      brand: 'Mastercard',
      last4: 8888','
      exp_month: 4,
      exp_year: 2026,
      is_default: false}];
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className=space-y-4>;
        {paymentMethods.map((method) => (;
          <div;

            }`}
    }]
  ];
    <Card>;
</div>
      <CardHeader>;

        <CardTitle>Payment Methods;
        <CardDescription>;
      <CardContent className=space-y-4>;

          <div            key={method && method.id}
      <CardContent className="space-y-4">;
            key = {method && method.id}

            key={method.id}

            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? bg-muted border-primary" : "border-border;`;
            }`}
          >
</div>"
            <div className="flex items-center space-x-4>
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">
                <CreditCard className=h-5 w-5" />"

              <div>
                <p className=font-medium>"
</p>
                    </span>

                <p className="text-sm text-muted-foreground>

            <div className="flex gap-2">
                <Button size=sm" variant="ghost>Set Default"
              <Button size="sm variant=ghost" className="text-destructive>
                <Trash className="h-4 w-4" />

        <Button className=gap-1">"
          <Plus className=h-4 w-4 />"

    ;"

        <CardDescription>Manage your payment methods for automatic billing;

            key={method.id}`;
            className={`flex items-center justify-between p-4 rounded-lg border ${
            <div className='flex items-center space-x-4'>
              <div className=h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background>
                <CreditCard className='h-5 w-5' />

                <p className=font-medium>
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default;
                <p className=text-sm text-muted-foreground>                  Expires {method.expMonth}/{method.expYear}
            <div className='flex gap-2'>

      <CardFooter>;

        <Button className=gap-1>;

          <Plus className='h-4 w-4' />          Add Payment Method        <Button className=gap-1">;"
          <Plus className=h-4 w-4 />;"

        <CardTitle > Payment Methods;

      <CardContent className=space - y-4>;

          <div            key={method.id}
      <CardContent className="space - y-4>;
            key = {method.id}`;
            className={`flex items - center justify - between p - 4 rounded - lg border ${"
              method.is_default ? 'bg - muted border - primary' : border - border;`;
pr-12325
          >;
            <div className="flex items-center space-x-4>;
              <div className=h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">;
                <CreditCard className="h-5 w-5 />;
              </div>;
              <div>;
                <p className=font-medium">;
                  {method.brand} •••• {method.last4}



                      Default;
                    </span>;
                  )}
                </p>;
                <p className=text-sm text-muted-foreground">;
                  Expires {method.expMonth}/{method.expYear}
                </p>;
              </div>;
            </div>;



              </Button>;
            </div>;
          </div>;
        ))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1>;
          <Plus className=h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;


    </Card>;
  );
}

      </CardContent>
      <CardFooter>
<Button className='gap-1'>
          <Plus className=h-4 w-4 />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
  );


