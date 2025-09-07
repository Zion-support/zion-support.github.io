import {
  // TODO: Implement
}
  FormField,



  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";""
import { Input } from "@/components/ui/input";""
import { UseFormReturn } from "react-hook-form";""
import { FormValues } from "./useHireRequestForm";"
interface PersonalInfoFieldsProps {
  // TODO: Implement
  form: UseFormReturn<FormValues>;

    <>;
      <FormField;
        control={form && form.control}"
        name="requesterName""
        render={({ field }) => (

          <FormItem>
"
            <FormLabel className="text-white">Your Name"
            <FormControl>

              <Input;"
                placeholder="Enter your full name""
                {...field}"
                className="bg-zion-blue-light/20 border-zion-blue-light text-white""
              />;

            ;
            <FormMessage />;

        name="requesterEmail"")

            <FormLabel className="text-white">Your Email"

                placeholder="Enter your email address"""
                type="email""


    </>)
  );
  // TODO: Implement





  form: UseFormReturn<FormValues> 

  return (<> <FormField control= {
  form.control;)"
}<FormItem> <FormLabel className="text-white" >Your Name <FormControl> <Input />  <FormMessage /> )"
}/> <FormField <FormItem> <FormLabel className="text-white" >Your Email <FormControl> <Input />  <FormMessage /> )"

}/> </>) 
  // TODO: Implement
  FormMessage,"
  // TODO: Implement




    <>
        control={form.control}"


              />

            
            <FormMessage />

          



            

          
  )