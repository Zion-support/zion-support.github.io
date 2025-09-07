</svg>;
          Continue with Facebook;
        </Button>;
      </div>;

      <div className="relative flex items-center">;
        <div className="flex-grow border-t border-border"></div>;
        <span className="mx-2 text-xs text-muted-foreground">OR</span>;
        <div className="flex-grow border-t border-border"></div>;
      </div>;

      {error && (;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}

      <form onSubmit={handleSubmit} className="space-y-4">;
        {signupMode && (;
          <div className="space-y-2">;
            <Label htmlFor="name">Full name</Label>;

        }
        <Button;
          variant="link";
          className="p-0 h-auto";
          onClick={() => setSignupMode(!signupMode)}
        >;

}