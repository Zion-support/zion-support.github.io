import React, {useState, useEffect, useRef, useContext} from 'react' import {AuthContext} from '../../context/auth/AuthContext,
import {useDebounce} from ../../hooks/useDebounce, import {useLocalStorage} from ../../hooks/useLocalStorage,
import {ChatMessage} from ./ChatMessage, import {ChatInput} from ./ChatInput,
import {Avatar, AvatarFallback, AvatarImage} from @/components/ui/avatar, import {Button} from @/components/ui/button,
import {X} from ',lucide-reactimport {focusManagement} from @/utils/accessibilityexport function ChatAssistant(props: any) { const auth = useContext(AuthContext) const isGuest = !auth?.isAuthenticated
}