 //Form schema const formSchema = z.object ({
  brand name: z.string () .min (2, {
  message: 'Brand name must be at least 2 characters' 
});
subdomain: z.string () .min (3, {
  message: 'Subdomain must be at least 3 characters' 
}) .max (20, {
  message: 'Subdomain must be at most 20 characters' 
}) .regex (/^[a-z0-9-]+$/, {
  message: 'Subdomain can only contain lowercase letters, numbers, and hyphens' 
});
custom domain: z.string () .optional ();
type FormValues = z.infer<typeof formSchema>;
const onSubmit = async (values: FormValues) => {
  try {
  //Prepare the data //Submit to Supabase const {
  data, error 
}= await supabase .from ('whitelabel tenants') .insert (tenantData) .select () .single ();
if (error) throw error;
}
};
return (<Card className="w-full max-w-2xl" > <CardHeader> <CardTitle>Create White-Label Instance</CardTitle> <CardDescription> Create a customized version of the platform for your client or partner. </CardDescription> </CardHeader> <CardContent> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </div> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </div> </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Theme Preset</FormLabel> <Select onValueChange= {
  field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a theme" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="light" >Light</SelectItem> <SelectItem value="dark" >Dark</SelectItem> <SelectItem value="neon" >Neon</SelectItem> <SelectItem value="corporate" >Corporate</SelectItem> <SelectItem value="startup" >Startup</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <div className="border rounded-md p-4 space-y-4" > <h3 className="text-sm font-medium" >Landing Page Copy</h3> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> <FormField </FormControl> <FormMessage /> </FormItem>) 
}/> </div> </div> <Button type="submit" className="w-full" size="lg" > Create White-Label Instance </Button> </form> </Form> </CardContent> <CardFooter className="bg-muted/50 text-xs text-muted-foreground" > <p> After creating the tenant, you must upload a logo via the tenant management dashboard. DNS verification for custom domains must be completed before they can be used. </p> </CardFooter> </Card>) 
}