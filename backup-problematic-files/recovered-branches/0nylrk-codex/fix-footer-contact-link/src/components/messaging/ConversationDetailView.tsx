
    <div className="flex-1 flex flex-col h-full">;
      {/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">;
        <div className="flex items-center gap-3">;
          <Avatar className="h-10 w-10 border border-zion-purple/20">;

            </AvatarFallback>;
          </Avatar>;
          <div>;
            <div className="font-medium text-white">;

            </div>;
          </div>;
        </div>;
      </div>;

                  />;
                </AspectRatio>;
              </div>;
            )}
            <div>;
              <div className="font-medium text-white mb-1">;

            </div>;
          </div>;
        </div>;
      )}
      ;
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;

                  <MessageBubble;
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}

          >;
            Send;
          </Button>;
        </form>;
      </div>;

}