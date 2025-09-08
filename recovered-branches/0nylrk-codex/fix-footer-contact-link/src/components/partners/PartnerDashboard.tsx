
<<<<<<< HEAD

export function PartnerDashboard() {
  // Placeholder data - would come from API in real implementation
  const stats = {
    totalReferrals: 42,
    pendingReferrals: 8,
    completedReferrals: 34,
    conversionRate: 18.5,
    totalRevenue: 850.0,
    pendingRevenue: 200.0,
  };


        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-zion-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.conversionRate}%</div>
            <p className="text-xs text-zion-slate-light">
              Of clicks that convert to sign-ups
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zion-blue-dark border-zion-blue-light">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue}</div>
            <p className="text-xs text-zion-slate-light">
              ${stats.pendingRevenue} pending payout
            </p>
          </CardContent>
        </Card>
      </div>

=======
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Performance Chart */}


=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { BarChart, DollarSign, LineChart, TrendingUp, Users } from "lucide-react",

import {

  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
import { Button } from "@/components/ui/button";"
  }
  BarChart,
  DollarSign,
  LineChart,
  TrendingUp,


    <div className="space-y-6">;
      {/* Stats Overview */}"
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
        <Card className="bg-zion-blue-dark border-zion-blue-light">"
          <CardHeader className="flex flex-row items-center justify-between pb-2">"
            <CardTitle className="text-sm font-medium">
              Total Referrals;
            </CardTitle>"
            <Users className="h-4 w-4 text-zion-cyan" />
          </CardHeader>
          <CardContent>"
            <div className="text-2xl font-bold">{stats.totalReferrals}</div>"
            <p className="text-xs text-zion-slate-light">"
              {stats.completedReferrals} completed, {stats.pendingReferrals}{" "}
              pending;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>

<<<<<<< HEAD
=======
            Track your referral performance over time;
          </CardDescription>
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </CardHeader>"
        <CardContent className="flex justify-center items-center p-6">"
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">"
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />"
            <p className="text-zion-slate-light">
              Detailed analytics will be available soon;
<<<<<<< HEAD

=======
        </CardHeader>
        <CardContent className="flex justify-center items-center p-6">
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full">
            <LineChart className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light">
              Detailed analytics will be available soon
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Referrals */}
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Your latest partner referrals</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center p-12 border border-dashed border-zion-blue-light rounded-lg">
            <Users className="h-16 w-16 mx-auto text-zion-slate-light mb-4" />
            <p className="text-zion-slate-light mb-4">No referrals yet</p>
            <p className="text-xs text-zion-slate-light">
              Start sharing your referral links to earn rewards
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
    </div>);
}

    </div>);
}
    </div>;
  ),;}
 export function PartnerDashboard () {}
  //Placeholder data - would come from API in real implementation const stats = {};
  totalReferrals: 42;
pendingReferrals: 8;
completedReferrals: 34;
conversionRate: 18.5;
totalRevenue: 850.00;
pendingRevenue: 200.00;
};"
return (<div className="space-y-6" > {}
  /* Stats Overview */ "
}<div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="flex flex-row items-center justify-between pb-2" > <CardTitle className="text-sm font-medium" >Total Referrals</CardTitle> <Users className="h-4 w-4 text-zion-cyan" /> </CardHeader> <CardContent> <div className="text-2xl font-bold" > {}
  stats.totalReferrals "
}</div> <p className="text-xs text-zion-slate-light" > {}
  stats.completedReferrals;
}completed, {}
  stats.pendingReferrals "
}pending bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Conversion Rate</CardTitle> <TrendingUp className=" h-4 w-4 text-zion-purple"/> </CardHeader> <CardContent> Of clicks that convert to sign-ups </p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Total Earnings</CardTitle> <DollarSign className=" h-4 w-4 text-green-500"/> </CardHeader> <CardContent> </p> </CardContent> </Card> </div> <CardHeader> <CardTitle>Performance Overview</CardTitle> <CardDescription>Track your referral performance over time</CardDescription> </CardHeader> <CardContent className=" flex justify-center items-center p-6"> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full"> <LineChart className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light">Detailed analytics will be available soon</p> </div> </CardContent> </Card> <div> <CardTitle>Recent Referrals</CardTitle> <CardDescription>Your latest partner referrals</CardDescription> </div> <Button variant=" outline"size=" sm">View All</Button> </CardHeader> <CardContent> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg"> <Users className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light mb-4">No referrals yet</p> <p className=" text-xs text-zion-slate-light" > Start sharing your referral links to earn rewards </p> </div> </CardContent> </Card> </div>) 
});
}

}
;

}
;

  );
}
</div>);
}
    </div>;
  );

  );
}
    </div>);
}

    </div>);
}
    </div>;
  ),;}
 export function PartnerDashboard () {
  //Placeholder data - would come from API in real implementation const stats = {
  totalReferrals: 42;
pendingReferrals: 8;
completedReferrals: 34;
conversionRate: 18.5;
totalRevenue: 850.00;
pendingRevenue: 200.00 
};
return (<div className="space-y-6" > {
  /* Stats Overview */ 
}<div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="flex flex-row items-center justify-between pb-2" > <CardTitle className="text-sm font-medium" >Total Referrals</CardTitle> <Users className="h-4 w-4 text-zion-cyan" /> </CardHeader> <CardContent> <div className="text-2xl font-bold" > {
  stats.totalReferrals 
}</div> <p className="text-xs text-zion-slate-light" > {
  stats.completedReferrals 
}completed, {
  stats.pendingReferrals 
}pending bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Conversion Rate</CardTitle> <TrendingUp className=" h-4 w-4 text-zion-purple"/> </CardHeader> <CardContent> Of clicks that convert to sign-ups </p> </CardContent> </Card> <Card className=" bg-zion-blue-dark border-zion-blue-light"> <CardHeader className=" flex flex-row items-center justify-between pb-2"> <CardTitle className=" text-sm font-medium">Total Earnings</CardTitle> <DollarSign className=" h-4 w-4 text-green-500"/> </CardHeader> <CardContent> </p> </CardContent> </Card> </div> <CardHeader> <CardTitle>Performance Overview</CardTitle> <CardDescription>Track your referral performance over time</CardDescription> </CardHeader> <CardContent className=" flex justify-center items-center p-6"> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg w-full"> <LineChart className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light">Detailed analytics will be available soon</p> </div> </CardContent> </Card> <div> <CardTitle>Recent Referrals</CardTitle> <CardDescription>Your latest partner referrals</CardDescription> </div> <Button variant=" outline"size=" sm">View All</Button> </CardHeader> <CardContent> <div className=" text-center p-12 border border-dashed border-zion-blue-light rounded-lg"> <Users className=" h-16 w-16 mx-auto text-zion-slate-light mb-4"/> <p className=" text-zion-slate-light mb-4">No referrals yet</p> <p className=" text-xs text-zion-slate-light" > Start sharing your referral links to earn rewards </p> </div> </CardContent> </Card> </div>) 

});
}
}
;

}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
