export default function Component() {
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
variant="outline"              className={`h-auto justify-start p-4 ${action.color}`}
>;
<div className="flex flex-col items-start text-left">;
<div className="flex items-center">;
{action.icon}
<span>{action.label}</span>;
</div>;
<span className="mt-1 text-xs text-muted-foreground">;
{action.description}
</span>              </div>;
<span className="mt-1 text-xs text-muted-foreground">{action.description}</span>;
{actions.map(action => (
<Button;
key={action.id}
variant="outline"
className={`h-auto justify-start p-4 ${action.color}`}
>;
<div className="flex flex-col items-start text-left">;
<div className="flex items-center">;
{action.icon}
<span>{action.label}</span>;
</div>;
<span className="mt-1 text-xs text-muted-foreground">{action.description}</span>;
</div>;
</Button>;
))}
</div>;
</CardContent>;
</Card>;
)
}))
}