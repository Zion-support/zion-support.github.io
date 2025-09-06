  const isGuest = !auth?.isAuthenticated
  const handleSendMessage = async (messageContent: string) => {
    if (!messageContent.trim() return
import React, {

  useState
  useEffect
  useRef
  ReactNode
  useContext} from 'react'
import { AuthContext } from '../../context/auth/
import { useDebounce } from '../../hooks/
import { useLocalStorage } from '../../hooks/
import { ChatMessage } from './
import { ChatInput } from './
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/
import { Button } from '@/components/ui/
import { AuthContext } from '../../context/auth/
import { useDebounce } from '../../hooks/
import { useLocalStorage } from '../../hooks/
import { ChatMessage } from './
import { ChatInput } from './
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/
import { Button } from '@/components/ui/