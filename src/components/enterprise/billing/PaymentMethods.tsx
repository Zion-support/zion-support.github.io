
<<<<<<< HEAD
import React from "react",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
=======
import React from &quot;react&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { CreditCard, Plus, Trash } from 'lucide-react'

export function PaymentMethods() {
  // Mock payment methods
  const paymentMethods = [
    {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className=&quot;space-y-4&quot;>
        {paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? &quot;bg-muted border-primary&quot; : &quot;border-border&quot;
            }`}
          >
            <div className=&quot;flex items-center space-x-4&quot;>
              <div className=&quot;h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background&quot;>
                <CreditCard className=&quot;h-5 w-5&quot; />
              </div>
              <div>
                <p className=&quot;font-medium&quot;>
                  {method.brand} •••• {method.last4}
                  {method.isDefault && (
                    <span className=&quot;ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5&quot;>
                      Default
                    </span>
                  )}
                </p>
                <p className=&quot;text-sm text-muted-foreground&quot;>
                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className=&quot;flex gap-2&quot;>
              {!method.isDefault && (
                <Button size=&quot;sm&quot; variant=&quot;ghost&quot;>Set Default</Button>
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
