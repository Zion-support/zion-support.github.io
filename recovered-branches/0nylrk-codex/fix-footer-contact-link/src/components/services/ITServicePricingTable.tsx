<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useMemo} from "react";
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Globe, Search, ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
export function ITServicePricingTable() {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useMemo } from "react",
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Globe, Search, ArrowUpDown } from "lucide-react",
import { Button } from "@/components/ui/button",

export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
<<<<<<< HEAD

import { useState, useMemo } from "react";
import {}
=======
<<<<<<< HEAD

import { useState, useMemo } from "react";
import {}
=======
<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState($2);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CountryPricing,
    direction: "ascending" | "descending"
  }>({
    key: "country",
    direction: "ascending"}),

  const sortedData = $2;
    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    // Filter by search query
    if (searchQuery) {
=======
import {useState, useMemo} from "react";
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Globe, Search, ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState("");
import { useState, useMemo } from "react",
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Globe, Search, ArrowUpDown } from "lucide-react",
import { Button } from "@/components/ui/button",
export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState(""),
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CountryPricing;
direction: "ascending" | "descending"
  }>({

    key: "country"
    direction: "ascending"
  });
  const sortedData = useMemo(() => {
=======
=======
import { useState, useMemo  } from './react';
import {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onsiteServicePricing,
<<<<<<< HEAD
  CountryPricing} from "@/data/onsiteServicePricing";"
import { Input } from "@/components/ui/input";"
  }
=======
  CountryPricing,";
} from "@/data/onsiteServicePricing";"
import { Input } from "@/components/ui/input";
import {}
>>>>>>> origin/chore/fix-lint-and-merge
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,";
} from "@/components/ui/table";"
import { Globe, Search, ArrowUpDown } from "lucide-react";"
import { Button } from "@/components/ui/button";
export function ITServicePricingTable() { return null; }
  const [sortConfig, setSortConfig] = useState<{}
    key: keyof CountryPricing;"

<<<<<<< HEAD
    direction: "ascending" | "descending";

=======
<<<<<<< HEAD
    direction: "ascending" | "descending";

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase()),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    let filteredData = [...onsiteServicePricing],
    


    let filteredData = [...onsiteServicePricing];
    let filteredData = [...onsiteServicePricing],
    
    // Filter by search query
<<<<<<< HEAD
let filteredData = [...onsiteServicePricing];
// Filter by search query
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction = $2;
    return filteredData
  }, [onsiteServicePricing, searchQuery, sortConfig]),

  const handleSort = $2;
      direction: 
        sortConfig.key = $2;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
          <Input
            placeholder="Search by country..."
            value={searchQuery}
=======
    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    key: "country",
    direction: "ascending",
  });
;
  const sorted_data = useMemo (() => {
    let filtered_data = [...onsiteServicePricing];
;
    // Filter by search query;
    // Check condition
if ( {) {
  $2
}
      filtered_data = filtered_data.filter ((item) =>;
        item.country.toLowerCase ().includes (search_query.toLowerCase ()),
      );
    }
    // Sort data;
    filtered_data.sort ((a, b) => {
      // Check condition
if ( {) {
  $2
}
        return sort_config.direction === "ascending" ? -1 : 1;
      }
      // Check condition
if ( {) {
  $2
}
        return sort_config.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
import {useState, useMemo} from "react";
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Globe, Search, ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{;
    key: keyof CountryPricing,;
    direction: "ascending" | "descending";
  }>({;
    key: "country",;
    direction: "ascending"}),;
  const sortedData = useMemo(() => {;
    let filteredData = [...onsiteServicePricing];
    // Filter by search query;
    if (searchQuery) {;
      filteredData = filteredData && filteredData.filter(item => ;
        item && item.country.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      );
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Sort data;
    filteredData.sort((a, b) => {}
      if (a[sortConfig.key] < b[sortConfig.key]) {"
        return sortConfig.direction === "ascending" ? -1 : 1;
      }

      }
      return 0;
    });
<<<<<<< HEAD

    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]);
=======
    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]);
<<<<<<< HEAD
=======
  const handleSort = (key: keyof CountryPricing) => {;
    setSortConfig({;
      key,;
      direction: ;
        sortConfig && sortConfig.key === key && sortConfig && sortConfig.direction === "ascending" ;
          ? "descending" ;
          : "ascending"});
  };

      return 0
    }),
    
    return filteredData
  }, [onsiteServicePricing, searchQuery, sortConfig]),
