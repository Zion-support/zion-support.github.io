<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx


<<<<<<< HEAD
=======

=======

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue 
} from "@/components/ui/select",
import type { QuoteStatus } from "@/types/quotes";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Badge } from "@/components/ui/badge",
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select",
import type { QuoteStatus } from "@/types/quotes",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
type RequestsHeaderProps = {
  unreadCount: number,
  statusFilter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archiveFilter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
},
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({

  archiveFilter,

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
}
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
  unreadCount;
  statusFilter;
  setStatusFilter;
  archiveFilter
  unreadCount,
  statusFilter,
  setStatusFilter,
  archiveFilter,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  setArchiveFilter
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx
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
}
;
export const RequestsHeader: React.FC < RequestsHeaderProps> = ({
  unread_count;
  status_filter;
  setStatusFilter;
  archive_filter,
  setArchiveFilter;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx


        <Select 
          value={archiveFilter} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Select
          value={archiveFilter}
        <Select 
          value={archiveFilter} 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
      </div>;
      <div className="flex gap-3 mt-4 md:mt-0">;
<<<<<<< HEAD
        <Select
          value={statusFilter} 
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >;
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx
        <Select;
          value={archive_filter}
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx

    </div>);
}
;

=======

export default RequestsHeader;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
}
;
=======

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
=======
        <Select;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        ;
        <Select ;
=======
        <Select;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/RequestsHeader.tsx
=======
  );
};

export default RequestsHeader;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
