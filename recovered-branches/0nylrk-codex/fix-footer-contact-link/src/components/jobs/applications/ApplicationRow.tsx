

interface ApplicationRowProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;
  onViewScore: (_application: JobApplication) => void;}

export function ApplicationRow(_{_application, _processingId, _onViewApplication, _onStatusChange, _onViewScore}: ApplicationRowProps) {_return (
    <TableRow key={application.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            {_application.talent_profile?.profile_picture_url ? (
              <img 
                src={application.talent_profile.profile_picture_url} 
                alt={_application.talent_profile.full_name} 
              />
            ) : (
              <User className="h-5 w-5 text-gray-400" />
            )}
          </Avatar>
          <div>
            <div className="font-medium">
              {_application.talent_profile?.full_name || "Unknown"}
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
