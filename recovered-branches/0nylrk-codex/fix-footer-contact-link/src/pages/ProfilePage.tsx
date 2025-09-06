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
  Star,
  MapPin,
  Clock,
  Link,
  as,
  LinkIcon,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,
} from "lucide-react";



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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {


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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      setIsLoading(true),
      setIsError(false),
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
<<<<<<< HEAD
=======
<<<<<<< HEAD

          .single(),


<<<<<<< HEAD
=======
          .single();
          .single(),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        if (error) {
          throw error;
        }

=======
      } finally {
        setIsLoading (false);
      }
        if (error) {;
          throw error;
        }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error),
        setIsError(true),
        toast({
<<<<<<< HEAD
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
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
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
=======
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
<<<<<<< HEAD
    };

    if (profileId) {
      fetchProfile();
    }

=======
  }, [profileId]);
  if (isLoading) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

  if (isLoading) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD


  if (isError || !profileData) {;

=======
  if (isError || !profileData) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
<<<<<<< HEAD
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    )
  }
  if (isError |!profileData) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );
  }


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (
    <>;
      <SEO

        title={`${profileData.full_name} | Talent Profile`}
<<<<<<< HEAD
=======
        description={
          profileData.bio || "View the profile of this talented individual."
        }
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD
  return (
    <>;
      <SEO
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
      <AppHeader />;
      <div className="container mx-auto px-4 py-8">;
        <div className="grid grid-cols-12 gap-6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  return (
    <>;
      <SEO
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <div className="flex items-start">;
                {/* Avatar */}
                <div className="relative mr-4">
                  <Avatar className="w-24 h-24">
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
                  {profileData && profileData.is_verified && (;
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
                    </div>;
                  )}
                </div>

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">
                        {profileData.full_name}
                      </h1>
                      <p className="text-zion-cyan font-medium">
                        {profileData.professional_title}
                      </p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
                  </div>

=======
                  </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                  </div>
                </div>
              </div>

              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
<<<<<<< HEAD
            </div>;
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;
=======
<<<<<<< HEAD
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

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            {/* Portfolio Section */}
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
            </div>;
=======
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>
                  ))
                ) : (
                  <p className="text-zion-slate-light">
                    No portfolio links provided.
                  </p>
                )}
              </div>
            </div>

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">
                {profileData.experience || "No experience provided."}
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  </Link>

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                {profileData && profileData.github_link && (;
                  <a
                    href={profileData && profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </Link>


=======
                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Github className="h-6 w-6" />;
                  </a>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href={profileData && profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Twitter className="h-6 w-6" />;
                  </a>;
                )}
                {profileData && profileData.linkedin_link && (;
                  <a
                    href={profileData && profileData.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                  </Link>


                )}
              </div>
            </div>
          </div>

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}
<<<<<<< HEAD
              </div>;
            </div>;
          </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
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
=======
                id: profileData?.id || "",
                full_name: profileData?.full_name || "",
                professional_title: profileData?.professional_title || "",
                hourly_rate: profileData?.hourly_rate || 0,
              }}
            />;
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
;
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
