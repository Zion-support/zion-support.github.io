Table;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,;
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

import React from "react";
import {
  Table;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
Table;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  TableBody;
  TableCell;
  TableHead;
  TableHeader;

<<<<<<< HEAD
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table""
import { Button } from "@/components/ui/button""
import { Badge } from "@/components/ui/badge""
import { Download, FileText, Search } from 'lucide-react'import { Input } from "@/components/ui/input""
import { toast } from "@/hooks/use-toast"
";
import React from "react";
<<<<<<< HEAD
import {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
import {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from "react",
import {}
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  TableRow} from "@/components/ui/table",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
"
  TableRow} from "@/components/ui/table","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Download, FileText, Search } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",
=======
import { Input } from "@/components/ui/input",
=======
"
import { Input } from "@/components/ui/input","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",
=======

  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Download, FileText, Search } from 'lucide-react'


import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export function InvoiceHistory() {
  // Mock invoice data
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const invoices = [
    {
<<<<<<< HEAD
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
=======

=======
export function InvoiceHistory() {
  // Mock invoice data,
  const invoices = [
    {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  TableRow } from '@/components / ui / table';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { Download, FileText, Search } from 'lucide-react'import { Input  } from '@/components / ui / input';
=======
export function InvoiceHistory() {};
  // Mock invoice data;
  const invoices = []
    {}
'
  TableRow } from '@/components / ui / table';'
import { Button  } from '@/components / ui / button';'
import { Badge  } from '@/components / ui / badge';'
import { Download, FileText, Search } from 'lucide-react'import { Input  } from '@/components / ui / input';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast  } from '@/hooks / use - toast';
<<<<<<< HEAD
export /**;
 * InvoiceHistory - Function description;
 */
function InvoiceHistory() {}
  // Mock invoice data;
  const invoices = [;
    {"
      id: "INV - 1234","
      date: "May 1, 2025";"
      amount: "$1, 999.00";"
      status: "paid","
      period: "May 2025"},
    {"
      id: "INV - 1233","
      date: "Apr 1, 2025";"
      amount: "$1, 999.00";"
      status: "paid","
      period: "Apr 2025"},
    {"
      id: "INV - 1232","
      date: "Mar 1, 2025";"
      amount: "$1, 999.00";"
      status: "paid","
      period: "Mar 2025"},
    {"
      id: "INV - 1231","
      date: "Feb 1, 2025";"
      amount: "$1, 999.00";"
      status: "paid","
      period: "Feb 2025"},
    {"
      id: "INV - 1230","
      date: "Jan 1, 2025";"
      amount: "$1, 999.00";"
      status: "paid","
      period: "Jan 2025"},
    {"
      id: "INV - 1229","
      date: "Dec 1, 2024";"
      amount: "$1, 999.00";"
      status: "paid","
      period: "Dec 2024"}],
  const handleDownloadInvoice = (invoice_id: string) =>: any {    // In a real app, this would trigger a download of the invoice PDF;
    toast ({"
      title: "Downloading invoice",
      description: `Downloading invoice ${invoice_id} as PDF.`});

=======
export /**
 * InvoiceHistory - Function description
"
  TableRow} from "@/components/ui/table",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge",""
import { Download, FileText, Search } from 'lucide-react
import { Input } from "@/components/ui/input",""
import { toast } from "@/hooks/use-toast","
export function InvoiceHistory() {
  // Mock invoice data;
  const invoices = [
    {
  TableRow } from '@/components/ui/ table';
import { Button  } from '@/components/ui/ button';
import { Badge  } from '@/components/ui/ badge';
import { Download, FileText, Search } from 'lucide-react'import { Input  } from '@/components/ui/ input';
import { toast  } from '@/hooks/ use - toast';
export /**
 * InvoiceHistory - Function description;
pr-12325
 */
function InvoiceHistory() {
  // Mock invoice data;,
  const invoices = [;
    {
      id: "INV - 1234","
      date: "May 1, 2025";
      amount: "$1, 999.00";
      status: "paid","
      period: "May 2025"},"
    {
      id: "INV - 1233","
      date: "Apr 1, 2025";
      amount: "$1, 999.00";
      status: "paid","
      period: "Apr 2025"},"
    {
      id: "INV - 1232","
      date: "Mar 1, 2025";
      amount: "$1, 999.00";
      status: "paid","
      period: "Mar 2025"},"
    {
      id: "INV - 1231","
      date: "Feb 1, 2025";
      amount: "$1, 999.00";
      status: "paid","
      period: "Feb 2025"},"
    {
      id: "INV - 1230","
      date: "Jan 1, 2025";
      amount: "$1, 999.00";
      status: "paid","
      period: "Jan 2025"},"
    {
      id: "INV - 1229","
      date: "Dec 1, 2024";
      amount: "$1, 999.00";
      status: "paid","
      period: "Dec 2024"}],"
  const handleDownloadInvoice = (invoice_id:,  string) =>: any {    // In a real app, this would trigger a download of the invoice PDF;
    toast ({
      title: "Downloading invoice","
      description: `Downloading invoice ${invoice_id} as PDF.`});`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
<<<<<<< HEAD
  const getBadgeForStatus = (status: string, ) =>: any {
    switch (status) {
<<<<<<< HEAD

      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
      id: "INV-1234",

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      id: "INV-1234","
      date: "May 1, 2025","
      amount: "$1,999.00","
      id: "INV-1234","
      status: "paid","
      period: "May 2025"},"
    {
      id: "INV-1233","
      status: "paid","
      period: "Apr 2025"},"
    {
      id: "INV-1232","
      status: "paid","
      period: "Mar 2025"},"
    {
      id: "INV-1231","
      status: "paid","
      period: "Feb 2025"},"
    {
      id: "INV-1230","
      status: "paid","
      period: "Jan 2025"},"
    {
      id: "INV-1229","
    toast({
      title: "Downloading invoice"",
      description: `Downloading invoice ${invoiceId} as PDF.`})`
      date: "Dec 1, 2024","
      amount: "$1,999.00","
      status: "paid","
      period: "Dec 2024"}],"
  const handleDownloadInvoice = (invoiceId:,  string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice","
      description: `Downloading invoice ${invoiceId} as PDF.`})`
  },
  const getBadgeForStatus = (status:,  string) => {,
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>,"
      case "pending":"
        return <Badge variant="outline">Pending</Badge>,"
      case "overdue":"
        return <Badge variant="destructive">Overdue</Badge>,"
      default:
        return <Badge variant="outline">{status}</Badge>"
    }
  },
  return (
    <div className="space-y-6">"
      <div className="flex items-center justify-between">"
        <h3 className="text-xl font-medium">Invoice History</h3>"
        <div className="relative">"
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />"
          <Input
            type="search""
            placeholder="Search invoices..."",
            className="w-[200px] md:w-[300px] pl-9"",
          />
        </div>
      </div>
      <div className="rounded-md border">"
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",
export function InvoiceHistory() {
  // Mock invoice data
  const invoices = [
    {
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      status: "paid",
=======
  const getBadgeForStatus = (status: string, ) =>: any {}
    switch (status) {}
"
      id: "INV-1234","
      date: "May 1, 2025","
      amount: "$1,999.00","
      id: "INV-1234",
"
      status: "paid","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      period: "May 2025"},
    {"
      id: "INV-1233",
<<<<<<< HEAD
<<<<<<< HEAD
      date: "Apr 1, 2025",
      amount: "$1,999.00",
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      date: "Apr 1, 2025",
      amount: "$1,999.00",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      status: "paid",
=======
"
      status: "paid","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      period: "Apr 2025"},
    {"
      id: "INV-1232",
<<<<<<< HEAD
<<<<<<< HEAD
      date: "Mar 1, 2025",
      amount: "$1,999.00",
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      date: "Mar 1, 2025",
      amount: "$1,999.00",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      status: "paid",
=======
"
      status: "paid","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      period: "Mar 2025"},
    {"
      id: "INV-1231",
<<<<<<< HEAD
<<<<<<< HEAD
      date: "Feb 1, 2025",
      amount: "$1,999.00",
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      date: "Feb 1, 2025",
      amount: "$1,999.00",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      status: "paid",
=======
"
      status: "paid","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      period: "Feb 2025"},
    {"
      id: "INV-1230",
<<<<<<< HEAD
<<<<<<< HEAD
      date: "Jan 1, 2025",
      amount: "$1,999.00",
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      date: "Jan 1, 2025",
      amount: "$1,999.00",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      status: "paid",
=======
"
      status: "paid","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      period: "Jan 2025"},
    {"
      id: "INV-1229",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    toast({"
      title: "Downloading invoice"`
      description: `Downloading invoice ${invoiceId} as PDF.`})
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      date: "Dec 1, 2024",
      amount: "$1,999.00",
      status: "paid",
=======
"
      date: "Dec 1, 2024","
      amount: "$1,999.00","
      status: "paid","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      period: "Dec 2024"}],

  const handleDownloadInvoice = (invoiceId: string) => {}
    // In a real app, this would trigger a download of the invoice PDF;
    toast({"
      title: "Downloading invoice",`
      description: `Downloading invoice ${invoiceId} as PDF.`})
      id: "INV - 1234",""
      date: "May 1, 2025";""
      amount: "$1, 999.00";""
      status: "paid",""
      period: "May 2025"},"
    {"
      id: "INV - 1233",""
      date: "Apr 1, 2025";""
      period: "Apr 2025"},"
      id: "INV - 1232",""
      date: "Mar 1, 2025";""
      period: "Mar 2025"},"
      id: "INV - 1231",""
      date: "Feb 1, 2025";""
      period: "Feb 2025"},"
      id: "INV - 1230",""
      date: "Jan 1, 2025";""
      period: "Jan 2025"},"
      id: "INV - 1229",""
      date: "Dec 1, 2024";""
      status: "paid","]"
      period: "Dec 2024"}],"
  const handleDownloadInvoice = (invoice_id: string) =>: any {    // In a real app, this would trigger a download of the invoice PDF;
    toast ({"
      title: "Downloading invoice",")
      description: `Downloading invoice ${invoice_id} as PDF.`});

  const getBadgeForStatus = (status: string, ) =>: any {
  // TODO: Implement
    switch (status) {

      id: "INV-1234",""
      date: "May 1, 2025",""
      amount: "$1,999.00",""
      id: "INV-1233",""
      id: "INV-1232",""
      id: "INV-1231",""
      id: "INV-1230",""
      id: "INV-1229","
    toast({"
      title: "Downloading invoice"",)`;
  description: `Downloading invoice ${invoiceId} as PDF.`})
      date: "Dec 1, 2024",""
  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF;
      title: "Downloading invoice",")`;
pr-12325

  },

  const getBadgeForStatus = (status: string) => {}
    switch (status) {"
      case "paid": return <Badge className="bg-green-500">Paid</Badge>,"
      case "pending":"
        return <Badge variant="outline">Pending</Badge>,"
      case "overdue":"
        return <Badge variant="destructive">Overdue</Badge>,
      default:"
        return <Badge variant="outline">{status}</Badge>
    }
  },

  return ("
    <div className="space-y-6">"
      <div className="flex items-center justify-between">"
        <h3 className="text-xl font-medium">Invoice History</h3>"
        <div className="relative">"
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input"
            type="search""
            placeholder="Search invoices...""
            className="w-[200px] md:w-[300px] pl-9"
          />
        </div>
      </div>
"
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice Number</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Billing Period</TableHead>
              <TableHead>Amount</TableHead>
<<<<<<< HEAD
              <TableHead>Status</TableHead>"
=======
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
<<<<<<< HEAD
              <TableRow key={invoice.id}>"
=======
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.period}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
<<<<<<< HEAD
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>"
                <TableCell className="text-right">"
