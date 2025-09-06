
import React from "react";
<<<<<<< HEAD
import {;
import React from './react';
import {
=======
import {
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
<<<<<<< HEAD
=======
=======
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Search } from 'lucide-react'import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react";
import {

import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from 'lucide-react'
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
=======


import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export function InvoiceHistory() {
  // Mock invoice data

  const invoices = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      id: "INV-1234"
      date: "May 1, 2025"
      amount: "$1,999.00"
      status: "paid"
      period: "May 2025"}
    {
      id: "INV-1233"
      date: "Apr 1, 2025"
      amount: "$1,999.00"
      status: "paid"
      period: "Apr 2025"}
    {
      id: "INV-1232"
      date: "Mar 1, 2025"
      amount: "$1,999.00"
      status: "paid"
      period: "Mar 2025"}
    {
      id: "INV-1231"
      date: "Feb 1, 2025"
      amount: "$1,999.00"
      status: "paid"
      period: "Feb 2025"}
    {
      id: "INV-1230"
      date: "Jan 1, 2025"
      amount: "$1,999.00"
      status: "paid"
      period: "Jan 2025"}
    {
      id: "INV-1229"
      date: "Dec 1, 2024"
      amount: "$1,999.00"
      status: "paid"
      period: "Dec 2024"}]
  const handleDownloadInvoice = (invoiceId: string) => {    // In a real app, this would trigger a download of the invoice PDF
<<<<<<< HEAD
    toast({
      title: "Downloading invoice"
      description: `Downloading invoice ${invoiceId} as PDF.`})
  }
  const getBadgeForStatus = (status: string, ) =>: any {
=======
=======

      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
=======
      id: "INV-1234",
<<<<<<< HEAD
      date: "May 1, 2025"
      amount: "$1,999.00"
=======
      date: "May 1, 2025",
      amount: "$1,999.00",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      status: "paid",
      period: "May 2025"},
    {
      id: "INV-1233",
<<<<<<< HEAD
      date: "Apr 1, 2025",
      amount: "$1,999.00",
=======
<<<<<<< HEAD
      date: "Apr 1, 2025"
      amount: "$1,999.00"
=======
      date: "Apr 1, 2025",
      amount: "$1,999.00",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      status: "paid",
      period: "Apr 2025"},
    {
      id: "INV-1232",
<<<<<<< HEAD
      date: "Mar 1, 2025",
      amount: "$1,999.00",
=======
<<<<<<< HEAD
      date: "Mar 1, 2025"
      amount: "$1,999.00"
=======
      date: "Mar 1, 2025",
      amount: "$1,999.00",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      status: "paid",
      period: "Mar 2025"},
    {
      id: "INV-1231",
<<<<<<< HEAD
      date: "Feb 1, 2025",
      amount: "$1,999.00",
=======
<<<<<<< HEAD
      date: "Feb 1, 2025"
      amount: "$1,999.00"
=======
      date: "Feb 1, 2025",
      amount: "$1,999.00",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      status: "paid",
      period: "Feb 2025"},
    {
      id: "INV-1230",
<<<<<<< HEAD
      date: "Jan 1, 2025",
      amount: "$1,999.00",
=======
<<<<<<< HEAD
      date: "Jan 1, 2025"
      amount: "$1,999.00"
=======
      date: "Jan 1, 2025",
      amount: "$1,999.00",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      status: "paid",
      period: "Jan 2025"},
    {
      id: "INV-1229",
<<<<<<< HEAD
      date: "Dec 1, 2024",
      amount: "$1,999.00",
=======
<<<<<<< HEAD
      date: "Dec 1, 2024"
      amount: "$1,999.00"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      status: "paid",
      period: "Dec 2024"}],


    toast({
      title: "Downloading invoice"
      description: `Downloading invoice ${invoiceId} as PDF.`})
<<<<<<< HEAD
  }
  const getBadgeForStatus = (status: string,) => {
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>
        return <Badge variant="destructive">Overdue</Badge>
      default:
<<<<<<< HEAD
        return <Badge variant="outline">{status}</Badge>
}

=======
=======
=======
      date: "Dec 1, 2024",
      amount: "$1,999.00",
      status: "paid",
      period: "Dec 2024"}],

  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoiceId} as PDF.`})
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },

  const getBadgeForStatus = (status: string) => {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
}

  )
}
      case "paid": return <Badge className="bg - green - 500">Paid</Badge>;
        return <Badge variant="destructive">Overdue</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
}
  );
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
