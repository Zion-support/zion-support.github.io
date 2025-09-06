}
      let success = false;
      // Check condition
if ( {) {
  $2
}
        success = await update_project (project.id, project_data);
      } else {
        const projectId = await addProject(projectData)
        success = !!projectId
      }

      // Check condition
if ( {) {
  $2
}
        on_success ();
        form.reset ();

      }
    } catch (error) {
      logErrorToProduction('Error saving project:', { data: error })
    } finally {


import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logErrorToProduction } from '@/utils/productionLogger';import {;
      setIsLoading(false)
    }
  }



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

                  GitHub URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/yourusername/project" {...field} />
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
          />;
          <FormField;
            control={form.control}
            name="demo_url"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Link className="h-4 w-4" />


                  Demo URL
                </FormLabel>
                <FormControl>
                  <Input placeholder="https://your-project-demo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />;
        </div>;

        <FormField
          control={form.control}
          name='image_url'
          render={({ field }: { field: any }) => (            <FormItem>;
              <FormLabel className='flex items-center gap-2'>;
                <FileImage className='h-4 w-4' />;
                Screenshot URL;
              </FormLabel>;
              <FormControl>;
                <Input
                  placeholder='https://example && example.com/screenshot && screenshot.jpg'
              </FormItem>)}
          />;
        </div>;
        <FormField;
          control={form.control}

          name="image_url"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <FileImage className="h-4 w-4" />


                Screenshot URL
              </FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/screenshot.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Future file upload field would go here */}
        <div className='flex justify-end space-x-2 pt-4'>
          <Button type='button' variant='outline' onClick={onCancel}>
        />;
        {/* Future file upload field would go here */}
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>

<<<<<<< HEAD


            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? 'Update' : 'Add'} Project
          </Button>
        </div>
      </form>
    </Form>;
  );
};
};
    </Form>
  )
        />;

        {/* Future file upload field would go here */}

        <div className='flex justify-end space-x-2 pt-4'>;
          <Button type='button' variant='outline' onClick={onCancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={isLoading}>;
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            {isEditing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>;
  );
};
};
    </Form>
  )
}
}

}


            </FormItem>)}
        />;
        {/* Future file upload field would go here */}
        <div className='flex justify - end space - x-2 pt - 4'>;
          <Button type='button' variant='outline' on_click={on_cancel}>;
            Cancel;
          </Button>;
          <Button type='submit' disabled={is_loading}>;
            {is_loading && <Loader2 className='mr - 2 h - 4 w - 4 animate - spin' />}
            {is_editing ? 'Update' : 'Add'} Project;
          </Button>;
        </div>;
      </form>;
    </Form>);
}
}