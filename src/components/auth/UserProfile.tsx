=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (loading) {
    return (
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    )
  }
  if (!user) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Not Signed In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleSignIn} className="w-full">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Email:</span>
            <span className="text-sm">{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Status:</span>
            <Badge variant={user.email_confirmed_at ? "default" : "secondary"}>
              {user.email_confirmed_at ? "Verified" : "Unverified"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Joined:</span>
            <span className="text-sm">
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
=======
        
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          Sign Out
        </Button>
      </CardContent>
    </Card>
=======
  )
} 
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
