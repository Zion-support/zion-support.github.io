<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx

<<<<<<< HEAD

import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/hooks/useAuth";
import {Wallet} from "@/components/icons";
import {toast} from "sonner";
export function Web3Login() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
  const { loginWithWeb3 } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const handleWeb3Login = async () => {;
    try {;
      setIsLoading(true);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export function Web3Login() {
  const { loginWithWeb3 } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const handleWeb3Login = async () => {
    try {

<<<<<<< HEAD
=======
      setIsLoading(true),
      

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
=======
  const { loginWithWeb3 } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
import { Wallet } from "@/components/icons";
import { toast } from "sonner";
=======
import { Wallet } from "@/components/icons",
import { toast } from "sonner",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function Web3Login() {
  const { loginWithWeb3 } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const handleWeb3Login = async () => {
    try {
<<<<<<< HEAD
      setIsLoading(true);
=======
      setIsLoading(true),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Check if wallet is available
      const ethereum = (window as any).ethereum,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet"})
        return
      }
      await loginWithWeb3()
    } catch (error: any) {
      toast("Login failed", {
        description: error.message |"Failed to connect wallet"})
      console.error("Web3 login error:", error)
    } finally {
      setIsLoading(false)
<<<<<<< HEAD


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet"}),;
        return;
      }
      await loginWithWeb3();
    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet"}),;
      console && console.error("Web3 login error:", error);
    } finally {;
      setIsLoading(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
    }
<<<<<<< HEAD
=======
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
=======
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
      onClick={handleWeb3Login}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Connecting...
        </span>
      ) : (
        <>
          <span className="sr-only">Sign in with Web3</span>
          <Wallet className="h-5 w-5" />
        </>
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
      )}
    </Button>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { Wallet } from "@/components/icons",;
import { toast } from "sonner",;
export function Web3Login() {;
  const { loginWithWeb3 } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
  const handleWeb3Login = async () => {;
    try {;
      setIsLoading(true),;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet"}),;
        return;
      }
;
      await loginWithWeb3();
    } catch (error: any) {;
      toast("Login failed", {;
        description: error.message || "Failed to connect wallet"});
      console.error("Web3 login error:", error);
    } finally {;
      setIsLoading(false);
    }
  };
  return (;
    <Button;
      type="button";
      variant="outline";
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
      onClick={handleWeb3Login}
      disabled={isLoading}
    >;
<<<<<<< HEAD

      {isLoading ? (;
        <span className="flex items-center">;
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www && www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5 && 8V0C5.373 0 0 5 && 5.373 0 12h4zm2 5 && 5.291A7.962 7 && 7.962 0 014 12H0c0 3 && 3.042 1 && 1.135 5 && 5.824 3 7 && 7.938l3-2 && 2.647z"></path>;
          </svg>;
          Connecting...;
        </span>;
      ) : (;
=======

import { useState } from "react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { Wallet } from "@/components/icons",;
import { toast } from "sonner",;
;
export function Web3Login() {;
  const { loginWithWeb3 } = useAuth(),;
  const [isLoading, setIsLoading] = useState(false),;
;
  const handleWeb3Login = async () => {;
    try {;
      setIsLoading(true),;
      ;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description:"Please install MetaMask or another compatible wallet"}),;
        return,;
      }
      ;
      await loginWithWeb3(),;
      ;
    } catch (error:any) {;
      toast("Login failed", {;
        description:error.message || "Failed to connect wallet"}),;
      console.error("Web3 login error:", error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  return (;
    <Button;
      type="button";
      variant="outline";
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
      onClick={handleWeb3Login}
      disabled={isLoading}
    >;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {isLoading ? (;
        <span className="flex items-center">;
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;
          </svg>;
          Connecting...;
        </span>;
<<<<<<< HEAD
      ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <>;
          <span className="sr-only">Sign in with Web3</span>;
          <Wallet className="h-5 w-5" />;
        </>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}

========
      )}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
    </Button>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
import { useState } from './react';
import { Button } from '@/components / ui / button';
import { use_auth } from '@/hooks / use_auth';
import { Wallet } from '@/components / icons';
import { toast } from './sonner';
export /**
 * Web3Login - Function description
 */
function Web3Login() {
  const { loginWithWeb3 } = use_auth ();
  const [is_loading, setIsLoading] = useState (false);
;
<<<<<<< HEAD

=======
  const handleWeb3Login = async () => {
    try {
      setIsLoading (true);
;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      // Check condition
if ( {) {
  $2
}
        toast ("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet"}),
        return;
      }
      await loginWithWeb3 ();
    } catch (error: any) {
      toast ("Login failed", {
        description: error.message || "Failed to connect wallet"}),
      console.error ("Web3 login error:", error);
    } finally {
      setIsLoading (false);
    }
  }
;
  return (
    <Button;
      type="button";
      variant="outline";
      className="w - full border border - zion - blue - light bg - zion - blue - dark text - white hover:bg - zion - blue hover:text - zion - cyan";
      on_click={handleWeb3Login}
      disabled={is_loading}
    >;
      {is_loading ? (
        <span className="flex items - center">;
          <svg className="animate - spin -ml - 1 mr - 2 h - 4 w - 4 text - white" xmlns="http://www.w3.org / 2000 / svg" fill="none" view_box="0 0 24 24">;
            <circle className="opacity - 25" cx="12" cy="12" r="10" stroke="current_color" stroke_width="4"></circle>;
            <path className="opacity - 75" fill="current_color" d="M4 12a8 8 0 018 - 8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3 - 2.647z"></path>;
          </svg>;
          Connecting...;
        </span>) : (
        <>;
          <span className="sr - only">Sign in with Web3</span>;
          <Wallet className="h - 5 w - 5" />;
        </>)}
    </Button>);
=======
  ),; export function Web3Login () {
  const {
  loginWithWeb3 
}= useAuth ();
const [isLoading, setIsLoading] = useState (false);
const handleWeb3Login = async () => {
  try {
  setIsLoading (true);
//Check if wallet is available const ethereum = (window as any) .ethereum;
if (!ethereum) {
  return;
}await loginWithWeb3 () 
}finally {
  setIsLoading (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick= {
  handleWeb3Login 
}disabled= {
  isLoading 
}> {
  isLoading ? (<span className="flex items-center" > <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" > <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path> sr-only">Sign in with Web3</span> <Wallet className=" h-5 w-5" /> </>) 
}</Button>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/auth/login/Web3Login.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}
    </Button>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
