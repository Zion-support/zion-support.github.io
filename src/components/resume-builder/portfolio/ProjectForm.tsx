import { useState  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver  } from '@hookform/resolvers/zod';
import { z  } from 'zod';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import {logErrorToProduction} from '@/utils/productionLogger';
import { Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
  FormMessage } from '@/components/ui/form';
import { Loader2, Link, FileImage, Github, Edit } from 'lucide-react'
import { PortfolioProject  } from '@/types/resume';
import { usePortfolio  } from '@/hooks/usePortfolio';
import { useAuth } from '@/hooks/useAuth';
// Define schema for form validation
const projectSchema = null;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input
                  placeholder='E.g., AI Chatbot, E-commerce Website'
                  {...field}                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Describe what the project does and your role in it...'
                  className='min-h-[100px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='technologies'
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Technologies Used</FormLabel>
              <FormControl>
                <Input
                  placeholder='React, Node.js, MongoDB, etc. (comma separated)'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <FormField
            control={form.control}
            name='github_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Github className='h-4 w-4' />
                  GitHub URL
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='https://github.com/yourusername/project'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='demo_url'
            render={({ field }: { field: any }) => (              <FormItem>
                <FormLabel className='flex items-center gap-2'>
                  <Link className='h-4 w-4' />
                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='https://your-project-demo.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='image_url'
          render={({ field }: { field: any }) => (            <FormItem>
              <FormLabel className='flex items-center gap-2'>
                <FileImage className='h-4 w-4' />
                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='https://example.com/screenshot.jpg'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Future file upload field would go here */}

        <div className='flex justify-end space-x-2 pt-4'>
          <Button type='button' variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button type='submit' disabled={isLoading}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project
          </Button>
        </div>
      </form>
    </Form>
  )
}
}
;