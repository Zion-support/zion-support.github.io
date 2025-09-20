import React, { useState } from "react",;
import { useForm; ControllerRenderProps } from "react-hook-form";,
import { zodResolver } from "@hookform/resolvers/zod";,
import { z } from "zod";,
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
import React, { useState } from "react",
import { useFormControllerRenderProps } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",;
import { Button } from "@/components/ui/button";
import { logInfologErrorToProduction } from '@/utils/productionLogger';
=======
import { logInfo; logErrorToProduction } from "@/utils/productionLogger";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import {
} finally {
setIsSubmitting(false)
}
}
return (
<div className="space-y-6">;
<div className="flex items-center space-x-2">;
<FileText className="h-5 w-5 text-primary" />;
<h2 className="text-xl font-semibold">Report an Issue</h2>;
</div>;
<Form {...form}>;
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
<FormField;
control={form.control}
name="reason_code";
render={({
field}: {
field: ControllerRenderProps<;
z.infer<typeof formSchema>;
"reason_code";
>;
}) => (              <FormItem>;
<FormLabel>Reason for dispute</FormLabel>;
<Select;
onValueChange={field.onChange}
defaultValue={field.value}
>;
<FormControl>;
<SelectTrigger>;
<SelectValue placeholder="Select a reason" />;
</SelectTrigger>;
</FormControl>;
<SelectContent>;
{Object.entries(disputeReasonLabels).map(
([value label]) => (
<SelectItem key={value} value={value}>;
{label}
</SelectItem>;
)
)}                  </SelectContent>;
</Select>;
<FormMessage />;
</FormItem>;
)}
/>;
<FormField;
control={form.control}
name="description";
render={({
field}: {
field: ControllerRenderProps<;
z.infer<typeof formSchema>;
"description";
>;
}) => (              <FormItem>;
<FormLabel>Describe the issue in detail</FormLabel>;
<FormControl>;
<Textarea;
placeholder="Please provide specific details about the issue...";
className="min-h-[150px]"
{...field}
/>;
</FormControl>;
<FormMessage />;
</FormItem>;
)}
/>;
<FormItem>;
<FormLabel>Attachments (optional)</FormLabel>;
<FormControl>;
<div className="space-y-4">;
<Input;
type="file"
multiple onChange={handleFileChange}
className="cursor-pointer"                />
{files.length > 0 && (
<div className="space-y-2">;
<p className="text-sm font-medium">Selected files:</p>;
<ul className="space-y-1">;
{files.map((file index) => (
<li;
key={index}
className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded"
>;
<span>;
{file.name} ({(file.size / 1024).toFixed(1)} KB)
</span>;
<Button;
type="button"
variant="ghost"
size="sm";
onClick={() => removeFile(index)}                          >;
Remove;
</Button>;
</li>;
))}
</ul>;
</div>;
)}
</div>;
</FormControl>;
<FormMessage />;
</FormItem>;
<div className="flex justify-end space-x-2">;
{onCancel && (
<Button type="button" variant="outline" onClick={onCancel}>;
Cancel;
</Button>;
)}
<Button type="submit" disabled={isSubmitting}>;
{isSubmitting ? "Submitting..." : "Submit Dispute"}
</Button>;
</div>;
</form>;
</Form>;
</div>;
)
}
const removeFile: any = (index: number) => {async function onSubmit (values: z.infer<typeof formSchema>) {
try {
setIsSubmitting (true)
const dispute = await createDispute ({;
project id: projectId;
milestone id: milestoneId;
reason code: values.reason code;,
description: values.description})
//Future enhancement: Upload attachments //For now we just log the files that would be uploaded if (files.length > 0) {
}finally {
setIsSubmitting (false)
}";
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {field.onChange}defaultValue= {
field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {Object.entries (disputeReasonLabels) .map ( ([value label]) => (<SelectItem key= {
<<<<<<< HEAD
  value}value= {value}> {label}</SelectItem>) )
}return (<div className="space-y-6" > <div className="flex items-center space-x-2" > <FileText className="h-5 w-5 text-primary" /> <h2 className="text-xl font-semibold" >Report an Issue</h2> </div> <FormItem> <FormLabel>Reason for dispute</FormLabel> <Select onValueChange= {
field.onChange,
}defaultValue= {
field.value ";
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select a reason" /> </SelectTrigger> </FormControl> <SelectContent> {
  Object.entries (disputeReasonLabels) .map ( ([value label]) => (<SelectItem key= {
  value}value= {
  value}> {
  label}</SelectItem>) )
=======
value}value= {value}> {label}</SelectItem>) )
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
}</SelectContent> </Select> <FormMessage /> </FormItem>)
}/> <FormField <FormItem> <FormLabel>Describe the issue in detail</FormLabel> <FormControl> <Textarea /> </FormControl> <FormMessage /> </FormItem>) ";
}/> <FormItem> <FormLabel>Attachments (optional) </FormLabel> <FormControl> <div className="space-y-4" > <Input type="file" multiple > Remove </Button> </li>) )
}</ul> </div>)
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>);
}</div> </FormControl> <FormMessage /> </FormItem> </Button> </div> </form> </Form> </div>)
}'"};