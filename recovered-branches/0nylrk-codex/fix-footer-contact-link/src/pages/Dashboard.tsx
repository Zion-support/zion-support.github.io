
export default function Dashboard() {_const { user, _logout} = useAuth();
  const {_toast} = useToast();

  if (!user) return null;

  const _handleTestNotification = async () => {_const _result = await createTestNotification(user.id);
    if (result.success) {
      toast({
        title: "Test notification created", _description: "Check your notification center"});
    } else {_toast({
        title: "Error creating test notification", _description: "Something went wrong", _variant: "destructive"});
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {_/* Left Sidebar - User Profile */}
            <div className="lg:col-span-1">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">
                    {_user.displayName.split(' ').map(name => name[0]).join('')}
                  </div>
                  <h2 className="text-xl font-bold text-white">{_user.displayName}</h2>
                  <p className="text-zion-slate-light mb-2">{_user.email}</p>
                  
                  <Badge 
                    className="bg-zion-purple text-white mb-4"
                  >
                    {_user.userType ? user.userType.charAt(0).toUpperCase() + user.userType.slice(1) : "New User"}
                  </Badge>
                  
                  <Button 
                    className="w-full flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={_() => window.location.href = "/profile"}
                  >
                    <UserCheck size={_16} />
                    Edit Profile
                  </Button>
                </div>
              </div>
              
              {_/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Profile Completion</span>
                    <span className="text-zion-cyan font-medium">65%</span>
                  </div>
                  <div className="w-full bg-zion-blue rounded-full h-2">
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" style={_{ width: "65%"}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Community Points</span>
                    <span className="text-zion-cyan font-medium">125</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">ZION$ Balance</span>
                    <span className="text-zion-cyan font-medium">
                      <a href="/wallet" className="hover:underline">View Wallet</a>
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Badges Earned</span>
                    <span className="text-zion-cyan font-medium">3/12</span>
                  </div>
                  
                  {_/* Test notification buttons */}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button 
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={_handleTestNotification}
                    >
                      <Send size={_16} className="text-zion-cyan" />
                      Send Test Notification
                    </Button>

                    <Button 
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={_async () => {
                        await createOnboardingNotification({
                          userId: user.id, _missingMilestone: 'profile_completed', _userRole: user.userType === 'employer' || user.userType === 'buyer' ? 'client' : 'talent'});
                        toast({_title: "Onboarding notification sent", _description: "Check your notification center"});
                      }}
                    >
                      <Settings size={_16} className="text-zion-purple" />
                      Send Onboarding Nudge
                    </Button>

                    <Button 
                      className="w-full flex items-center justify-center gap-2"
                      variant="outline"
                      onClick={_async () => {
                        await createSystemNotification({
                          userId: user.id, _title: "New Feature Available!", _message: "We've added a new notification center to help you stay updated with important information.", _actionUrl: "/notifications", _actionText: "Explore Now"});
                        toast({_title: "System notification sent", _description: "Check your notification center"});
                      }}
                    >
                      <Bell size={_16} className="text-yellow-500" />
                      Send System Alert
                    </Button>
                  </div>
                </div>
              </div>
              
              {_/* Notifications */}
              <div className="bg-zion-blue-dark rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Bell size={_18} className="mr-2 text-zion-cyan" />
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
            
            {_/* Main Content - Dashboard */}
            <div className="lg:col-span-2">
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <NotificationCenter />
                    <Button 
                      variant="outline" 
                      className="text-zion-slate-light border-zion-blue-light hover:bg-zion-blue hover:text-white"
                      onClick={_logout}
                    >
                      <LogOut size={_16} className="mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-purple/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Welcome, {_user.displayName.split(' ')[0]}</h3>
                    <p className="text-zion-slate-light mt-1">Your journey on Zion has just begun!</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light">
                    <h3 className="text-lg font-medium text-white">Getting Started</h3>
                    <p className="text-zion-slate-light mt-1">Complete your profile to unlock all features.</p>
                  </div>
                </div>
                
                {_/* Badges Preview */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Your Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center mb-2">
                        <UserCheck size={_24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">Newcomer</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-purple to-zion-purple-light flex items-center justify-center mb-2">
                        <MessageSquare size={_24} className="text-white" />
                      </div>
                      <span className="text-xs text-center text-zion-slate-light">First Post</span>
                    </div>
                    <div className="flex flex-col items-center opacity-40">
                      <div className="w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2">
                        <Bell size={_24} className="text-zion-slate-light" />
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
                
                {_/* Community Section */}
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
  );
}
