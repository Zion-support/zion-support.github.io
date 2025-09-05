
import React from "react";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";
import type {_QuoteStatus} from "@/types/quotes";

type RequestsHeaderProps = {_unreadCount: number;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (_value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (_value: 'active' | 'archived' | 'all') => void;};

export const RequestsHeader: React.FC<RequestsHeaderProps> = (_{_unreadCount, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter}) => {_return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>
          {unreadCount > 0 && (
            <Badge className="bg-blue-500">
              {unreadCount} New
            </Badge>
          )}
        </div>
        <p className="text-zion-slate-light mt-2">
          Manage client requests to hire your services
        </p>
      </div>
      
      <div className="flex gap-3 mt-4 md:mt-0">
        <Select 
          value={_statusFilter} 
          onValueChange={_(_value) => setStatusFilter(value as QuoteStatus | 'all')}
        >
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="in_review">In Review</SelectItem>
            <SelectItem value="responded">Responded</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        
        <Select 
          value={_archiveFilter} 
          onValueChange={_(_value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">
            <SelectValue placeholder="Active Only" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active Only</SelectItem>
            <SelectItem value="archived">Archived Only</SelectItem>
            <SelectItem value="all">All Requests</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
