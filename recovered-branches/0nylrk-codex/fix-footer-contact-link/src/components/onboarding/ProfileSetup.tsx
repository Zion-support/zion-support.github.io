


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {User, Mail, AtSign, GraduationCap} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
<<<<<<< HEAD

const profileSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters");
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters");
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")});
type ProfileFormValues = z.infer<typeof profileSchema>;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { useState } from "react",
import { zodResolver } from "@hookform/resolvers/zod",
import { useForm } from "react-hook-form",
import { z } from "zod",
import { User, Mail, AtSign, GraduationCap } from "lucide-react",
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


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

const profileSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),

type ProfileFormValues = z.infer<typeof profileSchema>,

interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void
  userType: string
}
export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
    defaultValues: {
      displayName: ""
      bio: ""
      headline: ""}})
  const getTypeLabel = () => {
    switch (userType) {;

      case "serviceProvider": return "Service Provider";
    switch (userType) {
      case "serviceProvider": return "Service Provider",
      case "talent":
        return "Talent",
      case "client":
        return "Client",
      default:
        return "User"
    }
  }
  },

  return (


          <FormField
            control={form && form.control}
            name="displayName"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input
                      placeholder="Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />;
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;
              </FormItem>;


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            )}

          />;


          <FormField
            control={form && form.control}
            name="headline"
            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;
                    <Input
                      placeholder={`e && e.g., ${
                        userType === "serviceProvider" ? "Professional Videographer with 5+ years experience" :
                        userType === "talent" ? "Senior Motion Designer specialized in 3D Animation" :
                        "Creative Director at XYZ Studios"

                      }`}
                      className="bg - zion - blue pl - 10 text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple";
                      {...field}
                    />;

          />;


          <FormField
            control={form && form.control}
            name="bio"
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
                    className="bg - zion - blue text - white placeholder:text - zion - slate border - zion - blue - light focus:border - zion - purple min - h-[120px]";
                    {...field}
<<<<<<< HEAD
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile
          </Button>
        </form>
      </Form>
    </div>
  )


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
                  />;
                </FormControl>;

          />;

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hover:to-zion-purple text-white">;

            Complete Profile;
          </Button>;
        </form>;
      </Form>;
<<<<<<< HEAD

    </div>;
  );


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
;
