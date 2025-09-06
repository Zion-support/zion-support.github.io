<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AppMetadataValues } from './MetadataManager';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,;
} from '@/components/ui/form';
=======

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { AppMetadataValues } from "./MetadataManager";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
}/> <FormField <FormItem> <FormLabel>Short Description</FormLabel> <FormControl> <Input </FormDescription> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Long Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormDescription> {;
  longDescription.length ;
}/ {;
  maxDescriptionLength ;
}characters </FormDescription> </FormItem>) ;
}/> <div> <FormLabel htmlFor="keywords" >Keywords</FormLabel> <Input className="mb-2" /> <div className="flex flex-wrap gap-2 mt-2"> > <X className="h-3 w-3" /> </button> </Badge>) ) ";
}</div> <FormDescription className="mt-2" > Add keywords to improve discoverability (max 100 characters total) </FormDescription> </div> <FormField <FormItem> <FormLabel>App Version</FormLabel> <FormControl> <Input /> </FormControl> </FormItem>) ;
}/> </div> </Form> </CardContent> </Card>) ;
};
'"
=======

<<<<<<< HEAD

  };
  

<<<<<<< HEAD

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
