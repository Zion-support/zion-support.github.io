
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
export function InvoiceHistory() {;
  // Mock invoice data;
  const invoices = [;
    {;

    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Invoice History</h3>;
        <div className="relative">;

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

                      PDF;
                    </Button>;
                    <Button;
                      variant="outline";
                      size="sm";

                      View;
                    </Button>;
                  </div>;
                </TableCell>;

      <div className="flex items-center justify-between">;
        <Button variant="outline" size="sm">;
          Previous;
        </Button>;
        <div className="text-sm text-muted-foreground">;

}