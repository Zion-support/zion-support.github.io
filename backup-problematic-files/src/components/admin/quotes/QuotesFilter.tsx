
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
  dateRange,;
  setDateRange,;

                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}

            onClick={onReset}
            className="border-zion-blue-light text-zion-slate-light";
          >;
            <RefreshCw className="mr-2 h-4 w-4" /> Reset Filters;
          </Button>;
        </div>;
      </CardContent>;
    </Card>;

