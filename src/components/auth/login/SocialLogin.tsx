import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

interface SocialLoginProps {
  onGoogleLogin?: () => void;
  onGithubLogin?: () => void;
  onEmailLogin?: () => void;
  loading?: boolean;
}

export const SocialLogin: React.FC<SocialLoginProps> = ({
  onGoogleLogin,
  onGithubLogin,
  onEmailLogin,
  loading = false,
}) => {
  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          onClick={onGoogleLogin}
          disabled={loading}
          className="w-full"
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button
          variant="outline"
          onClick={onGithubLogin}
          disabled={loading}
          className="w-full"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>

      {onEmailLogin && (
        <Button
          variant="link"
          onClick={onEmailLogin}
          disabled={loading}
          className="w-full"
        >
          Continue with Email
        </Button>
      )}
    </div>
  );
};