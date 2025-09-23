
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







export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };








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
  Star,
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
  Star, 
>>>>>>> origin/auto/autonomy-17186719616
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
} from "lucide-react";
>>>>>>> origin/auto/autonomy-17186719616

export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
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
=======
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setIsError(false);
>>>>>>> origin/auto/autonomy-17186719616
      try {
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single();
<<<<<<< HEAD
          .single(),




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
          .single();
        if (error) {
          throw error
        }
        setProfileData(data)
=======

        if (error) {
          throw error;
        }

        setProfileData(data);
>>>>>>> origin/auto/autonomy-17186719616
      } catch (error) {
        console.error("Error fetching profile:", error);
        setIsError(true);
        toast({
<<<<<<< HEAD
          title: "Error"
          description: "Failed to load profile. Please try again later."
          variant: "destructive"})
      } finally {
        setIsLoading (false);
      }
    }




  }, [profileId]),



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <span className="loading loading-ring loading-lg"></span>;
      </div>;
    );
  }



  if (isError || !profileData) {;

    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }

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
  }, [profileId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (isError || !profileData) {
>>>>>>> origin/auto/autonomy-17186719616
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
<<<<<<< HEAD
    )
  }


  return (
    <>;
      <SEO

        title={`${profileData.full_name} | Talent Profile`}


        description={profileData.bio || "View the profile of this talented individual."}



=======
    );
  }

  return (
    <>
      <SEO
        title={`${profileData.full_name} | Talent Profile`}
        description={profileData.bio || "View the profile of this talented individual."}
>>>>>>> origin/auto/autonomy-17186719616
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
<<<<<<< HEAD

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">;
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <div className="flex items-start">;
                {/* Avatar */}
                <div className="relative mr-4">;
                  <Avatar className="w-24 h-24">;
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

                </div>;


                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;
                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}

                  </div>;


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


                  </div>;
                </div>;
              </div>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



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
            </div>
            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>

              <p className="text-zion-slate-light">{profileData.bio |"No bio provided."}</p>
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>

            </div>

            </div>;

            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.bio || "No bio provided."}</p>;
            </div>;


            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;
                {profileData && profileData.portfolio_links && profileData && profileData.portfolio_links.length > 0 ? (;
                  profileData && profileData.portfolio_links.map((link, index) => (;
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
                  </div>
                </div>
              </div>
              
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
              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>
            </div>
            
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {profileData.portfolio_links && profileData.portfolio_links.length > 0 ? (
                  profileData.portfolio_links.map((link, index) => (
>>>>>>> origin/auto/autonomy-17186719616
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
<<<<<<< HEAD
                      className="flex items-center text-zion-cyan hover:text-white transition-colors">;
                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>;
                  ));
                ) : (;
                  <p className="text-zion-slate-light">No portfolio links provided.</p>;
                )}
              </div>
            </div>
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>

              <p className="text-zion-slate-light">{profileData.experience |"No experience provided."}</p>
              <p className="text-zion-slate-light">{profileData.experience || "No experience provided."}</p>

            </div>

              </div>;
            </div>;

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>;
              <p className="text-zion-slate-light">{profileData && profileData.experience || "No experience provided."}</p>;
            </div>;


            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;
                {profileData && profileData.github_link && (;
                  <a
                    href={profileData && profileData.github_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />

                  </a>
                  </Link>






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href={profileData && profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />

                  </a>
                  </Link>






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


                )}
                {profileData && profileData.linkedin_link && (;
                  <a
                    href={profileData && profileData.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"

                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />

                  </a>
                  </Link>






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


                )}

              </div>;
            </div>;
          </div>;


          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{

                id: profileData?.id |''
                full_name: profileData?.full_name |''
                professional_title: profileData?.professional_title |''
                hourly_rate: profileData?.hourly_rate |0


=======
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {link}
                    </a>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
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
                )}
              </div>
            </div>
          </div>
        
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA
              talentProfile={{
                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0
>>>>>>> origin/auto/autonomy-17186719616
              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
<<<<<<< HEAD
  )
}
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

    </>);
}


;








>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
