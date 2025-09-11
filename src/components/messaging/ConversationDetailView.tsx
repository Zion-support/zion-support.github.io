      </div>;

      {hasContextData && (
        <div className="p - 4 border - b border - zion - purple / 20 bg - zion - blue - dark / 10">;
          <div className="text - sm text - zion - slate flex items - start gap - 3">;
            {active_conversation.context_data && active_conversation.context_data.image_url && (
              <div className="w - 16 h - 16 flex - shrink - 0">;
                <AspectRatio ratio={1 / 1} className="rounded bg - zion - blue - dark / 30 overflow - hidden">;
                  <img;
                    src = {active_conversation.context_data.image_url, }
                    alt = {active_conversation.context_data.title || "Context", }
                    className="object - cover";
                    loading="lazy";

                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}

                    alt = {activeConversation.context_data.title || "Context",}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    className="object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>            )}
            <div>
              <div className="font-medium text-white mb-1">
                {activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className="text-zion-cyan font-medium">
                {activeConversation.context_data && activeConversation.context_data.title}
              </div>
              {activeConversation.context_data && activeConversation.context_data.description && (
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">
                  {activeConversation.context_data.description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
                {group.messages.map((message,) => (
                  <MessageBubble
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
                {group.messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />;
                ))}
              </div>;
            </div>;
          ));
        )}

        <div ref={messagesEndRef} />;
      </div>;

      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={inputRef}
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </form>
          />;
          <Button
            type="submit"
            className="bg-zion-purple hover: bg-zion-purple-dark text-white">;
              <div className="font - medium text - white mb - 1">;
                {active_conversation.context_type === 'job' ? 'Regarding Job:' :;
                active_conversation.context_type === 'talent' ? 'Regarding Talent:' :;
                'Regarding:'}
              </div>;
              <div className="text - zion - cyan font - medium">;
                {active_conversation.context_data && active_conversation.context_data.title}
              </div>;
              {active_conversation.context_data && active_conversation.context_data.description && (
                <div className="text - xs text - zion - slate mt - 1 line - clamp - 2">;
                  {active_conversation.context_data.description}
                </div>)}
            </div>;
          </div>;
        </div>)}
      {/* Messages */}
      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {grouped_messages.length === 0 ? (
          <div className="text - center text - zion - slate py - 12">;
            <p > No messages yet. Start the conversation!</p>;
          </div>) : (
          grouped_messages.map ((group, group_index, ) => (
            <div key={group.date}>;
              <DateDivider date={new Date (group.date)} />;
              <div className="space - y-3">;
                {group.messages.map ((message, ) => (
                  <MessageBubble;
                    key = {message.id, }
                    message = {message, }
                    isUserMessage = {message.sender_id === user?.id, }
                  />                ))}
              </div>;
            </div>)))}
        <div ref={messagesEndRef} />;
      </div>;
          <textarea;
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan";
            ref={inputRef}
          />;
          <Button;
            type="submit";
            className="bg-zion-purple hover: bg-zion-purple-dark text-white";
          >;
            Send;
          </Button>;
        </form>;
      </div>;

