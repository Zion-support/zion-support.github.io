
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {User, Mail, AtSign, GraduationCap} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

const profileSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),

  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),

type ProfileFormValues = z.infer<typeof profileSchema>,
interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void
  userType: string

}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {}
  const form = useForm<ProfileFormValues>({}
    resolver: zodResolver(profileSchema)
    defaultValues: {"
      displayName: """
      bio: """
      headline: ""}})
  const getTypeLabel = () => {      case "talent":;
        return "Talent";
      case "client":;

        return "Client";
      default:;"
        return "User";
    }
  }

    switch (userType) {
      case "serviceProvider": return "Service Provider",
    switch (userType) {
      case "serviceProvider": return "Service Provider",

      case "talent":
        return "Talent",
      case "client":

        return "Client",
      default:"

                      placeholder="Your full name";
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple";
                      }`}
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple";
                      {...field}
                    />;
          <FormField
            control={form && form.control}
            name="bio"
          />;
          <FormField
            control={form && form.control}
            name="bio"
                    <Input;
                    placeholder={`Tell us about your ${
                      user_type === "service_provider" ? "services and expertise" :;
                      user_type === "talent" ? "skills and experience" :;
                      "business and needs";
                    }`}
                    className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min-h-[120px]";
                    {...field}
                  />;
                </FormControl>;
          />;

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white">;          >;
          </Button>;
        </form>;
      </Form>;

}
    </div>);
    </div>;
  ); import {};
  Form;
FormControl;
FormField;
FormItem;
FormLabel;
const profileSchema = z.object ({"
  displayName: z.string () .min (2, "Name must be at least 2 characters");"
bio: z.string () .min (10, "Bio must be at least 10 characters") .max (500, "Bio must be less than 500 characters");"
headline: z.string () .min (5, "Headline must be at least 5 characters") .max (100, "Headline must be less than 100 characters") 
});"
case "talent": return "Talent";"
case "client": return "Client";
default: 
}
};
getTypeLabel () 
}Profile</h3> <p className="text-zion-slate-light mt-2"> Help others get to know you better </p> </div> <FormItem> <FormLabel className="text-zion-slate-light">Full Name</FormLabel> <FormControl> <div className="relative" > <Input placeholder="Your full name" className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field 
}/> <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel> <FormControl> <div className="relative" > <Input className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple" {
  ...field 
}/> <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" /> </div> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel className="text-zion-slate-light" >Bio</FormLabel> <FormControl> <Textarea className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]" {
  ...field 
}/> </FormControl> <FormMessage className="text-red-400" /> </FormItem>) 
}/> <Button > Complete Profile </Button> </form> </Form> </div>) 
}
    </div>;
  );
}
;
