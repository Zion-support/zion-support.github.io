interface CategorizedSkills {
  programming: string[]
  devops: string[]
  platforms: string[]
  softSkills: string[]
  other: string[]

<<<<<<< HEAD

import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {useAuth} from "@/hooks/useAuth";import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Switch } from "@/components/ui/switch",;
import { Badge } from "@/components/ui/badge",;

import { Separator } from "@/components/ui/separator",;
import {;
  }
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;
  FormMessage} from "@/components/ui/form",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound } from "lucide-react",;
import { toast } from "@/components/ui/use-toast",;
import { supabase } from "@/integrations/supabase/client",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { useAuth } from "@/hooks/useAuth",;  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentProfileSchema)
    defaultValues: {
      name: user?.displayName |""
      title: ""
      bio: ""
      location: ""
      skills: ""
      hourlyRate: ""
      availability: "available"
      enhancedProfile: true}})
  // Handle adding skill tags
  const handleAddSkill = () => {
    const skillInput = form.getValues("skills"),
    if (skillInput && !skillTags.includes(skillInput)) {
  // Handle key press in skills input (add on enter)
  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
  }
  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
    const formData = form.getValues();
    if (!formData.bio |formData.bio.length < 20) {
  };
;
export function TalentRegistrationForm() {;
  // Remove the useToast() hook since we're importing the toast function directly;
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [skillTags, setSkillTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedContent, setGeneratedContent] = useState<EnhancedProfile | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null),;
    }

    const skillInput = form.getValues("skills"),;
    if (skillInput && !skillTags.includes(skillInput)) {;
      setSkillTags([...skillTags, skillInput]),;
      form.setValue("skills", "");
    }


  // Handle removing skill tags;
  const handleRemoveSkill = (skill: string) => {;
    setSkillTags(skillTags && skillTags.filter((s) => s !== skill))
};

  // Handle key press in skills input (add on enter);
  const handleSkillKeyPress = (e: React && React.KeyboardEvent) => {;"
    if (e && e.key === "Enter") {;
      e && e.preventDefault(),;
      handleAddSkill();
    }
  };



  // Handle avatar upload;
  const handleAvatarUpload = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const file = e && e.target.files?.[0];
    if (file) {;
      const reader = new FileReader(),;
      reader && reader.onloadend = () => {;
        setUploadedAvatar(reader && reader.result as string)
};
      reader && reader.readAsDataURL(file);
    }
  };

  },;

  // Generate enhanced profile with AI;
  const generateEnhancedProfile = async () => {;
    const formData = form && form.getValues();
    if (!formData && formData.bio || formData && formData.bio.length < 20) {;
      toast({;
        title: "More information needed",,
  description: "Please provide at least a detailed bio before generating enhanced content."}),;
      return;
    }

      }

        throw new Error(error && error.message);
      }
      setGeneratedContent(data as EnhancedProfile);
;
  // Apply generated content to form;
  const applyGeneratedContent = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setSkillTags ([...skill_tags, skill_input]);
      form.set_value ("skills", "");
    }

            }
          });
        }

      if (newSkills && newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  };

  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500';
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
      }),;
      if (newSkills.length > 0) {;
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  },;
  // Get category color;
  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',;
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',;
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',;
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',;
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }
  },

  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
    try {
      await supabase.functions.invoke('send-email', {
        body: {
          to: email
          subject: "Your Zion Talent Profile Has Been Enhanced"
          html: `
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>
          `
        }
      })
    } catch (error) {
      console.error("Failed to send notification email:", error)
    }

  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({
        title: "Skills required"
        description: "Please add at least one skill to your profile."
        variant: "destructive"})
      return
    }

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
      }

      form.set_value ("bio", generated_content.summary);
;
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generated_content.categorized_skills;
      const new_skills: string[] = [],
      // Safely extract and flatten skills from each category;
      Object.values (allCategorizedSkills).for_each (category_skills => {}
        if () {) {}
  $2;
}
          category_skills.for_each (skill => {}
            if () {) {}
  $2;
}
              new_skills.push (skill);
            }
          });
        }
      });


>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

  // Handle form submission
  const onSubmit = async (values: TalentFormValues) => {
    if (skillTags.length === 0) {
      toast({
        title: "Skills required"
        description: "Please add at least one skill to your profile."
        variant: "destructive"})
      return
    }

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated")
      }

      form.set_value ("bio", generated_content.summary);
