<<<<<<< HEAD


import { Button } from "@/components/ui/button",
import {}


=======

"
import React, { useState } from "react","
import { useForm } from "react-hook-form","
import { zodResolver } from "@hookform/resolvers/zod","
import { z } from "zod","

import { Button } from "@/components/ui/button",
import {}

>>>>>>> origin/cursor/delete-old-data-records-6bba
  Form,
  FormControl,
  FormField,
  FormItem,
<<<<<<< HEAD


import { FileText } from "lucide-react",



=======

import { FileText } from "lucide-react",

>>>>>>> origin/cursor/delete-old-data-records-6bba
const formSchema = z.object({

  reason_code: z.string()

    .min(1, { message: "Please select a reason for the dispute" })
  description: z.string()"
    .min(20, { message: "Description must be at least 20 characters" })
  attachments: z.array(z.any()).optional()})

<<<<<<< HEAD

=======
projectId: string
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void
  onCancel?: () => void
const formSchema = z.object({

  reason_code: z.string()

    .min(1, { message: "Please select a reason for the dispute" })
  description: z.string()"
    .min(20, { message: "Description must be at least 20 characters" })
  attachments: z.array(z.any()).optional()})

projectId: string
  milestoneId?: string;
  onDisputeCreated?: (disputeId: string) => void
  onCancel?: () => void
}
export function DisputeForm({
  projectId
  milestoneId
  onDisputeCreated
  onCancel
}: DisputeFormProps) {
  const { createDispute } = useDisputes();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
>>>>>>> origin/cursor/delete-old-data-records-6bba

  projectId: string,
  milestoneId?: string,
  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void

import React, { useState } from "react";""
import {useForm} from "react-hook-form";""
import {zodResolver} from "@hookform/resolvers/zod";""
import {z} from "zod";""
import {Button} from "@/components/ui/button";""
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";""
import {Textarea} from "@/components/ui/textarea";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {Input} from "@/components/ui/input";""
import {DisputeReason, disputeReasonLabels} from "@/types/disputes";""
import {useDisputes} from "@/hooks/useDisputes";""
import {toast} from "sonner";""
import {FileText} from "lucide-react";""
import React, { useState } from "react",""
import { useForm } from "react-hook-form",""
import { zodResolver } from "@hookform/resolvers/zod",""
import { z } from "zod",""
import { Button } from "@/components/ui/button","
import {
  // TODO: Implement
}
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,"
  FormMessage} from "@/components/ui/form",""
import { Textarea } from "@/components/ui/textarea","
  // TODO: Implement
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,"
  SelectValue} from "@/components/ui/select",""
import { Input } from "@/components/ui/input",""
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",""
import { useDisputes } from "@/hooks/useDisputes",""
import { toast } from "sonner",""
import { FileText } from "lucide-react","
const formSchema = z.object({)
  reason_code: z.string()"
    .min(1, { message: "Please select a reason for the dispute" })"
  description: z.string()"
    .min(20, { message: "Description must be at least 20 characters" })"

  attachments: z.array(z.any()).optional()})
type DisputeFormProps = {
  milestoneId?: string,

  onDisputeCreated?: (disputeId: string) => void,
  onCancel?: () => void;
pr-12325
},

},
export function DisputeForm({ 
  projectId, 
  milestoneId, 
  onDisputeCreated, 
  onCancel 


<<<<<<< HEAD

=======
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
    defaultValues: {
      reason_code: ""
      description: ""
      attachments: []}})
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {

import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue} from "@/components/ui/select",;
import { Input } from "@/components/ui/input",;
import { DisputeReason, disputeReasonLabels } from "@/types/disputes",;
import { useDisputes } from "@/hooks/useDisputes",;
import { toast } from "sonner",;
import { FileText } from "lucide-react",;
;
const formSchema = z.object({;
  reason_code:z.string();
    .min(1, { message:"Please select a reason for the dispute" }),;
  description:z.string();
    .min(20, { message:"Description must be at least 20 characters" }),;
  attachments:z.array(z.any()).optional()}),;
