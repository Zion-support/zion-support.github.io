
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
import {useState, useMemo} from "react";
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Globe, Search, ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState("");


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
import { useState, useMemo  } from './react';
import {
  onsiteServicePricing,
  CountryPricing,
} from '@/data / onsiteServicePricing';
import { Input  } from '@/components / ui / input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import { Globe, Search, ArrowUpDown  } from './lucide-react';
import { Button  } from '@/components / ui / button';
export /**
 * ITServicePricingTable - Function description
 */
function ITServicePricingTable() {
  const [search_query, setSearchQuery] = useState ("");
  const [sort_config, setSortConfig] = useState<{
    key: keyof CountryPricing;
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
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


  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
          <Input
            placeholder="Search by country..."
            value={searchQuery}

            onChange={(e) => setSearchQuery(e && e.target.value)}

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
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light";
                >;
                  <span>Price Per Incident</span>;
                  <ArrowUpDown className="h-4 w-4" />;
                </Button>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody className="bg-zion-blue-dark">;
                </TableRow>;
              ));
            ) :(;
              <TableRow>;
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">;
                  No countries match your search;
                </TableCell>;
              </TableRow>;



            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
