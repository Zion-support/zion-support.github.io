<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommunityDiscussion } from "@/components/CommunityDiscussion";
<<<<<<< HEAD
=======
import { useAuth } from "@/hooks/useAuth";"
import { Button } from "@/components/ui/button";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { CommunityDiscussion } from "@/components/CommunityDiscussion";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Badge } from "@/components/ui/badge";
import {}
=======
import { Badge } from "@/components/ui/badge";
import {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  UserCheck,
  Bell,
  MessageSquare,
  LogOut,
  Send,
<<<<<<< HEAD
  Settings,";
} from "lucide-react";
import {}
  createTestNotification,
  createOnboardingNotification,
  createSystemNotification,";
} from "@/utils/notifications";"
import { NotificationCenter } from "@/components/NotificationCenter";"
import { useToast } from "@/hooks/use-toast";"
import { Link } from "react-router-dom";
<<<<<<< HEAD
export default function Dashboard() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export default function Dashboard() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  Settings,
} from "lucide-react";
import {
  createTestNotification,
  createOnboardingNotification,
  createSystemNotification,
} from "@/utils/notifications";
import { NotificationCenter } from "@/components/NotificationCenter";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default function Dashboard() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;

<<<<<<< HEAD


<<<<<<< HEAD



=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const { user, logout } = useAuth();
  const { toast } = useToast();
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  const { user, logout } = useAuth();
  const { toast } = useToast();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

  const { user, logout } = useAuth();
  const { toast } = useToast();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CommunityDiscussion } from "@/components/CommunityDiscussion",
import { Badge } from "@/components/ui/badge",
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react",
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications",
import { NotificationCenter } from "@/components/NotificationCenter",
<<<<<<< HEAD
=======
import { useToast } from "@/hooks/use-toast";
=======

