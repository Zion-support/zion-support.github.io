<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { profileId } = useParams() as { profileId?: string }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
<<<<<<< HEAD
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
>>>>>>> merged-prs-20250907-203621
import { useState, useEffect } from "react",
import { useParams } from "react-router-dom",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/components/ui/use-toast",
import { SEO } from "@/components/SEO",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
=======
import { Button } from "@/components/ui/button",
import { HireNowCTA } from "@/components/profile/HireNowCTA",
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
<<<<<<< HEAD
  const { profileId } = useParams() as { profileId?: string },
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [isError, setIsError] = useState(false),

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
<<<<<<< HEAD
  const { profileId } = useParams() as { profileId?: string },
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState($2);
  const [isError, setIsError] = useState($2);
  useEffect(() => {
      setIsLoading($2);
      setIsError($2);
=======
  const { profileId } = useParams() as { profileId?: string }

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  Star,
  MapPin,
  Clock,
  Link,
  as,
  LinkIcon,
  Github,
  Twitter,
  Linkedin,

  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD

  useEffect(() => {
    const fetchProfile = async () => {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setIsLoading(true),
      setIsError(false),
>>>>>>> origin/chore/fix-lint-and-merge
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
<<<<<<< HEAD

          .single(),

        if (error) {
          throw error;
        }

=======
<<<<<<< HEAD
          .single($2);
        if (error) {
          throw error
        }

        setProfileData(data)
      } catch (error) {
        console.error($2);
        setIsError($2);
        toast({
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
    },

    if (profileId) {
      fetchProfile()
    }
  }, [profileId]),

  if (isLoading) {
=======

          .single(),

<<<<<<< HEAD
=======

<<<<<<< HEAD
          .single();
          .single(),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        if (error) {
          throw error;
        }

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading(false)
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",;"
import { toast } from "@/components/ui/use-toast",;"
import { SEO } from "@/components/SEO",;"
import { AppHeader } from "@/layout/AppHeader",;"
import { Footer } from "@/components/Footer",;"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { HireNowCTA } from "@/components/profile/HireNowCTA",;"
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
      }
    }
    if (profileId) {
      fetchProfile()
    }
  }, [profileId]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
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

export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };

  useEffect(() => {;
    const fetchProfile = async () => {;

      setIsLoading(true);
      setIsError(false);

      try {;
<<<<<<< HEAD
        }
          .from("talent_profiles");"
          .select("*");"
          .eq("id", profileId);"
  if (isLoading) {
}
return (;
      <div className="min-h-screen flex items-center justify-center">"
        <span className="loading loading-ring loading-lg"></span>"
=======
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);

          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive",
        });

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

        <span className="loading loading-ring loading-lg"></span>
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
        <span className="loading loading-ring loading-lg"></span>
>>>>>>> origin/chore/fix-lint-and-merge
      </div>
    );
  }

    return ("
      <div className="min-h-screen flex items-center justify-center">;"
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
<<<<<<< HEAD
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true);
      setIsError(false);

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
=======

<<<<<<< HEAD
  if (isLoading) {
=======
  useEffect(() => {;
    const fetchProfile = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setIsLoading(true);
      setIsError(false);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
<<<<<<< HEAD
      } finally {
        setIsLoading (false);
      }
        if (error) {;
          throw error;
        }
=======
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
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive"});

      } finally {
        setIsLoading (false);
      }


        if (error) {;
          throw error;
        }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        setProfileData(data);
      } catch (error) {;
        console && console.error("Error fetching profile:", error);
        setIsError(true);
<<<<<<< HEAD
          .single(),;
        if (error) {;
          throw error;
        }
;
        setProfileData(data);
      } catch (error) {;
        console.error("Error fetching profile:", error),;
        setIsError(true),;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        toast({;
          title: "Error",;
          description: "Failed to load profile. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
<<<<<<< HEAD
  }, [profileId]);
  if (isLoading) {;
=======
    };

    if (profileId) {;
      fetchProfile();
    }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }
<<<<<<< HEAD
  if (isError || !profileData) {;
=======


  if (isError || !profileData) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
<<<<<<< HEAD
    },;
    if (profileId) {;
      fetchProfile();
    }
  }, [profileId]),

  if (isLoading) {
>>>>>>> merged-prs-20250907-203621
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
    );
  }
<<<<<<< HEAD

    return ("
      <div className="min-h-screen flex items-center justify-center">;"
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }

export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  if (isLoading) {
=======
  if (isError |!profileData) {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>

      </div>
<<<<<<< HEAD
    );
  }

      <SEO

        title={`${profileData.full_name} | Talent Profile`}

        }

      />

      <AppHeader />

    <>;
=======
<<<<<<< HEAD
    )
  }
=======
    );
  }

<<<<<<< HEAD
=======

<<<<<<< HEAD
  return (
    <>;
      <SEO
        description={profileData.bio || "View the profile of this talented individual."}



>>>>>>> merged-prs-20250907-203621
  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio |"View the profile of this talented individual."}
<<<<<<< HEAD
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
=======
        description={profileData.bio || "View the profile of this talented individual."}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <SEO

        title={`${profileData.full_name} | Talent Profile`}

        }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />

      <AppHeader />
