
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { UseFormReturn } from "react-hook-form",;
import { FormValues } from "./useHireRequestForm",;
;
interface PersonalInfoFieldsProps {;
  form:UseFormReturn<FormValues>;
}
;
export function PersonalInfoFields({ form } PersonalInfoFieldsProps) {;
  return (;
    <>;
      <FormField;
        control={form.control}
        name="requesterName";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Name</FormLabel>;
            <FormControl>;
              <Input ;
                placeholder="Enter your full name" ;
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white";
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { UseFormReturn } from "react-hook-form",
import { FormValues } from "./useHireRequestForm",interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>
}

interface PersonalInfoFieldsProps {_form: UseFormReturn<FormValues>;}

export function PersonalInfoFields(_{_form}: PersonalInfoFieldsProps) {_return (_<>
      <FormField
        control={form.control}
        name=&quot;requesterName&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Name</FormLabel>
            <FormControl>
              <Input 
                placeholder=&quot;Enter your full name&quot; 
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;              />
            </FormControl>
            <FormMessage />
          </FormItem>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        )}
      />;
      ;
      <FormField;
        control={form.control}
<<<<<<< HEAD
        name="requesterEmail";
        render={({ field }) => (;
          <FormItem>;
            <FormLabel className="text-white">Your Email</FormLabel>;
            <FormControl>;
              <Input ;
                placeholder="Enter your email address" ;
                type="email";
                {...field}
                className="bg-zion-blue-light/20 border-zion-blue-light text-white";
              />;
            </FormControl>;
            <FormMessage />;
          </FormItem>;
        )}
      />;
    </>;
  ),;
=======
        name=&quot;requesterEmail&quot;
        render={({ field }) => (          <FormItem>
            <FormLabel className=&quot;text-white&quot;>Your Email</FormLabel>
            <FormControl>
              <Input 
                placeholder=&quot;Enter your email address&quot; 
                type=&quot;email&quot;
                {...field}
                className=&quot;bg-zion-blue-light/20 border-zion-blue-light text-white&quot;              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
