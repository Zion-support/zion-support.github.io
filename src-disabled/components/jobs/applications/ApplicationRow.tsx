

:src/components/jobs/applications/ApplicationRow.tsx
import { formatDistanceToNow } from 'date-fns'
import { Calendar, User, FileText, BarChart } from 'lucide-react'
        <div className='flex items-center gap-1'>
          <Calendar className='h-4 w-4 text-muted-foreground' />
          <span>
            {formatDistanceToNow(new Date(application.created_at), {
              addSuffix: true
            })}
          </span>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={application.status} />
      </TableCell>
      <TableCell>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => onViewScore(application)}
          className='flex items-center gap-1'        >
          <BarChart className='h-4 w-4 mr-1' />
          <Button variant='ghost' size='sm' asChild>
            <a
              href={application.resume.file_url |'#'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FileText className='h-4 w-4 mr-1' /> View
            </a>
ursor/fix-website-loading-errors-and-merge-6662
          </AvatarPrimitive>;
          <div>;
            <div className='font-medium'>{talentName}</div>;
            <div className='text-xs text-muted-foreground'>;
              {application && application.talent_profile?.professional_title || 'Talent'}
    application_id: string,
    new_status: ApplicationStatus) => Promise < void>;
  onViewScore: (application: JobApplication) => void;
interface ApplicationRowProps {
  application: JobApplication,
  processing_id: string | null,
  onViewApplication: (application_id: string, ) => Promise < void>,
  onStatusChange: (application_id: string, new_status: ApplicationStatus, ) => Promise < void>,
  onViewScore: (application: JobApplication, ) => void;
          application = {application,}
          processingId = {processingId,}
          onViewApplication = {onViewApplication,}
          onStatusChange = {onStatusChange,}
        />
      </TableCell>
    </TableRow>
  );
};
}

  );
;
