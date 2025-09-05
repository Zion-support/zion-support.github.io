
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useState, useEffect } from &quot;react&quot;;
import { useParams } from &quot;react-router-dom&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { AppHeader } from &quot;@/layout/AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { HireNowCTA } from &quot;@/components/profile/HireNowCTA&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Star,
  MapPin, 
  Clock, 
  Link as LinkIcon, 
  Github, 
  Twitter, 
  Linkedin,
  CheckCircle2
<<<<<<< HEAD
} from "lucide-react",
=======
} from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import {_Star, _MapPin, _Clock, _Link as LinkIcon, _Github, _Twitter, _Linkedin, _CheckCircle2} from "lucide-react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ProfilePage() {_// useParams may be untyped in this environment, _so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
<<<<<<< HEAD
  const { profileId } = useParams() as { profileId?: string },
  const [profileData, setProfileData] = useState<any>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [isError, setIsError] = useState(false),

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true),
      setIsError(false),
      try {
        const { data, error } = await supabase
<<<<<<< HEAD
=======
  const { profileId} = useParams() as {_profileId?: string};
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect__(() => {_const _fetchProfile = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const { data, _error} = await supabase
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single(),
=======
          .from(&quot;talent_profiles&quot;)
          .select(&quot;*&quot;)
          .eq(&quot;id&quot;, profileId)
          .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
        if (error) {
          throw error
        }

        setProfileData(data)
      } catch (error) {
<<<<<<< HEAD
        console.error("Error fetching profile:", error),
        setIsError(true),
        toast({
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive"})
=======
        console.error(&quot;Error fetching profile:&quot;, error);
        setIsError(true);
        toast({
          title: &quot;Error&quot;,
          description: &quot;Failed to load profile. Please try again later.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },

    if (profileId) {
      fetchProfile()
    }
  }, [profileId]),

  if (isLoading) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <span className=&quot;loading loading-ring loading-lg&quot;></span>
      </div>
    )
  }

  if (isError || !profileData) {
    return (
      <div className=&quot;min-h-screen flex items-center justify-center&quot;>
        <p className=&quot;text-red-500&quot;>Failed to load profile.</p>
      </div>
    )
  }
=======
        if (error) {_throw error;}

        setProfileData(data);
      } catch (error) {_setIsError(true);
        toast({
          title: "Error", _description: "Failed to load profile. Please try again later.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };

    if (profileId) {_fetchProfile();}
  }, [profileId]);

  if (isLoading) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );}

  if (isError || !profileData) {_return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <SEO
<<<<<<< HEAD
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || &quot;View the profile of this talented individual.&quot;}
      />
      <AppHeader />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;grid grid-cols-12 gap-6&quot;>
          {/* Main Content Area */}
          <div className=&quot;col-span-12 lg:col-span-8&quot;>
            {/* Profile Header */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <div className=&quot;flex items-start&quot;>
                {/* Avatar */}
                <div className=&quot;relative mr-4&quot;>
                  <Avatar className=&quot;w-24 h-24&quot;>
                    {profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />
=======
        title={_`${profileData.full_name} | Talent Profile`}
        description={_profileData.bio || "View the profile of this talented individual."}
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {_/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            {_/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <div className="flex items-start">
                {_/* Avatar */}
                <div className="relative mr-4">
                  <Avatar className="w-24 h-24">
                    {_profileData.profile_picture_url ? (
                      <AvatarImage src={profileData.profile_picture_url} alt={_profileData.full_name} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : (
                      <AvatarFallback>{_profileData.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
<<<<<<< HEAD
                  {profileData.is_verified && (
                    <div className=&quot;absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full&quot;>
                      <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
=======
                  {_profileData.is_verified && (
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  )}
                </div>
                
<<<<<<< HEAD
                {/* Main Info */}
                <div className=&quot;flex-1&quot;>
                  <div className=&quot;flex justify-between items-start&quot;>
                    <div>
                      <h1 className=&quot;text-2xl font-bold text-white&quot;>{profileData.full_name}</h1>
                      <p className=&quot;text-zion-cyan font-medium&quot;>{profileData.professional_title}</p>
=======
                {_/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{_profileData.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{_profileData.professional_title}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                    {_/* Add Save/Unsave Button Here */}
                  </div>
                  
<<<<<<< HEAD
                  {/* Location & Availability */}
                  <div className=&quot;mt-2 flex flex-wrap gap-3 text-sm&quot;>
                    {profileData.location && (
                      <div className=&quot;flex items-center text-zion-slate-light&quot;>
                        <MapPin className=&quot;h-4 w-4 mr-1&quot; />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {profileData.availability && (
                      <div className=&quot;flex items-center text-zion-slate-light&quot;>
                        <Clock className=&quot;h-4 w-4 mr-1&quot; />
=======
                  {_/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {_profileData.location && (
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {_profileData.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <span>{profileData.availability}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
<<<<<<< HEAD
              {/* Skills */}
              {profileData.skills && profileData.skills.length > 0 && (
                <div className=&quot;mt-4&quot;>
                  <h4 className=&quot;text-lg font-bold text-white mb-2&quot;>Skills</h4>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant=&quot;secondary&quot;>{skill}</Badge>
=======
              {_/* Skills */}
              {_profileData.skills && profileData.skills.length > 0 && (_<div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, _index) => (
                      <Badge key={index} variant="secondary">{_skill}</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ))}
                  </div>
                </div>
              )}
            </div>
            
<<<<<<< HEAD
            {/* Bio Section */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>About Me</h2>
              <p className=&quot;text-zion-slate-light&quot;>{profileData.bio || &quot;No bio provided.&quot;}</p>
            </div>
            
            {/* Portfolio Section */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>Portfolio</h2>
              <div className=&quot;space-y-3&quot;>
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;flex items-center text-zion-cyan hover:text-white transition-colors&quot;
                    >
                      <LinkIcon className=&quot;h-4 w-4 mr-2&quot; />
                      {link}
                    </Link>
=======
            {_/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">{_profileData.bio || "No bio provided."}</p>
            </div>
            
            {_/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {_profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (_profileData.portfolio_links.map((link, _index) => (
                    <a
                      key={index}
                      href={_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {_link}
                    </a>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  ))
                ) : (
                  <p className=&quot;text-zion-slate-light&quot;>No portfolio links provided.</p>
                )}
              </div>
            </div>
            
<<<<<<< HEAD
            {/* Experience Section */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>Experience</h2>
              <p className=&quot;text-zion-slate-light&quot;>{profileData.experience || &quot;No experience provided.&quot;}</p>
            </div>
            
            {/* Social Links */}
            <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6&quot;>
              <h2 className=&quot;text-xl font-bold text-white mb-3&quot;>Connect</h2>
              <div className=&quot;flex space-x-4&quot;>
                {profileData.github_link && (
=======
            {_/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">{_profileData.experience || "No experience provided."}</p>
            </div>
            
            {_/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {_profileData.github_link && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <a
                    href={profileData.github_link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
                  >
                    <Github className=&quot;h-6 w-6&quot; />
                  </Link>
                )}
                {_profileData.twitter_link && (
                  <a
                    href={profileData.twitter_link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
                  >
                    <Twitter className=&quot;h-6 w-6&quot; />
                  </Link>
                )}
                {_profileData.linkedin_link && (
                  <a
                    href={profileData.linkedin_link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
                  >
                    <Linkedin className=&quot;h-6 w-6&quot; />
                  </Link>
                )}
              </div>
            </div>
          </div>
        
<<<<<<< HEAD
          {/* Sidebar with HireNowCTA */}
          <div className=&quot;col-span-12 lg:col-span-4 space-y-6&quot;>
=======
          {_/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <HireNowCTA
              talentProfile={_{
                id: profileData?.id || '', _full_name: profileData?.full_name || '', _professional_title: profileData?.professional_title || '', _hourly_rate: profileData?.hourly_rate || 0}}
            />
            {_/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