;
      // Extract all skills from categorized skills and properly type cast them;
      const allCategorizedSkills = generated_content.categorized_skills;
      const new_skills: string[] = [],
      // Safely extract and flatten skills from each category;
      Object.values (allCategorizedSkills).for_each (category_skills => {}
        if () {) {}
  $2;
}
          category_skills.for_each (skill => {}
            if () {) {}
  $2;
}
              new_skills.push (skill);
            }
          });
        }
      });
<<<<<<< HEAD
      if (newSkills.length > 0) {
        setSkillTags([...skillTags, ...newSkills])
      }
    }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500';
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500';
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500';
<<<<<<< HEAD



=======
    switch (category) {;      case 'programming': return 'bg-blue-500/20 "hover":bg-blue-500/30 text-blue-500';'
      }
      case 'devops': return 'bg-green-500/20 "hover":bg-green-500/30 text-green-500';'
      case 'platforms': return 'bg-amber-500/20 "hover":bg-amber-500/30 text-amber-500';'
      case 'softSkills': return 'bg-purple-500/20 "hover":bg-purple-500/30 text-purple-500';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }),;
      if (newSkills.length > 0) {;
        }
        setSkillTags([...skillTags, ...newSkills]);
      }
    }
  },;
  // Get category color;
<<<<<<< HEAD

  const getCategoryColor = (category: CategoryType) => {;
    switch (category) {;'
      case 'programming': return 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-500',;'
      case 'devops': return 'bg-green-500/20 hover:bg-green-500/30 text-green-500',;'
      case 'platforms': return 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-500',;'
      case 'softSkills': return 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-500',;'
      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;'
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';

    }
  },

=======
  const getCategoryColor = ("category": CategoryType) => {;
    }
    switch (category) {;
      }
      case 'programming': return 'bg-blue-500/20 "hover":bg-blue-500/30 text-blue-500',;'
      case 'devops': return 'bg-green-500/20 "hover":bg-green-500/30 text-green-500',;'
      case 'platforms': return 'bg-amber-500/20 "hover":bg-amber-500/30 text-amber-500',;'
      case 'softSkills': return 'bg-purple-500/20 "hover":bg-purple-500/30 text-purple-500',;'
      case 'other': return 'bg-gray-500/20 "hover":bg-gray-500/30 text-gray-500',;'
      "default": return 'bg-zion-purple/20 "hover":bg-zion-purple/30 text-zion-purple';'
    }
  },
  // Send notification email,
