
}


import {Certification} from '@/types/resume';''
import {format} from 'date-fns';'
interface CertificationsSectionProps {
  // TODO: Implement
}
  certifications: Certification[]'
import {Certification} from '@/types / resume';''
import {format} from 'date - fns';'
interface CertificationsSectionProps {
  // TODO: Implement
}
  certifications: Certification[];
}


'
import {Certification} from '@/types/resume';''
import {format} from 'date-fns';'
interface CertificationsSectionProps {
  // TODO: Implement
}
  certifications: Certification[]
'
import { Certification } from '@/types/resume',;''
import { format } from 'date-fns',;'
interface CertificationsSectionProps {;
  certifications: Certification[];



}
;
export function CertificationsSection({ certifications }: CertificationsSectionProps) {;
  const formatDate = (date: Date | string | undefined) => {;'
    if (!date) return '',;''
    if (typeof date === 'string') {;''
      return format(new Date(date), 'MMM yyyy');'
    }
'
    return format(date, 'MMM yyyy')'
  },


  if (certifications.length === 0) return null,
  '
    return format(date, 'MMM yyyy');'
  };'
    return format(date, 'MMM yyyy')'
  },

  if (certifications.length === 0) return null,
  
  return (
    <div>
</div>'
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>""
      <div className="space-y-2">"
</div>"
          <div key={cert.id |index} className="space-y-1">"
</div>"
            <div className="flex justify-between">"
</div>"
              <h3 className="text-sm font-medium">{cert.name}</h3>""
                <span className="text-sm">"
</span>
                </span>
            </div>;"
            <p className="text-sm">{cert && cert.issuing_organization}</p>;""
              <p className="text-sm">;"
</p>"
                <a href={cert && cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;"
</a>
                </a>;
              </p>;
          </div>;
      </div>;
    </div>;
    <div>;
</div>"
      <h2 className="text-lg font-semibold border-b mb-3">Certifications</h2>;""
      <div className="space-y-2">;"
</div>"
          <div key={cert.id || index} className="space-y-1">;"
</div>"
            <div className="flex justify-between">;"
</div>"
              <h3 className="text-sm font-medium">{cert.name}</h3>;""
                <span className="text-sm">;"
</span>
                </span>;
                </span>;
            </div>;"
            <p className="text-sm">{cert.issuing_organization}</p>;""
              <p className="text-sm">;"
</p>"
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">;"
</a>
                </a>;)
              </p>;            )}
          </div>;
      </div>;
    </div>;
    <div>;
</div>"
      <h2 className="text - lg font - semibold border - b mb - 3">Certifications</h2>;""
      <div className="space - y-2">;"
</div>"
          <div key={cert.id || index} className="space - y-1">;"
</div>"
            <div className="flex justify - between">;"
</div>"
              <h3 className="text - sm font - medium">{cert.name}</h3>;""
                <span className="text - sm">;"
</span>
                </span>)}
            </div>;"
            <p className="text - sm">{cert.issuing_organization}</p>;""
              <p className="text - sm">;"
</p>"
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text - blue - 600 hover:underline">;"
</a>
                </a>;
              </p>)}
          </div>))}
      </div>;
    </div>);
}</span>) 
}</div> View Credential </Link> </p>) 
}</div>) ) 
}</div> </div>) 
            </div>"
            <p className="text-sm">{cert.issuing_organization}</p>""
              <p className="text-sm">"
</p>"
                <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">"
</a>
                </Link>
              </p>
          </div>
      </div>
    </div>"