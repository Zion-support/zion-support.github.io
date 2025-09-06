import {useState} from 'react';
import {use_form} from 'react - hook - form';
import {Button} from '@/components / ui / button';
import {Form} from '@/components / ui / form';
import {Certification} from '@/types / resume';
import {Loader2} from 'lucide-react';
import {use_resume} from '@/hooks / use_resume';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {zod_resolver} from '@hookform / resolvers / zod';
import {format} from 'date - fns';
import {CertificationsList} from './CertificationsList';
import {CertificationFormFields} from './CertificationFormFields';
  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
      } else {
        success = await add_certification (resume_id, cert_data);
      }
    }
  }
  return (
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
                  }
                }}
              >;
                {editingId ? 'Cancel' : 'Back'}
                  Next;
                </Button>;
              </div>;
            </div>;
          </form>;
        </Form>;
      </div>;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
