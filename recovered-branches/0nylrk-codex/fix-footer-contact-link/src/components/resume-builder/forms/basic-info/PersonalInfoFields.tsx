
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
interface PersonalInfoFieldsProps {
  control: Control<BasicInfoFormData>
}

export function PersonalInfoFields({ control }: PersonalInfoFieldsProps) {
  return (
    <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
      <FormField
        control={control}
        name=&quot;fullName&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder=&quot;John Doe&quot; {...field} />
=======

interface PersonalInfoFieldsProps {_control: Control<BasicInfoFormData>;}

export function PersonalInfoFields(_{_control}: PersonalInfoFieldsProps) {_return (_<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="fullName"
        render={_({ field}) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;title&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder=&quot;Senior Software Engineer&quot; {...field} />
=======
        control={_control}
        name="title"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder="Senior Software Engineer" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;email&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type=&quot;email&quot; placeholder=&quot;john@example.com&quot; {...field} />
=======
        control={_control}
        name="email"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john@example.com" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
<<<<<<< HEAD
        control={control}
        name=&quot;phone&quot;
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder=&quot;+1 234 567 8900&quot; {...field} />
=======
        control={_control}
        name="phone"
        render={_(_{ field}) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="+1 234 567 8900" {_...field} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
