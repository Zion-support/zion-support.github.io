


  const subscription = {

  const subscription = {
    plan: "Business"
    status: "active"
    billingCycle: "Annual"
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    amount: "$1,999.00";
    plan: "Business",
    status: "active",
    billingCycle: "Annual",;
    startDate: "May 1, 2025";
    nextBillingDate: "May 1, 2026";
    }
  }

    plan: "Business",
    status: "active",

    <Card>;
      <CardHeader>;
        <div className="flex items-center justify-between">;
          <CardTitle>Current Subscription</CardTitle>;
          <Badge variant="outline" className="bg-green-500 text-white">Active</Badge>;
        </div>;
        <CardDescription>Your subscription details and plan information</CardDescription>;
      </CardHeader>;
      <CardContent className="grid gap-6">;
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">;
          <div className="space-y-1">;
            <p className="text-sm font-medium leading-none text-muted-foreground">Plan</p>;

}=======
      <CardFooter className="flex justify - between">;
        <Button variant="outline">Change Plan</Button>;
        <Button variant="destructive">Cancel Subscription</Button>;
      </CardFooter>;
    </Card>);
}
;
