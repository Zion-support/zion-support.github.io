 export interface Company {
  id: string;
name: string;
logoUrl?: string;
theme?: {
  primaryColor: string;
backgroundColor: string;
textColor: string 
};
plan: string;
teamSize: number;
teamLimit: number;
billingCycle: string;
workspaceUrl: string 
}interface CompanyDashboardProps {
  company: Company 
}export function CompanyDashboard ({
  company 
}: CompanyDashboardProps) {
  return (<div className="container mx-auto max-w-7xl py-8 px-4 md:px-6" > company 
}/> <QuickActions /> <RecentActivity /> <TalentPool /> </div> <div className="space-y-6" > <TeamStats /> <SharedInbox /> </div> </div> </div>) 
}