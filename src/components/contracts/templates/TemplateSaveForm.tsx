import { useState } from 'react'
import { useForm, typeControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
control={form.control}
          name='title'
          render={({
            field}: {
            field: ControllerRenderProps<FormValues 'title'>
          }) => (            <FormItem>
              <FormLabel>Template Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter template name' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
control={form.control}
          name='isDefault'
          render={({
            field}: {
            field: ControllerRenderProps<FormValues 'isDefault'>
          }) => (
            <FormItem className='flex items-center justify-between'>
              <FormLabel className='cursor-pointer'>
                Set as default template
              </FormLabel>
              <FormControl>
                <Switch
aria-label='Default template'
                  checked={field.value}
                  onCheckedChange={field.onChange}                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-2 justify-end'>
          <Button type='button' variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button type='submit' disabled={saving}>
            {saving ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Saving...
              </>
            ) : (
              `${editTemplate ? 'Update' : 'Save'} Template`
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
setSaving (true)
try {
  if (editTemplate) {
  await updateTemplate.mutateAsync ({
  <FormItem> <FormLabel>Template Name</FormLabel> <FormControl> <Input {
  ...field "
}placeholder="Enter template name" />
}/> <FormField >Set as default template</FormLabel> <FormControl> <Switch /> </FormControl> <FormMessage /> </FormItem>) "
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {"
  editTemplate ? "Update" : "Save"
}Template`)
}</Button> </div> </form> </Form>)
}"}