 
}
});
<AvatarImage src= {
  activeConversation.other user.avatar url 
}alt= {
  activeConversation.other user.name 
}/> activeConversation.other user.user type === 'employer' ? 'Employer' : activeConversation.other user.user type === 'admin' ? 'Admin' : 'User' 
}</div> </div> </div> </div> {
  activeConversation.context data.image url && (<div className="w-16 h-16 flex-shrink-0" > <AspectRatio ratio= {
  1/1 
}className="rounded bg-zion-blue-dark/30 overflow-hidden" > <img /> </AspectRatio> </div>) 
}<div> {
  activeConversation.context data.description 
}</div>) 
}</div> </div> </div>) 
}<p>No messages yet. Start the conversation!</p> </div>) : (groupedMessages.map ( (group, groupIndex) => (<div key= {
  group.date 
}> <MessageBubble key= {
  message.id 
}message= {
  message 
}isUserMessage= {
  message.sender id === user?.id 
}/>) ) 
}</div> </div>) ) ) 
}<div ref= {
  messagesEndRef 
}/> </div> placeholder="Type a message..." className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-white focus: outline-none focus:ring-2 focus:ring-zion-cyan" submit"className=" bg-zion-purple hover:bg-zion-purple-dark text-white" > Send </Button> </form> </div> </div>) 
}