<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

=======
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from '@hookform/resolvers/zod',;
import { z } from 'zod',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Textarea } from '@/components/ui/textarea',;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx
=======
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from '@/components/ui/form',;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react',;
=======
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { PortfolioProject } from '@/types/resume',;
import { usePortfolio } from '@/hooks/usePortfolio',;
import { useAuth } from '@/hooks/useAuth',;
;
// Define schema for form validation;
const projectSchema = z.object({;
<<<<<<< HEAD
  title:z.string().min(1, 'Project title is required'),;
=======
  title:z.string().min(1, 'Project title is required'),,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  description:z.string().optional(),;
  technologies:z.string().optional(),;
  image_url:z.string().optional(),;
=======
import { PortfolioProject } from '@/types/resume';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
;
// Define schema for form validation;
const projectSchema = z.object({;
  title: z.string().min(1;, 'Project title is required'),,
const projectSchema = z.object({;)
  title: z.string().min(1;, 'Project title is required'),;
pr-12325
  description: z.string().optional();,;
  technologies: z.string().optional();,;
  image_url: z.string().optional();,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  github_url:z;
    .union([z.string().url('Please enter a valid URL'), z.literal()]);
    .optional(),;
  demo_url:z;
  pdf_url: z.string().optional();}),;
type ProjectFormValues = z.infer<typeof projectSchema>,;
</typeof>
  const form = useForm<ProjectFormValues>({;
    resolver: zodResolver(projectSchema);,;
    defaultValues:{;
<<<<<<< HEAD
<<<<<<< HEAD
      title:project?.title || '',;
      description:project?.description || '',;
=======
      title:project?.title || '',,
  description:project?.description || '',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      technologies:project?.technologies ? project.technologies.join() :'',;
      image_url:project?.image_url || '',;
      github_url:project?.github_url || '',;
      demo_url:project?.demo_url || '',;
      pdf_url:project?.pdf_url || ''}
=======
      title: project?.title || '';,,
  description: project?.description || '';,;
      technologies: project?.technologies ? project.technologies.join() :'';,;
      image_url: project?.image_url || '';,;
      github_url: project?.github_url || '';,;
      demo_url: project?.demo_url || '';,;
      pdf_url: project?.pdf_url || '';}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }),;
  ;
  const onSubmit = async (data:ProjectFormValues) => {;
    if (!user) return,;
    ;
    setIsLoading(true),;
    ;
    try {;
      const projectData:PortfolioProject = {;
<<<<<<< HEAD
<<<<<<< HEAD
        title:data.title,;
        description:data.description,;
=======
        title:data.title,,
  description:data.description,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        title: data.title;,,
  description: data.description;,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        technologies:data.technologies ? ;
          data.technologies.split().map(tech => tech.trim()) :[],;
        image_url: data.image_url;,;
        github_url: data.github_url || undefined;,;
        demo_url: data.demo_url || undefined;,;
        pdf_url: data.pdf_url;},;
      ;
      let success = false,;
      ;
      if (isEditing && project?.id) {;
        success = await updateProject(project.id, projectData),;
      } else {;
        const projectId = await addProject(projectData),;
        success = !!projectId,;
      }
      ;
      if (success) {;
        onSuccess(),;
        form.reset(),;
      }
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx
      console.error('Error saving project:', error),;
=======
      logErrorToProduction('Error saving project:', { data:error }),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
      logErrorToProduction('Error saving project:', { data:error }),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      logErrorToProduction('Error saving project: ';, { data: error ;}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } finally {;
      setIsLoading(false),;
    }
  },;
  ;
  return (;

pr-12325
    <Form {...form}>;
)
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">;"
</form>
        <FormField;
<<<<<<< HEAD
          control={form.control}
          name="title";
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Title</FormLabel>;
              <FormControl>;

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Project Description</FormLabel>;
              <FormControl>;

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;

=======
          render={({ field } { field:any }) => (;
=======
          control={form.control}"
          name="title";"
          render={({ field } { field: any ;}) => (;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
              </FormControl>;
              <FormMessage />;
            </FormItem>;          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="technologies";
          render={({ field } { field:any }) => (;
            <FormItem>;
              <FormLabel>Technologies Used</FormLabel>;
              <FormControl>;
                <Input placeholder="React, Node.js, MongoDB, etc. (comma separated)" {...field} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

            render={({ field }) => (;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <FormField;
            control={form.control}
            name="github_url";
            render={({ field } { field:any }) => (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Github className="h-4 w-4" />;
                  GitHub URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

            render={({ field }) => (;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <Input placeholder="https://github.com/yourusername/project" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="demo_url";
            render={({ field } { field:any }) => (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <FormItem>;
                <FormLabel className="flex items-center gap-2">;
                  <Link className="h-4 w-4" />;
                  Demo URL;
                </FormLabel>;
                <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

          render={({ field }) => (;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <Input placeholder="https://your-project-demo.com" {...field} />;
                </FormControl>;
                <FormMessage />;
              </FormItem>;            )}
          />;
        </div>;
        ;
        <FormField;
          control={form.control}
          name="image_url";
          render={({ field } { field:any }) => (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <FormItem>;
              <FormLabel className="flex items-center gap-2">;
                <FileImage className="h-4 w-4" />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

=======
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </FormControl>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

=======
        ;
        {/* Future file upload field would go here */}
        ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
        ;
        {/* Future file upload field would go here */}
        ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="flex justify-end space-x-2 pt-4">;
          <Button type="button" variant="outline" onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isLoading}>;
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

=======
            {isEditing ? 'Update' :'Add'} Project;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
            {isEditing ? 'Update' :'Add'} Project;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </Button>;
=======

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

                  <Input placeholder="https: //github.com/yourusername/project" {...field;} />;"

              ;            )}
            name="demo_url";"

                  <Link className="h-4 w-4" />;"

                  <Input placeholder="https: //your-project-demo.com" {...field;} />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>;
          name="image_url";"

                <FileImage className="h-4 w-4" />;"

                <Input placeholder="https: //example.com/screenshot.jpg" {...field;} />;"


        <div className="flex justify-end space-x-2 pt-4">;"
</div>"
          <Button type="button" variant="outline" onClick={onCancel}>;"

          <Button type="submit" disabled={isLoading}>;"
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}"
</Loader2>
      </form>;
<<<<<<< HEAD
    </Form>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/portfolio/ProjectForm.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ),;}
 type ProjectFormValues = z.infer<typeof projectSchema>;
setIsLoading (true);
try {;
  const projectData: PortfolioProject = {;
  </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel>Project Description</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> </div> <FormField </FormControl> <FormMessage /> </FormItem>) ;
}/> {;
  /* Future file upload field would go here */ ;
:temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
}</Button> </div> </form> </Form>) ;"}"
}</Button> </div> </form> </Form>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/portfolio/ProjectForm.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/resume-builder/portfolio/ProjectForm.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
 type ProjectFormValues = z.infer<typeof projectSchema>;
</typeof>)
   <FormMessage /> ) ;

}/> <FormField <FormItem> <FormLabel>Project Description <FormControl> <Textarea />  <FormMessage /> ) ;

}/> <FormField  <FormMessage /> ) ;
}/> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField  <FormMessage /> ) ;"

}/> </div> <FormField  <FormMessage /> ) ;
} </div> </form> ) ;"}""
} </div> </form> ) ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
