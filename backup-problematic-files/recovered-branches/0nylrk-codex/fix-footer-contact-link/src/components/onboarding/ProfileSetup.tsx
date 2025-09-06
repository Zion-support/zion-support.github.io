
=======
import { useState } from "react",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { useForm } from "react-hook-form",;
import { z } from "zod",;
import { User, Mail, AtSign, GraduationCap } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import {;
  Form,;
  FormControl,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
;
const profileSchema = z.object({;
  displayName:z.string().min(2, "Name must be at least 2 characters"),;
  bio:z.string().min(10, "Bio must be at least 10 characters").max(500, "Bio must be less than 500 characters"),;
  headline:z.string().min(5, "Headline must be at least 5 characters").max(100, "Headline must be less than 100 characters")}),;
;
type ProfileFormValues = z.infer<typeof profileSchema>,;
;
interface ProfileSetupProps {;
  onComplete:(data:ProfileFormValues) => void,;
  userType:string;
}
;
export function ProfileSetup({ onComplete, userType } ProfileSetupProps) {;
  const form = useForm<ProfileFormValues>({;
    resolver:zodResolver(profileSchema),;
    defaultValues:{;
      displayName:"",;
      bio:"",;
      headline:""}}),;
;
  const getTypeLabel = () => {;
    switch (userType) {;
      case "serviceProvider":return "Service Provider",;
      case "talent":;
        return "Talent",;
      case "client":;
        return "Client",;
      default:;
        return "User";
    }
  },;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>;
        <p className="text-zion-slate-light mt-2">;
          Help others get to know you better;
        </p>;
      </div>;
<<<<<<< HEAD

            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                <FormControl>;
                  <div className="relative">;

                      {...field}
                    />;
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                  </div>;
                </FormControl>;
                <FormMessage className="text-red-400" />;

            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>;
                <FormControl>;
                  <div className="relative">;

            render={({ field }) => (;
              <FormItem>;
                <FormLabel className="text-zion-slate-light">Bio</FormLabel>;
                <FormControl>;

          >;
            Complete Profile;
          </Button>;
        </form>;
      </Form>;

}