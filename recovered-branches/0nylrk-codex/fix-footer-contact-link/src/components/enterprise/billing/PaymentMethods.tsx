
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { CreditCard, Plus, Trash } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { CreditCard, Plus, Trash } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function PaymentMethods() {_// Mock payment methods
  const _paymentMethods = [
    {
<<<<<<< HEAD
      id: &quot;pm-1&quot;,
      type: &quot;credit_card&quot;,
      brand: &quot;Visa&quot;,
      last4: &quot;4242&quot;,
      expMonth: 12,
      expYear: 2025,
      isDefault: true},
    {
      id: &quot;pm-2&quot;,
      type: &quot;credit_card&quot;,
      brand: &quot;Mastercard&quot;,
      last4: &quot;8888&quot;,
      expMonth: 4,
      expYear: 2026,
      isDefault: false}
  ],
=======
      id: "pm-1", _type: "credit_card", _brand: "Visa", _last4: "4242", _expMonth: 12, _expYear: 2025, _isDefault: true},
    {_id: "pm-2", _type: "credit_card", _brand: "Mastercard", _last4: "8888", _expMonth: 4, _expYear: 2026, _isDefault: false}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className=&quot;space-y-4&quot;>
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? &quot;bg-muted border-primary&quot; : &quot;border-border&quot;
            }`}
=======
      <CardContent className="space-y-4">
        {_paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={_`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;flex items-center space-x-4&quot;>
              <div className=&quot;h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background&quot;>
                <CreditCard className=&quot;h-5 w-5&quot; />
              </div>
              <div>
<<<<<<< HEAD
                <p className=&quot;font-medium&quot;>
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
                    <span className=&quot;ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5&quot;>
=======
                <p className="font-medium">
                  {_method.brand} •••• {_method.last4}
                  {_method.isDefault && (
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Default
                    </span>
                  )}
                </p>
<<<<<<< HEAD
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className=&quot;flex gap-2&quot;>
              {!method.isDefault && (
                <Button size=&quot;sm&quot; variant=&quot;ghost&quot;>Set Default</Button>
=======
                <p className="text-sm text-muted-foreground">
                  Expires {_method.expMonth}/{_method.expYear}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {_!method.isDefault && (
                <Button size="sm" variant="ghost">Set Default</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              )}
              <Button size=&quot;sm&quot; variant=&quot;ghost&quot; className=&quot;text-destructive&quot;>
                <Trash className=&quot;h-4 w-4&quot; />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className=&quot;gap-1&quot;>
          <Plus className=&quot;h-4 w-4&quot; />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
  )
}
