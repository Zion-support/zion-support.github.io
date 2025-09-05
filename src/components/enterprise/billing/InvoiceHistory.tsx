
import React from &quot;react&quot;;
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from &quot;@/components/ui/table&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Download, FileText, Search } from 'lucide-react'
import { Input } from &quot;@/components/ui/input&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

export function InvoiceHistory() {
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
      id: &quot;INV-1229&quot;,
      date: &quot;Dec 1, 2024&quot;,
      amount: &quot;$1,999.00&quot;,
      status: &quot;paid&quot;,
      period: &quot;Dec 2024&quot;}];

  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: &quot;Downloading invoice&quot;,
      description: `Downloading invoice ${invoiceId} as PDF.`});
  };

  const getBadgeForStatus = (status: string) => {
    switch (status) {
      case &quot;paid&quot;:
        return <Badge className=&quot;bg-green-500&quot;>Paid</Badge>;
      case &quot;pending&quot;:
        return <Badge variant=&quot;outline&quot;>Pending</Badge>;
      case &quot;overdue&quot;:
        return <Badge variant=&quot;destructive&quot;>Overdue</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
    }
  };

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h3 className=&quot;text-xl font-medium&quot;>Invoice History</h3>
        <div className=&quot;relative&quot;>
          <Search className=&quot;absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground&quot; />
          <Input
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
            {invoices.map((invoice) => (
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
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >
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
  );
}
