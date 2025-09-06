
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { ;
  Select,;
  SelectContent, ;
  SelectItem, ;
  SelectTrigger, ;
  SelectValue ;
} from "@/components/ui/select",;
import type { QuoteStatus } from "@/types/quotes",;
;
type RequestsHeaderProps = {;
  unreadCount:number,;
  statusFilter:QuoteStatus | 'all',;
  setStatusFilter:(value:QuoteStatus | 'all') => void,;
  archiveFilter:'active' | 'archived' | 'all',;
  setArchiveFilter:(value:'active' | 'archived' | 'all') => void;
},;
;
export const RequestsHeader:React.FC<RequestsHeaderProps> = ({;
  unreadCount,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter;
}) => {;
  return (;
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
      <div>;
        <div className="flex items-center gap-3">;
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>;
          {unreadCount > 0 && (;
            <Badge className="bg-blue-500">;
              {unreadCount} New;
            </Badge>;
          )}
        </div>;
        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
      </div>;
      ;
      <div className="flex gap-3 mt-4 md:mt-0">;
        <Select ;
          value={statusFilter} ;
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >;
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;
            <SelectValue placeholder="All Statuses" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="all">All Statuses</SelectItem>;
            <SelectItem value="new">New</SelectItem>;
            <SelectItem value="in_review">In Review</SelectItem>;
            <SelectItem value="responded">Responded</SelectItem>;
            <SelectItem value="accepted">Accepted</SelectItem>;
            <SelectItem value="closed">Closed</SelectItem>;
          </SelectContent>;
        </Select>;
        ;
        <Select ;
          value={archiveFilter} ;
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
    </div>;
  ),;
},;export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
  unreadCount;
statusFilter;
setStatusFilter;
archiveFilter;
setArchiveFilter 
}) => {
  return (
    <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center mb-8&quot;>
import React from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import type {QuoteStatus} from "@/types/quotes";

type RequestsHeaderProps = {unreadCount: number,
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void};

export const RequestsHeader: React.FC<RequestsHeaderProps> = (_{unreadCount, statusFilter, setStatusFilter, archiveFilter, setArchiveFilter}) => {return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
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
        <Select,
value={statusFilter} 
          onValueChange={_(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >
          <SelectTrigger className=&quot;bg-zion-blue-dark border-zion-blue-light text-white w-[140px]&quot;>
            <SelectValue placeholder=&quot;All Statuses&quot; />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=&quot;all&quot;>All Statuses</SelectItem>
            <SelectItem value=&quot;new&quot;>New</SelectItem>
            <SelectItem value=&quot;inreview&quot;>In Review</SelectItem>
            <SelectItem value=&quot;responded&quot;>Responded</SelectItem>
            <SelectItem value=&quot;accepted&quot;>Accepted</SelectItem>
            <SelectItem value=&quot;closed&quot;>Closed</SelectItem>
          </SelectContent>
        </Select>
        
        <Select,
value={archiveFilter} 
          onValueChange={_(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
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
  )
},
