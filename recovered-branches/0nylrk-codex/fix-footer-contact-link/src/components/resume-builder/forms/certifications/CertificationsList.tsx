
import { Certification  } from '@/types/resume';
import { Card, CardContent  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Edit, Trash2  } from 'lucide-react';
import { format } from 'date-fns';
import {Certification} from '@/types/resume';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Edit, Trash2} from 'lucide-react';
import {format} from 'date-fns';
interface CertificationsListProps {
  certifications: Certification[];
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void
import { Certification } from '@/types/resume',;
import { Card, CardContent } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Edit, Trash2 } from 'lucide-react',;
import { format } from 'date-fns',;
interface CertificationsListProps {;
  certifications: Certification[],;
  onEdit: (cert: Certification) => void;
  onDelete: (id: string) => void;
}
export function CertificationsList({
  certifications
  onEdit
  onDelete
                  )}
                </p>;
              </div>;
              <div className="flex gap-2">;
                  onClick={() => onEdit(cert)}
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
            {cert.credential_url && (
              <p className="text - xs mt - 2">;
                <a;
                  href={cert.credential_url}
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">;
                  View credential;
                </a>;
              </p>;
            )}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text - primary hover:underline";
                >;
                  View credential;
                </a>;
              </p>)}
          </CardContent>;
        </Card>))}
    </div>);
}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View credential
                </Link>
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
