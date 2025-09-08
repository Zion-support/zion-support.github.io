

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Referral, ReferralStatus } from "@/types/referrals",
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/referralUtils";
import { Badge } from "@/components/ui/badge",
import { formatDate } from "@/utils/referralUtils",      case "expired":
        return <Badge variant="outline" className="bg-gray-50 text-gray-800 border-gray-200">Expired</Badge>
      default:
        return nullimport { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Referral, ReferralStatus } from "@/types/referrals",;
import { Badge } from "@/components/ui/badge",;
import { formatDate } from "@/utils/referralUtils",;
interface ReferralTableProps {;
  referrals: Referral[],;
  isLoading: boolean;
}
;
export function ReferralTable() { return null; }
    }
  };
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center p-8">;

        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />;
      </div>;
    );
  }