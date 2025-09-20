<<<<<<< HEAD
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from "lucide-react";
import Link from "next/link";
export function TalentDashboard() {
return (
<div className="space-y-6 px-4 pb-24">
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium">New Job Matches</h2>
<Link href="/mobile/marketplace">
<Button variant="ghost" size="sm" className="h-8 gap-1">
View all <ChevronRight className="h-4 w-4" />
</Button>
</Link>
</div>
<div className="space-y-3">
<Card>
<CardContent className="p-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="font-medium">Senior React Developer</h3>
<div className="text-sm text-muted-foreground">
TechCorp Inc.;
</div>
<div className="flex items-center gap-1 mt-1">
<Badge variant="secondary" className="text-xs">
Remote;
</Badge>
<Badge variant="secondary" className="text-xs">
Full-time;
</Badge>
</div>
</div>
<div className="flex flex-col items-end">
<div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">
92% match;
</div>
<span className="text-xs text-muted-foreground mt-1">
2 days ago;
</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<Button size="sm">Apply Now</Button>
<Button size="sm" variant="outline">
View Details;
</Button>              </div>
</CardContent>
</Card>
<Card>
<CardContent className="p-4">
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="font-medium">UX/UI Designer</h3>
<div className="text-sm text-muted-foreground">
Creative Studios;
</div>
<div className="flex items-center gap-1 mt-1">
<Badge variant="secondary" className="text-xs">
Hybrid;
</Badge>
<Badge variant="secondary" className="text-xs">
Contract;
</Badge>
</div>
</div>
<div className="flex flex-col items-end">
<div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">
87% match;
</div>
<span className="text-xs text-muted-foreground mt-1">
4 hours ago;
</span>
</div>
</div>
<div className="flex gap-2 mt-3">
<Button size="sm">Apply Now</Button>
<Button size="sm" variant="outline">
View Details;
</Button>              </div>              <div className="flex gap-2 mt-3">
<Button size="sm">Apply Now</Button>
<Button size="sm" variant="outline">View Details</Button>
</div>
</CardContent>
</Card>
</div>
</section>
<section>
<h2 className="text-lg font-medium mb-4">Application Tracker</h2>
<Card>
<CardContent className="p-4">
<div className="grid grid-cols-2 gap-4">
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">3</div>
<div className="text-xs text-muted-foreground">
Active Applications;
</div>
</div>
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">2</div>
<div className="text-xs text-muted-foreground">
Interviews Scheduled;
</div>
</div>
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">5</div>
<div className="text-xs text-muted-foreground">Jobs Saved</div>
</div>
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">12</div>
<div className="text-xs text-muted-foreground">Jobs Viewed</div>
</div>
</div>
<Button variant="outline" className="w-full mt-4">              View All Applications      <section>
<h2 className="text-lg font-medium mb-4">Application Tracker</h2>
<Card>
<CardContent className="p-4">
<div className="grid grid-cols-2 gap-4">
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">3</div>
<div className="text-xs text-muted-foreground">Active Applications</div>
</div>
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">2</div>
<div className="text-xs text-muted-foreground">Interviews Scheduled</div>
</div>
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">5</div>
<div className="text-xs text-muted-foreground">Jobs Saved</div>
</div>
<div className="text-center p-3 bg-primary/5 rounded-lg">
<div className="text-2xl font-bold text-primary">12</div>
<div className="text-xs text-muted-foreground">Jobs Viewed</div>
</div>
</div>
<Button variant="outline" className="w-full mt-4">
View All Applications;
</Button>
</CardContent>
</Card>
</section>
<section>
<h2 className="text-lg font-medium mb-4">Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
=======
<<<<<<< HEAD
import { ChevronRight, FileText, Image, Clock, Zap, BookOpen } from "lucide-react";
import { ChevronRight, FileText, Image, Clock, ZapBookOpen } from 'lucide-react';
=======
import { ChevronRight; FileText, Image; Clock, Zap; BookOpen } from "lucide-react";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
import Link from "next/link";
export function TalentDashboard() {
return (
<div className="space-y-6 px-4 pb-24">;
<section>;
<div className="flex items-center justify-between mb-4">;
<h2 className="text-lg font-medium">New Job Matches</h2>;
<Link href="/mobile/marketplace">;
<Button variant="ghost" size="sm" className="h-8 gap-1">;
View all <ChevronRight className="h-4 w-4" />;
</Button>;
</Link>;
</div>;
<div className="space-y-3">;
<Card>;
<CardContent className="p-4">;
<div className="flex justify-between items-start">;
<div className="space-y-1">;
<h3 className="font-medium">Senior React Developer</h3>;
<div className="text-sm text-muted-foreground">;
TechCorp Inc.;
</div>;
<div className="flex items-center gap-1 mt-1">;
<Badge variant="secondary" className="text-xs">;
Remote;
</Badge>;
<Badge variant="secondary" className="text-xs">;
Full-time;
</Badge>;
</div>;
</div>;
<div className="flex flex-col items-end">;
<div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">;
92% match;
</div>;
<span className="text-xs text-muted-foreground mt-1">;
2 days ago;
</span>;
</div>;
</div>;
<div className="flex gap-2 mt-3">;
<Button size="sm">Apply Now</Button>;
<Button size="sm" variant="outline">;
View Details;
</Button>              </div>;
</CardContent>;
</Card>;
<Card>;
<CardContent className="p-4">;
<div className="flex justify-between items-start">;
<div className="space-y-1">;
<h3 className="font-medium">UX/UI Designer</h3>;
<div className="text-sm text-muted-foreground">;
Creative Studios;
</div>;
<div className="flex items-center gap-1 mt-1">;
<Badge variant="secondary" className="text-xs">;
Hybrid;
</Badge>;
<Badge variant="secondary" className="text-xs">;
Contract;
</Badge>;
</div>;
</div>;
<div className="flex flex-col items-end">;
<div className="bg-primary/10 text-primary font-medium rounded-full px-2 py-1 text-xs">;
87% match;
</div>;
<span className="text-xs text-muted-foreground mt-1">;
4 hours ago;
</span>;
</div>;
</div>;
<div className="flex gap-2 mt-3">;
<Button size="sm">Apply Now</Button>;
<Button size="sm" variant="outline">;
View Details;
</Button>              </div>              <div className="flex gap-2 mt-3">;
<Button size="sm">Apply Now</Button>;
<Button size="sm" variant="outline">View Details</Button>;
</div>;
</CardContent>;
</Card>;
</div>;
</section>;
<section>;
<h2 className="text-lg font-medium mb-4">Application Tracker</h2>;
<Card>;
<CardContent className="p-4">;
<div className="grid grid-cols-2 gap-4">;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">3</div>;
<div className="text-xs text-muted-foreground">;
Active Applications;
</div>;
</div>;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">2</div>;
<div className="text-xs text-muted-foreground">;
Interviews Scheduled;
</div>;
</div>;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">5</div>;
<div className="text-xs text-muted-foreground">Jobs Saved</div>;
</div>;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">12</div>;
<div className="text-xs text-muted-foreground">Jobs Viewed</div>;
</div>;
</div>;
<Button variant="outline" className="w-full mt-4">              View All Applications      <section>;
<h2 className="text-lg font-medium mb-4">Application Tracker</h2>;
<Card>;
<CardContent className="p-4">;
<div className="grid grid-cols-2 gap-4">;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">3</div>;
<div className="text-xs text-muted-foreground">Active Applications</div>;
</div>;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">2</div>;
<div className="text-xs text-muted-foreground">Interviews Scheduled</div>;
</div>;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">5</div>;
<div className="text-xs text-muted-foreground">Jobs Saved</div>;
</div>;
<div className="text-center p-3 bg-primary/5 rounded-lg">;
<div className="text-2xl font-bold text-primary">12</div>;
<div className="text-xs text-muted-foreground">Jobs Viewed</div>;
</div>;
</div>;
<Button variant="outline" className="w-full mt-4">;
View All Applications;
</Button>;
</CardContent>;
</Card>;
</section>;
<section>;
<h2 className="text-lg font-medium mb-4">Quick Actions</h2>;
<div className="grid grid-cols-2 gap-4">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="Update Resume";
>;
<<<<<<< HEAD
<FileText className="h-5 w-5 mb-1" aria-hidden="true" />
<span>Update Resume</span>
</Button>
=======
<FileText className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>Update Resume</span>;
</Button>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="View Portfolio";
>;
<<<<<<< HEAD
<Image className="h-5 w-5 mb-1" aria-hidden="true" />
<span>Portfolio</span>
</Button>
=======
<Image className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>Portfolio</span>;
</Button>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="Set Availability";
>;
<<<<<<< HEAD
<Clock className="h-5 w-5 mb-1" aria-hidden="true" />
<span>Availability</span>
</Button>
=======
<Clock className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>Availability</span>;
</Button>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="AI Resume Boost";
>;
<<<<<<< HEAD
<Zap className="h-5 w-5 mb-1" aria-hidden="true" />            <span>AI Resume Boost</span>
</Button>
</div>
</section>      <section>
<h2 className="text-lg font-medium mb-4">Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
=======
<Zap className="h-5 w-5 mb-1" aria-hidden="true" />            <span>AI Resume Boost</span>;
</Button>;
</div>;
</section>      <section>;
<h2 className="text-lg font-medium mb-4">Quick Actions</h2>;
<div className="grid grid-cols-2 gap-4">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="Update Resume";
>;
<<<<<<< HEAD
<FileText className="h-5 w-5 mb-1" aria-hidden="true" />
<span>Update Resume</span>
</Button>
=======
<FileText className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>Update Resume</span>;
</Button>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="View Portfolio";
>;
<<<<<<< HEAD
<Image className="h-5 w-5 mb-1" aria-hidden="true" />
<span>Portfolio</span>
</Button>
=======
<Image className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>Portfolio</span>;
</Button>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<Button;
variant="outline"
className="h-auto py-4 flex flex-col gap-1"
aria-label="Set Availability";
>;
<<<<<<< HEAD
<Clock className="h-5 w-5 mb-1" aria-hidden="true" />
<span>Availability</span>
</Button>
<Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">
<Zap className="h-5 w-5 mb-1" aria-hidden="true" />
<span>AI Resume Boost</span>
</Button>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium">Learning Hub</h2>
<Button variant="ghost" size="sm" className="h-8">            View all;
</Button>
</div>
<Card>
<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium">Learning Hub</h2>
<Button variant="ghost" size="sm" className="h-8">
</Button>
</div>
<Card>
<CardContent className="p-4">
<div className="flex items-center gap-3">
=======
<Clock className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>Availability</span>;
</Button>;
<Button variant="outline" className="h-auto py-4 flex flex-col gap-1" aria-label="AI Resume Boost">;
<Zap className="h-5 w-5 mb-1" aria-hidden="true" />;
<span>AI Resume Boost</span>;
</Button>;
</div>;
</section>;
<section>;
<div className="flex items-center justify-between mb-4">;
<h2 className="text-lg font-medium">Learning Hub</h2>;
<Button variant="ghost" size="sm" className="h-8">            View all;
</Button>;
</div>;
<Card>;
<section>;
<div className="flex items-center justify-between mb-4">;
<h2 className="text-lg font-medium">Learning Hub</h2>;
<Button variant="ghost" size="sm" className="h-8">;
</Button>;
</div>;
<Card>;
<CardContent className="p-4">;
<div className="flex items-center gap-3">;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<div;
className="bg-primary/10 p-3 rounded-full"
aria-hidden="true";
>;
<<<<<<< HEAD
<BookOpen className="h-6 w-6 text-primary" />
</div>
<div>
<h3 className="font-medium">Improve your profile visibility</h3>
<p className="text-sm text-muted-foreground">
5 tips for getting noticed by clients;
</p>              </div>          <CardContent className="p-4">
<div className="flex items-center gap-3">
<div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">
<BookOpen className="h-6 w-6 text-primary" />
</div>
<div>
<h3 className="font-medium">Improve your profile visibility</h3>
<p className="text-sm text-muted-foreground">5 tips for getting noticed by clients</p>
</div>
</CardContent>
</Card>
</section>
</div>
=======
<BookOpen className="h-6 w-6 text-primary" />;
</div>;
<div>;
<h3 className="font-medium">Improve your profile visibility</h3>;
<p className="text-sm text-muted-foreground">;
5 tips for getting noticed by clients;
</p>              </div>          <CardContent className="p-4">;
<div className="flex items-center gap-3">;
<div className="bg-primary/10 p-3 rounded-full" aria-hidden="true">;
<BookOpen className="h-6 w-6 text-primary" />;
</div>;
<div>;
<h3 className="font-medium">Improve your profile visibility</h3>;
<p className="text-sm text-muted-foreground">5 tips for getting noticed by clients</p>;
</div>;
</CardContent>;
</Card>;
</section>;
</div>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
)
}