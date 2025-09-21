
import import React from 'react',
import import { ScrollArea } from '@/components/ui/scroll-area',
import import Skeleton from '@/components/ui/skeleton',
import import { Button } from '@/components/ui/button',
import import { NotificationItem } from './NotificationItem',
import import { Notification } from '@/context/notifications',
import import { EmptyState } from '@/components/ui/empty-state',
import { Bell } from 'lucide-react'
interface NotificationListProps {
onRetry: () => void, }
export const NotificationList: React.FC<NotificationListProps> = ({
