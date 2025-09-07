<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState, useEffect} from "react";
import {AppHeader} from "@/layout/AppHeader";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Link} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video} from "lucide-react";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {SuggestedJobs} from "@/components/jobs/SuggestedJobs";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {TalentOnboardingSteps} from "@/components/onboarding/TalentOnboardingSteps";
import {MyApplications} from "@/components/jobs/MyApplications";
import {ProjectOfferBanner} from "@/components/projects/ProjectOfferBanner";
import {UpcomingInterviewsCard} from "@/components/interviews/UpcomingInterviewsCard";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
function TalentDashboardContent() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("job-matches");
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Link } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from "lucide-react",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs",
import { useAuth } from "@/hooks/useAuth",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Badge } from "@/components/ui/badge",
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps",
<<<<<<< HEAD
<<<<<<< HEAD
import { MyApplications } from "@/components/jobs/MyApplications",
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { useState, useEffect } from "react";"
import { AppHeader } from "@/layout/AppHeader";"
import { Footer } from "@/components/Footer";"
import { Button } from "@/components/ui/button";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { Link } from "react-router-dom";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SEO } from "@/components/SEO";
import {}
=======
import { SEO } from "@/components/SEO";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
<<<<<<< HEAD
  Video,";
} from "lucide-react";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs";"
import { useAuth } from "@/hooks/useAuth";
import {}
=======
  Video,
} from "lucide-react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs";
import { useAuth } from "@/hooks/useAuth";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  Card,
  CardContent,
  CardDescription,
  CardHeader,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps";
import { MyApplications } from "@/components/jobs/MyApplications";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";
=======
import { MyApplications } from "@/components/jobs/MyApplications",import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { MyApplications } from "@/components/jobs/MyApplications",import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  CardTitle,";
} from "@/components/ui/card";"
import { Avatar } from "@/components/ui/avatar";"
import { Badge } from "@/components/ui/badge";"
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps";"
import { MyApplications } from "@/components/jobs/MyApplications";"
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";
function TalentDashboardContent() {}
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("job-matches");

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
    <>
      <SEO"
        title="Talent Dashboard | Zion AI Marketplace""
        description="Your personalized talent dashboard with job matches and professional opportunities."
      />
      <AppHeader />"
      <main className="container mx-auto px-4 py-8">"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>"
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>"
            <p className="text-muted-foreground mt-1">
              Find opportunities matched to your skills and experience;
            </p>
          </div>"
          <div className="flex gap-4">"
            <Button variant="outline" asChild>"
              <Link to="/profile/settings">"
                <UserIcon className="h-4 w-4 mr-2" />
                Profile Settings;
              </Link>
            </Button>
<<<<<<< HEAD
            <Button asChild>"
              <Link to="/dashboard/talent/applications">"
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker;
=======
            <Button asChild>
              <Link to="/dashboard/talent/applications">
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker

import { useState, useEffect } from "react";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { Button } from "@/components/ui/button";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { Link } from "react-router-dom";""
import { SEO } from "@/components/SEO";"
import {
  // TODO: Implement
}
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video,"
} from "lucide-react";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs";""
import { useAuth } from "@/hooks/useAuth";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Avatar } from "@/components/ui/avatar";""
import { Badge } from "@/components/ui/badge";""
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps";""
import { MyApplications } from "@/components/jobs/MyApplications";""
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";""
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";"
function TalentDashboardContent() {
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("job-matches");"
  return (
    <>
      <SEO;"
        title="Talent Dashboard | Zion AI Marketplace"""
        description="Your personalized talent dashboard with job matches and professional opportunities.""

      />
</SEO>
      <AppHeader />

</AppHeader>"
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">"
</div>
          <div>
</div>"
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>""
            <p className="text-muted-foreground mt-1">"
</p>
            </p>
          </div>"
          <div className="flex gap-4">"
</div>"
            <Button variant="outline" asChild>"
</Button>"
              <Link to="/profile/settings">"
</Link>"
                <UserIcon className="h-4 w-4 mr-2" />"
</UserIcon>
              </Link>
            </Button>
            <Button asChild>
</Button>"
              <Link to="/dashboard/talent/applications">"
</Link>"
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker;"
</Inbox>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </Link>
            </Button>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border">
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName |"User"} />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">
                          {user?.displayName?.charAt(0) |"U"}
                        </div>
                      )}
                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName |"User"}</CardTitle>
                      <CardDescription>{user?.headline |"AI Professional"}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-1 text-lg font-bold">
                      <Star className="h-4 w-4 text-yellow-500" />
                      4.9
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">
                    <div className="text-lg font-bold">18</div>
                    <span className="text-xs text-muted-foreground">Projects</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full" asChild>
                    <Link to="/messages">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>            
=======


<<<<<<< HEAD
            
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border">
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.displayName |"User"} />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">
                          {user?.displayName?.charAt(0) |"U"}
                        </div>
                      )}
                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName |"User"}</CardTitle>
                      <CardDescription>{user?.headline |"AI Professional"}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-1 text-lg font-bold">
                      <Star className="h-4 w-4 text-yellow-500" />
                      4.9
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">
                    <div className="text-lg font-bold">18</div>
                    <span className="text-xs text-muted-foreground">Projects</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full" asChild>
                    <Link to="/messages">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>            
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState, useEffect } from "react",;
import { AppHeader } from "@/layout/AppHeader",;
import { Footer } from "@/components/Footer",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Link } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from "lucide-react",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs",;
import { useAuth } from "@/hooks/useAuth",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Badge } from "@/components/ui/badge",;
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps",;
import { MyApplications } from "@/components/jobs/MyApplications",;
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner",;
=======




            "
