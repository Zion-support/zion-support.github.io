
import React from "react",import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",export function InvoiceHistory() {
  // Mock invoice data
  const invoices = [
    {
      id: &quot;INV-1234&quot;,
      date: &quot;May 1, 2025&quot;,
      amount: &quot;$1,999.00&quot;,
      status: &quot;paid&quot;,
      period: &quot;May 2025&quot;},
    {
      id: &quot;INV-1233&quot;,
      date: &quot;Apr 1, 2025&quot;,
      amount: &quot;$1,999.00&quot;,
      status: &quot;paid&quot;,
      period: &quot;Apr 2025&quot;},
    {
      id: &quot;INV-1232&quot;,
      date: &quot;Mar 1, 2025&quot;,
      amount: &quot;$1,999.00&quot;,
      status: &quot;paid&quot;,
      period: &quot;Mar 2025&quot;},
    {
      id: &quot;INV-1231&quot;,
      date: &quot;Feb 1, 2025&quot;,
      amount: &quot;$1,999.00&quot;,
      status: &quot;paid&quot;,
      period: &quot;Feb 2025&quot;},
    {
      id: &quot;INV-1230&quot;,
      date: &quot;Jan 1, 2025&quot;,
      amount: &quot;$1,999.00&quot;,
      status: &quot;paid&quot;,
      period: &quot;Jan 2025&quot;},
    {
      id: "INV-1229",
      date: "Dec 1, 2024",
      amount: "$1,999.00",
      status: "paid",
      period: "Dec 2024"}],import React from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

export function InvoiceHistory() {_// Mock invoice data
  const _invoices = [
    {
      id: "INV-1234", _date: "May 1, _2025", _amount: "$1, _999.00", _status: "paid", _period: "May 2025"},
    {_id: "INV-1233", _date: "Apr 1, _2025", _amount: "$1, _999.00", _status: "paid", _period: "Apr 2025"},
    {_id: "INV-1232", _date: "Mar 1, _2025", _amount: "$1, _999.00", _status: "paid", _period: "Mar 2025"},
    {_id: "INV-1231", _date: "Feb 1, _2025", _amount: "$1, _999.00", _status: "paid", _period: "Feb 2025"},
    {_id: "INV-1230", _date: "Jan 1, _2025", _amount: "$1, _999.00", _status: "paid", _period: "Jan 2025"},
    {_id: "INV-1229", _date: "Dec 1, _2024", _amount: "$1, _999.00", _status: "paid", _period: "Dec 2024"}];

  const _handleDownloadInvoice = (_invoiceId: string) => {_// In a real app, _this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoiceId} as PDF.`})
  },

  const getBadgeForStatus = (status: string) => {
    switch (status) {
      case "paid": return <Badge className="bg-green-500">Paid</Badge>,
      case "pending":
        return <Badge variant="outline">Pending</Badge>,
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>,
      default:
        return <Badge variant="outline">{status}</Badge>      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
    }
  },

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-xl font-medium&quot;>Invoice History</h3>
        <div className=&quot;relative&quot;>
          <Search className=&quot;absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground&quot; />          <Input
            type=&quot;search&quot;
            placeholder=&quot;Search invoices...&quot;
            className=&quot;w-[200px] md:w-[300px] pl-9&quot;
          />
        </div>
      </div>

      <div className=&quot;rounded-md border&quot;>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice Number</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Billing Period</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className=&quot;text-right&quot;>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className=&quot;font-medium&quot;>{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.period}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>
                <TableCell className=&quot;text-right&quot;>
                  <div className=&quot;flex justify-end gap-2&quot;>
                    <Button
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      className=&quot;h-8 gap-1&quot;
                      onClick={() => handleDownloadInvoice(invoice.id)}                    >
                      <Download className=&quot;h-3.5 w-3.5&quot; />
                      PDF
                    </Button>
                    <Button
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      className=&quot;h-8 gap-1&quot;
                    >
                      <FileText className=&quot;h-3.5 w-3.5&quot; />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className=&quot;flex items-center justify-between&quot;>
        <Button variant=&quot;outline&quot; size=&quot;sm&quot;>
          Previous
        </Button>
        <div className=&quot;text-sm text-muted-foreground&quot;>
          Showing 1 - 6 of 12 invoices
        </div>
        <Button variant=&quot;outline&quot; size=&quot;sm&quot;>
          Next
        </Button>
      </div>
    </div>
  )
}
