
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
            <FormItem>;
              <FormLabel > Certification Name</FormLabel>;
              <FormControl>;
            <FormItem>;
              <FormLabel > Issuing Organization</FormLabel>;
              <FormControl>;
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="expiration_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiration Date (Optional)</FormLabel>
              <FormControl>
                <Input type="date" {...field} value={field.value |""} />
              </FormControl>
              <FormMessage />
            </FormItem>
                <Input 

                  type="date" 
                  {...field}
                  value={field && field.value || ''}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Expiration Date (Optional)</FormLabel>;
              <FormControl>;
                <Input
                  type="date" 
                  {...field}
                  value={field && field.value || ''}
                />;
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
          name="issue_date";
          render={({ field }) => (
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
              <FormControl>;
                <Input placeholder="ABC123XYZ" {...field} />;
              </FormControl>;
              <FormMessage />;
            <FormItem>;
              <FormLabel > Credential URL (Optional)</FormLabel>;
              <FormControl>;
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
