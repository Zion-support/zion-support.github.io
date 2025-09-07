<<<<<<< HEAD
=======




<<<<<<< HEAD
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Filter} from "lucide-react";
import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Search, Filter } from "lucide-react",

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface FraudFiltersProps {

  searchQuery: string
  setSearchQuery: (value: string) => void
  statusFilter: string | null
  setStatusFilter: (value: string | null) => void
  severityFilter: string | null
  setSeverityFilter: (value: string | null) => void
  contentTypeFilter: string | null
  setContentTypeFilter: (value: string | null) => void

  resetFilters: () => void
}
<<<<<<< HEAD
  searchQuery;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Filter} from "lucide-react";

import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

interface FraudFiltersProps {

interface FraudFiltersProps {};
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: string | null;
  setStatusFilter: (value: string | null) => void;
  severityFilter: string | null;
  setSeverityFilter: (value: string | null) => void;
  contentTypeFilter: string | null;
  setContentTypeFilter: (value: string | null) => void;
  resetFilters: () => void;
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({

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
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({;

<<<<<<< HEAD
=======
  searchQuery;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from './react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Search, Filter } from './lucide-react';
interface FraudFiltersProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  search_query: string,
  setSearchQuery: (value: string) => void,
  status_filter: string | null,
  setStatusFilter: (value: string | null) => void,
  severity_filter: string | null,
  setSeverityFilter: (value: string | null) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null) => void,
  reset_filters: () => void;
}
<<<<<<< HEAD

=======
export const FraudFilters: React.FC < FraudFiltersProps> = ({
  search_query;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  setSearchQuery;
  status_filter;
  setStatusFilter;
  severity_filter;
  setSeverityFilter;
  contentTypeFilter;
<<<<<<< HEAD

  resetFilters}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by user or content..."
          value={searchQuery}

          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

"
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>

        <SelectTrigger className="w-[180px]">

          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Statuses</SelectItem>"
          <SelectItem value="pending">Pending</SelectItem>"
          <SelectItem value="reviewed">Reviewed</SelectItem>"
          <SelectItem value="ignored">Ignored</SelectItem>"
          <SelectItem value="actioned">Actioned</SelectItem>
        </SelectContent>
      </Select>

        <SelectTrigger className="w-[180px]">

          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Severities</SelectItem>"
          <SelectItem value="safe">Safe</SelectItem>"
          <SelectItem value="suspicious">Suspicious</SelectItem>"
          <SelectItem value="dangerous">Dangerous</SelectItem>
        </SelectContent>
      </Select>

        <SelectTrigger className="w-[180px]">

          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>"
          <SelectItem value="">All Types</SelectItem>"
          <SelectItem value="signup">Signups</SelectItem>"
          <SelectItem value="job">Jobs</SelectItem>"
          <SelectItem value="message">Messages</SelectItem>"
          <SelectItem value="quote">Quotes</SelectItem>"
          <SelectItem value="review">Reviews</SelectItem>
        </SelectContent>
      </Select>"
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">"
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>
    </div>
  )

  resetFilters}) => {
  resetFilters}) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  setContentTypeFilter,;
  resetFilters}) => {;
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">;
      <div className="relative flex-1">;
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
        <Input
          placeholder="Search by user or content..."
          value={searchQuery}
export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
export const FraudFilters: React.FC<FraudFiltersProps> = ({
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;

<<<<<<< HEAD
=======
export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
export const FraudFilters: React.FC<FraudFiltersProps> = ({
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  setContentTypeFilter
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
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by user or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
<<<<<<< HEAD

      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>

      <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
=======


      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>


<<<<<<< HEAD
      <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>


      <Select value={severityFilter |""} onValueChange={value => setSeverityFilter(value |null)}>
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>

<Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>

<<<<<<< HEAD
      <Select value={severityFilter |""} onValueChange={value => setSeverityFilter(value |null)}>
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>


      <Select value={contentTypeFilter |""} onValueChange={value => setContentTypeFilter(value |null)}>
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>

<Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>

<<<<<<< HEAD
      <Select value={contentTypeFilter |""} onValueChange={value => setContentTypeFilter(value |null)}>
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
      </Button>
    </div>
  )
<<<<<<< HEAD
          onChange={(e) => setSearchQuery(e && e.target.value)}

};

}

};
=======

          onChange={(e) => setSearchQuery(e && e.target.value)}

};

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
},
import React from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;

import { Search, Filter } from "lucide-react",;
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
}

"
import React from "react",;"
import { Input } from "@/components/ui/input",;"
import { Button } from "@/components/ui/button",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"

import { Search, Filter } from "lucide-react",;
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
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  severityFilter,;
  setSeverityFilter,;
  contentTypeFilter,;
  setContentTypeFilter,;
  resetFilters}) => {;
<<<<<<< HEAD
=======
  return (;
    <div className="flex flex-col md:flex-row gap-4 mb-6">;
      <div className="relative flex-1">;
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
        <Input;
          placeholder="Search by user or content...";
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
          className="pl-10";
        />;
      </div>;
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from "react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Search, Filter } from "lucide-react",;
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
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  severityFilter,;
  setSeverityFilter,;
  contentTypeFilter,;
  setContentTypeFilter,;
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
      ;
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
=======
      <Select value={status_filter || ""} onValueChange={value => setStatusFilter (value || null)}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;
=======

      <Select value={severity_filter || ""} onValueChange={value => setSeverityFilter (value || null)}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <SelectTrigger className="w-[180px]">;
<<<<<<< HEAD

=======
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
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
=======

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
export default FraudFilters;


      ;
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
};

export default FraudFilters;
=======
      <Button variant="outline" on_click={reset_filters} className="md: w - auto">;
        <Filter className="h - 4 w - 4 mr - 2" /> Reset Filters;
      </Button>;
    </div>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
;

export default FraudFilters;

export default FraudFilters;

export default FraudFilters;
      ;
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;

<<<<<<< HEAD
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
};

export default FraudFilters;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
