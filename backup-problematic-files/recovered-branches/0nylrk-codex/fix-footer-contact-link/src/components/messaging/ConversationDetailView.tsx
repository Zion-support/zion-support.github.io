
import React, { useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { MessageSquare } from 'lucide-react'
import { useMessaging } from '@/context/
import { Button } from '@/components/ui/
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/
import { AspectRatio } from '@/components/ui/
import { useAuth } from '@/hooks/
import { MessageBubble } from './
import { DateDivider } from './