import { useState, useMemo } from 'react';
import {;
  onsiteServicePricing,;
  CountryPricing,;
} from '@/data/onsiteServicePricing';
import { Input } from '@/components/ui/input';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from '@/components/ui/table';
import { Globe, Search, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function ITServicePricingTable() {;
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{;
    key: keyof CountryPricing;
    direction: 'ascending' | 'descending';
  }>({;
    key: 'country',;
    direction: 'ascending',;
  });
    }
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1
      }
      return 0
    }),
    
    return filteredData
  }, [onsiteServicePricing, searchQuery, sortConfig]),

  const handleSort = (key: keyof CountryPricing) => {
    setSortConfig({
      key,
      direction: 
        sortConfig.key === key && sortConfig.direction === "ascending" 
          ? "descending" 
          : "ascending"})
  },

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
          <Input
              <TableHead className="text-zion-cyan font-medium">
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"
                >
