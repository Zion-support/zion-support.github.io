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
    key: "country",
    direction: "ascending",
  });

  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing];
<<<<<<< HEAD

    key: "country",
    direction: "ascending",
  });

  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing],
    
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
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
=======
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
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
          <Input
            placeholder="Search by country..."
            value={searchQuery}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 w - full">;
      <div className="flex items - center mb - 6">;
        <div className="relative flex - 1">;
          <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;
=======
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 w-full">;
      <div className="flex items - center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate-light" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <Input;
            placeholder="Search by country...";
            value={search_query}
            on_change={(e) => setSearchQuery (e.target.value)}
<<<<<<< HEAD
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
=======
            className="pl - 10 bg - zion - blue border - zion - blue - light focus:border - zion - purple text-white";
          />;
        </div>;
      </div>;
      <div className="rounded - md border border - zion - blue - light overflow-hidden">;
        <Table>;
          <TableHeader className="bg - zion-blue">;
            <TableRow>;
              <TableHead className="text - zion - cyan font-medium">;
                <Button;
                  variant="ghost";
                  on_click={() => handle_sort ("country")}
                  className="hover:bg - zion - blue - dark p - 0 flex items - center space - x-1 text - zion - cyan hover:text - zion - cyan-light";
                >;
                  <span > Country</span>;
                  <ArrowUpDown className="h - 4 w-4" />;
                </Button>;
              </TableHead>;
              <TableHead className="text - right text - zion - cyan font-medium">;
                <Button;
                  variant="ghost";
                  on_click={() => handle_sort ("pricePerIncident")}
                  className="hover:bg - zion - blue - dark p - 0 flex items - center justify - end space - x-1 w - full text - zion - cyan hover:text - zion - cyan-light";
                >;
                  <span > Price Per Incident</span>;
                  <ArrowUpDown className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </Button>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
<<<<<<< HEAD
          <TableBody className="bg - zion - blue - dark">;
=======
          <TableBody className="bg - zion - blue-dark">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            {sorted_data.length > 0 ? (
              sorted_data.map ((item) => (
                <TableRow;
                  key={item.country}
<<<<<<< HEAD
                  className="border - b border - zion - blue - light hover:bg - zion - blue / 50";
                >;
                  <TableCell className="flex items - center space - x-2">;
                    <Globe className="h - 4 w - 4 text - zion - purple" />;
                    <span className="text - white">{item.country}</span>;
                  </TableCell>;
                  <TableCell className="text - right font - medium text - white">;
=======
                  className="border - b border - zion - blue - light hover:bg - zion-blue / 50";
                >;
                  <TableCell className="flex items - center space-x-2">;
                    <Globe className="h - 4 w - 4 text - zion-purple" />;
                    <span className="text-white">{item.country}</span>;
                  </TableCell>;
                  <TableCell className="text - right font - medium text-white">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    ${item.pricePerIncident.to_fixed (2)}
                  </TableCell>;
                </TableRow>))) : (
              <TableRow>;
                <TableCell;
                  col_span={2}
<<<<<<< HEAD
                  className="text - center py - 10 text - zion - slate - light";
=======
                  className="text - center py - 10 text - zion - slate-light";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                >;
                  No countries match your search;
                </TableCell>;
              </TableRow>)}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
}
