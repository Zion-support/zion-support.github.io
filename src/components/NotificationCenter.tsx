import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger  } from '@/components/ui/popover';
import { useNotifications  } from '@/context/notifications/NotificationContext';
import { useEnqueueSnackbar  } from '@/context';
import {logErrorToProduction} from '@/utils/productionLogger';
import { NotificationFilter;
  NotificationHeader;
  NotificationList;
  NotificationFooter 
 } from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';
export const NotificationCenter: React.FC;
