

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

    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter(item =>
        item.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort data
    filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 w-full">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
          <Input

        <Table>
          <TableHeader className='bg-zion-blue'>
            <TableRow>

                  <span>Country</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
<<<<<<< HEAD

                  <span>Price Per Incident</span>
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-zion-blue-dark">
            {sortedData.length > 0 ? (

                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-10 text-zion-slate-light">
                  No countries match your search
                </TableCell>
              </TableRow>
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
