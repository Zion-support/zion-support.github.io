export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange,
}: ApplicationActionsProps) {
  return (

      >
        <Eye className='h-4 w-4' />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>

          >
            {processingId === application.id ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <>
                Status <ChevronDown className='h-4 w-4 ml-1' />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>

          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >

          >

            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant='default' size='sm' asChild>        <Link href={`/messages?talentId=${application.talent_id}`}>

      <Button 
        variant="default" 
        size="sm"
        asChild
      >

        <Link href={`/messages?talentId=${application.talent_id}`}>

          Contact
        </Link>
      </Button>
    </div>
  );
}