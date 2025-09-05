
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
=======
import React from &quot;react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Search, Filter } from 'lucide-react'

interface FraudFiltersProps {
  searchQuery: string,
  setSearchQuery: (value: string) => void,
  statusFilter: string | null,
  setStatusFilter: (value: string | null) => void,
  severityFilter: string | null,
  setSeverityFilter: (value: string | null) => void,
  contentTypeFilter: string | null,
  setContentTypeFilter: (value: string | null) => void,
  resetFilters: () => void
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({
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
    <div className=&quot;flex flex-col md:flex-row gap-4 mb-6&quot;>
      <div className=&quot;relative flex-1&quot;>
        <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400&quot; />
=======
import React from "react";

interface FraudFiltersProps {_searchQuery: string;
  setSearchQuery: (_value: string) => void;
  statusFilter: string | null;
  setStatusFilter: (_value: string | null) => void;
  severityFilter: string | null;
  setSeverityFilter: (_value: string | null) => void;
  contentTypeFilter: string | null;
  setContentTypeFilter: (_value: string | null) => void;
  resetFilters: () => void;}

export const FraudFilters: React.FC<FraudFiltersProps> = (_{_searchQuery, _setSearchQuery, _statusFilter, _setStatusFilter, _severityFilter, _setSeverityFilter, _contentTypeFilter, _setContentTypeFilter, _resetFilters}) => {_return (_<div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Input
          placeholder=&quot;Search by user or content...&quot;
          value={searchQuery}
<<<<<<< HEAD
          onChange={(e) => setSearchQuery(e.target.value)}
          className=&quot;pl-10&quot;
        />
      </div>
      
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
        <SelectTrigger className="w-[180px]&quot;>
          <SelectValue placeholder=&quot;Status&quot; />
=======
          onChange={_(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <Select value={_statusFilter || ""} onValueChange={_value => setStatusFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="&quot;>All Statuses</SelectItem>
          <SelectItem value=&quot;pending&quot;>Pending</SelectItem>
          <SelectItem value=&quot;reviewed&quot;>Reviewed</SelectItem>
          <SelectItem value=&quot;ignored&quot;>Ignored</SelectItem>
          <SelectItem value=&quot;actioned&quot;>Actioned</SelectItem>
        </SelectContent>
      </Select>
      
<<<<<<< HEAD
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
        <SelectTrigger className="w-[180px]&quot;>
          <SelectValue placeholder=&quot;Severity&quot; />
=======
      <Select value={_severityFilter || ""} onValueChange={_value => setSeverityFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Severity" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="&quot;>All Severities</SelectItem>
          <SelectItem value=&quot;safe&quot;>Safe</SelectItem>
          <SelectItem value=&quot;suspicious&quot;>Suspicious</SelectItem>
          <SelectItem value=&quot;dangerous&quot;>Dangerous</SelectItem>
        </SelectContent>
      </Select>
      
<<<<<<< HEAD
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
        <SelectTrigger className="w-[180px]&quot;>
          <SelectValue placeholder=&quot;Content Type&quot; />
=======
      <Select value={_contentTypeFilter || ""} onValueChange={_value => setContentTypeFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="&quot;>All Types</SelectItem>
          <SelectItem value=&quot;signup&quot;>Signups</SelectItem>
          <SelectItem value=&quot;job&quot;>Jobs</SelectItem>
          <SelectItem value=&quot;message&quot;>Messages</SelectItem>
          <SelectItem value=&quot;quote&quot;>Quotes</SelectItem>
          <SelectItem value=&quot;review&quot;>Reviews</SelectItem>
        </SelectContent>
      </Select>
      
<<<<<<< HEAD
<<<<<<< HEAD
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
=======
      <Button variant="outline" onClick={_resetFilters} className="md:w-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
=======
      <Button variant=&quot;outline&quot; onClick={resetFilters} className=&quot;md:w-auto&quot;>
        <Filter className=&quot;h-4 w-4 mr-2&quot; /> Reset Filters
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      </Button>
    </div>
  )
},