const sendEnhancementNotification = async ("userId": string, "email": string) => {
    }
    try {

          subject: "Your Zion Talent Profile Has Been Enhanced"
          html: `"
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">"
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>'
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>'
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>
            <p>You can review and edit these enhancements in your profile dashboard.</p>"
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">"
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>
            </div>
          </div>`
          `
        }
      })
    } catch (error) {"
      console.error("Failed to send notification email:", error)
    }
  }
  },


  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {}
    if (skillTags.length === 0) {}
      toast({"
        title: "Skills required""
        description: "Please add at least one skill to your profile.""
        variant: "destructive"})
      return;
    }
    setIsSubmitting(true);

    setIsSubmitting(true),

    try {}
      // For actual implementation with Supabase;
      if (!user?.id) {"
        throw new Error("User not authenticated")
      }
      await supabase.functions.invoke('send-email', {'
        }
        "body": {
          }
          "to": email;
    "subject": "Your Zion Talent Profile Has Been Enhanced""
          "html": ``          <div style="font-"family": Arial, sans-serif, max-"width": 600px, "margin": 0 auto,">"
            <h2 style=""color": #6D28D9,">Profile Enhancement Complete</h2>"
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>'
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>'
            <p>You can review and edit these enhancements in your profile dashboard.</p>
            <div style="margin-"top": 30px, padding-"top": 20px, border-"top": 1px solid #eee,">"
              <p style=""color": #666, font-"size": 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>"
            </div>
          </div>
          ``        }
      })
    } catch (error) {
      }
      console.error("Failed to send notification "email":", error)"
    }
  },
  // Handle form submission,
const onSubmit = async ("values": TalentFormValues) => {
    }
    if (skillTags.length === 0) {
      }
      toast({
        }
        "title": "Skills required""
        "description": "Please add at least one skill to your profile.""
"variant": "destructive"});"
return;
    }

    setIsSubmitting($2);
    try {
      // For actual implementation with Supabase
}
if (!user?.id) {
}
throw new Error("User not authenticated");"
      }
      // Enhance profile if not already done,
let finalSummary = "";"
      let finalSummary = "",;"
let finalSkills = skillTags,;
      if (values.enhancedProfile && !generatedContent) {
        }
        try {
          }
          const { "data": aiData } = await supabase.functions.invoke('talent-profile-enhancer', {'
            }
            "body": {
              }
              "talentData": {
                }
                "name": values.name,
"title": values.title,
"bio": values.bio,
"skills": skillTags,
"location": values.location
  // Send notification email,

>>>>>>> origin/cursor/delete-old-data-records-6bba
          const { data: aiData } = await supabase.functions.invoke('talent-profile-enhancer', {
            body: {
              talentData: {
                name: values.name
                title: values.title
                bio: values.bio
                skills: skillTags
                location: values.location

  // Send notification email
  const sendEnhancementNotification = async (userId: string, email: string) => {
      // Check condition
}
if ( {) {
  $2
}
        setSkillTags ([...skill_tags, ...new_skills]);
      }
    }
  }
;
  // Get category color;
  const getCategoryColor = ("category": CategoryType) =>: any {
    }
    switch (category) {
      }
      case 'programming': return 'bg - blue - 500 / 20 "hover":bg - blue - 500 / 30 text - blue - 500';'
      case 'devops': return 'bg - green - 500 / 20 "hover":bg - green - 500 / 30 text - green - 500';'
      case 'platforms': return 'bg - amber - 500 / 20 "hover":bg - amber - 500 / 30 text - amber - 500';'
      case 'soft_skills': return 'bg - purple - 500 / 20 "hover":bg - purple - 500 / 30 text - purple - 500';'
      case 'other': return 'bg - gray - 500 / 20 "hover":bg - gray - 500 / 30 text - gray - 500','
      "default": return 'bg - zion - purple / 20 "hover":bg - zion - purple / 30 text - zion - purple';'
    }
  }
;
  // Send notification email;

<<<<<<< HEAD
  const sendEnhancementNotification = async (user_id: string, email: string) => {
    try {
      await supabase.functions.invoke ('send - email', {
        body: {

      case 'other': return 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-500',;
      default: return 'bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple';
    }

        }
      });
    } catch (error) {;
      console && console.error("Failed to send notification email:", error);
    }

  };

  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
    if (skillTags && skillTags.length === 0) {;              }
            }
          });
          if (aiData) {
            finalSummary = (aiData as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user-provided skills
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills;
            const aiSkills: string[] = []
            // Extract skills from each category and ensure they're strings
            Object.values(categorizedSkills).forEach(categorySkills => {
              if (Array.isArray(categorySkills)) {
                categorySkills.forEach(skill => {
                  if (typeof skill === 'string' && skill) {
                    aiSkills.push(skill)
  },;
  // Send notification email;
  const sendEnhancementNotification = async (user_id: string, email: string) => {
    try {
      await supabase.functions.invoke ('send - email', {
        body: {
        }
      });
    } catch (error) {;
      console && console.error("Failed to send notification email:", error);
    }
  },;
  // Handle form submission;
  const onSubmit = async (values: TalentFormValues) => {;
    if (skillTags.length === 0) {;
      toast({;
        title: "Skills required",,
  description: "Please add at least one skill to your profile.",;
        variant: "destructive"}),;
      return;

    }
    setIsSubmitting(true);
          to: email,
          subject: "Your Zion Talent Profile Has Been Enhanced",
          html: `;
          <div style="font-family: Arial, sans-serif, max-width: 600px, margin: 0 auto,">;
            <h2 style="color: #6D28D9,">Profile Enhancement Complete</h2>;
            <p>Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!</p>;
            <p>We've added a professional summary and categorized your skills to help you stand out.</p>;
            <p>You can review and edit these enhancements in your profile dashboard.</p>;
            <div style="margin-top: 30px, padding-top: 20px, border-top: 1px solid #eee,">;
              <p style="color: #666, font-size: 12px,">© ${new Date().getFullYear()} Zion Marketplace</p>;
            </div>;
          </div>;
          `;
  };
  // Handle form submission;
  const on_submit = async (values: TalentFormValues) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Skills required",
        description: "Please add at least one skill to your profile.",
        variant: "destructive"}),
      return;
    }
    setIsSubmitting (true);
;
    try {
      // For actual implementation with Supabase;
      // Check condition;
if ( {) {}
  $2;
}"
        throw new Error ("User not authenticated");
      }                  }
                });
              }

            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];

          }                  if (typeof skill === 'string' && skill) {;
                    aiSkills && aiSkills.push(skill);
              talent_data: {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                name: values.name,
                title: values.title,
                bio: values.bio,
                skills: skill_tags,
                location: values.location;
              }
            }
          });
;
          // Check condition,
if ( {) {
  $2
}
            final_summary = (ai_data as EnhancedProfile).summary;
            // Safely merge AI suggested skills with user - provided skills;
            const categorized_skills = (ai_data as EnhancedProfile).categorized_skills;
<<<<<<< HEAD
            const ai_skills: string[] = [],'
            // Extract skills from each category and ensure they're strings;
;

      // Enhance profile if not already done;"
      let finalSummary = "",;
      let finalSkills = skillTags,;

=======
const "ai_skills": string[] = [],;
            // Extract skills from each category and ensure they're strings;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (values.enhancedProfile && !generatedContent) {;
        try {;'
          const { data: aiData } = await supabase.functions.invoke('talent-profile-enhancer', {;
            body: {;
              talentData: {;
                name: values.name,;
                title: values.title,;
                bio: values.bio,;
                skills: skillTags,;
                location: values.location;
              }
            }
          }),;
          if (aiData) {;
            finalSummary = (aiData as EnhancedProfile).summary,;
            // Safely merge AI suggested skills with user-provided skills;
            const categorizedSkills = (aiData as EnhancedProfile).categorizedSkills,;
            const aiSkills: string[] = [],;'
            // Extract skills from each category and ensure they're strings;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Object.values(categorizedSkills).forEach(categorySkills => {;
              if (Array.isArray(categorySkills)) {;
                }
                categorySkills.forEach((skill) => {;
                  }
                  if (typeof skill === 'string' && skill) {;'
                    }
                    aiSkills.push(skill);

<<<<<<< HEAD

=======
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
            Object.values (categorized_skills).for_each (category_skills => {
              if () {) {
  $2
<<<<<<< HEAD

}
                category_skills.for_each (skill => {
                  // Check condition
if ( {) {
  $2
=======


}
                category_skills.for_each (skill => {}
                  // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
                    ai_skills.push (skill);
                  }
                });
              }
            });
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
          }

            }),;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];

                  }
                })
              }
            });
            // Create a unique set of skills
            finalSkills = [...new Set([...skillTags, ...aiSkills])]
            }),;
            // Create a unique set of skills;
            finalSkills = [...new Set([...skillTags, ...aiSkills])];
        } catch (error) {

          console.error("Error enhancing profile:", error),
          // Continue with submission even if enhancement fails
          finalSummary = ""      // Create the talent profile
      // In a real implementation, this would save to Supabase
      setTimeout(() => {
        toast({
          title: "Profile Created Successfully"
          description: "Your talent profile has been published and is now visible in the directory."})
        // Send notification email if we have user email;
        if (userEmail && values.enhancedProfile) {}
          sendEnhancementNotification(user.id, userEmail)
        }

        setIsSubmitting(false)

      }, 1500),

      // Here would be the actual code to save the profile to Supabase
      /*
      const { error } = await supabase
        .from('talent_profiles')
        .insert({
          user_id: user.id
          name: values.name
          title: values.title
          bio: values.bio
          summary: finalSummary
          location: values.location
          skills: finalSkills.map(name => ({ name, level: 4 })), // Default skill level
          hourly_rate: Number(values.hourlyRate)
          availability_status: values.availability
          // Other fields would be handled here    <div className="max-w-4xl mx-auto p-4 md:p-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;"
          <CardTitle className="text-2xl text-white">Create Your Talent Profile</CardTitle>;"
          <CardDescription className="text-zion-slate">;"
            Showcase your skills and experience to potential clients and employers.;
          </CardDescription>;
        </CardHeader>;

        <Form {...form}>;
          <form onSubmit={form && form.handleSubmit(onSubmit)}>;
            <CardContent className="space-y-8">;

              {/* Basic Information */}
              <div className="space-y-4">;
                <h3 className="text-lg font-medium text-white">Basic Information</h3>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="name"                    <FormField
                      control={form && form.control}
                      name="name"
                      render={({ field }) => (;
                        <FormItem>;"
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="title"
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="Your full name";
                        <FormItem>;

                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                    />;
                  </div>;
                  <div className="col-span-1">;
                    <FormField
                      control={form && form.control}
                      name="hourlyRate"
                              <Input;
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="City, State/Province, Country";
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Hourly Rate (USD)</FormLabel>;
                          <FormControl>;
                            <div className="relative">;
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>;
                              <Input;

                                className="pl-8 bg-zion-blue border-zion-blue-light text-white";
                                placeholder="e.g., 85";
                            src={uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                          />;
                        </AspectRatio>;
                      ) : (;                        <div className="flex items-center justify-center h-full">;
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>;
                      )}

                    </div>;

                    <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">;
                      <Upload className="mr-2 h-4 w-4" />;
                      <span>Upload Photo</span>;                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;
              {/* Bio Section */}
              <div className="space-y-4">;"
                <h3 className="text-lg font-medium text-white">Professional Bio</h3>;"
                <FormField;
                  control={form.control}
                  name="bio";"
                  render={({ field }) => (;
                    <FormItem>;
                      <FormLabel className="text-zion-slate-light">About Yourself</FormLabel>;"
                      <FormControl>;
                        <Textarea;
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white";
                          placeholder="Describe your professional background, expertise, and the value you bring to clients...";
                          {...field}
                        />;
                      </FormControl>;
                      <FormMessage className="text-red-400" />;
                      <FormDescription className="text-zion-slate">;
                        {field && field.value?.length || 0}/1000 characters;                      </FormDescription>;
                    </FormItem>;
                  )}
                />;
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}                                <Badge
                                  className={`w-fit ${getCategoryColor(category as CategoryType)}`}>;
                                  {category}
                                </Badge>;
                                <div className="flex flex-wrap gap-1">;
                                  {skills && skills.map(skill => (;
                                    <Badge
                                      key={skill}
                                      className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none">;
                                      {skill}
                                    </Badge>;
                                  ))}
                                </div>;
                              </div>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}


              <Separator className="bg-zion-blue-light/50" />;
                    render={({ field }) => (;
                      <FormItem className="space-y-4">;
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>;
                        <FormControl>;
                          <div className="space-y-2">;
                            <div className="flex items-center space-x-2">;
                              <input
                                type="radio"
                                id="available"
                                value="available"

                                checked={field && field.value === "available"}
                                onChange={() => field && field.onChange("available")}                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="available" className="text-white flex items-center gap-2">;"
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;"
                                Available Now;
                              </label>;
                            </div>;
                            <div className="flex items-center space-x-2">;                              <input"
                                type="radio""
                                id="unavailable""
                                value="unavailable"                              <input;"
                                type="radio";"
                                id="unavailable";"
                                value="unavailable";"
                                checked={field.value === "unavailable"}"
                                on_change={() => field.on_change ("unavailable")}"
                                className="text - zion - purple "focus":ring - zion-purple";"
                              />;
                              <label html_for="unavailable" className="text - white flex items - center gap-2">;"
                                <div className="h - 2 w - 2 rounded - full bg - red-500"></div>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                                <div className="h-2 w-2 rounded-full bg-green-500"></div>;
                                Available Now;
                              </label>;
                            </div>;

                            <div className="flex items-center space-x-2">;                              <input
                                type="radio"
                                id="unavailable"
                                value="unavailable"                              <input;
                                type="radio";
                                id="unavailable";
                                value="unavailable";
                                checked={field.value === "unavailable"}
                                on_change={() => field.on_change ("unavailable")}
                                className="text - zion - purple focus:ring - zion-purple";
                              />;
                              <label html_for="unavailable" className="text - white flex items - center gap-2">;
                                <div className="h - 2 w - 2 rounded - full bg - red-500"></div>;
                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;
                    />;
                    <FormDescription className="text-zion-slate mt-1 && 1.5 text-sm">;