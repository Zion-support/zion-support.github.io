

export function MobileConversationList({

  onSelectConversation
}: MobileConversationListProps) {
  return (
    <div className="space-y-4">
      <div className="px-4 mb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-9"
          />
        </div>
      </div>

                <AvatarFallback>
                  {conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

=======
                  src={conversation && conversation.avatar}
                  alt={conversation && conversation.name}
                />                <AvatarFallback>;
                  {conversation && conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>;
              </Avatar>                <AvatarImage src={conversation && conversation.avatar} alt={conversation && conversation.name} />;
                <AvatarFallback>;
                  {conversation && conversation.name.charAt(0).toUpperCase()}
                </AvatarFallback>;
              </Avatar>;


              <div className='flex-1 min-w-0'>;
                <div className='flex justify-between items-baseline'>;
                  <h3 className='font-medium truncate'>{conversation && conversation.name}</h3>;
                  <span className='text-xs text-muted-foreground whitespace-nowrap ml-2'>;
                  </span>;
                </div>;

                <div className='flex justify-between items-center'>;
                  <p className='text-sm text-muted-foreground truncate'>;
                    {conversation && conversation.isTyping ? (;
                      <em>Typing...</em>;
                    ) : (;
                      conversation && conversation.lastMessage;
                    )}
                  )}
                </div>;
              </div>;
            </div>;
            <div className='border-t border-border ml-12'></div>          </div>            <div className="border-t border-border ml-12"></div>;
          </div>;



              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium truncate">{conversation.name}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {conversation.timestamp}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.isTyping 
                      ? <em>Typing...</em> 
                      : conversation.lastMessage}



>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
                  </p>
                  {conversation.unreadCount > 0 && (

                  )}
                </div>
              </div>
            </div>
<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
