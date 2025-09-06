import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface MetadataFormProps {
  form: UseFormReturn<AppMetadataValues>
}

export const MetadataForm: React.FC<MetadataFormProps> = ({ form }) => {
  const { control, register, watch, setValue } = form;
  const keywords = watch("keywords");
  const platform = watch("platform");
  
  const addKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const value = e.currentTarget.value.trim();
      
      if (value && !keywords.includes(value)) {
        setValue("keywords", [...keywords, value]);
        e.currentTarget.value = ""
      }
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };
  
  
  const maxDescriptionLength = platform === "ios" ? 4000 : 4000;
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
