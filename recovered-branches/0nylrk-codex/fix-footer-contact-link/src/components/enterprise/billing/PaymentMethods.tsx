<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx

import React from "react";
import {

=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx

=======

import React from "react";
import {

=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React from "react";
import {
<<<<<<< HEAD
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
<<<<<<< HEAD
=======



=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
<<<<<<< HEAD
export function PaymentMethods() {
  // Mock payment methods

  const paymentMethods = [
    {
<<<<<<< HEAD
      id: "pm-1"
      type: "credit_card"
      brand: "Visa"
      last4: "4242"
      expMonth: 12
      expYear: 2025
      isDefault: true
    }
    {
      id: "pm-2"
      type: "credit_card"
      brand: "Mastercard"
      last4: "8888"
      expMonth: 4
      expYear: 2026
      isDefault: false
    }
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",

<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======

      isDefault: false}
  ],

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      isDefault: false,
    },;
  ];
=======
      isDefault: false}
  ],
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
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
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                      Default
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {!method.isDefault && (
                <Button size="sm" variant="ghost">Set Default</Button>
              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  )
========
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      id: "pm-1",;
      type: "credit_card",;
      brand: "Visa",;
      last4: "4242",;
      expMonth: 12,;
      expYear: 2025,;
<<<<<<< HEAD
      isDefault: true,;
    },;
=======
      isDefault: true},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
<<<<<<< HEAD
      expYear: 2026,;
      isDefault: false,;
    },;
import React from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { CreditCard, Plus, Trash  } from './lucide-react';
export /**
 * PaymentMethods - Function description
 */
function PaymentMethods() {
  // Mock payment methods;
  const payment_methods = [;
    {
      id: "pm - 1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      exp_month: 12,
      exp_year: 2025,
      is_default: true,
    },
    {
      id: "pm - 2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      exp_month: 4,
      exp_year: 2026,
      is_default: false,
    },
  ];
;
  return (
    <Card>;
      <CardHeader>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx

        <CardTitle > Payment Methods</CardTitle>;

========
        <CardTitle > Payment Methods</CardTitle>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
      <CardContent className="space - y-4">;
        {payment_methods.map ((method) => (
          <div;
            key={method.id}
            className={`flex items - center justify - between p - 4 rounded - lg border ${
              method.is_default ? "bg - muted border - primary" : "border - border";
            }`}
          >;
            <div className="flex items - center space - x-4">;
              <div className="h - 10 w - 10 rounded - md border border - border flex items - center justify - center bg - background">;
                <CreditCard className="h - 5 w - 5" />;
              </div>;
              <div>;
                <p className="font - medium">;
                  {method.brand} •••• {method.last4}
                  {method.is_default && (
                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5">;
                      Default;
                    </span>)}
                </p>;
                <p className="text - sm text - muted - foreground">;
                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
            <div className="flex gap - 2">;
              {!method.is_default && (
                <Button size="sm" variant="ghost">;
                  Set Default;
                </Button>)}
              <Button size="sm" variant="ghost" className="text - destructive">;
                <Trash className="h - 4 w - 4" />;
              </Button>;
            </div>;
          </div>))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap - 1">;
          <Plus className="h - 4 w - 4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
<<<<<<< HEAD
    </Card>;

  );
}
;

=======
    </Card>);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======
      id:"pm-1",;
      type:"credit_card",;
      brand:"Visa",;
      last4:"4242",;
      expMonth:12,;
      expYear:2025,;
      isDefault:true},;
    {;
      id:"pm-2",;
      type:"credit_card",;
      brand:"Mastercard",;
      last4:"8888",;
      expMonth:4,;
      expYear:2026,;
      isDefault:false}
  ],;
;
=======
      expYear: 2026;
      isDefault: false}
  ];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>Payment Methods</CardTitle>;
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>;
      </CardHeader>;
      <CardContent className="space-y-4">;
        {paymentMethods.map((method) => (;
<<<<<<< HEAD
          <div ;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;
              method.isDefault ? "bg-muted border-primary" :"border-border";
            }`}
          >;
            <div className="flex items-center space-x-4">;
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">;
                <CreditCard className="h-5 w-5" />;
              </div>;
              <div>;
                <p className="font-medium">;
                  {method.brand} •••• {method.last4}
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
            <div className="flex gap-2">;
              {!method.isDefault && (;
                <Button size="sm" variant="ghost">Set Default</Button>;
              )}
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h-4 w-4" />;
              </Button>;
            </div>;
          </div>;
=======
          <div;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;
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
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                      Default
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {!method.isDefault && (
                <Button size="sm" variant="ghost">
                  Set Default
                </Button>
              )}
              <Button size="sm" variant="ghost" className="text-destructive">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        ))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1">;
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD
  ),;}
 //Mock payment methods const paymentMethods = [ {
  return (<Card> <CardHeader> <CardTitle>Payment Methods</CardTitle> <CardDescription>Manage your payment methods for automatic billing</CardDescription> </CardHeader> > <div className="flex items-center space-x-4" > <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background" > <CreditCard className="h-5 w-5" /> </div> <div> Default </span>) 
}</p>) 
}<Button size="sm" variant="ghost" className="text-destructive" > <Trash className="h-4 w-4" /> </Button> </div> </div>) ) 
}</CardContent> <CardFooter> <Button className="gap-1" > <Plus className="h-4 w-4" /> Add Payment Method </Button> </CardFooter> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/billing/PaymentMethods.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
