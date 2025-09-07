import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
import { useAuth } from '@/hooks/useAuth',;
;
// Define schema for form validation;
const projectSchema = z.object({;)
  title:z.string().min(1, 'Project title is required'),;
  description:z.string().optional(),;
  technologies:z.string().optional(),;
  image_url:z.string().optional(),;
  github_url:z;
    .union([z.string().url('Please enter a valid URL'), z.literal()]);
    .optional(),;
  demo_url:z;
  pdf_url:z.string().optional()}),;
type ProjectFormValues = z.infer<typeof projectSchema>,;
</typeof>
  const form = useForm<ProjectFormValues>({;

    <Form {...form}>;
)
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;"
</form>
        <FormField;
          control={form.control}"
          name="title";"
          render={({ field } { field:any }) => (;

            <FormItem>;

              <FormLabel>Project Title;
              <FormControl>;
"
                <Input placeholder="E.g., AI Chatbot, E-commerce Website" {...field} />;"

              <FormMessage />;
            ;          )}
          name="description";"


              <FormLabel>Project Description;

                <Textarea ;"
                  placeholder="Describe what the project does and your role in it...";""
                  className="min-h-[100px]";"
                  {...field} ;
                />;

          name="technologies";"


              <FormLabel>Technologies Used;
)"
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />;"


            ;"
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;"
</div>
            name="github_url";"

                <FormLabel className="flex items-center gap-2">;"
                  <Github className="h-4 w-4" />;"

                  <Input placeholder="https://github.com/yourusername/project" {...field} />;"

              ;            )}
            name="demo_url";"

                  <Link className="h-4 w-4" />;"

                  <Input placeholder="https://your-project-demo.com" {...field} />;"

        </div>;
          name="image_url";"

                <FileImage className="h-4 w-4" />;"

                <Input placeholder="https://example.com/screenshot.jpg" {...field} />;"


        <div className="flex justify-end space-x-2 pt-4">;"
</div>"
          <Button type="button" variant="outline" onClick={onCancel}>;"

          <Button type="submit" disabled={isLoading}>;"
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
</Loader2>
      </form>;
 type ProjectFormValues = z.infer<typeof projectSchema>;
</typeof>)
   <FormMessage /> ) ;

}/> <FormField <FormItem> <FormLabel>Project Description <FormControl> <Textarea />  <FormMessage /> ) ;

}/> <FormField  <FormMessage /> ) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField  <FormMessage /> ) ;"

}/> </div> <FormField  <FormMessage /> ) ;
} </div> </form> ) ;"}""
} </div> </form> ) ;"