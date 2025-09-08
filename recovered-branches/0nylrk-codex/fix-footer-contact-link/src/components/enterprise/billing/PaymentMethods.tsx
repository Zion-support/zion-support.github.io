


import { CreditCard, Plus, Trash } from "lucide-react";



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


  )
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from "lucide-react",;


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



        <CardTitle > Payment Methods</CardTitle>;


        <CardDescription>;
          Manage your payment methods for automatic billing;
        </CardDescription>;
      </CardHeader>;

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

"
      <CardContent className="space - y-4">;

        {payment_methods.map ((method) => (
          <div;
            key={method.id}`
            className={`flex items - center justify - between p - 4 rounded - lg border ${"
              method.is_default ? "bg - muted border - primary" : "border - border";`
            }`}


              </Button>;
            </div>;
          </div>))}


}



