import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";

=======
=======

  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components / ui / form';
import { Input  } from '@/components / ui / input';
import { Control  } from './react - hook - form';
import { BasicInfoFormData  } from './schema';
interface PersonalInfoFieldsProps {
  control: Control < BasicInfoFormData>;
}
      />;


      <FormField
        control={control}
        name="email"
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
      />;


      <FormField
        control={control}
        name="phone"        render={({ field }) => (;
          <FormItem>;
            <FormLabel>Phone</FormLabel>;
          </FormItem>)}
      />;
      <FormField;
        control={control}
        name="email";
        render={({ field }) => (
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

  )
}
;

=======  );
}
  )
}
;