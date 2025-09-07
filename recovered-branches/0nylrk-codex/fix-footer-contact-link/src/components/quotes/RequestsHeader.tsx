<<<<<<< HEAD
import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
import React from "react";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react",

import { Badge } from "@/components/ui/badge",
import {}

>>>>>>> merged-prs-20250907-203621
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
<<<<<<< HEAD
=======
  SelectValue 
} from "@/components/ui/select",
<<<<<<< HEAD
import type { QuoteStatus } from "@/types/quotes";
type RequestsHeaderProps = $2;
  statusFilter: QuoteStatus | 'all',
  setStatusFilter: (value: QuoteStatus | 'all') => void,
  archiveFilter: 'active' | 'archived' | 'all',
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
},
=======
import type { QuoteStatus } from "@/types/quotes",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type RequestsHeaderProps = {

  unreadCount: number,
  statusFilter: QuoteStatus | 'all','
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archiveFilter: 'active' | 'archived' | 'all',';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
},

<<<<<<< HEAD
  setArchiveFilter'
import React from './react';'
import { Badge } from '@/components / ui / badge';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';"
=======
<<<<<<< HEAD
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void
}
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  setArchiveFilter
=======
import React from './react';
import { Badge } from '@/components / ui / badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
type RequestsHeaderProps = {
  unreadCount: number
  statusFilter: QuoteStatus | 'all'
  setStatusFilter: (value: QuoteStatus | 'all') => void
  archiveFilter: 'active' | 'archived' | 'all'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const RequestsHeader: React.FC<RequestsHeaderProps> = ({;
  unreadCount;
  statusFilter;
  setStatusFilter;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  archiveFilter,;
  setArchiveFilter;
}) => {;
  return (
>>>>>>> merged-prs-20250907-203621

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
<<<<<<< HEAD
    <div className = $2;
=======
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
<<<<<<< HEAD
};

}

};
=======
=======

};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
},

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;

        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
<<<<<<< HEAD
=======
      </div>;
<<<<<<< HEAD
      <div className="flex gap-3 mt-4 md:mt-0">;
        <Select;
          value={archive_filter}
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;

export default RequestsHeader;


    </div>);
}
;

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

            <SelectValue placeholder="All Statuses" />;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        <Select;
          value={archiveFilter} ;
          onValueChange={(value) => setArchiveFilter(value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white w-[140px]">;
=======

        <Select;
          value={archive_filter}
          onValueChange={(value) => setArchiveFilter (value as 'active' | 'archived' | 'all')}
        >;
          <SelectTrigger className="bg - zion - blue - dark border - zion - blue - light text - white w-[140px]">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

          </SelectTrigger>;
          <SelectContent>;"
            <SelectItem value="active">Active Only</SelectItem>;"
            <SelectItem value="archived">Archived Only</SelectItem>;"
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;

      </div>;
<<<<<<< HEAD
    </div>;
  );
};

export default RequestsHeader;
=======

export default RequestsHeader;
    </div>);
}
;

import React from "react",;

import { Badge } from "@/components/ui/badge",;
import { ;
  Select,;
  SelectContent, ;
  SelectItem, ;
  SelectTrigger, ;

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

<<<<<<< HEAD
  unreadCount: number;,
  statusFilter: QuoteStatus | 'all
  setStatusFilter: (value: QuoteStatus | 'all') => void;',
  archiveFilter: 'active' | 'archived' | 'all
  setArchiveFilter;

            <Badge className="bg-blue-500">;
              {unreadCount} New;
            </Badge>;
          )}

        <p className="text-zion-slate-light mt-2">;
          Manage client requests to hire your services;
        </p>;
      </div>;

            <SelectItem value="closed">Closed</SelectItem>;
          </SelectContent>;
        </Select>;
        <Select;

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

          </SelectContent>;
        </Select>;
      </div>;
    </div>;"

export default RequestsHeader;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