=======
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>
                <TableCell className="text-right">"
                  <div className="flex justify-end gap-2">"
                    <Button
                      variant="outline""
                      size="sm""
                      className="h-8 gap-1""
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >
                      <Download className="h-3.5 w-3.5" />"
                      PDF
                    </Button>
                    <Button
                      variant="outline""
                      size="sm""
                      className="h-8 gap-1""
                    >
                      <FileText className="h-3.5 w-3.5" />"
                <TableCell className="text-right">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <div className="flex justify-end gap-2">
                    <Button"
                      variant="outline""
                      size="sm""
                      className="h-8 gap-1"
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >"
                      <Download className="h-3.5 w-3.5" />
                      PDF;
                    </Button>
                    <Button"
                      variant="outline""
                      size="sm""
                      className="h-8 gap-1"
                    >"
                      <FileText className="h-3.5 w-3.5" />
                      View;
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
<<<<<<< HEAD
      "
      <div className="flex items-center justify-between">"
=======

      <div className="flex items-center justify-between">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Button variant="outline" size="sm">
          Previous;
        </Button>"
        <div className="text-sm text-muted-foreground">
          Showing 1 - 6 of 12 invoices;
        </div>"
        <Button variant="outline" size="sm">
          Next;
        </Button>
      </div>
    </div>
