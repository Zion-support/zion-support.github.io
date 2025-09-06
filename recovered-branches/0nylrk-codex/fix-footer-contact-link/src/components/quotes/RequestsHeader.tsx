}) => {
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
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
            <SelectValue placeholder="Active Only" />;
          </SelectTrigger>;
          <SelectContent>;
            <SelectItem value="active">Active Only</SelectItem>;
            <SelectItem value="archived">Archived Only</SelectItem>;
            <SelectItem value="all">All Requests</SelectItem>;
          </SelectContent>;
        </Select>;
      </div>;
=======
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
