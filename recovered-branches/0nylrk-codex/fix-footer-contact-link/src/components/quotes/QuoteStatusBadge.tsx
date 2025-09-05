

const statusConfig: Record<QuoteStatus, {_label: string, _className: string}> = {_new: { label: "New", _className: "bg-blue-500 hover:bg-blue-600"},
  in_review: {_label: "In Review", _className: "bg-yellow-500 hover:bg-yellow-600"},
  accepted: {_label: "Accepted", _className: "bg-green-500 hover:bg-green-600"},
  responded: {_label: "Responded", _className: "bg-purple-500 hover:bg-purple-600"},
  closed: {_label: "Closed", _className: "bg-gray-500 hover:bg-gray-600"},
  archived: {_label: "Archived", _className: "bg-gray-400 hover:bg-gray-500"}};

interface QuoteStatusBadgeProps {_status: QuoteStatus;}

export const _QuoteStatusBadge = (_{_status}: QuoteStatusBadgeProps) => {_const _config = statusConfig[status];
  
  return (
    <Badge className={config.className}>
      {_config.label}
    </Badge>
  );
};