<<<<<<< HEAD
  )"
import React from "react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Button } from "@/components/ui/button",;"
import { Badge } from "@/components/ui/badge",;'
import { Download, FileText, Search } from 'lucide-react';"
import { Input } from "@/components/ui/input",;"
import { toast } from "@/hooks/use-toast",;
<<<<<<< HEAD
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
=======
  )

}
  );
}
;
}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      date: "Dec 1, 2024",;
      amount: "$1,999.00",;
      status: "paid",;
      period: "Dec 2024"}],;
  const handleDownloadInvoice = (invoiceId: string) => {;
    // In a real app, this would trigger a download of the invoice PDF;
    toast({;
<<<<<<< HEAD
      title: "Downloading invoice",;
=======

export function InvoiceHistory() { return null; }
      period: "May 2025"},;
    {;"
      id: "INV-1233",;"
      date: "Apr 1, 2025";"
      amount: "$1,999 && 999.00";"
      status: "paid",;"
      period: "Apr 2025"},;
    {;"
      id: "INV-1232",;"
      date: "Mar 1, 2025";"
      amount: "$1,999 && 999.00";"
      status: "paid",;"
      period: "Mar 2025"},;
    {;"
      id: "INV-1231",;"
      date: "Feb 1, 2025";"
      amount: "$1,999 && 999.00";"
      status: "paid",;"
      period: "Feb 2025"},;
    {;"
      id: "INV-1230",;"
      date: "Jan 1, 2025";"
      amount: "$1,999 && 999.00";"
      status: "paid",;"
      period: "Jan 2025"},;
    {;"
      id: "INV-1229",;"
      date: "Dec 1, 2024";"
      amount: "$1,999 && 999.00";"
      status: "paid",;"
      period: "Dec 2024"}],;
  const handleDownloadInvoice = (invoiceId: string) => {    // In a real app, this would trigger a download of the invoice PDF;
    toast({;"
      title: "Downloading invoice",;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      description: `Downloading invoice ${invoiceId} as PDF.`});
  },;
  const getBadgeForStatus = (status: string) => {;
<<<<<<< HEAD
=======
      title: "Downloading invoice",,
  description: `Downloading invoice ${invoiceId} as PDF.`})
};

  const getBadgeForStatus = (status: string,) => {;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    switch (status) {;
<<<<<<< HEAD
=======
    switch (status) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      case "paid": return <Badge className="bg-green-500">Paid</Badge>,;
      case "pending":;
        return <Badge variant="outline">Pending</Badge>,;
      case "overdue":;
<<<<<<< HEAD
=======
      case "paid": return <Badge className="bg-green-500">Paid</Badge>;
=======
    switch (status) {;"
      case "paid": return <Badge className="bg-green-500">Paid</Badge>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        return <Badge variant="destructive">Overdue</Badge>;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
<<<<<<< HEAD
}

  )
<<<<<<< HEAD
}
<<<<<<< HEAD
      case "paid": return <Badge className="bg - green - 500">Paid</Badge>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}"
      case "paid": return <Badge className="bg - green - 500">Paid</Badge>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        return <Badge variant="destructive">Overdue</Badge>;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
                    >;
                      <Download className="h-3.5 w-3.5" />;
                      PDF;
                    </Button>;
                    <Button;
                      variant="outline";
                      size="sm";
                      className="h-8 gap-1";
                    >;
                      <FileText className="h-3.5 w-3.5" />;
                      View;
                    </Button>;
                  </div>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text-sm text-muted-foreground">;
          Showing 1 - 6 of 12 invoices;
        </div>;
        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}
