<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/components/ui/use-toast";
import {SEO} from "@/components/SEO";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {HireNowCTA} from "@/components/profile/HireNowCTA";
import {Star, MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2} from "lucide-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId } = useParams() as { profileId?: string }
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
import { useState, useEffect } from "react",
import { useParams } from "react-router-dom",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/components/ui/use-toast",
import { SEO } from "@/components/SEO",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { HireNowCTA } from "@/components/profile/HireNowCTA",
import { 
=======
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { useState, useEffect } from "react";"
import { useParams } from "react-router-dom";"
import { supabase } from "@/integrations/supabase/client";"
import { toast } from "@/components/ui/use-toast";"
import { SEO } from "@/components/SEO";"
import { AppHeader } from "@/layout/AppHeader";"
import { Footer } from "@/components/Footer";"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"
import { Badge } from "@/components/ui/badge";"
import { Button } from "@/components/ui/button";"
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Star,
  MapPin,
  Clock,
  Link,
  as,
  LinkIcon,
  Github,
  Twitter,
  Linkedin,
<<<<<<< HEAD
<<<<<<< HEAD
  CheckCircle2
} from "lucide-react",

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId } = useParams() as { profileId?: string },
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [isError, setIsError] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  CheckCircle2,
} from "lucide-react";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/components/ui/use-toast";
import {SEO} from "@/components/SEO";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {HireNowCTA} from "@/components/profile/HireNowCTA";
import {Star, MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2} from "lucide-react";
=======
  CheckCircle2,";
} from "lucide-react";



export default function ProfilePage() {};
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
<<<<<<< HEAD
  useEffect(() => {
    const fetchProfile = async () => {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

  useEffect(() => {
    const fetchProfile = async () => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(true),
      setIsError(false),
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)

          .single(),


        if (error) {
          throw error;
        }

      } finally {
        setIsLoading (false);
      }
        if (error) {;
          throw error;
        }
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error),
        setIsError(true),
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
<<<<<<< HEAD

<<<<<<< HEAD
=======
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",;
import { useParams } from "react-router-dom",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/components/ui/use-toast",;
import { SEO } from "@/components/SEO",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
import {;
  Star,;
  MapPin,;
  Clock,;
  Link as LinkIcon,;
  Github,;
  Twitter,;
  Linkedin,;
  CheckCircle2;
} from "lucide-react",;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {;
    const fetchProfile = async () => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setIsLoading(true);
      setIsError(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { useState, useEffect } from "react",;
import { useParams } from "react-router-dom",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/components/ui/use-toast",;
import { SEO } from "@/components/SEO",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
import { ;
  Star,;
  MapPin, ;
  Clock, ;
  Link as LinkIcon, ;
  Github, ;
  Twitter, ;
  Linkedin,;
  CheckCircle2;
} from "lucide-react",;
;
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?:string },;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isError, setIsError] = useState(false),;
;
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string },;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isError, setIsError] = useState(false),;
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setIsError(false),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
<<<<<<< HEAD
<<<<<<< HEAD
          .single();

import { useState, useEffect } from './react';
import { use_params } from './react-router-dom';
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/components / ui / use - toast';
import { SEO } from '@/components / SEO';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { HireNowCTA } from '@/components / profile / HireNowCTA';
import { Star, MapPin, Clock, Link, as, LinkIcon, Github, Twitter, Linkedin, CheckCircle2 } from './lucide-react';
;
export default /**
 * ProfilePage - Function description
 */
