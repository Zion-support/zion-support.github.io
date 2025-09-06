
<<<<<<< HEAD

=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Mail, BarChart3 } from 'lucide-react'
import Link from 'next/link'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",
import { Button } from "@/components/ui/button",
import { Download, Mail, BarChart3 } from 'lucide-react'
import Link from "next/link",
<<<<<<< HEAD
=======
xport function BillingHeader() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Mail className="h-4 w-4" />
            Contact Billing Support
          </Button>
          <Button variant='outline' size='sm' className='gap-1' asChild>
            <Link href='/dashboard/client/analytics'>
              <BarChart3 className='h-4 w-4' />              Analytics
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/client/analytics">
              <BarChart3 className="h-4 w-4" />
import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export function BillingHeader() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Billing & Invoices</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Mail className="h-4 w-4" />
            Contact Billing Support
          </Button>
<<<<<<< HEAD

=======
>>>>>>>           <Button variant="outline" size="sm" className="gap-1" asChild>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <Button variant="outline" size="sm" className="gap-1" asChild>
>>>>>>>             <Link href="/dashboard/client/analytics">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground">

        Manage your subscription, view invoice history, and update payment methods.
      </p>
    </div>
<<<<<<< HEAD

=======
  ) <p className="text-muted-foreground">
        Manage your subscription, view invoice history, and update payment methods.
      </p>
    </div>;
  );
};
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
