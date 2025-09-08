
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { format  } from 'date-fns';
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  status: string;
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>
}

export function MilestoneCard({ 
  id;
  projectId;
  title;
  description;
  amount;
  status;
  dueDate;
  onApprove;
