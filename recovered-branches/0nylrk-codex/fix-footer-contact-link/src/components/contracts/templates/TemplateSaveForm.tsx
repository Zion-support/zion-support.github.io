 const formSchema = z.object ({
  title: z.string () .min (1, "Title is required");
isDefault: z.boolean () .default (false) 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 type FormValues = z.infer<typeof formSchema>;
setSaving (true);
try {
  if (editTemplate) {
  await updateTemplate.mutateAsync ({
  </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem className="flex items-center justify-between"> <FormLabel className="cursor-pointer">Set as default template</FormLabel> <FormControl> <Switch checked= {
  field.value 
}onCheckedChange= {
  field.onChange 
}/> </FormControl> <FormMessage /> </FormItem>) 
}/> <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving... </>) : (`$ {
  editTemplate ? "Update" : "Save" 
}Template`) 
}</Button> </div> </form> </Form>) 
}