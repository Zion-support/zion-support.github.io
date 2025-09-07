
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-8">;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {/* Left Sidebar - User Profile */}
            <div className="lg:col-span-1">;
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <div className="flex flex-col items-center text-center">;
                  <div className="w-24 h-24 rounded-full bg-zion-purple flex items-center justify-center text-2xl font-bold text-white mb-4">;

                  >;
                    <UserCheck size={16} />;
                    Edit Profile;
                  </Button>;
                </div>;
              </div>;

              {/* Stats & Metrics */}
              <div className="bg-zion-blue-dark rounded-xl p-6 mb-6">;
                <h3 className="text-lg font-bold text-white mb-4">Your Activity</h3>;
                <div className="space-y-4">;
                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">Profile Completion</span>;
                    <span className="text-zion-cyan font-medium">65%</span>;
                  </div>;
                  <div className="w-full bg-zion-blue rounded-full h-2">;

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

                  <div className="flex justify-between items-center">;
                    <span className="text-zion-slate-light">Badges Earned</span>;
                    <span className="text-zion-cyan font-medium">3/12</span>;
                  </div>;

                      }}
                    >;
                      <Settings size={16} className="text-zion-purple" />;
                      Send Onboarding Nudge;
                    </Button>;

                      }}
                    >;
                      <Bell size={16} className="text-yellow-500" />;
                      Send System Alert;
                    </Button>;
                  </div>;
                </div>;
              </div>;

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

                  <CommunityDiscussion />;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      <Footer />;

}