import { useState, useEffect } from "react",;"
import { AppHeader } from "@/layout/AppHeader",;"
import { Footer } from "@/components/Footer",;"
import { Button } from "@/components/ui/button",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Link } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from "lucide-react",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Avatar } from "@/components/ui/avatar",;"
import { Badge } from "@/components/ui/badge",;"
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps",;"
import { MyApplications } from "@/components/jobs/MyApplications",;"
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard",;
function TalentDashboardContent() { return null; }
  const { user } = useAuth(),;"
  const [activeTab, setActiveTab] = useState("job-matches");
  return (;
    <>;
      <SEO;"
        title="Talent Dashboard | Zion AI Marketplace";"
        description="Your personalized talent dashboard with job matches and professional opportunities.";
      />;
      <AppHeader />;"
      <main className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;
          <div>;"
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>;"
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>;
          </div>;"
          <div className="flex gap-4">;"
            <Button variant="outline" asChild>;"
              <Link to="/profile/settings">;"
                <UserIcon className="h-4 w-4 mr-2" />;
                Profile Settings;
              </Link>;
            </Button>;
            <Button asChild>;"
              <Link to="/dashboard/talent/applications">;"
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker;

    <>;
      <SEO;"
        title="Talent Dashboard | Zion AI Marketplace";""
        description="Your personalized talent dashboard with job matches and professional opportunities.";"

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <main className="container mx-auto px-4 py-8">;"
</main>"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;"
</div>
          <div>;
</div>"
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>;""
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>;"
          </div>;"
          <div className="flex gap-4">;"
</div>"
            <Button variant="outline" asChild>;"
</Button>"
              <Link to="/profile/settings">;"
</Link>"
                <UserIcon className="h-4 w-4 mr-2" />;"
</UserIcon>
              </Link>;
            </Button>;
            <Button asChild>;
</Button>"
              <Link to="/dashboard/talent/applications">;"
</Link>"
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker;"
</Inbox>

              </Link>;
            </Button>;
          </div>;
        </div>;
        {/* Project Offer Banner - Show pending offers */}
        <ProjectOfferBanner />
"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>"
            <Card className="mb-8">"
              <CardHeader className="pb-2">"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center gap-3">"
                    <Avatar className="h-12 w-12 border">
                      {user?.avatarUrl ? (
                        <img;
                          src={user.avatarUrl}"
                          alt={user.displayName || "User"}
                        />
                      ) : ("
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">"
                          {user?.displayName?.charAt(0) || "U"}
                        </div>
                      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    </Avatar>;
                    <div>;
                      <CardTitle>{user?.displayName || "User"}</CardTitle>;
                      <CardDescription>{user?.headline || "AI Professional"}</CardDescription>;
                    </div>;
                  </div>;
                  <Badge className="bg-green-100 text-green-800">Online</Badge>;
                </div>;
              </CardHeader>;
              <CardContent>;
                <div className="grid grid-cols-2 gap-4 mt-4">;
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">;
                    <div className="flex items-center gap-1 text-lg font-bold">;
                      <Star className="h-4 w-4 text-yellow-500" />;
                      4.9;
                    </div>;
                    <span className="text-xs text-muted-foreground">Rating</span>;
                  </div>;
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">;
                    <div className="text-lg font-bold">18</div>;
                    <span className="text-xs text-muted-foreground">Projects</span>;
                  </div>;
                </div>;
                <div className="mt-4">;
                  <Button className="w-full" asChild>;
                    <Link to="/messages">;
                      <MessageSquare className="h-4 w-4 mr-2" />;
                      Messages;
                    </Link>;
                  </Button>;
                </div>;
              </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            </Card>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    </Avatar>
                    <div>"
                      <CardTitle>{user?.displayName || "User"}</CardTitle>
                      <CardDescription>"
                        {user?.headline || "AI Professional"}
                      </CardDescription>
                    </div>
                  </div>"
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>"
                <div className="grid grid-cols-2 gap-4 mt-4">"
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">"
                    <div className="flex items-center gap-1 text-lg font-bold">"
                      <Star className="h-4 w-4 text-yellow-500" />
                      4.9;
                    </div>"
                    <span className="text-xs text-muted-foreground">
                      Rating;
                    </span>
                  </div>"
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">"
                    <div className="text-lg font-bold">18</div>"
                    <span className="text-xs text-muted-foreground">
                      Projects;
                    </span>
                  </div>
                </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                    </Avatar>
                    <div>
                      <CardTitle>{user?.displayName || "User"}</CardTitle>
                      <CardDescription>
                        {user?.headline || "AI Professional"}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-1 text-lg font-bold">
                      <Star className="h-4 w-4 text-yellow-500" />
                      4.9
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Rating
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">
                    <div className="text-lg font-bold">18</div>
                    <span className="text-xs text-muted-foreground">
                      Projects
                    </span>
                  </div>
                </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                <div className="mt-4">
                  <Button className="w-full" asChild>
                    <Link to="/messages">
<<<<<<< HEAD
=======
"
                <div className="mt-4">"
                  <Button className="w-full" asChild>"
                    <Link to="/messages">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages;
=======
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            {/* New Onboarding Progress Tracker */}
=======
            </Card>;            {/* New Onboarding Progress Tracker */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </Card>;            {/* New Onboarding Progress Tracker */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            {/* New Onboarding Progress Tracker */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            </Card>;            {/* New Onboarding Progress Tracker */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <TalentOnboardingSteps />

            {/* Upcoming Interviews Card */}"
            <div className="mt-8">
              <UpcomingInterviewsCard />
            </div>
"
            <Card className="mt-8">
              <CardHeader>"
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>"
                <div className="space-y-3">"
                  <div className="flex justify-between">"
                    <span className="text-muted-foreground">Profile views</span>"
                    <span className="font-medium">152</span>
                  </div>"
                  <div className="flex justify-between">"
                    <span className="text-muted-foreground">Job matches</span>"
                    <span className="font-medium">7</span>
                  </div>"
                  <div className="flex justify-between">"
                    <span className="text-muted-foreground">Applications</span>"
                    <span className="font-medium">3</span>
                  </div>"
                  <div className="flex justify-between">"
                    <span className="text-muted-foreground">
                      Profile completion;
                    </span>"
                    <span className="font-medium">85%</span>
        <ProjectOfferBanner />

</ProjectOfferBanner>
"
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
</div>
          <div>
</div>"
            <Card className="mb-8">"
</Card>"
              <CardHeader className="pb-2">"
</CardHeader>"
                <div className="flex items-center justify-between">"
</div>"
                  <div className="flex items-center gap-3">"
</div>"
                    <Avatar className="h-12 w-12 border">"
</Avatar>
                        <img;
                          src={user.avatarUrl}"
                          alt={user.displayName || "User"}"
                        />
</img>"
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">"
</div>
                        </div>
                    </Avatar>
                    <div>
</div>"
                      <CardTitle>{user?.displayName || "User"}</CardTitle>"
                      <CardDescription>
</CardDescription>
                      </CardDescription>
                    </div>
                  </div>"
                  <Badge className="bg-green-100 text-green-800">Online</Badge>"
                </div>
              </CardHeader>
              <CardContent>
</CardContent>"
                <div className="grid grid-cols-2 gap-4 mt-4">"
</div>"
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">"
</div>"
                    <div className="flex items-center gap-1 text-lg font-bold">"
</div>"
                      <Star className="h-4 w-4 text-yellow-500" />"
</Star>
                    </div>"
                    <span className="text-xs text-muted-foreground">"
</span>
                    </span>
                  </div>"
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">"
</div>"
                    <div className="text-lg font-bold">18</div>""
                    <span className="text-xs text-muted-foreground">"
</span>
                    </span>
                  </div>
                </div>
"
                <div className="mt-4">"
</div>"
                  <Button className="w-full" asChild>"
</Button>"
                    <Link to="/messages">"
</Link>"
                      <MessageSquare className="h-4 w-4 mr-2" />"
</MessageSquare>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <TalentOnboardingSteps />
</TalentOnboardingSteps>"
            <div className="mt-8">"
</div>

              <UpcomingInterviewsCard />
</UpcomingInterviewsCard>
            </div>

"
            <Card className="mt-8">"
</Card>
              <CardHeader>
</CardHeader>"
                <CardTitle className="text-lg">Quick Stats</CardTitle>"
              </CardHeader>
              <CardContent>
</CardContent>"
                <div className="space-y-3">"
</div>"
                  <div className="flex justify-between">"
</div>"
                    <span className="text-muted-foreground">Profile views</span>""
                    <span className="font-medium">152</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>"
                    <span className="text-muted-foreground">Job matches</span>""
                    <span className="font-medium">7</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>"
                    <span className="text-muted-foreground">Applications</span>""
                    <span className="font-medium">3</span>"
                  </div>"
                  <div className="flex justify-between">"
</div>"
                    <span className="text-muted-foreground">"
</span>
                    </span>"
                    <span className="font-medium">85%</span>"

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
"
          <div className="lg:col-span-2">"
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}>"
              <TabsList className="mb-6">"
                <TabsTrigger value="job-matches" className="flex items-center">"
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  AI Job Matches;
                </TabsTrigger>"
                <TabsTrigger value="applications">My Applications</TabsTrigger>"
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
              </TabsList>
"
              <TabsContent value="job-matches" className="mt-0">
                <SuggestedJobs />
              </TabsContent>
"
              <TabsContent value="applications" className="mt-0">
<<<<<<< HEAD
                <MyApplications />"
                <div className="mt-4 flex justify-center">"
                  <Button variant="outline" asChild>"
                    <Link to="/dashboard/talent/applications">"
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application;
                      Tracker;
=======
                <MyApplications />
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/dashboard/talent/applications">
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application
                      Tracker
"
          <div className="lg:col-span-2">"
</div>"
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}>"
</Tabs>"
              <TabsList className="mb-6">"
</TabsList>"
                <TabsTrigger value="job-matches" className="flex items-center">"
</TabsTrigger>"
                  <BriefcaseIcon className="h-4 w-4 mr-2" />"
</BriefcaseIcon>
                </TabsTrigger>"
                <TabsTrigger value="applications">My Applications</TabsTrigger>""
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>"
              </TabsList>
"
              <TabsContent value="job-matches" className="mt-0">"
</TabsContent>

                <SuggestedJobs />
</SuggestedJobs>
              </TabsContent>

"
              <TabsContent value="applications" className="mt-0">"
</TabsContent>
                <MyApplications />
</MyApplications>"
                <div className="mt-4 flex justify-center">"
</div>"
                  <Button variant="outline" asChild>"
</Button>"
                    <Link to="/dashboard/talent/applications">"
</Link>"
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application;"
</Inbox>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    </Link>
                  </Button>
                </div>
              </TabsContent>
"
              <TabsContent value="saved" className="mt-0">"
                <Card className="bg-muted/30">"
                  <CardContent className="pt-6 text-center">"
                    <p className="text-muted-foreground">
                      You haven't saved any jobs yet.
                    </p>"
                    <Button className="mt-4" asChild>"
                      <Link to="/jobs">Browse Jobs</Link>
"
              <TabsContent value="saved" className="mt-0">"
</TabsContent>"
                <Card className="bg-muted/30">"
</Card>"
                  <CardContent className="pt-6 text-center">"
</CardContent>"
                    <p className="text-muted-foreground">"
</p>
                    </p>"
                    <Button className="mt-4" asChild>"
</Button>"
                      <Link to="/jobs">Browse Jobs</Link>"

                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
</Footer>
    </>)
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;

export default function TalentDashboard() {;
  return (
<<<<<<< HEAD
    <ProtectedRoute>;
      <TalentDashboardContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

;

<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;

export default function TalentDashboard() {;
  return (
    <ProtectedRoute>;
      <TalentDashboardContent />;
    </ProtectedRoute>;
  );
}

;

<<<<<<< HEAD



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { useState, useEffect } from './react';
import { AppHeader } from '@/layout / AppHeader';
import { Footer } from '@/components / Footer';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Link } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from './lucide-react';
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { SuggestedJobs } from '@/components / jobs / SuggestedJobs';
import { use_auth } from '@/hooks / use_auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Avatar } from '@/components / ui / avatar';
import { Badge } from '@/components / ui / badge';
import { TalentOnboardingSteps } from '@/components / onboarding / TalentOnboardingSteps';
import { MyApplications } from '@/components / jobs / MyApplications';
import { ProjectOfferBanner } from '@/components / projects / ProjectOfferBanner';
=======
export default function TalentDashboard() { return null; }
import { useState, useEffect } from './react';'
import { AppHeader } from '@/layout / AppHeader';'
import { Footer } from '@/components / Footer';'
import { Button } from '@/components / ui / button';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Link } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { BriefcaseIcon, UserIcon, MessageSquare, Star, PlusCircle, FileText, Inbox, Video } from './lucide-react';'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { SuggestedJobs } from '@/components / jobs / SuggestedJobs';'
import { use_auth } from '@/hooks / use_auth';'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import { Avatar } from '@/components / ui / avatar';'
import { Badge } from '@/components / ui / badge';'
import { TalentOnboardingSteps } from '@/components / onboarding / TalentOnboardingSteps';'
import { MyApplications } from '@/components / jobs / MyApplications';'
import { ProjectOfferBanner } from '@/components / projects / ProjectOfferBanner';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { UpcomingInterviewsCard } from '@/components / interviews / UpcomingInterviewsCard';
/**
 * TalentDashboardContent - Function description;
 */
function TalentDashboardContent() {}
  const { user } = use_auth ();"
  const [active_tab, setActiveTab] = useState ("job - matches");
;
  return (
    <>;
      <SEO;"
        title="Talent Dashboard | Zion AI Marketplace";"
        description="Your personalized talent dashboard with job matches and professional opportunities.";
      />;
<<<<<<< HEAD
      <AppHeader />;
      <main className="container mx - auto px - 4 py-8">;
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb-8">;
          <div>;
            <h1 className="text - 3xl font-bold">Talent Dashboard</h1>;
            <p className="text - muted - foreground mt-1">Find opportunities matched to your skills and experience</p>;
          </div>;
          <div className="flex gap-4">;
            <Button variant="outline" as_child>;
              <Link to="/profile / settings">;
                <UserIcon className="h - 4 w - 4 mr-2" />;
                Profile Settings;
              </Link>;
            </Button>;
            <Button as_child>;
              <Link to="/dashboard / talent / applications">;
<<<<<<< HEAD
<<<<<<< HEAD
                <Inbox className="h - 4 w - 4 mr-2" /> Application Tracker;
=======
      <AppHeader />;"
      <main className="container mx - auto px - 4 py - 8">;"
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;
          <div>;"
            <h1 className="text - 3xl font - bold">Talent Dashboard</h1>;"
            <p className="text - muted - foreground mt - 1">Find opportunities matched to your skills and experience</p>;
          </div>;"
          <div className="flex gap - 4">;"
            <Button variant="outline" as_child>;"
              <Link to="/profile / settings">;"
                <UserIcon className="h - 4 w - 4 mr - 2" />;
                Profile Settings;
              </Link>;
            </Button>;
            <Button as_child>;"
              <Link to="/dashboard / talent / applications">;"
                <Inbox className="h - 4 w - 4 mr - 2" /> Application Tracker;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <Inbox className="h - 4 w - 4 mr - 2" /> Application Tracker;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                <Inbox className="h - 4 w - 4 mr-2" /> Application Tracker;

    <ProtectedRoute>
</ProtectedRoute>
      <TalentDashboardContent />
</TalentDashboardContent>
    </ProtectedRoute>
    <ProtectedRoute>;
</ProtectedRoute>
      <TalentDashboardContent />;
</TalentDashboardContent>
    </ProtectedRoute>;
    <>;
      <SEO;"
        title="Talent Dashboard | Zion AI Marketplace";""
        description="Your personalized talent dashboard with job matches and professional opportunities.";"

      />;
</SEO>
      <AppHeader />;

</AppHeader>"
      <main className="container mx - auto px - 4 py - 8">;"
</main>"
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;"
</div>
          <div>;
</div>"
            <h1 className="text - 3xl font - bold">Talent Dashboard</h1>;""
            <p className="text - muted - foreground mt - 1">Find opportunities matched to your skills and experience</p>;"
          </div>;"
          <div className="flex gap - 4">;"
</div>"
            <Button variant="outline" as_child>;"
</Button>"
              <Link to="/profile / settings">;"
</Link>"
                <UserIcon className="h - 4 w - 4 mr - 2" />;"
</UserIcon>
              </Link>;
            </Button>;
            <Button as_child>;
</Button>"
              <Link to="/dashboard / talent / applications">;"
</Link>"
                <Inbox className="h - 4 w - 4 mr - 2" /> Application Tracker;"
</Inbox>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </Link>;
            </Button>;
          </div>;
        </div>;
        {/* Project Offer Banner - Show pending offers */}
<<<<<<< HEAD
        <ProjectOfferBanner />;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap-8">;
          <div>;
            <Card className="mb-8">;
              <CardHeader className="pb-2">;
                <div className="flex items - center justify-between">;
                  <div className="flex items - center gap-3">;
                    <Avatar className="h - 12 w-12 border">;
                      {user?.avatar_url ? (
                        <img src={user.avatar_url} alt={user.display_name || "User"} />) : (
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className="flex h - full w - full items - center justify - center bg - muted text - lg font-medium uppercase">;
=======
        <ProjectOfferBanner />;"
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
          <div>;"
            <Card className="mb - 8">;"
              <CardHeader className="pb - 2">;"
                <div className="flex items - center justify - between">;"
                  <div className="flex items - center gap - 3">;"
                    <Avatar className="h - 12 w - 12 border">;
                      {user?.avatar_url ? ("
                        <img src={user.avatar_url} alt={user.display_name || "User"} />) : ("
                        <div className="flex h - full w - full items - center justify - center bg - muted text - lg font - medium uppercase">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        <div className="flex h - full w - full items - center justify - center bg - muted text - lg font - medium uppercase">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                        <div className="flex h - full w - full items - center justify - center bg - muted text - lg font-medium uppercase">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          {user?.display_name?.char_at (0) || "U"}
                        </div>)}
                    </Avatar>;
                    <div>;"
                      <CardTitle>{user?.display_name || "User"}</CardTitle>;"
                      <CardDescription>{user?.headline || "AI Professional"}</CardDescription>;
                    </div>;
<<<<<<< HEAD
                  </div>;
                  <Badge className="bg - green - 100 text - green-800">Online</Badge>;
                </div>;
              </CardHeader>;
              <CardContent>;
                <div className="grid grid - cols - 2 gap - 4 mt-4">;
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded-md">;
                    <div className="flex items - center gap - 1 text - lg font-bold">;
                      <Star className="h - 4 w - 4 text - yellow-500" />;
                      4.9;
                    </div>;
                    <span className="text - xs text - muted-foreground">Rating</span>;
                  </div>;
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded-md">;
                    <div className="text - lg font-bold">18</div>;
                    <span className="text - xs text - muted-foreground">Projects</span>;
                  </div>;
                </div>;
                <div className="mt-4">;
                  <Button className="w-full" as_child>;
                    <Link to="/messages">;
<<<<<<< HEAD
<<<<<<< HEAD
                      <MessageSquare className="h - 4 w - 4 mr-2" />;
=======
                  </div>;"
                  <Badge className="bg - green - 100 text - green - 800">Online</Badge>;
                </div>;
              </CardHeader>;
              <CardContent>;"
                <div className="grid grid - cols - 2 gap - 4 mt - 4">;"
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded - md">;"
                    <div className="flex items - center gap - 1 text - lg font - bold">;"
                      <Star className="h - 4 w - 4 text - yellow - 500" />;
                      4.9;
                    </div>;"
                    <span className="text - xs text - muted - foreground">Rating</span>;
                  </div>;"
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded - md">;"
                    <div className="text - lg font - bold">18</div>;"
                    <span className="text - xs text - muted - foreground">Projects</span>;
                  </div>;
                </div>;"
                <div className="mt - 4">;"
                  <Button className="w - full" as_child>;"
                    <Link to="/messages">;"
                      <MessageSquare className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                      <MessageSquare className="h - 4 w - 4 mr - 2" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                      <MessageSquare className="h - 4 w - 4 mr-2" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      Messages;
        <ProjectOfferBanner />;

</ProjectOfferBanner>"
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;"
</div>
          <div>;
</div>"
            <Card className="mb - 8">;"
</Card>"
              <CardHeader className="pb - 2">;"
</CardHeader>"
                <div className="flex items - center justify - between">;"
</div>"
                  <div className="flex items - center gap - 3">;"
</div>"
                    <Avatar className="h - 12 w - 12 border">;"
</Avatar>)"
                        <img src={user.avatar_url} alt={user.display_name || "User"} />) : ("
</img>"
                        <div className="flex h - full w - full items - center justify - center bg - muted text - lg font - medium uppercase">;"
</div>)
                        </div>)}
                    </Avatar>;
                    <div>;
</div>"
                      <CardTitle>{user?.display_name || "User"}</CardTitle>;""
                      <CardDescription>{user?.headline || "AI Professional"}</CardDescription>;"
                    </div>;
                  </div>;"
                  <Badge className="bg - green - 100 text - green - 800">Online</Badge>;"
                </div>;
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <div className="grid grid - cols - 2 gap - 4 mt - 4">;"
</div>"
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded - md">;"
</div>"
                    <div className="flex items - center gap - 1 text - lg font - bold">;"
</div>"
                      <Star className="h - 4 w - 4 text - yellow - 500" />;"
</Star>
                    </div>;"
                    <span className="text - xs text - muted - foreground">Rating</span>;"
                  </div>;"
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded - md">;"
</div>"
                    <div className="text - lg font - bold">18</div>;""
                    <span className="text - xs text - muted - foreground">Projects</span>;"
                  </div>;
                </div>;"
                <div className="mt - 4">;"
</div>"
                  <Button className="w - full" as_child>;"
</Button>"
                    <Link to="/messages">;"
</Link>"
                      <MessageSquare className="h - 4 w - 4 mr - 2" />;"
</MessageSquare>

                    </Link>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>;
            {/* New Onboarding Progress Tracker */}
            <TalentOnboardingSteps />;
<<<<<<< HEAD
            {/* Upcoming Interviews Card */}
            <div className="mt-8">;
              <UpcomingInterviewsCard />;
            </div>;
            <Card className="mt-8">;
              <CardHeader>;
                <CardTitle className="text-lg">Quick Stats</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <div className="space-y-3">;
                  <div className="flex justify-between">;
                    <span className="text - muted-foreground">Profile views</span>;
                    <span className="font-medium">152</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text - muted-foreground">Job matches</span>;
                    <span className="font-medium">7</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text - muted-foreground">Applications</span>;
                    <span className="font-medium">3</span>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="flex justify-between">;
                    <span className="text - muted-foreground">Profile completion</span>;
                    <span className="font-medium">85%</span>;
=======
            {/* Upcoming Interviews Card */}"
            <div className="mt - 8">;
              <UpcomingInterviewsCard />;
            </div>;"
            <Card className="mt - 8">;
              <CardHeader>;"
                <CardTitle className="text - lg">Quick Stats</CardTitle>;
              </CardHeader>;
              <CardContent>;"
                <div className="space - y-3">;"
                  <div className="flex justify - between">;"
                    <span className="text - muted - foreground">Profile views</span>;"
                    <span className="font - medium">152</span>;
                  </div>;"
                  <div className="flex justify - between">;"
                    <span className="text - muted - foreground">Job matches</span>;"
                    <span className="font - medium">7</span>;
                  </div>;"
                  <div className="flex justify - between">;"
                    <span className="text - muted - foreground">Applications</span>;"
                    <span className="font - medium">3</span>;
                  </div>;"
                  <div className="flex justify - between">;"
                    <span className="text - muted - foreground">Profile completion</span>;"
                    <span className="font - medium">85%</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <div className="flex justify - between">;
                    <span className="text - muted - foreground">Profile completion</span>;
                    <span className="font - medium">85%</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                  <div className="flex justify-between">;
                    <span className="text - muted-foreground">Profile completion</span>;
                    <span className="font-medium">85%</span>;
            <TalentOnboardingSteps />;

</TalentOnboardingSteps>"
            <div className="mt - 8">;"
</div>
              <UpcomingInterviewsCard />;
</UpcomingInterviewsCard>
            </div>;"
            <Card className="mt - 8">;"
</Card>
              <CardHeader>;
</CardHeader>"
                <CardTitle className="text - lg">Quick Stats</CardTitle>;"
              </CardHeader>;
              <CardContent>;
</CardContent>"
                <div className="space - y-3">;"
</div>"
                  <div className="flex justify - between">;"
</div>"
                    <span className="text - muted - foreground">Profile views</span>;""
                    <span className="font - medium">152</span>;"
                  </div>;"
                  <div className="flex justify - between">;"
</div>"
                    <span className="text - muted - foreground">Job matches</span>;""
                    <span className="font - medium">7</span>;"
                  </div>;"
                  <div className="flex justify - between">;"
</div>"
                    <span className="text - muted - foreground">Applications</span>;""
                    <span className="font - medium">3</span>;"
                  </div>;"
                  <div className="flex justify - between">;"
</div>"
                    <span className="text - muted - foreground">Profile completion</span>;""
                    <span className="font - medium">85%</span>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  </div>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
          </div>;
          <div className="lg:col - span-2">;
            <Tabs default_value="job - matches" onValueChange={setActiveTab}>;
<<<<<<< HEAD
<<<<<<< HEAD
              <TabsList className="mb-6">;
                <TabsTrigger value="job - matches" className="flex items-center">;
                  <BriefcaseIcon className="h - 4 w - 4 mr-2" />;
=======
          </div>;"
          <div className="lg:col - span - 2">;"
            <Tabs default_value="job - matches" onValueChange={setActiveTab}>;"
              <TabsList className="mb - 6">;"
                <TabsTrigger value="job - matches" className="flex items - center">;"
                  <BriefcaseIcon className="h - 4 w - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <TabsList className="mb - 6">;
                <TabsTrigger value="job - matches" className="flex items - center">;
                  <BriefcaseIcon className="h - 4 w - 4 mr - 2" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <TabsList className="mb-6">;
                <TabsTrigger value="job - matches" className="flex items-center">;
                  <BriefcaseIcon className="h - 4 w - 4 mr-2" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  AI Job Matches;
                </TabsTrigger>;"
                <TabsTrigger value="applications">My Applications</TabsTrigger>;"
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>;
<<<<<<< HEAD
              </TabsList>;
              <TabsContent value="job - matches" className="mt-0">;
                <SuggestedJobs />;
              </TabsContent>;
              <TabsContent value="applications" className="mt-0">;
                <MyApplications />;
                <div className="mt - 4 flex justify-center">;
                  <Button variant="outline" as_child>;
                    <Link to="/dashboard / talent / applications">;
                      <Inbox className="h - 4 w - 4 mr-2" /> View Full Application Tracker;
                    </Link>;
                  </Button>;
                </div>;
              </TabsContent>;
              <TabsContent value="saved" className="mt-0">;
                <Card className="bg-muted / 30">;
                  <CardContent className="pt - 6 text-center">;
                    <p className="text - muted-foreground">;
                      You haven't saved any jobs yet.;
                    </p>;
<<<<<<< HEAD
<<<<<<< HEAD
                    <Button className="mt-4" as_child>;
=======
              </TabsList>;"
              <TabsContent value="job - matches" className="mt - 0">;
                <SuggestedJobs />;
              </TabsContent>;"
              <TabsContent value="applications" className="mt - 0">;
                <MyApplications />;"
                <div className="mt - 4 flex justify - center">;"
                  <Button variant="outline" as_child>;"
                    <Link to="/dashboard / talent / applications">;"
                      <Inbox className="h - 4 w - 4 mr - 2" /> View Full Application Tracker;
                    </Link>;
                  </Button>;
                </div>;
              </TabsContent>;"
              <TabsContent value="saved" className="mt - 0">;"
                <Card className="bg - muted / 30">;"
                  <CardContent className="pt - 6 text - center">;"
                    <p className="text - muted - foreground">;'
                      You haven't saved any jobs yet.;
                    </p>;"
                    <Button className="mt - 4" as_child>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                    <Button className="mt - 4" as_child>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    <Button className="mt-4" as_child>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      <Link to="/jobs">Browse Jobs</Link>;

          </div>;"
          <div className="lg:col - span - 2">;"
</div>"
            <Tabs default_value="job - matches" onValueChange={setActiveTab}>;"
</Tabs>"
              <TabsList className="mb - 6">;"
</TabsList>"
                <TabsTrigger value="job - matches" className="flex items - center">;"
</TabsTrigger>"
                  <BriefcaseIcon className="h - 4 w - 4 mr - 2" />;"
</BriefcaseIcon>
                </TabsTrigger>;"
                <TabsTrigger value="applications">My Applications</TabsTrigger>;""
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="job - matches" className="mt - 0">;"
</TabsContent>
                <SuggestedJobs />;
</SuggestedJobs>
              </TabsContent>;"
              <TabsContent value="applications" className="mt - 0">;"
</TabsContent>
                <MyApplications />;
</MyApplications>"
                <div className="mt - 4 flex justify - center">;"
</div>"
                  <Button variant="outline" as_child>;"
</Button>"
                    <Link to="/dashboard / talent / applications">;"
</Link>"
                      <Inbox className="h - 4 w - 4 mr - 2" /> View Full Application Tracker;"
</Inbox>
                    </Link>;
                  </Button>;
                </div>;
              </TabsContent>;"
              <TabsContent value="saved" className="mt - 0">;"
</TabsContent>"
                <Card className="bg - muted / 30">;"
</Card>"
                  <CardContent className="pt - 6 text - center">;"
</CardContent>"
                    <p className="text - muted - foreground">;"
</p>
                    </p>;"
                    <Button className="mt - 4" as_child>;"
</Button>"
                      <Link to="/jobs">Browse Jobs</Link>;"

                    </Button>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </main>;
      <Footer />;
    </>);
}
<<<<<<< HEAD
export default /**;
=======
export default /**
 * TalentDashboard - Function description
</Footer>
    </>);
}
export default /**
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
 * TalentDashboard - Function description;
 */
function TalentDashboard() {}
  return (

    <ProtectedRoute>;
      <TalentDashboardContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ),;
import { useState, useEffect } from "react";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { Button } from "@/components/ui/button";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { Link } from "react-router-dom";""
import { SEO } from "@/components/SEO";"
import {
  // TODO: Implement
}
  BriefcaseIcon,
  UserIcon,
  MessageSquare,
  Star,
  PlusCircle,
  FileText,
  Inbox,
  Video,"
} from "lucide-react";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { SuggestedJobs } from "@/components/jobs/SuggestedJobs";""
import { useAuth } from "@/hooks/useAuth";"
  // TODO: Implement
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Avatar } from "@/components/ui/avatar";""
import { Badge } from "@/components/ui/badge";""
import { TalentOnboardingSteps } from "@/components/onboarding/TalentOnboardingSteps";""
import { MyApplications } from "@/components/jobs/MyApplications";""
import { ProjectOfferBanner } from "@/components/projects/ProjectOfferBanner";""
import { UpcomingInterviewsCard } from "@/components/interviews/UpcomingInterviewsCard";"
function TalentDashboardContent() {
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("job-matches");"
  return (
    <>
      <SEO;"
        title="Talent Dashboard | Zion AI Marketplace"""
        description="Your personalized talent dashboard with job matches and professional opportunities.""
      />

      <AppHeader />
"
      <main className="container mx-auto px-4 py-8">"
</main>"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">"
</div>
          <div>
</div>"
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>""
            <p className="text-muted-foreground mt-1">"
</p>
          <div className="flex gap-4">"
            <Button variant="outline" asChild>"
              <Link to="/profile/settings">"
                <UserIcon className="h-4 w-4 mr-2" />"

            <Button asChild>
              <Link to="/dashboard/talent/applications">"
                <Inbox className="h-4 w-4 mr-2" /> Application Tracker;"

    <>;
        title="Talent Dashboard | Zion AI Marketplace";""
        description="Your personalized talent dashboard with job matches and professional opportunities.";"
      />;

      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">;"
          <div>;
            <h1 className="text-3xl font-bold">Talent Dashboard</h1>;""
            <p className="text-muted-foreground mt-1">Find opportunities matched to your skills and experience</p>;"
          </div>;"
          <div className="flex gap-4">;"
            <Button variant="outline" asChild>;"
              <Link to="/profile/settings">;"
                <UserIcon className="h-4 w-4 mr-2" />;"

              ;
            <Button asChild>;
              <Link to="/dashboard/talent/applications">;"

          </div>;
        <ProjectOfferBanner />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">"
            <Card className="mb-8">"
              <CardHeader className="pb-2">"
                <div className="flex items-center justify-between">"
                  <div className="flex items-center gap-3">"
                    <Avatar className="h-12 w-12 border">"

                        <img;
                          src={user.avatarUrl}"
                          alt={user.displayName || "User"}"
</img>"
                        <div className="flex h-full w-full items-center justify-center bg-muted text-lg font-medium uppercase">"
                      <CardTitle>{user?.displayName || "User"}"
                      <CardDescription>

                  <Badge className="bg-green-100 text-green-800">Online"
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mt-4">"
                  <div className="flex flex-col items-center p-3 bg-muted/30 rounded-md">"
                    <div className="flex items-center gap-1 text-lg font-bold">"
                      <Star className="h-4 w-4 text-yellow-500" />"

                    <span className="text-xs text-muted-foreground">"
</span>
                    <div className="text-lg font-bold">18</div>""
                <div className="mt-4">"
                  <Button className="w-full" asChild>"
                    <Link to="/messages">"
                      <MessageSquare className="h-4 w-4 mr-2" />"

            <TalentOnboardingSteps />
            <div className="mt-8">"
              <UpcomingInterviewsCard />

            <Card className="mt-8">"

              <CardHeader>
                <CardTitle className="text-lg">Quick Stats"
                <div className="space-y-3">"
                  <div className="flex justify-between">"
                    <span className="text-muted-foreground">Profile views</span>""
                    <span className="font-medium">152</span>"
                    <span className="text-muted-foreground">Job matches</span>""
                    <span className="font-medium">7</span>"
                    <span className="text-muted-foreground">Applications</span>""
                    <span className="font-medium">3</span>"
                    <span className="text-muted-foreground">"
                    </span>"
                    <span className="font-medium">85%</span>"
          <div className="lg:col-span-2">"
            <Tabs defaultValue="job-matches" onValueChange={setActiveTab}>"
              <TabsList className="mb-6">"
                <TabsTrigger value="job-matches" className="flex items-center">"
                  <BriefcaseIcon className="h-4 w-4 mr-2" />"

                <TabsTrigger value="applications">My Applications""
                <TabsTrigger value="saved">Saved Jobs"
              <TabsContent value="job-matches" className="mt-0">"

                <SuggestedJobs />

              <TabsContent value="applications" className="mt-0">"

                <MyApplications />
                <div className="mt-4 flex justify-center">"
                      <Inbox className="h-4 w-4 mr-2" /> View Full Application;"

              <TabsContent value="saved" className="mt-0">"
                <Card className="bg-muted/30">"
                  <CardContent className="pt-6 text-center">"
                    <p className="text-muted-foreground">"
                    </p>"
                    <Button className="mt-4" asChild>"
                      <Link to="/jobs">Browse Jobs"
      </main>
      <Footer />

    </>)
  );
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

