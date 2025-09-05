<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { CommunityDiscussion } from "@/components/CommunityDiscussion",
import { Badge } from "@/components/ui/badge",
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from "lucide-react",
import { createTestNotification, createOnboardingNotification, createSystemNotification } from "@/utils/notifications",
import { NotificationCenter } from "@/components/NotificationCenter",
import { useToast } from "@/hooks/use-toast",
import { Link } from "react-router-dom",
=======
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { CommunityDiscussion } from &quot;@/components/CommunityDiscussion&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { UserCheck, Bell, MessageSquare, LogOut, Send, Settings } from &quot;lucide-react&quot;;
import { createTestNotification, createOnboardingNotification, createSystemNotification } from &quot;@/utils/notifications&quot;;
import { NotificationCenter } from &quot;@/components/NotificationCenter&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function Dashboard() {
  const { user, logout } = useAuth(),
  const { toast } = useToast(),

  if (!user) return null,

  const handleTestNotification = async () => {
    const result = await createTestNotification(user.id),
    if (result.success) {
      toast({
<<<<<<< HEAD
        title: "Test notification created",
        description: "Check your notification center"})
    } else {
      toast({
        title: "Error creating test notification",
        description: "Something went wrong",
        variant: "destructive"})
=======
        title: &quot;Test notification created&quot;,
        description: &quot;Check your notification center&quot;});
    } else {
      toast({
        title: &quot;Error creating test notification&quot;,
        description: &quot;Something went wrong&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
    <>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4 py-8&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
            {/* Left Sidebar - User Profile */}
            <div className=&quot;lg:col-span-1&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-xl p-6 mb-6&quot;>
                <div className=&quot;flex flex-col items-center text-center&quot;>
                  <div className=&quot;w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4&quot;>
                    {user.displayName.split(' ').map(name => name[0]).join('')}
                  </div>
                  <h2 className=&quot;text-xl font-bold text-white&quot;>{user.displayName}</h2>
                  <p className=&quot;text-zion-slate-light mb-2&quot;>{user.email}</p>
                  
                  <Badge 
                    className=&quot;bg-zion-purple text-white mb-4&quot;
                  >
                    {user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : &quot;New User&quot;}
                  </Badge>
                  
                  <Button 
                    className=&quot;w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                    onClick={() => window.location.href = &quot;/profile&quot;}
                  >
                    <UserCheck size={16} />
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              {/* Stats & Metrics */}
              <div className=&quot;bg-zion-blue-dark rounded-xl p-6 mb-6&quot;>
                <h3 className=&quot;text-lg font-bold text-white mb-4&quot;>Your Activity</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Profile Completion</span>
                    <span className=&quot;text-zion-cyan font-medium&quot;>65%</span>
                  </div>
                  <div className=&quot;w-full bg-zion-blue rounded-full h-2&quot;>
                    <div className=&quot;bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full&quot; style={{ width: &quot;65%&quot; }}></div>
                  </div>
                  
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Community Points</span>
                    <span className=&quot;text-zion-cyan font-medium&quot;>125</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>ZION$ Balance</span>
                    <span className=&quot;text-zion-cyan font-medium&quot;>
                      <a href=&quot;/wallet&quot; className=&quot;hover:underline&quot;>View Wallet</Link>
                    </span>
                  </div>
                  
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-zion-slate-light&quot;>Badges Earned</span>
                    <span className=&quot;text-zion-cyan font-medium&quot;>3/12</span>
                  </div>
                  
                  {/* Test notification buttons */}
                  <div className=&quot;flex flex-col gap-2 mt-4&quot;>
                    <Button 
                      className=&quot;w-full flex items-center justify-center gap-2&quot;
                      variant=&quot;outline&quot;
                      onClick={handleTestNotification}
                    >
                      <Send size={16} className=&quot;text-zion-cyan&quot; />
                      Send Test Notification
                    </Button>

                    <Button 
                      className=&quot;w-full flex items-center justify-center gap-2&quot;
                      variant=&quot;outline&quot;
                      onClick={async () => {
                        await createOnboardingNotification({
                          userId: user.id,
                          missingMilestone: 'profile_completed',
                          userRole: user.userType === 'employer' || user.userType === 'buyer' ? 'client' : 'talent'
                        }),
                        toast({
<<<<<<< HEAD
                          title: "Onboarding notification sent",
                          description: "Check your notification center"
                        })
=======
                          title: &quot;Onboarding notification sent&quot;,
                          description: &quot;Check your notification center&quot;
                        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      }}
                    >
                      <Settings size={16} className=&quot;text-zion-purple&quot; />
                      Send Onboarding Nudge
                    </Button>

                    <Button 
                      className=&quot;w-full flex items-center justify-center gap-2&quot;
                      variant=&quot;outline&quot;
                      onClick={async () => {
                        await createSystemNotification({
                          userId: user.id,
<<<<<<< HEAD
                          title: "New Feature Available!",
                          message: "We've added a new notification center to help you stay updated with important information.",
                          actionUrl: "/notifications",
                          actionText: "Explore Now"
                        }),
                        toast({
                          title: "System notification sent",
                          description: "Check your notification center"
                        })
=======
                          title: &quot;New Feature Available!&quot;,
                          message: &quot;We've added a new notification center to help you stay updated with important information.&quot;,
                          actionUrl: &quot;/notifications&quot;,
                          actionText: &quot;Explore Now&quot;
                        });
                        toast({
                          title: &quot;System notification sent&quot;,
                          description: &quot;Check your notification center&quot;
                        });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                      }}
                    >
                      <Bell size={16} className=&quot;text-yellow-500&quot; />
                      Send System Alert
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Notifications */}
              <div className=&quot;bg-zion-blue-dark rounded-xl p-6&quot;>
                <h3 className=&quot;text-lg font-bold text-white mb-4 flex items-center&quot;>
                  <Bell size={18} className=&quot;mr-2 text-zion-cyan&quot; />
                  Recent Notifications
                </h3>
                <div className=&quot;space-y-4&quot;>
                  <Link to=&quot;/notifications&quot; className=&quot;block&quot;>
                    <Button variant=&quot;outline&quot; className=&quot;w-full&quot;>
                      <Bell className=&quot;mr-2 h-4 w-4&quot; />
                      View All Notifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content - Dashboard */}
            <div className=&quot;lg:col-span-2&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-xl p-6 mb-6&quot;>
                <div className=&quot;flex items-center justify-between mb-6&quot;>
                  <h2 className=&quot;text-2xl font-bold text-white&quot;>Dashboard</h2>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <NotificationCenter />
                    <Button 
                      variant=&quot;outline&quot; 
                      className=&quot;text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white&quot;
                      onClick={logout}
                    >
                      <LogOut size={16} className=&quot;mr-2&quot; />
                      Logout
                    </Button>
                  </div>
                </div>
                
                <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6&quot;>
                  <div className=&quot;p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light&quot;>
                    <h3 className=&quot;text-lg font-medium text-white&quot;>Welcome, {user.displayName.split(' ')[0]}</h3>
                    <p className=&quot;text-zion-slate-light mt-1&quot;>Your journey on Zion has just begun!</p>
                  </div>
                  <div className=&quot;p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light&quot;>
                    <h3 className=&quot;text-lg font-medium text-white&quot;>Getting Started</h3>
                    <p className=&quot;text-zion-slate-light mt-1&quot;>Complete your profile to unlock all features.</p>
                  </div>
                </div>
                
                {/* Badges Preview */}
                <div className=&quot;mb-8&quot;>
                  <h3 className=&quot;text-lg font-bold text-white mb-4&quot;>Your Badges</h3>
                  <div className=&quot;grid grid-cols-3 sm:grid-cols-4 gap-4&quot;>
                    <div className=&quot;flex flex-col items-center&quot;>
                      <div className=&quot;w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2&quot;>
                        <UserCheck size={24} className=&quot;text-white&quot; />
                      </div>
                      <span className=&quot;text-xs text-center text-zion-slate-light&quot;>Newcomer</span>
                    </div>
                    <div className=&quot;flex flex-col items-center&quot;>
                      <div className=&quot;w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2&quot;>
                        <MessageSquare size={24} className=&quot;text-white&quot; />
                      </div>
                      <span className=&quot;text-xs text-center text-zion-slate-light&quot;>First Post</span>
                    </div>
                    <div className=&quot;flex flex-col items-center opacity-40&quot;>
                      <div className=&quot;w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2&quot;>
                        <Bell size={24} className=&quot;text-zion-slate-light&quot; />
                      </div>
                      <span className=&quot;text-xs text-center text-zion-slate-light&quot;>Locked</span>
                    </div>
                    <div className=&quot;flex flex-col items-center opacity-40&quot;>
                      <div className=&quot;w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2&quot;>
                        <span className=&quot;text-zion-slate-light text-xl&quot;>?</span>
                      </div>
                      <span className=&quot;text-xs text-center text-zion-slate-light&quot;>Locked</span>
                    </div>
                  </div>
                </div>
                
                {/* Community Section */}
                <div>
                  <h3 className=&quot;text-lg font-bold text-white mb-4&quot;>Community</h3>
                  <CommunityDiscussion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
