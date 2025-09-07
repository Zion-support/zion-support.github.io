<<<<<<< HEAD
<<<<<<< HEAD

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
=======
  FormField,

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
<<<<<<< HEAD
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
=======
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { Control  } from './react - hook - form';
import { BasicInfoFormData  } from './schema';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control} from "react-hook-form";
import {BasicInfoFormData} from "./schema";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",

import {

<<<<<<< HEAD
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
interface PersonalInfoFieldsProps {}
  control: Control<BasicInfoFormData>;
>>>>>>> origin/chore/fix-lint-and-merge
}

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface PersonalInfoFieldsProps {
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>;
}
export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
  return (
<<<<<<< HEAD
=======
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
import { BasicInfoFormData } from "./schema";
interface PersonalInfoFieldsProps {;
  control: Control<BasicInfoFormData>;
}
export function PersonalInfoFields(): any ({ control }: PersonalInfoFieldsProps) {;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Full Name</FormLabel>;
export /**
 * PersonalInfoFields - Function description
 */
function PersonalInfoFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}
        name="full_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Full Name</FormLabel>;

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
<<<<<<< HEAD
import { BasicInfoFormData } from "./schema",;
;
interface PersonalInfoFieldsProps {;
  control:Control<BasicInfoFormData>;
}
;
export function PersonalInfoFields({ control } PersonalInfoFieldsProps) {;
  return (;
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField;
        control={control}
        name="fullName";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Full Name</FormLabel>;
=======
import { BasicInfoFormData } from "./schema";
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface PersonalInfoFieldsProps {;

  control: Control<BasicInfoFormData>;
}

export function PersonalInfoFields(): any ({ control }: PersonalInfoFieldsProps) {;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField
        control={control}
        name="fullName"

export /**
 * PersonalInfoFields - Function description
 */
function PersonalInfoFields() {
  return (
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">;
      <FormField;
        control={control}
        name="full_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Full Name</FormLabel>;

<<<<<<< HEAD
import { BasicInfoFormData } from "./schema",;
;
interface PersonalInfoFieldsProps {;
  control:Control<BasicInfoFormData>;
}
;
export function PersonalInfoFields({ control } PersonalInfoFieldsProps) {;

  return (;
interface PersonalInfoFieldsProps {;
  control: Control<BasicInfoFormData>;
}

export function PersonalInfoFields(): any ({ control }: PersonalInfoFieldsProps) {;
  return ("
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
      <FormField;
        control={control}"
        name="fullName"
export /**;
 * PersonalInfoFields - Function description;
 */
function PersonalInfoFields() {}
  return ("
    <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
      <FormField;
        control={control}"
        name="full_name";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Full Name</FormLabel>;

            <FormControl>;"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <FormControl>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="title";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Professional Title</FormLabel>;
=======

        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>

        )}

      />;

      <FormField
        control={control}
        name="title"
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Professional Title</FormLabel>;

          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}"
        name="title";
        render={({ field }) => (;
          <FormItem>;
<<<<<<< HEAD
            <FormLabel>Professional Title</FormLabel>;

=======
            <FormLabel > Professional Title</FormLabel>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <FormControl>;

              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="email";
=======

<<<<<<< HEAD
=======
      />;


      <FormField
        control={control}
        name="email"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Email</FormLabel>;
            <FormControl>;
<<<<<<< HEAD
              <Input type="email" placeholder="john@example.com" {...field} />;
=======
              <Input type="email" placeholder="john@example && example.com" {...field} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
<<<<<<< HEAD
      />;
        )}
      />
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder="Senior Software Engineer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="+1 234 567 8900" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
=======

      />;


      <FormField
        control={control}
        name="phone"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Phone</FormLabel>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="email";
        render={({ field }) => (
<<<<<<< HEAD
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="+1 234 567 8900" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
;

        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>"
              <Input placeholder="Senior Software Engineer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField;
        control={control}"
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>"
              <Input type="email" placeholder="john@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField;
        control={control}"
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>"
              <Input placeholder="+1 234 567 8900" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
;
=======
          <FormItem>;
            <FormLabel > Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="phone";
        render={({ field }) => (
          <FormItem>;
            <FormLabel > Phone</FormLabel>;
;
      <FormField;
        control={control}
        name="phone";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Phone</FormLabel>;
            <FormControl>;
              <Input placeholder="+1 234 567 8900" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>)}
      />;
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          </FormItem>;
        )}
      />;
    </div>;
  ),;}
 interface PersonalInfoFieldsProps {}
  control: Control<BasicInfoFormData> 
}export function PersonalInfoFields() { return null; }
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField control= {}
  control "
}name="fullName" render= {}
  ({}
  field "
}) => (<FormItem> <FormLabel>Full Name</FormLabel> <FormControl> <Input placeholder="John Doe" {}
  ...field;
}/> 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
});
}
}
;

  );
}
  )
}
;

<<<<<<< HEAD
"
=======
<<<<<<< HEAD
          </FormItem>;
        )}
      />;
    </div>;
  ),;}
 interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData> 
}export function PersonalInfoFields ({
  control 
}: PersonalInfoFieldsProps) {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField control= {
  control 
}name="fullName" render= {
  ({
  field 
}) => (<FormItem> <FormLabel>Full Name</FormLabel> <FormControl> <Input placeholder="John Doe" {
  ...field 
}/> 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div>) 
}
  );
}
}
;

  );
}
  )
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
