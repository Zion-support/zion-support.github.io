
          Register;
        </Link>;
      </div>;
    );
  }

    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button variant="ghost" className="h-8 w-8 rounded-full">;
          <Avatar className="h-8 w-8">;

          </Avatar>;
          <span className="sr-only">Open user menu</span>;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end">;
        <div className="grid gap-2 px-2 py-2">;

        </div>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem asChild>;
          <Link to="/dashboard">Dashboard</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link to="/profile">Profile</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link to="/saved-talents">Saved Talents</Link>;
        </DropdownMenuItem>;
        <DropdownMenuItem asChild>;
          <Link to="/wallet">Wallet</Link>;
        </DropdownMenuItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;

}