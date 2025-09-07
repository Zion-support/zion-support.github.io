

<<<<<<< HEAD
=======

pr-12325
>>>>>>> origin/main
import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { Button  } from '@/components/ui/button';
import { Form  } from '@/components/ui/form';
import { Certification  } from '@/types/resume';
import { Loader2  } from 'lucide-react';
import { useResume  } from '@/hooks/useResume';
import { Alert, AlertDescription  } from '@/components/ui/alert';
import { zodResolver  } from '@hookform/resolvers/zod';
import { format  } from 'date-fns';
import { CertificationsList  } from './CertificationsList';
import { CertificationFormFields  } from './CertificationFormFields';
import { CertificationFormValues, certificationSchema } from './types';interface CertificationsFormProps {

  resumeId: string
  certifications: Certification[]
  onComplete: () => void

  onBack: () => void
}

  };

  const handleEdit = (cert: Certification) => {
    setEditingId(cert.id!);
    form.reset({
      ...cert
      issue_date: formatDateValue(cert.issue_date)
      expiration_date: formatDateValue(cert.expiration_date)})
  }
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      await deleteCertification(id)
    }

  };

  },;

  const handleEdit = (cert: Certification) => {;
    setEditingId(cert && cert.id!);
    form && form.reset({;
      ...cert,;
      issue_date: formatDateValue(cert && cert.issue_date),;
      expiration_date: formatDateValue(cert && cert.expiration_date)})
};
  return (
      }
    }
  },;
;
  const handleEdit = (cert:Certification) => {;
    setEditingId(cert.id!),;
    form.reset({;
      ...cert,;
      issue_date:formatDateValue(cert.issue_date),;
      expiration_date:formatDateValue(cert.expiration_date)}),;
  },;
;
  const handleDelete = async (id:string) => {;
    if (confirm('Are you sure you want to delete this certification?')) {;
      await deleteCertification(id);
    }
  },;
