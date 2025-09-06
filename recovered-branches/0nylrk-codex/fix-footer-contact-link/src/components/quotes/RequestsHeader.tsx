
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue 
} from "@/components/ui/select",
<<<<<<< HEAD
import type { QuoteStatus } from "@/types/quotes";

=======
import type { QuoteStatus } from "@/types/quotes",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
<<<<<<< HEAD
=======
},

<<<<<<< HEAD
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
}
=======
<<<<<<< HEAD
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
<<<<<<< HEAD
  unreadCount;
  statusFilter;
  setStatusFilter;
  archiveFilter
=======
  unreadCount,
  statusFilter,
  setStatusFilter,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  archiveFilter,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  setArchiveFilter
}) => {
  return (
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
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
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
<<<<<<< HEAD
        <Select
          value={archiveFilter}
=======
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import type { QuoteStatus } from "@/types / quotes";
type RequestsHeaderProps = {
  unread_count: number,
  status_filter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archive_filter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
  unreadCount;
  statusFilter;
  setStatusFilter;
  archiveFilter
  setArchiveFilter
}) => {
type RequestsHeaderProps = {;
  unreadCount: number,;
  statusFilter: QuoteStatus | 'all',;
  setStatusFilter: (value: QuoteStatus | 'all') => void,;
  archiveFilter: 'active' | 'archived' | 'all',;
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
};

export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
  archiveFilter,;
  setArchiveFilter;
}) => {;
  return (
<<<<<<< HEAD
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
      <div>;
        <div className="flex items-center gap-3">;
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>;
          {unreadCount > 0 && (;
            <Badge className="bg-blue-500">;
              {unreadCount} New;
            </Badge>;
          )}
        </div>
        <p className="text-zion-slate-light mt-2">
          Manage client requests to hire your services
        </p>
      </div>
      <div className="flex gap-3 mt-4 md:mt-0">
        <Select
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
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
          value={archiveFilter}
=======


        <Select 
          value={archiveFilter} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
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
  )
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
}

=======

};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
},
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;
} from "@/components/ui/select",;
import type { QuoteStatus } from "@/types/quotes",;
type RequestsHeaderProps = {;
  unreadCount: number,;
  statusFilter: QuoteStatus | 'all',;
  setStatusFilter: (value: QuoteStatus | 'all') => void,;
  archiveFilter: 'active' | 'archived' | 'all',;
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
},;
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter;
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

      <div className="flex gap-3 mt-4 md:mt-0">;
        <Select
          value={statusFilter} 
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >;
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;
=======
    <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
      <div>;
        <div className="flex items - center gap - 3">;
          <h1 className="text - 3xl font - bold text - white">Hire Requests</h1>;
          {unread_count > 0 && (
            <Badge className="bg - blue - 500">;
              {unread_count} New;
            </Badge>)}
        </div>;
        <p className="text - zion - slate - light mt - 2">;
          Manage client requests to hire your services;
        </p>;
      </div>;
      <div className="flex gap - 3 mt - 4 md:mt - 0">;
        <Select;
          value={status_filter}
          onValueChange={(value) => setStatusFilter (value as QuoteStatus | 'all')}
        >;
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

        <Select
          value={archiveFilter} 
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
  );
};
    </div>);
}
;
<<<<<<< HEAD
=======

=======

export default RequestsHeader;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
