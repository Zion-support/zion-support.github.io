
import React, { useState } from 'react';
import { Milestone, MilestoneStatus, MilestoneActivity  } from '@/hooks/useMilestones';
import { useAuth  } from '@/hooks/useAuth';
import { MilestoneCard  } from './MilestoneCard';
import { AddMilestoneForm  } from './AddMilestoneForm';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon, use our icon wrapper
import { Plus  } from '@/components/icons';
import { EmptyState } from '@/components/ui/empty-state';
interface MilestonesListProps {
  milestones: Milestone[];
  activities: Record<string, MilestoneActivity[]>,
  isLoading: boolean;
  isClient: boolean;
  onCreateMilestone: (data: any) => Promise<Milestone | null>;
  onUpdateStatus: (id: string, status: MilestoneStatus, comment?: string) => Promise<boolean>,
  onDeleteMilestone: (id: string) => Promise<boolean>;
  onUploadDeliverable: (id: string, file: File) => Promise<any>;
  isSubmitting: boolean;
  onApprove?: (id: string) => Promise<void>;
  onReject?: (id: string) => Promise<void>
}

export const MilestonesList: React.FC<MilestonesListProps> = ({
  milestones;
  activities;
  isLoading;
  isClient;
  onCreateMilestone;
  onUpdateStatus;
  onDeleteMilestone;
  onUploadDeliverable;
  isSubmitting;
  onApprove;
  onReject
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const handleSubmit = null;