;
=======
      case "paid": return <Badge className="bg - green-500">Paid</Badge>;
        return <Badge variant="destructive">Overdue</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
  );

};";
<Input type="search" placeholder="Search invoices..." className="w-[200px] md:w-[300px] pl-9" /> </div> </div> <div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Invoice Number</TableHead> <TableHead>Date</TableHead> <TableHead>Billing Period</TableHead> <TableHead>Amount</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  invoices.map ( (invoice) => (<TableRow key= {;
  invoice.id ";
}> > <Download className="h-3.5 w-3.5" /> PDF </Button> <Button variant="outline" size="sm" className="h-8 gap-1" > <FileText className="h-3.5 w-3.5" /> View </Button> </div> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Showing 1 - 6 of 12 invoices </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>) ;
}"
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
    switch (status) {"
      case "paid": return <Badge className="bg-green-500">Paid,""
        return <Badge variant="outline">Pending,""
        return <Badge variant="destructive">Overdue,""
        return <Badge variant="outline">{status}""
    <div className="space-y-6">"
</div>"
      <div className="flex items-center justify-between">"
        <h3 className="text-xl font-medium">Invoice History</h3>""
        <div className="relative">"
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />"

          <Input;"
            type="search"""
            placeholder="Search invoices..."""
            className="w-[200px] md:w-[300px] pl-9""
          />

        </div>
      <div className="rounded-md border">"
        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Invoice Number
              <TableHead>Date
              <TableHead>Billing Period
              <TableHead>Amount
              <TableHead>Status"
              <TableHead className="text-right">Actions"
          <TableBody>

              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}"
                <TableCell>{invoice.date}
                <TableCell>{invoice.period}
                <TableCell>{invoice.amount}
                <TableCell>{getBadgeForStatus(invoice.status)}"
                <TableCell className="text-right">"
                  <div className="flex justify-end gap-2">"
                    <Button;"
                      variant="outline"""
                      size="sm"""
                      className="h-8 gap-1""
                      onClick={() => handleDownloadInvoice(invoice.id)}
                      <Download className="h-3.5 w-3.5" />"

                    >
                      <FileText className="h-3.5 w-3.5" />"

        <Button variant="outline" size="sm">"

        <div className="text-sm text-muted-foreground">"

      case "paid": return <Badge className="bg-green-500">Paid;""
        return <Badge variant="destructive">Overdue;""
        return <Badge variant="outline">{status};""
      case "paid": return <Badge className="bg - green - 500">Paid;""
        return <Badge variant="outline">{status};""`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
