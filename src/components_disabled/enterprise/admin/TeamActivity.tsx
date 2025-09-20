
import React from "react";
import {
return (<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium">Recent Team Activity</h3>
<div className="flex items-center gap-2">
<div className="relative">
<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
<Input;
type="search"
placeholder="Search activities...";
className="w-[200px] md:w-[300px] pl-9"
/>
</div>
<Button variant="outline" size="icon" className="h-10 w-10" aria-label="Filter by date">
<CalendarIcon className="h-4 w-4" />
</Button>
</div>
</div>
<div className="rounded-md border">
<Table>
<TableHeader>
<TableRow>
<TableHead>User</TableHead>
<TableHead>Activity</TableHead>
<TableHead>Target</TableHead>
<TableHead>Category</TableHead>
<TableHead>Time</TableHead>
</TableRow>
</TableHeader>
<TableBody>
{activities.map((activity) => (
<TableRow key={activity.id}>
<TableCell className="font-medium">{activity.user}</TableCell>
<TableCell>{activity.action}</TableCell>
<TableCell>
<span className="font-medium">{activity.target}</span>
</TableCell>
<TableCell>{getCategoryBadge(activity.category)}</TableCell>
<TableCell className="text-muted-foreground">
{formatDate(activity.timestamp)}
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</div>
<div className="flex items-center justify-between">
<Button variant="outline" size="sm">
Previous;
</Button>
<div className="text-sm text-muted-foreground">
Page 1 of 10;
</div>
<Button variant="outline" size="sm">
Next;
</Button>
</div>
</div>
)
};
const getCategoryBadge: any = (category: string) => {;
};";
activities.map ( (activity) => (<TableRow key= {activity.id}> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </div> <div className="flex items-center justify-between" > <Button variant="outline" size="sm" > Previous </Button> <div className="text-sm text-muted-foreground" > Page 1 of 10 </div> <Button variant="outline" size="sm" > Next </Button> </div> </div>)
}"}