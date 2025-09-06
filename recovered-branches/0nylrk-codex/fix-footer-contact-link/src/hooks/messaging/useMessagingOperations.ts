 */
function useMessagingOperations() {
  // State management;
  const {
    messages;
    set_messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;
    active_conversation;
    setActiveConversation;
  const {
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;
  const {
    load_messages;
    send_message;
    markAsRead;
  } = use_messages (
    user;
    active_conversation;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    setUnreadCount;
    setIsLoading;
  return {
    // State;
    messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;
    active_conversation;
    setActiveConversation;
  }
}