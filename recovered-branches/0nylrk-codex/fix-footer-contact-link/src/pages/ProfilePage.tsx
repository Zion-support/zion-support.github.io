
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId } = useParams() as { profileId?: string }

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  Star,
  MapPin, 
  Clock, 
  Link as LinkIcon, 
  Github, 
  Twitter, 
  Linkedin,
  CheckCircle2
} from "lucide-react",

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId } = useParams() as { profileId?: string },
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [isError, setIsError] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD

=======



export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };


  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  useEffect(() => {
    const fetchProfile = async () => {


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  useEffect(() => {
    const fetchProfile = async () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      setIsLoading(true),
      setIsError(false),
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

          .single(),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          .single();
          .single(),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        if (error) {
          throw error
        }
        setProfileData(data)
      } catch (error) {
        console.error("Error fetching profile:", error),
        setIsError(true),
        toast({
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  if (isLoading) {
=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId]);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true);
      setIsError(false);
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
=======
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string },;
  const [profileData, setProfileData] = useState<any>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [isError, setIsError] = useState(false),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setIsError(false),;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
          .single();

========
<<<<<<< HEAD
          .single();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
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
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive"});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

      } finally {
        setIsLoading (false);
      }


========
      } finally {
        setIsLoading (false);
      }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
        if (error) {;
          throw error;
        }
        setProfileData(data);
      } catch (error) {;
        console && console.error("Error fetching profile:", error);
        setIsError(true);
=======
          .single(),;
        if (error) {;
          throw error;
        }
;
        setProfileData(data);
      } catch (error) {;
        console.error("Error fetching profile:", error),;
        setIsError(true),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        toast({;
          title: "Error",;
          description: "Failed to load profile. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
<<<<<<< HEAD
    };
    if (profileId) {;
      fetchProfile();
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  }, [profileId]);
  if (isLoading) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx


  if (isError || !profileData) {;

========
  if (isError || !profileData) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
=======
=======
    },;
    if (profileId) {;
      fetchProfile();
    }
  }, [profileId]),

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    )
  }
  if (isError |!profileData) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <>;
      <SEO
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

        title={`${profileData.full_name} | Talent Profile`}

<<<<<<< HEAD
=======
        description={profileData.bio || "View the profile of this talented individual."}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio |"View the profile of this talented individual."}
        description={profileData.bio || "View the profile of this talented individual."}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description={profileData && profileData.bio || "View the profile of this talented individual."}
=======
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
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || "View the profile of this talented individual."}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <div className="flex items-start">;
                {/* Avatar */}
                <div className="relative mr-4">;
                  <Avatar className="w-24 h-24">;
<<<<<<< HEAD
                    {profileData && profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData && profileData.profile_picture_url} alt={profileData && profileData.full_name} />;
                    ) : (;
                      <AvatarFallback>{profileData && profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  {profileData && profileData.is_verified && (;
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                    </div>;
                  )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

                </div>;


========
                </div>;
=======
                    {profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;
                    ) :(;
                      <AvatarFallback>{profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  {profileData.is_verified && (;
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                    </div>;                  )}
                </div>;
                ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;
<<<<<<< HEAD
                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

                  </div>;


========
                  </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">;
                    {profileData && profileData.location && (;
                      <div className="flex items-center text-zion-slate-light">;
                        <MapPin className="h-4 w-4 mr-1" />;
                        <span>{profileData && profileData.location}</span>;
                      </div>;
                    )}
                    {profileData && profileData.availability && (;
                      <div className="flex items-center text-zion-slate-light">;
                        <Clock className="h-4 w-4 mr-1" />;
                        <span>{profileData && profileData.availability}</span>;
                      </div>;
                    )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

                  </div>;
                </div>;
              </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
                  </div>;
                </div>;
              </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill, index) => (;
                      <Badge key={index} variant="secondary">{skill}</Badge>;
                    ))}
                  </div>;
                </div>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  </div>
                </div>
              </div>
                  </div>;
                </div>;
              </div>;
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======


              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            </div>
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
            </div>;
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;
<<<<<<< HEAD
                {profileData && profileData.portfolio_links && profileData && profileData.portfolio_links.length > 0 ? (;
                  profileData && profileData.portfolio_links.map((link, index) => (;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
            </div>
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;
=======
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (;
                  profileData.portfolio_links.map((link, index) => (;
                    <a;
                      key={index}
                      href={link}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="flex items-center text-zion-cyan hover:text-white transition-colors";
                    >;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>;
                  ));
<<<<<<< HEAD
                ) : (;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;
                )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
<<<<<<< HEAD
=======
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {link}
                    </Link>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </div>
            </div>
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======


              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

            </div>
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
              </div>;
            </div>;
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}</p>;
            </div>;
=======
                ) :(;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;                )}
              </div>;
            </div>;
            ;
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>;
            </div>;
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
<<<<<<< HEAD
                {profileData && profileData.github_link && (;
                  <a
                    href={profileData && profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />

<<<<<<< HEAD
=======
                  </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href={profileData && profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />

<<<<<<< HEAD
=======
                  </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                )}
                {profileData && profileData.linkedin_link && (;
                  <a
                    href={profileData && profileData.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />

<<<<<<< HEAD
=======
                  </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                )}

              </div>;
            </div>;
          </div>;


========
                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}
              </div>;
            </div>;
          </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

<<<<<<< HEAD
=======
=======
========
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0
<<<<<<< HEAD
              }}
            />;
            {/* Placeholder for other sidebar elements */}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
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

              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
<<<<<<< HEAD

              }}
            />;
            {/* Placeholder for other sidebar elements */}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
              }}
            />
            {/* Placeholder for other sidebar elements */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
    </>);
=======
    </>;
  ),; import {
  Star;
MapPin;
Clock;
Link as LinkIcon;
Github;
Twitter;
Linkedin;
CheckCircle2 //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. .from ("talent profiles") .select ("*") .eq ("id", profileId) .single ();
}finally {
  setIsLoading (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx

=======
;

=======

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
if (profileId) {
  fetchProfile () 
}
}, [profileId]);
if (isLoading) {
  return (<div className="min-h-screen flex items-center justify-center" > <span className="loading loading-ring loading-lg" ></span> </div>) 
}if (isError || !profileData) {
  return (<div className="min-h-screen flex items-center justify-center" > <p className="text-red-500" >Failed to load profile.</p> </div>) 
}profileData.full name?.charAt (0) 
}</AvatarFallback>) 
}</Avatar> </div>) 
}</div> </div> {
  /* Add Save/Unsave Button Here */ 
}</div> <span> {
  profileData.availability 
}</span> </div>) 
}</div> </div> </div>) ) 
}</div> </div>) 
}</div>) ) ) : (<p className="text-zion-slate-light" >No portfolio links provided.</p>) 
}</div> </div> <a href= {
  profileData.github link 
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Github className="h-6 w-6" /> </Link>) 
}{
  profileData.twitter link && (<a href= {
  profileData.twitter link 
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Twitter className="h-6 w-6" /> </Link>) 
}{
  profileData.linkedin link && (<a href= {
  profileData.linkedin link 
}target="blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-white transition-colors" > <Linkedin className="h-6 w-6" /> </Link>) 
}</div> </div> </div> <HireNowCTA talentProfile= {
  {
  id: profileData?.id || '', full name: profileData?.full name || '', professional title: profileData?.professional title || '', hourly rate: profileData?.hourly rate || 0 
}
}/> {
  /* Placeholder for other sidebar elements */ 
}</div> </div> </div> <Footer /> </>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ProfilePage.tsx
=======
    </>;
  );
}
;
;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