export default function TalentDashboard() {
</ProtectedRoute>
      <TalentDashboardContent />;
</TalentDashboardContent>)
    </ProtectedRoute>);
    <ProtectedRoute>

      <TalentDashboardContent />

    <ProtectedRoute>;

      <TalentDashboardContent />;


      <main className="container mx - auto px - 4 py - 8">;"
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center gap - 4 mb - 8">;"
            <h1 className="text - 3xl font - bold">Talent Dashboard</h1>;""
            <p className="text - muted - foreground mt - 1">Find opportunities matched to your skills and experience</p>;"
          <div className="flex gap - 4">;"
            <Button variant="outline" as_child>;"
              <Link to="/profile / settings">;"
                <UserIcon className="h - 4 w - 4 mr - 2" />;"

            <Button as_child>;
              <Link to="/dashboard / talent / applications">;"
                <Inbox className="h - 4 w - 4 mr - 2" /> Application Tracker;"

        <ProjectOfferBanner />;
        <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;"
            <Card className="mb - 8">;"
              <CardHeader className="pb - 2">;"
                <div className="flex items - center justify - between">;"
                  <div className="flex items - center gap - 3">;"
                    <Avatar className="h - 12 w - 12 border">;"
)"
                        <img src={user.avatar_url} alt={user.display_name || "User"} />) : ("
                        <div className="flex h - full w - full items - center justify - center bg - muted text - lg font - medium uppercase">;"
</div>)
                        </div>)}
                      <CardTitle>{user?.display_name || "User"};""
                      <CardDescription>{user?.headline || "AI Professional"};"
                  <Badge className="bg - green - 100 text - green - 800">Online;"
              <CardContent>;
                <div className="grid grid - cols - 2 gap - 4 mt - 4">;"
                  <div className="flex flex - col items - center p - 3 bg - muted / 30 rounded - md">;"
                    <div className="flex items - center gap - 1 text - lg font - bold">;"
                      <Star className="h - 4 w - 4 text - yellow - 500" />;"

                    <span className="text - xs text - muted - foreground">Rating</span>;"
                    <div className="text - lg font - bold">18</div>;""
                    <span className="text - xs text - muted - foreground">Projects</span>;"
                <div className="mt - 4">;"
                  <Button className="w - full" as_child>;"
                    <Link to="/messages">;"
                      <MessageSquare className="h - 4 w - 4 mr - 2" />;"

            <TalentOnboardingSteps />;
            <div className="mt - 8">;"
              <UpcomingInterviewsCard />;

            <Card className="mt - 8">;"

              <CardHeader>;
                <CardTitle className="text - lg">Quick Stats;"
                <div className="space - y-3">;"
                  <div className="flex justify - between">;"
                    <span className="text - muted - foreground">Profile views</span>;""
                    <span className="font - medium">152</span>;"
                    <span className="text - muted - foreground">Job matches</span>;""
                    <span className="font - medium">7</span>;"
                    <span className="text - muted - foreground">Applications</span>;""
                    <span className="font - medium">3</span>;"
                    <span className="text - muted - foreground">Profile completion</span>;""
                    <span className="font - medium">85%</span>;"
          <div className="lg:col - span - 2">;"
            <Tabs default_value="job - matches" onValueChange={setActiveTab}>;"
              <TabsList className="mb - 6">;"
                <TabsTrigger value="job - matches" className="flex items - center">;"
                  <BriefcaseIcon className="h - 4 w - 4 mr - 2" />;"

                ;"
                <TabsTrigger value="applications">My Applications;""
                <TabsTrigger value="saved">Saved Jobs;"
              <TabsContent value="job - matches" className="mt - 0">;"

                <SuggestedJobs />;

              <TabsContent value="applications" className="mt - 0">;"

                <MyApplications />;
                <div className="mt - 4 flex justify - center">;"
                      <Inbox className="h - 4 w - 4 mr - 2" /> View Full Application Tracker;"

              <TabsContent value="saved" className="mt - 0">;"
                <Card className="bg - muted / 30">;"
                  <CardContent className="pt - 6 text - center">;"
                    <p className="text - muted - foreground">;"
                    </p>;"
                    <Button className="mt - 4" as_child>;"
                      <Link to="/jobs">Browse Jobs;"
      </main>;
      <Footer />;

    </>);
export default /**
 * TalentDashboard - Function description;
 */
function TalentDashboard() {

)



pr-12325
</TalentDashboardContent>
    </ProtectedRoute>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
