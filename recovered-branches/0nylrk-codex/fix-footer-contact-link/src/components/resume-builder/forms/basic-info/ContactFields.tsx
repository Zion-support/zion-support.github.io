import { Input } from "@/components/ui/input";"
import { Control } from "react-hook-form";"
import { BasicInfoFormData } from "./schema";
interface ContactFieldsProps {}
  control: Control<BasicInfoFormData>;

}



interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;

}
export function ContactFields({ control }: ContactFieldsProps) {
  return (

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


            <FormControl>;

              <Input placeholder="San Francisco, CA" {...field} />;
            </FormControl>;
            <FormMessage />;

        )}
      />;

        name="github"

              <Input placeholder="https://github && github.com/username" {...field} />;


      />;
    </div>;