function ProfilePage() {
  // use_params may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profile_id } = use_params () as { profile_id?: string }
  const [profile_data, setProfileData] = useState < any>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [is_error, setIsError] = useState (false);
;
  useEffect (() => {
    const fetch_profile = async () => {
      setIsLoading (true);
      setIsError (false);
      try {
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
          throw error;
        }
        setProfileData (data);
      } catch (error) {
        console.error ("Error fetching profile:", error);
        setIsError (true);
        toast ({
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive",
        });
=======
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      } finally {
        setIsLoading(false)
import { useState, useEffect } from "react",;
import { useParams } from "react-router-dom",;
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/components/ui/use-toast",;
import { SEO } from "@/components/SEO",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "@/components/profile/HireNowCTA",;
import {;
  Star,;
  MapPin,;
  Clock,;
  Link as LinkIcon,;
  Github,;
  Twitter,;
  Linkedin,;
  CheckCircle2;
} from "lucide-react",;

<<<<<<< HEAD
<<<<<<< HEAD
    if (profileId) {
      fetchProfile();
    }
<<<<<<< HEAD
  }, [profileId]),
=======
=======
  useEffect(() => {}
    const fetchProfile = async () => {}
      setIsLoading(true),
      setIsError(false),
      try {}
        const { data, error } = await supabase"
          .from("talent_profiles")"
          .select("*")"
          .eq("id", profileId)



        if (error) {}
          throw error;
        }


      } finally {}
        setIsLoading (false);
      }
        if (error) {;
          throw error;
        }

        setProfileData(data);
      } catch (error) {"
        console.error("Error fetching profile:", error),
        setIsError(true),
        toast({"
          title: "Error","
          description: "Failed to load profile. Please try again later.","
          variant: "destructive",
        });
      } finally {}
        setIsLoading(false);
      }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
  if (isLoading) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (
      <div className="min-h-screen flex items-center justify-center">
=======
  if (isLoading) {}
    return ("
      <div className="min-h-screen flex items-center justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }



    return ("
      <div className="min-h-screen flex items-center justify-center">;"
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    },;
    if (profileId) {;
      fetchProfile();
    }
  }, [profileId]),
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (profileId) {
      fetchProfile();
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
=======

    return ("
      <div className="min-h-screen flex items-center justify-center">"
        <p className="text-red-500">Failed to load profile.</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      </div>
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
  if (isError || !profileData) {;    <>;
=======

  if (isError || !profileData) {;

    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );
  }



  return (
    <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <SEO

        title={`${profileData.full_name} | Talent Profile`}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

        description={profileData.bio || "View the profile of this talented individual."}


=======
  return (
    <>;
      <SEO
        description={profileData.bio || "View the profile of this talented individual."}



  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio |"View the profile of this talented individual."}
        description={profileData.bio || "View the profile of this talented individual."}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        description={
          profileData.bio || "View the profile of this talented individual."
=======

      </div>
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={"
          profileData.bio || "View the profile of this talented individual.""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
        description={
          profileData.bio || "View the profile of this talented individual."
        }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      />

      <AppHeader />
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description={profileData && profileData.bio || "View the profile of this talented individual."}
=======
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <div className="flex items-start">
                {/* Avatar */}
                <div className="relative mr-4">
                  <Avatar className="w-24 h-24">
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
                    ) : (
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  {profileData.is_verified && (
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                    </div>
                  )}
                </div>
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{profileData.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{profileData.professional_title}</p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
                  </div>
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description={profileData && profileData.bio || "View the profile of this talented individual."}
          .single(),;
;
        if (error) {;
          throw error,;
        }
;
        setProfileData(data),;
      } catch (error) {;
        console.error("Error fetching profile:", error),;
        setIsError(true),;
        toast({;
          title:"Error",;
          description:"Failed to load profile. Please try again later.",;
          variant:"destructive"}),;
      } finally {;
        setIsLoading(false),;
      }
    },;
;
    if (profileId) {;
      fetchProfile(),;
    }
  }, [profileId]),;
;
  if (isLoading) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    ),;
  }
;
  if (isError || !profileData) {;
    return (;
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    ),;
  }
;
  return (;
=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <>;
      <SEO      />;
=======
      />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
"

</AppHeader>"
      <div className="container mx-auto px-4 py-8">"
        <div className="grid grid-cols-12 gap-6">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;"
        <div className="grid grid-cols-12 gap-6">;"
          {/* Main Content Area */}"
          <div className="col-span-12 lg:col-span-8">;"
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;"
              <div className="flex items-start">;"
                <div className="relative mr-4">"
                  <Avatar className="w-24 h-24">"

                      <AvatarImage;
                        src={profileData.profile_picture_url}
                        alt={profileData.full_name}

                      <AvatarFallback>

                  ;"
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>
                    </div>;

                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;

                      <AvatarFallback>{profileData.full_name?.charAt(0)};
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                    </div>;                  )}
<<<<<<< HEAD
                </div>;
                ;
                {/* Main Info */}
                <div className="flex-1">
