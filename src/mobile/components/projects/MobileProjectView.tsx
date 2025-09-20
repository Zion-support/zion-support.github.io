interface Milestone {id: string;
title: string;
  dueDate: string;
status: "completed" | "in_progress" | "pending";
  paymentStatus: "paid" | "pending" | "overdue";
amount: string,
interface ProjectViewProps {
  
  project: {,
id: string;
    title: string;
client: {
      name: string;
}
}