;
type DisputeFormProps = {;
  projectId:string,;
  milestoneId?:string,;
  onDisputeCreated?:(disputeId:string) => void,;
  onCancel?:() => void;
},;
;
export function DisputeForm({ ;
  projectId, ;
  milestoneId, ;
  onDisputeCreated, ;
  onCancel ;
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles]);
      form.setValue("attachments", [...files, ...newFiles])
    }
  }
  const removeFile = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1);
    setFiles(newFiles);
    form.setValue("attachments", newFiles)
  }
      const newFiles = Array.from(e.target.files),
      setFiles(prev => [...prev, ...newFiles]),
      form.setValue("attachments", [...files, ...newFiles])
    }
  },

  const removeFile = (index: number) => {
    const newFiles = [...files],
    newFiles.splice(index, 1),
    setFiles(newFiles),
    form.setValue("attachments", newFiles)
  },

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsSubmitting(true)
      const dispute = await createDispute({}
        project_id: projectId;
        milestone_id: milestoneId;
        reason_code: values.reason_code;
        description: values.description})

<<<<<<< HEAD
      if (dispute && dispute.id) {
        // Future enhancement: Upload attachments
        // For now we just log the files that would be uploaded
        if (files.length > 0) {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        if (onDisputeCreated) {
          onDisputeCreated(dispute.id)
        }
      }
    } catch (error) {

<<<<<<< HEAD


=======

      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)

>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error("Error submitting dispute:", error),

"
      toast.error("Failed to submit dispute. Please try again.")
    } finally {}
      setIsSubmitting(false)

"
      toast.error("Failed to submit dispute. Please try again.")
    } finally {}
      setIsSubmitting(false)

  };

      toast.error("Failed to submit dispute. Please try again.")
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD


=======

  };

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles && newFiles.splice(index, 1);

<<<<<<< HEAD
    setFiles(newFiles);
    form && form.setValue("attachments", newFiles);
  };

=======

  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true),;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      const dispute = await createDispute({;
        project_id: projectId,;
        milestone_id: milestoneId,;

<<<<<<< HEAD
        reason_code: values && values.reason_code,;
        description: values && values.description}),;
=======
        reason_code: values && values.reason_code,,
  description: values && values.description}),;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      if (dispute && dispute.id) {;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files && files.length > 0) {;
          console && console.log(`Would upload ${files && files.length} files for dispute ${dispute.id}`);
        }

<<<<<<< HEAD
=======
"
        toast && toast.success("Your dispute has been submitted");
>>>>>>> origin/cursor/delete-old-data-records-6bba

        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;"
      console && console.error("Error submitting dispute:", error);"
      toast && toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);


    }
  }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <FormField
            control={form.control}

            name="reason_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>

                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
<<<<<<< HEAD



=======
import React, { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Button } from "@/components/ui/button",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;

import { Textarea } from "@/components/ui/textarea",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;

    .min(20, { message: "Description must be at least 20 characters" }),;
  attachments: z.array(z.any()).optional()}),;
type DisputeFormProps = {;
  projectId: string,;
  milestoneId?: string,;
  onDisputeCreated?: (disputeId: string) => void,;
  onCancel?: () => void;
},;

  const { createDispute } = useDisputes(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [files, setFiles] = useState<File[]>([]),;
  const form = useForm<z.infer<typeof formSchema>>({;
    resolver: zodResolver(formSchema),;

      description: "",;
      attachments: []}}),;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    if (e.target.files) {;
      const newFiles = Array.from(e.target.files),;

<<<<<<< HEAD
      setFiles(prev => [...prev, ...newFiles]),;
      form.setValue("attachments", [...files, ...newFiles]);
    }
  },;
  const removeFile = (index: number) => {;
    const newFiles = [...files],;
    newFiles.splice(index, 1),;
    setFiles(newFiles),;
    form.setValue("attachments", newFiles);
  },;
  async function onSubmit(values: z.infer<typeof formSchema>) {;
    try {;
      setIsSubmitting(true),;
      const dispute = await createDispute({;
        project_id: projectId,;
        milestone_id: milestoneId,;
        reason_code: values.reason_code,;
        description: values.description}),;
      if (dispute && dispute.id) {;
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        if (files.length > 0) {;
          // // // console.log(`Would upload ${files.length} files for dispute ${dispute.id}`);
        }
;
        toast.success("Your dispute has been submitted");
        if (onDisputeCreated) {;
          onDisputeCreated(dispute.id);
        }
      }
    } catch (error) {;
      console.error("Error submitting dispute:", error);
      toast.error("Failed to submit dispute. Please try again.");
    } finally {;
      setIsSubmitting(false);
    }
  }
