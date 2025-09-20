import React from 'react';
<<<<<<< HEAD
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, RefreshCw } from 'lucide-react';
=======
import { Calendar, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238

type QuoteStatus = 'pending' | 'approved' | 'rejected' | 'expired';
type DateRange = {
  from: Date;
  to: Date;
};

interface QuotesFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onReset: () => void;
}

export const QuotesFilter: React.FC<QuotesFilterProps> = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  archiveFilter,
  setArchiveFilter,
  dateRange,
  setDateRange,
  onReset
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
<<<<<<< HEAD
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filter Quotes</h3>
      </div>
      
=======
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <Input
            placeholder="Search quotes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}>
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
<<<<<<< HEAD
              <SelectItem value="all">All Statuses</SelectItem>
=======
              <SelectItem value="all">All statuses</SelectItem>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Archive Status
          </label>
          <Select value={archiveFilter} onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}>
            <SelectTrigger>
              <SelectValue placeholder="All quotes" />
            </SelectTrigger>
            <SelectContent>
<<<<<<< HEAD
              <SelectItem value="all">All Quotes</SelectItem>
=======
              <SelectItem value="all">All quotes</SelectItem>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
<<<<<<< HEAD

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <Input
            type="date"
            value={dateRange?.from ? dateRange.from.toISOString().split('T')[0] : ''}
            onChange={(e) => {
              const from = e.target.value ? new Date(e.target.value) : undefined;
              setDateRange(from ? { from, to: dateRange?.to || new Date() } : undefined);
            }}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <Button  onClick={onReset}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset Filters
        </Button>
      </div>
=======
        
        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={onReset}
            className="w-full"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset Filters
          </Button>
        </div>
      </div>
>>>>>>> d77626155c92c5bbcaae01bf3c76fc08ebcf7238
    </div>
  );
};