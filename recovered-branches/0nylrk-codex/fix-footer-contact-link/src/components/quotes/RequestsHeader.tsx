
import React from &quot;react&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from &quot;@/components/ui/select&quot;;
import type { QuoteStatus } from &quot;@/types/quotes&quot;;

type RequestsHeaderProps = {
  unreadCount: number;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
};

export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
  unreadCount,
  statusFilter,
  setStatusFilter,
  archiveFilter,
  setArchiveFilter
}) => {
  return (
    <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center mb-8&quot;>
      <div>
        <div className=&quot;flex items-center gap-3&quot;>
          <h1 className=&quot;text-3xl font-bold text-white&quot;>Hire Requests</h1>
          {unreadCount > 0 && (
            <Badge className=&quot;bg-blue-500&quot;>
              {unreadCount} New
            </Badge>
          )}
        </div>
        <p className=&quot;text-zion-slate-light mt-2&quot;>
          Manage client requests to hire your services
        </p>
      </div>
      
      <div className=&quot;flex gap-3 mt-4 md:mt-0&quot;>
        <Select 
          value={statusFilter} 
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >
          <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white w-[140px]&quot;>
            <SelectValue placeholder=&quot;All Statuses&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;all&quot;>All Statuses</SelectItem>
            <SelectItem value=&quot;new&quot;>New</SelectItem>
            <SelectItem value=&quot;in_review&quot;>In Review</SelectItem>
            <SelectItem value=&quot;responded&quot;>Responded</SelectItem>
            <SelectItem value=&quot;accepted&quot;>Accepted</SelectItem>
            <SelectItem value=&quot;closed&quot;>Closed</SelectItem>
          </SelectContent>
        </Select>
        
        <Select 
          value={archiveFilter} 
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >
          <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white w-[140px]&quot;>
            <SelectValue placeholder=&quot;Active Only&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;active&quot;>Active Only</SelectItem>
            <SelectItem value=&quot;archived&quot;>Archived Only</SelectItem>
            <SelectItem value=&quot;all&quot;>All Requests</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
