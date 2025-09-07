<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

import React from "react";
>>>>>>> origin/chore/fix-lint-and-merge
import {

=======
import React from "react";
import {
=======
<<<<<<< HEAD

=======
>>>>>>> origin/resolved-merge-conflicts
import {;
  }
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
import React from "react";"
import {
<<<<<<< HEAD
  }
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD

import React from "react";
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
<<<<<<< HEAD
=======
<<<<<<< HEAD
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
export function PaymentMethods() {
  // Mock payment methods
  const paymentMethods = $2;
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;

<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Card,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,;} from "@/components/ui/card";"
import { Button } from "@/components/ui/button";"
import { CreditCard, Plus, Trash } from "lucide-react";"
import { Button } from "@/components/ui/button";"
import { CreditCard, Plus, Trash } from "lucide-react";"
      "id": "id","
    "type": "credit_card""
      "brand": "Visa""
      "last4": "4242""
      "expMonth": 12;
    "expYear": 2025,
"isDefault": true
    }
    {
      }
      "id": "pm-2""
      "type": "credit_card""
      "brand": "Mastercard""
      "last4": "8888""
      "expMonth": 4,
"expYear": 2026,
"isDefault": false
    }
  ];
import React from "react","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { CreditCard, Plus, Trash } from "lucide-react","
    {
      }
      "id": "pm-2","
      "type": "credit_card","
      "brand": "Mastercard","
      "last4": "8888","
      "expMonth": 4,
      "expYear": 2026,  )
import React from "react";"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";"
import { Button } from "@/components/ui/button",;"
import { CreditCard, Plus, Trash } from "lucide-react",;export function PaymentMethods() {;"
  // Mock payment methods;
  }
  const paymentMethods = [;
    {;
      }
      "id": "pm-1",;"
      "type": "credit_card",;"
      "brand": "Visa",;"
      "last4": "4242",;"
      "expMonth": 12,;
      "expYear": 2025,;
      "isDefault": true,;
    },;      "isDefault": true,;
    },;
    {;
      }
      "id": "pm-2",;"
      "type": "credit_card",;"
      "brand": "Mastercard",;"
      "last4": "8888",;"
      "expMonth": 4,;
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
<<<<<<< HEAD
=======
=======
import { CreditCard, Plus, Trash } from "lucide-react";

<<<<<<< HEAD
} from "@/components/ui/card";

=======
=======
  CardTitle,;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
} from "@/components/ui/card";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";

      last4: "4242"
      expMonth: 12;
      expYear: 2025;
      isDefault: true;
    }
    {"
      id: "pm-2""
      type: "credit_card""
      brand: "Mastercard""
      last4: "8888"
      expMonth: 4;
      expYear: 2026;
      isDefault: false;
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
<<<<<<< HEAD
export function PaymentMethods() {
  // Mock payment methods

  const paymentMethods = [
    {
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
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",

      last4: "8888",
      expMonth: 4,

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      isDefault: false}
  ],

<<<<<<< HEAD
      isDefault: false,
    },;
  ];
      isDefault: false}
  ],
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <p className="text-sm text-muted-foreground">
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>

                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>

<<<<<<< HEAD
  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;

export function PaymentMethods() {;

      expYear: 2026,;
      isDefault: false,;
    },;

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

      last4: "4242",
      exp_month: 12,
      exp_year: 2025,
      is_default: true,
    },

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
>>>>>>> origin/chore/fix-lint-and-merge

  );

  );
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
>>>>>>> origin/resolved-merge-conflicts

  );
  );
<<<<<<< HEAD
      <CardContent className="space-y-4">;"
=======
}
;
  );
}
;
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );

  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

>>>>>>> origin/resolved-merge-conflicts
        {payment_methods.map ((method) => (
          <div;
            }
            key={method.id}
            className={`flex items - center justify - between p - 4 rounded - lg border ${`              }
              method.is_default ? "bg - muted border - primary" : "border - border";"
            }`}`
          >;
            <div className="flex items - center space-x-4">;"
              <div className="h - 10 w - 10 rounded - md border border - border flex items - center justify - center bg-background">;"
                <CreditCard className="h - 5 w-5" />;"
              </div>;
              <div>;
                <p className="font-medium">;"
                  {method.brand} •••• {method.last4}
                  {method.is_default && (
                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py-0.5">;"
                      }
                      Default;
                    </span>)}
                </p>;
                <p className="text - sm text - muted-foreground">;"
                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
            <div className="flex gap-2">;"
              {!method.is_default && (
                <Button size="sm" variant="ghost">;"
                  }
                  Set Default;
                </Button>)}
              <Button size="sm" variant="ghost" className="text-destructive">;"
                <Trash className="h - 4 w-4" />;"
              </Button>;
            </div>;
          </div>))}
      </CardContent>;
      <CardFooter>;
        <Button className="gap-1">;"
          <Plus className="h - 4 w-4" />;"
          Add Payment Method;
        </Button>;
      </CardFooter>;
}
}
  )
}
  );
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======
      </CardContent>;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
;
=======
=======
      </CardContent>;
>>>>>>> origin/chore/fix-lint-and-merge
=======
    </Card>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
