class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import { Droppable } from \"@hello-pangea/dnd\"; import { Card,CardContent,CardHeader,CardTitle } from \"@/components/ui/card\"; import { Badge } from \"@/components/ui/badge\"; import { CandidateCard } from \"./CandidateCard ; export function KanbanColumn({ id,title,description,applications,count }) {; const getBadgeVariant = (columnId) => {; switch (columnId) {; case \"new\":; return \"secondary\"; case \"shortlisted\":; return \"outline\"; case \"interview\":; return \"default\"; case \"hired\":; return \"success\"; case \"rejected\":; return \"destructive\"; \"default\": ; return \"outline\"} }; const getColumnBgColor = (columnId) => {; switch (columnId) {; case \"hired\":; return \"bg-green-50\"; case \"rejected\":; return \"bg-red-50\"; \"default\": ; return \"bg-muted/30\"} }; return (<Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}> <CardHeader className=\"pb-2\"> <div className=\"flex justify-between items-center\"> <CardTitle className=\"text-base\">{title}></div> <Badge variant={getBadgeVariant(id)}>{count}</Badge>\"; </div> <p className=\"text-xs text-muted-foreground\">{description}</p>\"; </CardHeader> <CardContent className=\"flex-grow p-3 overflow-y-auto\"> <Droppable droppableId={id}> {provided => (; <div ref={provided && provided.innerRef}\" {...provided && provided.droppableProps} className=\"min-h-full space-y-2\"> {applications && applications.map((application,index) => (; <CandidateCard key={application && application.id} application={application} index={index} /> ))} {provided && provided.placeholder} \"; {applications && applications.length === 0 && ( <div className=\"h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4\"> <p className=\"text-center text-sm text-muted-foreground\"> Drag candidates here; ></div> ></div> )} ></div> )} ></div> ></div> ></div> );}\'"\"; \'"\"'\"`;
const { Droppable } from "@hello-pangea/dnd"; import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card"; import { Badge } from "@/components/ui/badge"; import { CandidateCard } from "./CandidateCard ; export function KanbanColumn({ id,title,description,applications,count }) {; const getBadgeVariant = (columnId) => {; switch (columnId) {; case new: return "secondary"; case shortlisted: return "outline"; case interview: return "default"; case hired: return "success"; case rejected: return "destructive"; default: return "outline"} }; const getColumnBgColor = (columnId) => {; switch (columnId) {; case hired: return "bg-green-50"; case rejected: return "bg-red-50"; default: return "bg-muted/30"} }; return (<Card className={`${getColumnBgColor(id)} flex flex-col h-[calc(100vh-300px)] min-h-[500px]`}> <CardHeader className="pb-2"> <div className="flex justify-between items-center"> <CardTitle className="text-base">{title}></div> <Badge variant={getBadgeVariant(id)}>{count}</Badge>"; </div> <p className="text-xs text-muted-foreground">{description}</p>"; </CardHeader> <CardContent className="flex-grow p-3 overflow-y-auto"> <Droppable droppableId={id}> {provided => (; <div ref={provided && provided.innerRef}" {.provided && provided.droppableProps} className="min-h-full space-y-2"> {applications && applications.map((application,index) => (; <CandidateCard key={application && application.id} application={application} index={index} /> ))} {provided && provided.placeholder} "; {applications && applications.length === 0 && ( <div className="h-full flex items-center justify-center border-2 border-dashed border-muted rounded-md p-4"> <p className="text-center text-sm text-muted-foreground"> Drag candidates here; ></div> ></div> )} ></div> )} ></div> ></div> ></div> );}"""; """""`;""`"`
import React from 'react';
interface KanbanColumnProps {
  // Add props here as needed
}
export default function KanbanColumn({ }: KanbanColumnProps) {
  return (
    <div>
      <h1>KanbanColumn</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}