<<<<<<< HEAD
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
      key
      direction:
        sortConfig.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending"
    });
  }
      return 0
    }),
    
    return filteredData
  }, [onsiteServicePricing, searchQuery, sortConfig]),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleSort = (key: keyof CountryPricing) => {
    setSortConfig({
      key,
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;"
      <div className="flex items-center mb-6">;"
        <div className="relative flex-1">;"
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;"
          <Input,
placeholder="Search by country...""
            value={searchQuery}
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing";"
import { Input } from "@/components/ui/input",;"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;"
import { Globe, Search, ArrowUpDown } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
=======
      direction:
        sortConfig.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    });
  };

  return (
<<<<<<< HEAD
=======
=======
direction: 
=======
      direction: 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        sortConfig.key === key && sortConfig.direction === "ascending" 
          ? "descending" 
          : "ascending"})
  },

<<<<<<< HEAD
  return (

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Globe, Search, ArrowUpDown } from "lucide-react",;
<<<<<<< HEAD

import { Button } from "@/components/ui/button",;
>>>>>>> origin/chore/fix-lint-and-merge
;
export function ITServicePricingTable() { return null; }
  }>({;"
    key:"country",;"
=======
import { Button } from "@/components/ui/button",;
;
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState(""),;
  const [sortConfig, setSortConfig] = useState<{;
    key:keyof CountryPricing,;
    direction:"ascending" | "descending";
  }>({;
    key:"country",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      if (a[sortConfig.key] < b[sortConfig.key]) {;"
        return sortConfig.direction === "ascending" ? -1 :1,;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {;"
=======
      if (a[sortConfig.key] < b[sortConfig.key]) {;
        return sortConfig.direction === "ascending" ? -1 :1,;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      direction:;"
        sortConfig.key === key && sortConfig.direction === "ascending" ;"
          ? "descending" ;"
=======
      direction:;
        sortConfig.key === key && sortConfig.direction === "ascending" ;
          ? "descending" ;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          :"ascending"}),;
  },;
;
  return (;
<<<<<<< HEAD

          <Input

            placeholder="Search by country..."
            value={searchQuery}
"
      <div className="rounded-md border border-zion-blue-light overflow-hidden">
        <Table>"
          <TableHeader className="bg-zion-blue">
            <TableRow>"
              <TableHead className="text-zion-cyan font-medium">
                <Button"
                  variant="ghost""
                  onClick={() => handleSort("country")}"
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Country</span>"
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>"
              <TableHead className="text-right text-zion-cyan font-medium">
                <Button"
                  variant="ghost""
                  onClick={() => handleSort("pricePerIncident")}"
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Price Per Incident</span>"
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
          <Input
            placeholder="Search by country..."
            value={searchQuery}
>>>>>>> merged-prs-20250907-203621
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
          />
        </div>
      </div>
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
<<<<<<< HEAD
          </TableHeader>"
          <TableBody className="bg-zion-blue-dark">
            {sortedData.length > 0 ? (
              sortedData.map((item) => (
                <TableRow;
                  key={item.country}"
                  className="border-b border-zion-blue-light hover:bg-zion-blue/50"
                >"
                  <TableCell className="flex items-center space-x-2">"
                    <Globe className="h-4 w-4 text-zion-purple" />"
                    <span className="text-white">{item.country}</span>
                  </TableCell>"
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <TableCell className="text-right font-medium text-white">
                    ${item.pricePerIncident.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
<<<<<<< HEAD
                <TableCell;
                  colSpan={2}"
=======
                <TableCell
                  colSpan={2}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className="text-center py-10 text-zion-slate-light"
                >
                  No countries match your search;
                </TableCell>
              </TableRow>
<<<<<<< HEAD

=======
=======
          <Input
            placeholder="Search by country..."
            value={searchQuery}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            onChange={(e) => setSearchQuery(e && e.target.value)}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Globe, Search, ArrowUpDown } from "lucide-react",;

import { Button } from "@/components/ui/button",;
>>>>>>> origin/chore/fix-lint-and-merge
;
export function ITServicePricingTable() { return null; }
  }>({;"
    key:"country",;"
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
      if (a[sortConfig.key] < b[sortConfig.key]) {;"
        return sortConfig.direction === "ascending" ? -1 :1,;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {;"
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
      direction:;"
        sortConfig.key === key && sortConfig.direction === "ascending" ;"
          ? "descending" ;"
          :"ascending"}),;
  },;
;
  return (;
<<<<<<< HEAD

          <Input

            placeholder="Search by country..."
            value={searchQuery}
"
      <div className="rounded-md border border-zion-blue-light overflow-hidden">
        <Table>"
          <TableHeader className="bg-zion-blue">
            <TableRow>"
              <TableHead className="text-zion-cyan font-medium">
                <Button"
                  variant="ghost""
                  onClick={() => handleSort("country")}"
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Country</span>"
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>"
              <TableHead className="text-right text-zion-cyan font-medium">
                <Button"
                  variant="ghost""
                  onClick={() => handleSort("pricePerIncident")}"
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light"
                >
                  <span>Price Per Incident</span>"
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>"
          <TableBody className="bg-zion-blue-dark">
            {sortedData.length > 0 ? (
              sortedData.map((item) => (
                <TableRow;
                  key={item.country}"
                  className="border-b border-zion-blue-light hover:bg-zion-blue/50"
                >"
                  <TableCell className="flex items-center space-x-2">"
                    <Globe className="h-4 w-4 text-zion-purple" />"
                    <span className="text-white">{item.country}</span>
                  </TableCell>"
                  <TableCell className="text-right font-medium text-white">
                    ${item.pricePerIncident.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell;
                  colSpan={2}"
                  className="text-center py-10 text-zion-slate-light"
                >
                  No countries match your search;
                </TableCell>
              </TableRow>

=======
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
            onChange={(e) => setSearchQuery(e && e.target.value)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Input;
            placeholder="Search by country...";
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white";
          />;
        </div>;
      </div>;
<<<<<<< HEAD

=======
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="rounded-md border border-zion-blue-light overflow-hidden">;
        <Table>;
          <TableHeader className="bg-zion-blue">;
            <TableRow>;
              <TableHead className="text-zion-cyan font-medium">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                <Button ;
                  variant="ghost" ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light";
                >;
                  <span>Country</span>;
                  <ArrowUpDown className="h-4 w-4" />;
                </Button>;
              </TableHead>;
              <TableHead className="text-right text-zion-cyan font-medium">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                <Button ;
                  variant="ghost" ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  onClick={() => handleSort("pricePerIncident")}

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

=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <TableRow>;
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">;
                  No countries match your search;
                </TableCell>;
              </TableRow>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            )}
          </TableBody>;
        </Table>;
      </div>;
    </div>;

            )}
<<<<<<< HEAD
=======
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
            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </TableBody>
        </Table>
      </div>
    </div>
<<<<<<< HEAD
  );
}

=======
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    ${item.pricePerIncident.to_fixed (2)}
                  </TableCell>;
                </TableRow>))) : (
              <TableRow>;
                <TableCell;

                >;
                  No countries match your search;
                </TableCell>;
              </TableRow>)}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
