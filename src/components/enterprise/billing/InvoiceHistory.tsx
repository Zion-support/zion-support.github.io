
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function InvoiceHistory() {
  const { toast } = useToast();
  
  // Mock invoice data
  const invoices = [
    {
      id: "INV-001";
      date: "2024-01-15";
      amount: 299.00;
      status: "paid";
      description: "Pro Plan - Monthly"
    };
    {
      id: "INV-002";
      date: "2024-02-15";
      amount: 299.00;
      status: "paid";
      description: "Pro Plan - Monthly"
    }
  ];

  const handleDownload = (invoiceId: string) => {
    toast({
      title: "Download Started";
      description: `Downloading invoice ${invoiceId}`;
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input placeholder="Search invoices..." className="max-w-sm" />
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.description}</TableCell>
              <TableCell>${invoice.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge >
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button
                  
                  size="sm"
                  onClick={() => handleDownload(invoice.id)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}