;
  return (;
    <div className="space-y-6">;
      <div>;
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>;
        <p className="text-muted-foreground">;
          Add any professional certifications, licenses, or credentials you have earned.;
        </p>;
      </div>;

      {certifications && certifications.length > 0 && (;
        <CertificationsList
import { CertificationFormValues, certificationSchema } from './types';
<<<<<<< HEAD

=======
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import {Form} from '@/components/ui/form';
import {Certification} from '@/types/resume';
import {Loader2} from 'lucide-react';
import {useResume} from '@/hooks/useResume';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {zodResolver} from '@hookform/resolvers/zod';
import {format} from 'date-fns';
import {CertificationsList} from './CertificationsList';
import {CertificationFormFields} from './CertificationFormFields';
import {CertificationFormValues, certificationSchema} from './types';


import { useState  } from 'react';''
import { useForm  } from 'react-hook-form';''
import { Button  } from '@/components/ui/button';''
import { Form  } from '@/components/ui/form';''
import { Certification  } from '@/types/resume';''
import { Loader2  } from 'lucide-react';''
import { useResume  } from '@/hooks/useResume';''
import { Alert, AlertDescription  } from '@/components/ui/alert';''
import { zodResolver  } from '@hookform/resolvers/zod';''
import { format  } from 'date-fns';''
import { CertificationsList  } from './CertificationsList';''
import { CertificationFormFields  } from './CertificationFormFields';''
import { CertificationFormValues, certificationSchema } from './types';''
import {useState} from 'react';''
import {useForm} from 'react-hook-form';''
import {Button} from '@/components/ui/button';''
import {Form} from '@/components/ui/form';''
import {Certification} from '@/types/resume';''
import {Loader2} from 'lucide-react';''
import {useResume} from '@/hooks/useResume';''
import {Alert, AlertDescription} from '@/components/ui/alert';''
import {zodResolver} from '@hookform/resolvers/zod';''
import {format} from 'date-fns';''
import {CertificationsList} from './CertificationsList';''
import {CertificationFormFields} from './CertificationFormFields';''
import {CertificationFormValues, certificationSchema} from './types';'
>>>>>>> origin/main
interface CertificationsFormProps {
  // TODO: Implement
}
  resumeId: string;,
  certifications: Certification[]
  onComplete: () => void;,
  onBack: () => void;

import {use_form} from 'react - hook - form';
import {Button} from '@/components / ui / button';
import {Form} from '@/components / ui / form';
import {Certification} from '@/types / resume';
import {use_resume} from '@/hooks / use_resume';
import {Alert, AlertDescription} from '@/components / ui / alert';
import {zod_resolver} from '@hookform / resolvers / zod';
import {format} from 'date - fns';
export function CertificationsForm({ resumeId, certifications, onComplete, onBack }: CertificationsFormProps) {;


  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume();
<<<<<<< HEAD

  const [editingId, setEditingId] = useState<string | null>(null),
  const [error, setError] = useState<string | null>(null),

  // Helper function to format dates as strings for form inputs
  const formatDateValue = null;

                      credential_url: ''})
                  } else {
                    onBack()
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>
=======

  const [editingId, setEditingId] = useState<string | null>(null);
</string>
  const [error, setError] = useState<string | null>(null);
  const [editing_id, setEditingId] = useState < string | null>(null);
  const [error, set_error] = useState < string | null>(null);
;
  // Helper function to format dates as strings for form inputs;

  const { addCertification, updateCertification, deleteCertification, isLoading } = useResume(),;
  const [editingId, setEditingId] = useState<string | null>(null),;
  const [error, setError] = useState<string | null>(null),;
  const form = useForm<CertificationFormValues>({;

)

    <div className="space-y-6">;"
</div>
      <div>;
</div>"
        <h2 className="text-xl font-semibold mb-2">Certifications & Licenses</h2>;""
        <p className="text-muted-foreground">;"
</p>
        </p>;
      </div>;
        <CertificationsList;
pr-12325
          certifications={certifications} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />;
      )}

      <div className="bg-muted/40 p-6 rounded-lg">;
        <h3 className="text-md font-medium mb-4">;
          {editingId ? 'Update Certification' : 'Add Certification'}
        </h3>;

        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;
            <CertificationFormFields form={form} />;

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">;
              <Button
                type="button"
                variant="outline"
                onClick={() => {;
                  if (editingId) {;
                    setEditingId(null);
"
</CertificationsList>"
      <div className="bg-muted/40 p-6 rounded-lg">;"
        <h3 className="text-md font-medium mb-4">;"
</h3>
        </h3>;
        <Form {...form}>;
)"
          <form onSubmit={form && form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;"
</form>
            <CertificationFormFields form={form} />;
>>>>>>> origin/main

            {error && <Alert variant="destructive"><AlertDescription>{error}}""
            <div className="flex justify-between pt-2">;"
              <Button;"
                type="button"""
                variant="outline""
                onClick={() => {;

              ;"
              <div className="flex gap-2">;"
                <Button type="submit" disabled={isLoading}>;"
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
</Loader2>
                <Button type="button" onClick={onComplete}>;"
    <div className="space - y-6">;"
        <h2 className="text - xl font - semibold mb - 2">Certifications & Licenses</h2>;""
        <p className="text - muted - foreground">;"
          on_edit={handle_edit}
          on_delete={handle_delete}
        />)}
      <div className="bg - muted / 40 p - 6 rounded - lg">;"
        <h3 className="text - md font - medium mb - 4">;"
          <form on_submit={form.handle_submit (handleAddOrUpdate)} className="space - y-4">;"
            <div className="flex justify - between pt - 2">;"
                type="button";""
                variant="outline";"
                on_click={() => {

              <div className="flex gap - 2">;"
                <Button type="submit" disabled={is_loading}>;"
                  {is_loading && <Loader2 className="mr - 2 h - 4 w - 4 animate - spin" />}"
                <Button type="button" on_click={on_complete}>;"

        <CertificationsList ;
          certifications={certifications} ;
          onEdit={handleEdit} ;
          onDelete={handleDelete} ;
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">;"


          </form>;
    </div>;"
  ),; return (<div className="space-y-6" > <div> <h2 className="text-xl font-semibold mb-2" >Certifications & Licenses</h2> <p className="text-muted-foreground" > Add any professional certifications, licenses, or credentials you have earned. </p> </div> {"
  certifications.length > 0 && (<CertificationsList certifications= {
  certifications;
}onEdit= {
  handleEdit;
}onDelete= {
  handleDelete;)
}/>) 
}<div className="flex justify-between pt-2" > <Button if (editingId) {"
} Next  </div> </div> </form>  </div> </div>) "
pr-12325
</div>
}</Button> Next </Button> </div> </div> </form> </Form> </div> </div>) "

