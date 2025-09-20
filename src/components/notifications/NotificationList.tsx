
import React from 'react';
<<<<<<< HEAD
import { ScrollArea } from '@/components/ui/scroll-area';
import Skeleton from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { NotificationItem } from './NotificationItem';
import { Notification } from '@/context/notifications';
import { EmptyState } from '@/components/ui/empty-state';
import { Bell } from 'lucide-react';
interface NotificationListProps {
onRetry: () => void}
=======
import { ScrollArea } from "@/components/ui/scroll-area";
import Skeleton from '@/components/ui/skeleton';
import { Button } from "@/components/ui/button";
import { NotificationItem } from "./NotificationItem";
import { Notification } from "@/context/notifications";
import { EmptyState } from "@/components/ui/empty-state";
import { Bell } from "lucide-react";
interface NotificationListProps {onRetry: () => void}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export const NotificationList: React.FC<NotificationListProps> = ({
})