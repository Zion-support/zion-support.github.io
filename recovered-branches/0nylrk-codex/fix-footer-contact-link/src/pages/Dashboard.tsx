import { useAuth } from "@/hooks/useAuth";""
import { Button } from "@/components/ui/button";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { CommunityDiscussion } from "@/components/CommunityDiscussion";""
import { Badge } from "@/components/ui/badge";"
import {
  // TODO: Implement
}
  UserCheck,
  Bell,
  MessageSquare,
  LogOut,
  Send,
  Settings,"
} from "lucide-react";"
import {
  // TODO: Implement
}
  createTestNotification,
  createOnboardingNotification,
  createSystemNotification,"
} from "@/utils/notifications";""
import { NotificationCenter } from "@/components/NotificationCenter";""
import { useToast } from "@/hooks/use-toast";""
import { Link } from "react-router-dom";"
export default function Dashboard() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;




  const { user, logout } = useAuth();
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
import { useToast } from "@/hooks/use-toast";""
import { Link } from "react-router-dom";"
export default function Dashboard() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;
  const { user, logout } = useAuth();
  const { toast } = useToast();
  if (!user) return null;"
import { useToast } from "@/hooks/use-toast",""
import { Link } from "react-router-dom","
export default function Dashboard() {
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
      toast({;"
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
}
      toast({"
        title: "Error creating test notification",""
        description: "Something went wrong",""
        variant: "destructive",")
      });
    }
  }
  },

  return (
    <>;
      <Header />;
</Header>"
      <div className="min-h-screen bg-zion-blue">;"
</div>"
        <div className="container mx-auto px-4 py-8">;"
</div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;"
</div>"
            <div className="lg:col-span-1">"
</div>"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
</div>"
                <div className="flex flex-col items-center text-center">"
</div>"
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">"
</div>
                  </div>"
                  <h2 className="text-xl font-bold text-white">"
</h2>
                  </h2>"
                  <p className="text-zion-slate-light mb-2">{user.email}</p>""
                  <Badge className="bg-zion-purple text-white mb-4">"
</Badge>
                  </Badge>

                  <Button;"
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"")"
                    onClick={() => (window.location.href = "/profile")}"
</Button>
                    <UserCheck size={16} />
</UserCheck>
                  </Button>
                </div>
              </div>"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
</div>"
                <h3 className="text-lg font-bold text-white mb-4">"
</h3>
                </h3>"
                <div className="space-y-4">"
</div>"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-zion-slate-light">"
</span>
                    </span>"
                    <span className="text-zion-cyan font-medium">65%</span>"
                  </div>"
                  <div className="w-full bg-zion-blue rounded-full h-2">"
</div>
                    <div;"
                      className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"""
                      style={{ width: "65%" }}"
                    ></div>
                  </div>
"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-zion-slate-light">"
</span>
                    </span>"
                    <span className="text-zion-cyan font-medium">125</span>"
                  </div>"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-zion-slate-light">ZION$ Balance</span>""
                    <span className="text-zion-cyan font-medium">"
</span>"
                      <a href="/wallet" className="hover:underline">"
</a>
                      </a>
                    </span>
                  </div>
"
                  <div className="flex justify-between items-center">"
</div>"
                    <span className="text-zion-slate-light">Badges Earned</span>""
                    <span className="text-zion-cyan font-medium">3/12</span>"
                  </div>"
                  <div className="flex flex-col gap-2 mt-4">"
</div>
                    <Button;"
                      className="w-full flex items-center justify-center gap-2"""
                      variant="outline""
                      onClick={handleTestNotification}
                    >
</Button>"
                      <Send size={16} className="text-zion-cyan" />"
