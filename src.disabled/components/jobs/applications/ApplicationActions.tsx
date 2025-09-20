import { Eye,,, ChevronDown,,, Loader2,,  } from 'lucide-react'
import { JobApplication,,, ApplicationStatus,,  } from "
interface ApplicationActionsProps {
onStatusChange,
}: ApplicationActionsProps) {
  return (
    <div className='flex items-center justify-end gap-2'>
      <Button
variant='outline'
        size='sm'
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}    <div className="flex items-center justify-end gap-2">
      <Button
variant="outline"
        size="sm"
        onClick = {(,) => onViewApplication(application.id),}
        disabled = {!!application.viewed_at,}
      >
        <Eye className='h-4 w-4' />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
variant='outline'
            size='sm'
            disabled={processingId === application.id}          >
            {processingId === application.id ? (
              <Loader2 className='h-4 w-4 animate-spin' />
            ) : (
              <>
                Status <ChevronDown className='h-4 w-4 ml-1' />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem
onClick={() => onStatusChange(application.id, 'shortlisted')}
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem
onClick={() => onStatusChange(application.id, 'interview')}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem
onClick={() => onStatusChange(application.id, 'hired')}          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem
onClick = {() => onStatusChange(application.id, "interview"),}          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem
onClick = {() => onStatusChange(application.id, "hired"),}
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
onClick={() => onStatusChange(application.id, 'rejected')}
            className='text-red-600'          >            onClick={() => onStatusChange(application.id, "hired")}
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
onClick={() => onStatusChange(application.id, "rejected")}
            className="text-red-600"
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
          Contact
        </Link>
      </Button>
    </div>
  )
}