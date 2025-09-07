
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
=======
import React from "react";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { CreditCard, Plus, Trash } from 'lucide-react';
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export function PaymentMethods() {;
  // Mock payment methods;
  const paymentMethods = [;
    {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
=======
      id: "pm-1";,;""
      type: "credit_card";,;""
      brand: "Visa";,;""
      last4: "4242";,;"
      expMonth: 12;,;
      expYear: 2025;,;
      isDefault: true;},;
    {;"
      id: "pm-2";,;""
      brand: "Mastercard";,;""
      last4: "8888";,;"
      expMonth: 4;,;
      expYear: 2026;,;
      isDefault: false;}]
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ],;
  return (;
    <Card>;

      <CardHeader>;

        <CardTitle>Payment Methods;
        <CardDescription>Manage your payment methods for automatic billing;
      ;"
      <CardContent className="space-y-4">;"

          <div ;
            key={method.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${;"
              method.isDefault ? "bg-muted border-primary" :"border-border";"`;
            }`}
          >;
</div>"
            <div className="flex items-center space-x-4">;"
              <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background">;"
                <CreditCard className="h-5 w-5" />;"

              </div>;
              <div>;
                <p className="font-medium">;"
</p>"
                    <span className="ml-2 text-xs rounded-full bg-primary/20 text-primary px-2 py-0.5">;"
</span>
                    </span>;
                </p>;"
                <p className="text-sm text-muted-foreground">;"
</p>
                </p>;
            </div>;"
            <div className="flex gap-2">;"
                <Button size="sm" variant="ghost">Set Default;""
              <Button size="sm" variant="ghost" className="text-destructive">;"
"
                <Trash className="h-4 w-4" />;"

      <CardFooter>;
<<<<<<< HEAD
        <Button className="gap-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <Plus className="h-4 w-4" />;
          Add Payment Method;
        </Button>;
      </CardFooter>;
    </Card>;
<<<<<<< HEAD

=======
  ),;}
 import {;
  {;
  {;
  CreditCard,  Plus, Trash ;
}from 'lucide-react' //Mock payment methods const paymentMethods = [ {;
  return (<Card> <CardHeader> <CardTitle>Payment Methods</CardTitle> <CardDescription>Manage your payment methods for automatic billing</CardDescription> </CardHeader> > <div className="flex items-center space-x-4" > <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background" > <CreditCard className="h-5 w-5" /> </div> <div> Default </span>) ;
}</p>) ";
}<Button size="sm" variant="ghost" className="text-destructive" > <Trash className="h-4 w-4" /> </Button> </div> </div>) ) ";
}</CardContent> <CardFooter> <Button className="gap-1" > <Plus className="h-4 w-4" /> Add Payment Method </Button> </CardFooter> </Card>) ;
}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <Button className="gap-1">;"
          <Plus className="h-4 w-4" />;"

    ;)"
  return (<Card> <CardHeader> <CardTitle>Payment Methods <CardDescription>Manage your payment methods for automatic billing  > <div className="flex items-center space-x-4" > <div className="h-10 w-10 rounded-md border border-border flex items-center justify-center bg-background" > <CreditCard className="h-5 w-5" /> </div> <div> Default </span>) ;"
}</p>) ";""
}<Button size="sm" variant="ghost" className="text-destructive" > <Trash className="h-4 w-4" />  </div> </div>) ) ";""
} <CardFooter> <Button className="gap-1" > <Plus className="h-4 w-4" /> Add Payment Method   ) ;""`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
