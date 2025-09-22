
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;

import React from "react";
import {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React from "react";
import {};
=======
import React from \"react\";
import {
  CardContent,
  CardDescription,
  CardFooter,}
  CardHeader,}
  CardTitle,;} from \"@/components/ui/card\";
import { Button } from \"@/components/ui/button\";
import { CreditCard, Plus, Trash } from \"lucide-react\";
import { Button } from \"@/components/ui/button\";
import { CreditCard, Plus, Trash } from \"lucide-react\";
      id: \"id\",
    type: \"credit_card\"
      brand: \"Visa\"
      last4: \"4242\"
      expMonth: 12;
    expYear: 2025;
isDefault: true;
    }
    {
      id: \"pm-2\"
      type: \"credit_card\"
      brand: \"Mastercard\"
      last4: \"8888\"
      expMonth: 4;
expYear: 2026;}
isDefault: false}
    }
  ];
import React from \"react\",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from \"@/components/ui/card\",;
import { Button } from \"@/components/ui/button\",;
import { CreditCard, Plus, Trash } from \"lucide-react\",;
    {
      id: \"pm-2\",
      type: \"credit_card\",
      brand: \"Mastercard\",
      last4: \"8888\",
      expMonth: 4,
      expYear: 2026,  )}
import React from \"react\";}
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from \"@/components/ui/card\";
import { Button } from \"@/components/ui/button\",;
import { CreditCard, Plus, Trash } from \"lucide-react\",;export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
      id: \"pm-1\",;
      type: \"credit_card\",;
      brand: \"Visa\",;
      last4: \"4242\",;
      expMonth: 12,;
      expYear: 2025,;}
      isDefault: true,;}
    },;      isDefault: true,;
    },;
    {;
      id: \"pm-2\",;
      type: \"credit_card\",;
      brand: \"Mastercard\",;
      last4: \"8888\",;
      expMonth: 4,;
        <CardDescription />;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
  );
  );
      <CardContent className=\"space-y-4\" />;
        {payment_methods.map ((method) => (}
          <div;}
            key={method.id}
            className={`flex items - center justify - between p - 4 rounded - lg border ${}
              method.is_default ? \"bg - muted border - primary\" : \"border - border\";}
            }`}
           />;
            <div className=\"flex items - center space-x-4\" />;
              <div className=\"h - 10 w - 10 rounded - md border border - border flex items - center justify - center bg-background\" />;
                <CreditCard className=\"h - 5 w-5\" />;
              </div>;
              <div />;
                <p className=\"font-medium\" />;
                  {method.brand} •••• {method.last4}
                  {method.is_default && (
                    <span className=\"ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py-0.5\" />;}
                      Default;}
                    </span>)}
                </p>;
                <p className=\"text - sm text - muted-foreground\" />;
                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
            <div className=\"flex gap-2\" />;
              {!method.is_default && (
                <Button size=\"sm\" variant=\"ghost\" />;}
                  Set Default;}
                </Button>)}
              <Button size=\"sm\" variant=\"ghost\" className=\"text-destructive\" />;
                <Trash className=\"h - 4 w-4\" />;

import React from "react";"
import {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Card,
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  Card,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  Card,
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
<<<<<<< HEAD
  CardTitle,;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
=======
"
import { Button } from "@/components/ui/button";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { CreditCard, Plus, Trash } from "lucide-react";

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";
=======
  CardTitle,;} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";

=======} from "@/components/ui/card";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  CardTitle,;

} from "@/components/ui/card";

} from "@/components/ui/card";
  CardTitle,;} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";

} from "@/components/ui/card";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash } from "lucide-react";
export function PaymentMethods() {
  // Mock payment methods
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
=======
      id: "pm-1",
      type: "credit_card",
      brand: "Visa",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      last4: "4242",
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
=======

"
import React from "react","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { CreditCard, Plus, Trash } from "lucide-react",

    {"
      id: "pm-2","
      type: "credit_card","
      brand: "Mastercard","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      last4: "8888",
      expMonth: 4,
<<<<<<< HEAD
      expYear: 2026,
<<<<<<< HEAD
      isDefault: false}
  ],
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      expYear: 2026,

      isDefault: false}
  ],

isDefault: false,
    },;
  ];
      isDefault: false}
  ],
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
</CardHeader>"
      <CardContent className="space-y-4">
{paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${"
              method.isDefault ? "bg-muted border-primary" : "border-border"`
            }`}
          >"
            <div className="flex items-center space-x-4">"
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">"
                <CreditCard className="h-5 w-5" />
              </div>
              <div>"
                <p className="font-medium">
                  {method.brand} •••• {method.last4}
                  {method.isDefault && ("
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                      Default;
                    </span>
                  )}
                </p>"
                <p className="text-sm text-muted-foreground">
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
</div>"
            <div className="flex gap-2">
              {!method.isDefault && ("
                <Button size="sm" variant="ghost">Set Default</Button>
              )}"
              <Button size="sm" variant="ghost" className="text-destructive">"
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
<CardFooter>"
        <Button className="gap-1">"
          <Plus className="h-4 w-4" />
          Add Payment Method;
        </Button>
      </CardFooter>
    </Card>
<<<<<<< HEAD
  );
}

);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function PaymentMethods() {;
=======
      expYear: 2026,  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;export function PaymentMethods() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      expYear: 2026,  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;export function PaymentMethods() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <CardFooter>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>

)

  );
}
  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;