"
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { CommunityDiscussion } from "@/components/CommunityDiscussion","
import { Badge } from "@/components/ui/badge","
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react","
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications","
import { NotificationCenter } from "@/components/NotificationCenter",";
import { useToast } from "@/hooks/use-toast";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Link } from "react-router-dom";
export default function Dashboard() {};
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;
<<<<<<< HEAD
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import { useToast } from "@/hooks/use-toast",
import { Link } from "react-router-dom",
export default function Dashboard() {
<<<<<<< HEAD
  const { user, logout } = useAuth(),
  const { toast } = useToast(),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const handleTestNotification = async () => {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;
import { useToast } from "@/hooks/use-toast",
import { Link } from "react-router-dom",
export default function Dashboard() {
  const { user, logout } = useAuth(),
  const { toast } = useToast(),

  if (!user) return null,



  const handleTestNotification = async () => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const result = await createTestNotification(user && user.id);
    if (result && result.success) {;
<<<<<<< HEAD
      toast({;
        title: "Test notification created",,
  description: "Check your notification center"});
    } else {;
      toast({;
        title: "Error creating test notification",,
  description: "Something went wrong",;
        variant: "destructive"});

  const handleTestNotification = async () => {
    const result = await createTestNotification(user.id);
    if (result.success) {
      toast({
        title: "Test notification created",
        description: "Check your notification center",
      });
    } else {
      toast({
        title: "Error creating test notification",
        description: "Something went wrong",
        variant: "destructive",
      });
    }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
=======
      toast({;"
        title: "Test notification created",;"
        description: "Check your notification center"});
    } else {;
      toast({;"
        title: "Error creating test notification",;"
        description: "Something went wrong",;"
        variant: "destructive"});



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <>;
      <Header />;"
      <div className="min-h-screen bg-zion-blue">;"
        <div className="container mx-auto px-4 py-8">;"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
<<<<<<< HEAD
            {/* Left Sidebar - User Profile */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useToast } from "@/hooks/use-toast",
import { Link } from "react-router-dom",
export default function Dashboard() {
  const { user, logout } = useAuth(),
  const { toast } = useToast(),

  if (!user) return null,

  const handleTestNotification = async () => {
    const result = await createTestNotification(user.id),
    if (result.success) {
      toast({
        title: "Test notification created"
        description: "Check your notification center"})
    } else {
      toast({
        title: "Error creating test notification"
        description: "Something went wrong"
        variant: "destructive"})
    }
  }




  const { toast } = useToast();"
import { useAuth } from "@/hooks/useAuth",""
import { Button } from "@/components/ui/button",""
import { Header } from "@/components/Header",""
import { Footer } from "@/components/Footer",""
import { CommunityDiscussion } from "@/components/CommunityDiscussion",""
import { Badge } from "@/components/ui/badge",""
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react",""
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications",""
import { NotificationCenter } from "@/components/NotificationCenter",""
  if (!user) return null;"
import { useToast } from "@/hooks/use-toast",""
import { Link } from "react-router-dom","
  const { user, logout } = useAuth(),
  const { toast } = useToast(),

  if (!user) return null,



  const handleTestNotification = async () => {;
    const result = await createTestNotification(user && user.id);
    if (result && result.success) {;
      toast({;"
        title: "Test notification created",;")"
        description: "Check your notification center"});"
    } else {;
        title: "Error creating test notification",;""
        description: "Something went wrong",;")"
        variant: "destructive"});"
  const handleTestNotification = async () => {
    const result = await createTestNotification(user.id);
    if (result.success) {
      toast({"
        title: "Test notification created",""
        description: "Check your notification center",")
      });
    } else {
  // TODO: Implement
        title: "Error creating test notification",""
        description: "Something went wrong",""
        variant: "destructive",")
pr-12325
  },

  return (
<<<<<<< HEAD
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - User Profile */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
=======
            {/* Left Sidebar - User Profile */}"
            <div className="lg:col-span-1">"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
                <div className="flex flex-col items-center text-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


                  <Badge 


<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <Badge
                  <Badge 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    className="bg-zion-purple text-white mb-4"
                  >
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : "New User"}
=======

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <Badge className="bg-zion-purple text-white mb-4">
                    {user.userType;
                      ? user.userType.charAt(0).toUpperCase() +
                        user.userType.slice(1)"
                      : "New User"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                  </Badge>
<<<<<<< HEAD
                  <Button
                  <Button 
=======

<<<<<<< HEAD
                  <Button
<<<<<<< HEAD
                  <Button 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
=======
                  <Button"
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    onClick={() => (window.location.href = "/profile")}
                  >
                    <UserCheck size={16} />
                    Edit Profile;
                  </Button>
                </div>
              </div>

              {/* Stats & Metrics */}"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
                <h3 className="text-lg font-bold text-white mb-4">
                  Your Activity;
                </h3>"
                <div className="space-y-4">"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">
                      Profile Completion;
                    </span>"
                    <span className="text-zion-cyan font-medium">65%</span>
                  </div>"
                  <div className="w-full bg-zion-blue rounded-full h-2">
                    <div"
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full""
                      style={{ width: "65%" }}
                    ></div>
                  </div>
"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">
                      Community Points;
                    </span>"
                    <span className="text-zion-cyan font-medium">125</span>
<<<<<<< HEAD
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <a href="/wallet" className="hover:underline">View Wallet</Link>                    </span>
=======
                  </div>"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">ZION$ Balance</span>"
                    <span className="text-zion-cyan font-medium">"
                      <a href="/wallet" className="hover:underline">
                        View Wallet;
                      </a>
                    </span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </div>
"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">Badges Earned</span>"
                    <span className="text-zion-cyan font-medium">3/12</span>
                  </div>

                  {/* Test notification buttons */}"
                  <div className="flex flex-col gap-2 mt-4">
                    <Button"
                      className="w-full flex items-center justify-center gap-2""
                      variant="outline"
                      onClick={handleTestNotification}
                    >"
                      <Send size={16} className="text-zion-cyan" />
                      Send Test Notification;
                    </Button>
<<<<<<< HEAD
                    <Button
                    <Button 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
                    <Button
<<<<<<< HEAD
                    <Button 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={async () => {
<<<<<<< HEAD
<<<<<<< HEAD
                        await createOnboardingNotification({
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
                          userId: user.id
                          missingMilestone: 'profile_completed'
                          userRole: user.userType === 'employer' |user.userType === 'buyer' ? 'client' : 'talent'
                        });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          userId: user.id,
<<<<<<< HEAD
                          missingMilestone: 'profile_completed',
                          userRole: user.userType === 'employer' || user.userType === 'buyer' ? 'client' : 'talent'
                        }),
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
                    <Button"
                      className="w-full flex items-center justify-center gap-2""
                      variant="outline"
                      onClick={async () => {}
                        await createOnboardingNotification({}
                          userId: user.id,"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          missingMilestone: "profile_completed",
                          userRole:"
                            user.userType === "employer" ||"
                            user.userType === "buyer""
                              ? "client""
                              : "talent",
                        });
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                        toast({
                          title: "Onboarding notification sent",
=======
                        toast({"
                          title: "Onboarding notification sent","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          description: "Check your notification center",
                        });
                      }}
                    >"
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge;
                    </Button>
<<<<<<< HEAD
                    <Button
                    <Button 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
                    <Button
<<<<<<< HEAD
                    <Button 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                      className="w-full flex items-center justify-center gap-2"
=======
                    <Button"
                      className="w-full flex items-center justify-center gap-2""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
                      <Bell size={16} className="text-yellow-500" />
                      Send System Alert;
                    </Button>
                  </div>
                </div>
              </div>

              {/* Notifications */}"
              <div className="bg-zion-blue-dark rounded-xl p-6">"
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">"
                  <Bell size={18} className="mr-2 text-zion-cyan" />
                  Recent Notifications;
                </h3>"
                <div className="space-y-4">"
                  <Link to="/notifications" className="block">"
                    <Button variant="outline" className="w-full">"
                      <Bell className="mr-2 h-4 w-4" />
                      View All Notifications;
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content - Dashboard */}"
            <div className="lg:col-span-2">"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
                <div className="flex items-center justify-between mb-6">"
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>"
                  <div className="flex items-center gap-2">
                    <NotificationCenter />
                    <Button"
                      variant="outline""
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={logout}
                    >"
                      <LogOut size={16} className="mr-2" />
                      Logout;
                    </Button>
                  </div>
                </div>
"
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">"
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">"
                    <h3 className="text-lg font-medium text-white">"
                      Welcome, {user.displayName.split(" ")[0]}
                    </h3>"
                    <p className="text-zion-slate-light mt-1">
                      Your journey on Zion has just begun!
                    </p>
                  </div>"
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">"
                    <h3 className="text-lg font-medium text-white">
                      Getting Started;
                    </h3>"
                    <p className="text-zion-slate-light mt-1">
                      Complete your profile to unlock all features.
                    </p>
                  </div>
                </div>

                {/* Badges Preview */}"
                <div className="mb-8">"
                  <h3 className="text-lg font-bold text-white mb-4">
                    Your Badges;
                  </h3>"
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">"
                    <div className="flex flex-col items-center">"
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">"
                        <UserCheck size={24} className="text-white" />
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">
                        Newcomer;
                      </span>
                    </div>"
                    <div className="flex flex-col items-center">"
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">"
                        <MessageSquare size={24} className="text-white" />
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">
                        First Post;
                      </span>
                    </div>"
                    <div className="flex flex-col items-center opacity-40">"
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">"
                        <Bell size={24} className="text-zion-slate-light" />
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">
                        Locked;
                      </span>
                    </div>"
                    <div className="flex flex-col items-center opacity-40">"
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">"
                        <span className="text-zion-slate-light text-xl">?</span>
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">
                        Locked;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Community Section */}
                <div>"
                  <h3 className="text-lg font-bold text-white mb-4">
                    Community;
                  </h3>
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
  )
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <div className="flex flex-col items-center text-center">;
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">;
<<<<<<< HEAD
                    {user && user.displayName.split(' ').map(name => name[0]).join('')}
=======

=======

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
export default function Dashboard() {;
  const { user, logout } = useAuth(),;
  const { toast } = useToast(),;
  if (!user) return null,;
=======
;
export default function Dashboard() {;
  const { user, logout } = useAuth(),;
  const { toast } = useToast(),;
;
  if (!user) return null,;
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const handleTestNotification = async () => {;
    const result = await createTestNotification(user.id),;
    if (result.success) {;
      toast({;
<<<<<<< HEAD
        title: "Test notification created",;
        description: "Check your notification center"});
    } else {;
      toast({;
        title: "Error creating test notification",;
        description: "Something went wrong",;
        variant: "destructive"});
    }
  },;
=======
        title:"Test notification created",;
        description:"Check your notification center"}),;
    } else {;
      toast({;
        title:"Error creating test notification",;
        description:"Something went wrong",;
        variant:"destructive"}),;
    }
  },;
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;
<<<<<<< HEAD

=======
              ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width: "65%" }}></div>;
                  </div>;

<<<<<<< HEAD
=======
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width:"65%" }}></div>;
                  </div>;
                  ;
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={{ width: "65%" }}></div>;
                  </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">
                      Community Points
                    </span>
                    <span className="text-zion-cyan font-medium">125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <a href="/wallet" className="hover:underline">View Wallet</Link>                    </span>
                  </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
                  ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">Badges Earned</span>;
                    <span className="text-zion-cyan font-medium">3/12</span>;
                  </div>;
