
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Download, Mail, BarChart3 } from 'lucide-react';
import Link from "next/link",;
;
export function BillingHeader() {;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="space-y-2">;
      <div className="flex items-center justify-between">;
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>;
        <div className="flex gap-2">;
          <Button variant="outline" size="sm" className="gap-1">;
            <Download className="h-4 w-4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1">;
            <Mail className="h-4 w-4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap-1" asChild>;
            <Link href="/dashboard/client/analytics">;
              <BarChart3 className="h-4 w-4" />;
<<<<<<< HEAD
