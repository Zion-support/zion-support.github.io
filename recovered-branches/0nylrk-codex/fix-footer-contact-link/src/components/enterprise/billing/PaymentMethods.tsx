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

  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle

  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

<<<<<<< HEAD
  // Mock payment methods;
  }
  const paymentMethods = [;

        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;
=======
import { CreditCard, Plus, Trash } from "lucide-react";

} from "@/components/ui/card";

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

      id: "pm-1",
      type: "credit_card",
      brand: "Visa",

      last4: "4242",
      expMonth: 12,
      expYear: 2025,
      isDefault: true,
    },

    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",

      last4: "8888",
      expMonth: 4,

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
<<<<<<< HEAD

        {payment_methods.map ((method) => (
          <div;
            }
            key={method.id}

                  Expires {method.exp_month}/{method.exp_year}
                </p>;
              </div>;
            </div>;
=======
"
      <CardContent className="space - y-4">;

        {payment_methods.map ((method) => (
          <div;
            key={method.id}`
            className={`flex items - center justify - between p - 4 rounded - lg border ${"
              method.is_default ? "bg - muted border - primary" : "border - border";`
            }`}
>>>>>>> origin/chore/fix-lint-and-merge

              </Button>;
            </div>;
          </div>))}
<<<<<<< HEAD
      </CardContent>;
      <CardFooter>;

          Add Payment Method;
        </Button>;
      </CardFooter>;
}
}}
  )
}
  );
}
=======
      </CardContent>;
>>>>>>> origin/chore/fix-lint-and-merge
