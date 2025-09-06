<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useMemo } from 'react'
import {
  onsiteServicePricing
  CountryPricing
} from '@/data/onsiteServicePricing'
import { Input } from '@/components/ui/input'
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { Globe, Search, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CountryPricing
    direction: 'ascending' | 'descending'
  }>({
    key: 'country'
    direction: 'ascending'
  })
  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useMemo } from "react",
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",
import { Input } from "@/components/ui/input",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Globe, Search, ArrowUpDown } from 'lucide-react'
import { Button } from "@/components/ui/button",
export function ITServicePricingTable() {
  const [searchQuery, setSearchQuery] = useState(""),
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CountryPricing,
    direction: "ascending" | "descending"
  }>({
    key: "country",
    direction: "ascending"}),

  const sortedData = useMemo(() => {
    let filteredData = [...onsiteServicePricing],
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // Filter by search query
=======
    
>>>>>>>     // Filter by search query
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (searchQuery) {
      filteredData = filteredData.filter(item => 
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {

  return (
=======
    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }
      if (a[sortConfig && sortConfig.key] > b[sortConfig && sortConfig.key]) {;
        return sortConfig && sortConfig.direction === 'ascending' ? 1 : -1;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    
    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }
<<<<<<< HEAD
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
      return 0
    })
    return filteredData
  }, [onsiteServicePricing, searchQuery, sortConfig])
  const handleSort = (key: keyof CountryPricing,) => {
    setSortConfig({
      key
      direction:
        sortConfig.key === key && sortConfig.direction === 'ascending'
          ? 'descending'
          : 'ascending'
    })
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
      return 0;
    });

    return filteredData;
  }, [onsiteServicePricing, searchQuery, sortConfig]);

  const handleSort = (key: keyof CountryPricing,) => {;
    setSortConfig({;
      key,;
      direction:;
        sortConfig && sortConfig.key === key && sortConfig && sortConfig.direction === 'ascending';
          ? 'descending';
          : 'ascending',;
    });
  };

  return (

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
          <Input
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        <Table>
          <TableHeader className="bg-zion-blue">
            <TableRow>

                  <span>Country</span>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            placeholder='Search by country...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white'          />
        </div>
      </div>
<<<<<<< HEAD
      <div className='rounded-md border border-zion-blue-light overflow-hidden'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>         <Table>
          <TableHeader className="bg-zion-blue">
            <TableRow>
              <TableHead className='text-zion-cyan font-medium'>
                <Button
                  variant='ghost'
                  onClick={() => handleSort('country')}
                  className='hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light'                >
>>>>>>>                   <span>Country</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className='text-right text-zion-cyan font-medium'>
                <Button
                  variant='ghost'
                  onClick={() => handleSort('pricePerIncident')}
                  className='hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light'                >
>>>>>>>                   <span>Price Per Incident</span>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

      <div className="rounded-md border border-zion-blue-light overflow-hidden">

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            placeholder="Search by country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
          />
        </div>
      </div>

      <div className="rounded-md border border-zion-blue-light overflow-hidden">
        <Table>
          <TableHeader className="bg-zion-blue">
            <TableRow>
              <TableHead className='text-zion-cyan font-medium'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
              <TableHead className='text-right text-zion-cyan font-medium'>
                <Button
                  variant='ghost'
                  onClick={() => handleSort('pricePerIncident')}
<<<<<<< HEAD
                  className='hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light'                >;
                  <span>Price Per Incident</span>;
                  <ArrowUpDown className='h-4 w-4' />;
    <div className='bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 4 w - full'>;
      <div className='flex items - center mb - 6'>;
        <div className='relative flex - 1'>;
          <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light' />;
          <Input;
            placeholder='Search by country...';
            value={search_query}
            on_change={e => setSearchQuery (e.target.value)}
            className='pl - 10 bg - zion - blue border - zion - blue - light focus:border - zion - purple text - white'          />;
        </div>;
      </div>;
      <div className='rounded - md border border - zion - blue - light overflow - hidden'>;
        <Table>;
          <TableHeader className='bg - zion - blue'>;
            <TableRow>;
              <TableHead className='text - zion - cyan font - medium'>;
                <Button;
                  variant='ghost';
                  on_click={() => handle_sort ('country')}
                  className='hover:bg - zion - blue - dark p - 0 flex items - center space - x-1 text - zion - cyan hover:text - zion - cyan - light'                >;
                  <span > Country</span>;
                  <ArrowUpDown className='h - 4 w - 4' />;
                </Button>;
              </TableHead>;
              <TableHead className='text - right text - zion - cyan font - medium'>;
                <Button;
                  variant='ghost';
                  on_click={() => handle_sort ('pricePerIncident')}
                  className='hover:bg - zion - blue - dark p - 0 flex items - center justify - end space - x-1 w - full text - zion - cyan hover:text - zion - cyan - light'                >;
                  <span > Price Per Incident</span>;
                  <ArrowUpDown className='h - 4 w - 4' />;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <TableHead className="text-zion-cyan font-medium">
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light"
                >

<<<<<<< HEAD
>>>>>>>                   <span>Country</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  <span>Country</span>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>

<<<<<<< HEAD
                  <span>Price Per Incident</span>
                  <ArrowUpDown className="h-4 w-4" />
=======
              <TableHead className="text-right text-zion-cyan font-medium">
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort("pricePerIncident")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light"
                >

<<<<<<< HEAD
>>>>>>>                   <span>Price Per Incident</span>
>>>>>>>                   <ArrowUpDown className="h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  className='hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light'                >
              <TableHead className="text-right text-zion-cyan font-medium">
                <Button 
                  variant="ghost" 
                  onClick={() => handleSort("pricePerIncident")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light"
                >
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  <span>Price Per Incident</span>
                  <ArrowUpDown className="h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-zion-blue-dark">
            {sortedData.length > 0 ? (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              sortedData.map(item => (
                <TableRow
                  key={item.country}
                  className='border-b border-zion-blue-light hover:bg-zion-blue/50'
                >
                  <TableCell className='flex items-center space-x-2'>
                    <Globe className='h-4 w-4 text-zion-purple' />
                    <span className='text-white'>{item.country}</span>
                  </TableCell>
                  <TableCell className='text-right font-medium text-white'>
                    ${item.pricePerIncident.toFixed(2)}                  </TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 </TableRow>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </TableRow>
>>>>>>>               ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">
                  No countries match your search
                </TableCell>
              </TableRow>
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              sortedData.map((item) => (
                <TableRow key={item.country} className="border-b border-zion-blue-light hover:bg-zion-blue/50">
                  <TableCell className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-zion-purple" />
                    <span className="text-white">{item.country}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium text-white">${item.pricePerIncident.toFixed(2)}</TableCell>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">
                  No countries match your search
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Globe, Search, ArrowUpDown } from 'lucide-react';
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
          <Input;
            placeholder="Search by country...";
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white";
          />;
        </div>;
      </div>;
      <div className="rounded-md border border-zion-blue-light overflow-hidden">;
        <Table>;
          <TableHeader className="bg-zion-blue">;
            <TableRow>;
              <TableHead className="text-zion-cyan font-medium">;
                <Button;
                  variant="ghost";
                  onClick={() => handleSort("country")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light";
                >;
                  <span>Country</span>;
                  <ArrowUpDown className="h-4 w-4" />;
                </Button>;
              </TableHead>;
              <TableHead className="text-right text-zion-cyan font-medium">;
                <Button;
                  variant="ghost";
                  onClick={() => handleSort("pricePerIncident")}
                  className="hover:bg-zion-blue-dark p-0 flex items-center justify-end space-x-1 w-full text-zion-cyan hover:text-zion-cyan-light";
                >;
                  <span>Price Per Incident</span>;
                  <ArrowUpDown className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </Button>;
              </TableHead>;
            </TableRow>;
          </TableHeader>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <TableBody className="bg-zion-blue-dark">;
            {sortedData.length > 0 ? (;
              sortedData.map((item) => (;
                <TableRow key={item.country} className="border-b border-zion-blue-light hover:bg-zion-blue/50">;
                  <TableCell className="flex items-center space-x-2">;
                    <Globe className="h-4 w-4 text-zion-purple" />;
                    <span className="text-white">{item.country}</span>;
                  </TableCell>;
                  <TableCell className="text-right font-medium text-white">${item.pricePerIncident.toFixed(2)}</TableCell>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </TableRow>;
              ));
            ) : (;
              <TableRow>;
<<<<<<< HEAD

                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">;

=======
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  No countries match your search;
                </TableCell>;
              </TableRow>;
            )}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

          <TableBody className='bg - zion - blue - dark'>;
            {sorted_data.length > 0 ? (
              sorted_data.map (item => (
                <TableRow;
                  key={item.country}
                  className='border - b border - zion - blue - light hover:bg - zion - blue / 50';
                >;
                  <TableCell className='flex items - center space - x-2'>;
                    <Globe className='h - 4 w - 4 text - zion - purple' />;
                    <span className='text - white'>{item.country}</span>;
                  </TableCell>;
                  <TableCell className='text - right font - medium text - white'>;
                    ${item.pricePerIncident.to_fixed (2)}                  </TableCell>;
                </TableRow>))) : (
              <TableRow>;
                <TableCell;
                  col_span={2}
                  className='text - center py - 10 text - zion - slate - light';
                >;
                  No countries match your search;
                </TableCell>;
              </TableRow>)}
          </TableBody>;
        </Table>;
      </div>;
    </div>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
