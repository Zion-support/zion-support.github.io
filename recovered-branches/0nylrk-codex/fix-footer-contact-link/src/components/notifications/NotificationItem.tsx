
import React from 'react';
// Use the centralized icon wrapper to avoid missing icons
import { Check, Trash2, ChevronRight  } from '@/components/icons';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { formatDistanceToNow  } from 'date-fns';
import { cn  } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { useNavigate  } from 'react-router-dom';
import { Notification, NotificationType } from '@/context/notifications';
export const getTypeIcon = null;
