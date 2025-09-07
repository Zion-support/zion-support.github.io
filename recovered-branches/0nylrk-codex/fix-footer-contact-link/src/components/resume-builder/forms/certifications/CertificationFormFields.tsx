<<<<<<< HEAD
FormField,

interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types';
interface CertificationFormFieldsProps {;
  form: UseFormReturn<CertificationFormValues>;
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,

import {FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {UseFormReturn} from 'react-hook-form';
import {CertificationFormValues} from './types';

interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types';
interface CertificationFormFieldsProps {;
  form: UseFormReturn<CertificationFormValues>;

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,

} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

import { CertificationFormValues } from "./types";
interface CertificationFormFieldsProps {}
  form: UseFormReturn<CertificationFormValues>;
}

=======
<<<<<<< HEAD

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { CertificationFormValues } from './types';
interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>
}
export function CertificationFormFields({
  form
}: CertificationFormFieldsProps) {
}

export function CertificationFormFields({
  form,
}: CertificationFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certification Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="AWS Certified Solutions Architect, PMP, etc."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issuing_organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issuing Organization</FormLabel>
              <FormControl>
                <Input
                  placeholder="Amazon Web Services, PMI, etc."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="issue_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value |""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expiration_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiration Date (Optional)</FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value |""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="credential_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credential ID (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="ABC123XYZ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
=======
FormField,

<<<<<<< HEAD
interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types';
interface CertificationFormFieldsProps {;
  form: UseFormReturn<CertificationFormValues>;
=======
<<<<<<< HEAD
  FormField,
FormField,
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  FormField,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
<<<<<<< HEAD
=======
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { UseFormReturn  } from './react - hook - form';
import { CertificationFormValues  } from './types';

<<<<<<< HEAD

interface CertificationFormFieldsProps {
  form: UseFormReturn < CertificationFormValues>;
}
=======
interface CertificationFormFieldsProps {
  form: UseFormReturn < CertificationFormValues>;
}

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {UseFormReturn} from 'react-hook-form';
import {CertificationFormValues} from './types';

interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types';
interface CertificationFormFieldsProps {;
  form: UseFormReturn<CertificationFormValues>;

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,

<<<<<<< HEAD
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
=======
<<<<<<< HEAD
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { CertificationFormValues } from "./types";
interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>;
}
export function CertificationFormFields({
  form
}: CertificationFormFieldsProps) {


}
export function CertificationFormFields(): any ({ form }: CertificationFormFieldsProps) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { CertificationFormValues } from "./types";
interface CertificationFormFieldsProps {}
  form: UseFormReturn<CertificationFormValues>;
}

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function CertificationFormFields({}
  form,
}: CertificationFormFieldsProps) {}
  return (;
    <>;"
<<<<<<< HEAD
=======
=======
export function CertificationFormFields(): any ({ form }: CertificationFormFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;
          control={form && form.control}"
          name="name"
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export /**
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
 * CertificationFormFields - Function description

 */
function CertificationFormFields() {}
  return (

        <FormField;
          control={form.control}"
          name="name";
<<<<<<< HEAD

          name="issuing_organization";

          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>"
                <Input type="date" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

          name="expiration_date"

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input"
                  type="date" 
                  {...field}
                  value={field && field.value || ''}
                />;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
          name="issuing_organization";

          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>"
                <Input type="date" {...field} value={field.value || ""} />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Certification Name</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder="AWS Certified Solutions Architect, PMP, etc.";
                  {...field}
<<<<<<< HEAD
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Certification Name</FormLabel>;
              <FormControl>;
                <Input placeholder="AWS Certified Solutions Architect, PMP, etc." {...field} />;

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types',;
;
interface CertificationFormFieldsProps {;
  form:UseFormReturn<CertificationFormValues>;
}
;
export function CertificationFormFields({ form } CertificationFormFieldsProps) {;
  return (;
    <>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;
          control={form.control}
          name="name";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Certification Name</FormLabel>;
              <FormControl>;
                <Input placeholder="AWS Certified Solutions Architect, PMP, etc." {...field} />;
              </FormControl>;
              <FormMessage />;
<<<<<<< HEAD
            </FormItem>;          )}
        />;
;
        <FormField;
          control={form.control}
          name="issuing_organization";
=======
            </FormItem>;
          )}
        />;


        <FormField
          control={form && form.control}
          name="issuing_organization"

                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="issuing_organization";

          render={({ field }) => (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <FormItem>;
              <FormLabel > Issuing Organization</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder="Amazon Web Services, PMI, etc.";
                  {...field}

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Issuing Organization</FormLabel>;
              <FormControl>;
                <Input placeholder="Amazon Web Services, PMI, etc." {...field} />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD

          control={form && form.control}

          name="credential_id"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential ID (Optional)</FormLabel>;

=======
        />;
      </div>;
<<<<<<< HEAD
;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;
          control={form.control}
          name="issue_date";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Issue Date</FormLabel>;
              <FormControl>;
                <Input ;
                  type="date" ;
                  {...field}
                  value={field.value || ''}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;          )}
        />;
<<<<<<< HEAD

        <FormField;
          control={form.control}"
          name="issue_date";
          render={({ field }) => (

              <FormControl>;
                <Input placeholder="ABC123XYZ" {...field} />;
              </FormControl>;
              <FormMessage />;

        />;

        <FormField
          control={form && form.control}
          name="credential_url"

            </FormItem>)}
=======
;
        <FormField;
          control={form.control}
          name="expiration_date";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input ;
                  type="date" ;
                  {...field}
                  value={field.value || ''}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>;
}

export function CertificationFormFields({
  form,
}: CertificationFormFieldsProps) {

import {FormField, FormItem, FormLabel, FormControl, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {UseFormReturn} from 'react-hook-form';
import {CertificationFormValues} from './types';
interface CertificationFormFieldsProps {
  form: UseFormReturn<CertificationFormValues>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form',;
import { Input } from '@/components/ui/input',;
import { UseFormReturn } from 'react-hook-form',;
import { CertificationFormValues } from './types';
interface CertificationFormFieldsProps {;
  form: UseFormReturn<CertificationFormValues>;
}

export function CertificationFormFields({ form }: CertificationFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certification Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="AWS Certified Solutions Architect, PMP, etc."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        <FormField
          control={form && form.control}
          name="issue_date"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Issue Date</FormLabel>;
              <FormControl>;
                <Input

        />;
        <FormField;

        />
        <FormField
          control={form.control}
          name="issuing_organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issuing Organization</FormLabel>
              <FormControl>
                <Input
                  placeholder="Amazon Web Services, PMI, etc."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="issue_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value |""} />
=======

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;

        <FormField
          control={form && form.control}
          name="issue_date"


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Input 
                  type="date" 
                  {...field}
                  value={field.value || ''}
                />
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
<<<<<<< HEAD
        />
        <FormField
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        />;
        <FormField;
=======

<<<<<<< HEAD
=======
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Issue Date</FormLabel>;
              <FormControl>;
                <Input
=======

        />;
        <FormField;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          control={form.control}
<<<<<<< HEAD
          name="credential_url";

=======
          name="expiration_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiration Date (Optional)</FormLabel>
              <FormControl>
<<<<<<< HEAD
                <Input type="date" {...field} value={field.value |""} />
              </FormControl>
              <FormMessage />
            </FormItem>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Input 

                  type="date" 
                  {...field}
                  value={field && field.value || ''}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
<<<<<<< HEAD
=======



          )}
        />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <FormField
          control={form && form.control}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          name="expiration_date"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input"
                  type="date" 
                  {...field}
                  value={field && field.value || ''}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
<Input type="date" {...field} value={field.value |""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="credential_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credential ID (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="ABC123XYZ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
>>>>>>> merged-prs-20250907-203621
          name="credential_url"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credential URL (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://www.credential.com/verify/abc123"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
      </div>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          control={form && form.control}

          name="credential_id"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential ID (Optional)</FormLabel>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;

        <FormField;
          control={form.control}"
          name="issue_date";
          render={({ field }) => (
<<<<<<< HEAD

=======
            <FormItem>;
              <FormLabel > Issue Date</FormLabel>;
              <FormControl>;
                <Input type="date" {...field} value={field.value || ""} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="expiration_date";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input type="date" {...field} value={field.value || ""} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
        <FormField;
          control={form.control}
          name="credential_id";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Credential ID (Optional)</FormLabel>;
      </div>;
;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
        <FormField;
          control={form.control}
          name="credential_id";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential ID (Optional)</FormLabel>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <FormControl>;
                <Input placeholder="ABC123XYZ" {...field} />;
              </FormControl>;
              <FormMessage />;
<<<<<<< HEAD

        />;

        <FormField
          control={form && form.control}
          name="credential_url"

            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="credential_url";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credential URL (Optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://www.credential.com/verify/abc123"
                  {...field}
<<<<<<< HEAD
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
;

<FormItem>
              <FormLabel>Credential URL (Optional)</FormLabel>
}
;
"
</FormField>"
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
          control={form.control}"
          name="name";")
          render={({ field }) => (

            <FormItem>

              <FormLabel>Certification Name
              <FormControl>

                <Input;"
                  placeholder="AWS Certified Solutions Architect, PMP, etc.""
                  {...field}
                />

              <FormMessage />

          name="issuing_organization"")

              <FormLabel>Issuing Organization

                  placeholder="Amazon Web Services, PMI, etc.""

              ;
              <FormMessage />;
)
            )}
          name="issuing_organization";"

              <FormLabel>Issue Date
                <Input type="date" {...field} value={field.value || ""} />"

            <FormItem>;

              <FormLabel>Issue Date;
              <FormControl>;

                <Input;
          name="expiration_date"")

              <FormLabel>Expiration Date (Optional)

          name="expiration_date""
          render={({ field }) => (;

              <FormLabel>Expiration Date (Optional);

                  type="date""
                  {...field}"
                  value={field && field.value || }
                />;

      </div>;
</div>"

              <FormLabel > Issuing Organization;

                  placeholder="Amazon Web Services, PMI, etc.";"
          name="credential_id""

              <FormLabel>Credential ID (Optional);

      </div>;"
          name="issue_date";"

              <FormLabel > Issue Date;
                <Input type="date" {...field} value={field.value || ""} />;"

          name="expiration_date";"

              <FormLabel > Expiration Date (Optional);

          name="credential_id";"

              <FormLabel > Credential ID (Optional);
                <Input placeholder="ABC123XYZ" {...field} />;"

          name="credential_url""

          name="credential_url";"

              <FormLabel>Credential URL (Optional)

                  placeholder="https://www.credential.com/verify/abc123""

    </>
  );

                  {...field}
                />
</Input>
              </FormControl>
              <FormMessage />
</FormMessage>
            </FormItem>
      </div>
    </>
  );
}

;

            <FormItem>
</FormItem>
              <FormLabel>Credential URL (Optional)</FormLabel>
              <FormControl>
</FormControl>
                <Input;"
                  placeholder="https://www.credential.com/verify/abc123""
                  {...field}
                />
</Input>
              </FormControl>
              <FormMessage />
</FormMessage>
            </FormItem>
      </div>
    </>
  );
}
;

  ),;}
  <FormMessage /> ) 

}/> <FormField  <FormMessage /> ) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Issue Date <FormControl> <Input />  <FormMessage /> )"
}/> <FormField <FormItem> <FormLabel>Expiration Date (Optional)  <FormControl> <Input />  <FormMessage /> ) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField  <FormMessage /> )"
}/> <FormField <FormItem> <FormLabel>Credential window.URL (Optional)  <FormControl>  <FormMessage /> ) 

}/> </div> </>) 
pr-12325
<<<<<<< HEAD

  );
}
  )
}
;
}
;
=======
=======
            </FormItem>;          )}
        />;
;
        <FormField;
          control={form.control}
          name="credential_url";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Credential URL (Optional)</FormLabel>;
              <FormControl>;
                <Input placeholder="https://www.credential.com/verify/abc123" {...field} />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
      </div>;
    </>;
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
    </>);
}

  )
}
;

<<<<<<< HEAD
  ),;}
 </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Issue Date</FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Expiration Date (Optional) </FormLabel> <FormControl> <Input /> </FormControl> <FormMessage /> </FormItem>) 
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Credential window.URL (Optional) </FormLabel> <FormControl> </FormControl> <FormMessage /> </FormItem>) 
}/> </div> </>) 
}
  );
}
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  );
}
  )
}
;
<<<<<<< HEAD
}
;
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
