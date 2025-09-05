
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { Control } from "react-hook-form",;
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
            <FormControl>;
              <Input placeholder="John Doe" {...field} />;
            </FormControl>;
            <FormMessage />;
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
            <FormControl>;
              <Input placeholder="Senior Software Engineer" {...field} />;
            </FormControl>;
            <FormMessage />;
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
          </FormItem>;
        )}
      />;
    </div>;
  ),;
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>
}

export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField,
control={control}
        name=&quot;fullName&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder=&quot;John Doe&quot; {...field} />

interface PersonalInfoFieldsProps {control: Control<BasicInfoFormData>}

export function PersonalInfoFields(_{control}: PersonalInfoFieldsProps) {return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField,
control={control}
        name="fullName"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {_...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField,
control={control}
        name=&quot;title&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder=&quot;Senior Software Engineer&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField,
control={control}
        name=&quot;email&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type=&quot;email&quot; placeholder=&quot;john@example.com&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField,
control={control}
        name=&quot;phone&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder=&quot;+1 234 567 8900&quot; {...field} />            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
