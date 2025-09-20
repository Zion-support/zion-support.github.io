import { useState; useEffect; useCallback, useRef  } from "react, ";
import { useAnalytics } from "./useAnalytics, ";

interface WalletInfo {
  
address: string;
balance: string;
