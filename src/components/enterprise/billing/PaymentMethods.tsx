
import React from "react";

export function PaymentMethods() {_// Mock payment methods
  const _paymentMethods = [
    {
      id: "pm-1", _type: "credit_card", _brand: "Visa", _last4: "4242", _expMonth: 12, _expYear: 2025, _isDefault: true},
    {_id: "pm-2", _type: "credit_card", _brand: "Mastercard", _last4: "8888", _expMonth: 4, _expYear: 2026, _isDefault: false}
  ];

  return (_<Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods for automatic billing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {_paymentMethods.map((method) => (
          <div 
            key={method.id}
            className={_`flex items-center justify-between p-4 rounded-lg border ${
              method.isDefault ? "bg-muted border-primary" : "border-border"}`}
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">
                  {_method.brand} •••• {_method.last4}
                  {_method.isDefault && (
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                      Default
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  Expires {_method.expMonth}/{_method.expYear}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {_!method.isDefault && (
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
  );
}
