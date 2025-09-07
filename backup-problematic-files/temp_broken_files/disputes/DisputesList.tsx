case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;

      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
          No active disputes match the selected filter;
        </p>;
      </div>;

          onClick={() => setStatusFilter("all")}
          size="sm";
        >;
          All;
        </Button>;

          onClick={() => setStatusFilter("open")}
          size="sm";
        >;
          Open;
        </Button>;

          onClick={() => setStatusFilter("under_review")}
          size="sm";
        >;
          Under Review;
        </Button>;

          onClick={() => setStatusFilter("resolved")}
          size="sm";
        >;
          Resolved;
        </Button>;

          size="sm";
        >;
          Closed;
        </Button>;
      </div>;

                </TableCell>;
                <TableCell>;
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>;
                <TableCell>;

                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

}