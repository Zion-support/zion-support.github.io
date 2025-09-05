
<<<<<<< HEAD
import React from "react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Search, Filter } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Search, Filter } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
        <Input
          placeholder=&quot;Search by user or content...&quot;
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=&quot;pl-10&quot;
        />
      </div>
      
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
        <SelectTrigger className="w-[180px]&quot;>
          <SelectValue placeholder=&quot;Status&quot; />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="&quot;>All Statuses</SelectItem>
          <SelectItem value=&quot;pending&quot;>Pending</SelectItem>
          <SelectItem value=&quot;reviewed&quot;>Reviewed</SelectItem>
          <SelectItem value=&quot;ignored&quot;>Ignored</SelectItem>
          <SelectItem value=&quot;actioned&quot;>Actioned</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
        <SelectTrigger className="w-[180px]&quot;>
          <SelectValue placeholder=&quot;Severity&quot; />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="&quot;>All Severities</SelectItem>
          <SelectItem value=&quot;safe&quot;>Safe</SelectItem>
          <SelectItem value=&quot;suspicious&quot;>Suspicious</SelectItem>
          <SelectItem value=&quot;dangerous&quot;>Dangerous</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
        <SelectTrigger className="w-[180px]&quot;>
          <SelectValue placeholder=&quot;Content Type&quot; />
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
      <Button variant="outline" onClick={resetFilters} className="md: w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
=======
      <Button variant=&quot;outline&quot; onClick={resetFilters} className=&quot;md:w-auto&quot;>
        <Filter className=&quot;h-4 w-4 mr-2&quot; /> Reset Filters
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      </Button>
    </div>
  )
},
