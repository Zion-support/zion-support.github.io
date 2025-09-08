
import React, { useMemo } from 'react';

    return (
      <div style={style}>
        <ConversationItem
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}

          onClick={() => onConversationSelect(conversation)}
        />
      </div>

