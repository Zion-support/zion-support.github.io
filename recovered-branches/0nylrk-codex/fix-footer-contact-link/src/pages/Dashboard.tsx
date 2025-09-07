import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CommunityDiscussion} from "@/components/CommunityDiscussion";
import {Badge} from "@/components/ui/badge";
import {UserCheck, Bell, MessageSquare, LogOut, Send, Settings} from "lucide-react";
import {createTestNotification, createOnboardingNotification, createSystemNotification} from "@/utils/notifications";
import {NotificationCenter} from "@/components/NotificationCenter";
import {useToast} from "@/hooks/use-toast";
import {Link} from "react-router-dom";
export default function Dashboard() {;
<<<<<<< HEAD

  const { user, logout } = useAuth();
  const { toast } = useToast();
=======
<<<<<<< HEAD

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommunityDiscussion } from "@/components/CommunityDiscussion";

import { Badge } from "@/components/ui/badge";
import {}

  UserCheck,
  Bell,
  MessageSquare,
  LogOut,
  Send,

export default function Dashboard() {

  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;

  const { user, logout } = useAuth();
  const { toast } = useToast();

=======
<<<<<<< HEAD
  const { user, logout } = useAuth();
  const { toast } = useToast();
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CommunityDiscussion } from "@/components/CommunityDiscussion",
import { Badge } from "@/components/ui/badge",
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react",
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications",
import { NotificationCenter } from "@/components/NotificationCenter",

import { Link } from "react-router-dom";
<<<<<<< HEAD
export default function Dashboard() {};
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;

  const handleTestNotification = async () => {;

    const result = await createTestNotification(user && user.id);
    if (result && result.success) {;

    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto px-4 py-8">;"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;

<<<<<<< HEAD
=======
export default function Dashboard() {
    const result = await createTestNotification(user && user.id);
    if (result && result.success) {;
      toast({;
        title: "Test notification created",,
  description: "Check your notification center"});
    } else {;
      toast({;
        title: "Error creating test notification",,
  description: "Something went wrong",;
        variant: "destructive"});

<<<<<<< HEAD
  const handleTestNotification = async () => {
    const result = await createTestNotification(user.id);
    if (result.success) {
      toast({
        title: "Test notification created",
        description: "Check your notification center",
      });
  const { user, logout } = useAuth($2);
  const { toast } = useToast($2);
=======
    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  if (!user) return null,

  if (!user) return null,

  const handleTestNotification = async () => {
    const result = await createTestNotification($2);
    if (result.success) {
      toast({
        title: "Test notification created",
        description: "Check your notification center"})
    } else {
      toast({
        title: "Error creating test notification",
        description: "Something went wrong",
        variant: "destructive"})
    }
  },

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - User Profile */}
=======
>>>>>>> origin/chore/fix-lint-and-merge
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">

                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {user.displayName"
                      .split(" ")
                      .map((name) => name[0])"
                      .join("")}
                  </div>"
                  <h2 className="text-xl font-bold text-white">
                    {user.displayName}
                  </h2>"
                  <p className="text-zion-slate-light mb-2">{user.email}</p>
<<<<<<< HEAD
                  <Badge
=======
<<<<<<< HEAD

                  <Badge 

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {user.displayName"
                      .split(" ")
                      .map((name) => name[0])"
                      .join("")}
                  </div>"
                  <h2 className="text-xl font-bold text-white">
                    {user.displayName}
                  </h2>"
                  <p className="text-zion-slate-light mb-2">{user.email}</p>

                  <Badge 

<<<<<<< HEAD
=======

<<<<<<< HEAD
                  <Badge
                  <Badge 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    className="bg-zion-purple text-white mb-4"
                  >
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : "New User"}
                  </Badge>
<<<<<<< HEAD
                  <Button
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <Button 


                  <Button
                  <Button 
=======

                  <Button 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window.location.href = "/profile"}
                  >
                    <UserCheck size={16} />
                    Edit Profile
                  </Button>
                </div>
              </div>
              {/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Profile Completion</span>
                    <span className="text-zion-cyan font-medium">65%</span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
<<<<<<< HEAD
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={ width: "65%" }></div>
=======
                    <div"
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full""
                      style={{ width: "65%" }}
                    ></div>
<<<<<<< HEAD
                  </div>
"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">
                      Community Points;
                    </span>"
                    <span className="text-zion-cyan font-medium">125</span>

                  </div>
"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">Badges Earned</span>"
=======
>>>>>>> origin/resolved-merge-conflicts
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Community Points</span>
                    <span className="text-zion-cyan font-medium">125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <a href="/wallet" className="hover:underline">View Wallet</Link>                    </span>
                  </div>

                      <a href="/wallet" className="hover:underline">View Wallet</Link>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Badges Earned</span>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    <span className="text-zion-cyan font-medium">3/12</span>
                  </div>
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={handleTestNotification}
                    >
                      <Send size={16} className="text-zion-cyan" />
                      Send Test Notification
                    </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD

                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {

                          userId: user.id,

                          missingMilestone: "profile_completed",
                          userRole:"
                            user.userType === "employer" ||"
                            user.userType === "buyer""
                              ? "client""
                              : "talent",
                        });

=======

<<<<<<< HEAD
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {
=======
<<<<<<< HEAD
                    <Button 


>>>>>>> origin/resolved-merge-conflicts
                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {
                        await createOnboardingNotification($2);
                        toast({
                          title: "Onboarding notification sent"
                          description: "Check your notification center"
                        })
                      }
                    >
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge
                    </Button>
                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {
                        await createSystemNotification($2);
                        toast({
                          title: "System notification sent"

<<<<<<< HEAD
                          description: "Check your notification center"
                        })
                      }
                    >
=======
                      variant="outline"
                      onClick={async () => {}
                        await createSystemNotification({}
                          userId: user.id,"
                          title: "New Feature Available!",
                          message:"
                            "We've added a new notification center to help you stay updated with important information.","
                          actionUrl: "/notifications","
                          actionText: "Explore Now",
                        });

                        }),

                        }),

                        toast({"
                          title: "System notification sent","
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          description: "Check your notification center",
                        });
                      }}
                    >"
