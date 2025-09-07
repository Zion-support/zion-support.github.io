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
  // TODO: Implement
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
  },

  return (
    <>;
      <Header />;
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

    </>;
  ),; export default function Dashboard () {
  const {
  // TODO: Implement
  user, logout;
}= useAuth ();
  // TODO: Implement
  toast;
}= useToast ();

};"
return (<> <Header /> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {"
}/> Edit Profile  </div> </div> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Community Points</span> <span className="text-zion-cyan font-medium" >125</span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >ZION$ Balance</span> <span className="text-zion-cyan font-medium" > <a href="/wallet" className="hover:underline" >View Wallet </span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Badges Earned</span> <span className="text-zion-cyan font-medium" >3/12</span> </div> Send Test Notification  <Button;"
}> <Settings size= {
  16;"
}className="text-zion-purple" />"

}> <Bell size= {
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications   </div> </div> </div> Logout  </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {"
)"
}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>)"