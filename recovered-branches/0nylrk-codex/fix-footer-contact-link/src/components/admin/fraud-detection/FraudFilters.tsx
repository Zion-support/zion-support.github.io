<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx

<<<<<<< HEAD

import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Filter} from "lucide-react";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
=======
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Search, Filter } from "lucide-react",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
export const FraudFilters: React.FC<FraudFiltersProps> = ({

  setContentTypeFilter,
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Filter} from "lucide-react";
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
  searchQuery;
import React from './react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Search, Filter } from './lucide-react';
interface FraudFiltersProps {
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
export const FraudFilters: React.FC < FraudFiltersProps> = ({
  search_query;
  setSearchQuery;
  status_filter;
  setStatusFilter;
  severity_filter;
  setSeverityFilter;
  contentTypeFilter;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  resetFilters}) => {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
  setContentTypeFilter,;
  resetFilters}) => {;
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">;
      <div className="relative flex-1">;
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
        <Input
          placeholder="Search by user or content..."
          value={searchQuery}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export const FraudFilters: React.FC<FraudFiltersProps> = ({;
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const FraudFilters: React.FC<FraudFiltersProps> = ({
<<<<<<< HEAD
  searchQuery;
  setSearchQuery;
  statusFilter;
  setStatusFilter;
  severityFilter;
  setSeverityFilter;
  contentTypeFilter;

  setContentTypeFilter
=======
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  severityFilter,
  setSeverityFilter,
  contentTypeFilter,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  setContentTypeFilter,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  resetFilters}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by user or content..."
          value={searchQuery}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
<<<<<<< HEAD
=======


      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
      <Select value={statusFilter |""} onValueChange={value => setStatusFilter(value |null)}>
=======
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      <Select value={severityFilter |""} onValueChange={value => setSeverityFilter(value |null)}>
=======
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      <Select value={contentTypeFilter |""} onValueChange={value => setContentTypeFilter(value |null)}>
=======
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
          onChange={(e) => setSearchQuery(e && e.target.value)}
=======

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
;
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          className="pl-10";
        />;
      </div>;
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
<<<<<<< HEAD
  setContentTypeFilter,
  reset_filters}) => {
  return (
    <div className="flex flex - col md:flex - row gap - 4 mb - 6">;
      <div className="relative flex - 1">;
        <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400" />;
        <Input;
          placeholder="Search by user or content...";
          value={search_query}
          on_change={(e) => setSearchQuery (e.target.value)}
          className="pl - 10";
        />;
      </div>;
      <Select value={status_filter || ""} onValueChange={value => setStatusFilter (value || null)}>;
=======

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
      ;
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx

      <Select value={severity_filter || ""} onValueChange={value => setSeverityFilter (value || null)}>;

========
<<<<<<< HEAD
      <Select value={severity_filter || ""} onValueChange={value => setSeverityFilter (value || null)}>;
=======
      ;
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
=======
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx

      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;

========
<<<<<<< HEAD
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter (value || null)}>;
=======
      ;
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
=======
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
      <Button variant="outline" on_click={reset_filters} className="md: w - auto">;
        <Filter className="h - 4 w - 4 mr - 2" /> Reset Filters;
      </Button>;
    </div>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx

=======

export default FraudFilters;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
      ;
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
=======
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Filter className="h-4 w-4 mr-2" /> Reset Filters;
      </Button>;
    </div>;
  );
<<<<<<< HEAD
},; interface FraudFiltersProps {
  searchQuery: string;
setSearchQuery: (value: string) => void;
statusFilter: string | null;
setStatusFilter: (value: string | null) => void;
severityFilter: string | null;
setSeverityFilter: (value: string | null) => void;
contentTypeFilter: string | null;
setContentTypeFilter: (value: string | null) => void;
resetFilters: () => void 
}export const FraudFilters: React.FC<FraudFiltersProps> = ({
  searchQuery;
setSearchQuery;
statusFilter;
setStatusFilter;
severityFilter;
setSeverityFilter;
contentTypeFilter;
setContentTypeFilter;
resetFilters 
}) => {
  return (<div className="flex flex-col md:flex-row gap-4 mb-6" > <div className="relative flex-1" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> Search by user or content..."value= {
  searchQuery 
}</SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" pending">Pending</SelectItem> <SelectItem value=" reviewed">Reviewed</SelectItem> <SelectItem value=" ignored">Ignored</SelectItem> <SelectItem value=" actioned">Actioned</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Severities</SelectItem> <SelectItem value=" safe">Safe</SelectItem> <SelectItem value=" suspicious">Suspicious</SelectItem> <SelectItem value=" dangerous">Dangerous</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Types</SelectItem> <SelectItem value=" signup">Signups</SelectItem> <SelectItem value=" job">Jobs</SelectItem> <SelectItem value=" message">Messages</SelectItem> <SelectItem value=" quote">Quotes</SelectItem> <SelectItem value=" review">Reviews</SelectItem> </SelectContent> </Select> <Filter className="h-4 w-4 mr-2" /> Reset Filters 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFilters.tsx
=======
};

export default FraudFilters;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
