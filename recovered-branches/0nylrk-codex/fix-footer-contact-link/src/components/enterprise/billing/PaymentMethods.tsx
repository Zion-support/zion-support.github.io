
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;

<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
export function PaymentMethods() {
  // Mock payment methods


<<<<<<< HEAD
  const paymentMethods = [
    {

=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",




<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      expMonth: 4,
      expYear: 2026,
      isDefault: false,
    },;
  ];
      isDefault: false}
  ],

<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
      isDefault: true,;
    },;
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
      expYear: 2026,;
      isDefault: false,;
    },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  ];
;
  return (
    <Card>;
      <CardHeader>;

        <CardTitle > Payment Methods</CardTitle>;

        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
<<<<<<< HEAD

  );
}
;

}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
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
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
