

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Download, FileText, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from "lucide-react",
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function InvoiceHistory() {
  // Mock invoice data

  const invoices = [
    {

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: "INV-1234",;
      date: "May 1, 2025";
      amount: "$1,999.00";

<<<<<<< HEAD
<<<<<<< HEAD
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",

      id: "INV-1234"
      date: "May 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "May 2025"}
    {
      id: "INV-1233"
      date: "Apr 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Apr 2025"}
    {
      id: "INV-1232"
      date: "Mar 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Mar 2025"}
    {
      id: "INV-1231"
      date: "Feb 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Feb 2025"}
    {
      id: "INV-1230"
      date: "Jan 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Jan 2025"}
    {
      id: "INV-1229"
      date: "Dec 1, 2024";
      amount: "$1,999.00";
      status: "paid"
      period: "Dec 2024"}]
      id: "INV-1234",;
      date: "May 1, 2025";
      amount: "$1,999.00";
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      status: "paid",
      period: "May 2025"},
    {
      id: "INV-1233",
      date: "Apr 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Apr 2025"},
    {
      id: "INV-1232",
      date: "Mar 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Mar 2025"},
    {
      id: "INV-1231",
      date: "Feb 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Feb 2025"},
    {
      id: "INV-1230",
      date: "Jan 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Jan 2025"},
    {
      id: "INV-1229",
      date: "Dec 1, 2024",
      amount: "$1,999.00",
      status: "paid",
      period: "Dec 2024"}],

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice"
      description: `Downloading invoice ${invoiceId} as PDF.`})
<<<<<<< HEAD


  },



  const getBadgeForStatus = (status: string) => {
    switch (status) {
<<<<<<< HEAD

import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Download, FileText, Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
;
=======
=======
  }
  },

  const getBadgeForStatus = (status: string) => {
    switch (status) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Download, FileText, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function InvoiceHistory() {;
  // Mock invoice data;
  const invoices = [;
    {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: "INV-1234",;
      date: "May 1, 2025";
      amount: "$1,999 && 999.00";
      status: "paid",;
      period: "May 2025"},;
    {;
      id: "INV-1233",;
      date: "Apr 1, 2025";
      amount: "$1,999 && 999.00";
      status: "paid",;
      period: "Apr 2025"},;
    {;
      id: "INV-1232",;
      date: "Mar 1, 2025";
      amount: "$1,999 && 999.00";
      status: "paid",;
      period: "Mar 2025"},;
    {;
      id: "INV-1231",;
      date: "Feb 1, 2025";
      amount: "$1,999 && 999.00";
      status: "paid",;
      period: "Feb 2025"},;
    {;
      id: "INV-1230",;
      date: "Jan 1, 2025";
      amount: "$1,999 && 999.00";
      status: "paid",;
      period: "Jan 2025"},;
    {;
      id: "INV-1229",;
      date: "Dec 1, 2024";
      amount: "$1,999 && 999.00";
      status: "paid",;
      period: "Dec 2024"}],;

  const handleDownloadInvoice = (invoiceId: string) => {;
    // In a real app, this would trigger a download of the invoice PDF;
    toast({;
      title: "Downloading invoice",;
      description: `Downloading invoice ${invoiceId} as PDF.`});
  };

  const getBadgeForStatus = (status: string) => {;
    switch (status) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      case "paid": return <Badge className="bg-green-500">Paid</Badge>;
      case "pending":;
        return <Badge variant="outline">Pending</Badge>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      case "overdue":;
        return <Badge variant="destructive">Overdue</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
=======

    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

  },

<<<<<<< HEAD

  return (
      id:"INV-1234",;
      date:"May 1, 2025",;
      amount:"$1,999.00",;
      status:"paid",;
      period:"May 2025"},;
    {;
      id:"INV-1233",;
      date:"Apr 1, 2025",;
      amount:"$1,999.00",;
      status:"paid",;
      period:"Apr 2025"},;
    {;
      id:"INV-1232",;
      date:"Mar 1, 2025",;
      amount:"$1,999.00",;
      status:"paid",;
      period:"Mar 2025"},;
    {;
      id:"INV-1231",;
      date:"Feb 1, 2025",;
      amount:"$1,999.00",;
      status:"paid",;
      period:"Feb 2025"},;
    {;
      id:"INV-1230",;
      date:"Jan 1, 2025",;
      amount:"$1,999.00",;
      status:"paid",;
      period:"Jan 2025"},;
    {;
      id:"INV-1229",;
      date:"Dec 1, 2024",;
      amount:"$1,999.00",;
      status:"paid",;
      period:"Dec 2024"}],;
;
  const handleDownloadInvoice = (invoiceId:string) => {;
    // In a real app, this would trigger a download of the invoice PDF;
    toast({;
      title:"Downloading invoice",;
      description:`Downloading invoice ${invoiceId} as PDF.`}),;
  },;
;
  const getBadgeForStatus = (status:string) => {;
    switch (status) {;
      case "paid":return <Badge className="bg-green-500">Paid</Badge>,;
      case "pending":;
        return <Badge variant="outline">Pending</Badge>,;
      case "overdue":;
        return <Badge variant="destructive">Overdue</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>,;
    }
  },;
;
  return (;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    }
  }
  },

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Invoice History</h3>;
        <div className="relative">;
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },

  const getBadgeForStatus = (status: string) => {
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>,
      case "pending":
        return <Badge variant="outline">Pending</Badge>,
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }
  },

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Invoice History</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
=======
          <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <Search className="absolute left-2 && 2.5 top-2 && 2.5 h-4 w-4 text-muted-foreground" />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Input
            type="search"
            placeholder="Search invoices..."
            className="w-[200px] md:w-[300px] pl-9"
