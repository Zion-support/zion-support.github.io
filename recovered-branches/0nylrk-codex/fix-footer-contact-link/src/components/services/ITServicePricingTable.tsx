<<<<<<< HEAD
<<<<<<< HEAD

import { useState, useMemo } from "react";
import {
  onsiteServicePricing
  CountryPricing
} from "@/data/onsiteServicePricing";
import { Input } from "@/components/ui/input";
import {
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from "@/components/ui/table";

import { Globe, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useMemo} from "react";
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Globe, Search, ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
export function ITServicePricingTable() {;
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("");
=======
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("");

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useMemo } from "react",
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Globe, Search, ArrowUpDown } from "lucide-react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
<<<<<<< HEAD
    key: keyof CountryPricing;
    direction: "ascending" | "descending"
  }>({
=======
=======
import { useState, useMemo  } from './react';
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { useState, useMemo } from "react";
import {
  onsiteServicePricing,
  CountryPricing,
} from "@/data/onsiteServicePricing";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Globe, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CountryPricing;
    direction: "ascending" | "descending";
  }>({
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    let filteredData = [...onsiteServicePricing],
    
=======
    key: "country",
    direction: "ascending",
  });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing];

=======
    key: "country",
    direction: "ascending",
  });

  const sortedData = useMemo(() => {
<<<<<<< HEAD
    let filteredData = [...onsiteServicePricing],
    
=======
    let filteredData = [...onsiteServicePricing];

>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]);

  const handleSort = (key: keyof CountryPricing) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    });
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
          <Input
            placeholder="Search by country..."
            value={searchQuery}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Globe, Search, ArrowUpDown } from "lucide-react",;
import { Button } from "@/components/ui/button",;
;
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [sortConfig, setSortConfig] = useState<{;
    key:keyof CountryPricing,;
    direction:"ascending" | "descending";
  }>({;
    key:"country",;
    direction:"ascending"}),;
