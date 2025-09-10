

import { useState, useMemo } from "react",;
import { onsiteServicePricing, CountryPricing } from "@/data/onsiteServicePricing",;
import { Input } from "@/components/ui/input",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
            placeholder='Search by country...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white'          />

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
              </TableHead>
              <TableHead className='text-right text-zion-cyan font-medium'>
                <Button
                  variant='ghost'
                  onClick={() => handleSort('pricePerIncident')}

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
:src/components/services/ITServicePricingTable.tsx
:src/components/services/ITServicePricingTable.tsx
