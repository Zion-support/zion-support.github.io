import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from 'lucide-react';

interface FraudFiltersProps {
<<<<<<< HEAD
  onFilterChange: (filters: any) => void;
=======
  onFiltersChange: (filters: any) => void;
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
  resetFilters: () => void;
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({
<<<<<<< HEAD
  onFilterChange,
=======
  onFiltersChange,
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
  resetFilters
}) => {
  const [filters, setFilters] = useState({
    search: '',
<<<<<<< HEAD
    riskLevel: '',
    status: '',
=======
    status: '',
    riskLevel: '',
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
    dateRange: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
<<<<<<< HEAD
    onFilterChange(newFilters);
=======
    onFiltersChange(newFilters);
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
  };

  const handleReset = () => {
    setFilters({
      search: '',
<<<<<<< HEAD
      riskLevel: '',
      status: '',
=======
      status: '',
      riskLevel: '',
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
      dateRange: ''
    });
    resetFilters();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
<<<<<<< HEAD
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Fraud Detection Filters</h3>
=======
      <div className="flex items-center gap-4 mb-4">
        <Filter className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold">Filters</h3>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search transactions..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
<<<<<<< HEAD

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Risk Level
          </label>
          <Select value={filters.riskLevel} onValueChange={(value) => handleFilterChange('riskLevel', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All risk levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
              <SelectItem value="critical">Critical Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>

=======
        
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
<<<<<<< HEAD
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
=======
              <SelectItem value="">All statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
<<<<<<< HEAD

=======
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Risk Level
          </label>
          <Select value={filters.riskLevel} onValueChange={(value) => handleFilterChange('riskLevel', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All risk levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All risk levels</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange('dateRange', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All dates" />
            </SelectTrigger>
            <SelectContent>
<<<<<<< HEAD
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
=======
              <SelectItem value="">All dates</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This week</SelectItem>
              <SelectItem value="month">This month</SelectItem>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
            </SelectContent>
          </Select>
        </div>
      </div>
<<<<<<< HEAD

      <div className="flex justify-end space-x-2 mt-4">
        <Button  onClick={handleReset}>
          Reset Filters
        </Button>
        <Button onClick={() => onFilterChange(filters)}>
          Apply Filters
        </Button>
=======
      
      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={handleReset}>
          Reset Filters
        </Button>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
      </div>
    </div>
  );
};