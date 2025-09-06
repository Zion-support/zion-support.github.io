 interface DateFieldsProps {
  startDate: Date | undefined;
setStartDate: (date: Date | undefined) => void;
endDate: Date | undefined;
setEndDate: (date: Date | undefined) => void 
}export function DateFields ({
  startDate, setStartDate, endDate, setEndDate 
}: DateFieldsProps) {
  return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4" > publishedDate">Published Date (Optional) </Label> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}</Button> </FormControl> </PopoverTrigger> <PopoverContent className=" w-auto p-0"align=" start"> <Calendar initialFocus /> </PopoverContent> </Popover> </div> <div> <Label htmlFor=" expiryDate">Expiry Date (Optional) </Label> <Popover> <PopoverTrigger asChild> <FormControl> <Button) : (<span>Pick a date</span>) 
}</Button> </FormControl> </PopoverTrigger> <PopoverContent className=" w-auto p-0"align=" start" > <Calendar initialFocus /> </PopoverContent> </Popover> </div> </div>) 
}