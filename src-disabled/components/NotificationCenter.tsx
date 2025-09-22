
import React, { useState, useEffect } from 'react';
origin/cursor/automate-test-improve-and-merge-code-2533
// Use the shared icon wrapper
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button',;
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover',;
import { useNotifications } from '@/context/notifications/NotificationContext',;
import { useEnqueueSnackbar } from '@/context',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import { 
  NotificationFilter,
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 

