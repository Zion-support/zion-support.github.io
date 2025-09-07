import {
  // TODO: Implement
}
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";"
  // TODO: Implement
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,"
} from "@/components/ui/select";""
import { UseFormReturn } from "react-hook-form";""
import { FormValues } from "./useHireRequestForm";"
interface TimelineFieldProps {
  // TODO: Implement
  form: UseFormReturn<FormValues>;

    <FormField;
      control={form.control}"
      name="timeline""
      render={({ field }) => (

        <FormItem>
"
          <FormLabel className="text-white">Project Timeline"
          <FormControl>

            <Select;
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger className="bg-zion-blue-light/20 border-zion-blue-light text-white">"
                <SelectValue placeholder="Select estimated timeline" />"

              
              <SelectContent>

                  <SelectItem key={option.value} value={option.value}>


      name="timeline";")

        <FormItem>;
          <FormLabel className="text - white">Project Timeline;"
          <FormControl>;

              onValueChange={field.on_change}
              default_value={field.value}
            >;
              <SelectTrigger className="bg - zion - blue - light / 20 border - zion - blue - light text - white">;"
                <SelectValue placeholder="Select estimated timeline" />;"

              ;
              <SelectContent>;

                  <SelectItem key={option.value} value={option.value}>;

          <FormLabel className="text-white">Project Timeline;"

                  
              
            
          
          <FormMessage />

        )
        )}