;
  return (;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <FormField

            name="reason_code"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;

import { FileText } from './lucide-react';
const form_schema = z.object ({}
  reason_code: z.string ();"
    .min (1, { message: "Please select a reason for the dispute" }),
  description: z.string ();"
    .min (20, { message: "Description must be at least 20 characters" }),
  attachments: z.array (z.any ()).optional ()}),
type DisputeFormProps = {}
  project_id: string,
  milestone_id?: string;
  onDisputeCreated?: (dispute_id: string) => void,
  on_cancel?: () => void;
}
;
export /**;
 * DisputeForm - Function description;
 */
function DisputeForm() {}
  const { create_dispute } = use_disputes ();
  const [is_submitting, setIsSubmitting] = useState (false);
  const [files, set_files] = useState < File[]>([]);
;
  const form = use_form < z.infer < typeof form_schema>>({}
    resolver: zod_resolver (form_schema),
    default_values: {"
      reason_code: "","
      description: "",
      attachments: []}}),
  const handleFileChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      const new_files = Array.from (e.target.files),
      set_files (prev => [...prev, ...new_files]);"
      form.set_value ("attachments", [...files, ...new_files]);
  onCancel;

  const form = useForm<z.infer<typeof formSchema>>({
</z>)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
</HTMLInputElement>
  const [files, setFiles] = useState<File[]>([]);
</File>

  const form = useForm<z && z.infer<typeof formSchema>>({;
</z>)
  const handleFileChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
  async function onSubmit(values: z.infer<typeof formSchema>) {
</typeof>
  async function onSubmit(): any (values: z && z.infer<typeof formSchema>) {;
</typeof>
          <FormField;
            control={form.control}"
            name="reason_code""
            render={({ field }) => (
</FormField>
              <FormItem>
</FormItem>
                <FormLabel>Reason for dispute</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
</Select>
                  <FormControl>
</FormControl>
                    <SelectTrigger>
</SelectTrigger>"
                      <SelectValue placeholder="Select a reason" />"
</SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
</SelectContent>
                      <SelectItem key={value} value={value}>{label}</SelectItem>)
  const [files, setFiles] = useState<File[]>([]),;
</File>
  const form = useForm<z.infer<typeof formSchema>>({;
</z>)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
          <FormField;
            control={form.control}"
            name="reason_code""
      setFiles(prev => [...prev, ...newFiles]);
</FormField>"
    <div className="space-y-6">;"
</div>"
      <div className="flex items-center space-x-2">;"
</div>"
        <FileText className="h-5 w-5 text-primary" />;"
</FileText>"
        <h2 className="text-xl font-semibold">Report an Issue</h2>;"
      </div>;
      <Form {...form}>;
</Form>"
        <form onSubmit={form && form.handleSubmit(onSubmit)} className="space-y-6">;"
</form>
          <FormField;
            control={form && form.control}"
            name="reason_code""
            render={({ field }) => (;
</FormField>
              <FormItem>;
</FormItem>
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
</Select>)

  const [files, set_files] = useState < File[]>([]);
;
  const form = use_form < z.infer < typeof form_schema>>({)
    resolver: zod_resolver (form_schema),

    default_values: {,"
  reason_code: "",""
      description: "","
      attachments: []}}),
  const handleFileChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
  // TODO: Implement
}
    // Check condition;
if ( {) {
  $2;
}
      const new_files = Array.from (e.target.files),
      set_files (prev => [...prev, ...new_files]);"
      form.set_value ("attachments", [...files, ...new_files]);"

    }
  }
;
  const remove_file = (index: number) =>: any {}
    const new_files = [...files],
    new_files.splice (index, 1);
    set_files (new_files);"
    form.set_value ("attachments", new_files);
  }
;
  async /**
 * on_submit - Function description;
 */

      setIsSubmitting (true),
      const dispute = await create_dispute ({}
        project_id: project_id,

        milestone_id: milestone_id,
        reason_code: values.reason_code,
        description: values.description}),
      // Check condition;
if ( {) {}
  $2;
}
        // Future enhancement: Upload attachments;
        // For now we just log the files that would be uploaded;
        // Check condition;
if ( {) {}
  $2;
}`
          console.log (`Would upload ${files.length} files for dispute ${dispute.id}`);
        }"
        toast.success ("Your dispute has been submitted");
;

}
          onDisputeCreated (dispute.id);
        }
      }
    } catch (error) {"
      console.error ("Error submitting dispute:", error);"
      toast.error ("Failed to submit dispute. Please try again.");
    } finally {}
      setIsSubmitting (false);
    }
  }

          <FormField;
            control={form.control}"
            name="reason_code";
            render={({ field }) => (
              <FormItem>;
                <FormLabel > Reason for dispute</FormLabel>;
<<<<<<< HEAD

                <Select onValueChange={field.on_change} default_value={field.value}>;

=======


          />;

          <FormField
            control={form && form.control}
            name="description"
      ;
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="reason_code";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Reason for dispute</FormLabel>;
                <Select onValueChange={field.onChange} defaultValue={field.value}>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


                  <FormControl>;
                    <SelectTrigger>;"

                      <SelectValue placeholder="Select a reason" />;
                    </SelectTrigger>;
                  </FormControl>;
                  <SelectContent>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    ))}
                  </SelectContent>;

          <FormField
            control={form && form.control}
            name="description"
<<<<<<< HEAD

=======
{Object.entries(disputeReasonLabels).map(([value, label]) => (;
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
          />;
          ;
          <FormField;
            control={form.control}
            name="description";
            render={({ field }) => (;
{Object.entries(disputeReasonLabels).map(([value, label]) => (;
                    {Object.entries(disputeReasonLabels).map(([value, label]) => (;
          />;
          ;
          <FormField;
            control={form.control}
            name="description";
>>>>>>> origin/cursor/delete-old-data-records-6bba
            render={({ field }) => (;
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
<<<<<<< HEAD

=======
                  <Textarea;
                    placeholder="Please provide specific details about the issue...";
                    className="min-h-[150px]";
              <FormItem>;
                <FormLabel>Describe the issue in detail</FormLabel>;
                <FormControl>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Textarea
                    placeholder="Please provide specific details about the issue..."

                    className="min-h-[150px]"


                    {...field}
                  />;
                </FormControl>;
                <FormMessage />;

<<<<<<< HEAD


=======
                />;

                {files && files.length > 0 && (;"
                  <div className="space-y-2">;"
                    <p className="text-sm font-medium">Selected files:</p>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <ul className="space-y-1">;
                      {files && files.map((file, index) => (;"
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">;
                          <span>{file && file.name} ({(file && file.size / 1024).toFixed(1)} KB)</span>;
                          <Button"
                            type="button" "
                            variant="ghost" "
                            size="sm" 

<<<<<<< HEAD



=======
                          <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>;
                          <Button ;
                            type="button" ;
                            variant="ghost" ;
                            size="sm" ;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;


<<<<<<< HEAD
=======
              </FormItem>)}
          />;
          ;


                <Input
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />;
                {files && files.length > 0 && (;
                  <div className="space-y-2">;
                    <p className="text-sm font-medium">Selected files:</p>;
                    <ul className="space-y-1">;
                      {files && files.map((file, index) => (;"
                        <li key={index} className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded">;
                          <span>{file && file.name} ({(file && file.size / 1024).toFixed(1)} KB)</span>;
                          <Button"
                            type="button" "
                            variant="ghost" "
                            size="sm" 


                            onClick={() => removeFile(index)}
                          >;
                            Remove;
                          </Button>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
              </FormItem>)}
          />;
          <FormItem>;
            <FormLabel > Attachments (optional)</FormLabel>;

                            size="sm";
                            on_click={() => remove_file (index)}
                          >;
                            Remove;
                          </Button>;
                        </li>))}
                    </ul>;
                  </div>)}

              </div>;
            </FormControl>;
            <FormMessage />;
          </FormItem>;

<<<<<<< HEAD
          ;
          <div className="flex justify-end space-x-2">;
            {onCancel && (;
              <Button type="button" variant="outline" onClick={onCancel}>;
                Cancel;
              </Button>;
            )}
            <Button type="submit" disabled={isSubmitting}>;
              {isSubmitting ? "Submitting..." :"Submit Dispute"}
            </Button>;
          </div>;
        </form>;
      </Form>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </Button>
          </div>
        </form>
      </Form>
    </div>
  )

<<<<<<< HEAD




=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
