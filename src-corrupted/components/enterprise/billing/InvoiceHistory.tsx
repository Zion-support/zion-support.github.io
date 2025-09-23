Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;





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





export function InvoiceHistory() {
  // Mock invoice data

  const invoices = [
    {



  TableRow } from '@/components / ui / table';
import { Button  } from '@/components / ui / button';
import { Badge  } from '@/components / ui / badge';
import { Download, FileText, Search } from 'lucide-react'import { Input  } from '@/components / ui / input';
import { toast  } from '@/hooks / use - toast';
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
  const handleDownloadInvoice = (invoice_id: string) =>: any {    // In a real app, this would trigger a download of the invoice PDF;
    toast ({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoice_id} as PDF.`});

  }
  const getBadgeForStatus = (status: string, ) =>: any {
    switch (status) {


      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
      id: "INV-1234",

      date: "May 1, 2025"
      amount: "$1,999.00"
      date: "May 1, 2025",
      amount: "$1,999.00",

      status: "paid",
      period: "May 2025"},
    {
      id: "INV-1233",

      date: "Apr 1, 2025",
      amount: "$1,999.00",
      date: "Apr 1, 2025"
      amount: "$1,999.00"
      date: "Apr 1, 2025",
      amount: "$1,999.00",

      status: "paid",
      period: "Apr 2025"},
    {
      id: "INV-1232",

      date: "Mar 1, 2025",
      amount: "$1,999.00",
      date: "Mar 1, 2025"
      amount: "$1,999.00"
      date: "Mar 1, 2025",
      amount: "$1,999.00",

      status: "paid",
      period: "Mar 2025"},
    {
      id: "INV-1231",

      date: "Feb 1, 2025",
      amount: "$1,999.00",
      date: "Feb 1, 2025"
      amount: "$1,999.00"
      date: "Feb 1, 2025",
      amount: "$1,999.00",

      status: "paid",
      period: "Feb 2025"},
    {
      id: "INV-1230",

      date: "Jan 1, 2025",
      amount: "$1,999.00",
      date: "Jan 1, 2025"
      amount: "$1,999.00"
      date: "Jan 1, 2025",
      amount: "$1,999.00",

      status: "paid",
      period: "Jan 2025"},
    {
      id: "INV-1229",

      date: "Dec 1, 2024",
      amount: "$1,999.00",
      date: "Dec 1, 2024"
      amount: "$1,999.00"
      status: "paid",
      period: "Dec 2024"}],


  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice"
      description: `Downloading invoice ${invoiceId} as PDF.`})

  }
  const getBadgeForStatus = (status: string,) => {
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
}


      date: "Dec 1, 2024",
      amount: "$1,999.00",
      status: "paid",
      period: "Dec 2024"}],

  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoiceId} as PDF.`})





  },

  const getBadgeForStatus = (status: string) => {
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>
        return <Badge variant="destructive">Overdue</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
}

  )

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
import { Download, FileText, Search } from 'lucide-react';
import { Input } from "@/components/ui/input",;
import { toast } from "@/hooks/use-toast",;

export function InvoiceHistory() {;
  // Mock invoice data;
  const invoices = [;
    {;
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
  const handleDownloadInvoice = (invoiceId: string) => {    // In a real app, this would trigger a download of the invoice PDF;
    toast({;
      title: "Downloading invoice",;
      description: `Downloading invoice ${invoiceId} as PDF.`});
  };

  const getBadgeForStatus = (status: string,) => {;
    switch (status) {;
      case "paid": return <Badge className="bg-green-500">Paid</Badge>;
        return <Badge variant="destructive">Overdue</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
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
;

