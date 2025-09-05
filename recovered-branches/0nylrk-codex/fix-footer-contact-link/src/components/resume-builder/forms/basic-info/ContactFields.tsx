
<<<<<<< HEAD
<<<<<<< HEAD
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form",
import { Input } from "@/components/ui/input",
import { Control } from "react-hook-form",
import { BasicInfoFormData } from "./schema",
=======
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Control } from &quot;react-hook-form&quot;;
import { BasicInfoFormData } from &quot;./schema&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ContactFieldsProps {
  control: Control<BasicInfoFormData>
}

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField
        control={control}
        name=&quot;location&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder=&quot;San Francisco, CA&quot; {...field} />
=======

interface ContactFieldsProps {_control: Control<BasicInfoFormData>;}

export function ContactFields(_{_control}: ContactFieldsProps) {_return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="location"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="San Francisco, CA" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;website&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://yourwebsite.com&quot; {...field} />
=======
        control={_control}
        name="website"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder="https://yourwebsite.com" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;linkedin&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://linkedin.com/in/username&quot; {...field} />
=======
        control={_control}
        name="linkedin"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/username" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;github&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder=&quot;https://github.com/username&quot; {...field} />
=======
        control={_control}
        name="github"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/username" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
