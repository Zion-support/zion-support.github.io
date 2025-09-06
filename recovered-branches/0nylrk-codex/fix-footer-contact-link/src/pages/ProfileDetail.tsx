<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import {SEO} from "@/components/SEO";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe} from "lucide-react";
import {HireNowCTA} from "@/components/profile/HireNowCTA";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function ProfileDetail() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
=======
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect } from "react",
import { useParams } from "react-router-dom",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD

import {
  MapPin;
  Clock;
  Link as LinkIcon;
  Github;
  Twitter;
  Linkedin;
  CheckCircle2;
  Mail;
  Phone;
  Globe
<<<<<<< HEAD
} from "lucide-react",
<<<<<<< HEAD
=======
=======
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Link,
  as,
  LinkIcon,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { HireNowCTA } from "@/components/profile/HireNowCTA";
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { 
  MapPin;
  Clock;
  Link as LinkIcon;
  Github;
  Twitter;
  Linkedin;
  CheckCircle2;
  Mail;
  Phone;
  Globe
} from "lucide-react",import { HireNowCTA } from "@/components/profile/HireNowCTA";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
} from "lucide-react",import { HireNowCTA } from "@/components/profile/HireNowCTA";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams();
<<<<<<< HEAD
<<<<<<< HEAD
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setError(null),
      try {
        if (!profileId) {
          setError("Profile ID is missing."),
          return
        }
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


  useEffect(() => {;
    const fetchProfile = async () => {;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;
    const fetchProfile = async () => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true);
import { HireNowCTA } from "@/components/profile/HireNowCTA",
export default function ProfileDetail() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { profileId } = useParams(),
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setError(null),
      try {
        if (!profileId) {
          setError("Profile ID is missing."),
          return
        }
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single();
          .single(),
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      setIsLoading(true);
      setError(null);
      try {;
        if (!profileId) {;
          setError("Profile ID is missing.");
          return;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        }

          .single(),

          .single();
          .single(),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          .single();
          .single(),

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        if (error) {
          throw new Error(error.message);
        }
        if (!data) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
          setError("Profile not found."),
          return
        }
        setProfileData(data)
      } catch (err: any) {
        setError(err.message |"Failed to fetch profile.")
        toast({
          title: "Error"
          description: err.message |"Failed to fetch profile."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
<<<<<<< HEAD
=======
import { useState, useEffect } from "react",;
import { useParams } from "react-router-dom",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { SEO } from "@/components/SEO",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { ;
  MapPin,;
  Clock, ;
  Link as LinkIcon, ;
  Github, ;
  Twitter, ;
  Linkedin,;
  CheckCircle2,;
  Mail,;
  Phone,;
  Globe;
} from "lucide-react",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
;
export default function ProfileDetail() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { profileId } = useParams(),;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setError(null),;
      try {;
        if (!profileId) {;
          setError("Profile ID is missing."),;
          return,;
        }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
<<<<<<< HEAD
          .single();

        if (error) {;
          throw new Error(error && error.message);
        }

        if (!data) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          setError("Profile not found.");
          return;
        }

        setProfileData(data);
      } catch (err: any) {
        (setError(err.message || "Failed to fetch profile."),
          toast({
            title: "Error",
            description: err.message || "Failed to fetch profile.",
            variant: "destructive",
          }));
      } finally {
        setIsLoading(false);
      }
    }      } finally {
        setIsLoading(false)
      }
    }
    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
          setError("Profile not found.");
          return;
        }

<<<<<<< HEAD
import { useState, useEffect } from './react';
import { use_params } from './react-router-dom';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
import { SEO } from '@/components / SEO';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from './lucide-react';
import { HireNowCTA } from '@/components / profile / HireNowCTA';
export default /**
 * ProfileDetail - Function description
 */
function ProfileDetail() {
  // use_params is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { profile_id } = use_params ();
  const [profile_data, setProfileData] = useState < any>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {
    const fetch_profile = async () => {
      setIsLoading (true);
      set_error (null);
      try {
        // Check condition
if ( {) {
  $2
}
          set_error ("Profile ID is missing.");
          return;
        }
        const { data, error } = await supabase;
          .from ("talent_profiles");
          .select ("*");
          .eq ("id", profile_id);
          .single ();
;
        // Check condition
if ( {) {
  $2
}
          throw new Error (error.message);
        }
        // Check condition
if ( {) {
  $2
}
          set_error ("Profile not found.");
          return;
        }
        setProfileData (data);
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    fetchProfile();
  }, [profileId]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Profile not found.</p>
      </div>
<<<<<<< HEAD
    )
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",;
import { useParams } from "react-router-dom",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
import { SEO } from "@/components/SEO",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import {;
  MapPin,;
  Clock,;
  Link as LinkIcon,;
  Github,;
  Twitter,;
  Linkedin,;
  CheckCircle2,;
  Mail,;
  Phone,;
  Globe;
} from "lucide-react",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
export default function ProfileDetail() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { profileId } = useParams(),;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setError(null),;
      try {;
        if (!profileId) {;
          setError("Profile ID is missing."),;
          return;
        }
;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
          .single(),;
        if (error) {;
          throw new Error(error.message);
        }
;
        if (!data) {;
          setError("Profile not found."),;
          return;
        }
;
<<<<<<< HEAD
<<<<<<< HEAD

=======
      } finally {
        setIsLoading (false);
      }
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        setProfileData(data);
      } catch (err: any) {;
        setError(err && err.message || "Failed to fetch profile."),;
        toast({;
          title: "Error",;
          description: err && err.message || "Failed to fetch profile.",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        setProfileData(data);
      } catch (err: any) {;
        setError(err.message || "Failed to fetch profile."),;
        toast({;
          title: "Error",;
          description: err.message || "Failed to fetch profile.",;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    };

    fetchProfile();
  }, [profileId]);

  if (isLoading) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
<<<<<<< HEAD
=======
    },;
    fetchProfile();
  }, [profileId]),;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="min-h-screen flex items-center justify-center">;
        <p>Loading profile...</p>;
      </div>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    );
  }
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (error) {;

    return (    return (
;
  if (error) {;
    return (;      <div className="min-h-screen flex items-center justify-center">;
        <p>Profile not found.</p>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        description={profileData.bio |"Check out this talent's profile on Zion!"}
        description={profileData.bio || "Check out this talent's profile on Zion!"}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  return (
    <>;
      <SEO
<<<<<<< HEAD

        title={`${profileData.full_name} | Zion AI Marketplace`}
<<<<<<< HEAD

        description={profileData.bio || "Check out this talent's profile on Zion!"}


=======
        description={profileData.bio || "Check out this talent's profile on Zion!"}



  return (
    <>
      <SEO
        title={`${profileData.full_name} | Zion AI Marketplace`}
        description={profileData.bio |"Check out this talent's profile on Zion!"}
        description={profileData.bio || "Check out this talent's profile on Zion!"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        description={
          profileData.bio || "Check out this talent's profile on Zion!"
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD
<<<<<<< HEAD
=======
        title={`${profileData && profileData.full_name} | Zion AI Marketplace`}
        description={profileData && profileData.bio || "Check out this talent's profile on Zion!"}
=======
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
                    ) : (
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                      {profileData.full_name}
                      {profileData.is_verified && (
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                      )}
                    </CardTitle>
                    <CardDescription className="text-zion-cyan">{profileData.professional_title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  {profileData.location && (
                    <div className="flex items-center text-zion-slate-light">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {profileData.availability && (
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {profileData.hourly_rate && (
                    <div className="text-white font-bold">
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">/hr</span>
                    </div>
                  )}
<<<<<<< HEAD

                </div>;
              </CardContent>;
            </Card>;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        title={`${profileData && profileData.full_name} | Zion AI Marketplace`}
        description={profileData && profileData.bio || "Check out this talent's profile on Zion!"}
          .single(),;
;
        if (error) {;
          throw new Error(error.message),;
        }
;
        if (!data) {;
          setError("Profile not found."),;
          return,;
        }
;
        setProfileData(data),;
      } catch (err:any) {;
        setError(err.message || "Failed to fetch profile."),;
        toast({;
          title:"Error",;
          description:err.message || "Failed to fetch profile.",;
          variant:"destructive"}),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    fetchProfile(),;
  }, [profileId]),;
;
  if (isLoading) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p>Loading profile...</p>;
      </div>;
    ),;
  }
;
  if (error) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p>Error:{error}</p>;
      </div>;
    ),;
  }
;
  if (!profileData) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p>Profile not found.</p>;
      </div>;
    ),;
  }
;
  return (;
    <>;
      <SEO;
        title={`${profileData.full_name} | Zion AI Marketplace`}
        description={profileData.bio || "Check out this talent's profile on Zion!"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
      <Header />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    {profileData.profile_picture_url ? (
                      <AvatarImage
                        src={profileData.profile_picture_url}
                        alt={profileData.full_name}
                      />
                    ) : (
                      <AvatarFallback>
                        {profileData.full_name?.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>;
                  <div>;
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      {profileData && profileData.full_name}
                      {profileData && profileData.is_verified && (;
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                      )}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>
=======
                    </CardTitle>
                    <CardDescription className="text-zion-cyan">
                      {profileData.professional_title}
                    </CardDescription>
                  </div>
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  {profileData.location && (
                    <div className="flex items-center text-zion-slate-light">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{profileData.location}</span>
                    </div>
                  )}
                  {profileData.availability && (
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{profileData.availability}</span>
                    </div>
                  )}
                  {profileData.hourly_rate && (
                    <div className="text-white font-bold">
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">
                        /hr
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
<<<<<<< HEAD
            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{exp.title}</h4>
                      <p className="text-zion-cyan">{exp.company}</p>
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date |"Present"}</p>
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No experience provided.</p>
                )}
              </CardContent>
            </Card>
<<<<<<< HEAD
=======
                </div>;
              </CardContent>;
            </Card>;
;
            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
=======
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
<<<<<<< HEAD
                <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </CardContent>;
            </Card>;
;
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;
<<<<<<< HEAD
                  {profileData.skills?.map((skill:string, index:number) => (;
                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>;
=======
                  {profileData.skills?.map((skill:string, index:number) => (;                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
;
            {/* Experience Section */}
=======
;            {/* Experience Section */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>;
              </CardHeader>;
<<<<<<< HEAD
              <CardContent>;
                {profileData.experience ? (;
                  profileData.experience.map((exp:any, index:number) => (;
                    <div key={index} className="mb-4">;
                      <h4 className="font-bold text-white">{exp.title}</h4>;
                      <p className="text-zion-cyan">{exp.company}</p>;
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date || "Present"}</p>;
                      <p className="text-zion-slate-light">{exp.description}</p>;
                    </div>;
                  ));
                ) :(;
                  <p className="text-zion-slate-light">No experience provided.</p>;                )}
              </CardContent>;
            </Card>;
                    </CardTitle>;
                    <CardDescription className="text-zion-cyan">{profileData && profileData.professional_title}</CardDescription>;
;
    fetch_profile ();
  }, [profile_id]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <p > Loading profile...</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <p > Error: {error}</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <p > Profile not found.</p>;
      </div>);
  }
  return (
    <>;
      <SEO;
        title={`${profile_data.full_name} | Zion AI Marketplace`}
        description={profile_data.bio || "Check out this talent's profile on Zion!"}
      />;
      <Header />;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="grid grid - cols - 12 gap - 6">;
          {/* Main Content */}
          <div className="col - span - 12 lg:col - span - 8">;
            {/* Profile Header */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue - light">;
              <CardHeader>;
                <div className="flex items-center space-x-4">;
                  <Avatar className="w-20 h-20">;
                    {profileData && profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData && profileData.profile_picture_url} alt={profileData && profileData.full_name} />;
                    ) : (;
                      <AvatarFallback>{profileData && profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  <div>;
                    <CardTitle className="text - 2xl font - bold text - white flex items - center gap - 2">;
                      {profile_data.full_name}
                      {profile_data.is_verified && (
                        <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />)}
                    </CardTitle>;
                    <CardDescription className="text - zion - cyan">{profile_data.professional_title}</CardDescription>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                      {profileData.full_name}
                      {profileData.is_verified && (;
                        <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                      )}
                    </CardTitle>;
                    <CardDescription className="text-zion-cyan">{profileData.professional_title}</CardDescription>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  </div>;
                </div>;
              </CardHeader>;
              <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8


                </div>;
              </CardContent>;
            </Card>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                </div>
              </CardContent>
            </Card>
                </div>;
              </CardContent>;
            </Card>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  {profileData.bio || "No bio provided."}
                </p>
              </CardContent>
            </Card>
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills?.map((skill: string, index: number) => (
                    <Badge
                      key={index}
                      className="bg-zion-blue-light text-zion-slate-light border-none"
                    >
                      {skill}
                    </Badge>
                  )) || (
                    <p className="text-zion-slate-light">No skills provided.</p>
                  )}
                </div>
              </CardContent>
            </Card>
            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.experience ? (
                  profileData.experience.map((exp: any, index: number) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold text-white">{exp.title}</h4>
                      <p className="text-zion-cyan">{exp.company}</p>
                      <p className="text-sm text-zion-slate-light">
                        {exp.start_date} - {exp.end_date || "Present"}
                      </p>
                      <p className="text-zion-slate-light">{exp.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-zion-slate-light">
                    No experience provided.
                  </p>
                )}
              </CardContent>
            </Card>
<<<<<<< HEAD
=======
                </div>;
              </CardContent>;
            </Card>;

=======
                <div className="flex flex-wrap gap-4 text-sm">;
                  {profileData.location && (;
                    <div className="flex items-center text-zion-slate-light">;
                      <MapPin className="h-4 w-4 mr-1" />;
                      <span>{profileData.location}</span>;
                    </div>;
                  )}
                  {profileData.availability && (;
                    <div className="flex items-center text-zion-slate-light">;
                      <Clock className="h-4 w-4 mr-1" />;
                      <span>{profileData.availability}</span>;
                    </div>;
                  )}
                  {profileData.hourly_rate && (;
                    <div className="text-white font-bold">;
                      ${profileData.hourly_rate}
                      <span className="text-zion-slate-light font-normal">/hr</span>;
                    </div>;                  )}
                </div>;
              </CardContent>;
            </Card>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {/* About Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
=======
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
              </CardContent>;
            </Card>;
;
            {/* Skills Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex-wrap gap-2">;
                  {profileData.skills?.map((skill:string, index:number) => (;                    <Badge key={index} className="bg-zion-blue-light text-zion-slate-light border-none">{skill}</Badge>;
                  )) || <p className="text-zion-slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
;            {/* Experience Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;
              <CardHeader>;
                <CardTitle className="text-xl font-bold text-white">Experience</CardTitle>;
              </CardHeader>;
<<<<<<< HEAD
              <CardContent>;
<<<<<<< HEAD
                {profileData && profileData.experience ? (;
                  profileData && profileData.experience.map((exp: any, index: number) => (;
                    <div key={index} className="mb-4">;
                      <h4 className="font-bold text-white">{exp && exp.title}</h4>;
                      <p className="text-zion-cyan">{exp && exp.company}</p>;
                      <p className="text-sm text-zion-slate-light">{exp && exp.start_date} - {exp && exp.end_date || "Present"}</p>;
                      <p className="text-zion-slate-light">{exp && exp.description}</p>;
                    </div>;
                  ));
                ) : (;
                  <p className="text-zion-slate-light">No experience provided.</p>;
                )}
              </CardContent>;
            </Card>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
                {profileData.experience ? (;
                  profileData.experience.map((exp:any, index:number) => (;
                    <div key={index} className="mb-4">;
                      <h4 className="font-bold text-white">{exp.title}</h4>;
                      <p className="text-zion-cyan">{exp.company}</p>;
                      <p className="text-sm text-zion-slate-light">{exp.start_date} - {exp.end_date || "Present"}</p>;
                      <p className="text-zion-slate-light">{exp.description}</p>;
                    </div>;
                  ));
                ) :(;
                  <p className="text-zion-slate-light">No experience provided.</p>;                )}
              </CardContent>;
            </Card>;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Portfolio Section */}
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.portfolio_links ? (
                  <div className="flex flex-col gap-3">
<<<<<<< HEAD
                    {profileData.portfolio_links.map((link: any, index: number) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                {profileData && profileData.portfolio_links ? (;
                  <div className="flex flex-col gap-3">;
                    {profileData && profileData.portfolio_links.map((link: any, index: number) => (;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      <a
                        key={index}
                        href={link && link.url}
                        target="_blank"
                        rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
=======
                        className="text-zion-cyan hover:text-white flex items-center gap-2"
                      >
                        <LinkIcon className="h-4 w-4" />

                    ))}
                  </div>
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </CardContent>
            </Card>
          </div>
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">
            <HireNowCTA
              talentProfile={{

                    ))}
=======
                    {profileData.portfolio_links.map(
                      (link: any, index: number) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zion-cyan hover:text-white flex items-center gap-2"
                        >
                          <LinkIcon className="h-4 w-4" />
                          {link.title || link.url}
                        </a>
                      ),
                    )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  </div>
                ) : (
                  <p className="text-zion-slate-light">
                    No portfolio links provided.
                  </p>
                )}
<<<<<<< HEAD
<<<<<<< HEAD

              </CardContent>;
            </Card>;
          </div>;


=======
              </CardContent>;
            </Card>;
          </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">;
            <HireNowCTA
              talentProfile={{
                id: profileData?.id || "",
                full_name: profileData?.full_name || "",
                professional_title: profileData?.professional_title || "",
                hourly_rate: profileData?.hourly_rate || 0,
              }}
            />
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex flex-col space-y-3">
                {profileData.email && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="h-4 w-4" />
                    <a
                      href={`mailto:${profileData.email}`}
                      className="hover:text-zion-cyan"
                    >
                      {profileData.email}
                    </a>
                  </div>
                )}
                {profileData.phone && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                )}
                {profileData.website && (
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="h-4 w-4" />
                    <a
                      href={profileData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zion-cyan"
                    >
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>


<<<<<<< HEAD
=======
                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0
<<<<<<< HEAD

=======
                {profileData.portfolio_links ? (;
                  <div className="flex flex-col gap-3">;
                    {profileData.portfolio_links.map((link:any, index:number) => (;
                      <a;
                        key={index}
                        href={link.url}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="text-zion-cyan hover:text-white flex items-center gap-2";
                      >;
                        <LinkIcon className="h-4 w-4" />;
                        {link.title || link.url}
                      </a>;
                    ))}
                  </div>;
                ) :(;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;                )}
              </CardContent>;
            </Card>;
          </div>;
;
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-4 lg:col-span-1">;
            <HireNowCTA;
              talentProfile={{;
                id:profileData?.id || '',;
                full_name:profileData?.full_name || '',;
                professional_title:profileData?.professional_title || '',;
                hourly_rate:profileData?.hourly_rate || 0;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              }}
            />;
            {/* Contact Information */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Contact</h3>;
              <div className="flex flex-col space-y-3">;
              </div>;
            </div>;



              </div>;
            </div>;
                {profileData.email && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Mail className="h-4 w-4" />;
                    <a href={`mailto:${profileData.email}`} className="hover:text-zion-cyan">{profileData.email}</a>;
                  </div>;
                )}
                {profileData.phone && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Phone className="h-4 w-4" />;
                    <span>{profileData.phone}</span>;
                  </div>;
                )}
                {profileData.website && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Globe className="h-4 w-4" />;
                    <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">;
                      Website;
                    </a>;
                  </div>;                )}
              </div>;
            </div>;
;
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;
              <h3 className="text-xl font-bold mb-4">Social</h3>;
              <div className="flex flex-col space-y-3">;
                {profileData.github_url && (;
                  <a href={profileData.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Github className="h-4 w-4" />;
                    GitHub;
                  </a>;
                )}
                {profileData.twitter_url && (;
                  <a href={profileData.twitter_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Twitter className="h-4 w-4" />;
                    Twitter;
                  </a>;
                )}
                {profileData.linkedin_url && (;
                  <a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Linkedin className="h-4 w-4" />;
                    LinkedIn;
                  </a>;
                )}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </div>;
            </div>;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <CardContent>;                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <CardContent>;                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              }}
            />;
            {/* Contact Information */}
                )}
                {profileData && profileData.phone && (;
                  <div className="flex items-center gap-2 text-zion-slate-light">;
                    <Phone className="h-4 w-4" />;
                    <span>{profileData && profileData.phone}</span>;
                  </div>;
                )}
                )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex flex-col space-y-3">
                {profileData.github_url && (
                  <a
                    href={profileData.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {profileData.twitter_url && (
                  <a
                    href={profileData.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                {profileData && profileData.linkedin_url && (;
                  <a href={profileData && profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">;
                    <Linkedin className="h-4 w-4" />;
                    LinkedIn;
                  </a>;
                )}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                <div className="flex flex - wrap gap - 4 text - sm">;
=======
                <div className="flex flex - wrap gap - 4 text-sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                <div className="flex flex - wrap gap - 4 text-sm">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  {profile_data.location && (
                    <div className="flex items - center text - zion - slate-light">;
                      <MapPin className="h - 4 w - 4 mr-1" />;
                      <span>{profile_data.location}</span>;
                    </div>)}
                  {profile_data.availability && (
                    <div className="flex items - center text - zion - slate-light">;
                      <Clock className="h - 4 w - 4 mr-1" />;
                      <span>{profile_data.availability}</span>;
                    </div>)}
                  {profile_data.hourly_rate && (
                    <div className="text - white font-bold">;
                      ${profile_data.hourly_rate}
                      <span className="text - zion - slate - light font-normal">/hr</span>;
                    </div>)}
                </div>;
              </CardContent>;
            </Card>;
            {/* About Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">About Me</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <p className="text - zion - slate-light">{profile_data.bio || "No bio provided."}</p>;
              </CardContent>;
            </Card>;
            {/* Skills Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">Skills</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="flex flex - wrap gap-2">;
                  {profile_data.skills?.map ((skill: string, index: number) => (
                    <Badge key={index} className="bg - zion - blue - light text - zion - slate - light border-none">{skill}</Badge>)) || <p className="text - zion - slate-light">No skills provided.</p>}
                </div>;
              </CardContent>;
            </Card>;
            {/* Experience Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">Experience</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profile_data.experience ? (
                  profile_data.experience.map ((exp: any, index: number) => (
                    <div key={index} className="mb-4">;
                      <h4 className="font - bold text-white">{exp.title}</h4>;
                      <p className="text - zion-cyan">{exp.company}</p>;
                      <p className="text - sm text - zion - slate-light">{exp.start_date} - {exp.end_date || "Present"}</p>;
                      <p className="text - zion - slate-light">{exp.description}</p>;
                    </div>))) : (
                  <p className="text - zion - slate-light">No experience provided.</p>)}
              </CardContent>;
            </Card>;
            {/* Portfolio Section */}
            <Card className="mb - 6 bg - zion - blue border - zion - blue-light">;
              <CardHeader>;
                <CardTitle className="text - xl font - bold text-white">Portfolio</CardTitle>;
              </CardHeader>;
              <CardContent>;
                {profile_data.portfolio_links ? (
                  <div className="flex flex - col gap-3">;
                    {profile_data.portfolio_links.map ((link: any, index: number) => (
                      <a;
                        key={index}
                        href={link.url}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="text - zion - cyan hover:text - white flex items - center gap-2";
                      >;
                        <LinkIcon className="h - 4 w-4" />;
                        {link.title || link.url}
                      </a>))}
                  </div>) : (
                  <p className="text - zion - slate-light">No portfolio links provided.</p>)}
              </CardContent>;
            </Card>;
          </div>;
          {/* Sidebar with HireNowCTA */}
          <div className="col - span - 4 lg:col - span-1">;
            <HireNowCTA;
              talent_profile={{
                id: profile_data?.id || '',
                full_name: profile_data?.full_name || '',
                professional_title: profile_data?.professional_title || '',
                hourly_rate: profile_data?.hourly_rate || 0;
              }}
            />;
            {/* Contact Information */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mt-6">;
              <h3 className="text - xl font - bold mb-4">Contact</h3>;
              <div className="flex flex - col space-y-3">;
                {profile_data.email && (
                  <div className="flex items - center gap - 2 text - zion - slate-light">;
                    <Mail className="h - 4 w-4" />;
                    <a href={`mailto:${profile_data.email}`} className="hover:text - zion-cyan">{profile_data.email}</a>;
                  </div>)}
                {profile_data.phone && (
                  <div className="flex items - center gap - 2 text - zion - slate-light">;
                    <Phone className="h - 4 w-4" />;
                    <span>{profile_data.phone}</span>;
                  </div>)}
                {profile_data.website && (
                  <div className="flex items - center gap - 2 text - zion - slate-light">;
                    <Globe className="h - 4 w-4" />;
                    <a href={profile_data.website} target="_blank" rel="noopener noreferrer" className="hover:text - zion-cyan">;
                      Website;
                    </a>;
                  </div>)}
              </div>;
            </div>;
            {/* Social Links */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mt-6">;
              <h3 className="text - xl font - bold mb-4">Social</h3>;
              <div className="flex flex - col space-y-3">;
                {profile_data.github_url && (
                  <a href={profile_data.github_url} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 2 text - zion - slate - light hover:text - zion-cyan">;
                    <Github className="h - 4 w-4" />;
                    GitHub;
                  </a>)}
                {profile_data.twitter_url && (
                  <a href={profile_data.twitter_url} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 2 text - zion - slate - light hover:text - zion-cyan">;
                    <Twitter className="h - 4 w-4" />;
                    Twitter;
                  </a>)}
                {profile_data.linkedin_url && (
                  <a href={profile_data.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items - center gap - 2 text - zion - slate - light hover:text - zion-cyan">;
                    <Linkedin className="h - 4 w-4" />;
                    LinkedIn;
                  </a>)}

                {profileData.linkedin_url && (
                  <a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                )}
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;                {profileData.linkedin_url && (
                  <a
                    href={profileData.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn

                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </>;
  ),; import {
  MapPin;
Clock;
Link as LinkIcon;
Github;
Twitter;
Linkedin;
CheckCircle2;
Mail;
Phone;
Globe export default function ProfileDetail () {
  //useParams is typed as `any` in this environment due to missing type //definitions, so avoid passing a type argument to prevent TS2347. const {
  profileId 
}= useParams ();
const [profileData, setProfileData] = useState<any> (null);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
useEffect ( () => {
  const fetchProfile = async () => {
  setIsLoading (true);
setError (null);
try {
  if (!profileId) {
  const {
  data, error 
}= await supabase .from ("talent profiles") .select ("*") .eq ("id", profileId) if (error) {
  throw new Error (error.message) 
}if (!data) {
  
}setProfileData (data) 
}catch (err: any) {
  
}finally {
  setIsLoading (false) 
}
;

};
}, [profileId]);
<p>Error: {
  error 
}</p> </div>) 
}return (<> <SEO) : (<AvatarFallback> {
  profileData.full name?.charAt (0) 
}</AvatarFallback>) 
}</Avatar> <div> </div> </div> </CardHeader> <CardContent> $ {
  profileData.hourly rate 
}<span className="text-zion-slate-light font-normal" >/hr</span> </div>) 
}</div> </CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >About Me</CardTitle> </CardHeader> <CardContent> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Skills</CardTitle> </CardHeader> <CardContent> </div> </CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Experience</CardTitle> </CardHeader> <CardContent> </div>) ) ) : (<p className="text-zion-slate-light" >No experience provided.</p>) 
}</CardContent> </Card> <CardHeader> <CardTitle className="text-xl font-bold text-white" >Portfolio</CardTitle> </CardHeader> <CardContent>) ) 
}</div>) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) 
}</CardContent> </Card> </div> <HireNowCTA talentProfile= {
  {
  id: profileData?.id || '', full name: profileData?.full name || '', professional title: profileData?.professional title || '', hourly rate: profileData?.hourly rate || 0 
}
}/> Website </Link> </div>) 
}</div> </div> GitHub </Link>) 
}Twitter </Link>) 
}LinkedIn </Link>) 
}</div> </div> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