<<<<<<< HEAD

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
<<<<<<< HEAD
                      onClick={async () => {;
                        await createOnboardingNotification({;
                          userId: user && user.id,;
                          missingMilestone: 'profile_completed',;
                          userRole: user && user.userType === 'employer' || user && user.userType === 'buyer' ? 'client' : 'talent';
                        });
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        toast({;
                          title: "Onboarding notification sent",;
                          description: "Check your notification center";
                        });
                      }}
                    >;
                      <Settings size={16} className="text-zion-purple" />;
                      Send Onboarding Nudge;
                    </Button>;
<<<<<<< HEAD
=======
                      onClick={async () => {
                        await createOnboardingNotification({

userId: user.id
                          missingMilestone: 'profile_completed'
                          userRole: user.userType === 'employer' |user.userType === 'buyer' ? 'client' : 'talent'
                        });
                          userId: user.id,
                          missingMilestone: "profile_completed",
                          userRole:
                            user.userType === "employer" ||
                            user.userType === "buyer"
                              ? "client"
                              : "talent",
                        });
                        toast({
                          title: "Onboarding notification sent",
                          description: "Check your notification center",
                        });
                      }}
                    >
                      <Settings size={16} className="text-zion-purple" />
                      Send Onboarding Nudge
                    </Button>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                    <Button
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
<<<<<<< HEAD
                      onClick={async () => {;
                        await createSystemNotification({;
                          userId: user && user.id,;
=======
                    <Button;
                      className="w-full flex items-center justify-center gap-2";
                      variant="outline";
                      onClick={async () => {;
                        await createSystemNotification({;
                          userId: user.id,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                          title: "New Feature Available!",;
                          message: "We've added a new notification center to help you stay updated with important information.",;
                          actionUrl: "/notifications",;
                          actionText: "Explore Now";
                        });
                        toast({;
<<<<<<< HEAD
                          title: "System notification sent",;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
              ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD

=======
            ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {/* Main Content - Dashboard */}
            <div className="lg:col-span-2">;
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <div className="flex items-center justify-between mb-6">;
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>;
                  <div className="flex items-center gap-2">;
                    <NotificationCenter />;
<<<<<<< HEAD
                    <Button
                      variant="outline" 
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={logout}>;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      <LogOut size={16} className="mr-2" />;
                      Logout;
                    </Button>;
                  </div>;
                </div>;
<<<<<<< HEAD

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Welcome, {user && user.displayName.split(' ')[0]}</h3>;
=======
                ;
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Welcome, {user.displayName.split(' ')[0]}</h3>;
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Welcome, {user.displayName.split(' ')[0]}</h3>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>;
                  </div>;
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">;
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>;
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>;
                  </div>;
                </div>;
<<<<<<< HEAD

=======
                ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

                {/* Community Section */}
                <div>;
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
=======
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { CommunityDiscussion } from '@/components / CommunityDiscussion';
import { Badge } from '@/components / ui / badge';
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from './lucide-react';
import { createTestNotification, createOnboardingNotification, createSystemNotification } from '@/utils / notifications';
import { NotificationCenter } from '@/components / NotificationCenter';
import { use_toast } from '@/hooks / use - toast';
import { Link } from './react-router-dom';
export default /**
 * Dashboard - Function description
 */
function Dashboard() {
  const { user, logout } = use_auth ();
  const { toast } = use_toast ();
;
  // Check condition
if (return null) {
  $2
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
=======
                      onClick={async () => {
                        await createSystemNotification({
                          userId: user.id,
                          title: "New Feature Available!",
                          message:
                            "We've added a new notification center to help you stay updated with important information.",
                          actionUrl: "/notifications",
                          actionText: "Explore Now",
                        });
                        }),
                        }),
                        toast({
                          title: "System notification sent",
                          description: "Check your notification center",
                        });
                      }}
                    >
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
                    <h3 className="text-lg font-medium text-white">
                      Welcome, {user.displayName.split(" ")[0]}
                    </h3>
                    <p className="text-zion-slate-light mt-1">
                      Your journey on Zion has just begun!
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">
                      Getting Started
                    </h3>
                    <p className="text-zion-slate-light mt-1">
                      Complete your profile to unlock all features.
                    </p>
                  </div>
                </div>

                {/* Badges Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Your Badges
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">
                        <UserCheck size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">
                        Newcomer
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">
                        First Post
                      </span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={24} className="text-zion-slate-light" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">
                        Locked
                      </span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <span className="text-zion-slate-light text-xl">?</span>
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">
                        Locked
                      </span>
                    </div>
                  </div>
                </div>

                {/* Community Section */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Community
                  </h3>
                  <CommunityDiscussion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
  const handleTestNotification = async () => {
    const result = await createTestNotification (user.id);
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Test notification created",
        description: "Check your notification center"});
    } else {
      toast ({
        title: "Error creating test notification",
        description: "Something went wrong",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"});
    }
  }
;
  return (
    <>;
<<<<<<< HEAD
      <Header />;"
      <div className="min - h-screen bg - zion - blue">;"
        <div className="container mx - auto px - 4 py - 8">;"
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            {/* Left Sidebar - User Profile */}"
            <div className="lg:col - span - 1">;"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
                <div className="flex flex - col items - center text - center">;"
                  <div className="w - 24 h - 24 rounded - full bg - zion - purple flex items - center justify - center text - 2xl font - bold text - white mb - 4">;'
                    {user.display_name.split (' ').map (name => name[0]).join ('')}
                  </div>;"
                  <h2 className="text - xl font - bold text - white">{user.display_name}</h2>;"
                  <p className="text - zion - slate - light mb - 2">{user.email}</p>;
                  <Badge;"
                    className="bg - zion - purple text - white mb - 4";
                  >;"
                    {user.user_type ? user.user_type.char_at (0).toUpperCase () + user.user_type.slice (1) : "New User"}
                  </Badge>;
                  <Button;"
                    className="w - full flex items - center gap - 2 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";"
=======
      <Header />;
      <div className="min - h-screen bg - zion - blue">;
        <div className="container mx - auto px - 4 py - 8">;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;
            {/* Left Sidebar - User Profile */}
            <div className="lg:col - span - 1">;
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;
                <div className="flex flex - col items - center text - center">;
                  <div className="w - 24 h - 24 rounded - full bg - zion - purple flex items - center justify - center text - 2xl font - bold text - white mb - 4">;
                    {user.display_name.split (' ').map (name => name[0]).join ('')}
                  </div>;
                  <h2 className="text - xl font - bold text - white">{user.display_name}</h2>;
                  <p className="text - zion - slate - light mb - 2">{user.email}</p>;
                  <Badge;
                    className="bg - zion - purple text - white mb - 4";
                  >;
                    {user.user_type ? user.user_type.char_at (0).toUpperCase () + user.user_type.slice (1) : "New User"}
                  </Badge>;
                  <Button;
                    className="w - full flex items - center gap - 2 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    on_click={() => window.location.href = "/profile"}
                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;
<<<<<<< HEAD
              {/* Stats & Metrics */}"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
                <h3 className="text - lg font - bold text - white mb - 4">Your Activity</h3>;"
                <div className="space - y-4">;"
                  <div className="flex justify - between items - center">;"
                    <span className="text - zion - slate - light">Profile Completion</span>;"
                    <span className="text - zion - cyan font - medium">65%</span>;
                  </div>;"
                  <div className="w - full bg - zion - blue rounded - full h - 2">;"
                    <div className="bg - gradient - to - r from - zion - cyan to - zion - purple h - 2 rounded - full" style={{ width: "65%" }}></div>;
                  </div>;"
                  <div className="flex justify - between items - center">;"
                    <span className="text - zion - slate - light">Community Points</span>;"
                    <span className="text - zion - cyan font - medium">125</span>;
                  </div>;"
                  <div className="flex justify - between items - center">;"
                    <span className="text - zion - slate - light">ZION$ Balance</span>;"
                    <span className="text - zion - cyan font - medium">;"
                      <a href="/wallet" className="hover:underline">View Wallet</a>;
                    </span>;
                  </div>;"
                  <div className="flex justify - between items - center">;"
                    <span className="text - zion - slate - light">Badges Earned</span>;"
                    <span className="text - zion - cyan font - medium">3 / 12</span>;
                  </div>;
                  {/* Test notification buttons */}"
                  <div className="flex flex - col gap - 2 mt - 4">;
                    <Button;"
                      className="w - full flex items - center justify - center gap - 2";"
                      variant="outline";
                      on_click={handleTestNotification}
                    >;"
                      <Send size={16} className="text - zion - cyan" />;
                      Send Test Notification;
                    </Button>;
                    <Button;"
                      className="w - full flex items - center justify - center gap - 2";"
                      variant="outline";
                      on_click={async () => {}
                        await createOnboardingNotification ({}
                          user_id: user.id,'
                          missing_milestone: 'profile_completed','
                          user_role: user.user_type === 'employer' || user.user_type === 'buyer' ? 'client' : 'talent';
                        });
                        toast ({"
                          title: "Onboarding notification sent","
                          description: "Check your notification center";
                        });
                      }}
                    >;"
                      <Settings size={16} className="text - zion - purple" />;
                      Send Onboarding Nudge;
                    </Button>;
                    <Button;"
                      className="w - full flex items - center justify - center gap - 2";"
                      variant="outline";
                      on_click={async () => {}
                        await createSystemNotification ({}
                          user_id: user.id,"
                          title: "New Feature Available!",'"
                          message: "We've added a new notification center to help you stay updated with important information.","
                          action_url: "/notifications","
                          action_text: "Explore Now";
                        });
                        toast ({"
                          title: "System notification sent","
                          description: "Check your notification center";
                        });
                      }}
                    >;"
=======
              {/* Stats & Metrics */}
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;
                <h3 className="text - lg font - bold text - white mb - 4">Your Activity</h3>;
                <div className="space - y-4">;
                  <div className="flex justify - between items - center">;
                    <span className="text - zion - slate - light">Profile Completion</span>;
                    <span className="text - zion - cyan font - medium">65%</span>;
                  </div>;
                  <div className="w - full bg - zion - blue rounded - full h - 2">;
                    <div className="bg - gradient - to - r from - zion - cyan to - zion - purple h - 2 rounded - full" style={{ width: "65%" }}></div>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - zion - slate - light">Community Points</span>;
                    <span className="text - zion - cyan font - medium">125</span>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - zion - slate - light">ZION$ Balance</span>;
                    <span className="text - zion - cyan font - medium">;
                      <a href="/wallet" className="hover:underline">View Wallet</a>;
                    </span>;
                  </div>;
                  <div className="flex justify - between items - center">;
                    <span className="text - zion - slate - light">Badges Earned</span>;
                    <span className="text - zion - cyan font - medium">3 / 12</span>;
                  </div>;
                  {/* Test notification buttons */}
                  <div className="flex flex - col gap - 2 mt - 4">;
                    <Button;
                      className="w - full flex items - center justify - center gap - 2";
                      variant="outline";
                      on_click={handleTestNotification}
                    >;
                      <Send size={16} className="text - zion - cyan" />;
                      Send Test Notification;
                    </Button>;
                    <Button;
                      className="w - full flex items - center justify - center gap - 2";
                      variant="outline";
                      on_click={async () => {
                        await createOnboardingNotification ({
                          user_id: user.id,
                          missing_milestone: 'profile_completed',
                          user_role: user.user_type === 'employer' || user.user_type === 'buyer' ? 'client' : 'talent';
                        });
                        toast ({
                          title: "Onboarding notification sent",
                          description: "Check your notification center";
                        });
                      }}
                    >;
                      <Settings size={16} className="text - zion - purple" />;
                      Send Onboarding Nudge;
                    </Button>;
                    <Button;
                      className="w - full flex items - center justify - center gap - 2";
                      variant="outline";
                      on_click={async () => {
                        await createSystemNotification ({
                          user_id: user.id,
                          title: "New Feature Available!",
                          message: "We've added a new notification center to help you stay updated with important information.",
                          action_url: "/notifications",
                          action_text: "Explore Now";
                        });
                        toast ({
                          title: "System notification sent",
                          description: "Check your notification center";
                        });
                      }}
                    >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Bell size={16} className="text - yellow - 500" />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD
              {/* Notifications */}"
              <div className="bg - zion - blue - dark rounded - xl p - 6">;"
                <h3 className="text - lg font - bold text - white mb - 4 flex items - center">;"
                  <Bell size={18} className="mr - 2 text - zion - cyan" />;
                  Recent Notifications;
                </h3>;"
                <div className="space - y-4">;"
                  <Link to="/notifications" className="block">;"
                    <Button variant="outline" className="w - full">;"
=======
              {/* Notifications */}
              <div className="bg - zion - blue - dark rounded - xl p - 6">;
                <h3 className="text - lg font - bold text - white mb - 4 flex items - center">;
                  <Bell size={18} className="mr - 2 text - zion - cyan" />;
                  Recent Notifications;
                </h3>;
                <div className="space - y-4">;
                  <Link to="/notifications" className="block">;
                    <Button variant="outline" className="w - full">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <Bell className="mr - 2 h - 4 w - 4" />;
                      View All Notifications;
                    </Button>;
                  </Link>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
            {/* Main Content - Dashboard */}"
            <div className="lg:col - span - 2">;"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
                <div className="flex items - center justify - between mb - 6">;"
                  <h2 className="text - 2xl font - bold text - white">Dashboard</h2>;"
                  <div className="flex items - center gap - 2">;
                    <NotificationCenter />;
                    <Button;"
                      variant="outline";"
                      className="text - zion - slate - light border - zion - blue - light hover:bg - zion - blue hover:text - white";
                      on_click={logout}
                    >;"
=======
            {/* Main Content - Dashboard */}
            <div className="lg:col - span - 2">;
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;
                <div className="flex items - center justify - between mb - 6">;
                  <h2 className="text - 2xl font - bold text - white">Dashboard</h2>;
                  <div className="flex items - center gap - 2">;
                    <NotificationCenter />;
                    <Button;
                      variant="outline";
                      className="text - zion - slate - light border - zion - blue - light hover:bg - zion - blue hover:text - white";
                      on_click={logout}
                    >;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <LogOut size={16} className="mr - 2" />;
                      Logout;
                    </Button>;
                  </div>;
<<<<<<< HEAD
                </div>;"
                <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 2 gap - 4 mb - 6">;"
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - purple / 30 border border - zion - blue - light">;'"
                    <h3 className="text - lg font - medium text - white">Welcome, {user.display_name.split (' ')[0]}</h3>;"
                    <p className="text - zion - slate - light mt - 1">Your journey on Zion has just begun!</p>;
                  </div>;"
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - cyan / 30 border border - zion - blue - light">;"
                    <h3 className="text - lg font - medium text - white">Getting Started</h3>;"
                    <p className="text - zion - slate - light mt - 1">Complete your profile to unlock all features.</p>;
                  </div>;
                </div>;
                {/* Badges Preview */}"
                <div className="mb - 8">;"
                  <h3 className="text - lg font - bold text - white mb - 4">Your Badges</h3>;"
                  <div className="grid grid - cols - 3 sm:grid - cols - 4 gap - 4">;"
                    <div className="flex flex - col items - center">;"
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - cyan flex items - center justify - center mb - 2">;"
                        <UserCheck size={24} className="text - white" />;
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">Newcomer</span>;
                    </div>;"
                    <div className="flex flex - col items - center">;"
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - purple - light flex items - center justify - center mb - 2">;"
                        <MessageSquare size={24} className="text - white" />;
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">First Post</span>;
                    </div>;"
                    <div className="flex flex - col items - center opacity - 40">;"
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;"
                        <Bell size={24} className="text - zion - slate - light" />;
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;
                    </div>;"
                    <div className="flex flex - col items - center opacity - 40">;"
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;"
                        <span className="text - zion - slate - light text - xl">?</span>;
                      </div>;"
=======
                </div>;
                <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 2 gap - 4 mb - 6">;
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - purple / 30 border border - zion - blue - light">;
                    <h3 className="text - lg font - medium text - white">Welcome, {user.display_name.split (' ')[0]}</h3>;
                    <p className="text - zion - slate - light mt - 1">Your journey on Zion has just begun!</p>;
                  </div>;
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - cyan / 30 border border - zion - blue - light">;
                    <h3 className="text - lg font - medium text - white">Getting Started</h3>;
                    <p className="text - zion - slate - light mt - 1">Complete your profile to unlock all features.</p>;
                  </div>;
                </div>;
                {/* Badges Preview */}
                <div className="mb - 8">;
                  <h3 className="text - lg font - bold text - white mb - 4">Your Badges</h3>;
                  <div className="grid grid - cols - 3 sm:grid - cols - 4 gap - 4">;
                    <div className="flex flex - col items - center">;
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - cyan flex items - center justify - center mb - 2">;
                        <UserCheck size={24} className="text - white" />;
                      </div>;
                      <span className="text - xs text - center text - zion - slate - light">Newcomer</span>;
                    </div>;
                    <div className="flex flex - col items - center">;
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - purple - light flex items - center justify - center mb - 2">;
                        <MessageSquare size={24} className="text - white" />;
                      </div>;
                      <span className="text - xs text - center text - zion - slate - light">First Post</span>;
                    </div>;
                    <div className="flex flex - col items - center opacity - 40">;
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;
                        <Bell size={24} className="text - zion - slate - light" />;
                      </div>;
                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;
                    </div>;
                    <div className="flex flex - col items - center opacity - 40">;
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;
                        <span className="text - zion - slate - light text - xl">?</span>;
                      </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Community Section */}
<<<<<<< HEAD
                <div>;"
                  <h3 className="text - lg font - bold text - white mb - 4">Community</h3>;


                ;
                {/* Community Section */}
                <div>;"
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
                {/* Community Section */}
                <div>;"
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <CommunityDiscussion />;
=======
                        await createOnboardingNotification({                  <CommunityDiscussion />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        await createOnboardingNotification({                  <CommunityDiscussion />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                <div>;
                  <h3 className="text - lg font - bold text - white mb - 4">Community</h3>;
                ;
                {/* Community Section */}
                <div>;
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
                {/* Community Section */}
                <div>;
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;
                  <CommunityDiscussion />;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                        await createOnboardingNotification({                  <CommunityDiscussion />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

<<<<<<< HEAD
    </>);

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


    </>;
  ),; export default function Dashboard () {}
  const {};
  user, logout;
}= useAuth ();
const {}
  toast;
=======
=======
ursor/fix-website-loading-errors-and-merge-6662
"
      <div className="min-h-screen bg-zion-blue">;"
</div>"
        <div className="container mx-auto px-4 py-8">;"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
            <div className="lg:col-span-1">"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
                <div className="flex flex-col items-center text-center">"
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">"
</div>
                  <h2 className="text-xl font-bold text-white">"
</h2>
                  </h2>"
                  <p className="text-zion-slate-light mb-2">{user.email}</p>""
                  <Badge className="bg-zion-purple text-white mb-4">"

;

                  <Button;"
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"")"
                    onClick={() => (window.location.href = "/profile")}"

                    <UserCheck size={16} />

                <h3 className="text-lg font-bold text-white mb-4">"
</h3>
                </h3>"
                <div className="space-y-4">"
                  <div className="flex justify-between items-center">"
                    <span className="text-zion-slate-light">"
</span>
                    </span>"
                    <span className="text-zion-cyan font-medium">65%</span>"
                  <div className="w-full bg-zion-blue rounded-full h-2">"
                    <div;"
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"""
                      style={{ width: "65%" }}"
                    ></div>
                    <span className="text-zion-cyan font-medium">125</span>"
                    <span className="text-zion-slate-light">ZION$ Balance</span>""
                    <span className="text-zion-cyan font-medium">"
                      <a href="/wallet" className="hover:underline">"
</a>
                    <span className="text-zion-slate-light">Badges Earned</span>""
                    <span className="text-zion-cyan font-medium">3/12</span>"
                  <div className="flex flex-col gap-2 mt-4">"
                      className="w-full flex items-center justify-center gap-2"""
                      variant="outline""
                      onClick={handleTestNotification}
                    >
                      <Send size={16} className="text-zion-cyan" />"


                      onClick={async () => {
                      <Settings size={16} className="text-zion-purple" />"


                      <Bell size={16} className="text-yellow-500" />"

              <div className="bg-zion-blue-dark rounded-xl p-6">"
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">"
                  <Bell size={18} className="mr-2 text-zion-cyan" />"

                  <Link to="/notifications" className="block">"
                    <Button variant="outline" className="w-full">"
                      <Bell className="mr-2 h-4 w-4" />"

            <div className="lg:col-span-2">"
                <div className="flex items-center justify-between mb-6">"
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>""
                  <div className="flex items-center gap-2">"
                    <NotificationCenter />

                      variant="outline"""
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white""
                      onClick={logout}
                      <LogOut size={16} className="mr-2" />"

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">"
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">"
                    <h3 className="text-lg font-medium text-white">"
                    <p className="text-zion-slate-light mt-1">"
</p>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">"
                <div className="mb-8">"
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">"
                    <div className="flex flex-col items-center">"
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">"
                        <UserCheck size={24} className="text-white" />"

                      <span className="text-xs text-center text-zion-slate-light">"
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">"
                        <MessageSquare size={24} className="text-white" />"

                    <div className="flex flex-col items-center opacity-40">"
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">"
                        <Bell size={24} className="text-zion-slate-light" />"

                        <span className="text-zion-slate-light text-xl">?</span>"
                <div>
                  <CommunityDiscussion />

      <Footer />

    </>
  );
    const result = await createTestNotification (user.id);
    // Check condition;
if ( {) {
  $2;
      toast ({"
        title: "Test notification created",")"
  // TODO: Implement
        description: "Something went wrong",")"
;
      <div className="min - h-screen bg - zion - blue">;"
        <div className="container mx - auto px - 4 py - 8">;"
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;"
            <div className="lg:col - span - 1">;"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
                <div className="flex flex - col items - center text - center">;"
                  <div className="w - 24 h - 24 rounded - full bg - zion - purple flex items - center justify - center text - 2xl font - bold text - white mb - 4">;"
                  </div>;"
                  <h2 className="text - xl font - bold text - white">{user.display_name}</h2>;""
                  <p className="text - zion - slate - light mb - 2">{user.email}</p>;"
                  <Badge;"
                    className="bg - zion - purple text - white mb - 4";"
                  >;

                    className="w - full flex items - center gap - 2 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";")"
                    on_click={() => window.location.href = "/profile"}"

                    <UserCheck size={16} />;

                </div>;
                <h3 className="text - lg font - bold text - white mb - 4">Your Activity</h3>;""
                <div className="space - y-4">;"
                  <div className="flex justify - between items - center">;"
                    <span className="text - zion - slate - light">Profile Completion</span>;""
                    <span className="text - zion - cyan font - medium">65%</span>;"
                  <div className="w - full bg - zion - blue rounded - full h - 2">;"
                    <div className="bg - gradient - to - r from - zion - cyan to - zion - purple h - 2 rounded - full" style={{ width: "65%" }}></div>;"
                    <span className="text - zion - slate - light">Community Points</span>;""
                    <span className="text - zion - cyan font - medium">125</span>;"
                    <span className="text - zion - slate - light">ZION$ Balance</span>;""
                    <span className="text - zion - cyan font - medium">;"
                      <a href="/wallet" className="hover:underline">View Wallet</a>;"
                    </span>;
                    <span className="text - zion - slate - light">Badges Earned</span>;""
                    <span className="text - zion - cyan font - medium">3 / 12</span>;"
                  <div className="flex flex - col gap - 2 mt - 4">;"
                      className="w - full flex items - center justify - center gap - 2";""
                      variant="outline";"
                      on_click={handleTestNotification}
                      <Send size={16} className="text - zion - cyan" />;"

                      on_click={async () => {
                      <Settings size={16} className="text - zion - purple" />;"

                      <Bell size={16} className="text - yellow - 500" />;"

              <div className="bg - zion - blue - dark rounded - xl p - 6">;"
                <h3 className="text - lg font - bold text - white mb - 4 flex items - center">;"
                  <Bell size={18} className="mr - 2 text - zion - cyan" />;"

                </h3>;"
                  <Link to="/notifications" className="block">;"
                    <Button variant="outline" className="w - full">;"
                      <Bell className="mr - 2 h - 4 w - 4" />;"

            <div className="lg:col - span - 2">;"
                <div className="flex items - center justify - between mb - 6">;"
                  <h2 className="text - 2xl font - bold text - white">Dashboard</h2>;""
                  <div className="flex items - center gap - 2">;"
                    <NotificationCenter />;

                      variant="outline";""
                      className="text - zion - slate - light border - zion - blue - light hover:bg - zion - blue hover:text - white";"
                      on_click={logout}
                      <LogOut size={16} className="mr - 2" />;"

                <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 2 gap - 4 mb - 6">;"
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - purple / 30 border border - zion - blue - light">;"
                    <h3 className="text - lg font - medium text - white">Welcome, {user.display_name.split (' ')[0]}</h3>;
                    <p className="text - zion - slate - light mt - 1">Your journey on Zion has just begun!</p>;"
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - cyan / 30 border border - zion - blue - light">;"
                    <h3 className="text - lg font - medium text - white">Getting Started</h3>;""
                    <p className="text - zion - slate - light mt - 1">Complete your profile to unlock all features.</p>;"
                <div className="mb - 8">;"
                  <h3 className="text - lg font - bold text - white mb - 4">Your Badges</h3>;""
                  <div className="grid grid - cols - 3 sm:grid - cols - 4 gap - 4">;"
                    <div className="flex flex - col items - center">;"
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - cyan flex items - center justify - center mb - 2">;"
                        <UserCheck size={24} className="text - white" />;"

                      <span className="text - xs text - center text - zion - slate - light">Newcomer</span>;"
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - purple - light flex items - center justify - center mb - 2">;"
                        <MessageSquare size={24} className="text - white" />;"

                      <span className="text - xs text - center text - zion - slate - light">First Post</span>;"
                    <div className="flex flex - col items - center opacity - 40">;"
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;"
                        <Bell size={24} className="text - zion - slate - light" />;"

                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;"
                        <span className="text - zion - slate - light text - xl">?</span>;"
                <div>;
                  <h3 className="text - lg font - bold text - white mb - 4">Community</h3>;"
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;"
                  <CommunityDiscussion />;

      <Footer />;


    </>);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    </>;
  ),; export default function Dashboard () {
  const {
  // TODO: Implement
  user, logout;
}= useAuth ();
<<<<<<< HEAD
const {
  toast 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
  toast;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}= useToast ();

<<<<<<< HEAD
<<<<<<< HEAD
};"
return (<> <Header /> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {}
  16 "
}/> Edit Profile </Button> </div> </div> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Community Points</span> <span className="text-zion-cyan font-medium" >125</span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >ZION$ Balance</span> <span className="text-zion-cyan font-medium" > <a href="/wallet" className="hover:underline" >View Wallet</Link> </span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Badges Earned</span> <span className="text-zion-cyan font-medium" >3/12</span> </div> Send Test Notification </Button> <Button;
}
}> <Settings size= {}
  16 "
}className="text-zion-purple" /> 
}
}> <Bell size= {}
  16 "
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> Logout </Button> </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {}
  /* Community Section */ "
=======
};
return (<> <Header /> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {
  16 
}/> Edit Profile </Button> </div> </div> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Community Points</span> <span className="text-zion-cyan font-medium" >125</span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >ZION$ Balance</span> <span className="text-zion-cyan font-medium" > <a href="/wallet" className="hover:underline" >View Wallet</Link> </span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Badges Earned</span> <span className="text-zion-cyan font-medium" >3/12</span> </div> Send Test Notification </Button> <Button 
}
=======
};"
return (<> <Header /> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {"
}/> Edit Profile  </div> </div> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Community Points</span> <span className="text-zion-cyan font-medium" >125</span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >ZION$ Balance</span> <span className="text-zion-cyan font-medium" > <a href="/wallet" className="hover:underline" >View Wallet </span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Badges Earned</span> <span className="text-zion-cyan font-medium" >3/12</span> </div> Send Test Notification  <Button;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}> <Settings size= {
  16;"
}className="text-zion-purple" />"

}> <Bell size= {
  16 
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> Logout </Button> </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {
  /* Community Section */ 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>) 
}
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications   </div> </div> </div> Logout  </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {"
)"
}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>)"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