=======


  return (
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={"
          profileData.bio || "View the profile of this talented individual."
        }
      />
      <AppHeader />"
      <div className="container mx-auto px-4 py-8">"
        <div className="grid grid-cols-12 gap-6">

      />;
      <AppHeader />;"
      <div className="container mx-auto px-4 py-8">;"
        <div className="grid grid-cols-12 gap-6">;


  return (
    <>;
      <SEO;
          {/* Main Content Area */}"
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}"
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;"
              <div className="flex items-start">;
                {/* Avatar */}"
                <div className="relative mr-4">"
                  <Avatar className="w-24 h-24">
                    {profileData.profile_picture_url ? (
                      <AvatarImage;
                        src={profileData.profile_picture_url}
                        alt={profileData.full_name}
                      />
                    ) : (
                      <AvatarFallback>
                        {profileData.full_name?.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>;
                  {profileData && profileData.is_verified && (;"
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                    </div>;
                  )}
                </div>


                </div>;
                    {profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;
                    ) :(;
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  {profileData.is_verified && (;"
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                    </div>;                  )}
                </div>;
                ;



                {/* Main Info */}"
                <div className="flex-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="flex justify-between items-start">
                    <div>"
                      <h1 className="text-2xl font-bold text-white">
                        {profileData.full_name}
                      </h1>"
                      <p className="text-zion-cyan font-medium">
                        {profileData.professional_title}
=======
                <div className="flex-1">"
                  <div className="flex justify-between items-start">"
                    <div>
                      <h1 className="text-2xl font-bold text-white">"
</h1>
                      </h1>"
                      <p className="text-zion-cyan font-medium">"
</p>


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      </p>
                    </div>
                  </div>

<<<<<<< HEAD
<<<<<<< HEAD
                  </div>;
                  {/* Location & Availability */}
=======

                  </div>;



                  {/* Location & Availability */}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">;
                    {profileData && profileData.location && (;"
                      <div className="flex items-center text-zion-slate-light">;"
                        <MapPin className="h-4 w-4 mr-1" />;
                        <span>{profileData && profileData.location}</span>;
                      </div>;
                    )}
                    {profileData && profileData.availability && (;"
                      <div className="flex items-center text-zion-slate-light">;"
                        <Clock className="h-4 w-4 mr-1" />;
=======

                  </div>;"
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">;"
                      <div className="flex items-center text-zion-slate-light">;"
                        <MapPin className="h-4 w-4 mr-1" />;"

                        <span>{profileData && profileData.location}</span>;
                        <Clock className="h-4 w-4 mr-1" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        <span>{profileData && profileData.availability}</span>;

                      </div>;
<<<<<<< HEAD
                    )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  </div>;
                </div>;
              </div>;



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                  </div>;
                </div>;
              </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill, index) => (;
                      <Badge key={index} variant="secondary">{skill}</Badge>;
                    ))}
<<<<<<< HEAD
                  </div>;
                </div>;
              )}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </div>
                </div>

<<<<<<< HEAD
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && ("
                <div className="mt-4">"
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>"
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => ("
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
<<<<<<< HEAD
<<<<<<< HEAD
            </div>;
            {/* Bio Section */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
<<<<<<< HEAD
<<<<<<< HEAD

            </div>
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>


=======
              <p className="text-zion-slate-light">
                {profileData.bio || "No bio provided."}
              </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            </div>

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
                      <h1 className="text-2xl font-bold text-white">{profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}
                  </div>;
                  ;
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">;
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
                      </div>;                    )}
                  </div>;
                </div>;
              </div>;
              ;
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData.skills.map((skill, index) => (;
                      <Badge key={index} variant="secondary">{skill}</Badge>;
                    ))}
                  </div>;
                </div>;              )}
            </div>;
            ;
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>;
            </div>;
            ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;
