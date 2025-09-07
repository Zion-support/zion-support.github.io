<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  FormField,
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";"
import {Input} from "@/components/ui/input";"
import {Control} from "react-hook-form";"
import {BasicInfoFormData} from "./schema";"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form","
import { Input } from "@/components/ui/input","
import { Control } from "react-hook-form","
import { BasicInfoFormData } from "./schema",import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form","
import { BasicInfoFormData } from "./schema","
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
  FormField,

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {
  FormField
  FormItem
  FormLabel
  FormControl
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
<<<<<<< HEAD

=======
<<<<<<< HEAD
import {
=======
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface ContactFieldsProps {
  control: Control<BasicInfoFormData>
=======
=======
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { Control  } from './react - hook - form';
import { BasicInfoFormData  } from './schema';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",

import {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,";
} from "@/components/ui/form";"
<<<<<<< HEAD
  "control": Control<BasicInfoFormData>;
=======
import { Input } from "@/components/ui/input";"
import { Control } from "react-hook-form";"
import { BasicInfoFormData } from "./schema";
interface ContactFieldsProps {}
  control: Control<BasicInfoFormData>;
>>>>>>> origin/chore/fix-lint-and-merge
}

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ContactFieldsProps {
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
<<<<<<< HEAD

interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}
export function ContactFields({ control }: ContactFieldsProps) {
  return (
interface ContactFieldsProps {;

  control: Control<BasicInfoFormData>;
}

export function ContactFields(): any ({ control }: ContactFieldsProps) {;

        name="location";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Location</FormLabel>;

              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
>>>>>>> merged-prs-20250907-203621
}
export function ContactFields({ control }: ContactFieldsProps) {
  return (
<<<<<<< HEAD
=======
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="San Francisco, CA" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
<<<<<<< HEAD
        )}
      />
      <FormField
        control={control}
        name="website"
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema";
interface ContactFieldsProps {;
  control: Control<BasicInfoFormData>;
}
export function ContactFields(): any ({ control }: ContactFieldsProps) {;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="location"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
export /**
 * ContactFields - Function description
 */
function ContactFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Location</FormLabel>;

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
<<<<<<< HEAD
import { BasicInfoFormData } from "./schema",;
;
interface ContactFieldsProps {;
  control:Control<BasicInfoFormData>;
}
;
export function ContactFields({ control } ContactFieldsProps) {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField;
        control={control}
        name="location";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Location</FormLabel>;
=======
import { BasicInfoFormData } from "./schema";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ContactFieldsProps {;

  control: Control<BasicInfoFormData>;
}

export function ContactFields(): any ({ control }: ContactFieldsProps) {;

        name="location";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Location</FormLabel>;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="website";
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        )}

      />;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      <FormField
        control={control}
        name="website"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Website</FormLabel>;
            <FormControl>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
              <Input placeholder="https://yourwebsite.com" {...field} />;
=======
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <FormMessage />;
          </FormItem>;
        )});
}
;

}/> 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
}
        )}
<<<<<<< HEAD
      />
=======
<<<<<<< HEAD
      />
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Input placeholder="https://yourwebsite.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
<<<<<<< HEAD

      <FormField
        control={control}

        name="linkedin"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        control={control}
        name="linkedin";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > LinkedIn</FormLabel>;
            <FormControl>;
              <Input;
                placeholder="https://linkedin.com / in / username";
                {...field}
<<<<<<< HEAD
      />;
      <FormField
        control={control}
        name="linkedin"
      />;
;
      <FormField;
        control={control}
        name="linkedin";
=======

      />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      <FormField
        control={control}

        name="linkedin"
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Input placeholder="https://yourwebsite.com" {...field} />
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                placeholder="https://linkedin.com/in/username"
                {...field}
              />
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
<<<<<<< HEAD
      />
      <FormField
        control={control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input
                placeholder="https://linkedin.com/in/username"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
=======
      />;
;
      <FormField;
        control={control}
        name="github";
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>LinkedIn</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input placeholder="https://linkedin.com/in/username" {...field} />;
=======
              <Input placeholder="https://linkedin && linkedin.com/in/username" {...field} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </FormControl>;
            <FormMessage />;
          </FormItem>;
>>>>>>> merged-prs-20250907-203621
        )}
      />;
<<<<<<< HEAD
;
      <FormField;
        control={control}
        name="github";
=======


      <FormField
        control={control}
        name="github"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input placeholder="https://github && github.com/username" {...field} />;
<Input placeholder="https://github.com/username" {...field} />;
=======
<<<<<<< HEAD
              <Input placeholder="https://github.com/username" {...field} />;
=======
              <Input placeholder="https://github && github.com/username" {...field} />;
