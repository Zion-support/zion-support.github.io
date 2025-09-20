}/> <FormField <FormLabel>Time</FormLabel> <Select onValueChange= {field.onChange}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select time" /> </SelectTrigger> </FormControl> </SelectItem>) )
}</SelectContent> </Select> <FormMessage /> </FormItem>) "
}/> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField <FormItem> <FormLabel>Duration</FormLabel> <Select onValueChange= {field.onChange}defaultValue= {
  field.value "
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select duration" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="15" >15 minutes</SelectItem> <SelectItem value="30" >30 minutes</SelectItem> <SelectItem value="45" >45 minutes</SelectItem> <SelectItem value="60" >60 minutes</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>)
