


import React from react",
:src_backup/components/enterprise/billing/PaymentMethods.tsx
import { CreditCard, Plus, Trash } from 'lucide-react'
import { CreditCard, Plus, Trash } from 'lucide-react'
import { CreditCard, Plus, Trash } from 'lucide-react



import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';



import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",


:src_backup/components/enterprise/billing/PaymentMethods.tsx



export function PaymentMethods() {
  // Mock payment methods








id: 'pm-1',
      type: 'credit_card',
      brand: 'Visa',
      last4: '4242',


:src_backup/components/enterprise/billing/PaymentMethods.tsx
      isDefault: false,
    },
  ];
      isDefault: false,
    },
  ];
      isDefault: false}];
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/enterprise/billing/PaymentMethods.tsx


:src_backup/components/enterprise/billing/PaymentMethods.tsx

;
import { CreditCard, Plus, Trash  } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter  } from '@/components/ui/card';
import React from "react";import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import React from 'react';
export function PaymentMethods() {// Mock payment methods;
  const paymentMethods = [;
    {id: 'pm-1',type: 'credit_card',brand: 'Visa',last4: '4242',id: "pm-1",type: "credit_card",brand: "Visa",last4: "4242",expMonth: 12,expYear: 2025,isDefault: true},{id: "pm-2",type: "credit_card",brand: "Mastercard",last4: "8888",expMonth: 4,expYear: 2026,isDefault: false}
  ],id: 'pm-1',type: 'credit_card',brand: 'Visa',last4: '4242',expMonth: 12,expYear: 2025,isDefault: true},{id: 'pm-2',type: 'credit_card',brand: 'Mastercard',last4: '8888',expMonth: 4,expYear: 2026,isDefault: false}];return (<Card>;


        <CardDescription>;
          Manage your payment methods for automatic billing;
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
        {paymentMethods && paymentMethods.map(method => (<div            key={method && method.id}
      <CardContent className="space-y-4">;
:src_backup/components/enterprise/billing/PaymentMethods.tsx


        {paymentMethods && paymentMethods.map((method,) => (<div;
            key = {method && method.id}<CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (<div;
            key={method.id}className={`flex items-center justify-between p-4 rounded-lg border ${method.isDefault ? "bg-muted border-primary" : "border-border";

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
:src_backup/components/enterprise/billing/PaymentMethods.tsx
                </p>

:src_backup/components/enterprise/billing/PaymentMethods.tsx


:src_backup/components/enterprise/billing/PaymentMethods.tsx

            <div className="flex gap-2">
              {!method.isDefault && (



            <div className="flex gap-2">
:src_backup/components/enterprise/billing/PaymentMethods.tsx
        <Button className="gap-1">

      </CardFooter>;
    </Card>;
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
:src_backup/components/enterprise/billing/PaymentMethods.tsx
:src_backup/components/enterprise/billing/PaymentMethods.tsx


:src_backup/components/enterprise/billing/PaymentMethods.tsx

import React from 'react';
import {

import React from react;


  CardTitle,
} from '@/components/ui/ card';
import { Button } from '@/components/ui/ button';
import { CreditCard, Plus, Trash } from 'lucide-react';
                  {method.isDefault && (<span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default;
  CardTitle,
} from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { CreditCard, Plus, Trash } from 'lucide-react';
import React from './react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
  CardTitle} from '@/components/ui/ card';
import { Button } from @/components/ui/ button;
                  {method.isDefault && (<span className=ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5>                      Default;
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
:src_backup/components/enterprise/billing/PaymentMethods.tsx
import React from './react';
            className={`flex items - center justify - between p - 4 rounded - lg border ${method.is_default ? 'bg - muted border - primary' : 'border - border';


:src_backup/components/enterprise/billing/PaymentMethods.tsx
                  {method.is_default && (<span className='ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5'>                      Default;
                    </span>)}
                </p>;
                <p className='text - sm text - muted - foreground'>                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            <div className='flex gap - 2'>                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5">;
:src_backup/components/enterprise/billing/PaymentMethods.tsx
            <div className='flex gap - 2'>;
              {!method.is_default && (<Button size='sm' variant='ghost'>;
                  Set Default;
                </Button>)}
              <Button size='sm' variant='ghost' className='text - destructive'>;
                <Trash className='h - 4 w - 4' />              </Button>              {!method.is_default && (<Button size="sm" variant="ghost">Set Default</Button>)}
              <Button size="sm" variant="ghost" className="text - destructive">;
                <Trash className="h - 4 w - 4" />;


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


:src_backup/components/enterprise/billing/PaymentMethods.tsx
    </Card>);


:src_backup/components/enterprise/billing/PaymentMethods.tsx
}
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
