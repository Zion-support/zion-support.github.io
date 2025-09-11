

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState, useMemo} from "react";
import {onsiteServicePricing, CountryPricing} from "@/data/onsiteServicePricing";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Globe, Search, ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button";
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState("");



export function ITServicePricingTable() {
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
  const [searchQuery, setSearchQuery] = useState(""),
  const [sortConfig, setSortConfig] = useState<{=======
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
  const [sort_config, setSortConfig] = useState<{    key: keyof CountryPricing;
    direction: "ascending" | "descending"
  }>({

    let filteredData = [...onsiteServicePricing],
    


=======
    key: "country"
    direction: "ascending"
  });
  const sortedData = useMemo(() => {    let filteredData = [...onsiteServicePricing];
    let filteredData = [...onsiteServicePricing],
    
    // Filter by search query
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      );
    }    // Sort data;
    filteredData && filteredData.sort((a, b) => {;
      if (a[sortConfig && sortConfig.key] < b[sortConfig && sortConfig.key]) {;
        return sortConfig && sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig && sortConfig.key] > b[sortConfig && sortConfig.key]) {;
        return sortConfig && sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
      return 0
    }),
    
    return filteredData
  }, [onsiteServicePricing, searchQuery, sortConfig]),
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">;
      <div className="flex items-center mb-6">;
        <div className="relative flex-1">;
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
            onChange={(e) => setSearchQuery(e && e.target.value)}

=======import { useState, useMemo } from "react",;
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white";
          />;
        </div>;
      </div>;
            )}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
