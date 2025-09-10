import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReferralStats, as, ReferralStatsType } from "@/types/referrals";
import { Award, Share, Star, TrendingUp } from "lucide-react";
interface ReferralStatsProps {
  stats: ReferralStatsType;
  is_loading: boolean;
}
export /**;
 * ReferralStats - Function description;
 */
function ReferralStats() {}
  const stat_cards = [;
    {"
      title: "Total Referrals",
      value: stats.total_referrals,"
      icon: <Share className="h - 5 w - 5 text - muted - foreground" />,'"
      description: "People you've invited",
    },
    {"
      title: "Completed",
      value: stats.completed_referrals,"
      icon: <Star className="h - 5 w - 5 text - muted - foreground" />,"
      description: "Signed up & completed onboarding",
    },
    {"
      title: "Pending",
      value: stats.pending_referrals,"
      icon: <TrendingUp className="h - 5 w - 5 text - muted - foreground" />,"
      description: "Not yet completed onboarding",
    },
    {"
      title: "Total Rewards","`
      value: stats.total_rewards > 0 ? `$${stats.total_rewards.to_fixed (2)}` : "-","
      icon: <Award className="h - 5 w - 5 text - muted - foreground" />,"
      description: "Credits earned from referrals",
    },

  ];

;

                  {card.description}
"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";"
import {ReferralStats, as, ReferralStatsType} from "@/types/referrals";"
import {Award, Share, Star, TrendingUp} from "lucide-react";
interface ReferralStatsProps {}
  stats: ReferralStatsType;
  isLoading: boolean;
}
export function ReferralStats({ stats, isLoading }: ReferralStatsProps) {

  const statCards = [
    {
      icon: <Share className="h-5 w-5 text-muted-foreground" />
      description: "People you've invited"
    }
    {
      title: "Completed"
      value: stats.completedReferrals
      icon: <Star className="h-5 w-5 text-muted-foreground" />
      description: "Signed up & completed onboarding"
    }
    {
      title: "Pending"
      value: stats.pendingReferrals
      icon: <TrendingUp className="h-5 w-5 text-muted-foreground" />
      description: "Not yet completed onboarding"
    }
    {
      title: "Total Rewards"
      value: stats.totalRewards > 0 ? `$${stats.totalRewards.toFixed(2)}` : "-"
      icon: <Award className="h-5 w-5 text-muted-foreground" />
      description: "Credits earned from referrals"
    }

                </p>;
              </>)}
          </CardContent>;
        </Card>))}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    </div>
  );
}
;

  ),;}
 interface ReferralStatsProps {
  stats: ReferralStatsType;
isLoading: boolean 
}stats, isLoading 
}: ReferralStatsProps) {
  const statCards = [ {
  icon: <Award className="h-5 w-5 text-muted-foreground" />;
description: "Credits earned from referrals" 
}];
}</CardContent> </Card>) ) 
}</div>) 
}
              </>;
            )}
          </CardContent>
        </Card>
      ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>
  );
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
