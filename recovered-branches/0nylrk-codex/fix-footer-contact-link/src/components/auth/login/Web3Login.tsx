
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/hooks/useAuth";
import {Wallet} from "@/components/icons";
import {toast} from "sonner";
export function Web3Login() {;
<<<<<<< HEAD
<<<<<<< HEAD
  const { loginWithWeb3 } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const { loginWithWeb3 } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleWeb3Login = async () => {;
    try {;
      setIsLoading(true);


<<<<<<< HEAD
  const handleWeb3Login = async () => {
    try {

      setIsLoading(true),
      

      // Check if wallet is available
      const ethereum = (window as any).ethereum;
<<<<<<< HEAD
  const { loginWithWeb3 } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { Wallet } from "@/components/icons";
import { toast } from "sonner";
import { Wallet } from "@/components/icons",
import { toast } from "sonner",
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function Web3Login() {
  const { loginWithWeb3 } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),

  const handleWeb3Login = async () => {
    try {
      setIsLoading(true);
      setIsLoading(true),
      
      // Check if wallet is available
<<<<<<< HEAD
      const ethereum = (window as any).ethereum,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      const ethereum = (window as any).ethereum;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet"}),;
        return;
      }
<<<<<<< HEAD
      await loginWithWeb3();
=======

      await loginWithWeb3();

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet"}),;
      console && console.error("Web3 login error:", error);
    } finally {;
      setIsLoading(false);
<<<<<<< HEAD
    }
  }
    }

  },

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  }
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
      onClick={handleWeb3Login}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      )}
    </Button>
  )
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
      {isLoading ? (;
        <span className="flex items-center">;
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {isLoading ? (;
        <span className="flex items-center">;
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www && www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">;
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>;
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5 && 8V0C5.373 0 0 5 && 5.373 0 12h4zm2 5 && 5.291A7.962 7 && 7.962 0 014 12H0c0 3 && 3.042 1 && 1.135 5 && 5.824 3 7 && 7.938l3-2 && 2.647z"></path>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </svg>;
          Connecting...;
        </span>;
      ) : (;
        <>;
          <span className="sr-only">Sign in with Web3</span>;
          <Wallet className="h-5 w-5" />;
        </>;



<<<<<<< HEAD
      )}

      )}
    </Button>;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      )}

    </Button>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
};
return (<Button type="button" variant="outline" className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan" onClick= {
  handleWeb3Login 
}disabled= {
  isLoading 
}> {
  isLoading ? (<span className="flex items-center" > <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" > <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path> sr-only">Sign in with Web3</span> <Wallet className=" h-5 w-5" /> </>) 
}</Button>) 
}
      )}
    </Button>;
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
