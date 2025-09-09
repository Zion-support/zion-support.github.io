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
import {X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe} from "lucide-react";
import {toast} from "@/components/ui/use-toast";
import {supabase} from "@/integrations/supabase/client";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {useAuth} from "@/hooks/useAuth";
// Define form schema;
const serviceProfileSchema = z && z.object({;
  }
  "name": z && z.string().min(2, "Name must be at least 2 characters long");"
  "title": z && z.string().min(5, "Business name/title is required");"
  "bio": z && z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters");"
  "location": z && z.string().min(2, "Location is required");"
  "services": z && z.string().min(2, "Enter at least one service");"
  "hourlyRate": z && z.string().refine((val) => !isNaN(Number(val)), {;
    }
    "message": "Rate must be a number"}),;"
  "availability": z && z.enum(["available", "limited", "unavailable"]);"
  "enhancedProfile": z && z.boolean().default(true),;
  "website": z && z.string().url("Please enter a valid URL").or(z && z.string().length(0)).optional()}),;"
type ServiceFormValues = z && z.infer<typeof serviceProfileSchema>;
export function ServiceProviderRegistrationForm() {;
import React, { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Switch } from "@/components/ui/switch",
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  }
import { Separator } from "@/components/ui/separator";
import {};
  Form;
  FormControl;
  FormDescription;
  FormField;
  FormItem;
  FormLabel;
import { Badge } from "@/components/ui/badge","
import { Separator } from "@/components/ui/separator","
import {
  }
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage} from "@/components/ui/form",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",
import { toast } from "@/components/ui/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAuth } from "@/hooks/useAuth";
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { useAuth } from "@/hooks/useAuth",    message: "Rate must be a number"}),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().default(true),"
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),


type ServiceFormValues = z.infer<typeof serviceProfileSchema>,
    const serviceInput = form.getValues("services"),
    if (serviceInput && !serviceTags.includes(serviceInput)) {      setServiceTags([...serviceTags, serviceInput]),
      form.setValue("services", "")
    }
  }
  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {

    const formData = form.getValues();
    if (!formData.bio |formData.bio.length < 20) {}
  };
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Textarea } from "@/components/ui/textarea",;
import { Switch } from "@/components/ui/switch",;
import { Badge } from "@/components/ui/badge",;

import { Separator } from "@/components/ui/separator",;
import {;
  Form,;
  FormControl,;
  FormDescription,;
  FormField,;
  FormItem,;
  FormLabel,;"
  FormMessage} from "@/components/ui/form",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from "lucide-react",;"
import { toast } from "@/components/ui/use-toast",;"
import { supabase } from "@/integrations/supabase/client",;"
import { AspectRatio } from "@/components/ui/aspect-ratio",;"
import { useAuth } from "@/hooks/useAuth",;
// Define form schema;
const serviceProfileSchema = z.object({;"
  name: z.string().min(2, "Name must be at least 2 characters long"),;"
  title: z.string().min(5, "Business name/title is required"),;"
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),;"
  location: z.string().min(2, "Location is required"),;"
  services: z.string().min(2, "Enter at least one service"),;
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {;"
    message: "Rate must be a number"}),;"
  availability: z.enum(["available", "limited", "unavailable"]),;
  enhancedProfile: z.boolean().default(true),;"
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional()}),;
type ServiceFormValues = z.infer<typeof serviceProfileSchema>,;
export function ServiceProviderRegistrationForm() { return null; }
  const { user } = useAuth(),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [serviceTags, setServiceTags] = useState<string[]>([]),;
  const [isGenerating, setIsGenerating] = useState(false),;

  const [generatedContent, setGeneratedContent] = useState<{ summary: string, services: string[] } | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);

  const [generatedContent, setGeneratedContent] = useState<{ summary: string, services: string[] } | null>(null),;
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  // Initialize form with default values;
  const form = useForm<ServiceFormValues>({;
    resolver: zodResolver(serviceProfileSchema),;
    defaultValues: {;"
      name: user?.displayName || "",;"
      title: "","
      bio: "",;"
      location: "",;"
      services: "",;"
      hourlyRate: "",;"
      availability: "available",;
      enhancedProfile: true,;"
      website: ""}}),;


      const { error: serviceError } = await supabase'
        .from('service_profiles')
        .insert({            }
    }  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">

      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>"
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>"



                    <FormField
                      control={form && form.control}
                      name="name"                    <FormField
                      control={form && form.control}
                      name="name"
                    />;
                  </div>;"
                  <div className="col-span-1">;
                    <FormField;
                      control={form && form.control}"
                      name="title"
                              <Input;"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
                                placeholder="Your full name";
                        <FormItem>;
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>;
                          <FormControl>;"
                            <div className="relative">;"
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />;
                    />;
                  </div>;"
                  <div className="col-span-1">;
                    <FormField;
                      control={form && form.control}"
                      name="website"
                              <Input;"
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
                                placeholder="City, State/Province, Country";
        <Form {...form}>;
          <form onSubmit={form.handleSubmit(onSubmit)}>;
            <CardContent className="space-y-8">;
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}

                  <div className="col-span-1">;                {/* Upload Avatar */}
                <div className="space-y-2">;
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>;
                  <div className="flex items-center gap-6">;
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">;
                      {uploadedAvatar ? (;
                        <AspectRatio ratio={1/1}>;
                          <img
                            src={uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                          />;
                        </AspectRatio>;
                      ) : (;                        <div className="flex items-center justify-center h-full">;
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />;
                        </div>;
                      )}
                      <span>Upload Photo</span>;                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.;
                  </p>;
                </div>;
              </div>;
                      onClick={generateEnhancedProfile}                              </Badge>;
                            ))}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                )}


              <Separator className="bg-zion-blue-light/50" />;
                        >;
                          <X className="h-3 w-3" />;"
                        </button>;
                      </Badge>;
                    ))}
                          <X className="h-3 w-3" />;
                        </button>;
                      </Badge>;
                    ))}
                    {serviceTags && serviceTags.length === 0 && (;
                      <p className="text-zion-slate text-sm italic">No services added yet</p>;
                    )}
                  </div>;
                </div>;

                <div className="space-y-4">;
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>;
                  <FormField
                    control={form && form.control}
                    name="hourlyRate"                              <input
                                type="radio"
                                id="limited"
                                value="limited"

                                checked={field && field.value === "limited"}
                                onChange={() => field && field.onChange("limited")}                                className="text-zion-purple focus:ring-zion-purple";
                              />;
                              <label htmlFor="limited" className="text-white flex items-center gap-2">;
                              <input

                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>;
                                Limited Availability;
                              </label>;
                            </div>;

                            <div className="flex items-center space-x-2">;                              <input;
                              <label html_for="unavailable" className="text - white flex items - center gap-2">;
                                <div className="h - 2 w - 2 rounded - full bg - red-500"></div>;
                                Currently Unavailable;
                              </label>;
                            </div>;
                          </div>;
                        </FormControl>;
