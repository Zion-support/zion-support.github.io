<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
import React from "react";
import { Badge } from "@/components/ui/badge";
=======

import React from "react",
import { Badge } from "@/components/ui/badge",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react",
=======
import React from "react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge",
import {}
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
import React from "react",
import { Badge } from "@/components/ui/badge",


import { 


import React from "react",""
import { Badge } from "@/components/ui/badge","
import {
  // TODO: Implement
}
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
<<<<<<< HEAD
  SelectValue "
} from "@/components/ui/select","
import type { QuoteStatus } from "@/types/quotes",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  SelectValue 
} from "@/components/ui/select",

import type { QuoteStatus } from "@/types/quotes",;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type RequestsHeaderProps = {
=======



type RequestsHeaderProps = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  unreadCount: number,
  statusFilter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archiveFilter: 'active' | 'archived' | 'all',';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  setArchiveFilter'
import React from './react';'
import { Badge } from '@/components / ui / badge';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';"
import type { QuoteStatus } from "@/types / quotes";
type RequestsHeaderProps = {}
  unread_count: number,'
  status_filter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archive_filter: 'active' | 'archived' | 'all','
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
}
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
}) => {}
type RequestsHeaderProps = {;
  unreadCount: number,;'
  statusFilter: QuoteStatus | 'all',;'
  setStatusFilter: (value: QuoteStatus | 'all') => void,;'
  archiveFilter: 'active' | 'archived' | 'all',;'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
<<<<<<< HEAD
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >"
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">"
            <SelectValue placeholder="Active Only" />
          </SelectTrigger>
          <SelectContent>"
            <SelectItem value="active">Active Only</SelectItem>"
            <SelectItem value="archived">Archived Only</SelectItem>"
            <SelectItem value="all">All Requests</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
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
=======
  setArchiveFilter;
}) => {;
  return (},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  setArchiveFilter;
}) => {;
  return (},
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}) => {
type RequestsHeaderProps = {;
  unreadCount: number,;
  statusFilter: QuoteStatus | 'all',;
  setStatusFilter: (value: QuoteStatus | 'all') => void,;
  archiveFilter: 'active' | 'archived' | 'all',;
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
};

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
  archiveFilter,;
  setArchiveFilter;
}) => {;
  return (

        <Select 
          value={archiveFilter} 

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

};

};

}

};
},
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  setArchiveFilter;
}) => {;
  return (},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",;
=======
},"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;"
} from "@/components/ui/select",;"
import type { QuoteStatus } from "@/types/quotes",;
type RequestsHeaderProps = {;
  unreadCount: number,;'
  statusFilter: QuoteStatus | 'all',;'
  setStatusFilter: (value: QuoteStatus | 'all') => void,;'
  archiveFilter: 'active' | 'archived' | 'all',;'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
},;
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter;
  setArchiveFilter;
}) => {;
  return (;"
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
      <div>;"
        <div className="flex items-center gap-3">;"
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>;
          {unreadCount > 0 && (;"
            <Badge className="bg-blue-500">;
              {unreadCount} New;
            </Badge>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
=======



        </div>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;

<<<<<<< HEAD
      <div className="flex gap-3 mt-4 md:mt-0">;
<<<<<<< HEAD
=======
      </div>;

      <div className="flex gap-3 mt-4 md:mt-0">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <Select
          value={statusFilter} 
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >;
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
=======
<div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <SelectValue placeholder="All Statuses" />;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
          value={archive_filter}
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;

            <SelectValue placeholder="Active Only" />;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      </div>;            <SelectValue placeholder="Active Only" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="all">All Statuses</SelectItem>;"
            <SelectItem value="new">New</SelectItem>;"
            <SelectItem value="in_review">In Review</SelectItem>;"
            <SelectItem value="responded">Responded</SelectItem>;"
            <SelectItem value="accepted">Accepted</SelectItem>;"
            <SelectItem value="closed">Closed</SelectItem>;
          </SelectContent>;
        </Select>;

        <Select;
          value={archive_filter}'
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}
        >;"
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;


"
            <SelectValue placeholder="Active Only" />;
=======
      </div>;            <SelectValue placeholder="Active Only" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>;            <SelectValue placeholder="Active Only" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="active">Active Only</SelectItem>;"
            <SelectItem value="archived">Archived Only</SelectItem>;"
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </div>;

export default RequestsHeader;
    </div>);
}
;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export default RequestsHeader;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from "react",;
=======


"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Badge } from "@/components/ui/badge",;
import { ;
  Select,;
  SelectContent, ;
  SelectItem, ;
  SelectTrigger, ;
<<<<<<< HEAD
  SelectValue ;"
} from "@/components/ui/select",;"
import type { QuoteStatus } from "@/types/quotes",;
;
type RequestsHeaderProps = {;
  unreadCount:number,;'
  statusFilter:QuoteStatus | 'all',;'
  setStatusFilter:(value:QuoteStatus | 'all') => void,;'
  archiveFilter:'active' | 'archived' | 'all',;'
=======
  SelectValue ;
} from "@/components/ui/select",;
import type { QuoteStatus } from "@/types/quotes",;
;
type RequestsHeaderProps = {;
  unreadCount:number,;
  statusFilter:QuoteStatus | 'all',;
  setStatusFilter:(value:QuoteStatus | 'all') => void,;
  archiveFilter:'active' | 'archived' | 'all',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  setArchiveFilter:(value:'active' | 'archived' | 'all') => void;
},;
;
export const RequestsHeader:React.FC<RequestsHeaderProps> = ({;
  unreadCount,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  SelectValue;"
} from "@/components/ui/select",""
import type { QuoteStatus } from "@/types/quotes","
type RequestsHeaderProps = {
  unreadCount: number,"
  statusFilter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archiveFilter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
},




  unreadCount: number;,
  statusFilter: QuoteStatus | 'all
  setStatusFilter: (value: QuoteStatus | 'all') => void;',
  archiveFilter: 'active' | 'archived' | 'all
  setArchiveFilter;
<<<<<<< HEAD
}) => {;
<<<<<<< HEAD
  return (;"
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
      <div>;"
        <div className="flex items-center gap-3">;"
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>;
          {unreadCount > 0 && (;"
=======
  return (;
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
      <div>;
        <div className="flex items-center gap-3">;
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>;
          {unreadCount > 0 && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <Badge className="bg-blue-500">;
              {unreadCount} New;
            </Badge>;
          )}
<<<<<<< HEAD
        </div>;"
=======
        </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
      </div>;
<<<<<<< HEAD
      ;"
      <div className="flex gap-3 mt-4 md:mt-0">;
        <Select ;
        <Select;
          value={statusFilter} ;'
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}
        >;"
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;"
            <SelectValue placeholder="All Statuses" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="all">All Statuses</SelectItem>;"
            <SelectItem value="new">New</SelectItem>;"
            <SelectItem value="in_review">In Review</SelectItem>;"
            <SelectItem value="responded">Responded</SelectItem>;"
            <SelectItem value="accepted">Accepted</SelectItem>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <SelectItem value="closed">Closed</SelectItem>;
          </SelectContent>;
        </Select>;
        <Select;
<<<<<<< HEAD
          value={archiveFilter} ;'
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >;"
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;"
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="active">Active Only</SelectItem>;"
            <SelectItem value="archived">Archived Only</SelectItem>;"
=======
          value={archiveFilter} ;
=======
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import type { QuoteStatus } from "@/types / quotes";"
  unread_count: number,"
  status_filter: QuoteStatus | 'all',
  archive_filter: 'active' | 'archived' | 'all',
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;


        <Select;
          value={archiveFilter} 

)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}

          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">"
"
            <SelectValue placeholder="Active Only" />"

          <SelectContent>
            <SelectItem value="active">Active Only""
            <SelectItem value="archived">Archived Only""
            <SelectItem value="all">All Requests"
      </div>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;"
      <div>;
</div>"
        <div className="flex items-center gap-3">;"
          <h1 className="text-3xl font-bold text-white">Hire Requests</h1>;""
            <Badge className="bg-blue-500">;"

            ;
        </div>;"
        <p className="text-zion-slate-light mt-2">;"
</p>
        </p>;
      <div className="flex gap-3 mt-4 md:mt-0">;"
          value={statusFilter} )"
          onValueChange={(value) => setStatusFilter(value as QuoteStatus | 'all')}

          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;"
            <SelectValue placeholder="All Statuses" />;"

          <SelectContent>;
            <SelectItem value="all">All Statuses;""
            <SelectItem value="new">New;""
            <SelectItem value="in_review">In Review;""
            <SelectItem value="responded">Responded;""
            <SelectItem value="accepted">Accepted;""
            <SelectItem value="closed">Closed;"
          value={archive_filter}"
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}

          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;"
            <SelectValue placeholder="Active Only" />;"

            <SelectItem value="active">Active Only;""
            <SelectItem value="archived">Archived Only;""
            <SelectItem value="all">All Requests;"
      </div>;
    </div>);
export const RequestsHeader:React.FC<RequestsHeaderProps> = ({;

        <Select ;
          value={statusFilter} ;)"


          value={archiveFilter} ;"

pr-12325
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}'
</Select>'
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;"
</SelectTrigger>"
            <SelectValue placeholder="Active Only" />;"
</SelectValue>
          </SelectTrigger>;
          <SelectContent>;
<<<<<<< HEAD
            <SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <SelectItem value="all">All Requests</SelectItem>;
=======
</SelectContent>"
            <SelectItem value="active">Active Only</SelectItem>;""
            <SelectItem value="archived">Archived Only</SelectItem>;""
            <SelectItem value="all">All Requests</SelectItem>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </SelectContent>;
        </Select>;
      </div>;
    </div>;"


export default RequestsHeader;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
