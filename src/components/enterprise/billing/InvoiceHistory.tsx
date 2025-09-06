

import React from "react";
import {

import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,

  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from 'lucide-react'

export function InvoiceHistory() {
  // Mock invoice data

  const invoices = [
    {

      status: "paid",
      period: "May 2025"},
    {
      id: "INV-1233",

      status: "paid",
      period: "Apr 2025"},
    {
      id: "INV-1232",

      status: "paid",
      period: "Mar 2025"},
    {
      id: "INV-1231",

      status: "paid",
      period: "Feb 2025"},
    {
      id: "INV-1230",

      status: "paid",
      period: "Jan 2025"},
    {
      id: "INV-1229",

      status: "paid",
      period: "Dec 2024"}],

  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF

    toast({
      title: "Downloading invoice"
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
}
      case "paid": return <Badge className="bg - green - 500">Paid</Badge>;
        return <Badge variant="destructive">Overdue</Badge>;
      default:;

        return <Badge variant="outline">{status}</Badge>;
};
  );

