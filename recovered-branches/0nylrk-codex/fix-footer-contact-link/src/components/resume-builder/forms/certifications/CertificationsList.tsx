

interface CertificationsListProps {_certifications: Certification[];
  onEdit: (_cert: Certification) => void;
  onDelete: (_id: string) => void;}

export function CertificationsList(_{_certifications, _onEdit, _onDelete}: CertificationsListProps) {_if (certifications.length === 0) {
    return null;}

  return (_<div className="space-y-4">
      <h3 className="text-md font-medium">Added Certifications</h3>
      {_certifications.map((cert) => (
        <Card key={cert.id} className="bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{_cert.name}</h4>
                <p className="text-sm text-muted-foreground">{_cert.issuing_organization}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Issued: {_cert.issue_date ? (typeof cert.issue_date === 'string' 
                    ? cert.issue_date 
                    : format(cert.issue_date, _'MMM yyyy')) : 'N/A'}
                  {_cert.expiration_date && (
                    <> · Expires: {typeof cert.expiration_date === 'string' 
                      ? cert.expiration_date 
                      : format(cert.expiration_date, _'MMM yyyy')}
                    </>
                  )}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={_() => onEdit(cert)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={_() => onDelete(cert.id!)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {_cert.credential_url && (
              <p className="text-xs mt-2">
                <a 
                  href={cert.credential_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View credential
                </a>
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
