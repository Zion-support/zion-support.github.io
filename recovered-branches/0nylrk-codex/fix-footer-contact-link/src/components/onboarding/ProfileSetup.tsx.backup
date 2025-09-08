<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  displayName: z.string().min(2, "Name must be at least 2 characters");
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters");
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")});
type ProfileFormValues = z.infer<typeof profileSchema>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",

import { Textarea } from "@/components/ui/textarea",
import {}

  Form,
  FormControl,
  FormField,
  FormItem,

<<<<<<< HEAD
  FormLabel,
  FormMessage} from "@/components/ui/form",


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
const profileSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),

  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),

type ProfileFormValues = z.infer<typeof profileSchema>,


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
  const getTypeLabel = () => {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        return "Talent";
      case "client":;

        return "Client";
      default:;"
        return "User";
    }
  }

<<<<<<< HEAD
    switch (userType) {;
      case "serviceProvider": return "Service Provider";

    switch (userType) {
      case "serviceProvider": return "Service Provider",



=======
    switch (userType) {
      case "serviceProvider": return "Service Provider",
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "talent":
        return "Talent",
      case "client":

        return "Client",
      default:"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return "User"
    }

  return (


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <FormField
            control={form.control}

            name="displayName"
            render={({ field }) => (
              <FormItem>"
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>"
                  <div className="relative">
                    <Input"
                      placeholder="Your full name""
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}"
      case "talent":;"
        return "Talent";"
      case "client":;"
        return "Client";
      default:;"
        return "User";
    }

<<<<<<< HEAD
  };
  return (;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;

        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <FormField
            control={form && form.control}

            name="displayName"
            render={({ field }) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;

                  <div className="relative">;
<<<<<<< HEAD

=======


                    <Input"
                      placeholder="Your full name""
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />;"
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;"
                <FormMessage className="text-red-400" />;
<<<<<<< HEAD

          />;
          <FormField
            control={form && form.control}
            name="headline"
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="headline";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
          />;
          <FormField
            control={form && form.control}
            name="bio"
                    <Input;
                      placeholder={`e.g., ${;
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :;
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="bio";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
              </FormItem>;

=======


            )}
          <FormField;
            control={form && form.control}"
            name="headline"

            render={({ field }) => (;
              <FormItem>;"
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;"
                  <div className="relative">;

                    <Input
                      placeholder={`e && e.g., ${

                      }`}
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion-purple";
                      {...field}
                    />;
          <FormField
            control={form && form.control}
            name="bio"
/>;
          />;
          <FormField
            control={form && form.control}
            name="bio"
                    <Input;
                      placeholder={`e.g., ${;
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :;
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :;
                        "Creative Director at XYZ Studios";
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple";
                      {...field}
                    />;
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;            )}
          />;
          ;
          <FormField;
            control={form.control}
            name="bio";
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;
                  <Textarea
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

            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white">;

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <FormMessage className="text - red - 400" />;
              </FormItem>)}
          />;
          <Button;"
            type="submit";"
            className="w - full bg - gradient - to - r from - zion - purple to - zion - purple - dark hover: from - zion - purple - light hover:to - zion - purple text - white";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Complete Profile;

          </Button>;
        </form>;
      </Form>;

          </Button>;
        </form>;
      </Form>;


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
</div>);
}
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

<<<<<<< HEAD



=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
