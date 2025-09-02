
export function ConversationDetailView() { const { user } = useAuth(); const { activeConversation, activeMessages, sendMessage, loadMessages } = useMessaging(); const [messageText, setMessageText] = useState("); const messagesEndRef = useRef<HTMLDivElement>(null); useEffect(() => { if (activeConversation) { loadMessages(activeConversation.id); } }, [activeConversation, loadMessages]);"""";

export function ConversationDetailView() { const { user } = useAuth(); const { activeConversation, activeMessages, sendMessage, loadMessages } = useMessaging(); const [messageText, setMessageText] = useState("); const messagesEndRef = useRef<HTMLDivElement>(null); useEffect(() => { if(activeConversation) { loadMessages(activeConversation.id); } }, [activeConversation, loadMessages]);
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