<<<<<<< HEAD
<<<<<<< HEAD
          />;
        </div>;
      </div>;
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
          <Input;
            type="search";
            placeholder="Search invoices...";
            className="w-[200px] md:w-[300px] pl-9";
          />;
        </div>;
      </div>;
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          />;
        </div>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Invoice Number</TableHead>;
              <TableHead>Date</TableHead>;
              <TableHead>Billing Period</TableHead>;
              <TableHead>Amount</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
<<<<<<< HEAD
<<<<<<< HEAD
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice Number</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Billing Period</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.period}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {invoices && invoices.map((invoice) => (;
              <TableRow key={invoice && invoice.id}>;
                <TableCell className="font-medium">{invoice && invoice.id}</TableCell>;
                <TableCell>{invoice && invoice.date}</TableCell>;
                <TableCell>{invoice && invoice.period}</TableCell>;
                <TableCell>{invoice && invoice.amount}</TableCell>;
                <TableCell>{getBadgeForStatus(invoice && invoice.status)}</TableCell>;
                <TableCell className="text-right">;
                  <div className="flex justify-end gap-2">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"
<<<<<<< HEAD
<<<<<<< HEAD
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >
                      <Download className="h-3.5 w-3.5" />
                      PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Showing 1 - 6 of 12 invoices
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      onClick={() => handleDownloadInvoice(invoice && invoice.id)}
                    >;
                      <Download className="h-3 && 3.5 w-3 && 3.5" />;
                      PDF;
                    </Button>;
                    <Button
                      variant="outline"
                      size="sm"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="h-8 gap-1">;
                      <FileText className="h-3 && 3.5 w-3 && 3.5" />;
=======
                      className="h-8 gap-1">;
                      <FileText className="h-3 && 3.5 w-3 && 3.5" />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Download, FileText, Search } from './lucide-react';
import { Input } from '@/components / ui / input';
import { toast } from '@/hooks / use - toast';
export /**
 * InvoiceHistory - Function description
 */
function InvoiceHistory() {
  // Mock invoice data;
  const invoices = [;
    {
      id: "INV - 1234",
      date: "May 1, 2025";
      amount: "$1, 999.00";
      status: "paid",
      period: "May 2025"},
    {
      id: "INV - 1233",
      date: "Apr 1, 2025";
      amount: "$1, 999.00";
      status: "paid",
      period: "Apr 2025"},
    {
      id: "INV - 1232",
      date: "Mar 1, 2025";
      amount: "$1, 999.00";
      status: "paid",
      period: "Mar 2025"},
    {
      id: "INV - 1231",
      date: "Feb 1, 2025";
      amount: "$1, 999.00";
      status: "paid",
      period: "Feb 2025"},
    {
      id: "INV - 1230",
      date: "Jan 1, 2025";
      amount: "$1, 999.00";
      status: "paid",
      period: "Jan 2025"},
    {
      id: "INV - 1229",
      date: "Dec 1, 2024";
      amount: "$1, 999.00";
      status: "paid",
      period: "Dec 2024"}],
  const handleDownloadInvoice = (invoice_id: string) =>: any {
    // In a real app, this would trigger a download of the invoice PDF;
    toast ({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoice_id} as PDF.`});
  }
;
  const getBadgeForStatus = (status: string) =>: any {
    switch (status) {
      case "paid": return <Badge className="bg - green - 500">Paid</Badge>;
      case "pending":;
        return <Badge variant="outline">Pending</Badge>;
      case "overdue":;
        return <Badge variant="destructive">Overdue</Badge>,
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h3 className="text - xl font - medium">Invoice History</h3>;
        <div className="relative">;
          <Search className="absolute left - 2.5 top - 2.5 h - 4 w - 4 text - muted - foreground" />;
          <Input;
            type="search";
            placeholder="Search invoices...";
            className="w-[200px] md:w-[300px] pl - 9";
          />;
        </div>;
      </div>;
      <div className="rounded - md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead > Invoice Number</TableHead>;
              <TableHead > Date</TableHead>;
              <TableHead > Billing Period</TableHead>;
              <TableHead > Amount</TableHead>;
              <TableHead > Status</TableHead>;
              <TableHead className="text - right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {invoices.map ((invoice) => (
              <TableRow key={invoice.id}>;
                <TableCell className="font - medium">{invoice.id}</TableCell>;
                <TableCell>{invoice.date}</TableCell>;
                <TableCell>{invoice.period}</TableCell>;
                <TableCell>{invoice.amount}</TableCell>;
                <TableCell>{getBadgeForStatus (invoice.status)}</TableCell>;
                <TableCell className="text - right">;
                  <div className="flex justify - end gap - 2">;
                    <Button;
                      variant="outline";
                      size="sm";
                      className="h - 8 gap - 1";
                      on_click={() => handleDownloadInvoice (invoice.id)}
                    >;
                      <Download className="h - 3.5 w - 3.5" />;
<<<<<<< HEAD
            {invoices.map((invoice) => (;
              <TableRow key={invoice.id}>;
                <TableCell className="font-medium">{invoice.id}</TableCell>;
                <TableCell>{invoice.date}</TableCell>;
                <TableCell>{invoice.period}</TableCell>;
                <TableCell>{invoice.amount}</TableCell>;
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>;
                <TableCell className="text-right">;
                  <div className="flex justify-end gap-2">;
                    <Button;
                      variant="outline";
                      size="sm";
                      className="h-8 gap-1";
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >;
                      <Download className="h-3.5 w-3.5" />;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      PDF;
                    </Button>;
                    <Button;
                      variant="outline";
                      size="sm";
<<<<<<< HEAD
                      className="h-8 gap-1";
                    >;
                      <FileText className="h-3.5 w-3.5" />;
=======
                      className="h - 8 gap - 1";
                    >;
                      <FileText className="h - 3.5 w - 3.5" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      View;
                    </Button>;
                  </div>;
                </TableCell>;

<<<<<<< HEAD

<<<<<<< HEAD
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Download, FileText, Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
export function InvoiceHistory() {;
  // Mock invoice data;
  const invoices = [;
    {;
      id: "INV-1234",;
      date: "May 1, 2025",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "May 2025"},;
    {;
      id: "INV-1233",;
      date: "Apr 1, 2025",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "Apr 2025"},;
    {;
      id: "INV-1232",;
      date: "Mar 1, 2025",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "Mar 2025"},;
    {;
      id: "INV-1231",;
      date: "Feb 1, 2025",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "Feb 2025"},;
    {;
      id: "INV-1230",;
      date: "Jan 1, 2025",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "Jan 2025"},;
    {;
      id: "INV-1229",;
      date: "Dec 1, 2024",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "Dec 2024"}],;
  const handleDownloadInvoice = (invoiceId: string) => {;
    // In a real app, this would trigger a download of the invoice PDF;
    toast({;
      title: "Downloading invoice",;
      description: `Downloading invoice ${invoiceId} as PDF.`});
  },;
  const getBadgeForStatus = (status: string) => {;
    switch (status) {;
      case "paid": return <Badge className="bg-green-500">Paid</Badge>,;
      case "pending":;
        return <Badge variant="outline">Pending</Badge>,;
      case "overdue":;
        return <Badge variant="destructive">Overdue</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  return (;
    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Invoice History</h3>;
        <div className="relative">;
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />;
          <Input;
            type="search";
            placeholder="Search invoices...";
            className="w-[200px] md:w-[300px] pl-9";
          />;
        </div>;
      </div>;
      <div className="rounded-md border">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Invoice Number</TableHead>;
              <TableHead>Date</TableHead>;
              <TableHead>Billing Period</TableHead>;
              <TableHead>Amount</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {invoices.map((invoice) => (;
              <TableRow key={invoice.id}>;
                <TableCell className="font-medium">{invoice.id}</TableCell>;
                <TableCell>{invoice.date}</TableCell>;
                <TableCell>{invoice.period}</TableCell>;
                <TableCell>{invoice.amount}</TableCell>;
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>;
                <TableCell className="text-right">;
                  <div className="flex justify-end gap-2">;
                    <Button;
                      variant="outline";
                      size="sm";
                      className="h-8 gap-1";
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >
                      <Download className="h-3.5 w-3.5" />
                      PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      ;
          </TableBody>;
        </Table>;
      </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </TableBody>;
        </Table>;
      </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text-sm text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
              </TableRow>))}
          </TableBody>;
        </Table>;
      </div>;
      <div className="flex items - center justify - between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text - sm text - muted - foreground">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          Showing 1 - 6 of 12 invoices;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </div>);
    </div>;
  ),; import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function InvoiceHistory () {
  //Mock invoice data const invoices = [ {
  id: "INV-1234";
date: "May 1, 2025";
amount: "$1, 999.00";
status: "paid";
period: "May 2025" 
};
{
  id: "INV-1233";
date: "Apr 1, 2025";
amount: "$1, 999.00";
status: "paid";
period: "Apr 2025" 
};
{
  id: "INV-1232";
date: "Mar 1, 2025";
amount: "$1, 999.00";
status: "paid";
period: "Mar 2025" 
};
{
  id: "INV-1231";
date: "Feb 1, 2025";
amount: "$1, 999.00";
status: "paid";
period: "Feb 2025" 
};
{
  id: "INV-1230";
date: "Jan 1, 2025";
amount: "$1, 999.00";
status: "paid";
period: "Jan 2025" 
};
{
  //In a real app, this would trigger a download of the invoice PDF toast ({
  default: return <Badge variant="outline" > {
  status 
}</Badge>;
}
};
<Input type="search" placeholder="Search invoices..." className="w-[200px] md:w-[300px] pl-9" /> </div> </div> <div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Invoice Number</TableHead> <TableHead>Date</TableHead> <TableHead>Billing Period</TableHead> <TableHead>Amount</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  invoices.map ( (invoice) => (<TableRow key= {
  invoice.id 
}> > <Download className="h-3.5 w-3.5" /> PDF </Button> <Button variant="outline" size="sm" className="h-8 gap-1" > <FileText className="h-3.5 w-3.5" /> View </Button> </div> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Showing 1 - 6 of 12 invoices </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) 
}
    </div>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
