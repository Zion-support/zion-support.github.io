
=======
import React from 'react'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea

import { CreditCard, Plus, Trash } from 'lucide-react'
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export function PaymentMethods() {
  // Mock payment methods

  const paymentMethods = [
    {
      id: 'pm-1'
      type: 'credit_card'
      brand: 'Visa'
      last4: '4242'
      expYear: 2025
      isDefault: true
    }
    {
      id: 'pm-2'
      type: 'credit_card'
      brand: 'Mastercard'
      last4: '8888'
      expMonth: 4
      expYear: 2026
      isDefault: false
    }
  ]




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      expYear: 2025,
      isDefault: true},
    {
      id: "pm-2",
      type: "credit_card",
      brand: "Mastercard",
      last4: "8888",
      expMonth: 4,
      expYear: 2026,
      isDefault: false,
    },
  ]
      isDefault: false}
  ],
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

            className={`flex items-center justify-between p-4 rounded-lg border ${

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
                    <span className='ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5'>                      Default
                    </span>
                  )}
                </p>
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className='flex gap-2'>                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
        <Button className="gap-1">

          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>;
    </Card>;
  );
};
        <Button className="gap-1">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardFooter>
    </Card>
  )

=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { CreditCard, Plus, Trash } from 'lucide-react';
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
      isDefault: true},;
    {;
      id: "pm-2",;
      type: "credit_card",;
      brand: "Mastercard",;
      last4: "8888",;
      expMonth: 4,;
      expYear: 2026;
      isDefault: false}
  ],
                <p className='text-sm text-muted-foreground'>                  Expires {method.expMonth}/{method.expYear}
                </p>
              </div>
            </div>
            <div className='flex gap-2'>                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">

        <Button className="gap-1">


        <Button className="gap-1">

  )
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
