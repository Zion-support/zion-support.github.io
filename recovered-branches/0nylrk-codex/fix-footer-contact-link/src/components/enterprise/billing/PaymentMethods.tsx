<<<<<<< HEAD


import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react";
import {
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

import React from "react";
import {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
} from "@/components/ui/card";

=======
} from "@/components/ui/card";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";



<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
<<<<<<< HEAD
export function PaymentMethods() {
  // Mock payment methods

=======
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======

<<<<<<< HEAD
      isDefault: false}
  ],

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      isDefault: false,
    },;
  ];
      isDefault: false}
  ],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  );
}
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
  )

  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
      isDefault: true,;
    },;
=======
      isDefault: true},;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      isDefault: true,;
    },;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      expYear: 2026,;
      isDefault: false,;
    },;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ];
;
  return (
    <Card>;
      <CardHeader>;
<<<<<<< HEAD

        <CardTitle > Payment Methods</CardTitle>;

=======
        <CardTitle > Payment Methods</CardTitle>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    </Card>);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}
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
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
