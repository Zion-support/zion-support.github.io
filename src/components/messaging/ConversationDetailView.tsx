</div>;
          </div>;
        </div>;
      </div>;

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
}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
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
