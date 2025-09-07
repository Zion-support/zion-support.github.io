<<<<<<< HEAD

import React from "react";
import { Input } from "@/components/ui/input";
=======
<<<<<<< HEAD
}

import React from "react",
import { Input } from "@/components/ui/input",
}

import React from "react",
import { Input } from "@/components/ui/input",
>>>>>>> merged-prs-20250907-203621
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from 'lucide-react'

interface FraudFiltersProps {
<<<<<<< HEAD
=======

  searchQuery: string
  setSearchQuery: (value: string,) => void
  statusFilter: string | null
  setStatusFilter: (value: string | null,) => void
  severityFilter: string | null
  setSeverityFilter: (value: string | null,) => void
  contentTypeFilter: string | null
  setContentTypeFilter: (value: string | null,) => void

import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Search, Filter } from 'lucide-react'

interface FraudFiltersProps {
>>>>>>> merged-prs-20250907-203621
  searchQuery: string,
  setSearchQuery: (value: string) => void,
  statusFilter: string | null,
  setStatusFilter: (value: string | null) => void,
  severityFilter: string | null,
  setSeverityFilter: (value: string | null) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null) => void,
<<<<<<< HEAD
  resetFilters: () => void
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({
=======
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({

  resetFilters: () => void
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
resetFilters: () => void
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  searchQuery
  setSearchQuery
  statusFilter
  setStatusFilter
  severityFilter
  setSeverityFilter
  contentTypeFilter
  setContentTypeFilter
import React from 'react';
};
interface FraudFiltersProps {;
  searchQuery: string,;
  setSearchQuery: (value: string,) => void,;
  statusFilter: string | null,;
  setStatusFilter: (value: string | null,) => void,;
  severityFilter: string | null,;
  setSeverityFilter: (value: string | null,) => void,;
  contentTypeFilter: string | null,;
  setContentTypeFilter: (value: string | null,) => void,;
  resetFilters: () => void;
}
export const FraudFilters: React.FC<FraudFiltersProps> = ({;
>>>>>>> merged-prs-20250907-203621
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
  setContentTypeFilter;
<<<<<<< HEAD
  resetFilters}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
=======
  resetFilters}) => {  return (

    <div className="flex flex-col md: flex-row gap-4 mb-6">
<<<<<<< HEAD
  resetFilters}) => {  return (
    <div className="flex flex-col md: flex-row gap-4 mb-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by user or content..."
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
<<<<<<< HEAD
      
=======
      <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
      
        <SelectTrigger className="w-[180px]">
      <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
      
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
        <Input
          placeholder="Search by user or content..."
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          value = {searchQuery,}



      

>>>>>>> merged-prs-20250907-203621
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
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
      
=======
<<<<<<< HEAD
      <Select value={severityFilter |""} onValueChange={value => setSeverityFilter(value |null)}>
      
        <SelectTrigger className="w-[180px]">
      <Select value={severityFilter |""} onValueChange={value => setSeverityFilter(value |null)}>
      
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      

>>>>>>> merged-prs-20250907-203621
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
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
      
=======
<<<<<<< HEAD
      <Select value={contentTypeFilter |""} onValueChange={value => setContentTypeFilter(value |null)}>
      
        <SelectTrigger className="w-[180px]">
      <Select value={contentTypeFilter |""} onValueChange={value => setContentTypeFilter(value |null)}>
      
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      

>>>>>>> merged-prs-20250907-203621
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
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
      
=======
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      


>>>>>>> merged-prs-20250907-203621
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
      </Button>
    </div>
  )
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
}
'"}
}

}
'"}
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          onChange = {(e,) => setSearchQuery(e && e.target.value),}


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
'"},
;
};
ursor/fix-website-loading-errors-and-merge-6662
          value = {searchQuery,}
          onChange = {(e,) => setSearchQuery(e && e.target.value),}
          className="pl-10";
        />;
      </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Search, Filter } from 'lucide-react';
;
interface FraudFiltersProps {;
  searchQuery:string,;
  setSearchQuery:(value:string) => void,;
  statusFilter:string | null,;
  setStatusFilter:(value:string | null) => void,;
  severityFilter:string | null,;
  setSeverityFilter:(value:string | null) => void,;
  contentTypeFilter:string | null,;
  setContentTypeFilter:(value:string | null) => void,;
  resetFilters:() => void;
}
;
export const FraudFilters:React.FC<FraudFiltersProps> = ({;
}
'"},
;
<<<<<<< HEAD
};
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      ;
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
'"},;
};
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
},; import {;
  {;
  {;
  Search, Filter ;
}from 'lucide-react' interface FraudFiltersProps {;
  searchQuery: string;
setSearchQuery: (value: string) => void;
statusFilter: string | null;
setStatusFilter: (value: string | null) => void;
severityFilter: string | null;
setSeverityFilter: (value: string | null) => void;
contentTypeFilter: string | null;
setContentTypeFilter: (value: string | null) => void;
resetFilters: () => void ;
}export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery;
setSearchQuery;
statusFilter;
setStatusFilter;
severityFilter;
setSeverityFilter;
contentTypeFilter;
setContentTypeFilter;
resetFilters ;
}) => {;
  return (<div className="flex flex-col md:flex-row gap-4 mb-6" > <div className="relative flex-1" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> Search by user or content..."value= {;
  searchQuery ";
}</SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" pending">Pending</SelectItem> <SelectItem value=" reviewed">Reviewed</SelectItem> <SelectItem value=" ignored">Ignored</SelectItem> <SelectItem value=" actioned">Actioned</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Severities</SelectItem> <SelectItem value=" safe">Safe</SelectItem> <SelectItem value=" suspicious">Suspicious</SelectItem> <SelectItem value=" dangerous">Dangerous</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Types</SelectItem> <SelectItem value=" signup">Signups</SelectItem> <SelectItem value=" job">Jobs</SelectItem> <SelectItem value=" message">Messages</SelectItem> <SelectItem value=" quote">Quotes</SelectItem> <SelectItem value=" review">Reviews</SelectItem> </SelectContent> </Select> <Filter className="h-4 w-4 mr-2" /> Reset Filters ;
};
'"
};
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
