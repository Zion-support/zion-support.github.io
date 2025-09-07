import { useState, useMemo } from "react";"
import {
  // TODO: Implement
}
  onsiteServicePricing,
  CountryPricing,"
} from "@/data/onsiteServicePricing";""
import { Input } from "@/components/ui/input";"
  // TODO: Implement
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,"
} from "@/components/ui/table";""
import { Globe, Search, ArrowUpDown } from "lucide-react";""
import { Button } from "@/components/ui/button";"
export function ITServicePricingTable() {"
  const [searchQuery, setSearchQuery] = useState("");"
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CountryPricing;,"
  direction: "ascending" | "descending";"
  }>({"
    key: "country",""
    direction: "ascending",")
  });

  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing];
"
    direction: "ascending","

    let filteredData = [...onsiteServicePricing],
    
    // Filter by search query;
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    // Sort data;
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {"
        return sortConfig.direction === "ascending" ? -1 : 1;"
      if (a[sortConfig.key] > b[sortConfig.key]) {"
        return sortConfig.direction === "ascending" ? 1 : -1;"
      return 0;

    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]);

  const handleSort = (key: keyof CountryPricing) => {
    setSortConfig({
      key,
      direction:"
        sortConfig.key === key && sortConfig.direction === "ascending"""
          ? "descending"""
          : "ascending",")
  };

  return ("
import { useState, useMemo } from "react",;""
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;""
import { Input } from "@/components/ui/input",;""
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;""
import { Globe, Search, ArrowUpDown } from "lucide-react",;""
import { Button } from "@/components/ui/button",;"
;)
export function ITServicePricingTable() {;"
  const [searchQuery, setSearchQuery] = useState(""),;"
  const [sortConfig, setSortConfig] = useState<{;
    key:keyof CountryPricing,;"
    direction:"ascending" | "descending";"
  }>({;"
    key:"country",;")"
    direction:"ascending"}),;"
;
  const sortedData = useMemo(() => {;
    let filteredData = [...onsiteServicePricing],;
    // Filter by search query;
    if (searchQuery) {;
      filteredData = filteredData.filter(item => ;)
        item.country.toLowerCase().includes(searchQuery.toLowerCase());
      ),;
    // Sort data;
    filteredData.sort((a, b) => {;
      if (a[sortConfig.key] < b[sortConfig.key]) {;"
        return sortConfig.direction === "ascending" ? -1 :1,;"
      if (a[sortConfig.key] > b[sortConfig.key]) {;"
        return sortConfig.direction === "ascending" ? 1 :-1,;"
      return 0,;
    }),;
    return filteredData,;
  }, [onsiteServicePricing, searchQuery, sortConfig]),;
  const handleSort = (key:keyof CountryPricing) => {;
    setSortConfig({;
      key,;
      direction:;"
        sortConfig.key === key && sortConfig.direction === "ascending" ;""
          ? "descending" ;")"
          :"ascending"}),;"
  },;
  return (;"
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;"
</div>"
      <div className="flex items-center mb-6">;"
        <div className="relative flex-1">;"
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;"

          <Input;"
            placeholder="Search by country...""
            value={searchQuery}
      <div className="rounded-md border border-zion-blue-light overflow-hidden">"

        <Table>
          <TableHeader className="bg-zion-blue">"

            <TableRow>
              <TableHead className="text-zion-cyan font-medium">"

                <Button;"
                  variant="ghost"")"
                  onClick={() => handleSort("country")}"

                  <span>Country</span>"
                  <ArrowUpDown className="h-4 w-4" />"

                
              <TableHead className="text-right text-zion-cyan font-medium">"

                  variant="ghost"""
                  onClick={() => handleSort("pricePerIncident")}"

                  <span>Price Per Incident</span>"

                
              
            
          <TableBody className="bg-zion-blue-dark">"

                <TableRow;
                  key={item.country}"
                  className="border-b border-zion-blue-light hover:bg-zion-blue/50""
                >
                  <TableCell className="flex items-center space-x-2">"
                    <Globe className="h-4 w-4 text-zion-purple" />"
                    <span className="text-white">{item.country}</span>"
                  <TableCell className="text-right font-medium text-white">"

                  
                

                <TableCell;
                  colSpan={2}"
                  className="text-center py-10 text-zion-slate-light""

                
              
          
        
      </div>
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 w - full">;"
      <div className="flex items - center mb - 6">;"
        <div className="relative flex - 1">;"
          <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;"

            placeholder="Search by country...";"
            value={search_query}
            on_change={(e) => setSearchQuery (e.target.value)}

        </div>;
      </div>;"
      <div className="rounded - md border border - zion - blue - light overflow - hidden">;"
        <Table>;
          <TableHeader className="bg - zion - blue">;"

            <TableRow>;
              <TableHead className="text - zion - cyan font - medium">;"

                  variant="ghost";""
                  on_click={() => handle_sort ("country")}"

                  <span > Country</span>;"
                  <ArrowUpDown className="h - 4 w - 4" />;"

              ;"
              <TableHead className="text - right text - zion - cyan font - medium">;"

                  on_click={() => handle_sort ("pricePerIncident")}"

                  <span > Price Per Incident</span>;"

          <TableBody className="bg - zion - blue - dark">;"

                  className="border - b border - zion - blue - light hover:bg - zion - blue / 50";"
                >;
                  <TableCell className="flex items - center space - x-2">;"
                    <Globe className="h - 4 w - 4 text - zion - purple" />;"
                    <span className="text - white">{item.country}</span>;"
                  <TableCell className="text - right font - medium text - white">;"

                ))) : (

                  col_span={2}"
                  className="text - center py - 10 text - zion - slate - light";"

              )}
    </div>);"