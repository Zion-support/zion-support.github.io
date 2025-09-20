return (
<Card>;
<CardHeader>;
<CardTitle>Quick Actions</CardTitle>;
<CardDescription>Fast access to common tasks</CardDescription>;
</CardHeader>;
<CardContent>;
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
{actions.map(action => (
<Button;
key={action.id}
