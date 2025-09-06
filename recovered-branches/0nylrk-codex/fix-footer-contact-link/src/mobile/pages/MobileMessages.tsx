
import React, { useState } from "react",
import { MobileHeader } from "../components/common/MobileHeader",
import { BottomNavigation } from "../components/common/BottomNavigation",
import { MobileConversationList } from "../components/messaging/MobileConversationList";
import { MobileChatView } from "../components/messaging/MobileChatView";
// Mock data for demonstration
const mockConversations = null;
            status: "Online"
          }}
          messages={messages}
          onBack={handleBack}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <>
          <MobileHeader
            title="Messages"
          />
          
          <main className="flex-1 overflow-y-auto">
            <MobileConversationList
              conversations={mockConversations}
              onSelectConversation={handleSelectConversation}
            />
          </main>
          
          <BottomNavigation />
        </>
      )}
    </div>
  )
}
;