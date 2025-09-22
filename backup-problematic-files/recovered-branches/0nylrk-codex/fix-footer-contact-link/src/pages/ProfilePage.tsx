
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
  useEffect(() => {;
    const fetchProfile = async () => {;
      setIsLoading(true),;
      setIsError(false),;
      try {;
        const { data, error } = await supabase;
          .from("talent_profiles");
          .select("*");
          .eq("id", profileId);

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

                {/* Main Info */}
                <div className="flex-1">;
                  <div className="flex justify-between items-start">;
                    <div>;

            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>;
              <div className="space-y-3">;

                      <LinkIcon className="h-4 w-4 mr-2" />;
                      {link}
                    </a>;
                  ));

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">;
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>;
              <div className="flex space-x-4">;

          </div>;
        </div>;
      </div>;
      <Footer />;

}