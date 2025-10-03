                      >;

                          <span>Pick a date</span>;

                        )}
                      <Button;
                        variant="outline";
                        className={cn(;
                          "w-full pl-3 text-left font-normal",;
                          !field.value && "text-muted-foreground";
                        )}
                      >;
                        {field.value ? (;
                          format(field.value, "PPP");
                        ) :(;
                          <span>Pick a date</span>;
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />;
                      </Button>;
                    </FormControl>;
                  </PopoverTrigger>;
                  <PopoverContent className="w-auto p-0" align="start">;
                    <Calendar;
                      mode="single";
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date > addDays(new Date(), 90)}
                      initialFocus;
                      className="p-3 pointer-events-auto";
                    />;
                  </PopoverContent>;
                </Popover>;
                <FormMessage />;

                  <FormControl>;
                    <SelectTrigger>;
                      <SelectValue placeholder="Select time" />;
                    </SelectTrigger>;
                  </FormControl>;

                      <SelectItem key={time} value={time}>;
)
                      ;                    ))}

        </div>;"
            name="duration";"
                <FormLabel>Duration;

                      <SelectValue placeholder="Select duration" />;"
                  <SelectContent>;

                    placeholder={`Add your ${form.watch('platform')} link here`}

                    {...field}

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Notes (Optional)</FormLabel>;
              <FormControl>;

                  {...field}
                />;
              </FormControl>;
              <FormMessage />;

        <div className="flex justify-end gap-4 pt-4">;
          <Button variant="outline" onClick={onClose} type="button">;
            Cancel;
          </Button>;
          <Button type="submit" disabled={isSubmitting}>;

          </Button>;
        </div>;
      </form>;
    </Form>;

const form = useForm<z.infer<typeof formSchema>> ({
async function onSubmit (values: z.infer<typeof formSchema>) {
</typeof>"
}/> <div className="grid grid-cols-1 md: grid-cols-2 gap-4" > <FormField <FormLabel>Date <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>)";
}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />    <PopoverContent className="w-auto p-0" align="start" > <Calendar initialFocus className="p-3 pointer-events-auto" />   <FormMessage /> )"
}/> <FormField <FormLabel>Time <Select onValueChange= {
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" />   ) )"
}  <FormMessage /> ) 
}/> </div> <div className="grid grid-cols-1 md: grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration <Select onValueChange= {";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" />   <SelectContent> <SelectItem value="15" >15 minutes <SelectItem value="30" >30 minutes <SelectItem value="45" >45 minutes <SelectItem value="60" >60 minutes   <FormMessage /> )"
}/> <FormField <FormItem> <FormLabel>Platform <Select onValueChange= {
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select platform" />   <SelectContent> <SelectItem value="zoom" >Zoom <SelectItem value="google-meet" >Google Meet <SelectItem value="teams" >Microsoft Teams <SelectItem value="other" >Other   <FormMessage /> )"
}/> </div> {"
  form.watch ('platform') !== 'in-app' && (<FormField control= {