;
  const sortedData = useMemo(() => {;
    let filteredData = [...onsiteServicePricing],;
    ;
    // Filter by search query;
    if (searchQuery) {;
      filteredData = filteredData.filter(item => ;
        item.country.toLowerCase().includes(searchQuery.toLowerCase());
      ),;
    }
    ;
    // Sort data;
    filteredData.sort((a, b) => {;
      if (a[sortConfig.key] < b[sortConfig.key]) {;
        return sortConfig.direction === "ascending" ? -1 :1,;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {;
        return sortConfig.direction === "ascending" ? 1 :-1,;
      }
      return 0,;
    }),;
    ;
    return filteredData,;
  }, [onsiteServicePricing, searchQuery, sortConfig]),;
;
  const handleSort = (key:keyof CountryPricing) => {;
    setSortConfig({;
      key,;
      direction:;
        sortConfig.key === key && sortConfig.direction === "ascending" ;
          ? "descending" ;
          :"ascending"}),;
  },;
;
  return (;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
<<<<<<< HEAD
          <Input
            placeholder="Search by country..."
            value={searchQuery}

      <div className="rounded-md border border-zion-blue-light overflow-hidden">
        <Table>
          <TableHeader className="bg-zion-blue">
            <TableRow>
              <TableHead className="text-zion-cyan font-medium">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Country</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right text-zion-cyan font-medium">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("pricePerIncident")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Price Per Incident</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-zion-blue-dark">
            {sortedData.length > 0 ? (
              sortedData.map((item) => (
                <TableRow
                  key={item.country}
                  className="border-b border-zion-blue-light hover:bg-zion-blue/50"
                >
                  <TableCell className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-zion-purple" />
                    <span className="text-white">{item.country}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium text-white">
                    ${item.pricePerIncident.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={2}
                  className="text-center py-10 text-zion-slate-light"
                >
                  No countries match your search
                </TableCell>
              </TableRow>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Globe, Search, ArrowUpDown } from "lucide-react",;
import { Button } from "@/components/ui/button",;
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [sortConfig, setSortConfig] = useState<{;
    key: keyof CountryPricing,;
    direction: "ascending" | "descending";
  }>({;
    key: "country",;
    direction: "ascending"}),;
  const sortedData = useMemo(() => {;
    let filteredData = [...onsiteServicePricing],;
    // Filter by search query;
    if (searchQuery) {;
      filteredData = filteredData.filter(item =>;
        item.country.toLowerCase().includes(searchQuery.toLowerCase());
      );
    }
;
    // Sort data;
    filteredData.sort((a, b) => {;
      if (a[sortConfig.key] < b[sortConfig.key]) {;
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {;
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }),;
    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]),;
  const handleSort = (key: keyof CountryPricing) => {;
    setSortConfig({;
      key;
      direction:;
        sortConfig.key === key && sortConfig.direction === "ascending";
          ? "descending";
          : "ascending"});
  };
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
=======
            onChange={(e) => setSearchQuery(e && e.target.value)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <Input;
            placeholder="Search by country...";
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white";
          />;
        </div>;
      </div>;
<<<<<<< HEAD

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="rounded-md border border-zion-blue-light overflow-hidden">;
        <Table>;
          <TableHeader className="bg-zion-blue">;
            <TableRow>;
              <TableHead className="text-zion-cyan font-medium">;
<<<<<<< HEAD
                <Button
                  variant="ghost" 
=======
                <Button ;
                  variant="ghost" ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light";
                >;
                  <span>Country</span>;
                  <ArrowUpDown className="h-4 w-4" />;
                </Button>;
              </TableHead>;
              <TableHead className="text-right text-zion-cyan font-medium">;
<<<<<<< HEAD
                <Button
                  variant="ghost" 
=======
                <Button ;
                  variant="ghost" ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  onClick={() => handleSort("pricePerIncident")}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light";
                >;
                  <span>Price Per Incident</span>;
                  <ArrowUpDown className="h-4 w-4" />;
                </Button>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody className="bg-zion-blue-dark">;
<<<<<<< HEAD
<<<<<<< HEAD
            {sortedData && sortedData.length > 0 ? (;
              sortedData && sortedData.map((item) => (;
                <TableRow key={item && item.country} className="border-b border-zion-blue-light hover:bg-zion-blue/50">;
                  <TableCell className="flex items-center space-x-2">;
                    <Globe className="h-4 w-4 text-zion-purple" />;
                    <span className="text-white">{item && item.country}</span>;
                  </TableCell>;
                  <TableCell className="text-right font-medium text-white">${item && item.pricePerIncident.toFixed(2)}</TableCell>;
                </TableRow>;
              ));
            ) : (;
=======
            {sortedData.length > 0 ? (;
              sortedData.map((item) => (;
                <TableRow key={item.country} className="border-b border-zion-blue-light hover:bg-zion-blue/50">;
                  <TableCell className="flex items-center space-x-2">;
                    <Globe className="h-4 w-4 text-zion-purple" />;
                    <span className="text-white">{item.country}</span>;
                  </TableCell>;
                  <TableCell className="text-right font-medium text-white">${item.pricePerIncident.toFixed(2)}</TableCell>;
                </TableRow>;
              ));
            ) :(;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                </TableRow>;
              ));
            ) :(;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <TableRow>;
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">;
                  No countries match your search;
                </TableCell>;
              </TableRow>;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            )}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
  ),;}
 const sortedData = useMemo ( () => {
  let filteredData = [...onsiteServicePricing];
filteredData = filteredData.filter (item => item.country.toLowerCase () .includes (searchQuery.toLowerCase () ) 
}return 0;
});
}, [onsiteServicePricing, searchQuery, sortConfig]);
sortConfig.key === key && sortConfig.direction === "ascending" ? "descending" : "ascending" 
}) 
};
/> <Input className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white" /> </div> </div> <div className="rounded-md border border-zion-blue-light overflow-hidden"> <Table> <TableHeader className="bg-zion-blue"> <TableRow> <TableHead className="text-zion-cyan font-medium" > <Button className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light" > <span>Country</span> <ArrowUpDown className="h-4 w-4" /> </Button> </TableHead> <TableHead className="text-right text-zion-cyan font-medium" > <Button className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light" > <span>Price Per Incident</span> <ArrowUpDown className="h-4 w-4" /> </Button> </TableHead> </TableRow> </TableHeader> <TableBody className="bg-zion-blue-dark"> {
  sortedData.length > 0 ? (sortedData.map ( (item) => (<TableRow key= {
  item.country 
}className="border-b border-zion-blue-light hover:bg-zion-blue/50"> <TableCell className="flex items-center space-x-2"> <Globe className="h-4 w-4 text-zion-purple" /> <span className="text-white"> {
  item.country 
}</span> </TableCell> <TableCell className="text-right font-medium text-white">$ {
  item.pricePerIncident.toFixed (2) 
}</TableCell> </TableRow>) ) ) : (<TableRow> <TableCell colSpan= {
  2 
}className="text-center py-10 text-zion-slate-light"> No countries match your search </TableCell> </TableRow>) 
}</TableBody> </Table> </div> </div>) 
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
    return filtered_data;
  }, [onsiteServicePricing, search_query, sort_config]);
