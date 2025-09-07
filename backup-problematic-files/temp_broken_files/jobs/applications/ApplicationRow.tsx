<User className="h-5 w-5 text-gray-400" />;
            )}
          </Avatar>;
          <div>;
            <div className="font-medium">;

            </div>;
          </div>;
        </div>;
      </TableCell>;
      <TableCell>;
        <div className="flex items-center gap-1">;
          <Calendar className="h-4 w-4 text-muted-foreground" />;

          onClick={() => onViewScore(application)}
          className="flex items-center gap-1";
        >;
          <BarChart className="h-4 w-4 mr-1" />;
          <ScoreBadge application={application} />;
        </Button>;
      </TableCell>;
      <TableCell>;

          <span className="text-muted-foreground text-sm">No resume</span>;
        )}
      </TableCell>;
      <TableCell className="text-right">;