
import React from "react",
import { Input } from "@/components/ui/input",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface FraudFiltersProps {
  searchQuery: string,
  setSearchQuery: (value: string) => void,
  statusFilter: string | null,
  setStatusFilter: (value: string | null) => void,
  severityFilter: string | null,
  setSeverityFilter: (value: string | null) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null) => void,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  searchQuery
  setSearchQuery
  statusFilter
  setStatusFilter
  severityFilter
  setSeverityFilter
  contentTypeFilter
  setContentTypeFilter
  resetFilters}) => {  return (
    <div className="flex flex-col md: flex-row gap-4 mb-6">
=======
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  severityFilter,
  setSeverityFilter,
  contentTypeFilter,
  setContentTypeFilter,
  resetFilters}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by user or content..."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          value = {searchQuery,}



      
=======
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="reviewed">Reviewed</SelectItem>
          <SelectItem value="ignored">Ignored</SelectItem>
          <SelectItem value="actioned">Actioned</SelectItem>
        </SelectContent>
      </Select>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



      
=======
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Severities</SelectItem>
          <SelectItem value="safe">Safe</SelectItem>
          <SelectItem value="suspicious">Suspicious</SelectItem>
          <SelectItem value="dangerous">Dangerous</SelectItem>
        </SelectContent>
      </Select>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



      
=======
=======
      
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Types</SelectItem>
          <SelectItem value="signup">Signups</SelectItem>
          <SelectItem value="job">Jobs</SelectItem>
          <SelectItem value="message">Messages</SelectItem>
          <SelectItem value="quote">Quotes</SelectItem>
          <SelectItem value="review">Reviews</SelectItem>
        </SelectContent>
      </Select>
<<<<<<< HEAD
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
      </Button>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
'"}
}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

          onChange = {(e,) => setSearchQuery(e && e.target.value),}


=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
},
import React from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Search, Filter } from 'lucide-react';
interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null) => void,;
  resetFilters: () => void;
<<<<<<< HEAD
}
'"},
;
};
export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  severityFilter,;
  setSeverityFilter,;
  contentTypeFilter,;
  setContentTypeFilter;
  resetFilters}) => {;
  return (;
    <div className="flex flex-col md:flex-row gap-4 mb-6">;
      <div className="relative flex-1">;
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
        <Input;
          placeholder="Search by user or content...";
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10";
        />;
      </div>;

      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Status" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Statuses</SelectItem>;
          <SelectItem value="pending">Pending</SelectItem>;
          <SelectItem value="reviewed">Reviewed</SelectItem>;
          <SelectItem value="ignored">Ignored</SelectItem>;
          <SelectItem value="actioned">Actioned</SelectItem>;
        </SelectContent>;
      </Select>;

      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Severities</SelectItem>;
          <SelectItem value="safe">Safe</SelectItem>;
          <SelectItem value="suspicious">Suspicious</SelectItem>;
          <SelectItem value="dangerous">Dangerous</SelectItem>;
        </SelectContent>;
      </Select>;

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Content Type" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Types</SelectItem>;
          <SelectItem value="signup">Signups</SelectItem>;
          <SelectItem value="job">Jobs</SelectItem>;
          <SelectItem value="message">Messages</SelectItem>;
          <SelectItem value="quote">Quotes</SelectItem>;
          <SelectItem value="review">Reviews</SelectItem>;
        </SelectContent>;
      </Select>;

      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



  search_query: string,
  setSearchQuery: (value: string, ) => void,
  status_filter: string | null,
  setStatusFilter: (value: string | null, ) => void,
  severity_filter: string | null,
  setSeverityFilter: (value: string | null, ) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null, ) => void,
  reset_filters: () => void;
}
export const FraudFilters: React.FC < FraudFiltersProps> = ({
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  severity_filter;
  setSeverityFilter;
  contentTypeFilter;
  setContentTypeFilter;
  reset_filters}) => {  return (
    <div className="flex flex - col md: flex - row gap - 4 mb - 6">;
      <div className="relative flex - 1">;
        <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400" />;
        <Input;
          placeholder="Search by user or content...";
          value = {search_query, }
          on_change = {(e, ) => setSearchQuery (e.target.value), }
          className="pl - 10";
        />;
      </div>;
      <Select value={status_filter || ""} onValueChange={value => setStatusFilter (value || null)}>;
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Status" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Statuses</SelectItem>;
          <SelectItem value="pending">Pending</SelectItem>;
          <SelectItem value="reviewed">Reviewed</SelectItem>;
          <SelectItem value="ignored">Ignored</SelectItem>;
          <SelectItem value="actioned">Actioned</SelectItem>;
        </SelectContent>;
      </Select>;
      <Select value={severity_filter || ""} onValueChange={value => setSeverityFilter (value || null)}>;
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Severity" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Severities</SelectItem>;
          <SelectItem value="safe">Safe</SelectItem>;
          <SelectItem value="suspicious">Suspicious</SelectItem>;
          <SelectItem value="dangerous">Dangerous</SelectItem>;
        </SelectContent>;
      </Select>;
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;
        <SelectTrigger className="w-[180px]">;
          <SelectValue placeholder="Content Type" />;
        </SelectTrigger>;
        <SelectContent>;
          <SelectItem value="">All Types</SelectItem>;
          <SelectItem value="signup">Signups</SelectItem>;
          <SelectItem value="job">Jobs</SelectItem>;
          <SelectItem value="message">Messages</SelectItem>;
          <SelectItem value="quote">Quotes</SelectItem>;
          <SelectItem value="review">Reviews</SelectItem>;
        </SelectContent>;
      </Select>;
      <Button variant="outline" on_click={reset_filters} className="md: w - auto">;
        <Filter className="h - 4 w - 4 mr - 2" /> Reset Filters;
      </Button>;
    </div>);
}
'"},
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
'"},
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
