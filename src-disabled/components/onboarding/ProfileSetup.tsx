
:src_backup/components/onboarding/ProfileSetup.tsx
:src/components/onboarding/ProfileSetup.tsx
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form;

;
import { useState } from "react",import { zodResolver } from "@hookform/resolvers/zod",import { useForm } from "react-hook-form",import { z } from "zod",import { User, Mail, AtSign, GraduationCap  } from 'lucide-react';
import { Button } from "@/components/ui/button",import { Input  } from '@/components/ui/input';
import { Textarea  } from '@/components/ui/textarea';
import {Form;


:src_backup/components/onboarding/ProfileSetup.tsx
:src/components/onboarding/ProfileSetup.tsx
  FormMessage} from "@/components/ui/form",

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
interface ProfileSetupProps {
:src_backup/components/onboarding/ProfileSetup.tsx
:src_backup/components/onboarding/ProfileSetup.tsx



:src_backup/components/onboarding/ProfileSetup.tsx
:src/components/onboarding/ProfileSetup.tsx
      displayName: ""
      bio: ""
      headline: ""}})
  const getTypeLabel = () => {
    switch (userType) {
      case "serviceProvider": return "Service Provider"
      case "talent":
        return "Talent"
      case "client":
        return "Client"
      default:
        return "User"
    }
      case "serviceProvider": return "Service Provider",
      case "talent":
        return "Talent",
      case "client":
        return "Client",
      default:
        return "User"
    }
  },
:src_backup/components/onboarding/ProfileSetup.tsx
:src_backup/components/onboarding/ProfileSetup.tsx
:src_backup/components/onboarding/ProfileSetup.tsx
:src_backup/components/onboarding/ProfileSetup.tsx
:src_backup/components/onboarding/ProfileSetup.tsx


:src/components/onboarding/ProfileSetup.tsx
            )}
          />
          <FormField
            control = {form.control,}
            name="headline"
            render={({ field }: { field: any },) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={`e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"
:src_backup/components/onboarding/ProfileSetup.tsx


                    <Input;
                      placeholder={`e.g., ${userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :;
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
                      }`}<div className="space - y-6">;
      <div className="text - center mb - 6">;


:src_backup/components/onboarding/ProfileSetup.tsx
            control = {form.control }
            name="display_name";
            render={({ field }: { field: any }, ) => (<FormItem>;
            control = {form.control, }"
            name="display_name";


:src_backup/components/onboarding/ProfileSetup.tsx
            control = {form.control }
            name="headline";
            render={({ field }: { field: any }, ) => (<FormItem>;
            control = {form.control, }"
            name="headline";


:src_backup/components/onboarding/ProfileSetup.tsx
                    <Input;
                      placeholder={`e.g., ${user_type === "service_provider" ? "Professional Videographer with 5+ years experience" :;
                        user_type === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;/>;<FormField;
            control = {form.control}
            name="bio";
            render={({ field }: { field: any },) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;


:src_backup/components/onboarding/ProfileSetup.tsx
            control = {form.control }
            name="bio";
            render={({ field }: { field: any }, ) => (<FormItem>;
                <FormLabel className="text - zion - slate - light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${userType === "serviceProvider" ? "services and expertise" :;
                      userType === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
                    {...field}
                  />;
                </FormControl>;}`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}/>;
          <FormField;
            control={form.control}
            name="bio";
            render={({ field }: { field: any }) => (<FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea;
                    placeholder={`Tell us about your ${userType === "serviceProvider" ? "services and expertise" :;
                      userType === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";
                    {...field}
                  />;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;
            )}
:src_backup/components/onboarding/ProfileSetup.tsx
            control = {form.control, }"
            name="bio";


:src/components/onboarding/ProfileSetup.tsx
          />
          <FormField
            control = {form.control,}
            name="bio"
            render={({ field }: { field: any },) => (
:src_backup/components/onboarding/ProfileSetup.tsx


              <FormItem>

                <FormLabel className="text-zion-slate-light">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === "serviceProvider" ? "services and expertise" :
                      userType === "talent" ? "skills and experience" :
                      "business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]";

                    {...field}
                  />
                </FormControl>"
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />



:src_backup/components/onboarding/ProfileSetup.tsx

          




          

:src/components/onboarding/ProfileSetup.tsx
          <Button
            type="submit"
:src_backup/components/onboarding/ProfileSetup.tsx



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
:src_backup/components/onboarding/ProfileSetup.tsx
  );
  );
origin/cursor/automate-test-improve-and-merge-code-2533



  );
origin/cursor/automate-test-improve-and-merge-code-2533
case "talent": return "Talent";";
case "client": return "Client";
default: ;
};
getTypeLabel () ";


:src_backup/components/onboarding/ProfileSetup.tsx
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
}Profile</h3> <p className=text-zion-slate-light mt-2> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className=relative > <Inputplaceholder="Your full name" className=bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {


}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
:src_backup/components/onboarding/ProfileSetup.tsx
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field "
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ;
}/> </FormControl> <FormMessage className=text-red-400" /> </FormItem>) ;
}/> <Button > Complete Profile </Button> </form> </Form> </div>) ;
}"}

}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;
  ...field ";
  )/>;
          <Button;
            type="submit";
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white";
          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;
    </div>;
  ))case "talent": return "Talent";";
case "client": return "Client";
default: ;}getTypeLabel () ";}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Inputplaceholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <InputclassName="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <TextareaclassName="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}"}<FormMessage className="text - red - 400" />;
}"}


:src_backup/components/onboarding/ProfileSetup.tsx
    </div>)case "talent": return "Talent";";
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
:src_backup/components/onboarding/ProfileSetup.tsx
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}"}
}}"}}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {
    </div>)case "talent": return "Talent";";
case "client": return "Client";
default:;
}
getTypeLabel () ";
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text - zion - slate - light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <User className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ";
}/> <GraduationCap className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>) ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}"}
}}"}}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {...field ";
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]" {
    </div>)case talent: return "Talent";;
case client": return "Client;
default:;
}
getTypeLabel () ;
}Profile</h3> <p className="text - zion - slate - light mt - 2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className=text - zion - slate - light>Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder=Your full name className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ;
}/> <User className=absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light">Professional Headline</FormLabel> <FormControl> <div className=relative > <Input className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple" {...field ;
}/> <GraduationCap className=absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate h - 4 w - 4" /> </div> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>) ;
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className=bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px] {...field ";
}/> </FormControl> <FormMessage className="text - red - 400 /> </FormItem>)}/> <Button > Complete Profile </Button> </form> </Form> </div>)}}
}}"}}Profile</h3> <p className="text-zion-slate-light mt-2> Help others get to know you better </p> </div> <FormItem> <FormLabel className=text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative > <Input placeholder=Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple {...field ;
}/> <FormField <FormItem> <FormLabel className="text - zion - slate - light" >Bio</FormLabel> <FormControl> <Textarea className=bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px] {
  ...field ";
}/> </FormControl> <FormMessage className="text - red - 400" /> </FormItem>);
}/> <Button > Complete Profile </Button> </form> </Form> </div>);
}"}
}
;

}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {;

}"
:src_backup/components/onboarding/ProfileSetup.tsx
}"
