
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Control } from &quot;react-hook-form&quot;;
import { BasicInfoFormData } from &quot;./schema&quot;;

interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField
        control={control}
        name=&quot;location&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder=&quot;San Francisco, CA&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;website&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;linkedin&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://linkedin.com/in/username&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name=&quot;github&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://github.com/username&quot; {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