<<<<<<< HEAD

    <>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <SEO      />;

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
<<<<<<< HEAD
                    </div>;

                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;

                      <AvatarFallback>{profileData.full_name?.charAt(0)};
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                    </div>;                  )}

                  <div className="flex justify-between items-start">
                    <div>"
                      <h1 className="text-2xl font-bold text-white">
                        {profileData.full_name}
                      </h1>"
                      <p className="text-zion-cyan font-medium">
                        {profileData.professional_title}

                      </p>
=======
=======
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </div>
                  </div>
<<<<<<< HEAD

=======
                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {profileData.location && (
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{profileData.location}</span>
                      </div>
<<<<<<< HEAD
                    )}
                    {profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{profileData.availability}</span>
                      </div>
=======
                    )}
                    {profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{profileData.availability}</span>
                      </div>
                    )}
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
    <>;
      <SEO;
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || "View the profile of this talented individual."}
=======
=======
        title={`${profileData && profileData.full_name} | Talent Profile`}
        description={profileData && profileData.bio || "View the profile of this talented individual."}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <div className="flex items-start">;
                {/* Avatar */}
                <div className="relative mr-4">;
                  <Avatar className="w-24 h-24">;
<<<<<<< HEAD
                </div>;
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
=======
                    {profileData && profileData.profile_picture_url ? (;
                      <AvatarImage src={profileData && profileData.profile_picture_url} alt={profileData && profileData.full_name} />;
                    ) : (;
                      <AvatarFallback>{profileData && profileData.full_name?.charAt(0)}</AvatarFallback>;
                    )}
                  </Avatar>;
                  {profileData && profileData.is_verified && (;
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </div>;

                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;

                      <AvatarFallback>{profileData.full_name?.charAt(0)};
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                    </div>;                  )}

<<<<<<< HEAD
                  <div className="flex justify-between items-start">
                    <div>"
                      <h1 className="text-2xl font-bold text-white">
                        {profileData.full_name}
                      </h1>"
                      <p className="text-zion-cyan font-medium">
                        {profileData.professional_title}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;
<<<<<<< HEAD
                  </div>;
=======
                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                      </p>
                    </div>
                  </div>

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {/* Location & Availability */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

                        <span>{profileData && profileData.availability}</span>;

                      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
                    )}
<<<<<<< HEAD
                  </div>;
                </div>;
              </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  </div>;
                </div>;
              </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Skills */}
              {profileData && profileData.skills && profileData && profileData.skills.length > 0 && (;
                <div className="mt-4">;
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {profileData && profileData.skills.map((skill, index) => (;
                      <Badge key={index} variant="secondary">{skill}</Badge>;
                    ))}
<<<<<<< HEAD

                  </div>
                </div>
=======
<<<<<<< HEAD
=======
                  </div>;
                </div>;
              )}
<<<<<<< HEAD
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
            </div>
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  </div>
                </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>

            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
            </div>;
=======
=======
            </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;
<<<<<<< HEAD
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
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {/* Portfolio Section */}

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;            {/* Portfolio Section */}

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links &&
                profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
            </div>
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
=======
                {profileData && profileData.portfolio_links && profileData && profileData.portfolio_links.length > 0 ? (;
                  profileData && profileData.portfolio_links.map((link, index) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (;
                  profileData.portfolio_links.map((link, index) => (;
                    <a;
                      key={index}
                      href={link}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="flex items-center text-zion-cyan hover:text-white transition-colors";
                    >;
=======
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>;
                  ));
<<<<<<< HEAD
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {link}
                    </Link>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </div>
            </div>
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
=======
                ) : (;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;
                )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                      {link}
                    </a>
                  ))
                ) : ("
                  <p className="text-zion-slate-light">
                    No portfolio links provided.

                  </p>
              </div>

              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>

                {profileData.experience || "No experience provided."}
              </p>

            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            {/* Social Links */}"
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;"
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;"
              <div className="flex space-x-4">;

                  <a
                    href={profileData && profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />

<<<<<<< HEAD
=======
=======
              </div>;
            </div>;
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}</p>;
            </div>;
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
            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </Link>

                    <Github className="h-6 w-6" />;"

<<<<<<< HEAD
                  </a>;
=======
<<<<<<< HEAD
                  </a>;
=======
                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href={profileData && profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    <Twitter className="h-6 w-6" />;
                  </a>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                  </Link>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                )}
                {profileData && profileData.linkedin_link && (;
                  <a;
                    href={profileData && profileData.linkedin_link}"
                    target="_blank""
                    rel="noopener noreferrer"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                  </Link>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
<<<<<<< HEAD
=======

                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}
              </div>;
            </div>;
          </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                professional_title: profileData?.professional_title || "",
                hourly_rate: profileData?.hourly_rate || 0,

                hourly_rate: profileData?.hourly_rate || 0,

              }}
            />;

      <Footer />

    </>
<<<<<<< HEAD

                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0

              }}
            />;
            {/* Placeholder for other sidebar elements */}

          </div>;
        </div>;
      </div>;
      <Footer />;

}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
<<<<<<< HEAD
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
=======

              }}
            />;
            {/* Placeholder for other sidebar elements */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
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
;


;

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
}
    </>;
  );
}
;
;
=======

}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    </>;
  ),; import {};

<<<<<<< HEAD
;
=======
<<<<<<< HEAD
;
=======
=======

;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
