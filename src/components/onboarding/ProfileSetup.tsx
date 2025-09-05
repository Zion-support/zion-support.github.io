
import { useState } from &quot;react&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { z } from &quot;zod&quot;;
import { User, Mail, AtSign, GraduationCap } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from &quot;@/components/ui/form&quot;;

const profileSchema = z.object({
  displayName: z.string().min(2, &quot;Full Name must be at least 2 characters&quot;),
  bio: z.string().min(10, &quot;Bio must be at least 10 characters&quot;).max(500, &quot;Bio must be less than 500 characters&quot;),
  headline: z.string().min(5, &quot;Headline must be at least 5 characters&quot;).max(100, &quot;Headline must be less than 100 characters&quot;)});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileSetupProps {
  onComplete: (data: ProfileFormValues) => void;
  userType: string;
}

export function ProfileSetup({ onComplete, userType }: ProfileSetupProps) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: "&quot;,
      bio: "&quot;,
      headline: "&quot;}});

  const getTypeLabel = () => {
    switch (userType) {
      case &quot;serviceProvider&quot;:
        return &quot;Service Provider&quot;;
      case &quot;talent&quot;:
        return &quot;Talent&quot;;
      case &quot;client&quot;:
        return &quot;Client&quot;;
      default:
        return &quot;User";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Create Your {getTypeLabel()} Profile</h3>
        <p className="text-zion-slate-light mt-2">
          Help others get to know you better
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onComplete)} className="space-y-6&quot;>
          <FormField
            control={form.control}
            name=&quot;displayName"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                <FormControl>
                  <div className="relative&quot;>
                    <Input
                      placeholder=&quot;Your full name"
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400&quot; />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name=&quot;headline"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light">Professional Headline</FormLabel>
                <FormControl>
                  <div className="relative&quot;>
                    <Input
                      placeholder={`e.g., ${
                        userType === &quot;serviceProvider&quot; ? &quot;Professional Videographer with 5+ years experience&quot; :
                        userType === &quot;talent&quot; ? &quot;Senior Motion Designer specialized in 3D Animation&quot; :
                        &quot;Creative Director at XYZ Studios"
                      }`}
                      className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                      {...field}
                    />
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-400&quot; />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name=&quot;bio"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel className="text-zion-slate-light&quot;>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${
                      userType === &quot;serviceProvider&quot; ? &quot;services and expertise&quot; :
                      userType === &quot;talent&quot; ? &quot;skills and experience&quot; :
                      &quot;business and needs"
                    }`}
                    className="bg-zion-blue text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400&quot; />
              </FormItem>
            )}
          />
          
          <Button
            type=&quot;submit"
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          >
            Complete Profile
          </Button>
        </form>
      </Form>
    </div>
  );
}