<<<<<<< HEAD
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge;
                    </Button>

                      className="w-full flex items-center justify-center gap-2"

                      variant="outline"
                      onClick={async () => {}
                        await createSystemNotification({}
                          userId: user.id,"
                          title: "New Feature Available!",
                          message:"
                            "We've added a new notification center to help you stay updated with important information.","
                          actionUrl: "/notifications","
                          actionText: "Explore Now",
                        });

                        }),

                        }),

                        toast({"
                          title: "System notification sent","
                          description: "Check your notification center",
                        });
                      }}
                    >"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                      <Bell size={16} className="text-yellow-500" />
                      Send System Alert
                    </Button>
                  </div>
                </div>
              </div>
              {/* Notifications */}
              <div className="bg-zion-blue-dark rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Bell size={18} className="mr-2 text-zion-cyan" />
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  <Link to="/notifications" className="block">
                    <Button variant="outline" className="w-full">
                      <Bell className="mr-2 h-4 w-4" />
                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationCenter />
                    <Button
                      variant="outline"
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={logout}
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Welcome, {user.displayName.split(' ')[0]}</h3>
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>
                  </div>
                </div>
                {/* Badges Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">
                        <UserCheck size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={24} className="text-zion-slate-light" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <span className="text-zion-slate-light text-xl">?</span>
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>
                    </div>
                  </div>
                </div>
                {/* Community Section */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>
                  <CommunityDiscussion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
<<<<<<< HEAD
                        await createOnboardingNotification({                  <CommunityDiscussion />;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <div className="flex flex-col items-center text-center">;
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">;

<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { CommunityDiscussion } from "@/components/CommunityDiscussion",;
import { Badge } from "@/components/ui/badge",;
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react",;
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications",;
import { NotificationCenter } from "@/components/NotificationCenter",;
import { useToast } from "@/hooks/use-toast",;
import { Link } from "react-router-dom",;

  const handleTestNotification = async () => {;
    const result = await createTestNotification(user.id),;
    if (result.success) {;
      toast({;

  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-8">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Sidebar - User Profile */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {user.displayName.split(' ').map(name => name[0]).join('')}
<<<<<<< HEAD

=======
<<<<<<< HEAD
                    {user.displayName.split(' ').map(name => name[0]).join('')}
                  </div>;
                  <h2 className="text-xl font-bold text-white">{user.displayName}</h2>;
                  <p className="text-zion-slate-light mb-2">{user.email}</p>;
                  ;
                  <Badge ;
                    className="bg-zion-purple text-white mb-4";
                  >;
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) :"New User"}
                  </Badge>;
                  ;
                  <Button ;
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                    onClick={() => window.location.href = "/profile"}
                  </div>;
                  <h2 className="text-xl font-bold text-white">{user.displayName}</h2>;
                  <p className="text-zion-slate-light mb-2">{user.email}</p>;
                  <Badge;
                    className="bg-zion-purple text-white mb-4";
                  >;
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : "New User"}
                  </Badge>;
                  <Button;
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                    onClick={() => window.location.href = "/profile"}
=======

<<<<<<< HEAD
=======
                  </div>;
                  <h2 className="text-xl font-bold text-white">{user && user.displayName}</h2>;
                  <p className="text-zion-slate-light mb-2">{user && user.email}</p>;

                  <Badge
                    className="bg-zion-purple text-white mb-4">;
                    {user && user.userType ? user && user.userType.charAt(0).toUpperCase() + user && user.userType.slice(1) : "New User"}
                  </Badge>;

                  <Button
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window && window.location.href = "/profile"}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>;
                <div className="space-y-4">;
                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">Profile Completion</span>;
                    <span className="text-zion-cyan font-medium">65%</span>;
                  </div>;
                  <div className="w-full bg-zion-blue rounded-full h-2">;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width:"65%" }}></div>;
                  </div>;
                  ;
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width: "65%" }}></div>;
                  </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">Community Points</span>;
                    <span className="text-zion-cyan font-medium">125</span>;
                  </div>;
                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">ZION$ Balance</span>;
                    <span className="text-zion-cyan font-medium">;
                      <a href="/wallet" className="hover:underline">View Wallet</a>;
                    </span>;
                  </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">Badges Earned</span>;
                    <span className="text-zion-cyan font-medium">3/12</span>;
                  </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                  ;
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">;
                    <Button ;
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">;
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={handleTestNotification}
                    >;
                      <Send size={16} className="text-zion-cyan" />;
                      Send Test Notification;
                    </Button>;
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={async () => {;
                        await createOnboardingNotification({;
                          userId: user.id,;
                          missingMilestone: 'profile_completed',;
                          userRole: user.userType === 'employer' || user.userType === 'buyer' ? 'client' : 'talent';
                        }),;
=======

<<<<<<< HEAD
=======
                  {/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">;
                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={handleTestNotification}>;
                      <Send size={16} className="text-zion-cyan" />;
                      Send Test Notification;
                    </Button>;

                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {;
                        await createOnboardingNotification({;
                          userId: user && user.id,;
                          missingMilestone: 'profile_completed',;
                          userRole: user && user.userType === 'employer' || user && user.userType === 'buyer' ? 'client' : 'talent';
                        });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        toast({;
                          title: "Onboarding notification sent",
                          description: "Check your notification center";
                        });
                      }}
                    >;
                      <Settings size={16} className="text-zion-purple" />;
                      Send Onboarding Nudge;
                    </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={async () => {;
                        await createSystemNotification({;
                          userId: user.id,;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
<<<<<<< HEAD

                          title: "New Feature Available!",
=======
<<<<<<< HEAD

                          title: "New Feature Available!",
=======
                      onClick={async () => {;
                        await createSystemNotification({;
                          userId: user && user.id,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          title: "New Feature Available!",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          message: "We've added a new notification center to help you stay updated with important information.",;
                          actionUrl: "/notifications",;
                          actionText: "Explore Now";
                        });
                        toast({;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
                    <Button ;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={async () => {;
                        await createSystemNotification({;
                          userId:user.id,;
                          title:"New Feature Available!",;
                          message:"We've added a new notification center to help you stay updated with important information.",;
                          actionUrl:"/notifications",;
                          actionText:"Explore Now";
                        }),;
                        toast({;
                          title:"System notification sent",;
                          description:"Check your notification center";
                        }),;
                          title: "System notification sent";
=======
                          title: "System notification sent",;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          description: "Check your notification center";
                        });
                      }}
                    >;
                      <Bell size={16} className="text-yellow-500" />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {/* Notifications */}
              <div className="bg-zion-blue-dark rounded-xl p-6">;
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">;
                  <Bell size={18} className="mr-2 text-zion-cyan" />;
                  Recent Notifications;
                </h3>;
                <div className="space-y-4">;
                  <Link to="/notifications" className="block">;
                    <Button variant="outline" className="w-full">;
                      <Bell className="mr-2 h-4 w-4" />;
                      View All Notifications;
                    </Button>;
                  </Link>;
<<<<<<< HEAD
                </div>;
              </div>;
            </div>;

            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <div className="flex items-center justify-between mb-6">;
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>;
                  <div className="flex items-center gap-2">;
                    <NotificationCenter />;

                      <LogOut size={16} className="mr-2" />;
                      Logout;
                    </Button>;
                  </div>;
                </div>;

                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>;
                  </div>;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>;
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>;
                  </div>;
                </div>;

                {/* Badges Preview */}
                <div className="mb-8">;
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>;
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">;
                    <div className="flex flex-col items-center">;
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">;
                        <UserCheck size={24} className="text-white" />;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>;
                    </div>;
                    <div className="flex flex-col items-center">;
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">;
                        <MessageSquare size={24} className="text-white" />;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>;
                    </div>;
                    <div className="flex flex-col items-center opacity-40">;
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">;
                        <Bell size={24} className="text-zion-slate-light" />;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>;
                    </div>;
                    <div className="flex flex-col items-center opacity-40">;
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">;
                        <span className="text-zion-slate-light text-xl">?</span>;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>;
                    </div>;
                  </div>;
                </div>;

}
  const handleTestNotification = async () => {}
    const result = await createTestNotification (user.id);
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Test notification created","
        description: "Check your notification center"});
    } else {}
      toast ({"
        title: "Error creating test notification","
        description: "Something went wrong","

        variant: "destructive"});
    }
  }
;
  return (
    <>;

                    on_click={() => window.location.href = "/profile"}
                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;

                      <Bell size={16} className="text - yellow - 500" />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;

                      <Bell className="mr - 2 h - 4 w - 4" />;
                      View All Notifications;
                    </Button>;
                  </Link>;
                </div>;
              </div>;
            </div>;

                      <LogOut size={16} className="mr - 2" />;
                      Logout;
                    </Button>;
                  </div>;

                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Community Section */}

                  <CommunityDiscussion />;
=======
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
            ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <div className="flex items-center justify-between mb-6">;
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>;
                  <div className="flex items-center gap-2">;
                    <NotificationCenter />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
                    <Button ;
                      variant="outline" ;
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white";
                      onClick={logout}
                    >;
                    <Button;
                      variant="outline";
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white";
                      onClick={logout}
                    >;
=======
                    <Button
                      variant="outline" 
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={logout}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <LogOut size={16} className="mr-2" />;
                      Logout;
                    </Button>;
                  </div>;
                </div>;
<<<<<<< HEAD
                ;
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Welcome, {user.displayName.split(' ')[0]}</h3>;
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Welcome, {user.displayName.split(' ')[0]}</h3>;
=======

<<<<<<< HEAD
=======
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Welcome, {user && user.displayName.split(' ')[0]}</h3>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>;
                  </div>;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>;
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>;
                  </div>;
                </div>;
<<<<<<< HEAD
                ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Badges Preview */}
                <div className="mb-8">;
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>;
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">;
                    <div className="flex flex-col items-center">;
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">;
                        <UserCheck size={24} className="text-white" />;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>;
                    </div>;
                    <div className="flex flex-col items-center">;
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">;
                        <MessageSquare size={24} className="text-white" />;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>;
                    </div>;
                    <div className="flex flex-col items-center opacity-40">;
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">;
                        <Bell size={24} className="text-zion-slate-light" />;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>;
                    </div>;
                    <div className="flex flex-col items-center opacity-40">;
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">;
                        <span className="text-zion-slate-light text-xl">?</span>;
                      </div>;
                      <span className="text-xs text-center text-zion-slate-light">Locked</span>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
                ;
                {/* Community Section */}
                <div>;
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
                {/* Community Section */}
                <div>;
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
=======

}
  const handleTestNotification = async () => {}
    const result = await createTestNotification (user.id);
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Test notification created","
        description: "Check your notification center"});
    } else {}
      toast ({"
        title: "Error creating test notification","
        description: "Something went wrong","

        variant: "destructive"});
    }
  }
