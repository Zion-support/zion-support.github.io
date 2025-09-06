export const QuotesFilter: React.FC<QuotesFilterProps> = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  archiveFilter,
  setArchiveFilter,
  dateRange,
  setDateRange,

  return (
    <Card className='mb-6 bg-zion-blue-dark border-zion-blue-light'>
      <CardContent className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-end'>
          <div className='relative'>
            <Input

            />
          </div>

          <div>

              </SelectTrigger>
              <SelectContent className='bg-zion-blue-dark border-zion-blue-light text-white'>
                <SelectItem value='all'>All Statuses</SelectItem>
                <SelectItem value='new'>New</SelectItem>
                <SelectItem value='in_review'>In Review</SelectItem>
                <SelectItem value='responded'>Responded</SelectItem>
                <SelectItem value='accepted'>Accepted</SelectItem>
                <SelectItem value='closed'>Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>

              </SelectTrigger>
              <SelectContent className='bg-zion-blue-dark border-zion-blue-light text-white'>
                <SelectItem value='active'>Active Only</SelectItem>
                <SelectItem value='archived'>Archived Only</SelectItem>
                <SelectItem value='all'>All Quotes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className='text-zion-slate-light text-sm mb-2'>Date Range</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white'
                >
                  <Calendar className='mr-2 h-4 w-4 text-zion-slate-light' />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, 'LLL dd, y')} -{' '}
                        {format(dateRange.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(dateRange.from, 'LLL dd, y')                    )

                    )

                  ) : (
                    <span>Date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className='w-auto p-0 bg-zion-blue-dark border-zion-blue-light'
                align='start'
              >
                <CalendarComponent
                  initialFocus
                  mode='range'                  defaultMonth={dateRange?.from}

          </Button>
        </div>
      </CardContent>
    </Card>