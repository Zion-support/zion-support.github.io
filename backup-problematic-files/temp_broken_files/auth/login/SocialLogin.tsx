
import { Facebook, Twitter } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { Web3Login } from "./Web3Login",;
;
export function SocialLogin() {;
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading } = useAuth(),;
;
  return (;
    <div className="mt-6">;
      <div className="relative">;
        <div className="absolute inset-0 flex items-center">;
          <div className="w-full border-t border-zion-blue-light" />;
        </div>;
        <div className="relative flex justify-center text-sm">;

          </svg>;
        </Button>;
        <Button;
          type="button";
          variant="outline";

        </Button>;
        <Button;
          type="button";
          variant="outline";
