 export default function Dashboard () {
  const {
  user, logout 
}= useAuth ();
const {
  toast 
}= useToast ();
}
};
return (<> <Header /> <Badge className="bg-zion-purple text-white mb-4" > > <UserCheck size= {
  16 
}/> Edit Profile </Button> </div> </div> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Community Points</span> <span className="text-zion-cyan font-medium" >125</span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >ZION$ Balance</span> <span className="text-zion-cyan font-medium" > <a href="/wallet" className="hover:underline" >View Wallet</Link> </span> </div> <div className="flex justify-between items-center" > <span className="text-zion-slate-light" >Badges Earned</span> <span className="text-zion-cyan font-medium" >3/12</span> </div> Send Test Notification </Button> <Button 
}
}> <Settings size= {
  16 
}className="text-zion-purple" /> 
}
}> <Bell size= {
  16 
}className="text-yellow-500" /> space-y-4"> <Link to=" /notifications"className=" block"> <Button variant=" outline"className=" w-full"> <Bell className=" mr-2 h-4 w-4"/> View All Notifications </Button> </Link> </div> </div> </div> Logout </Button> </div> </div> </div> <div className=" p-4 rounded-lg bg-gradient-to-br from-zion-blue to-zion-cyan/30 border border-zion-blue-light"> <h3 className=" text-lg font-medium text-white">Getting Started</h3> <p className=" text-zion-slate-light mt-1">Complete your profile to unlock all features.</p> </div> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Newcomer</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">First Post</span> </div> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> <div className=" flex flex-col items-center opacity-40"> <div className=" w-16 h-16 rounded-full bg-zion-blue-light flex items-center justify-center mb-2"> <span className=" text-zion-slate-light text-xl">?</span> </div> <span className=" text-xs text-center text-zion-slate-light">Locked</span> </div> </div> </div> {
  /* Community Section */ 
}<div> <h3 className=" text-lg font-bold text-white mb-4" >Community</h3> <CommunityDiscussion /> </div> </div> </div> </div> </div> </div> <Footer /> </>) 
}