<<<<<<< HEAD
<<<<<<< HEAD
                {profileData && profileData.portfolio_links && profileData && profileData.portfolio_links.length > 0 ? (;
                  profileData && profileData.portfolio_links.map((link, index) => (;
=======
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
            </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            {/* Portfolio Section */}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;            {/* Portfolio Section */}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  </div>;
                </div>;
              )}
            </div>

            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">
                {profileData.bio || "No bio provided."}
              </p>
            </div>

            {/* Portfolio Section */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links &&
                profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
              </div>;
            </div>;                      <LinkIcon className="h-4 w-4 mr-2" />;
=======
"
                      <LinkIcon className="h-4 w-4 mr-2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;
                      <LinkIcon className="h-4 w-4 mr-2" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      {link}
                    </a>
                  ))
                ) : ("
                  <p className="text-zion-slate-light">
                    No portfolio links provided.
=======
              </div>"
                <div className="mt-4">"
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>""
                  <div className="flex flex-wrap gap-2">"
                      <Badge key={index} variant="secondary">"

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">"
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>""
              <p className="text-zion-slate-light">"
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>""
              <div className="space-y-3">"
                    <a;
                      key={index}
                      href={link}"
                      target="_blank"""
                      rel="noopener noreferrer"""
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;"
</a>"
                      <LinkIcon className="h-4 w-4 mr-2" />;"

</LinkIcon>
                    </a>"
                  <p className="text-zion-slate-light">"
</p>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </p>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
              <p className="text-zion-slate-light">
=======
            {/* Experience Section */}"
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">"
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>"
              <p className="text-zion-slate-light">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                {profileData.experience || "No experience provided."}
              </p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            </div>

            {/* Social Links */}"
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;"
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;"
              <div className="flex space-x-4">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                {profileData && profileData.github_link && (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <a
                    href={profileData && profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                  </Link>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </Link>


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Github className="h-6 w-6" />;
                  </a>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
            </div>"
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">"
</div>"
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>""
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;""
              <div className="flex space-x-4">;"
                    href={profileData && profileData.github_link}"
                    className="text-zion-cyan hover:text-white transition-colors""
                  >
                    <Github className="h-6 w-6" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

                    <Github className="h-6 w-6" />;"

                  </a>;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href={profileData && profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                    className="text-zion-cyan hover:text-white transition-colors">;
=======

                {profileData && profileData.github_link && (;
                  <a;
                    href={profileData && profileData.github_link}"
                    target="_blank""
                    rel="noopener noreferrer"

                  </Link>


<<<<<<< HEAD
"
                    className="text-zion-cyan hover:text-white transition-colors">;"
                    <Github className="h-6 w-6" />;
                  </a>;

                )}
                {profileData && profileData.twitter_link && (;
                  <a;
                    href={profileData && profileData.twitter_link}"
                    target="_blank""
                    rel="noopener noreferrer""
                    className="text-zion-cyan hover:text-white transition-colors">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <Twitter className="h-6 w-6" />;
                  </a>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                )}
                {profileData && profileData.linkedin_link && (;
                  <a;
                    href={profileData && profileData.linkedin_link}"
                    target="_blank""
                    rel="noopener noreferrer"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
                  </Link>


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  </Link>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  </Link>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                )}
              </div>
            </div>
          </div>

                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
;
    // Check condition
if ( {) {
  $2
}
      fetch_profile ();
    }
  }, [profile_id]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <span className="loading loading - ring loading - lg"></span>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="min - h-screen flex items - center justify - center">;
        <p className="text - red - 500">Failed to load profile.</p>;
      </div>);
  }
  return (
    <>;
      <SEO;
        title={`${profile_data.full_name} | Talent Profile`}
        description={profile_data.bio || "View the profile of this talented individual."}
      />;
      <AppHeader />;
      <div className="container mx - auto px - 4 py - 8">;
        <div className="grid grid - cols - 12 gap - 6">;
          {/* Main Content Area */}
          <div className="col - span - 12 lg:col - span - 8">;
            {/* Profile Header */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <div className="flex items - start">;
                {/* Avatar */}
                <div className="relative mr - 4">;
                  <Avatar className="w - 24 h - 24">;
                    {profile_data.profile_picture_url ? (
                      <AvatarImage src={profile_data.profile_picture_url} alt={profile_data.full_name} />) : (
                      <AvatarFallback>{profile_data.full_name?.char_at (0)}</AvatarFallback>)}
                  </Avatar>;
                  {profile_data.is_verified && (
                    <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;
                      <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;
                    </div>)}
                </div>;
                {/* Main Info */}
                <div className="flex - 1">;
                  <div className="flex justify - between items - start">;
                    <div>;
                      <h1 className="text - 2xl font - bold text - white">{profile_data.full_name}</h1>;
                      <p className="text - zion - cyan font - medium">{profile_data.professional_title}</p>;
                    </div>;
                    {/* Add Save / Unsave Button Here */}
                  </div>;
                  {/* Location & Availability */}
                  <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;
                    {profile_data.location && (
                      <div className="flex items - center text - zion - slate - light">;
                        <MapPin className="h - 4 w - 4 mr - 1" />;
                        <span>{profile_data.location}</span>;
                      </div>)}
                    {profile_data.availability && (
                      <div className="flex items - center text - zion - slate - light">;
                        <Clock className="h - 4 w - 4 mr - 1" />;
                        <span>{profile_data.availability}</span>;
                      </div>)}
                  </div>;
                </div>;
              </div>;
              {/* Skills */}
              {profile_data.skills && profile_data.skills.length > 0 && (
                <div className="mt - 4">;
                  <h4 className="text - lg font - bold text - white mb - 2">Skills</h4>;
                  <div className="flex flex - wrap gap - 2">;
                    {profile_data.skills.map ((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>))}
                  </div>;
                </div>)}
            </div>;
            {/* Bio Section */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">About Me</h2>;
              <p className="text - zion - slate - light">{profile_data.bio || "No bio provided."}</p>;
            </div>;
            {/* Portfolio Section */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">Portfolio</h2>;
              <div className="space - y-3">;
                {profile_data.portfolio_links && profile_data.portfolio_links.length > 0 ? (
                  profile_data.portfolio_links.map ((link, index) => (
                    <a;
                      key={index}
                      href={link}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="flex items - center text - zion - cyan hover:text - white transition - colors";
                    >;
                      <LinkIcon className="h - 4 w - 4 mr - 2" />;
                      {link}
                    </a>))) : (
                  <p className="text - zion - slate - light">No portfolio links provided.</p>)}
              </div>;
            </div>;
            {/* Experience Section */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">Experience</h2>;
              <p className="text - zion - slate - light">{profile_data.experience || "No experience provided."}</p>;
            </div>;
            {/* Social Links */}
            <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 mb - 6">;
              <h2 className="text - xl font - bold text - white mb - 3">Connect</h2>;
              <div className="flex space - x-4">;
                {profile_data.github_link && (
                  <a;
                    href={profile_data.github_link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - zion - cyan hover:text - white transition - colors";
                  >;
                    <Github className="h - 6 w - 6" />;
                  </a>)}
                {profile_data.twitter_link && (
                  <a;
                    href={profile_data.twitter_link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - zion - cyan hover:text - white transition - colors";
                  >;
                    <Twitter className="h - 6 w - 6" />;
                  </a>)}
                {profile_data.linkedin_link && (
                  <a;
                    href={profile_data.linkedin_link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - zion - cyan hover:text - white transition - colors";
                  >;
                    <Linkedin className="h - 6 w - 6" />;
                  </a>)}
              </div>;
            </div>;
          </div>;
          {/* Sidebar with HireNowCTA */}
          <div className="col - span - 12 lg:col - span - 4 space - y-6">;
            <HireNowCTA;
              talent_profile={{
                id: profile_data?.id || '',
                full_name: profile_data?.full_name || '',
                professional_title: profile_data?.professional_title || '',
                hourly_rate: profile_data?.hourly_rate || 0;
=======

=======
              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>
            </div>
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {profileData.github_link && (
                  <a
                    href={profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  </Link>
                )}
                {profileData.twitter_link && (
                  <a
                    href={profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  </Link>
                )}
                {profileData.linkedin_link && (
                  <a
                    href={profileData.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA
              talentProfile={{
                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0


=======
                id: profileData?.id || "",
                full_name: profileData?.full_name || "",
=======
"
                    className="text-zion-cyan hover:text-white transition-colors">;"
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}

          {/* Sidebar with HireNowCTA */}"
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA;
              talentProfile={{"
                id: profileData?.id || "","
                full_name: profileData?.full_name || "","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                professional_title: profileData?.professional_title || "",
                hourly_rate: profileData?.hourly_rate || 0,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                id: profileData?.id || "",
                full_name: profileData?.full_name || "",
                professional_title: profileData?.professional_title || "",
=======
                    href={profileData && profileData.twitter_link}"
                    className="text-zion-cyan hover:text-white transition-colors">;"
                    <Twitter className="h-6 w-6" />;"

                    href={profileData && profileData.linkedin_link}"
                    rel="noopener noreferrer""
</a>
                    <Linkedin className="h-6 w-6" />;"

</Linkedin>

                  </a>;
              </div>;
            </div>;

          </div>;"
          <div className="col-span-12 lg:col-span-4 space-y-6">;"
            <HireNowCTA;
              talentProfile={{"
                id: profileData?.id || "",""
                full_name: profileData?.full_name || "",""
                professional_title: profileData?.professional_title || "","
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                hourly_rate: profileData?.hourly_rate || 0,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              }}
            />;

      <Footer />

    </>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              }}
            />;
            {/* Placeholder for other sidebar elements */}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                {profileData.github_link && (;
                  <a;
                    href={profileData.github_link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text-zion-cyan hover:text-white transition-colors";
                  >;
                    <Github className="h-6 w-6" />;
                  </a>;
                )}
                {profileData.twitter_link && (;
                  <a;
                    href={profileData.twitter_link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text-zion-cyan hover:text-white transition-colors";
                  >;
                    <Twitter className="h-6 w-6" />;
                  </a>;
                )}
                {profileData.linkedin_link && (;
                  <a;
                    href={profileData.linkedin_link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text-zion-cyan hover:text-white transition-colors";
                  >;
                    <Linkedin className="h-6 w-6" />;
                  </a>;                )}
              </div>;
            </div>;
          </div>;
        ;
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA;
              talentProfile={{;
                id:profileData?.id || '',;
                full_name:profileData?.full_name || '',;
                professional_title:profileData?.professional_title || '',;
                hourly_rate:profileData?.hourly_rate || 0;
              }}
            />;
            {/* Placeholder for other sidebar elements */}
              }}
            />
            {/* Placeholder for other sidebar elements */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </>;
  ),; import {};
=======
  );

    </>;
  ),; import {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  Star;
MapPin;
Clock;
Link as LinkIcon;
Github;
Twitter;
<<<<<<< HEAD
<<<<<<< HEAD
Linkedin;"
CheckCircle2 //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. .from ("talent profiles") .select ("*") .eq ("id", profileId) .single ();
}finally {}
  setIsLoading (false) 
}
=======
Linkedin;
CheckCircle2 //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. .from ("talent profiles") .select ("*") .eq ("id", profileId) .single ();
=======
Linkedin;"
CheckCircle2 //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. .from ("talent profiles") .select ("*") .eq ("id", profileId) .single ();"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}finally {
  // TODO: Implement
  setIsLoading (false) 
;

;


};
if (profileId) {
  fetchProfile () 
}, [profileId]);
if (isLoading) {"
  return (<div className="min-h-screen flex items-center justify-center" > <span className="loading loading-ring loading-lg" ></span> </div>)""
  return (<div className="min-h-screen flex items-center justify-center" > <p className="text-red-500" >Failed to load profile.</p> </div>)"
}) 
} </div>) 
}</div> </div> {
}</div> <span> {
</span>
}</span> </div>) 
}</div> </div> </div>) ) 
}</div> </div>) "
}</div>) ) ) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>)"
}</div> </div> <a href= {
  profileData.github link;"
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Github className="h-6 w-6" /> )"
  profileData.twitter link && (<a href= {
  profileData.twitter link;)"
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Twitter className="h-6 w-6" /> )"
  profileData.linkedin link && (<a href= {
  profileData.linkedin link;)"
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Linkedin className="h-6 w-6" /> )"
}</div> </div> </div> <HireNowCTA talentProfile= {
  {"
  id: profileData?.id || , full name: profileData?.full name || , professional title: profileData?.professional title || , hourly rate: profileData?.hourly rate || 0;
}/> {
  /* Placeholder for other sidebar elements */ 
}</div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;

<<<<<<< HEAD

;

};
if (profileId) {}
  fetchProfile () 
}
}, [profileId]);
if (isLoading) {"
  return (<div className="min-h-screen flex items-center justify-center" > <span className="loading loading-ring loading-lg" ></span> </div>) 
}if (isError || !profileData) {"
  return (<div className="min-h-screen flex items-center justify-center" > <p className="text-red-500" >Failed to load profile.</p> </div>) 
}profileData.full name?.charAt (0) 
}</AvatarFallback>) 
}</Avatar> </div>) 
}</div> </div> {}
  /* Add Save/Unsave Button Here */ 
}</div> <span> {}
  profileData.availability;
}</span> </div>) 
}</div> </div> </div>) ) 
}</div> </div>) "
}</div>) ) ) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) 
}</div> </div> <a href= {}
  profileData.github link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Github className="h-6 w-6" /> </Link>) 
}{}
  profileData.twitter link && (<a href= {}
  profileData.twitter link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Twitter className="h-6 w-6" /> </Link>) 
}{}
  profileData.linkedin link && (<a href= {}
  profileData.linkedin link "
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Linkedin className="h-6 w-6" /> </Link>) 
}</div> </div> </div> <HireNowCTA talentProfile= {}
  {}
  id: profileData?.id || '', full name: profileData?.full name || '', professional title: profileData?.professional title || '', hourly rate: profileData?.hourly rate || 0;
}
}/> {}
  /* Placeholder for other sidebar elements */ 
}</div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
;



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}</div> </div> </div> <Footer /> </>) 


`;
pr-12325
'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
