<<<<<<< HEAD

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
import { HireNowCTA } from "@/components/profile/HireNowCTA";"
import {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      setIsLoading(true),
      setIsError(false),

=======

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

      setIsLoading(true),
      setIsError(false),
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======

          .single($2);
        if (error) {
          throw error
        }

        setProfileData(data)
      } catch (error) {
        }

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function ProfilePage() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { profileId } = useParams() as { profileId?: string };
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
<<<<<<< HEAD



=======
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
      setIsLoading(true);
      setIsError(false);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);
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
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive"});

      } finally {
        setIsLoading (false);
      }


        if (error) {;
          throw error;
        }


=======
      } finally {
        setIsLoading (false);
      }
        if (error) {;
          throw error;
        }
>>>>>>> origin/cursor/delete-old-data-records-6bba
        setProfileData(data);
      } catch (error) {;
        console && console.error("Error fetching profile:", error);
        setIsError(true);
<<<<<<< HEAD


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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
  }, [profileId]);
  if (isLoading) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return (
      <div className="min-h-screen flex items-center justify-center">;
        <p className="text-red-500">Failed to load profile.</p>;
      </div>;
    );
  }
<<<<<<< HEAD


    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>

      </div>

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
    );
  }


      <SEO

        title={`${profileData.full_name} | Talent Profile`}

        }

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      />

      <AppHeader />

<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">

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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </div>;

                      <AvatarImage src={profileData.profile_picture_url} alt={profileData.full_name} />;

                      <AvatarFallback>{profileData.full_name?.charAt(0)};
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;"
                    </div>;                  )}

<<<<<<< HEAD


                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;

                      <h1 className="text-2xl font-bold text-white">{profileData && profileData.full_name}</h1>;
                      <p className="text-zion-cyan font-medium">{profileData && profileData.professional_title}</p>;
                    </div>;
                    {/* Add Save/Unsave Button Here */}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD



                  {/* Location & Availability */}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">;
                    {profileData && profileData.location && (;"
                      <div className="flex items-center text-zion-slate-light">;"
                        <MapPin className="h-4 w-4 mr-1" />;"
                        <span>{profileData && profileData.location}</span>;
                      </div>;
                    )}
                    {profileData && profileData.availability && (;
                      <div className="flex items-center text-zion-slate-light">;"
                        <Clock className="h-4 w-4 mr-1" />;"
                        <span>{profileData && profileData.availability}</span>;
                      </div>;

<<<<<<< HEAD

                    )}


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </div>;
                </div>;
              </div>;


<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </div>
                </div>

              <p className="text-zion-slate-light">{profileData.bio || "No bio provided."}</p>

            </div>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

=======


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


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </Link>

                    <Github className="h-6 w-6" />;"


<<<<<<< HEAD
                )}
                {profileData && profileData.twitter_link && (;
                  <a
                    href={profileData && profileData.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"

=======
                  </a>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <Twitter className="h-6 w-6" />;
                  </a>;

<<<<<<< HEAD

                  </Link>



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
                )}
                {profileData && profileData.linkedin_link && (;
                  <a;
                    href={profileData && profileData.linkedin_link}"
                    target="_blank""
                    rel="noopener noreferrer"
<<<<<<< HEAD

                  </Link>


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

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


                    className="text-zion-cyan hover:text-white transition-colors">;
                    <Linkedin className="h-6 w-6" />;
                  </a>;
                )}
              </div>;
            </div>;
          </div>;

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">;
            <HireNowCTA
              talentProfile={{
<<<<<<< HEAD

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




                id: profileData?.id || '',
                full_name: profileData?.full_name || '',
                professional_title: profileData?.professional_title || '',
                hourly_rate: profileData?.hourly_rate || 0


              }}
            />;
            {/* Placeholder for other sidebar elements */}


=======


                professional_title: profileData?.professional_title || "",
                hourly_rate: profileData?.hourly_rate || 0,

                hourly_rate: profileData?.hourly_rate || 0,

              }}
            />;

      <Footer />

    </>



              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
      <Footer />
    </>
;

  )
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD


}
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
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    </>;
  ),; import {};


<<<<<<< HEAD


=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