;
export function PaymentMethods() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    },;      isDefault: true,;
    },;
isDefault: true},;
      isDefault: true,;
    },;
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      expYear: 2026,;
      isDefault: false,;
    },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
CardTitle,';
} from '@/components / ui / card';'
import { Button  } from '@/components / ui / button';'
import { CreditCard, Plus, Trash  } from './lucide-react';
export /**;
 * PaymentMethods - Function description;
 */
function PaymentMethods() {}
  // Mock payment methods;
  const payment_methods = [;
    {"
      id: "pm - 1","
      type: "credit_card","
      brand: "Visa","
      last4: "4242",
      exp_month: 12,
      exp_year: 2025,
      is_default: true,
    },
{"
      id: "pm - 2","
      type: "credit_card","
      brand: "Mastercard","
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <CardTitle > Payment Methods</CardTitle>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;

<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
<CardContent className="space-y-4">;
  );
"
      <CardContent className="space - y-4">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <CardContent className="space-y-4">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        {payment_methods.map ((method) => (
          <div;
            key={method.id}`
            className={`flex items - center justify - between p - 4 rounded - lg border ${"
              method.is_default ? "bg - muted border - primary" : "border - border";`
            }`}
>;
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
                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
            <div className="flex gap-2">;
              {!method.is_default && (
                <Button size="sm" variant="ghost">;
                  Set Default;
                </Button>)}
<<<<<<< HEAD
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h - 4 w-4" />;
=======
              <Button size="sm" variant="ghost" className="text-destructive">;
                <Trash className="h - 4 w-4" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </Button>;
            </div>;
          </div>))}
      </CardContent>;
<CardFooter>;
        <Button className="gap-1">;
          <Plus className="h - 4 w-4" />;
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
}
}}
  CardTitle,;
"
} from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { CreditCard, Plus, Trash } from "lucide-react";""
      id: "pm-1"","
  type: "credit_card"""
      brand: "Visa"","
  last4: "4242""
      expMonth: 12;,
  expYear: 2025;
      isDefault: true;
    {"
      id: "pm-2"","
      brand: "Mastercard"","
  last4: "8888""
      expMonth: 4;,
  expYear: 2026;
      isDefault: false;
  ];"
      id: "pm-1",""
      type: "credit_card",""
      brand: "Visa",""
      last4: "4242","
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },

import React from "react",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { CreditCard, Plus, Trash } from "lucide-react","
      id: "pm-2",""
      brand: "Mastercard",""
      last4: "8888","
      expMonth: 4,
      expYear: 2026,

      isDefault: false}
  ],

      isDefault: false,
    },;
  ];

  return (
    <Card>

      <CardHeader>

        <CardTitle>Payment Methods
        <CardDescription>Manage your payment methods for automatic billing
      <CardContent className="space-y-4">"

          <div;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${"
              method.isDefault ? "bg-muted border-primary" : "border-border""`;
            }`}
          >
</div>"
            <div className="flex items-center space-x-4">"
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">"
                <CreditCard className="h-5 w-5" />"

              </div>
              <div>
                <p className="font-medium">"
</p>"
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">"
</span>
                <p className="text-sm text-muted-foreground">"
</p>
            <div className="flex gap-2">"
                <Button size="sm" variant="ghost">Set Default""
              <Button size="sm" variant="ghost" className="text-destructive">"
                <Trash className="h-4 w-4" />"

      <CardFooter>
        <Button className="gap-1">"
          <Plus className="h-4 w-4" />"

    <Card>;

      <CardHeader>;

        <CardTitle > Payment Methods;
        <CardDescription>;

        ;
      ;"
      <CardContent className="space - y-4">;"

            key={method.id}`;
            className={`flex items - center justify - between p - 4 rounded - lg border ${"
              method.is_default ? "bg - muted border - primary" : "border - border";"`;
          >;
            <div className="flex items - center space - x-4">;"
              <div className="h - 10 w - 10 rounded - md border border - border flex items - center justify - center bg - background">;"
                <CreditCard className="h - 5 w - 5" />;"

              </div>;
              <div>;
                <p className="font - medium">;"
                    <span className="ml - 2 text - xs rounded - full bg - primary / 20 text - primary px - 2 py - 0.5">;"
</span>)
                    </span>)}
                </p>;"
                <p className="text - sm text - muted - foreground">;"
                </p>;
            </div>;"
            <div className="flex gap - 2">;"
                <Button size="sm" variant="ghost">;"

                )}"
              <Button size="sm" variant="ghost" className="text - destructive">;"
                <Trash className="h - 4 w - 4" />;"

          </div>))}
      <CardFooter>;
</Trash>

              </Button>;
            </div>;
          </div>))}
      </CardContent>;

      <CardFooter>;
</CardFooter>"
        <Button className="gap - 1">;"
          <Plus className="h - 4 w - 4" />;"

    );

        <CardTitle>Payment Methods;
        <CardDescription>Manage your payment methods for automatic billing;
      <CardContent className="space-y-4">;"

            className={`flex items-center justify-between p-4 rounded-lg border ${;"
              method.isDefault ? "bg-muted border-primary" : "border-border";"`;

                <Button size="sm" variant="ghost">"

        <Button className="gap-1">;"
          <Plus className="h-4 w-4" />;"

    ;"`;
pr-12325
</Plus>
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      <CardFooter>;"
        <Button className="gap - 1">;"
          <Plus className="h - 4 w - 4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;

}
}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Card>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
