
import import React, { useState } from 'react';
import import { Milestone,,, MilestoneStatus,,, MilestoneActivity,,, ,,  } from '@/hooks/useMilestones';
import import { useAuth,,, ,,  } from '@/hooks/useAuth';
import import { MilestoneCard,,, ,,  } from './MilestoneCard';
import import { AddMilestoneForm,,, ,,  } from './AddMilestoneForm';
import import { Button,,, ,,  } from '@/components/ui/button';
import import { Card,,, CardContent,,, ,,  } from '@/components/ui/card';
// lucide-react doesn't export PlusIcon use our icon wrapper,
import { Plus,,  } from 'lucide-react'
import import { EmptyState,,  } from '@/components/ui/empty-state';
interface MilestonesListProps {
}
export const MilestonesList: React.FC<MilestonesListProps> = ({
