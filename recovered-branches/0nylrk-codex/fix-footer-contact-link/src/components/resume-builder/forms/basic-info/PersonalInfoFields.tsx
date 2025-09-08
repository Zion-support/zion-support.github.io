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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,

<<<<<<< HEAD
=======
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";
interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>;
}


import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",

import {


<<<<<<< HEAD
import { Input } from "@/components/ui/input";"
import { Control } from "react-hook-form";"
import { BasicInfoFormData } from "./schema";
interface PersonalInfoFieldsProps {}
  control: Control<BasicInfoFormData>;

}



interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>;

}
export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
  return (

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

=======
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,";
} from "@/components/ui/form";"
  "control": Control<BasicInfoFormData>;
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

            <FormControl>;

              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;

=======
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
;
      <FormField;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <FormLabel>Professional Title</FormLabel>;

<<<<<<< HEAD
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}"
        name="title";
        render={({ field }) => (;
          <FormItem>;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <FormControl>;

              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;
<<<<<<< HEAD


=======
          </FormItem>;
        )}
      />;
;
      <FormField;
        control={control}
        name="email";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Email</FormLabel>;
            <FormControl>;
              <Input type="email" placeholder="john@example.com" {...field} />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="email";
        render={({ field }) => (

<<<<<<< HEAD
=======
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );
}
;

<<<<<<< HEAD
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  );
}
  )
}
;


"
>>>>>>> origin/cursor/delete-old-data-records-6bba
