
import React from "react";
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
      title: "Downloading invoice", _description: `Downloading invoice ${invoiceId} as PDF.`});
  };

  const _getBadgeForStatus = (_status: string) => {_switch (status) {
      case "paid":
        return <Badge className="bg-green-500">Paid</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (_<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Invoice History</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search invoices..."
            className="w-[200px] md:w-[300px] pl-9"
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
            {_invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{_invoice.id}</TableCell>
                <TableCell>{_invoice.date}</TableCell>
                <TableCell>{_invoice.period}</TableCell>
                <TableCell>{_invoice.amount}</TableCell>
                <TableCell>{_getBadgeForStatus(invoice.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"
                      onClick={_() => handleDownloadInvoice(invoice.id)}
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
  );
}