</Send>
                    </Button>

                    <Button;"
                      className="w-full flex items-center justify-center gap-2"""
                      variant="outline""
                      onClick={async () => {
</Button>"
                      <Settings size={16} className="text-zion-purple" />"
</Settings>
                    </Button>

                    <Button;"
                      className="w-full flex items-center justify-center gap-2"""
                      variant="outline""
                      onClick={async () => {
</Button>"
                      <Bell size={16} className="text-yellow-500" />"
</Bell>
                    </Button>
                  </div>
                </div>
              </div>"
              <div className="bg-zion-blue-dark rounded-xl p-6">"
</div>"
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">"
</h3>"
                  <Bell size={18} className="mr-2 text-zion-cyan" />"
</Bell>
                </h3>"
                <div className="space-y-4">"
</div>"
                  <Link to="/notifications" className="block">"
</Link>"
                    <Button variant="outline" className="w-full">"
</Button>"
                      <Bell className="mr-2 h-4 w-4" />"
</Bell>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>"
            <div className="lg:col-span-2">"
</div>"
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">"
</div>"
                <div className="flex items-center justify-between mb-6">"
</div>"
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>""
                  <div className="flex items-center gap-2">"
</div>
                    <NotificationCenter />
</NotificationCenter>
                    <Button;"
                      variant="outline"""
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white""
                      onClick={logout}
                    >
</Button>"
                      <LogOut size={16} className="mr-2" />"
</LogOut>
                    </Button>
                  </div>
                </div>
"
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">"
</div>"
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">"
</div>"
                    <h3 className="text-lg font-medium text-white">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light mt-1">"
</p>
                    </p>
                  </div>"
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">"
</div>"
                    <h3 className="text-lg font-medium text-white">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light mt-1">"
</p>
                    </p>
                  </div>
                </div>"
                <div className="mb-8">"
</div>"
                  <h3 className="text-lg font-bold text-white mb-4">"
</h3>
                  </h3>"
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">"
</div>"
                    <div className="flex flex-col items-center">"
</div>"
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">"
</div>"
                        <UserCheck size={24} className="text-white" />"
</UserCheck>
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">"
</span>
                      </span>
                    </div>"
                    <div className="flex flex-col items-center">"
</div>"
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">"
</div>"
                        <MessageSquare size={24} className="text-white" />"
</MessageSquare>
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">"
</span>
                      </span>
                    </div>"
                    <div className="flex flex-col items-center opacity-40">"
</div>"
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">"
</div>"
                        <Bell size={24} className="text-zion-slate-light" />"
</Bell>
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">"
</span>
                      </span>
                    </div>"
                    <div className="flex flex-col items-center opacity-40">"
</div>"
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">"
</div>"
                        <span className="text-zion-slate-light text-xl">?</span>"
                      </div>"
                      <span className="text-xs text-center text-zion-slate-light">"
</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
</div>"
                  <h3 className="text-lg font-bold text-white mb-4">"
</h3>
                  </h3>
                  <CommunityDiscussion />
</CommunityDiscussion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
</Footer>
    </>
  );
}
  const handleTestNotification = async () => {
    const result = await createTestNotification (user.id);
    // Check condition;
if ( {) {
  $2;
}
      toast ({"
        title: "Test notification created",")"
        description: "Check your notification center"});"
    } else {
  // TODO: Implement
}
      toast ({"
        title: "Error creating test notification",""
        description: "Something went wrong",")"
        variant: "destructive"});"
    }
  }
;
  return (
    <>;
      <Header />;
</Header>"
      <div className="min - h-screen bg - zion - blue">;"
</div>"
        <div className="container mx - auto px - 4 py - 8">;"
</div>"
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8">;"
</div>"
            <div className="lg:col - span - 1">;"
</div>"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
</div>"
                <div className="flex flex - col items - center text - center">;"
</div>"
                  <div className="w - 24 h - 24 rounded - full bg - zion - purple flex items - center justify - center text - 2xl font - bold text - white mb - 4">;"
</div>
                  </div>;"
                  <h2 className="text - xl font - bold text - white">{user.display_name}</h2>;""
                  <p className="text - zion - slate - light mb - 2">{user.email}</p>;"
                  <Badge;"
                    className="bg - zion - purple text - white mb - 4";"
                  >;
</Badge>
                  </Badge>;
                  <Button;"
                    className="w - full flex items - center gap - 2 bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";")"
                    on_click={() => window.location.href = "/profile"}"
</Button>
                    <UserCheck size={16} />;
</UserCheck>
                  </Button>;
                </div>;
              </div>;"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
</div>"
                <h3 className="text - lg font - bold text - white mb - 4">Your Activity</h3>;""
                <div className="space - y-4">;"
</div>"
                  <div className="flex justify - between items - center">;"
</div>"
                    <span className="text - zion - slate - light">Profile Completion</span>;""
                    <span className="text - zion - cyan font - medium">65%</span>;"
                  </div>;"
                  <div className="w - full bg - zion - blue rounded - full h - 2">;"
</div>"
                    <div className="bg - gradient - to - r from - zion - cyan to - zion - purple h - 2 rounded - full" style={{ width: "65%" }}></div>;"
                  </div>;"
                  <div className="flex justify - between items - center">;"
</div>"
                    <span className="text - zion - slate - light">Community Points</span>;""
                    <span className="text - zion - cyan font - medium">125</span>;"
                  </div>;"
                  <div className="flex justify - between items - center">;"
</div>"
                    <span className="text - zion - slate - light">ZION$ Balance</span>;""
                    <span className="text - zion - cyan font - medium">;"
</span>"
                      <a href="/wallet" className="hover:underline">View Wallet</a>;"
                    </span>;
                  </div>;"
                  <div className="flex justify - between items - center">;"
</div>"
                    <span className="text - zion - slate - light">Badges Earned</span>;""
                    <span className="text - zion - cyan font - medium">3 / 12</span>;"
                  </div>;"
                  <div className="flex flex - col gap - 2 mt - 4">;"
</div>
                    <Button;"
                      className="w - full flex items - center justify - center gap - 2";""
                      variant="outline";"
                      on_click={handleTestNotification}
                    >;
</Button>"
                      <Send size={16} className="text - zion - cyan" />;"
</Send>
                    </Button>;
                    <Button;"
                      className="w - full flex items - center justify - center gap - 2";""
                      variant="outline";"
                      on_click={async () => {
</Button>"
                      <Settings size={16} className="text - zion - purple" />;"
</Settings>
                    </Button>;
                    <Button;"
                      className="w - full flex items - center justify - center gap - 2";""
                      variant="outline";"
                      on_click={async () => {
</Button>"
                      <Bell size={16} className="text - yellow - 500" />;"
</Bell>
                    </Button>;
                  </div>;
                </div>;
              </div>;"
              <div className="bg - zion - blue - dark rounded - xl p - 6">;"
</div>"
                <h3 className="text - lg font - bold text - white mb - 4 flex items - center">;"
</h3>"
                  <Bell size={18} className="mr - 2 text - zion - cyan" />;"
</Bell>
                </h3>;"
                <div className="space - y-4">;"
</div>"
                  <Link to="/notifications" className="block">;"
</Link>"
                    <Button variant="outline" className="w - full">;"
</Button>"
                      <Bell className="mr - 2 h - 4 w - 4" />;"
</Bell>
                    </Button>;
                  </Link>;
                </div>;
              </div>;
            </div>;"
            <div className="lg:col - span - 2">;"
</div>"
              <div className="bg - zion - blue - dark rounded - xl p - 6 mb - 6">;"
</div>"
                <div className="flex items - center justify - between mb - 6">;"
</div>"
                  <h2 className="text - 2xl font - bold text - white">Dashboard</h2>;""
                  <div className="flex items - center gap - 2">;"
</div>
                    <NotificationCenter />;
</NotificationCenter>
                    <Button;"
                      variant="outline";""
                      className="text - zion - slate - light border - zion - blue - light hover:bg - zion - blue hover:text - white";"
                      on_click={logout}
                    >;
</Button>"
                      <LogOut size={16} className="mr - 2" />;"
</LogOut>
                    </Button>;
                  </div>;
                </div>;"
                <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 2 gap - 4 mb - 6">;"
</div>"
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - purple / 30 border border - zion - blue - light">;"
</div>"
                    <h3 className="text - lg font - medium text - white">Welcome, {user.display_name.split (' ')[0]}</h3>;''
                    <p className="text - zion - slate - light mt - 1">Your journey on Zion has just begun!</p>;"
                  </div>;"
                  <div className="p - 4 rounded - lg bg - gradient - to - br from - zion - blue to - zion - cyan / 30 border border - zion - blue - light">;"
</div>"
                    <h3 className="text - lg font - medium text - white">Getting Started</h3>;""
                    <p className="text - zion - slate - light mt - 1">Complete your profile to unlock all features.</p>;"
                  </div>;
                </div>;"
                <div className="mb - 8">;"
</div>"
                  <h3 className="text - lg font - bold text - white mb - 4">Your Badges</h3>;""
                  <div className="grid grid - cols - 3 sm:grid - cols - 4 gap - 4">;"
</div>"
                    <div className="flex flex - col items - center">;"
</div>"
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - cyan flex items - center justify - center mb - 2">;"
</div>"
                        <UserCheck size={24} className="text - white" />;"
</UserCheck>
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">Newcomer</span>;"
                    </div>;"
                    <div className="flex flex - col items - center">;"
</div>"
                      <div className="w - 16 h - 16 rounded - full bg - gradient - to - br from - zion - purple to - zion - purple - light flex items - center justify - center mb - 2">;"
</div>"
                        <MessageSquare size={24} className="text - white" />;"
</MessageSquare>
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">First Post</span>;"
                    </div>;"
                    <div className="flex flex - col items - center opacity - 40">;"
</div>"
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;"
</div>"
                        <Bell size={24} className="text - zion - slate - light" />;"
</Bell>
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;"
                    </div>;"
                    <div className="flex flex - col items - center opacity - 40">;"
</div>"
                      <div className="w - 16 h - 16 rounded - full bg - zion - blue - light flex items - center justify - center mb - 2">;"
</div>"
                        <span className="text - zion - slate - light text - xl">?</span>;"
                      </div>;"
                      <span className="text - xs text - center text - zion - slate - light">Locked</span>;"
                    </div>;
                  </div>;
                </div>;
                <div>;
</div>"
                  <h3 className="text - lg font - bold text - white mb - 4">Community</h3>;"
                <div>;
</div>"
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;"
                <div>;
</div>"
                  <h3 className="text-lg font-bold text-white mb-4">Community</h3>;"
                  <CommunityDiscussion />;
</CommunityDiscussion>
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;
</Footer>

    </>);
}

    </>;
  ),; export default function Dashboard () {
  const {
  // TODO: Implement
}
  user, logout;
}= useAuth ();
const {
  // TODO: Implement
}
  toast;
}= useToast ();
}
;

};"
return (<> <Header /> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {"
</Header>"
}/> Edit Profile </Button> </div> </div> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Community Points</span> <span className="text-zion-cyan font-medium" >125</span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >ZION$ Balance</span> <span className="text-zion-cyan font-medium" > <a href="/wallet" className="hover:underline" >View Wallet</Link> </span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Badges Earned</span> <span className="text-zion-cyan font-medium" >3/12</span> </div> Send Test Notification </Button> <Button;"
}
}> <Settings size= {
  16;"
}className="text-zion-purple" />"
</Settings>
}> <Bell size= {
  16;"
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> Logout </Button> </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {"
</Bell>)"
}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>)"
}
    </>;
  );
}
;
"