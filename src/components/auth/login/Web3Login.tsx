<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/login/Web3Login.tsx

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const { loginWithWeb3 } = useAuth()
  const { isWalletSystemAvailable } = useAppWallet()
  const [isLoading, setIsLoading] = useState(false)
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally

import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
export function Web3Login() {

  const { loginWithWeb3 } = useAuth(),
  const { isWalletSystemAvailable } = useAppWallet(),
  const [isLoading, setIsLoading] = useState(false),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."})
      return
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;
<<<<<<< HEAD
<<<<<<< HEAD

    }
    try {

=======
>>>>>>>     }
    try {
      setIsLoading(true)
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    try {
<<<<<<< HEAD
      setIsLoading(true)
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum
=======
      setIsLoading(true),
      
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."})
        return
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return;
<<<<<<< HEAD
<<<<<<< HEAD

      }

    } catch (error: any) {
=======
>>>>>>>       }
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      }

      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     } catch (error: any) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
<<<<<<< HEAD
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
=======
      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    } catch (error: any) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast("Login failed", {
        description: error.message |"Failed to connect wallet. Please try again."})
      logErrorToProduction('Web3 login error:', { data: error })
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
  }
  const buttonDisabled = isLoading |!isWalletSystemAvailable
  const buttonTitle = !isWalletSystemAvailable
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured."
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    : ""
}

  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },


========
<<<<<<< HEAD
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext ;
import { Wallet } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {;
import { useState  } from './react';
import { Button  } from '@/components / ui / button';
import { use_auth  } from '@/hooks / use_auth';
import { use_wallet as useAppWallet  } from '../../../context / WalletContext.tsx';, // Renamed to avoid conflict if use_wallet hook is defined locally;
import { Wallet } from 'lucide-react'import { toast  } from './sonner';
import {logErrorToProduction} from '@/utils / production_logger';
export /**
 * Web3Login - Function description
 */
function Web3Login() {
  const { loginWithWeb3 } = use_auth ();
  const { isWalletSystemAvailable } = useAppWallet ();
  const [is_loading, setIsLoading] = useState (false);
  const handleWeb3Login = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;
    }
    try {
      setIsLoading (true);
      // Check if Ethereum provider (e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;
      // Check condition
if ( {) {
  $2
}
        toast ("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return;
      }
      await loginWithWeb3 (), // This is from use_auth, assumed to be a separate flow;
    } catch (error: any) {
      toast ("Login failed", {
        description: error.message || "Failed to connect wallet. Please try again."}),
      logErrorToProduction ('Web3 login error:', { data: error });
    } finally {
      setIsLoading (false);
=======

=======
=======
    : "";
};
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  },

  const buttonDisabled = isLoading || !isWalletSystemAvailable,
  const buttonTitle = !isWalletSystemAvailable
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured."
    : "",

  let buttonContent,
  if (!isWalletSystemAvailable) {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable
      </>
    )
  } else if (isLoading) {
    buttonContent = (
      <span className="flex items-center">
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Connecting...
      </span>
    )
  } else {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3
        <span className="sr-only">Sign in with Web3</span>
      </>
    )
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally;
import { Wallet } from 'lucide-react';
import { toast } from "sonner",;
import {logErrorToProduction} from '@/utils/productionLogger',;
<<<<<<< HEAD
;
export function Web3Login() {;
;
  const { loginWithWeb3 } = useAuth(),;
  const { isWalletSystemAvailable } = useAppWallet(),;
  const [isLoading, setIsLoading] = useState(false),;
;
  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {;
        description:"The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return,;
=======
export function Web3Login() {;
  const { loginWithWeb3 } = useAuth(),;
  const { isWalletSystemAvailable } = useAppWallet(),;
  const [isLoading, setIsLoading] = useState(false),;
  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {;
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
;
    try {;
      setIsLoading(true),;
<<<<<<< HEAD
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Check if Ethereum provider (e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
<<<<<<< HEAD
          description:"Please install MetaMask or another compatible wallet."}),;
        return,;
      }
      ;
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;
      ;
    } catch (error:any) {;
      toast("Login failed", {;
        description:error.message || "Failed to connect wallet. Please try again."}),;
      logErrorToProduction('Web3 login error:', { data:error }),;
    } finally {;
      setIsLoading(false),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
  },;
;
  const buttonDisabled = isLoading || !isWalletSystemAvailable,;
  const buttonTitle = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    :"",;
;
  let buttonContent,;
=======
          description: "Please install MetaMask or another compatible wallet."}),;
        return;
      }
;
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;
    } catch (error: any) {;
      toast("Login failed", {;
        description: error.message || "Failed to connect wallet. Please try again."}),;
      logErrorToProduction('Web3 login error:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  },;
  const buttonDisabled = isLoading || !isWalletSystemAvailable,;
  const buttonTitle = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
  let buttonContent;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!isWalletSystemAvailable) {;
    buttonContent = (;
      <>;
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable;
      </>;
<<<<<<< HEAD
    ),;
  } else if (isLoading) {;
    buttonContent = (;
      <span className="flex items-center">;
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
=======
    );
  } else if (isLoading) {;
    buttonContent = (;
      <span className="flex items-center">;
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;
        </svg>;
        Connecting...;
      </span>;
    );
  } else {;
    buttonContent = (;
      <>;
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3;
        <span className="sr-only">Sign in with Web3</span>;
      </>;
<<<<<<< HEAD
    ),;
  }
<<<<<<< HEAD
  const { loginWithWeb3 } = useAuth();
  const { isWalletSystemAvailable } = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/login/Web3Login.tsx
  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {;
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return;
    }
    try {;
      setIsLoading(true);
      // Check if Ethereum provider (e && e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet."}),;
        return;
      }
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;
    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet. Please try again."}),;
      logErrorToProduction('Web3 login error:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  };
  const buttonDisabled = isLoading || !isWalletSystemAvailable;
  const buttonTitle = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
  )
}
<<<<<<<< HEAD:src/components/auth/login/Web3Login.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/login/Web3Login.tsx
  const button_disabled = is_loading || !isWalletSystemAvailable;
  const button_title = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
}
  );
}
<<<<<<<< HEAD:src/components/auth/login/Web3Login.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
=======
    );
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  return (;
    <Button;
      type="button";
      variant="outline";
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
      onClick={handleWeb3Login}
      disabled={buttonDisabled}
      title={buttonTitle || undefined} // Ensure title is not an empty string if not needed;
    >;
      {buttonContent}
    </Button>;
<<<<<<< HEAD
  ),; export function Web3Login () {;
  const {;
  loginWithWeb3 ;
}= useAuth ();
const {;
  isWalletSystemAvailable ;
}= useAppWallet ();
const [isLoading, setIsLoading] = useState (false);
const handleWeb3Login = async () => {;
  if (!isWalletSystemAvailable) {;
  return;
}return;
}await loginWithWeb3 (), //This is from useAuth, assumed to be a separate flow ;
}finally {;
  setIsLoading (false) ;
}
};
const buttonDisabled = isLoading || !isWalletSystemAvailable;
const buttonTitle = !isWalletSystemAvailable ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured." : "";";
>Sign in with Web3</span> </> return (<Button type=" button"variant=" outline"className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick={;
  handleWeb3Login ;
}disabled= {;
  buttonDisabled ;
}title= {;
  buttonTitle || undefined ;
}//Ensure title is not an empty string if not needed > {;
  buttonContent ;
}</Button>) ;
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/login/Web3Login.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
