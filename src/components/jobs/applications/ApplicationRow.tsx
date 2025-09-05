import Image from 'next/image'; // Import next/image
import React, {_useState} from 'react'; // Import useState

interface ApplicationRowProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (_application: JobApplication) => void;}

export function ApplicationRow(_{_application, _processingId, _onViewApplication, _onStatusChange, _onViewScore}: ApplicationRowProps) {_const [avatarError, _setAvatarError] = useState(false);
  const _talentName = application.talent_profile?.full_name || "Unknown";

  return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <AvatarPrimitive className="h-9 w-9"> {_/* Using renamed AvatarPrimitive */}
            {_application.talent_profile?.profile_picture_url && !avatarError ? (
              <Image
                src={application.talent_profile.profile_picture_url} 
                alt={_talentName}
                width={_36} // Corresponds to h-9 w-9 (9 * 4px = 36px)
                height={_36} // Corresponds to h-9 w-9
                className="rounded-full object-cover" // Ensure rounded and object-cover
                onError={_() => setAvatarError(true)}
                priority={_false}
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </AvatarPrimitive>
          <div>
            <div className="font-medium">
              {_talentName}
            </div>
            <div className="text-xs text-muted-foreground">
              {_application.talent_profile?.professional_title || "Talent"}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{_formatDistanceToNow(new Date(application.created_at), _{ addSuffix: true})}</span>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={_application.status} />
      </TableCell>
      <TableCell>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={_() => onViewScore(application)}
          className="flex items-center gap-1"
        >
          <BarChart className="h-4 w-4 mr-1" />
          <ScoreBadge application={_application} />
        </Button>
      </TableCell>
      <TableCell>
        {_application.resume ? (
          <Button variant="ghost" size="sm" asChild>
            <a href={application.resume.file_url || "#"} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-1" /> View
            </a>
          </Button>
        ) : (
          <span className="text-muted-foreground text-sm">No resume</span>
        )}
      </TableCell>
      <TableCell className="text-right">
        <ApplicationActions
          application={_application}
          processingId={_processingId}
          onViewApplication={_onViewApplication}
          onStatusChange={_onStatusChange}
        />
      </TableCell>
    </TableRow>
  );
}
