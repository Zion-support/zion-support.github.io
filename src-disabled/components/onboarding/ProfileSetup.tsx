:src_backup/components/onboarding/ProfileSetup.tsx
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form;
  FormControl;
  FormField;
  FormItem;
  FormLabel;
:src_backup/components/onboarding/ProfileSetup.tsx
  FormMessage} from "@/components/ui/form",

const profileSchema = null;
import {
  Form
  FormControl
  FormField
  FormItem
  FormLabel
  FormMessage} from "@/components/ui/form"
const profileSchema = z.object({
  displayName: z.string().min(2, "Full Name must be at least 2 characters")
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters")
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")})
type ProfileFormValues = z.infer<typeof profileSchema>
origin/cursor/automate-test-improve-and-merge-code-2533
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string}

}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
:src/components/onboarding/ProfileSetup.tsx

import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",

interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void,
  userType: string
}

export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: "",
      bio: "",
      headline: ""}}),

  const getTypeLabel = () => {
    switch (userType) {
      case "serviceProvider": return "Service Provider",
      case "talent":
        return "Talent",
      case "client":
        return "Client",
      default:
        return "User"
    }
  },


:src/components/onboarding/ProfileSetup.tsx
userType: string;
}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {}
  const form = useForm<ProfileFormValues>({}
    resolver: zodResolver(profileSchema)
    defaultValues: {}

  return (
    <div className="space-y-6">"
      <div className="text-center mb-6">"
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>"
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>
      </div>

:src_backup/components/onboarding/ProfileSetup.tsx
      <Form {...form}>
      <Form {...form}>"
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">
          <FormField;
            control={form.control}"
            name="displayName"
            render={({ field }: { field: any }) => (
              <FormItem>"
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>"
                  <div className="relative">
                    <Input"
                      placeholder="Your full name""
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />"
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
:src_backup/components/onboarding/ProfileSetup.tsx

import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
"
import { useState } from "react",;"
import { zodResolver } from "@hookform/resolvers/zod",;"
import { useForm } from "react-hook-form",;"
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react';"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;
const profileSchema = z.object({;"
  displayName: z.string().min(2, "Full Name must be at least 2 characters"),;"
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),;"
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),;
type ProfileFormValues = z.infer<typeof profileSchema>,;
interface ProfileSetupProps {;
  onComplete: (data:,  ProfileFormValues) => void,;
  userType: string;
}
;
export function ProfileSetup({ onComplete, userType }:,  ProfileSetupProps) {;
  const form = useForm<ProfileFormValues>({;
    resolver: zodResolver(profileSchema),;
    defaultValues: {;,
  onComplete: (data: ProfileFormValues) => void,;
  userType: string;
}
;
export function ProfileSetup() { return null; }
      headline: ""}}),;
  const getTypeLabel = () => {;
:src_backup/components/onboarding/ProfileSetup.tsx
    switch (userType) {;
      case "serviceProvider": return "Service Provider",;
      case "talent":;
        return "Talent",;
      case "client":;
        return "Client";
      default:;"
        return "User";
    }
:src_backup/components/onboarding/ProfileSetup.tsx
  };
  return (;
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;
  }

  return (
"
    <div className="space-y-6">;"
      <div className="text-center mb-6">;"
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;"
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
:src_backup/components/onboarding/ProfileSetup.tsx
      <Form {...form}>;
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="displayName";
            render={({ field }: { field: any }) => (;
              <FormItem>;
          <FormField
            control = {form && form.control,}
            name="displayName""
            render={({ field }: { field: any },) => (;
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6">;
          <FormField;
            control={form.control}
            name="displayName";
            render={({ field }: { field: any }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
                    <Input;"
                      placeholder="Your full name";"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;"
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
:src_backup/components/onboarding/ProfileSetup.tsx
          />;
:src/components/onboarding/ProfileSetup.tsx

          <FormField;
            control = {form && form.control,}"
            name="headline"
          />;
          <FormField
            control = {form && form.control,}
            name="headline""
            render={({ field }: { field: any },) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
          />;
          <FormField;
:src_backup/components/onboarding/ProfileSetup.tsx
            control={form.control}"
            name="headline"
            render={({ field }: { field: any }) => (
<FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>"
            control={form.control}
            name="headline""
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>"
                <FormControl>
                  <div className="relative">"
                    <Input placeholder={`e.g., ${`
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :"
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :"
                        "Creative Director at XYZ Studios""
    <div className="space - y-6" />;
                  <div className="relative">
                    <Input;
                      placeholder={`e.g., ${"
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :"
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :"
                        "Creative Director at XYZ Studios"
:src_backup/components/onboarding/ProfileSetup.tsx
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";

    <div className="space - y-6">;
      <div className="text - center mb - 6">;
        <h3 className="text - 2xl font - bold text - white">Create Your {getTypeLabel ()} Profile</h3>;
        <p className="text - zion - slate - light mt - 2">;
          Help others get to know you better;
        </p>;
      </div>;
      <Form {...form}>;"
        <form on_submit={form.handle_submit (on_complete)} className="space - y-6">;
          <FormField;
            control = {form.control, }"
            name="display_name";
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Full Name</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
                    <Input;"
                      placeholder="Your full name";"
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                      {...field}
                    />;"
                    <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }"
            name="headline";
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;
:src_backup/components/onboarding/ProfileSetup.tsx
                    <Input;`
                      placeholder={`e.g., ${"
                        user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;"
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;"
                        "Creative Director at XYZ Studios";
}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />;
          />;
:src_backup/components/onboarding/ProfileSetup.tsx

          <FormField;
            control = {form.control,}"
            name="bio"
            render={({ field }: { field: any },) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea"
                    <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <FormField;
            control = {form.control, }"
            name="bio";
            render={({ field }: { field: any }, ) => (
              <FormItem>;"
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;
:src_backup/components/onboarding/ProfileSetup.tsx
                  <Textarea;`
                    placeholder={`Tell us about your ${"
                      userType === "serviceProvider" ? "services and expertise" :"
                      userType === "talent" ? "skills and experience" :"
                      "business and needs"`
                    }`}"
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {...field}
                  />;
                </FormControl>;
`
                      }`}"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />"
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
:src_backup/components/onboarding/ProfileSetup.tsx
/>;
          <FormField;
            control={form.control}"
            name="bio"
            render={({ field }: { field: any }) => (

:src_backup/components/onboarding/ProfileSetup.tsx

              <FormItem>
                      }`}              <FormItem>
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
:src_backup/components/onboarding/ProfileSetup.tsx
                    {...field}
                  />
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

:src_backup/components/onboarding/ProfileSetup.tsx
          <Button
            type="submit"
          <Button"
            type="submit""
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile;
          </Button>
:src_backup/components/onboarding/ProfileSetup.tsx
      </Form>
    </div>
  )
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}

        </form>
      </Form>
    </div>

        </form>
      </Form>
    </div>
  )
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
          />;
          <Button;"
            type="submit";"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
:src_backup/components/onboarding/ProfileSetup.tsx
  );
}
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
case "talent": return "Talent";";
case "client": return "Client";
default: ;
};
getTypeLabel () ";
:src_backup/components/onboarding/ProfileSetup.tsx
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field "
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
  );"
case "talent": return "Talent";";"
case "client": return "Client";
default: ;

};"
getTypeLabel () ";"
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
  ...field ""
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {"
  ...field ""
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {"
  ...field ""
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;"
}"}
:src_backup/components/onboarding/ProfileSetup.tsx

                <FormMessage className="text - red-400" />;
              </FormItem>)}
          />;
          <Button;
            type="submit";
:src_backup/components/onboarding/ProfileSetup.tsx
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text-white";
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
:src_backup/components/onboarding/ProfileSetup.tsx
    </div>);"
case "talent": return "Talent";";"
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple" {
  ...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w-4" /> </div> </FormControl> <FormMessage className="text - red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple" {
  ...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w-4" /> </div> </FormControl> <FormMessage className="text - red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min-h-[120px]" {
  ...field ";
}/> </FormControl> <FormMessage className="text - red-400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}"}
}"}

    </div>);
case "talent": return "Talent";";
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {",
  ...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}"}
}
;
}"}
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {;
  ...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"
:src/components/onboarding/ProfileSetup.tsx
}"
getTypeLabel () ";"
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";"
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {"
  ...field ";"
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";"
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {"
  ...field ";"
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);"
}"}'"`
