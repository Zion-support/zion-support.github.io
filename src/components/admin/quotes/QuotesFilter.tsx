=======
interface QuotesFilterProps {;

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


interface QuotesFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onReset: () => void

}
<<<<<<< HEAD
=======

};
          <div>;
            <p className='text - zion - slate - light text - sm mb - 2'>Date Range</p>;
            <Popover>;
              <PopoverTrigger as_child>;
                <Button;
                  variant='outline';
                  className='w - full justify - start text - left font - normal bg - zion - blue border - zion - blue - light text - white';
                >;
                  <Calendar className='mr - 2 h - 4 w - 4 text - zion - slate - light' />;
                  {date_range?.from ? (
                    date_range.to ? (
                      <>;
                        {format (date_range.from, 'LLL dd, y')} -{' '}
                        {format (date_range.to, 'LLL dd, y')}
                      </>) : (
                      format (date_range.from, 'LLL dd, y')                    )                      format (date_range.from, "LLL dd, y"))) : (
                    <span > Date range</span>)}
                </Button>;
              </PopoverTrigger>;
              <PopoverContent;
                className='w - auto p - 0 bg - zion - blue - dark border - zion - blue - light';
                align='start';
              >;
                <CalendarComponent;
                  initial_focus;
                  mode='range'                  default_month={date_range?.from}              <PopoverContent className="w - auto p - 0 bg - zion - blue - dark border - zion - blue - light" align="start">;
                <CalendarComponent;
                  initial_focus;
                  mode="range";
                  selected={date_range}
                  on_select={setDateRange}
                  numberOfMonths={2}
                  default_month = {date_range?.from, }
                  selected = {date_range, }
                  on_select = {setDateRange, }
                  numberOfMonths = {2, }
                />;
              </PopoverContent>;
            </Popover>;
          </div>;
        </div>;
        <div className='mt - 4 flex justify - end'>;
          <Button;
            variant='outline';
            on_click={on_reset}
            className='border - zion - blue - light text - zion - slate - light'          >;
            <RefreshCw className='mr - 2 h - 4 w - 4' /> Reset Filters          </Button>;
        </div>;
      </CardContent>;
}
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
            on_click={on_reset}
            className="border - zion - blue - light text - zion - slate - light";
          >;
            <RefreshCw className="mr - 2 h - 4 w - 4" /> Reset Filters;
          </Button>;
        </div>;
      </CardContent>;
    </Card>);
}  );
}
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
