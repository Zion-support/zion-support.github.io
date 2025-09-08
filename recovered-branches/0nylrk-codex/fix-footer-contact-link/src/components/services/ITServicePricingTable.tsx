import { useState, useMemo } from "react";
import {
  onsiteServicePricing,
  CountryPricing} from "@/data/onsiteServicePricing";"
import { Input } from "@/components/ui/input";"
  }
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
    key: "country",
    direction: "ascending",
  });

  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing];
    // Filter by search query
let filteredData = [...onsiteServicePricing];
// Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      // Check condition
if ( {) {
  $2
}
        return sort_config.direction === "ascending" ? 1 : -1;
      }
  const handleSort = (key: keyof CountryPricing) => {
    setSortConfig({
      key,

  return (    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Globe, Search, ArrowUpDown } from "lucide-react",;

import { Button } from "@/components/ui/button",;

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
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}


