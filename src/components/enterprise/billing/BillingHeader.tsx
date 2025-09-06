<<<<<<< HEAD


=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Mail, BarChart3 } from 'lucide-react'
import Link from 'next/link'
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Button } from "@/components/ui/button",
import { Download, Mail, BarChart3 } from 'lucide-react'
import Link from "next/link",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
          <Button variant='outline' size='sm' className='gap-1' asChild>
            <Link href='/dashboard/client/analytics'>
              <BarChart3 className='h-4 w-4' />              Analytics
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/client/analytics">
              <BarChart3 className="h-4 w-4" />
import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href="/dashboard/client/analytics">
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

export function BillingHeader() {;
  return (
    <div className='space-y-2'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-3xl font-bold tracking-tight'>;
          Billing & Invoices;
        </h1>;
        <div className='flex gap-2'>;
          <Button variant='outline' size='sm' className='gap-1'>;
            <Download className='h-4 w-4' />;
            Export;
          </Button>;
          <Button variant='outline' size='sm' className='gap-1'>;
            <Mail className='h-4 w-4' />;
            Contact Billing Support;
          </Button>;
          <Button variant='outline' size='sm' className='gap-1' asChild>;
            <Link href='/dashboard/client/analytics'>;
              <BarChart3 className='h-4 w-4' />              Analytics;
          <Button variant="outline" size="sm" className="gap-1" asChild>;
            <Link href="/dashboard/client/analytics">;
              <BarChart3 className="h-4 w-4" />;

import React from "react";
import { Button } from "@/components/ui/button";
=======

  )
import React from "react",;
import { Button } from "@/components/ui/button",;

import { Download, Mail, BarChart3 } from 'lucide-react';
import Link from "next/link";
export function BillingHeader() {;
  return (
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
=======
import React from 'react';
import { Button } from '@/components / ui / button';
import { Download, Mail, BarChart3 } from 'lucide-react';
import Link from 'next / link';
export /**
 * BillingHeader - Function description
 */
function BillingHeader() {
  return (
    <div className='space - y-2'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 3xl font - bold tracking - tight'>;
          Billing & Invoices;
        </h1>;
        <div className='flex gap - 2'>;
          <Button variant='outline' size='sm' className='gap - 1'>;
            <Download className='h - 4 w - 4' />;
            Export;
          </Button>;
          <Button variant='outline' size='sm' className='gap - 1'>;
            <Mail className='h - 4 w - 4' />;
            Contact Billing Support;
          </Button>;
          <Button variant='outline' size='sm' className='gap - 1' as_child>;
            <Link href='/dashboard / client / analytics'>;
              <BarChart3 className='h - 4 w - 4' />              Analytics;
          <Button variant="outline" size="sm" className="gap - 1" as_child>;
            <Link href="/dashboard / client / analytics">;
              <BarChart3 className="h - 4 w - 4" />;
import React from './react';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
export /**
 * BillingHeader - Function description
 */
function BillingHeader() {
  return (
    <div className="space - y-2">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 3xl font - bold tracking - tight">Billing & Invoices</h1>;
        <div className="flex gap - 2">;
          <Button variant="outline" size="sm" className="gap - 1">;
            <Download className="h - 4 w - 4" />;
            Export;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 1">;
            <Mail className="h - 4 w - 4" />;
            Contact Billing Support;
          </Button>;
          <Button variant="outline" size="sm" className="gap - 1" as_child>;
            <Link href="/dashboard / client / analytics">;
              <BarChart3 className="h - 4 w - 4" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              Analytics;
            </Link>;
          </Button>;
        </div>;
      </div>;


=======
      <p className='text - muted - foreground'>;
        Manage your subscription, view invoice history, and update payment;
        methods.;
      </p>;
    </div>) <p className="text - muted - foreground">;
        Manage your subscription, view invoice history, and update payment methods.;
      </p>;
    </div>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