;
  return (
    <>;

                    on_click={() => window.location.href = "/profile"}
                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;

                      <Bell size={16} className="text - yellow - 500" />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;

                      <Bell className="mr - 2 h - 4 w - 4" />;
                      View All Notifications;
                    </Button>;
                  </Link>;
                </div>;
              </div>;
            </div>;

                      <LogOut size={16} className="mr - 2" />;
                      Logout;
                    </Button>;
                  </div>;

                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Community Section */}
<<<<<<< HEAD

                  <CommunityDiscussion />;
=======
                <div>;
                  <h3 className="text - lg font - bold text - white mb - 4">Community</h3>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <CommunityDiscussion />;
>>>>>>> origin/resolved-merge-conflicts
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

    </>);
}
  )
}
<<<<<<< HEAD
=======
}> <Settings size= {
  16 
}className="text-zion-purple" /> 
>>>>>>> merged-prs-20250907-203621
}
}> <Bell size= {
  16 
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> Logout </Button> </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {
  /* Community Section */ 
}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    </>;
  ),; export default function Dashboard () {
  const {
  // TODO: Implement
  user, logout;
}= useAuth ();

}= useToast ();

}> <Settings size= {
  16;"
}className="text-zion-purple" />"

}> <Bell size= {
  16 
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> Logout </Button> </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {
  /* Community Section */ 

}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>) 
}
<<<<<<< HEAD
    </>;
  );
}
;
=======
<<<<<<< HEAD
    </>;
  );
}
;
=======

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
