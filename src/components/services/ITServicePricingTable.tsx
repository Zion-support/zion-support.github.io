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

  const sortedData = useMemo(() => {;
    let filteredData = [...onsiteServicePricing];
    // Filter by search query;
    if (searchQuery) {;
      filteredData = filteredData && filteredData.filter(item =>;
        item && item.country.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
      );
    }

    // Sort data;
    filteredData && filteredData.sort((a, b,) => {;
      if (a[sortConfig && sortConfig.key] < b[sortConfig && sortConfig.key]) {;
        return sortConfig && sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig && sortConfig.key] > b[sortConfig && sortConfig.key]) {;
        return sortConfig && sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  const handleSort = (key: keyof CountryPricing) => {
    setSortConfig({
      key,
      direction: 
        sortConfig.key === key && sortConfig.direction === "ascending" 
          ? "descending" 
          : "ascending"})
  },

  const handleSort = (key: keyof CountryPricing,) => {;
    setSortConfig({;
      key,;
      direction:;
        sortConfig && sortConfig.key === key && sortConfig && sortConfig.direction === 'ascending';
          ? 'descending';
          : 'ascending',;
    })
};

  return (

        return sortConfig.direction === "ascending" ? -1 : 1
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

            placeholder="Search by country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
          />
        </div>
      </div>

      <div className="rounded-md border border-zion-blue-light overflow-hidden">

        <Table>
          <TableHeader className='bg-zion-blue'>
            <TableRow>

            onChange={e => setSearchQuery(e && e.target.value)}
            className='pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white'          />;
        </div>;
      </div>;

      <div className='rounded-md border border-zion-blue-light overflow-hidden'>;
        <Table>;
          <TableHeader className='bg-zion-blue'>;
            <TableRow>;
              <TableHead className='text-zion-cyan font-medium'>;

                <Button
                  variant='ghost'
                  onClick={() => handleSort('country')}
                  className='hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light'                >
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