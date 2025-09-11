

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Download, FileText, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {toast} from "@/hooks/use-toast";
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  TableRow} from "@/components/ui/table",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Download, FileText, Search } from "lucide-react",
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Input } from "@/components/ui/input",
import { toast } from "@/hooks/use-toast",


  const invoices = [
    {
=======
      id: "INV-1234",;
      date: "May 1, 2025";
      amount: "$1,999.00";

      id: "INV-1234"
      date: "May 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "May 2025"}
    {
      id: "INV-1233"
      date: "Apr 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Apr 2025"}
    {
      id: "INV-1232"
      date: "Mar 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Mar 2025"}
    {
      id: "INV-1231"
      date: "Feb 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Feb 2025"}
    {
      id: "INV-1230"
      date: "Jan 1, 2025";
      amount: "$1,999.00";
      status: "paid"
      period: "Jan 2025"}
    {
      id: "INV-1229"
      date: "Dec 1, 2024";
      amount: "$1,999.00";
      status: "paid"
      period: "Dec 2024"}]
      id: "INV-1234",;
      date: "May 1, 2025";
      amount: "$1,999.00";
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
=======
==============
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",


  const getBadgeForStatus = (status: string) => {
    switch (status) {
          <Input
            type="search"
            placeholder="Search invoices..."
            className="w-[200px] md:w-[300px] pl-9"
          />;
        </div>;
      </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
