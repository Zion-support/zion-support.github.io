
import { Facebook, Twitter } from "lucide-react",
import { Button } from "@/components/ui/button",
import { Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Web3Login } from "./Web3Login";
export function SocialLogin() {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  );
}
;
