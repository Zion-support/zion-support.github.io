<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type RequestsHeaderProps = {
  unreadCount: number,
  statusFilter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archiveFilter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
},

<<<<<<< HEAD
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({

  archiveFilter,

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
  setArchiveFilter
}) => {
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  setArchiveFilter
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
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
}) => {
type RequestsHeaderProps = {;
  unreadCount: number,;
  statusFilter: QuoteStatus | 'all',;
  setStatusFilter: (value: QuoteStatus | 'all') => void,;
  archiveFilter: 'active' | 'archived' | 'all',;
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
};

<<<<<<< HEAD
=======
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  archiveFilter,;
  setArchiveFilter;
}) => {;
  return (
<<<<<<< HEAD


        <Select 
          value={archiveFilter} 


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
  unreadCount;
  statusFilter;
  setStatusFilter;
  archiveFilter
  unreadCount,
  statusFilter,
  setStatusFilter,
  archiveFilter,
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



  setArchiveFilter
        <Select
          value={archiveFilter}
        <Select 
          value={archiveFilter} 
<<<<<<< HEAD
  return (


        <Select 
          value={archiveFilter} 

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

};

=======
=======
};

}

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </div>;
        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
      </div>;
<<<<<<< HEAD

      <div className="flex gap-3 mt-4 md:mt-0">;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <Select;
          value={archive_filter}
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
<<<<<<< HEAD

<<<<<<< HEAD
=======
export default RequestsHeader;


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>);
}
;

<<<<<<< HEAD
=======

export default RequestsHeader;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
        <Select;
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
        <Select;
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
  );
};

export default RequestsHeader;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
