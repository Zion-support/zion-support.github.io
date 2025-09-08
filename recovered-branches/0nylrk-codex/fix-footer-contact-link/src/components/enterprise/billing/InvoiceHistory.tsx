import React from "react";

import React from "react";



import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Download, FileText, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {toast} from "@/hooks/use-toast";




  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from "lucide-react",




export function InvoiceHistory() {

  TableHeader;



      id: "INV-1234",;
      date: "May 1, 2025";
      amount: "$1,999.00";



      status: "paid",

      period: "May 2025"},
    {"
      id: "INV-1233","
      date: "Apr 1, 2025","
      amount: "$1,999.00","
      status: "paid","
      period: "Apr 2025"},
    {"
      id: "INV-1232","
      date: "Mar 1, 2025","
      amount: "$1,999.00","
      status: "paid","
      period: "Mar 2025"},
    {"
      id: "INV-1231","
      date: "Feb 1, 2025","
      amount: "$1,999.00","
      status: "paid","
      period: "Feb 2025"},
    {"
      id: "INV-1230","
      date: "Jan 1, 2025","
      amount: "$1,999.00","
      status: "paid","
      period: "Jan 2025"},
    {"
      id: "INV-1229","
      date: "Dec 1, 2024","
      amount: "$1,999.00","
      status: "paid","
      period: "Dec 2024"}],





  const handleDownloadInvoice = (invoiceId: string) => {

    // In a real app, this would trigger a download of the invoice PDF
    toast({

      title: "Downloading invoice"
      description: `Downloading invoice ${invoiceId} as PDF.`})



  },



  const getBadgeForStatus = (status: string) => {
    switch (status) {

export function InvoiceHistory() {;
  // Mock invoice data;
  const invoices = [;
    {;



  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoiceId} as PDF.`})
  },


    <div className="space-y-6">;
      <div className="flex items-center justify-between">;
        <h3 className="text-xl font-medium">Invoice History</h3>;
        <div className="relative">;


          <Input
            type="search"
            placeholder="Search invoices..."
            className="w-[200px] md:w-[300px] pl-9"


              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;


                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"


                      className="h-8 gap-1"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}


      <div className="flex items-center justify-between">;

        <Button variant="outline" size="sm">;
          Previous;
        </Button>;"
        <div className="text-sm text-muted-foreground">;



          Showing 1 - 6 of 12 invoices;

        </div>;

        <Button variant="outline" size="sm">;
          Next;
        </Button>;
      </div>;






}
</div>);
}
}
    </div>);
    </div>;
  ),; import {};
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function InvoiceHistory () {}
  //Mock invoice data const invoices = [ {";
  id: "INV-1234";"
date: "May 1, 2025";"
amount: "$1, 999.00";"
status: "paid";"
period: "May 2025" 
};
{"
  id: "INV-1233";"
date: "Apr 1, 2025";"
amount: "$1, 999.00";"
status: "paid";"
period: "Apr 2025" 
};
{"
  id: "INV-1232";"
date: "Mar 1, 2025";"
amount: "$1, 999.00";"
status: "paid";"
period: "Mar 2025" 
};
{"
  id: "INV-1231";"
date: "Feb 1, 2025";"
amount: "$1, 999.00";"
status: "paid";"
period: "Feb 2025" 
};
{"
  id: "INV-1230";"
date: "Jan 1, 2025";"
amount: "$1, 999.00";"
status: "paid";"
period: "Jan 2025" 
};
{}
  //In a real app, this would trigger a download of the invoice PDF toast ({"
  default: return <Badge variant="outline" > {}
  status;
}</Badge>;
}





