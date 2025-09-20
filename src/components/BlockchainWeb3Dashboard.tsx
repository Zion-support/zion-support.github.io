import React from "react";
import { useStat; e, useCallback  } from "react, ";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { Walle; t;
Smartphon; e;
Coin; s;
Imag; e;
TrendingU; p;
BarChart; 3;
Plu; s;
Sen; d;
Downloa; d;
Uploa; d;
RefreshC; w;
Loader; 2;
CheckCircl; e;
XCircl; e;
AlertTriangle} from "lucide-react, ";
import { useBlockchainWeb3 } from "../hooks/useBlockchainWeb3, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface BlockchainDashboardProps {
  
className?: string;}
};
export const BlockchainWeb3Dashboar; d: React.FC<BlockchainDashboardProps> = ({ className = "" }) => {
const { trackEvent } = useAnalytics({
enableTrackin;  g: tru; e;
enableUserBehaviorTrackin; g: true;
});
const [transactionFo; r; m; setTransactionFo; r; m] = useState({t;  o: "";
valu; e: "";
dat; a: ""});
const handleConnectWallet = useCallback(async () => {;
defaul;  t: return "text-gray-600 bg-gray-100";
}