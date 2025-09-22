import { 
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue 
} from "@/components/ui/select",
import type { QuoteStatus } from "@/types/quotes";

import React from "react",
import React from "react","
import { Badge } from "@/components/ui/badge",
import {}
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
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
SelectValue "
} from "@/components/ui/select","
import type { QuoteStatus } from "@/types/quotes",

  SelectValue 
} from "@/components/ui/select",

import type { QuoteStatus } from "@/types/quotes",;
type RequestsHeaderProps = {

type RequestsHeaderProps = {}
  unreadCount: number,
  statusFilter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archiveFilter: 'active' | 'archived' | 'all',';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
},

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

type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
}

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
return (

        <Select 
          value={archiveFilter} 


'
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

},
  setArchiveFilter;
}) => {;
  return (},
  setArchiveFilter;
}) => {;
  return (},
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
import React from "react",;
},"
import React from "react",;"
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
      </div>;            <SelectValue placeholder="Active Only" />;
      </div>;            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="active">Active Only</SelectItem>;"
            <SelectItem value="archived">Archived Only</SelectItem>;"
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;

export default RequestsHeader;
    </div>);
}
;


import React from "react",;
import React from "react",;
import { Badge } from "@/components/ui/badge",;
import { ;
  Select,;
  SelectContent, ;
  SelectItem, ;
  SelectTrigger, ;
SelectValue ;"
} from "@/components/ui/select",;"
import type { QuoteStatus } from "@/types/quotes",;
;
type RequestsHeaderProps = {;
  unreadCount:number,;'
  statusFilter:QuoteStatus | 'all',;'
  setStatusFilter:(value:QuoteStatus | 'all') => void,;'
  archiveFilter:'active' | 'archived' | 'all',;'
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
</div>;"
        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
      </div>;
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
            <SelectItem value="closed">Closed</SelectItem>;
          </SelectContent>;
        </Select>;
        <Select;
value={archiveFilter} ;'
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >;"
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;"
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="active">Active Only</SelectItem>;"
            <SelectItem value="archived">Archived Only</SelectItem>;"
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
<SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
    </div>;"

export default RequestsHeader;
      </div>;

'"
