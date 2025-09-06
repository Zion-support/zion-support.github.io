
=======

import { Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { useAuth } from "@/hooks/useAuth";
import { Web3Login } from "./Web3Login";
export function SocialLogin() {

  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading } =
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading } =;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    useAuth();

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zion-blue-light" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">
            Or continue with
          </span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  )
import { Facebook, Twitter } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { Web3Login } from "./Web3Login",;

export function SocialLogin() {;
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading } =;
    useAuth();

  return (
    <div className="mt-6">;
      <div className="relative">;
        <div className="absolute inset-0 flex items-center">;
          <div className="w-full border-t border-zion-blue-light" />;
        </div>;
        <div className="relative flex justify-center text-sm">;
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">;
            Or continue with;
          </span>;
        </div>;
      </div>;

      <div className="mt - 6 grid grid - cols - 4 gap - 3">;
        <Button;
          type="button";
          variant="outline";
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan";
  );
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