;
  const handle_sort = (key: keyof CountryPricing) =>: any {
    setSortConfig ({
      key,
      direction:;
        sort_config.key === key && sort_config.direction === "ascending";
          ? "descending";
          : "ascending",
    });
  }
;
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 w - full">;
      <div className="flex items - center mb - 6">;
        <div className="relative flex - 1">;
          <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;
          <Input;
            placeholder="Search by country...";
            value={search_query}
            on_change={(e) => setSearchQuery (e.target.value)}
            className="pl - 10 bg - zion - blue border - zion - blue - light focus:border - zion - purple text - white";
          />;
        </div>;
      </div>;
      <div className="rounded - md border border - zion - blue - light overflow - hidden">;
        <Table>;
          <TableHeader className="bg - zion - blue">;
            <TableRow>;
              <TableHead className="text - zion - cyan font - medium">;
                <Button;
                  variant="ghost";
                  on_click={() => handle_sort ("country")}
                  className="hover:bg - zion - blue - dark p - 0 flex items - center space - x-1 text - zion - cyan hover:text - zion - cyan - light";
                >;
                  <span > Country</span>;
                  <ArrowUpDown className="h - 4 w - 4" />;
                </Button>;
              </TableHead>;
              <TableHead className="text - right text - zion - cyan font - medium">;
                <Button;
                  variant="ghost";
                  on_click={() => handle_sort ("pricePerIncident")}
                  className="hover:bg - zion - blue - dark p - 0 flex items - center justify - end space - x-1 w - full text - zion - cyan hover:text - zion - cyan - light";
                >;
                  <span > Price Per Incident</span>;
                  <ArrowUpDown className="h - 4 w - 4" />;
                </Button>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody className="bg - zion - blue - dark">;
            {sorted_data.length > 0 ? (
              sorted_data.map ((item) => (
                <TableRow;
                  key={item.country}
                  className="border - b border - zion - blue - light hover:bg - zion - blue / 50";
                >;
                  <TableCell className="flex items - center space - x-2">;
                    <Globe className="h - 4 w - 4 text - zion - purple" />;
                    <span className="text - white">{item.country}</span>;
                  </TableCell>;
                  <TableCell className="text - right font - medium text - white">;
                    ${item.pricePerIncident.to_fixed (2)}
                  </TableCell>;
                </TableRow>))) : (
              <TableRow>;
                <TableCell;
                  col_span={2}
                  className="text - center py - 10 text - zion - slate - light";
                >;
                  No countries match your search;
                </TableCell>;
              </TableRow>)}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
