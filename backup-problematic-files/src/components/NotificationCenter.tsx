import React, { useState, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/
import { useNotifications } from '@/context/notifications/
import { useEnqueueSnackbar } from '@/
import {logErrorToProduction} from '@/utils/
 from '@/components/
import { FilterType } from '@/components/notifications/