<<<<<<< HEAD
<Input placeholder="https://github.com/username" {...field} />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </FormControl>;
        name="github"        render={({ field }) => (;
          <FormItem>;
            <FormLabel>GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github && github.com/username" {...field} />;            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />
    </div>
<<<<<<< HEAD
=======
=======

      />;
    </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
;
} from "@/components/ui/form";""
import { Input } from "@/components/ui/input";""
import { Control } from "react-hook-form";""
import { BasicInfoFormData } from "./schema";"
interface ContactFieldsProps {
  // TODO: Implement
  control: Control<BasicInfoFormData>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      />
    </div>
  );
}
;

"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>
      <FormField;
        control={control}"
        name="location""
export /**
 * ContactFields - Function description;
 */
function ContactFields() {
  return ("
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
</FormField>
      <FormField;
        control={control}"
        name="location";")
        render={({ field }) => (
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel > Location</FormLabel>;
  control: Control<BasicInfoFormData>;
</BasicInfoFormData>"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>
      <FormField;
        control={control}"
        name="location""
export /**
 * ContactFields - Function description;
 */)
function ContactFields() {
  return ("
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;"
</FormField>
      <FormField;
        control={control}"
        name="location";")
        render={({ field }) => (
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel > Location</FormLabel>;
  control:Control<BasicInfoFormData>;
</BasicInfoFormData>"
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>
      <FormField;
        control={control}"
        name="location";")
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel>Location</FormLabel>;
            <FormControl>;
</FormControl>"
              <Input placeholder="San Francisco, CA" {...field} />;"
</Input>
            </FormControl>;
            <FormMessage />;
</FormMessage>
          <FormItem>
</FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
</FormControl>"
              <Input placeholder="San Francisco, CA" {...field} />"
</Input>

            </FormControl>
            <FormMessage />
</FormMessage>
          </FormItem>

      <FormField;
        control={control}"
        name="website"")
        render={({ field }) => (;
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel>Website</FormLabel>;
            <FormControl>;
</FormControl>"
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;"
</Input>"
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;"
</Input>
            </FormControl>;
            <FormMessage />;
</FormMessage>
          </FormItem>;)
          </FormItem>)}
      <FormField;
        control={control}"
        name="website";"
        render={({ field }) => (
</FormField>
          <FormItem>;
</FormItem>
            <FormLabel > Website</FormLabel>;
            <FormControl>;
</FormControl>"
              <Input placeholder="https://yourwebsite.com" {...field} />;"
</Input>
            </FormControl>;
            <FormMessage />;
</FormMessage>)
          </FormItem>)}
      <FormField;

        name="location";")
        render={({ field }) => (

          <FormItem>;

            <FormLabel > Location;
 */)

  control:Control<BasicInfoFormData>;
        render={({ field }) => (;

            <FormLabel>Location;
            <FormControl>;
              <Input placeholder="San Francisco, CA" {...field} />;"

            ;
            <FormMessage />;

          <FormItem>

            <FormLabel>Location
            <FormControl>
              <Input placeholder="San Francisco, CA" {...field} />"

            <FormMessage />

        name="website"")

            <FormLabel>Website;
              <Input placeholder="https://yourwebsite && yourwebsite.com" {...field} />;"

          ;)
          )}
        name="website";"

            <FormLabel > Website;
              <Input placeholder="https://yourwebsite.com" {...field} />;"

)

        name="linkedin";"

            <FormLabel > LinkedIn;

              <Input;"
                placeholder="https://linkedin.com / in / username";"
                {...field}

      />;

        name="linkedin"")

            <FormLabel>LinkedIn

                placeholder="https://linkedin.com/in/username""
              />

                {...field}
              />
</Input>
            </FormControl>
            <FormMessage />
</FormMessage>
          </FormItem>
        )}
      />

        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>

              <Input placeholder="https://github.com/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}

      />
    </div>
  );
}
  )
}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
=======
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="github";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > GitHub</FormLabel>;
            <FormControl>;
              <Input placeholder="https://github.com / username" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
    </div>);
}
<<<<<<< HEAD

  )
}
;

  ),;}
 interface ContactFieldsProps {
  control: Control<BasicInfoFormData> 
}export function ContactFields ({
  control 
}: ContactFieldsProps) {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField control= {
  control 
}name="location" render= {
  ({
  field 
}) => (<FormItem> <FormLabel>Location</FormLabel> <FormControl> <Input placeholder="San Francisco, CA" {
  ...field 
}/> 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
}
        )}
      />
      <FormField
        control={control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder="https://yourwebsite.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input
                placeholder="https://linkedin.com/in/username"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
  )
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
