

import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

<<<<<<< HEAD

import React from "react";
import {

  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
  Card,
=======
import React from "react";
import {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,;

} from "@/components/ui/card";

} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";



} from "@/components/ui/card";
=======
  CardTitle,;} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";

=======} from "@/components/ui/card";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
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
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
      last4: "4242",
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",

<<<<<<< HEAD



=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      expMonth: 4,
<<<<<<< HEAD
      expYear: 2026,

      isDefault: false}
  ],

      isDefault: false,
    },;
  ];
      isDefault: false}
  ],

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


  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;
;
export function PaymentMethods() {;
=======
      expYear: 2026,  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;export function PaymentMethods() {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    },;
      isDefault: true,;
=======
    },;      isDefault: true,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    },;
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

        <CardTitle > Payment Methods</CardTitle>;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;

<<<<<<< HEAD



  );
  );
      <CardContent className="space - y-4">;
=======
  );
  );
      <CardContent className="space-y-4">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        {payment_methods.map ((method) => (
          <div;
            key={method.id}
            className={`flex items - center justify - between p - 4 rounded - lg border ${
              method.is_default ? "bg - muted border - primary" : "border - border";
            }`}
          >;
<<<<<<< HEAD
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
=======
            <div className="flex items - center space-x-4">;
              <div className="h - 10 w - 10 rounded - md border border - border flex items - center justify - center bg-background">;
                <CreditCard className="h - 5 w-5" />;
              </div>;
              <div>;
                <p className="font-medium">;
                  {method.brand} •••• {method.last4}
                  {method.is_default && (
                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py-0.5">;
                      Default;
                    </span>)}
                </p>;
                <p className="text - sm text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
<<<<<<< HEAD
            <div className="flex gap - 2">;
=======
            <div className="flex gap-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              {!method.is_default && (
                <Button size="sm" variant="ghost">;
                  Set Default;
                </Button>)}
<<<<<<< HEAD
              <Button size="sm" variant="ghost" className="text - destructive">;
                <Trash className="h - 4 w - 4" />;
=======
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              </Button>;
            </div>;
          </div>))}
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD
        <Button className="gap - 1">;
          <Plus className="h - 4 w - 4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>);
}
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
}
}
=======
        <Button className="gap-1">;
          <Plus className="h - 4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
}
}}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
